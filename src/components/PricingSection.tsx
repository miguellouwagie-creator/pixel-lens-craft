// src/components/PricingSection.tsx
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
  Zap,
  CheckCircle2,
  Briefcase,
  Star,
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
      id: "corporate",
      nameKey: "photoPacks.corporate.name",
      priceKey: "photoPacks.corporate.price",
      photosKey: "photoPacks.corporate.photos",
      featuresKeys: [
        "photoPacks.corporate.feature1",
        "photoPacks.corporate.feature2",
        "photoPacks.corporate.feature3",
        "photoPacks.corporate.feature4",
      ],
      ctaKey: "photoPacks.corporate.cta",
      whatsappMessage: t("photoPacks.corporate.whatsappMessage"),
      recommended: true,
      icon: Briefcase,
    },
    {
      id: "custom",
      nameKey: "photoPacks.custom.name",
      priceKey: "photoPacks.custom.price",
      photosKey: "photoPacks.custom.photos",
      featuresKeys: [
        "photoPacks.custom.feature1",
        "photoPacks.custom.feature2",
        "photoPacks.custom.feature3",
        "photoPacks.custom.feature4",
      ],
      ctaKey: "photoPacks.custom.cta",
      whatsappMessage: t("photoPacks.custom.whatsappMessage"),
      recommended: false,
      icon: Camera,
    },
  ];

  return (
    <div className="py-20" id="photo-packs">
      <section
        className="bg-gradient-to-br from-orange-50 via-amber-100 to-orange-200 py-20 relative overflow-hidden"
        style={{
          backgroundImage: `
          linear-gradient(135deg, rgba(251, 146, 60, 0.1) 0%, transparent 50%),
          linear-gradient(-45deg, rgba(249, 115, 22, 0.15) 0%, transparent 70%),
          radial-gradient(ellipse at top right, rgba(251, 146, 60, 0.2) 0%, transparent 60%),
          radial-gradient(ellipse at bottom left, rgba(234, 88, 12, 0.25) 0%, transparent 50%)
        `,
        }}
      >
        {/* Patron de puntos sutil */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #ea580c 1.5px, transparent 1.5px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-orange-100/50 to-transparent blur-2xl"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-orange-200/40 to-transparent blur-2xl"></div>

        {/* Badge flotante */}
        <div className="absolute top-8 right-8 z-20 hidden lg:block">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl px-6 py-4 shadow-2xl shadow-orange-500/50 border-2 border-orange-400 animate-pulse">
            <div className="flex items-center gap-3">
              <Award className="h-8 w-8" />
              <div className="text-left">
                <div className="text-2xl font-bold">+200</div>
                <div className="text-xs font-semibold">Empresas impulsadas</div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight text-center">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-700 via-red-600 to-orange-700 drop-shadow-lg">
                {t("photoPacks.title")}
              </span>
              <span className="block text-amber-500 drop-shadow-[0_2px_8px_rgba(217,119,6,0.4)] mt-2">
                {t("photoPacks.titleHighlight")}
              </span>
            </h2>

            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-amber-100 backdrop-blur-sm border border-orange-300 rounded-full px-5 py-2.5 shadow-md mb-4">
              <Zap className="h-4 w-4 text-orange-600 fill-orange-600" />
              <span className="text-orange-800 font-semibold text-sm">
                {t("photoPacks.subBadge")}
              </span>
            </div>

            <p className="text-xl text-orange-800 max-w-3xl mx-auto mb-10 font-medium">
              {t("photoPacks.subtitle")}
            </p>
          </div>

          <div className="mb-16 max-w-7xl mx-auto space-y-8">
            {/* Garantía */}
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl shadow-orange-500/10 border-2 border-orange-300 transform hover:scale-105 transition-all duration-300">
                <div className="flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-4 md:p-5 shadow-lg">
                      <Shield
                        className="h-10 w-10 md:h-14 md:w-14 text-white"
                        strokeWidth={2.5}
                      />
                    </div>
                  </div>
                  <div className="text-center md:text-left flex-1">
                    <h3 className="text-2xl md:text-3xl font-black text-orange-900 mb-2 md:mb-3 flex flex-col md:flex-row items-center justify-center md:justify-start gap-2">
                      <CheckCircle2 className="h-6 w-6 md:h-7 md:w-7 text-green-600 flex-shrink-0" />
                      <span>{t("photoPacks.guarantee.title")}</span>
                    </h3>
                    <p
                      className="text-sm md:text-base text-gray-700 leading-relaxed font-medium"
                      dangerouslySetInnerHTML={{
                        __html: t("photoPacks.guarantee.description"),
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Demo Visual y CTA Lateral */}
            <div className="flex flex-col md:grid md:grid-cols-2 gap-8 items-center">
              {/* Columna Izquierda: Imagen Antes/Después */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white w-full max-w-md mx-auto md:max-w-none">
                <div className="relative aspect-[4/3]">
                  <img
                    src={beforeDemo}
                    alt="Antes de editar"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      showAfterDemo ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <img
                    src={afterDemo}
                    alt="Después de editar"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      showAfterDemo ? "opacity-100" : "opacity-0"
                    }`}
                  />
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
                  <button
                    onClick={() => setShowAfterDemo(!showAfterDemo)}
                    className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-bold shadow-2xl transition-all hover:scale-105"
                  >
                    {showAfterDemo
                      ? t("photoPacks.demo.viewBefore")
                      : t("photoPacks.demo.viewAfter")}
                  </button>
                </div>
                <p className="text-xs text-gray-600 mt-3 font-normal text-center px-4 pb-3">
                  {t("photoPacks.demo.caption")}
                </p>
              </div>

              {/* Columna Derecha: Botón y Lista Reordenados */}
              <div className="space-y-8 flex flex-col justify-center h-full">
                {/* 1. BOTÓN (Ahora arriba y ajustado) */}
                <div className="text-center md:text-left">
                  <div className="inline-block relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 rounded-2xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
                    <Button
                      size="lg"
                      // Eliminado w-full, ajustado padding para que no sea tan enorme
                      className="relative bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white text-xl font-black px-8 py-5 shadow-2xl shadow-orange-500/50 hover:shadow-orange-500/80 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 border-4 border-orange-400 rounded-2xl overflow-hidden"
                      asChild
                    >
                      <a
                        href="/portfolio"
                        className="flex items-center justify-between gap-4 relative z-10"
                      >
                        <Eye className="h-8 w-8 animate-bounce group-hover:animate-none flex-shrink-0" />
                        <span className="tracking-wide drop-shadow-lg text-center flex-1 whitespace-nowrap">
                          {t("photoPacks.demo.cta")}
                        </span>
                        <ArrowRight className="h-8 w-8 flex-shrink-0" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* 2. CAJA DE PUNTOS (Ahora abajo y ajustada al contenido) */}
                <div className="flex items-center justify-center md:justify-start">
                  {/* Eliminado w-full para que se ajuste al contenido */}
                  <div className="bg-white/80 backdrop-blur p-6 rounded-2xl border border-orange-200 shadow-lg">
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-orange-900 font-medium">
                        <Check className="h-5 w-5 text-orange-600 flex-shrink-0" />
                        {t("photoPacks.demo.feature1")}
                      </li>
                      <li className="flex items-center gap-3 text-orange-900 font-medium">
                        <Check className="h-5 w-5 text-orange-600 flex-shrink-0" />
                        {t("photoPacks.demo.feature2")}
                      </li>
                      <li className="flex items-center gap-3 text-orange-900 font-medium">
                        <Check className="h-5 w-5 text-orange-600 flex-shrink-0" />
                        {t("photoPacks.demo.feature3")}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* GRID DE PRECIOS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {photoPacks.map((pack) => (
              <Card
                key={pack.id}
                className={`flex flex-col bg-white hover:shadow-2xl transition-all hover:scale-105 border-2 relative overflow-hidden ${
                  pack.recommended
                    ? "border-orange-500 ring-4 ring-orange-200/50 z-10 scale-[1.02] lg:scale-105 shadow-orange-500/20"
                    : "border-orange-200"
                }`}
              >
                <div
                  className={`text-xs font-bold py-3 px-4 text-center tracking-wider uppercase ${
                    pack.recommended
                      ? "bg-orange-600 text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {pack.recommended
                    ? t("photoPacks.recommendedBadge")
                    : "Opción Flexible"}
                </div>

                <CardHeader className="bg-gradient-to-br from-orange-50/50 to-white pb-2">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-orange-100 rounded-xl">
                      <pack.icon className="h-8 w-8 text-orange-600" />
                    </div>
                    {pack.recommended && (
                      <div className="flex items-center gap-1 text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                        <Star className="h-4 w-4 fill-orange-600" />
                        <span className="text-xs font-bold">Top Seller</span>
                      </div>
                    )}
                  </div>

                  <CardTitle className="text-2xl text-gray-900 font-bold">
                    {t(pack.nameKey)}
                  </CardTitle>

                  <div className="mt-6 mb-2">
                    <span className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 leading-none">
                      {t(pack.priceKey)}
                    </span>
                  </div>
                  <p className="text-lg text-orange-800 font-medium">
                    {t(pack.photosKey)}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {t("photoPacks.vatIncluded")}
                  </p>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col pt-6">
                  <div className="flex-1 mb-8">
                    <ul className="space-y-4">
                      {pack.featuresKeys.map((featureKey) => {
                        const featureText = t(featureKey);
                        if (!featureText || featureText.trim() === "")
                          return null;
                        return (
                          <li
                            key={featureKey}
                            className="flex items-start gap-3"
                          >
                            <div className="bg-green-100 rounded-full p-1 mt-0.5 flex-shrink-0">
                              <Check className="h-3.5 w-3.5 text-green-700" />
                            </div>
                            <span className="text-gray-700 font-medium text-sm md:text-base">
                              {t(featureKey)}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <Button
                    className={`w-full font-black text-lg py-8 shadow-lg hover:shadow-xl transition-all rounded-xl ${
                      pack.recommended
                        ? "bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white border-0"
                        : "bg-white hover:bg-orange-50 text-orange-600 border-2 border-orange-200"
                    }`}
                    asChild
                  >
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(pack.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3"
                    >
                      <MessageCircle className="h-6 w-6" />
                      {t(pack.ctaKey)}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-white py-12 border-t border-orange-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-gray-600 font-medium">
            {t("pricing.footerText")}{" "}
            <a
              href="https://wa.me/34667326300"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-orange-600 underline hover:text-orange-700 decoration-2 underline-offset-2"
            >
              {t("pricing.footerCta")}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
