import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const SectionDivider = () => {
  const { t } = useTranslation();
  const [scrollProgress, setScrollProgress] = useState(0);
  const dividerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();

  useEffect(() => {
    const handleScroll = () => {
      // Cancelar frame anterior
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      // Usar requestAnimationFrame para suavidad
      rafRef.current = requestAnimationFrame(() => {
        if (!dividerRef.current) return;

        const rect = dividerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Progreso: 0 cuando está abajo, 1 cuando está arriba
        const progress = 1 - (rect.top / windowHeight);
        const clampedProgress = Math.max(0, Math.min(1, progress));
        
        setScrollProgress(clampedProgress);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  // Transformaciones suaves basadas en scroll
  const topLineY = (scrollProgress - 0.5) * -20; // Sube al scrollear
  const textY = (scrollProgress - 0.5) * 15; // Movimiento intermedio
  const bottomLineY = (scrollProgress - 0.5) * 20; // Baja al scrollear
  const opacity = Math.min(1, scrollProgress * 2); // Fade in gradual

  return (
    <div ref={dividerRef} className="relative overflow-hidden">
      <div 
        className="py-10 md:py-12"
        style={{
          background: "linear-gradient(180deg, #000000 0%, #0f172a 50%, #1e3a8a 100%)"
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            
            {/* Línea superior - se mueve hacia arriba */}
            <div 
              className="flex justify-center items-center gap-3 mb-5 will-change-transform"
              style={{ 
                transform: `translateY(${topLineY}px)`,
                opacity: opacity,
                transition: 'transform 0.1s linear, opacity 0.3s ease-out'
              }}
            >
              <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-orange-500 to-orange-600 rounded-full"></div>
              <div className="h-1.5 w-1.5 bg-orange-500 rounded-full animate-pulse"></div>
              <div className="h-0.5 w-20 bg-gradient-to-l from-transparent via-orange-500 to-orange-600 rounded-full"></div>
            </div>

            {/* Texto central - movimiento suave */}
            <h2 
              className="text-2xl md:text-4xl font-bold mb-5 leading-tight will-change-transform"
              style={{ 
                transform: `translateY(${textY}px)`,
                opacity: opacity,
                transition: 'transform 0.1s linear, opacity 0.3s ease-out'
              }}
            >
              <span className="bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent">
                {t("divider.title")}
              </span>
            </h2>

            {/* Línea inferior - se mueve hacia abajo */}
            <div 
              className="flex justify-center items-center gap-3 mt-5 will-change-transform"
              style={{ 
                transform: `translateY(${bottomLineY}px)`,
                opacity: opacity,
                transition: 'transform 0.1s linear, opacity 0.3s ease-out'
              }}
            >
              <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-orange-500 to-orange-600 rounded-full"></div>
              <div className="h-1.5 w-1.5 bg-orange-500 rounded-full animate-pulse"></div>
              <div className="h-0.5 w-20 bg-gradient-to-l from-transparent via-orange-500 to-orange-600 rounded-full"></div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionDivider;
