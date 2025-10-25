// src/components/ServiceSelector.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Settings, Camera, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import webBackground from "@/assets/Section1.jpg";
import photoBackground from "@/assets/Section3.jpg";

const ServiceSelector = () => {
  const { t } = useTranslation();

  // NAVEGACIÓN AL PORTFOLIO WEB
  const handleScrollToWeb = () => {
    const element = document.getElementById("horizontal-showcase");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // NAVEGACIÓN A FOTOGRAFÍA
  const handleScrollToPhoto = () => {
    const element =
      document.getElementById("photo-packs") ||
      document.getElementById("photo-pricing");

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      const sections = document.querySelectorAll("section");
      const photoSection = Array.from(sections).find((section) =>
        section.textContent?.includes("Fotografía y Edición"),
      );

      if (photoSection) {
        photoSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <section
      id="service-selector"
      className="sticky top-0 min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {/* FONDO DIVIDIDO - Desktop: dividido | Móvil: blend */}
      <div
        className="absolute top-0 left-0 bottom-0 w-full md:w-1/2"
        style={{ zIndex: 0 }}
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${webBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      <div
        className="absolute top-0 right-0 bottom-0 w-full md:w-1/2 md:opacity-100 opacity-50"
        style={{ zIndex: 0 }}
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${photoBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* LÍNEAS DIVISORIAS - Solo visible en desktop (md:block) */}
      <div
        className="hidden md:block absolute top-0 left-1/2 animate-pulse"
        style={{
          zIndex: 15,
          transform: "translateX(-0.5px)",
          width: "1px",
          height: "calc(50% - 180px)",
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,255,255,0.9))",
          boxShadow:
            "0 0 30px rgba(255, 255, 255, 0.8), 0 0 60px rgba(255, 255, 255, 0.4)",
        }}
      />

      <div
        className="hidden md:block absolute bottom-0 left-1/2 animate-pulse"
        style={{
          zIndex: 15,
          transform: "translateX(-0.5px)",
          width: "1px",
          height: "calc(50% - 100px)",
          background:
            "linear-gradient(to top, rgba(255,255,255,0.3), rgba(255,255,255,0.9))",
          boxShadow:
            "0 0 30px rgba(255, 255, 255, 0.8), 0 0 60px rgba(255, 255, 255, 0.4)",
        }}
      />

      {/* CONTENIDO */}
      <div className="w-full relative" style={{ zIndex: 10 }}>
        <div className="container mx-auto px-4">
          {/* TÍTULO */}
          <div className="flex justify-center mb-12 md:mb-16">
            <div
              className="inline-block px-6 py-4 md:px-12 md:py-6 rounded-3xl animate-fade-in-up"
              style={{
                background: "rgba(0, 0, 0, 0.5)",
                backdropFilter: "blur(20px)",
                border: "2px solid rgba(255, 255, 255, 0.2)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
              }}
            >
              <h2
                className="text-2xl md:text-4xl lg:text-6xl font-bold text-white text-center flex flex-col md:flex-row items-center gap-2 md:gap-4"
                style={{
                  textShadow:
                    "0 0 40px rgba(255, 255, 255, 0.5), 2px 4px 20px rgba(0, 0, 0, 0.9)",
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <Sparkles
                  className="h-6 w-6 md:h-10 md:w-10 text-yellow-400 animate-pulse"
                  style={{ filter: "drop-shadow(0 0 10px #fbbf24)" }}
                />
                ¿Qué Activo Digital Buscas Hoy?
                <Sparkles
                  className="h-6 w-6 md:h-10 md:w-10 text-yellow-400 animate-pulse"
                  style={{ filter: "drop-shadow(0 0 10px #fbbf24)" }}
                />
              </h2>
            </div>
          </div>

          {/* BOTONES - Móvil: columna centrada | Desktop: dos columnas */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-0 max-w-6xl mx-auto items-center">
            {/* Botón 1: Portfolio Web */}
            <div className="w-full flex justify-center md:justify-end items-center md:pr-8">
              <Button
                onClick={handleScrollToWeb}
                size="lg"
                className="group relative overflow-hidden text-white font-bold text-base md:text-lg lg:text-xl px-8 py-6 md:px-10 md:py-8 rounded-full transition-all duration-500 hover:scale-110 flex items-center justify-center gap-3 md:gap-4 min-h-[80px] md:min-h-[90px] w-full max-w-[380px] md:max-w-[420px]"
                style={{
                  background:
                    "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)",
                  boxShadow:
                    "0 10px 40px rgba(59, 130, 246, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.2)",
                  border: "2px solid rgba(255, 255, 255, 0.3)",
                  textShadow: "0 2px 10px rgba(0, 0, 0, 0.8)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                    animation: "shimmer 2s infinite",
                  }}
                />

                <Settings className="h-7 w-7 md:h-8 md:w-8 flex-shrink-0 relative z-10 group-hover:rotate-180 transition-transform duration-500" />
                <span className="leading-tight text-center md:text-left relative z-10">
                  Creación Web para Convertir (CRO)
                </span>
              </Button>
            </div>

            {/* Botón 2: Fotografía y Edición */}
            <div className="w-full flex justify-center md:justify-start items-center md:pl-8">
              <Button
                onClick={handleScrollToPhoto}
                size="lg"
                className="group relative overflow-hidden text-white font-bold text-base md:text-lg lg:text-xl px-8 py-6 md:px-10 md:py-8 rounded-full transition-all duration-500 hover:scale-110 flex items-center justify-center gap-3 md:gap-4 min-h-[80px] md:min-h-[90px] w-full max-w-[380px] md:max-w-[420px]"
                style={{
                  background:
                    "linear-gradient(135deg, #c2410c 0%, #ea580c 50%, #fb923c 100%)",
                  boxShadow:
                    "0 10px 40px rgba(234, 88, 12, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.2)",
                  border: "2px solid rgba(255, 255, 255, 0.3)",
                  textShadow: "0 2px 10px rgba(0, 0, 0, 0.8)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                    animation: "shimmer 2s infinite",
                  }}
                />

                <Camera className="h-7 w-7 md:h-8 md:w-8 flex-shrink-0 relative z-10 group-hover:scale-125 transition-transform duration-500" />
                <span className="leading-tight text-center md:text-left relative z-10">
                  Fotografía y Edición
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
};

export default ServiceSelector;
