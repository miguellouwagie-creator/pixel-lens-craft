import { useTranslation } from "react-i18next";
import {
  Utensils,
  Hotel,
  ShoppingBag,
  Stethoscope,
  Home,
  Dumbbell,
} from "lucide-react";

const Portfolio = () => {
  const { t } = useTranslation();

  const projects = [
    {
      key: "restaurant",
      icon: Utensils,
      color: "from-orange-500 to-red-500",
    },
    {
      key: "hotel",
      icon: Hotel,
      color: "from-blue-500 to-cyan-500",
    },
    {
      key: "fashion",
      icon: ShoppingBag,
      color: "from-pink-500 to-purple-500",
    },
    {
      key: "dental",
      icon: Stethoscope,
      color: "from-green-500 to-emerald-500",
    },
    {
      key: "realEstate",
      icon: Home,
      color: "from-indigo-500 to-blue-500",
    },
    {
      key: "fitness",
      icon: Dumbbell,
      color: "from-red-500 to-orange-500",
    },
  ];

  return (
    <section
      className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100"
      id="portfolio"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
            {t("portfolio.title")}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("portfolio.subtitle")}
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.key}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div
                  className={`inline-flex p-4 rounded-lg bg-gradient-to-br ${project.color} mb-4 shadow-lg`}
                >
                  <IconComponent className="h-8 w-8 text-white" />
                </div>

                {/* Project Name */}
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {t(`portfolio.projects.${project.key}.name`)}
                </h3>

                {/* Project Type */}
                <p className="text-sm text-muted-foreground mb-2">
                  {t(`portfolio.projects.${project.key}.type`)}
                </p>

                {/* Result */}
                <p className="text-lg font-semibold text-primary">
                  {t(`portfolio.projects.${project.key}.result`)}
                </p>
              </div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="text-center bg-white rounded-xl p-8 max-w-3xl mx-auto shadow-md animate-fade-in-up">
          <p className="text-muted-foreground mb-4 text-lg">
            {t("portfolio.footerText")}
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-cta text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105"
          >
            {t("portfolio.footerCta")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
