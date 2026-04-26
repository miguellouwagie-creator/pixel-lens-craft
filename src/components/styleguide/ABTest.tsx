const SAMPLE_H1 = "Transformamos la imagen digital de tu negocio";
const SAMPLE_BODY = "Agencia digital local especializada en paginas web y fotografia profesional para PYMEs de Denia y Marina Alta.";

export function ABTest() {
  return (
    <section className="space-y-10">
      <h2 className="text-h3 font-bold">A/B Tests</h2>

      {/* A/B 1: Playfair weight 800 vs 900 in dark */}
      <div>
        <h3 className="text-h5 font-semibold mb-1">A/B 1 — Playfair weight dark</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Ambas columnas forzadas a dark. Decide cual se lee mejor a tamano grande antes de cerrar G3.
        </p>
        <div className="dark grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl p-6 bg-[hsl(220_30%_6%)] border border-[hsl(220_20%_16%)]">
            <p className="text-xs text-[hsl(220_9%_65%)] mb-3 uppercase tracking-wider">Variante A — weight 800</p>
            <p
              className="font-display leading-none text-[hsl(0_0%_98%)]"
              style={{ fontSize: "clamp(2.75rem, 6vw + 1rem, 5.5rem)", fontWeight: 800, letterSpacing: "-0.02em" }}
            >
              {SAMPLE_H1}
            </p>
          </div>
          <div className="rounded-xl p-6 bg-[hsl(220_30%_6%)] border border-[hsl(220_20%_16%)]">
            <p className="text-xs text-[hsl(220_9%_65%)] mb-3 uppercase tracking-wider">Variante B — weight 900</p>
            <p
              className="font-display leading-none text-[hsl(0_0%_98%)]"
              style={{ fontSize: "clamp(2.75rem, 6vw + 1rem, 5.5rem)", fontWeight: 900, letterSpacing: "-0.02em" }}
            >
              {SAMPLE_H1}
            </p>
          </div>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Decision pendiente: registrar en MASTER §3.2 tras G3.
        </p>
      </div>

      {/* A/B 2: Gradient hero variants */}
      <div>
        <h3 className="text-h5 font-semibold mb-1">A/B 2 — Gradient hero</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Variante A (default): 80%x60% al 10% opacidad. Variante B (tight): 50%x40% al 13%.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className="relative rounded-xl h-80 flex flex-col justify-end p-6 border border-border overflow-hidden bg-card"
            style={{ backgroundImage: "var(--gradient-hero)" }}
          >
            <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">Variante A — 80%x60% @ 10%</p>
            <p className="text-h4 font-display font-bold">{SAMPLE_H1}</p>
            <p className="text-body text-muted-foreground mt-2">{SAMPLE_BODY}</p>
          </div>
          <div
            className="relative rounded-xl h-80 flex flex-col justify-end p-6 border border-border overflow-hidden bg-card"
            style={{ backgroundImage: "var(--gradient-hero-tight)" }}
          >
            <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">Variante B — 50%x40% @ 13%</p>
            <p className="text-h4 font-display font-bold">{SAMPLE_H1}</p>
            <p className="text-body text-muted-foreground mt-2">{SAMPLE_BODY}</p>
          </div>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Decision pendiente: registrar en MASTER §3.1 tras G3. El sistema usa --gradient-hero (A) por defecto.
        </p>
      </div>
    </section>
  );
}
