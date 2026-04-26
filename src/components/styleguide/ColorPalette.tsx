import { useEffect, useState } from "react";

const TOKEN_NAMES = [
  "background",
  "foreground",
  "primary",
  "primary-foreground",
  "accent",
  "accent-foreground",
  "muted",
  "muted-foreground",
  "card",
  "card-foreground",
  "border",
  "success",
  "success-foreground",
  "warning",
  "warning-foreground",
  "destructive",
  "destructive-foreground",
];

function hslToHex(hsl: string): string {
  const parts = hsl.trim().split(/\s+/);
  if (parts.length < 3) return "#000000";
  const h = parseFloat(parts[0]);
  const s = parseFloat(parts[1]) / 100;
  const l = parseFloat(parts[2]) / 100;

  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

function getToken(name: string): string {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(`--${name}`)
    .trim();
}

interface SwatchData {
  name: string;
  hsl: string;
  hex: string;
}

export function ColorPalette() {
  const [swatches, setSwatches] = useState<SwatchData[]>([]);

  function readTokens() {
    setSwatches(
      TOKEN_NAMES.map((name) => {
        const hsl = getToken(name);
        return { name, hsl, hex: hslToHex(hsl) };
      }),
    );
  }

  useEffect(() => {
    readTokens();
    const observer = new MutationObserver(readTokens);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section>
      <h2 className="text-h3 font-bold mb-4">Color Palette</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {swatches.map(({ name, hsl, hex }) => (
          <div
            key={name}
            className="rounded-lg overflow-hidden border border-border bg-card"
          >
            <div
              className="h-16 w-full"
              style={{ background: `hsl(${hsl})` }}
            />
            <div className="p-2 text-xs">
              <p className="font-semibold text-foreground truncate">--{name}</p>
              <p className="text-muted-foreground">{hsl || "—"}</p>
              <p className="text-muted-foreground font-mono">{hex}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
