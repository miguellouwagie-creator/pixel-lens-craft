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
      tagsKeys: ["portfolioShowcase.bvs.tag1", "portfolioShowcase.bvs.tag2", "portfolioShowcase.bvs.tag3"],
      imageLeft: true,
      fullWidth: false,
      gradient: "from-purple-500/20 via-blue-500/20 to-cyan-500/20",
    },
    {
      id: 2,
      client: "GymDenia",
      imageSrc: gymdenia,
      titleKey: "portfolioShowcase.gymdenia.title",
      taglineKey: "portfolioShowcase.gymdenia.tagline",
      descriptionKey: "portfolioShowcase.gymdenia.description",
      tagsKeys: ["portfolioShowcase.gymdenia.tag1", "portfolioShowcase.gymdenia.tag2", "portfolioShowcase.gymdenia.tag3"],
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
      tagsKeys: ["portfolioShowcase.tropidenia.tag1", "portfolioShowcase.tropidenia.tag2", "portfolioShowcase.tropidenia.tag3"],
      imageLeft: true,
      fullWidth: true,
      gradient: "from-blue-500/20 via-cyan-500/20 to-blue-600/20",
    },
  ];

  return (
    <div className="relative py-24 overflow-hidden" style={{ background: "linear-gradient(to bottom, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)" }}>
      {/* Efectos de fondo sutiles */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-400/10 via-transparent to-transparent"></div>
      
      <div 
        className="absolute inset-0 opacity-[0.05]" 
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      ></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl"></div>

      {/* Contenido */}
      <div className="relative z-10">
        {/* Header Section */}
        <div className="container mx-auto px-4 mb-24">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              {t("portfolioShowcase.header.title")}
            </h2>
            <p className="text-xl md:text-2xl text-blue-200 leading-relaxed max-w-3xl mx-auto">
              {t("portfolioShowcase.header.subtitle")}
            </p>

            {/* Línea decorativa */}
            <div className="flex items-center justify-center gap-3 mt-12">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500"></div>
              <Star className="h-5 w-5 text-blue-500 fill-blue-500" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500"></div>
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
                {/* Image Section con luces naranjas detrás */}
                <div className={`relative flex items-center ${project.imageLeft ? "lg:order-1 justify-start" : "lg:order-2 justify-end"}`}>
                  {/* Luces naranjas difuminadas detrás - aparecen solo en hover */}
                  <div 
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      hoveredProject === project.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-orange-500/25 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-orange-400/20 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-yellow-500/15 rounded-full blur-3xl"></div>
                  </div>
                  
                  {/* Fondo degradado original */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-3xl blur-2xl transform scale-95`}></div>
                  
                  <div className={`relative ${!project.fullWidth ? "lg:w-4/5" : "w-full"}`}>
                    {/* Glow naranja alrededor de la imagen - aparece en hover */}
                    <div 
                      className={`absolute -inset-6 bg-gradient-to-br from-orange-500/40 via-orange-400/30 to-yellow-500/40 rounded-3xl blur-3xl transition-opacity duration-500 ${
                        hoveredProject === project.id ? "opacity-100" : "opacity-0"
                      }`}
                    ></div>
                    
                    <img
                      src={project.imageSrc}
                      alt={t(project.titleKey)}
                      className={`w-full h-auto transition-all duration-500 ${
                        hoveredProject === project.id ? "scale-110" : "scale-100"
                      }`}
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className={`flex items-center ${project.imageLeft ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
                        {t(project.titleKey)}
                      </h3>
                      <p className="text-2xl text-blue-400 font-semibold">
                        {t(project.taglineKey)}
                      </p>
                      <p className="text-lg text-blue-200 leading-relaxed">
                        {t(project.descriptionKey)}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      {project.tagsKeys.map((tagKey, idx) => (
                        <span
                          key={tagKey}
                          className="px-5 py-2.5 bg-blue-500/20 border border-blue-400/30 rounded-lg text-blue-200 text-sm font-medium hover:bg-blue-500/30 hover:border-blue-400/60 transition-all duration-300"
                          style={{
                            animation: `fadeIn 0.5s ease-out ${0.1 * idx}s both`
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
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default WebPortfolioShowcase;
