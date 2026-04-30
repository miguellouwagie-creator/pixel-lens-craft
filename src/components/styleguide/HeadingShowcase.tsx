import { Heading } from "@/components/ui/heading";

const levels = [1, 2, 3, 4, 5, 6] as const;
const sampleText: Record<number, string> = {
  1: "Diseño que transforma negocios",
  2: "Fotografía que cuenta historias",
  3: "Servicio personalizado y cercano",
  4: "Calidad garantizada en cada proyecto",
  5: "Atención al detalle en cada pixel",
  6: "Marina Alta · Dénia · Valencia",
};

export function HeadingShowcase() {
  return (
    <section>
      <h2 className="text-h3 font-bold mb-2">Headings</h2>
      <p className="text-sm text-muted-foreground mb-8">
        H1–H2 usan Playfair Display (font-display). H3–H6 usan Inter (font-sans).
        Escalado con clamp() en H1–H3.
      </p>

      <div className="space-y-8">
        {levels.map((level) => (
          <div key={level} className="flex items-baseline gap-6 border-b border-border pb-6 last:border-0 last:pb-0">
            <span className="text-xs font-mono text-muted-foreground w-8 shrink-0 pt-1">
              h{level}
            </span>
            <Heading level={level}>
              {sampleText[level]}
            </Heading>
          </div>
        ))}

        <div className="border-t border-dashed border-border pt-8 space-y-6">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-wide">
            Override visual (visualLevel)
          </p>

          <div className="flex items-baseline gap-6 border-b border-border pb-6">
            <span className="text-xs font-mono text-muted-foreground w-8 shrink-0 pt-1">
              h2
            </span>
            <div>
              <Heading level={2} visualLevel={1}>
                Tamaño H1, etiqueta H2
              </Heading>
              <p className="text-xs text-muted-foreground mt-1">
                <code>level=2 visualLevel=1</code> — renderiza{" "}
                <code>&lt;h2&gt;</code> con estilos de H1
              </p>
            </div>
          </div>

          <div className="flex items-baseline gap-6">
            <span className="text-xs font-mono text-muted-foreground w-8 shrink-0 pt-1">
              h6
            </span>
            <div>
              <Heading level={6} eyebrow>
                Eyebrow Label · Studio Pixelens
              </Heading>
              <p className="text-xs text-muted-foreground mt-1">
                <code>level=6 eyebrow</code> — uppercase + tracking ancho
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
