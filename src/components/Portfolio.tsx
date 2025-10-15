import { useTranslation } from "react-i18next";
import { Camera, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <section
      className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100"
      id="portfolio"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
            {t("portfolioSection.title")}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("portfolioSection.subtitle")}
          </p>
        </div>

        {/* Portfolio Buttons */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Portfolio Fotográfico */}
          <Link
            to="/portfolio"
            className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all hover:scale-105 animate-fade-in-up text-center"
          >
            <div className="inline-flex p-4 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 mb-4 shadow-lg group-hover:scale-110 transition-transform">
              <Camera className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-foreground">
              {t("portfolioSection.photoPortfolio.title")}
            </h3>
            <p className="text-muted-foreground mb-4">
              {t("portfolioSection.photoPortfolio.description")}
            </p>
            <span className="inline-block text-primary font-semibold group-hover:translate-x-2 transition-transform">
              {t("portfolioSection.photoPortfolio.cta")} →
            </span>
          </Link>

          {/* Portfolio de Webs */}
          <Link
            to="/portfolio-webs"
            className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all hover:scale-105 animate-fade-in-up text-center"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="inline-flex p-4 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 mb-4 shadow-lg group-hover:scale-110 transition-transform">
              <Globe className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-foreground">
              {t("portfolioSection.webPortfolio.title")}
            </h3>
            <p className="text-muted-foreground mb-4">
              {t("portfolioSection.webPortfolio.description")}
            </p>
            <span className="inline-block text-primary font-semibold group-hover:translate-x-2 transition-transform">
              {t("portfolioSection.webPortfolio.cta")} →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
