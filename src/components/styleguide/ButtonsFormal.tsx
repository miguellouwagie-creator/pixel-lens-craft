import { Button } from "@/components/ui/button";

export function ButtonsFormal() {
  return (
    <section>
      <h2 className="text-h3 font-bold mb-2">Buttons</h2>
      <p className="text-sm text-muted-foreground mb-1">
        Variantes DS formales (sub-tarea 2). Reemplazan los placeholders de sub-tarea 1.
      </p>
      <p className="text-xs text-muted-foreground mb-8">
        Hover y active (scale 0.985) se verifican interactuando con los botones.
        El prop <code>glow</code> solo aplica a <code>variant="primary"</code>.
      </p>

      <div className="space-y-6">
        {/* Row 1: primary + primary glow */}
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex flex-col gap-2 items-center">
            <Button variant="primary">Primary</Button>
            <span className="text-xs text-muted-foreground font-mono">primary</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Button variant="primary" glow>Primary + Glow</Button>
            <span className="text-xs text-muted-foreground font-mono">primary glow</span>
          </div>
        </div>

        {/* Row 2: accent + outline-primary */}
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex flex-col gap-2 items-center">
            <Button variant="accent">Accent</Button>
            <span className="text-xs text-muted-foreground font-mono">accent</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Button variant="outline-primary">Outline Primary</Button>
            <span className="text-xs text-muted-foreground font-mono">outline-primary</span>
          </div>
        </div>

        {/* Row 3: ghost-accent + disabled */}
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex flex-col gap-2 items-center">
            <Button variant="ghost-accent">Ghost Accent</Button>
            <span className="text-xs text-muted-foreground font-mono">ghost-accent</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Button variant="primary" disabled>Disabled</Button>
            <span className="text-xs text-muted-foreground font-mono">disabled</span>
          </div>
        </div>
      </div>

      <p className="mt-6 text-xs text-warning">
        Restriccion: --shadow-primary-glow solo aplica a CTA hero principal (uno por pagina) y CTA de cierre de seccion final (D33-3).
      </p>
    </section>
  );
}
