import { Button } from "@/components/ui/button";
import { CheckCircle2, MessageCircle, Award } from "lucide-react";
import { useTranslation } from "react-i18next";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const { t } = useTranslation();
  const whatsappNumber = "34667326300";
  const whatsappMessage = "Hola, estoy interesado en vuestros servicios";

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-primary via-primary to-primary/90 overflow-hidden pt-20"
    >
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in-up">
            {/* Título */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              {t("hero.title")}
              <br />
              <span className="text-cta">{t("hero.titleHighlight")}</span>
            </h1>

            {/* Subtítulo */}
            <p className="text-2xl md:text-3xl mb-8 text-white font-medium">
              {t("hero.subtitle")}
            </p>

            <p className="text-lg md:text-xl mb-10 text-white/90 leading-relaxed max-w-xl">
              {t("hero.description")}
            </p>

            {/* CTAs simples */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                variant="cta"
                size="xl"
                className="hover:scale-105 transition-transform text-lg"
                asChild
              >
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  {t("hero.ctaWhatsapp")}
                </a>
              </Button>
              <Button
                variant="outlineWhite"
                size="xl"
                className="hover:scale-105 transition-transform text-lg"
                asChild
              >
                <a href="#servicios">{t("hero.ctaServices")}</a>
              </Button>
            </div>

            {/* Beneficios clave - ACTUALIZADO CON "Profesionales licenciados" */}
            <div className="flex flex-wrap gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-cta flex-shrink-0" />
                <span>{t("hero.benefit1")}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-cta flex-shrink-0" />
                <span>{t("hero.benefit2")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-cta flex-shrink-0" />
                <span className="font-semibold">{t("hero.benefit3")}</span>
              </div>
            </div>
          </div>

          {/* Imagen simple */}
          <div className="relative animate-fade-in order-first lg:order-last">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Desarrollo web y fotografía profesional para negocios"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
