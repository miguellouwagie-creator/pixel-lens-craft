// src/components/Hero.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, Settings, Camera } from "lucide-react";
import { useTranslation } from "react-i18next";
import heroVideo from "@/assets/Fondo Vid.mp4";

const Hero = () => {
  const { t } = useTranslation();

  const handleScrollToWeb = () => {
    const element = document.getElementById("web-service");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToPhoto = () => {
    const element = document.getElementById("photo-service");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero-section"
      className="sticky top-0 h-screen flex items-center overflow-hidden pt-32 md:pt-36"
      style={{ zIndex: 0 }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-video-background"
        src={heroVideo}
      >
        Tu navegador no soporta el tag de video.
      </video>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.2) 70%)",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl lg:max-w-2xl">
          <div className="text-white animate-fade-in-up">
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight"
              style={{
                textShadow: "2px 4px 8px rgba(0, 0, 0, 0.6)",
              }}
            >
              {t("hero.title")}
              <br />
              <span className="text-cta">{t("hero.titleHighlight")}</span>
            </h1>

            <p
              className="text-2xl md:text-3xl mb-6 text-white font-medium"
              style={{
                textShadow: "1px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              {t("hero.subtitle")}
            </p>

            <p
              className="text-lg md:text-xl mb-10 text-white leading-relaxed"
              style={{
                textShadow: "1px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              {t("hero.description")}
            </p>

            {/* ========================================== */}
            {/* ÍNDICE DE SERVICIOS DUAL (ÚNICO CTA)     */}
            {/* ========================================== */}
            <div className="service-index-container mb-10">
              {/* Título guía */}
              <h2
                className="service-index-title text-2xl md:text-3xl font-semibold text-white mb-6 text-center"
                style={{
                  textShadow: "2px 4px 8px rgba(0, 0, 0, 0.6)",
                }}
              >
                {t("hero.serviceIndexTitle")}
              </h2>

              {/* Contenedor de botones */}
              <div className="service-index-buttons flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
                {/* Botón 1: Creación Web (Primario - Naranja) */}
                <Button
                  onClick={handleScrollToWeb}
                  size="lg"
                  className="service-btn service-btn--primary bg-cta hover:bg-cta/90 text-white font-semibold text-base md:text-lg px-6 py-6 rounded-full shadow-2xl hover:shadow-cta/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 min-h-[70px]"
                  style={{
                    border: "2px solid transparent",
                  }}
                >
                  <Settings className="service-btn__icon h-6 w-6 flex-shrink-0" />
                  <span className="leading-tight">
                    {t("hero.serviceIndexBtn1Text")}
                  </span>
                </Button>

                {/* Botón 2: Fotografía (Secundario - Outline) */}
                <Button
                  onClick={handleScrollToPhoto}
                  size="lg"
                  variant="outline"
                  className="service-btn service-btn--secondary border-2 border-white text-white hover:bg-white hover:text-primary font-semibold text-base md:text-lg px-6 py-6 rounded-full transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 min-h-[70px]"
                >
                  <Camera className="service-btn__icon h-6 w-6 flex-shrink-0" />
                  <span className="leading-tight">
                    {t("hero.serviceIndexBtn2Text")}
                  </span>
                </Button>
              </div>
            </div>
            {/* ========================================== */}
            {/* FIN ÍNDICE DE SERVICIOS DUAL              */}
            {/* ========================================== */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-md lg:max-w-lg">
              <div className="flex items-center gap-2">
                <CheckCircle2
                  className="h-5 w-5 text-cta flex-shrink-0"
                  style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.4))" }}
                />
                <span
                  className="text-white font-medium text-sm"
                  style={{ textShadow: "1px 2px 4px rgba(0, 0, 0, 0.5)" }}
                >
                  {t("hero.benefit1")}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2
                  className="h-5 w-5 text-cta flex-shrink-0"
                  style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.4))" }}
                />
                <span
                  className="text-white font-medium text-sm"
                  style={{ textShadow: "1px 2px 4px rgba(0, 0, 0, 0.5)" }}
                >
                  {t("hero.benefit2")}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Award
                  className="h-5 w-5 text-cta flex-shrink-0"
                  style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.4))" }}
                />
                <span
                  className="text-white font-medium text-sm"
                  style={{ textShadow: "1px 2px 4px rgba(0, 0, 0, 0.5)" }}
                >
                  {t("hero.benefit3")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
