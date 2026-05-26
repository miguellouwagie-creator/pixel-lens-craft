"""
Playwright smoke test — /portfolio REBUILD (Subfase 5.5a).

Runner:
python scripts/with_server.py --server "npm run dev" --port 5173 -- python tests/portfolio_smoke.py
"""

from playwright.sync_api import sync_playwright

BASE = "http://localhost:5173"
PASS = 0
FAIL = 0


def check(label: str, condition: bool, detail: str = "") -> None:
    global PASS, FAIL
    if condition:
        PASS += 1
        print(f"  PASS  {label}")
    else:
        FAIL += 1
        msg = f"  FAIL  {label}"
        if detail:
            msg += f" -- {detail}"
        print(msg)


def run_tests() -> None:
    with sync_playwright() as p:
        browser = p.chromium.launch()
        browser_context = browser.new_context(locale="es-ES")
        page = browser_context.new_page()

        # 1. /portfolio carga 200
        response = page.goto(f"{BASE}/portfolio")
        check("1. /portfolio HTTP 200", response is not None and response.status == 200,
              f"status={response.status if response else 'None'}")
        page.wait_for_load_state("networkidle")

        # 2. H1 visible con texto de portfolio.header.headline (ES)
        headline_es = "Cada imagen cuenta mejor cuando est"
        page.wait_for_selector("h1", timeout=10000)
        h1 = page.locator("h1").first
        h1_visible = h1.is_visible()
        h1_text = h1.text_content() if h1_visible else ""
        check(
            "2. H1 visible con headline ES",
            h1_visible and headline_es in (h1_text or ""),
            f"text='{(h1_text or '')[:80]}'",
        )

        # 3. 9 sliders react-compare-slider en DOM
        # react-compare-slider renders root container with data-rcs="root"
        page.wait_for_selector('[data-rcs="root"]', timeout=10000)
        sliders = page.locator('[data-rcs="root"]')
        slider_count = sliders.count()
        check("3. 9 sliders presentes en DOM", slider_count == 9,
              f"count={slider_count}")

        # 4. Primer slider interactuable (handle draggable visible)
        handles = page.locator('[data-rcs="handle-root"]')
        if handles.count() > 0:
            first_handle = handles.first
            check("4. Primer slider handle visible", first_handle.is_visible())
        else:
            check("4. Primer slider handle visible", False, "no handles found")

        # 5. Botón WhatsApp del closing con href wa.me/ o api.whatsapp.com/send
        wa_links = page.locator("a[href*='wa.me'], a[href*='api.whatsapp.com/send']")
        wa_count = wa_links.count()
        check("5. Boton WhatsApp closing (href wa.me)", wa_count >= 1,
              f"found {wa_count} wa links")

        # 6. Link cross "Ver portfolio web →" apunta a /portfolio-webs
        cross_link = page.locator('a[href="/portfolio-webs"]')
        check("6. Link cross href=/portfolio-webs visible",
              cross_link.count() > 0 and cross_link.first.is_visible())

        browser_context.close()
        browser.close()

    total = PASS + FAIL
    print(f"\n{'='*40}")
    print(f"Results: {PASS}/{total} passed")
    if FAIL > 0:
        print(f"FAILED: {FAIL} assertion(s)")
        raise SystemExit(1)
    print("All portfolio smoke tests passed!")


if __name__ == "__main__":
    run_tests()
