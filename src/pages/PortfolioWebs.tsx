// src/pages/PortfolioWebs.tsx — Phase 4 placeholder. Phase 5 replaces with real content.
import { Link } from "react-router-dom";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import {
  FeatureCard,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/feature-card";

const PortfolioWebs = () => {
  return (
    <div>
      {/* ── BLOQUE A · HEADER EDITORIAL ──────────────────────────── */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <Heading level={6} eyebrow className="mb-4 text-muted-foreground">
            Portfolio web
          </Heading>
          <Heading level={1} className="mb-6 max-w-3xl">
            Lorem ipsum desarrollo web para negocios que quieren crecer.
          </Heading>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Duis aute irure dolor
            in reprehenderit in voluptate velit.
          </p>
        </div>
      </section>

      {/* ── BLOQUE B · INTRO METODOLÓGICA ────────────────────────── */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-2xl">
            <Heading level={2} className="mb-6">
              Lorem ipsum metodología y proceso.
            </Heading>
            <p className="text-muted-foreground mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-muted-foreground">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit.
            </p>
          </div>
        </div>
      </section>

      {/* ── BLOQUE C · 3 CASOS PLACEHOLDER ──────────────────────── */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <Heading level={2} className="mb-12">
            Lorem ipsum casos de estudio.
          </Heading>
          <div className="space-y-16">
            {(
              [
                { n: "01", sector: "Lorem ipsum · Turismo local" },
                { n: "02", sector: "Lorem ipsum · Servicios industriales" },
                { n: "03", sector: "Lorem ipsum · Fitness local" },
              ] as const
            ).map(({ n, sector }) => (
              <div key={n} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="aspect-video w-full bg-muted rounded-lg" />
                <FeatureCard static>
                  <CardHeader>
                    <Heading
                      level={6}
                      eyebrow
                      className="text-muted-foreground mb-2"
                    >
                      {sector}
                    </Heading>
                    <CardTitle>
                      <Heading level={3} visualLevel={3}>
                        Lorem ipsum caso {n}.
                      </Heading>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam quis nostrud exercitation
                      ullamco laboris nisi ut aliquip.
                    </p>
                  </CardContent>
                </FeatureCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOQUE D · CIERRE + CTA + CROSS-LINK ─────────────────── */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <Heading level={2} className="mb-4">
            Lorem ipsum ¿hablamos de tu proyecto?
          </Heading>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="primary" size="lg" glow>
              Lorem ipsum contactar
            </Button>
            <Button variant="outline-primary" size="lg" asChild>
              <Link to="/portfolio">Ver portfolio fotográfico</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioWebs;
