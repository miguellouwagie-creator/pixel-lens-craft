// src/components/HorizontalShowcase.tsx
import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { showcaseProjects } from "@/data/showcaseData";
import ProjectCard from "./ProjectCard";
import FloatingElements from "./FloatingElements";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Registrar plugin GSAP
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HorizontalShowcase: React.FC = () => {
  const { t } = useTranslation();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.offsetWidth;
      const index = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(index);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Animación GSAP para título y subtítulo
  useEffect(() => {
    if (titleRef.current && subtitleRef.current) {
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        subtitleRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none none",
          },
        },
      );
    }
  }, []);

  // Mouse tracking para el fondo 3D
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 100;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 100;

      setMousePosition({ x, y });
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (section) {
        section.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const scrollToProject = (index: number) => {
    if (!scrollContainerRef.current) return;
    const cardWidth = scrollContainerRef.current.offsetWidth;
    scrollContainerRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
    setCurrentIndex(index);
  };

  return (
    <section
      id="horizontal-showcase" // ⬅️ ID AÑADIDO PARA NAVEGACIÓN
      ref={sectionRef}
      className="horizontal-showcase relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 md:py-24 overflow-hidden"
    >
      {/* Overlay oscuro para contraste */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Elementos flotantes 3D */}
      <div className="absolute inset-0 z-0">
        <FloatingElements mouseX={mousePosition.x} mouseY={mousePosition.y} />
      </div>

      {/* Contenido */}
      <div className="relative z-10">
        {/* TÍTULO EN DOS LÍNEAS CON "CONVERTIR" EN LA SEGUNDA */}
        <div className="container mx-auto px-4 mb-12 text-center">
          <h2
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight"
          >
            {t("portfolioShowcase.header.mainTitle")}
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 bg-clip-text text-transparent">
              {t("portfolioShowcase.header.highlightWord")}
            </span>
          </h2>

          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-blue-200 leading-relaxed max-w-3xl mx-auto"
          >
            {t("portfolioShowcase.header.subtitle")}
          </p>

          {/* Línea decorativa */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-orange-500"></div>
            <Star className="h-5 w-5 text-orange-500 fill-orange-500" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-orange-500"></div>
          </div>
        </div>

        {/* Contenedor con scroll horizontal */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth"
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {showcaseProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                isActive={index === currentIndex}
              />
            ))}
          </div>

          {/* Controles de navegación para desktop */}
          <div className="hidden md:block">
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg border-2"
              onClick={() => scrollToProject(Math.max(0, currentIndex - 1))}
              disabled={currentIndex === 0}
              aria-label="Proyecto anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg border-2"
              onClick={() =>
                scrollToProject(
                  Math.min(showcaseProjects.length - 1, currentIndex + 1),
                )
              }
              disabled={currentIndex === showcaseProjects.length - 1}
              aria-label="Siguiente proyecto"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Indicadores con efecto hover naranja */}
        <div className="container mx-auto px-4 mt-8 flex gap-2 items-center justify-center">
          {showcaseProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToProject(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-orange-500 w-8 h-2.5"
                  : "bg-white/30 hover:bg-orange-400/70 w-2.5 h-2.5"
              }`}
              aria-label={`Ir al proyecto ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizontalShowcase;
