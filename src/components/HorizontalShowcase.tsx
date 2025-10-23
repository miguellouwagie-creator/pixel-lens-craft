import React, { useRef, useEffect, useState } from "react";
import { showcaseProjects } from "@/data/showcaseData";
import ProjectCard from "./ProjectCard";
import FloatingElements from "./FloatingElements";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HorizontalShowcase: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
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
      ref={sectionRef}
      className="horizontal-showcase relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 md:py-16 overflow-hidden"
    >
      {/* Overlay oscuro para contraste */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Elementos flotantes 3D (Capas 0, 1, 2, 4) */}
      <div className="absolute inset-0 z-0">
        <FloatingElements mouseX={mousePosition.x} mouseY={mousePosition.y} />
      </div>

      {/* Contenido (Capa 3) */}
      <div className="relative z-10">
        {/* Título */}
        <div className="container mx-auto px-4 mb-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">
            Proyectos Destacados
          </h2>
          <p className="text-gray-300 text-base">
            Desliza horizontalmente o usa las flechas para ver más
          </p>
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

        {/* Indicadores */}
        <div className="container mx-auto px-4 mt-6 flex gap-2 items-center justify-center">
          {showcaseProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToProject(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-cta w-6"
                  : "bg-white/30 hover:bg-white/50"
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
