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
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = featureRefs.current.findIndex(
              (ref) => ref === entry.target,
            );
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        threshold: 0.6,
        rootMargin: "-30% 0px -30% 0px",
      },
    );

    featureRefs.current.forEach((ref) => {
      if (ref) observerRef.current?.observe(ref);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <div
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              [translate:El Proceso Exclusivo]:{" "}
              <span className="text-orange-500">
                [translate:De Plantilla a Máquina de Ventas]
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
            {/* COLUMNA IZQUIERDA: Índice más grande */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28 space-y-4">
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
                      className={`w-full text-left p-4 rounded-2xl transition-all duration-500 flex items-center gap-4 group ${
                        isActive
                          ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-2xl"
                          : "bg-white/10 text-gray-400 hover:bg-white/20 hover:text-gray-200"
                      }`}
                    >
                      <div
                        className={`p-3 rounded-lg flex-shrink-0 transition-all ${
                          isActive ? "bg-white/20" : "bg-white/10"
                        }`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <p
                        className={`font-bold text-base md:text-lg leading-tight ${
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

            {/* COLUMNA DERECHA: Cards más compactas */}
            <div className="lg:col-span-7 space-y-4">
              {" "}
              {/* Espaciado reducido */}
              {processData.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeIndex === index;

                return (
                  <div
                    key={item.id}
                    ref={(el) => (featureRefs.current[index] = el)}
                    className="min-h-[40vh] flex items-center" // Altura reducida (80% de 50vh)
                  >
                    <Card
                      className={`w-full transition-all duration-700 ${
                        isActive
                          ? "bg-gradient-to-br from-blue-600 to-blue-800 border-4 border-orange-400 shadow-2xl scale-100"
                          : "bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-2 border-slate-700 opacity-40 scale-95"
                      }`}
                    >
                      <CardContent className="p-8 md:p-12">
                        {" "}
                        {/* Padding reducido */}
                        <div className="flex items-start gap-6 mb-6">
                          <div className="p-5 rounded-2xl shadow-2xl flex-shrink-0 bg-white text-blue-600">
                            <Icon className="h-14 w-14 md:h-16 md:w-16" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-3xl md:text-5xl font-black mb-4 leading-tight text-white">
                              {t(item.titleKey)}
                            </h3>
                            <p className="text-lg md:text-xl leading-relaxed text-blue-50">
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

          {/* SECCIÓN DE PRECIO - DISEÑO DE ALTO VALOR CON ANIMACIONES */}
          <div className="py-20 mt-12 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
                Tu Plataforma de{" "}
                <span className="text-orange-500">Crecimiento Digital</span>
              </h3>
            </div>

            {/* Card principal con animación scroll-triggered */}
            <div className="max-w-4xl mx-auto animate-fade-in-up">
              <Card className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur shadow-2xl border-4 border-orange-500/50 relative overflow-hidden">
                {/* Badge CRO flotante */}
                <div className="absolute top-6 right-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-2xl animate-pulse">
                  ✨ Construido para Convertir (CRO)
                </div>

                <CardContent className="p-12 md:p-16">
                  {/* Inversión Inicial */}
                  <div className="text-center mb-12">
                    <p className="text-orange-400 text-xl font-bold mb-4 tracking-wide uppercase">
                      Inversión Inicial
                    </p>
                    <div className="text-6xl md:text-7xl font-black text-white mb-4">
                      Desde 349€
                    </div>
                    {/* NUEVO: Recontextualización del precio */}
                    <p className="text-sm text-gray-400 mt-4 max-w-2xl mx-auto">
                      Este es el costo de nuestro Plan Básico. Pida presupuesto
                      para nuestros servicios estratégicos de diseño avanzado
                      con CRO y animaciones fluidas.
                    </p>
                  </div>

                  {/* Línea divisoria sutil */}
                  <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-12"></div>

                  {/* CTA Estratégico */}
                  <div className="text-center mb-12">
                    <p className="text-orange-400 text-sm font-bold mb-2 tracking-widest uppercase">
                      Diseño Estratégico
                    </p>
                    <Button
                      size="lg"
                      className="relative group bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-bold text-xl px-12 py-8 rounded-xl shadow-2xl transition-all duration-500 hover:shadow-orange-500/60 hover:scale-105 border-2 border-orange-400 overflow-hidden"
                      asChild
                    >
                      <a
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola, quiero solicitar mi presupuesto único para una web profesional con diseño estratégico")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3"
                      >
                        {/* Efecto glow animado */}
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>

                        <MessageCircle className="h-6 w-6 relative z-10" />
                        <span className="relative z-10">
                          Solicitar Mi Presupuesto Único
                        </span>
                      </a>
                    </Button>
                  </div>

                  {/* Módulos de valor CON ANIMACIÓN DE ONDA */}
                  <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {/* Módulo 1 */}
                    <div className="group relative bg-slate-800/50 backdrop-blur p-6 rounded-xl border border-slate-700 text-center cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/30">
                      {/* Efecto de onda al hover */}
                      <span className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                      <span className="absolute inset-0 rounded-xl bg-orange-500/10 scale-0 group-hover:scale-100 transition-transform duration-700 ease-out"></span>

                      <div className="text-3xl mb-3 relative z-10 group-hover:scale-110 transition-transform duration-300">
                        🎯
                      </div>
                      <p className="text-sm text-gray-300 font-semibold relative z-10">
                        Construido para Convertir (CRO)
                      </p>
                    </div>

                    {/* Módulo 2 */}
                    <div className="group relative bg-slate-800/50 backdrop-blur p-6 rounded-xl border border-slate-700 text-center cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/30">
                      <span className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                      <span className="absolute inset-0 rounded-xl bg-orange-500/10 scale-0 group-hover:scale-100 transition-transform duration-700 ease-out"></span>

                      <div className="text-3xl mb-3 relative z-10 group-hover:scale-110 transition-transform duration-300">
                        ✨
                      </div>
                      <p className="text-sm text-gray-300 font-semibold relative z-10">
                        Animaciones Fluidas (Next-Level Design)
                      </p>
                    </div>

                    {/* Módulo 3 */}
                    <div className="group relative bg-slate-800/50 backdrop-blur p-6 rounded-xl border border-slate-700 text-center cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/30">
                      <span className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                      <span className="absolute inset-0 rounded-xl bg-orange-500/10 scale-0 group-hover:scale-100 transition-transform duration-700 ease-out"></span>

                      <div className="text-3xl mb-3 relative z-10 group-hover:scale-110 transition-transform duration-300">
                        📊
                      </div>
                      <p className="text-sm text-gray-300 font-semibold relative z-10">
                        Estrategia de Contenido Incluida
                      </p>
                    </div>
                  </div>

                  {/* NUEVO: Mantenimiento como Feature Card destacada */}
                  <div className="bg-gradient-to-br from-blue-900/30 to-slate-800/30 backdrop-blur rounded-xl p-8 border-2 border-blue-500/30 mb-8 hover:border-blue-500/60 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-500/20 p-4 rounded-lg">
                        <span className="text-3xl">🛡️</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white text-lg font-bold mb-3">
                          Mantenimiento Proactivo: Evite Costos Ocultos
                        </h4>
                        <p className="text-sm text-gray-300 leading-relaxed">
                          Después de crear su web, ofrecemos un servicio de
                          mantenimiento mensual para mantenerla segura,
                          actualizada y funcionando perfectamente.
                          <span className="text-blue-300 font-semibold">
                            {" "}
                            Nunca tendrá que llamar a un desarrollador de
                            emergencia.
                          </span>{" "}
                          El coste varía según sus necesidades (actualizaciones,
                          soporte, backups). ¡Pregúntanos sin compromiso!
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Disclaimer legal simple */}
                  <p className="text-xs text-center text-gray-500 mt-6">
                    Todos los precios incluyen IVA. Dominio y hosting
                    gestionados por separado.
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
