import { FeatureCard, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/feature-card";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";

export function FeatureCardShowcase() {
  return (
    <section>
      <h2 className="text-h3 font-bold mb-2">Feature Cards</h2>
      <p className="text-sm text-muted-foreground mb-8">
        Wrapper sobre shadcn Card con <code>shadow-ring-accent</code> (containment azul 15%) y
        hover lift de 2px. Prop <code>static</code> desactiva el hover.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: hover enabled */}
        <FeatureCard>
          <CardHeader>
            <CardTitle>Servicio Web</CardTitle>
            <CardDescription>
              Desarrollo de páginas web modernas, rápidas y optimizadas para móviles y SEO.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              React + TypeScript + Tailwind. Entrega en 3-4 semanas.
            </p>
          </CardContent>
        </FeatureCard>

        {/* Card 2: static (no hover) */}
        <FeatureCard static>
          <CardHeader>
            <CardTitle>Fotografía</CardTitle>
            <CardDescription>
              Sesiones profesionales para empresas, producto e inmobiliaria.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Este card tiene <code>static</code> — no responde a hover.
            </p>
          </CardContent>
        </FeatureCard>

        {/* Card 3: Heading inside + Button in footer */}
        <FeatureCard>
          <CardHeader>
            <Heading level={3} visualLevel={4} className="text-foreground">
              Consultoría Digital
            </Heading>
            <CardDescription>
              Estrategia digital para PYMEs de la Marina Alta.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Heading level=3 con visualLevel=4. Semántica H3, tamaño H4.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="ghost-accent" size="sm">Saber más</Button>
          </CardFooter>
        </FeatureCard>
      </div>

      <p className="mt-4 text-xs text-muted-foreground">
        La sombra ring-accent es sutil — crea containment claro sobre fondo oscuro sin competir con el contenido.
      </p>
    </section>
  );
}
