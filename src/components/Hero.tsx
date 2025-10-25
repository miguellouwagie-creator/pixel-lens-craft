// src/components/Hero.tsx
import React from "react";
import { CheckCircle2, Award } from "lucide-react";
import { useTranslation } from "react-i18next";
import heroVideo from "@/assets/Fondo Vid.mp4";

const Hero = () => {
  const { t } = useTranslation();

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
              <span className="text-cta">& {t("hero.titleHighlight")}</span>
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

            {/* Beneficios (3 puntos) */}
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
