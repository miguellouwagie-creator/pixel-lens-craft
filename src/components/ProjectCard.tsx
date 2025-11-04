import React, { useRef, useEffect, useState } from "react";
import { Project } from "@/data/showcaseData";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";


interface ProjectCardProps {
  project: Project;
  isActive: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isActive }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [tiltRotation, setTiltRotation] = useState({ rotateX: 0, rotateY: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useTranslation();

  // Mapeo de títulos a claves de traducción
  const descriptionKeyMap: { [key: string]: string } = {
    "BVS Trabajos Verticales": "portfolioShowcase.bvs.description",
    "Golden Coast Charter": "portfolioShowcase.goldencoast.description",
    "GymDenia": "portfolioShowcase.gymdenia.description",
    "TropiDenia": "portfolioShowcase.tropidenia.description",
  };

  const getDescription = () => {
    const key = descriptionKeyMap[project.title];
    return key ? t(key) : project.description;
  };

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mouse tracking para desktop
  useEffect(() => {
    if (isMobile || !isActive) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      const normalizedX = (x - 0.5) * 2;
      const normalizedY = (y - 0.5) * 2;

      setMousePosition({ x: normalizedX, y: normalizedY });

      const rotateY = normalizedX * 5;
      const rotateX = -normalizedY * 5;
      setTiltRotation({ rotateX, rotateY });
    };

    const handleMouseLeave = () => {
      setMousePosition({ x: 0, y: 0 });
      setTiltRotation({ rotateX: 0, rotateY: 0 });
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (card) {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [isActive, isMobile]);

  // Gyroscope parallax para móviles
  useEffect(() => {
    if (!isMobile || !isActive) return;

    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (e.beta === null || e.gamma === null) return;

      const x = (e.gamma || 0) / 180;
      const y = (e.beta || 0) / 360;

      setMousePosition({ x, y });
    };

    window.addEventListener("deviceorientation", handleOrientation);
    return () =>
      window.removeEventListener("deviceorientation", handleOrientation);
  }, [isActive, isMobile]);

  // Transforms para cada capa
  const layer1Transform = {
    transform: `translate(${mousePosition.x * 8}px, ${mousePosition.y * 8}px)`,
    transition: "transform 0.2s ease-out",
    willChange: "transform",
  };

  const layer2Transform = {
    transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`,
    transition: "transform 0.2s ease-out",
    willChange: "transform",
  };

  const layer3Transform = {
    transform: `translate(${mousePosition.x * 25}px, ${mousePosition.y * 25}px)`,
    transition: "transform 0.2s ease-out",
    willChange: "transform",
  };

  const cardTilt = {
    transform: isMobile
      ? "none"
      : `perspective(1000px) rotateX(${tiltRotation.rotateX}deg) rotateY(${tiltRotation.rotateY}deg)`,
    transition: "transform 0.2s ease-out",
    willChange: "transform",
  };

  // Detectar si es TropiDenia para aplicar zoom o fondo blanco
  const isTropiDenia = project.title === "TropiDenia";
  const isGoldenCoast = project.title === "Golden Coast Charter";
  const hasLightBg = isTropiDenia || isGoldenCoast;

  return (
    <div
      ref={cardRef}
      className="project-card flex-shrink-0 w-full snap-center px-4 md:px-8 py-8 relative"
      style={{ perspective: "1000px" }}
    >
      <div className="max-w-6xl mx-auto relative" style={cardTilt}>
        <div className="grid md:grid-cols-2 gap-8 items-center relative">
          {/* Imagen del Proyecto con capas parallax */}
          <div className="relative h-[350px] md:h-[500px] overflow-visible">
            {/* Capa 1: Fondo abstracto */}
            <div
              className="absolute inset-0 -z-10 rounded-2xl opacity-30"
              style={{
                ...layer1Transform,
                background:
                  "radial-gradient(circle at 50% 50%, rgba(221, 68, 33, 0.15), transparent 70%)",
                filter: "blur(60px)",
                transform: `${layer1Transform.transform} scale(1.1)`,
              }}
            />

            {/* Capa 2: Imagen principal */}
            <div
              className="absolute inset-0 rounded-2xl shadow-2xl overflow-hidden group"
              style={layer2Transform}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className={`w-full h-full transition-transform duration-700 ${!hasLightBg ? "group-hover:scale-105" : ""}`}
                style={{
                  objectFit: hasLightBg ? "contain" : "cover",
                  objectPosition: "center",
                  backgroundColor: hasLightBg ? "#ffffff" : "transparent",
                  transform: isTropiDenia ? "scale(1.45)" : isGoldenCoast ? "scale(1)" : "none",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Capa 3: Elementos decorativos flotantes */}
            <div
              className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-cta/15 blur-xl"
              style={layer3Transform}
            />
            <div
              className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-primary/15 blur-xl"
              style={{
                ...layer3Transform,
                transform: `${layer3Transform.transform} scale(1.05)`,
              }}
            />
          </div>

          {/* Información del Proyecto */}
          <div className="space-y-4 relative z-10">
            <div>
              <Badge
                variant={project.category === "web" ? "default" : "secondary"}
                className="mb-3 text-xs px-3 py-1"
              >
                {project.category === "web" ? t("portfolio.webCategory") : t("portfolio.photoCategory")}
              </Badge>
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 bg-clip-text text-transparent drop-shadow-lg mb-2">
                {project.title}
              </h3>
            </div>

            <p className="text-base md:text-lg text-gray-200 leading-relaxed">
              {getDescription()}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2.5 py-1 bg-white/10 text-white rounded-full text-xs font-medium backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
