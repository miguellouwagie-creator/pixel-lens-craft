// src/pages/Index.tsx — Phase 4 placeholder. Phase 5 replaces with real content.
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import {
  FeatureCard,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/feature-card";

const Index = () => {
  return (
    <div>
      {/* ── 1 · HERO ─────────────────────────────────────────────── */}
      <section
        id="hero"
        className="py-20 md:py-24 min-h-[60vh] flex flex-col justify-center"
      >
        <div className="container mx-auto px-6 md:px-8">
          <Heading level={6} eyebrow className="mb-4 text-muted-foreground">
            Estudio digital · Dénia
          </Heading>
          <Heading level={1} className="mb-6 max-w-4xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt labore.
          </Heading>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Duis aute irure dolor
            in reprehenderit in voluptate velit.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="lg" glow>
              Lorem ipsum WhatsApp
            </Button>
            <Button variant="outline-primary" size="lg">
              Ver trabajo
            </Button>
          </div>
        </div>
      </section>

      {/* ── 2 · SERVICES ─────────────────────────────────────────── */}
      <section id="services" className="py-20 md:py-24 min-h-[60vh]">
        <div className="container mx-auto px-6 md:px-8">
          <Heading level={2} className="mb-4">
            Lorem ipsum dos disciplinas, un mismo estándar.
          </Heading>
          <p className="text-muted-foreground mb-12 max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard>
              <CardHeader>
                <Heading
                  level={6}
                  eyebrow
                  className="text-primary mb-2"
                >
                  01
                </Heading>
                <CardTitle>
                  <Heading level={3} visualLevel={4}>
                    Lorem ipsum desarrollo web.
                  </Heading>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam quis nostrud exercitation.
                </p>
              </CardContent>
            </FeatureCard>
            <FeatureCard>
              <CardHeader>
                <Heading
                  level={6}
                  eyebrow
                  className="text-primary mb-2"
                >
                  02
                </Heading>
                <CardTitle>
                  <Heading level={3} visualLevel={4}>
                    Lorem ipsum fotografía profesional.
                  </Heading>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Corporativa, eventos, inmobiliaria, producto.
                </p>
              </CardContent>
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* ── 3 · CASES WEB ────────────────────────────────────────── */}
      <section id="cases-web" className="py-20 md:py-24 min-h-[60vh]">
        <div className="container mx-auto px-6 md:px-8">
          <Heading level={2} className="mb-4">
            Lorem ipsum casos de estudio web.
          </Heading>
          <p className="text-muted-foreground mb-12 max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(
              [
                { n: "01", sector: "Lorem ipsum · Sector A" },
                { n: "02", sector: "Lorem ipsum · Sector B" },
                { n: "03", sector: "Lorem ipsum · Sector C" },
              ] as const
            ).map(({ n, sector }) => (
              <FeatureCard key={n}>
                <CardHeader>
                  <Heading
                    level={6}
                    eyebrow
                    className="text-muted-foreground mb-1"
                  >
                    {sector}
                  </Heading>
                  <CardTitle>
                    <Heading level={3} visualLevel={4}>
                      Lorem ipsum tagline {n}.
                    </Heading>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                </CardContent>
              </FeatureCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4 · CASES PHOTO ──────────────────────────────────────── */}
      <section id="cases-photo" className="py-20 md:py-24 min-h-[60vh]">
        <div className="container mx-auto px-6 md:px-8">
          <Heading level={2} className="mb-4">
            Lorem ipsum imagen antes, imagen después.
          </Heading>
          <p className="text-muted-foreground mb-12 max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <div className="aspect-video w-full bg-muted rounded-lg" />
        </div>
      </section>

      {/* ── 5 · PROCESS ──────────────────────────────────────────── */}
      <section id="process" className="py-20 md:py-24 min-h-[60vh]">
        <div className="container mx-auto px-6 md:px-8">
          <Heading level={2} className="mb-12">
            Lorem ipsum un proceso claro, sin sorpresas.
          </Heading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {(["01", "02", "03", "04"] as const).map((n) => (
              <div key={n} className="space-y-3">
                <Heading level={6} eyebrow className="text-primary">
                  {n}
                </Heading>
                <Heading level={3} visualLevel={4}>
                  Lorem ipsum paso {n}.
                </Heading>
                <p className="text-muted-foreground text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6 · ABOUT ────────────────────────────────────────────── */}
      <section id="about" className="py-20 md:py-24 min-h-[60vh]">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Heading level={2}>Lorem ipsum quiénes somos.</Heading>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-muted-foreground">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident sunt in culpa.
              </p>
            </div>
            <div className="aspect-square w-full bg-muted rounded-lg" />
          </div>
        </div>
      </section>

      {/* ── 7 · TESTIMONIALS ─────────────────────────────────────── */}
      <section id="testimonials" className="py-20 md:py-24 min-h-[60vh]">
        <div className="container mx-auto px-6 md:px-8">
          <Heading level={2} className="mb-12">
            Lorem ipsum lo que dicen.
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(["01", "02", "03"] as const).map((n) => (
              <FeatureCard key={n} static>
                <CardContent className="pt-6 space-y-4">
                  <p className="text-muted-foreground italic">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua."
                  </p>
                  <Heading level={6} eyebrow className="text-primary">
                    Lorem Ipsum {n}
                  </Heading>
                </CardContent>
              </FeatureCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8 · CONTACT ──────────────────────────────────────────── */}
      <section id="contact" className="py-20 md:py-24 min-h-[60vh]">
        <div className="container mx-auto px-6 md:px-8">
          <Heading level={2} className="mb-4">
            Lorem ipsum hablemos.
          </Heading>
          <p className="text-muted-foreground mb-12 max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <input
                disabled
                placeholder="Lorem ipsum nombre"
                className="w-full rounded-md border border-input bg-muted px-4 py-3 text-sm text-muted-foreground cursor-not-allowed"
              />
              <input
                disabled
                placeholder="lorem@ipsum.com"
                className="w-full rounded-md border border-input bg-muted px-4 py-3 text-sm text-muted-foreground cursor-not-allowed"
              />
              <textarea
                disabled
                rows={4}
                placeholder="Lorem ipsum dolor sit amet..."
                className="w-full rounded-md border border-input bg-muted px-4 py-3 text-sm text-muted-foreground cursor-not-allowed resize-none"
              />
              <Button variant="primary" size="lg" disabled className="w-full">
                Lorem ipsum enviar
              </Button>
            </div>
            <div className="space-y-3 text-muted-foreground">
              <p className="font-medium text-foreground">
                Lorem ipsum datos de contacto
              </p>
              <p>lorem@ipsum.com</p>
              <p>+34 600 000 000</p>
              <p>Lorem ipsum, Dénia, Alicante</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
