import { useEffect, useState } from "react";

function getToken(name: string): string {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(`--${name}`)
    .trim();
}

function hslToRgb(hsl: string): [number, number, number] {
  const parts = hsl.trim().split(/\s+/);
  if (parts.length < 3) return [0, 0, 0];
  const h = parseFloat(parts[0]);
  const s = parseFloat(parts[1]) / 100;
  const l = parseFloat(parts[2]) / 100;

  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  };
  return [f(0), f(8), f(4)];
}

function relativeLuminance(hsl: string): number {
  const [r, g, b] = hslToRgb(hsl);
  const linearize = (c: number) =>
    c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  return 0.2126 * linearize(r) + 0.7152 * linearize(g) + 0.0722 * linearize(b);
}

function contrastRatio(fg: string, bg: string): number {
  const L1 = relativeLuminance(fg);
  const L2 = relativeLuminance(bg);
  const [lighter, darker] = L1 > L2 ? [L1, L2] : [L2, L1];
  return (lighter + 0.05) / (darker + 0.05);
}

const PAIRS: Array<[string, string]> = [
  ["foreground", "background"],
  ["primary", "background"],
  ["primary-foreground", "primary"],
  ["muted-foreground", "background"],
  ["accent", "background"],
  ["accent-foreground", "accent"],
  ["card-foreground", "card"],
  ["destructive-foreground", "destructive"],
  ["success-foreground", "success"],
  ["warning-foreground", "warning"],
];

function ratingLabel(ratio: number): { label: string; className: string } {
  if (ratio >= 7) return { label: "AAA", className: "bg-success text-success-foreground" };
  if (ratio >= 4.5) return { label: "AA", className: "bg-success/70 text-success-foreground" };
  if (ratio >= 3) return { label: "AA Large", className: "bg-warning text-warning-foreground" };
  return { label: "FAIL", className: "bg-destructive text-destructive-foreground" };
}

interface Row {
  fg: string;
  bg: string;
  ratio: number;
}

export function ContrastChecker() {
  const [rows, setRows] = useState<Row[]>([]);

  function compute() {
    setRows(
      PAIRS.map(([fg, bg]) => ({
        fg,
        bg,
        ratio: contrastRatio(getToken(fg), getToken(bg)),
      })),
    );
  }

  useEffect(() => {
    compute();
    const observer = new MutationObserver(compute);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section>
      <h2 className="text-h3 font-bold mb-4">Contrast Checker (WCAG)</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-border text-left text-muted-foreground">
              <th className="py-2 pr-4">Foreground</th>
              <th className="py-2 pr-4">Background</th>
              <th className="py-2 pr-4">Ratio</th>
              <th className="py-2">Rating</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(({ fg, bg, ratio }) => {
              const { label, className } = ratingLabel(ratio);
              return (
                <tr key={`${fg}/${bg}`} className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">--{fg}</td>
                  <td className="py-2 pr-4 font-mono text-xs">--{bg}</td>
                  <td className="py-2 pr-4 tabular-nums">{ratio.toFixed(2)}:1</td>
                  <td className="py-2">
                    <span className={`px-2 py-0.5 rounded text-xs font-semibold ${className}`}>
                      {label}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        Note: <code>--primary/--background</code> passes AA (6.00:1) for normal text but fails AAA. Use{" "}
        <code>--primary</code> as surface accent (CTAs, badges, icons) or for large text only. For body
        text use <code>--foreground</code> or <code>--muted-foreground</code>.
      </p>
    </section>
  );
}
