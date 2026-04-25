#!/usr/bin/env python3
"""
Dev server runner for Playwright tests.

Starts a server process, waits for it to respond on the given port,
executes the specified command, then shuts down the server.

Exit code equals the exit code of the executed command.

Usage:
    python scripts/with_server.py --server "npm run dev" --port 5173 -- python your_test.py
"""

import argparse
import subprocess
import sys
import time
import urllib.error
import urllib.request


def wait_for_server(port: int, timeout: int = 60) -> bool:
    url = f"http://localhost:{port}"
    deadline = time.time() + timeout
    while time.time() < deadline:
        try:
            urllib.request.urlopen(url, timeout=2)
            return True
        except (urllib.error.URLError, OSError):
            time.sleep(0.5)
    return False


def main() -> int:
    parser = argparse.ArgumentParser(
        description=(
            "Start a dev server, wait for readiness, run a command, then shut down. "
            "Separate the server command from the test command with '--'."
        )
    )
    parser.add_argument(
        "--server",
        required=True,
        help="Shell command to start the dev server (e.g. 'npm run dev')",
    )
    parser.add_argument(
        "--port",
        type=int,
        required=True,
        help="Port to poll for server readiness (HTTP 200 expected)",
    )
    parser.add_argument(
        "cmd",
        nargs=argparse.REMAINDER,
        help="Command to run once the server is ready (after '--')",
    )
    args = parser.parse_args()

    cmd = args.cmd
    if cmd and cmd[0] == "--":
        cmd = cmd[1:]

    if not cmd:
        parser.error("No command provided after '--'. Example: -- python your_test.py")

    server_proc = subprocess.Popen(
        args.server,
        shell=True,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )

    exit_code = 1
    try:
        print(f"Waiting for server on http://localhost:{args.port} ...", flush=True)
        if not wait_for_server(args.port):
            print(
                f"ERROR: server did not respond on port {args.port} within 60s",
                file=sys.stderr,
            )
            return 1

        print(f"Server ready. Running: {' '.join(cmd)}", flush=True)
        result = subprocess.run(cmd)
        exit_code = result.returncode
    finally:
        server_proc.terminate()
        try:
            server_proc.wait(timeout=5)
        except subprocess.TimeoutExpired:
            server_proc.kill()
            server_proc.wait()

    return exit_code


if __name__ == "__main__":
    sys.exit(main())
