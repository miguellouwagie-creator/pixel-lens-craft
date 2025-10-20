// src/components/WebPortfolioShowcase.tsx
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Star } from "lucide-react";
import tropidenia from "@/assets/portfolio-tropidenia.png";
import bvs from "@/assets/portfolio-bvs.png";
import gymdenia from "@/assets/portfolio-gymdenia.png";

const WebPortfolioShowcase = () => {
  const { t } = useTranslation();
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      client: "BVS",
      imageSrc: bvs,
      titleKey: "portfolioShowcase.bvs.title",
      taglineKey: "portfolioShowcase.bvs.tagline",
      descriptionKey: "portfolioShowcase.bvs.description",
      tagsKeys: [
        "portfolioShowcase.bvs.tag1",
        "portfolioShowcase.bvs.tag2",
        "portfolioShowcase.bvs.tag3",
      ],
      imageLeft: true,
      fullWidth: false,
      // Mantenemos gradientes específicos por ahora
      gradient: "from-purple-500/20 via-blue-500/20 to-cyan-500/20",
    },
    {
      id: 2,
      client: "GymDenia",
      imageSrc: gymdenia,
      titleKey: "portfolioShowcase.gymdenia.title",
      taglineKey: "portfolioShowcase.gymdenia.tagline",
      descriptionKey: "portfolioShowcase.gymdenia.description",
      tagsKeys: [
        "portfolioShowcase.gymdenia.tag1",
        "portfolioShowcase.gymdenia.tag2",
        "portfolioShowcase.gymdenia.tag3",
      ],
      imageLeft: false,
      fullWidth: false,
      gradient: "from-cyan-500/20 via-blue-500/20 to-purple-500/20",
    },
    {
      id: 3,
      client: "TropiDenia",
      imageSrc: tropidenia,
      titleKey: "portfolioShowcase.tropidenia.title",
      taglineKey: "portfolioShowcase.tropidenia.tagline",
      descriptionKey: "portfolioShowcase.tropidenia.description",
      tagsKeys: [
        "portfolioShowcase.tropidenia.tag1",
        "portfolioShowcase.tropidenia.tag2",
        "portfolioShowcase.tropidenia.tag3",
      ],
      imageLeft: true,
      fullWidth: true,
      gradient: "from-blue-500/20 via-cyan-500/20 to-blue-600/20",
    },
  ];

  return (
    // MODIFICADO: Usar variables CSS/Tailwind para el fondo oscuro
    // Asumiendo que esta sección SIEMPRE debe ser oscura
    <div className="relative py-24 overflow-hidden bg-gradient-to-b from-[hsl(222,47%,11%)] via-primary to-[hsl(222,47%,11%)]">
      {/* Efectos de fondo sutiles */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          // MODIFICADO: Usar color primario para la rejilla
          backgroundImage: `linear-gradient(hsla(var(--primary), 0.5) 1px, transparent 1px), linear-gradient(90deg, hsla(var(--primary), 0.5) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      ></div>
      {/* MODIFICADO: Usar color primario para los blurs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>{" "}
      {/* Podría ser otro color si tienes un secundario oscuro */}
      {/* Contenido */}
      <div className="relative z-10">
        {/* Header Section */}
        <div className="container mx-auto px-4 mb-24">
          <div className="text-center max-w-4xl mx-auto">
            {/* MODIFICADO: Usar text-foreground (dark) o text-white si es siempre oscuro */}
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              {t("portfolioShowcase.header.title")}
            </h2>
            {/* MODIFICADO: Usar text-muted-foreground (dark) o similar (ej text-blue-200) */}
            <p className="text-xl md:text-2xl text-blue-200 leading-relaxed max-w-3xl mx-auto">
              {t("portfolioShowcase.header.subtitle")}
            </p>

            {/* Línea decorativa */}
            <div className="flex items-center justify-center gap-3 mt-12">
              {/* MODIFICADO: Usar color primario */}
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
              <Star className="h-5 w-5 text-primary fill-primary" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="container mx-auto px-4 space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="relative"
              style={{
                animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`,
              }}
            >
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  !project.imageLeft ? "lg:flex-row-reverse" : ""
                }`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Image Section con luces CTA detrás */}
                <div
                  className={`relative flex items-center ${project.imageLeft ? "lg:order-1 justify-start" : "lg:order-2 justify-end"}`}
                >
                  {/* Luces CTA difuminadas detrás - aparecen solo en hover */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      hoveredProject === project.id
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    {/* MODIFICADO: Usar color cta/accent */}
                    <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-cta/25 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-cta/20 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-accent/15 rounded-full blur-3xl"></div>
                  </div>

                  {/* Fondo degradado original (mantenido) */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-3xl blur-2xl transform scale-95`}
                  ></div>

                  <div
                    className={`relative ${!project.fullWidth ? "lg:w-4/5" : "w-full"}`}
                  >
                    {/* Glow CTA alrededor de la imagen - aparece en hover */}
                    <div
                      className={`absolute -inset-6 bg-gradient-to-br from-cta/40 via-cta/30 to-accent/40 rounded-3xl blur-3xl transition-opacity duration-500 ${
                        hoveredProject === project.id
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    ></div>

                    <img
                      src={project.imageSrc}
                      alt={t(project.titleKey)}
                      // Mantenido efecto scale
                      className={`w-full h-auto transition-all duration-500 rounded-lg shadow-2xl ${
                        hoveredProject === project.id
                          ? "scale-105"
                          : "scale-100" // scale-105 en lugar de 110
                      }`}
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div
                  className={`flex items-center ${project.imageLeft ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="space-y-6">
                    <div className="space-y-4">
                      {/* MODIFICADO: text-white -> text-foreground (dark) */}
                      <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
                        {t(project.titleKey)}
                      </h3>
                      {/* MODIFICADO: text-blue-400 -> text-primary (o un azul más claro como text-blue-300) */}
                      <p className="text-2xl text-blue-300 font-semibold">
                        {t(project.taglineKey)}
                      </p>
                      {/* MODIFICADO: text-blue-200 -> text-muted-foreground (dark) o text-blue-200 */}
                      <p className="text-lg text-blue-200 leading-relaxed">
                        {t(project.descriptionKey)}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      {project.tagsKeys.map((tagKey, idx) => (
                        <span
                          key={tagKey}
                          // MODIFICADO: Usar colores del tema (ej. primary)
                          className="px-5 py-2.5 bg-primary/20 border border-primary/30 rounded-lg text-blue-200 text-sm font-medium hover:bg-primary/30 hover:border-primary/60 transition-all duration-300"
                          style={{
                            animation: `fadeIn 0.5s ease-out ${0.1 * idx}s both`,
                          }}
                        >
                          {t(tagKey)}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Mantener los estilos keyframes internos */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default WebPortfolioShowcase;
