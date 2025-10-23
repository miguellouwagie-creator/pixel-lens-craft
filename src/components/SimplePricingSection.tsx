import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Check,
  MessageCircle,
  Laptop,
  TrendingUp,
  Clock,
  Shield,
  Users,
  Zap,
  Search,
  Eye,
  ArrowRight,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import bgImage from "@/assets/PC1.jpg";

const SimplePricingSection = () => {
  const { t } = useTranslation();
  const whatsappNumber = "34667326300";

  return (
    <div
      className="py-20 relative"
      id="packs"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay oscuro para mantener legibilidad */}
      <div className="absolute inset-0 bg-black/75 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-500 rounded-2xl mb-6 shadow-2xl">
            <Laptop className="h-12 w-12 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("simplePrice.title")}
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
            {t("simplePrice.subtitle")}
          </p>

          {/* Botón Ver Ejemplos de Webs */}
          <div className="mb-8 relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-xl opacity-40"></div>

            <Button
              size="lg"
              className="relative bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-lg px-10 py-7 shadow-2xl hover:shadow-blue-500/60 transform hover:scale-110 transition-all duration-300 border-2 border-blue-400"
              asChild
            >
              <a href="/portfolio-webs" className="flex items-center gap-3">
                <Eye className="h-6 w-6 animate-bounce" />
                <span className="hidden md:inline font-bold tracking-wide">
                  {t("simplePrice.portfolioButton")}
                </span>
                <span className="md:hidden font-bold tracking-wide">
                  {t("simplePrice.portfolioButtonShort")}
                </span>
                <ArrowRight className="h-6 w-6" />
              </a>
            </Button>

            <p className="text-sm text-blue-300 mt-4 font-semibold">
              {t("simplePrice.portfolioDescription")}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-start">
          <Card className="bg-white/95 backdrop-blur shadow-2xl border-4 border-blue-400">
            <CardContent className="p-8">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-blue-900 mb-4">
                  {t("simplePrice.offer.title")}
                </h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    {t("simplePrice.offer.price")}
                  </span>
                </div>
                <p className="text-lg text-gray-600">
                  {t("simplePrice.offer.description")}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="font-bold text-gray-900 text-lg mb-4">
                  {t("simplePrice.offer.includes")}
                </h4>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <div key={num} className="flex items-start gap-3">
                    <div className="bg-blue-100 rounded-full p-1 mt-0.5 flex-shrink-0">
                      <Check className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700">
                      {t(`simplePrice.offer.feature${num}`)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-8 border-2 border-blue-200">
                <p className="text-sm text-blue-900 leading-relaxed">
                  <strong className="block mb-2">
                    {t("simplePrice.offer.maintenanceTitle")}
                  </strong>
                  {t("simplePrice.offer.maintenanceText")}
                </p>
              </div>

              <Button
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg py-6"
                asChild
              >
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(t("simplePrice.offer.whatsappMessage"))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  {t("simplePrice.offer.cta")}
                </a>
              </Button>
            </CardContent>
          </Card>

          <div className="bg-gradient-to-br from-blue-800/50 to-blue-900/50 rounded-2xl p-8 backdrop-blur border-2 border-blue-300/30">
            <h3 className="text-3xl font-bold text-white mb-8">
              {t("simplePrice.benefits.title")}
            </h3>

            <div className="space-y-6">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div key={num} className="flex gap-4">
                  <div className="bg-blue-500 rounded-xl p-3 h-fit flex-shrink-0">
                    {num === 1 && <TrendingUp className="h-6 w-6 text-white" />}
                    {num === 2 && <Clock className="h-6 w-6 text-white" />}
                    {num === 3 && <Shield className="h-6 w-6 text-white" />}
                    {num === 4 && <Users className="h-6 w-6 text-white" />}
                    {num === 5 && <Zap className="h-6 w-6 text-white" />}
                    {num === 6 && <Search className="h-6 w-6 text-white" />}
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">
                      {t(`simplePrice.benefits.benefit${num}Title`)}
                    </h4>
                    <p className="text-blue-100">
                      {t(`simplePrice.benefits.benefit${num}Text`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimplePricingSection;
