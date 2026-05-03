// src/pages/Portfolio.tsx — Phase 4 placeholder. Phase 5 replaces with real content.
import { Link } from "react-router-dom";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  return (
    <div>
      {/* ── BLOQUE A · HEADER EDITORIAL ──────────────────────────── */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <Heading level={6} eyebrow className="mb-4 text-muted-foreground">
            Portfolio fotográfico
          </Heading>
          <Heading level={1} className="mb-6 max-w-3xl">
            Lorem ipsum imagen que cuenta lo que tienes que contar.
          </Heading>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Duis aute irure dolor
            in reprehenderit in voluptate velit.
          </p>
        </div>
      </section>

      {/* ── BLOQUE B · INTRO CONTEXTUAL ──────────────────────────── */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-2xl">
            <Heading level={2} className="mb-6">
              Lorem ipsum tratamiento editorial de cada imagen.
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

      {/* ── BLOQUE C · GALERÍA PLACEHOLDER ───────────────────────── */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <Heading level={2} className="mb-8">
            Lorem ipsum galería de trabajo.
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 9 }, (_, i) => (
              <div
                key={i}
                className="aspect-[4/3] w-full bg-muted rounded-lg"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOQUE D · CIERRE + CTA + CROSS-LINK ─────────────────── */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <Heading level={2} className="mb-4">
            Lorem ipsum ¿te gusta lo que ves?
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
              <Link to="/portfolio-webs">Ver portfolio web</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
