import React, { useRef, useEffect } from "react";
import { showcaseProjects } from "@/data/showcaseData";
import ProjectCard from "./ProjectCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HorizontalShowcase: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);

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
    <section className="horizontal-showcase relative bg-background py-12 md:py-16">
      {/* Título */}
      <div className="container mx-auto px-4 mb-6 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-2">
          Proyectos Destacados
        </h2>
        <p className="text-muted-foreground text-base">
          Desliza horizontalmente o usa las flechas para ver más
        </p>
      </div>

      {/* Contenedor con scroll horizontal nativo */}
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {showcaseProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Controles de navegación para desktop */}
        <div className="hidden md:block">
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm hover:bg-background shadow-lg border-2"
            onClick={() => scrollToProject(Math.max(0, currentIndex - 1))}
            disabled={currentIndex === 0}
            aria-label="Proyecto anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm hover:bg-background shadow-lg border-2"
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

      {/* Indicadores - sin botón "Ver todos los proyectos" */}
      <div className="container mx-auto px-4 mt-6 flex gap-2 items-center justify-center">
        {showcaseProjects.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToProject(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-cta w-6"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Ir al proyecto ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HorizontalShowcase;
