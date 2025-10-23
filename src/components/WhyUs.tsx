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

  // Intersection Observer para scroll-triggered animation
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

  const reasons = [
    {
      key: "reason1",
      icon: Award,
      badge: "certified",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200 hover:border-emerald-400",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-700",
    },
    {
      key: "reason2",
      icon: MapPin,
      badge: null,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200 hover:border-blue-400",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-700",
    },
    {
      key: "reason3",
      icon: Camera,
      badge: "topPrice",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200 hover:border-purple-400",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-700",
    },
    {
      key: "reason4",
      icon: Clock,
      badge: null,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200 hover:border-orange-400",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-700",
    },
    {
      key: "reason5",
      icon: CheckCircle,
      badge: null,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200 hover:border-green-400",
      iconBg: "bg-green-100",
      iconColor: "text-green-700",
    },
    {
      key: "reason6",
      icon: Headphones,
      badge: null,
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200 hover:border-indigo-400",
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-700",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="sobre-mi"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4">
        {/* Header con fade-in */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            {t("whyUs.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("whyUs.subtitle")}
          </p>
        </div>

        {/* Grid de cards con stagger animation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.key}
                className={`group relative transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Card con efecto de onda al hover */}
                <div
                  className={`relative bg-white rounded-2xl p-8 border-2 ${reason.borderColor} transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer overflow-hidden`}
                >
                  {/* Efecto de onda (wave) al hover */}
                  <span
                    className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></span>
                  <span
                    className={`absolute inset-0 rounded-2xl bg-gradient-radial from-transparent to-transparent group-hover:from-${reason.iconColor}/5 scale-0 group-hover:scale-100 transition-transform duration-700 ease-out`}
                  ></span>

                  {/* Badge opcional */}
                  {reason.badge && (
                    <div className="absolute top-4 right-4 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold">
                      ✓ {t(`whyUs.badges.${reason.badge}`)}
                    </div>
                  )}

                  {/* Icono grande con fondo circular */}
                  <div className="relative z-10 mb-6">
                    <div
                      className={`w-16 h-16 ${reason.iconBg} rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
                    >
                      <Icon className={`w-8 h-8 ${reason.iconColor}`} />
                    </div>
                  </div>

                  {/* Título */}
                  <h3 className="relative z-10 text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                    {t(`whyUs.${reason.key}.title`)}
                  </h3>

                  {/* Descripción */}
                  <p className="relative z-10 text-base text-gray-700 leading-relaxed">
                    {t(`whyUs.${reason.key}.description`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
