import { Button } from "@/components/ui/button";
import { CheckCircle2, MessageCircle, Award } from "lucide-react";
import { useTranslation } from "react-i18next";
import heroBackground from "@/assets/Fondo5.png";

const Hero = () => {
  const { t } = useTranslation();
  const whatsappNumber = "34667326300";
  const whatsappMessage = "Hola, estoy interesado en vuestros servicios";

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 md:pt-20"
      style={{ backgroundColor: '#000' }}
    >
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      <div 
        className="absolute inset-0" 
        style={{
          background: 'linear-gradient(to right, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 35%, transparent 60%)'
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-2xl">
          <div className="text-white animate-fade-in-up">
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight"
              style={{
                textShadow: '2px 4px 8px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.5)'
              }}
            >
              {t("hero.title")}
              <br />
              <span className="text-cta">{t("hero.titleHighlight")}</span>
            </h1>

            <p 
              className="text-2xl md:text-3xl mb-6 text-white font-medium"
              style={{
                textShadow: '1px 2px 6px rgba(0, 0, 0, 0.8)'
              }}
            >
              {t("hero.subtitle")}
            </p>

            <p 
              className="text-lg md:text-xl mb-10 text-white leading-relaxed"
              style={{
                textShadow: '1px 2px 4px rgba(0, 0, 0, 0.7)'
              }}
            >
              {t("hero.description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button
                size="lg"
                className="bg-cta hover:bg-cta/90 text-white font-semibold text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-cta/50 transition-all duration-300 hover:scale-105"
                onClick={() => {
                  window.open(
                    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
                    "_blank"
                  );
                }}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                {t("hero.ctaWhatsapp")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
                onClick={() => {
                  document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {t("hero.ctaServices")}
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-cta flex-shrink-0" style={{filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))'}} />
                <span className="text-white font-medium" style={{textShadow: '1px 2px 4px rgba(0, 0, 0, 0.5)'}}>{t("hero.benefit1")}</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-cta flex-shrink-0" style={{filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))'}} />
                <span className="text-white font-medium" style={{textShadow: '1px 2px 4px rgba(0, 0, 0, 0.5)'}}>{t("hero.benefit2")}</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6 text-cta flex-shrink-0" style={{filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))'}} />
                <span className="text-white font-medium" style={{textShadow: '1px 2px 4px rgba(0, 0, 0, 0.5)'}}>{t("hero.benefit3")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
