import { useTheme } from "next-themes";
import { ColorPalette } from "@/components/styleguide/ColorPalette";
import { ContrastChecker } from "@/components/styleguide/ContrastChecker";
import { TypographyScale } from "@/components/styleguide/TypographyScale";
import { ABTest } from "@/components/styleguide/ABTest";
import { HeadingShowcase } from "@/components/styleguide/HeadingShowcase";
import { ButtonsFormal } from "@/components/styleguide/ButtonsFormal";
import { FeatureCardShowcase } from "@/components/styleguide/FeatureCardShowcase";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-4 py-2 rounded-lg border border-border bg-card text-foreground text-sm font-semibold hover:bg-muted transition-colors"
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}

export default function Styleguide() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur border-b border-border px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold text-foreground">Studio Pixelens — Design System</h1>
            <p className="text-xs text-muted-foreground">Fase 3 sub-tarea 2 — dev only</p>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10 space-y-16">

        {/* 1. Color Palette */}
        <ColorPalette />

        {/* 2. Contrast Checker */}
        <ContrastChecker />

        {/* 3. Typography Scale */}
        <TypographyScale />

        {/* 4. A/B Tests */}
        <ABTest />

        {/* 5. Headings */}
        <HeadingShowcase />

        {/* 6. Buttons (formal) */}
        <ButtonsFormal />

        {/* 7. Feature Cards */}
        <FeatureCardShowcase />

        {/* 8. Semantic States */}
        <section>
          <h2 className="text-h3 font-bold mb-4">Semantic States</h2>
          <p className="text-sm text-muted-foreground mb-6">
            --info no existe como token. Usar --accent para info states.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="px-4 py-3 rounded-lg bg-success text-success-foreground text-sm font-semibold">
              Success — --success
            </div>
            <div className="px-4 py-3 rounded-lg bg-warning text-warning-foreground text-sm font-semibold">
              Warning — --warning
            </div>
            <div className="px-4 py-3 rounded-lg bg-destructive text-destructive-foreground text-sm font-semibold">
              Destructive — --destructive
            </div>
            <div className="px-4 py-3 rounded-lg bg-accent text-accent-foreground text-sm font-semibold">
              Info (alias --accent) — no token --info
            </div>
          </div>
        </section>

        {/* 7. Focus States Demo */}
        <section>
          <h2 className="text-h3 font-bold mb-4">Focus States</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Pulsa Tab para navegar. El outline aparece solo en :focus-visible, no con click de mouse.
          </p>
          <div className="flex flex-wrap gap-6 items-center">
            <button className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm">
              Boton (Tab aqui)
            </button>
            <a href="#focus-demo" className="text-accent underline text-sm font-semibold">
              Link (Tab aqui)
            </a>
            <input
              id="focus-demo"
              type="text"
              placeholder="Input (Tab aqui)"
              className="px-4 py-2 rounded-lg border border-input bg-background text-foreground text-sm"
            />
          </div>
        </section>

      </main>
    </div>
  );
}
