import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Check,
  MessageCircle,
  Camera,
  Eye,
  ArrowRight,
  Shield,
  Sparkles,
  Award,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";

// Imagen demo del portfolio (foto 4)
import beforeDemo from "@/assets/sin-editar-4.jpeg";
import afterDemo from "@/assets/editada-4.png";

const PricingSection = () => {
  const { t } = useTranslation();
  const whatsappNumber = "34667326300";
  const [showAfterDemo, setShowAfterDemo] = useState(false);

  const photoPacks = [
    {
      nameKey: "photoPacks.basic.name",
      priceKey: "photoPacks.basic.price",
      photosKey: "photoPacks.basic.photos",
      featuresKeys: [
        "photoPacks.basic.feature1",
        "photoPacks.basic.feature2",
        "photoPacks.basic.feature3",
      ],
      ctaKey: "photoPacks.basic.cta",
      whatsappMessage: t("photoPacks.basic.whatsappMessage"),
      recommended: true,
    },
    {
      nameKey: "photoPacks.standard.name",
      priceKey: "photoPacks.standard.price",
      photosKey: "photoPacks.standard.photos",
      featuresKeys: [
        "photoPacks.standard.feature1",
        "photoPacks.standard.feature2",
        "photoPacks.standard.feature3",
        "photoPacks.standard.feature4",
      ],
      ctaKey: "photoPacks.standard.cta",
      whatsappMessage: t("photoPacks.standard.whatsappMessage"),
    },
    {
      nameKey: "photoPacks.premium.name",
      priceKey: "photoPacks.premium.price",
      photosKey: "photoPacks.premium.photos",
      featuresKeys: [
        "photoPacks.premium.feature1",
        "photoPacks.premium.feature2",
        "photoPacks.premium.feature3",
        "photoPacks.premium.feature4",
      ],
      ctaKey: "photoPacks.premium.cta",
      whatsappMessage: t("photoPacks.premium.whatsappMessage"),
    },
    {
      nameKey: "photoPacks.professional.name",
      priceKey: "photoPacks.professional.price",
      photosKey: "photoPacks.professional.photos",
      featuresKeys: [
        "photoPacks.professional.feature1",
        "photoPacks.professional.feature2",
        "photoPacks.professional.feature3",
        "photoPacks.professional.feature4",
      ],
      ctaKey: "photoPacks.professional.cta",
      whatsappMessage: t("photoPacks.professional.whatsappMessage"),
    },
  ];

  return (
    <div className="py-20" id="photo-packs">
      <section className="bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 py-20 relative">
        {/* Badge flotante de prueba social */}
        <div className="absolute top-8 right-8 z-20 hidden lg:block">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl px-6 py-4 shadow-2xl border-4 border-white animate-pulse">
            <div className="flex items-center gap-3">
              <Award className="h-8 w-8" />
              <div className="text-left">
                <div className="text-2xl font-bold">+500</div>
                <div className="text-xs font-semibold">{t("photoPacks.badge.text")}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-orange-900 mb-4">
              {t("photoPacks.title")}
            </h2>
            <p className="text-xl text-orange-700 max-w-3xl mx-auto mb-10">
              {t("photoPacks.subtitle")}
            </p>

            {/* Mini Slider Antes/Después - REDUCIDO */}
            <div className="mb-10 max-w-sm mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <div className="relative aspect-[4/3]">
                  {/* Imagen Antes */}
                  <img
                    src={beforeDemo}
                    alt="Antes de editar"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      showAfterDemo ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  {/* Imagen Después */}
                  <img
                    src={afterDemo}
                    alt="Después de editar"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      showAfterDemo ? 'opacity-100' : 'opacity-0'
                    }`}
                  />

                  {/* Etiquetas */}
                  {!showAfterDemo && (
                    <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-2 shadow-lg">
                      <Camera className="h-4 w-4" />
                      {t("photoPacks.demo.before")}
                    </div>
                  )}
                  {showAfterDemo && (
                    <div className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-2 shadow-lg">
                      <Sparkles className="h-4 w-4" />
                      {t("photoPacks.demo.after")}
                    </div>
                  )}

                  {/* Botón de alternancia */}
                  <button
                    onClick={() => setShowAfterDemo(!showAfterDemo)}
                    className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full text-sm font-bold shadow-2xl transition-all hover:scale-105"
                  >
                    {showAfterDemo ? "← Ver Antes" : "Ver Después →"}
                  </button>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-3 font-normal">
                {t("photoPacks.demo.caption")}
              </p>
            </div>
            
            {/* Botón Ver Portfolio */}
            <div className="mb-8 relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-xl opacity-40"></div>
              
              <Button
                size="lg"
                className="relative bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white text-lg px-10 py-7 shadow-2xl hover:shadow-orange-500/60 transform hover:scale-110 transition-all duration-300 border-2 border-orange-400"
                asChild
              >
                <a 
                  href="/portfolio"
                  className="flex items-center gap-3"
                >
                  <Eye className="h-6 w-6 animate-bounce" />
                  <span className="hidden md:inline font-bold tracking-wide">{t("photoPacks.portfolioButton")}</span>
                  <span className="md:hidden font-bold tracking-wide">{t("photoPacks.portfolioButtonShort")}</span>
                  <ArrowRight className="h-6 w-6" />
                </a>
              </Button>
              
              <p className="text-sm text-orange-600 mt-4 font-semibold">
                {t("photoPacks.portfolioDescription")}
              </p>
            </div>
          </div>

          
{/* Banner de Garantía */}
            <div className="mb-10 max-w-3xl mx-auto">
              <div className="bg-white/80 backdrop-blur border-2 border-orange-200 rounded-xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-orange-100 rounded-full p-3">
                      <Shield className="h-6 w-6 text-orange-600" />
                    </div>
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-orange-900 mb-2">
                      {t("photoPacks.guarantee.title")}
                    </h3>
                    <p 
                      className="text-sm text-gray-700 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: t("photoPacks.guarantee.description") }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Grid de packs */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {photoPacks.map((pack) => (
              <Card
                key={pack.nameKey}
                className={`flex flex-col bg-white hover:shadow-2xl transition-all hover:scale-105 border-2 ${
                  pack.recommended ? 'border-orange-400 ring-2 ring-orange-200' : 'border-orange-200'
                }`}
              >
                {pack.recommended && (
                  <div className="bg-orange-600 text-white text-xs font-bold py-2 px-4 text-center">
                    {t("photoPacks.recommendedBadge")}
                  </div>
                )}
                
                <CardHeader className="bg-gradient-to-br from-orange-50 to-white">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Camera className="h-6 w-6 text-orange-600" />
                      <CardTitle className="text-lg text-orange-900">
                        {t(pack.nameKey)}
                      </CardTitle>
                    </div>
                    <Shield className="h-5 w-5 text-orange-600" title={t("photoPacks.guarantee.badge")} />
                  </div>
                  <CardDescription>
                    <span className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                      {t(pack.priceKey)}
                    </span>
                    <p className="text-sm mt-2 text-orange-700 font-semibold">
                      {t(pack.photosKey)}
                    </p>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col pt-6">
                  <ul className="space-y-3 mb-8 flex-1">
                    {pack.featuresKeys.map((featureKey) => (
                      <li key={featureKey} className="flex items-start gap-3">
                        <div className="bg-orange-100 rounded-full p-1">
                          <Check className="h-4 w-4 text-orange-600" />
                        </div>
                        <span className="text-sm text-gray-700">
                          {t(featureKey)}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                    size="lg"
                    asChild
                  >
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(pack.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="h-5 w-5" />
                      {t(pack.ctaKey)}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-muted-foreground">
            {t("pricing.footerText")}{" "}
            <a href="#contacto" className="font-bold text-primary underline">
              {t("pricing.footerCta")}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
