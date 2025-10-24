// src/components/WhyUs.tsx
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Award,
  Camera,
  Clock,
  CheckCircle,
  Headphones,
  MapPin,
} from "lucide-react";

const WhyUs = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [headerOpacity, setHeaderOpacity] = useState(1);

  const reasons = [
    {
      key: "reason1",
      icon: Award,
      badge: "certified",
      borderColor: "border-emerald-200",
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      key: "reason3",
      icon: Camera,
      badge: "topPrice",
      borderColor: "border-purple-200",
      iconBg: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      key: "reason2",
      icon: MapPin,
      badge: null,
      borderColor: "border-blue-200",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      key: "reason5",
      icon: CheckCircle,
      badge: null,
      borderColor: "border-emerald-200",
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      key: "reason4",
      icon: Clock,
      badge: null,
      borderColor: "border-orange-200",
      iconBg: "bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      key: "reason6",
      icon: Headphones,
      badge: null,
      borderColor: "border-indigo-200",
      iconBg: "bg-indigo-50",
      iconColor: "text-indigo-600",
    },
  ];

  // Intersection Observer para animaciones de entrada
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Scroll observer para backdrop blur dinámico en header sticky
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = Math.abs(rect.top) / (rect.height * 0.3);
      const newOpacity = Math.max(0.85, 1 - scrollProgress * 0.15);

      setHeaderOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="sobre-mi"
      className="relative bg-gray-50 pb-20"
    >
      {/* STICKY HEADER con backdrop blur */}
      <div className="bg-white/90 backdrop-blur-lg border-b border-gray-200/50 py-16 transition-all duration-300">
        <div className="container mx-auto px-4 text-center">
          {/* Título prominente - el más grande de la sección */}
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight max-w-5xl mx-auto"
            dangerouslySetInnerHTML={{ __html: t("whyUs.title") }}
          />

          {/* Subtítulo que refuerza el valor */}
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t("whyUs.subtitle")}
          </p>
        </div>
      </div>

      {/* GRID con animaciones y parallax sutil */}
      <div className="container mx-auto px-4 pt-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.key}
                className={`group relative transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  // Parallax sutil en hover
                  transform: isVisible ? "translateY(0)" : "translateY(50px)",
                }}
              >
                {/* Card blanca con radius generoso (40px) */}
                <div
                  className={`relative bg-white rounded-[40px] p-8 border-2 ${reason.borderColor} shadow-lg
                  h-full flex flex-col
                  transition-all duration-500 ease-out hover:scale-[1.03] hover:shadow-2xl cursor-pointer overflow-hidden`}
                >
                  {/* Badge */}
                  {reason.badge && (
                    <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-2 rounded-full text-xs font-bold shadow-md z-10">
                      ✓ {t(`whyUs.badges.${reason.badge}`)}
                    </div>
                  )}

                  {/* Icono con efecto parallax en hover */}
                  <div className="relative z-10 mb-5 flex-shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                    <div
                      className={`w-16 h-16 ${reason.iconBg} rounded-full flex items-center justify-center shadow-md`}
                    >
                      <Icon className={`w-8 h-8 ${reason.iconColor}`} />
                    </div>
                  </div>

                  {/* Título con animación de color */}
                  <h3
                    className={`relative z-10 text-xl md:text-2xl font-black text-gray-900 mb-4 leading-tight flex-shrink-0
                    transition-colors duration-300 group-hover:text-emerald-600`}
                  >
                    {t(`whyUs.${reason.key}.title`)}
                  </h3>

                  {/* Descripción ALINEADA A LA IZQUIERDA con negritas estratégicas */}
                  <div
                    className={`relative z-10 text-sm md:text-base text-gray-700 leading-relaxed text-left flex-grow
                    [&>strong]:font-bold [&>strong]:text-gray-900`}
                    dangerouslySetInnerHTML={{
                      __html: t(`whyUs.${reason.key}.description`),
                    }}
                  />

                  {/* Gradient accent bottom */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${reason.iconColor === "text-emerald-600" ? "from-emerald-400 to-teal-400" : reason.iconColor === "text-purple-600" ? "from-purple-400 to-pink-400" : reason.iconColor === "text-blue-600" ? "from-blue-400 to-cyan-400" : reason.iconColor === "text-orange-600" ? "from-orange-400 to-red-400" : "from-indigo-400 to-blue-400"} rounded-b-[40px]`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA con animación */}
        <div
          className={`text-center mt-16 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <a
            href="https://wa.me/34634408043"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 text-white 
            px-10 py-5 rounded-full text-lg font-bold shadow-2xl 
            transition-all duration-300 hover:shadow-3xl hover:scale-105 active:scale-100
            hover:from-orange-600 hover:to-red-600"
          >
            <span className="text-2xl">💬</span>
            <span>Hablemos de Tu Proyecto</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
