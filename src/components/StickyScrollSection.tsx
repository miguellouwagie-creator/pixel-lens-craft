// src/components/StickyScrollSection.tsx
import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { processData } from "@/data/processData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";
import bgImage from "@/assets/PC1.jpg";

const StickyScrollSection = () => {
  const { t } = useTranslation();
  const whatsappNumber = "34667326300";
  const [activeIndex, setActiveIndex] = useState(0);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let closestIndex = 0;
      let closestDistance = Infinity;

      featureRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const elementCenter = rect.top + window.scrollY + rect.height / 2;
          const distance = Math.abs(scrollPosition - elementCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        }
      });

      setActiveIndex(closestIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/80 z-0"></div>

      <div className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          {/* TÍTULO PRINCIPAL */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 leading-tight">
              {t("stickyScroll.mainTitle")}{" "}
              <span className="text-orange-500">
                {t("stickyScroll.mainTitleHighlight")}
              </span>
            </h2>
          </div>

          {/* GRID PRINCIPAL */}
          <div className="grid lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
            {/* COLUMNA IZQUIERDA: Índice */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-40 space-y-3 w-full">
                {processData.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = activeIndex === index;

                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        featureRefs.current[index]?.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                        });
                      }}
                      className={`w-full text-left p-3 rounded-xl transition-all duration-300 flex items-center gap-3 group ${
                        isActive
                          ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-2xl scale-105"
                          : "bg-white/10 text-gray-400 hover:bg-white/20 hover:text-gray-200"
                      }`}
                    >
                      <div
                        className={`p-2.5 rounded-lg flex-shrink-0 transition-all ${
                          isActive ? "bg-white/20" : "bg-white/10"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <p
                        className={`font-bold text-sm md:text-base leading-tight ${
                          isActive ? "text-white" : "text-gray-300"
                        }`}
                      >
                        {t(item.titleKey)}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* COLUMNA DERECHA: Cards */}
            <div className="lg:col-span-7 space-y-4">
              {processData.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeIndex === index;

                return (
                  <div
                    key={item.id}
                    ref={(el) => (featureRefs.current[index] = el)}
                    className="min-h-[40vh] flex items-center"
                  >
                    <Card
                      className={`w-full transition-all duration-500 ${
                        isActive
                          ? "bg-gradient-to-br from-blue-600 to-blue-800 border-4 border-orange-400 shadow-2xl scale-100 opacity-100"
                          : "bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-2 border-slate-700 opacity-40 scale-95"
                      }`}
                    >
                      <CardContent className="p-6 md:p-8">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="p-3 rounded-xl shadow-2xl flex-shrink-0 bg-white text-blue-600">
                            <Icon className="h-10 w-10 md:h-12 md:w-12" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl md:text-3xl font-black mb-2 leading-tight text-white">
                              {t(item.titleKey)}
                            </h3>
                            <p className="text-base md:text-lg leading-relaxed text-blue-50">
                              {t(item.descriptionKey)}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          {/* SECCIÓN DE PRECIO COMPACTADA */}
          <div className="py-12 mt-8 max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                {t("stickyScroll.priceTitle")}{" "}
                <span className="text-orange-500">
                  {t("stickyScroll.priceTitleHighlight")}
                </span>
              </h3>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur shadow-2xl border-4 border-orange-500/50 relative overflow-hidden">
                {/* Badge superior derecha */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-2xl animate-pulse">
                  {t("stickyScroll.croBadge")}
                </div>

                <CardContent className="p-8 md:p-10">
                  {/* Precio */}
                  <div className="text-center mb-6 mt-4">
                    <div className="text-5xl md:text-6xl font-black mb-3 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent animate-pulse">
                      {t("stickyScroll.priceAmount")}
                    </div>
                    <p className="text-xs text-gray-400 mt-2 max-w-2xl mx-auto leading-tight">
                      {t("stickyScroll.priceDisclaimer")}
                    </p>
                  </div>

                  {/* Separador */}
                  <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-6"></div>

                  {/* Botón CTA (SIN "DISEÑO ESTRATÉGICO") */}
                  <div className="text-center mb-6">
                    <Button
                      size="lg"
                      className="relative group bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-bold text-lg px-10 py-6 rounded-xl shadow-2xl transition-all duration-500 hover:shadow-orange-500/60 hover:scale-105 border-2 border-orange-400 overflow-hidden"
                      asChild
                    >
                      <a
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(t("stickyScroll.whatsappMessage"))}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
                        <MessageCircle className="h-5 w-5 relative z-10" />
                        <span className="relative z-10">
                          {t("stickyScroll.ctaButton")}
                        </span>
                      </a>
                    </Button>
                  </div>

                  {/* Features compactadas */}
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    {[1, 2, 3].map((num) => (
                      <div
                        key={num}
                        className="group relative bg-slate-800/50 backdrop-blur p-4 rounded-lg border border-slate-700 text-center cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/30"
                      >
                        <span className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                        <div className="text-2xl mb-2 relative z-10 group-hover:scale-110 transition-transform duration-300">
                          {num === 1 ? "🎯" : num === 2 ? "✨" : "📊"}
                        </div>
                        <p className="text-xs text-gray-300 font-semibold relative z-10 leading-tight">
                          {t(`stickyScroll.feature${num}`)}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Recuadro mantenimiento compactado */}
                  <div className="bg-gradient-to-br from-blue-900/30 to-slate-800/30 backdrop-blur rounded-lg p-5 border-2 border-blue-500/30 mb-4 hover:border-blue-500/60 transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-500/20 p-3 rounded-lg flex-shrink-0">
                        <span className="text-2xl">🛡️</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white text-base font-bold mb-2">
                          {t("stickyScroll.maintenanceTitle")}
                        </h4>
                        <p className="text-xs text-gray-300 leading-tight">
                          {t("stickyScroll.maintenanceDescription")}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Disclaimer legal */}
                  <p className="text-xs text-center text-gray-500 mt-4">
                    {t("stickyScroll.legalDisclaimer")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyScrollSection;
