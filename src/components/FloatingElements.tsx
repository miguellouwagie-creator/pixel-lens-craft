import React from "react";

interface FloatingElementsProps {
  mouseX: number;
  mouseY: number;
}

const FloatingElements: React.FC<FloatingElementsProps> = ({
  mouseX,
  mouseY,
}) => {
  // Elementos flotantes con diferentes velocidades de parallax
  const elements = [
    // Capa 1 (Fondo - movimiento muy lento)
    {
      id: 1,
      size: 200,
      x: 10,
      y: 15,
      speed: 0.3,
      color: "rgba(37, 99, 235, 0.08)", // Azul primary
      blur: 80,
    },
    {
      id: 2,
      size: 150,
      x: 85,
      y: 25,
      speed: 0.4,
      color: "rgba(221, 68, 33, 0.08)", // Naranja CTA
      blur: 60,
    },
    {
      id: 3,
      size: 180,
      x: 50,
      y: 70,
      speed: 0.35,
      color: "rgba(37, 99, 235, 0.06)",
      blur: 90,
    },

    // Capa 2 (Medio - movimiento moderado)
    {
      id: 4,
      size: 120,
      x: 20,
      y: 50,
      speed: 0.6,
      color: "rgba(37, 99, 235, 0.12)",
      blur: 50,
    },
    {
      id: 5,
      size: 100,
      x: 75,
      y: 60,
      speed: 0.7,
      color: "rgba(221, 68, 33, 0.1)",
      blur: 40,
    },

    // Capa 4 (Primer plano - movimiento rápido)
    {
      id: 6,
      size: 60,
      x: 15,
      y: 80,
      speed: 1.2,
      color: "rgba(37, 99, 235, 0.15)",
      blur: 30,
    },
    {
      id: 7,
      size: 50,
      x: 90,
      y: 20,
      speed: 1.5,
      color: "rgba(221, 68, 33, 0.15)",
      blur: 25,
    },
    {
      id: 8,
      size: 40,
      x: 40,
      y: 30,
      speed: 1.8,
      color: "rgba(37, 99, 235, 0.2)",
      blur: 20,
    },
  ];

  return (
    <>
      {elements.map((element) => {
        const translateX = mouseX * element.speed;
        const translateY = mouseY * element.speed;

        return (
          <div
            key={element.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: `${element.size}px`,
              height: `${element.size}px`,
              left: `${element.x}%`,
              top: `${element.y}%`,
              background: element.color,
              filter: `blur(${element.blur}px)`,
              transform: `translate(${translateX}px, ${translateY}px)`,
              transition: "transform 0.3s ease-out",
              willChange: "transform",
            }}
          />
        );
      })}
    </>
  );
};

export default FloatingElements;
