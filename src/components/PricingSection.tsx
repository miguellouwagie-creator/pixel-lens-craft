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
      featuresKeys: ["photoPacks.basic.feature1"],
      ctaKey: "photoPacks.basic.cta",
      whatsappMessage: t("photoPacks.basic.whatsappMessage"),
      recommended: true,
    },
    {
      nameKey: "photoPacks.standard.name",
      priceKey: "photoPacks.standard.price",
      photosKey: "photoPacks.standard.photos",
      featuresKeys: ["photoPacks.standard.feature1"],
      ctaKey: "photoPacks.standard.cta",
      whatsappMessage: t("photoPacks.standard.whatsappMessage"),
    },
    {
      nameKey: "photoPacks.premium.name",
      priceKey: "photoPacks.premium.price",
      photosKey: "photoPacks.premium.photos",
      featuresKeys: ["photoPacks.premium.feature1"],
      ctaKey: "photoPacks.premium.cta",
      whatsappMessage: t("photoPacks.premium.whatsappMessage"),
    },
    {
      nameKey: "photoPacks.professional.name",
      priceKey: "photoPacks.professional.price",
      photosKey: "photoPacks.professional.photos",
      featuresKeys: ["photoPacks.professional.feature1"],
      ctaKey: "photoPacks.professional.cta",
      whatsappMessage: t("photoPacks.professional.whatsappMessage"),
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

        {/* Olas decorativas */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-orange-100/50 to-transparent blur-2xl"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-orange-200/40 to-transparent blur-2xl"></div>

        {/* Badge flotante pequeño arriba a la derecha */}
        <div className="absolute top-8 right-8 z-20 hidden lg:block">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl px-6 py-4 shadow-2xl shadow-orange-500/50 border-2 border-orange-400 animate-pulse">
            <div className="flex items-center gap-3">
              <Award className="h-8 w-8" />
              <div className="text-left">
                <div className="text-2xl font-bold">+500</div>
                <div className="text-xs font-semibold">
                  {t("photoPacks.badge.text")}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Título + Badge elegante */}
          <div className="text-center mb-14">
            <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-700 via-red-600 to-orange-700 mb-6 leading-tight tracking-tight drop-shadow-lg">
              {t("photoPacks.title")}
            </h2>

            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-amber-100 backdrop-blur-sm border border-orange-300 rounded-full px-5 py-2.5 shadow-md mb-4">
              <Zap className="h-4 w-4 text-orange-600 fill-orange-600" />
              <span className="text-orange-800 font-semibold text-sm">
                Profesionales Licenciados • Edición Premium • Entrega 24-48h
              </span>
            </div>

            <p className="text-xl text-orange-800 max-w-3xl mx-auto mb-10 font-medium">
              {t("photoPacks.subtitle")}
            </p>
          </div>

          {/* ==================== LAYOUT CORRECTO ==================== */}
          <div className="mb-16 max-w-7xl mx-auto space-y-8">
            {/* FILA 1: Solo Garantía 100% (ancha, centrada) - MEJORADO PARA MÓVIL */}
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

            {/* FILA 2: Imagen (izquierda) + Botón Portfolio (derecha, alineado con imagen) */}
            <div className="flex flex-col md:grid md:grid-cols-2 gap-8 items-start">
              {/* Imagen Antes/Después - TAMAÑO MEJORADO PARA MÓVIL */}
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
                    {showAfterDemo ? t("photoPacks.demo.viewBefore") : t("photoPacks.demo.viewAfter")}

                  </button>
                </div>
                <p className="text-xs text-gray-600 mt-3 font-normal text-center px-4 pb-3">
                  {t("photoPacks.demo.caption")}
                </p>
              </div>

              {/* Columna derecha: Botón Portfolio + Bullet points */}
              <div className="space-y-6 flex flex-col justify-end">
                {/* Espaciado adicional para bajar el botón */}
                <div className="flex-1"></div>

                {/* Botón CTA Portfolio - iconos a los lados */}
                <div className="text-center">
                  <div className="inline-block relative group w-full">
                    <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 rounded-2xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>

                    <Button
                      size="lg"
                      className="relative bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white text-xl font-black px-10 py-6 shadow-2xl shadow-orange-500/50 hover:shadow-orange-500/80 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 border-4 border-orange-400 rounded-2xl overflow-hidden w-full"
                      asChild
                    >
                      <a
                        href="/portfolio"
                        className="flex items-center justify-between gap-4 relative z-10"
                      >
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

                        {/* Icono izquierdo */}
                        <Eye className="h-8 w-8 animate-bounce group-hover:animate-none group-hover:scale-125 transition-transform flex-shrink-0" />

                        {/* Texto central */}
                        <span className="tracking-wide drop-shadow-lg text-center leading-tight flex-1 text-sm md:text-xl">
                          <span className="hidden md:inline">
                            VER PORTFOLIO FOTOGRAFÍA
                          </span>
                          <span className="md:hidden">VER PORTFOLIO</span>
                        </span>

                        {/* Icono derecho */}
                        <ArrowRight className="h-8 w-8 group-hover:translate-x-2 transition-transform flex-shrink-0" />

                        <Sparkles className="absolute -top-1 -right-1 h-6 w-6 text-yellow-300" />
                      </a>
                    </Button>
                  </div>

                  <p className="text-sm text-orange-800 mt-3 font-bold">
                    ✨ Ve ejemplos reales de nuestro trabajo fotográfico
                  </p>
                </div>

                {/* Bullet points compactos debajo del botón */}
                <div className="bg-white/90 backdrop-blur rounded-xl p-5 shadow-md border border-orange-200 space-y-2.5 max-w-md mx-auto">
                  <div className="flex items-center gap-2.5">
                    <div className="bg-orange-100 rounded-full p-1.5 flex-shrink-0">
                      <Check className="h-4 w-4 text-orange-600" />
                    </div>
                    <span className="text-xs font-bold text-gray-800">
                      +50 proyectos profesionales
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="bg-orange-100 rounded-full p-1.5 flex-shrink-0">
                      <Check className="h-4 w-4 text-orange-600" />
                    </div>
                    <span className="text-xs font-bold text-gray-800">
                      Ejemplos reales de edición
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="bg-orange-100 rounded-full p-1.5 flex-shrink-0">
                      <Check className="h-4 w-4 text-orange-600" />
                    </div>
                    <span className="text-xs font-bold text-gray-800">
                      Antes y después completos
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ==================== GRID DE PACKS (CRO 2 - JERARQUÍA VISUAL ESTRICTA) ==================== */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {photoPacks.map((pack) => (
              <Card
                key={pack.nameKey}
                className={`flex flex-col bg-white hover:shadow-2xl transition-all hover:scale-105 border-2 ${
                  pack.recommended
                    ? "border-orange-500 ring-4 ring-orange-200"
                    : "border-orange-200"
                }`}
              >
                <div
                  className={`text-xs font-bold py-2 px-4 text-center ${pack.recommended ? "bg-orange-600 text-white" : "bg-gradient-to-br from-orange-50 to-white text-transparent select-none"}`}
                >
                  {pack.recommended
                    ? t("photoPacks.recommendedBadge")
                    : "placeholder"}
                </div>

                <CardHeader className="bg-gradient-to-br from-orange-50 to-white">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Camera className="h-5 w-5 text-orange-600" />
                      <CardTitle className="text-base text-orange-900">
                        {t(pack.nameKey)}
                      </CardTitle>
                    </div>
                    <Shield
                      className="h-4 w-4 text-orange-600"
                      title={t("photoPacks.guarantee.badge")}
                    />
                  </div>

                  {/* PRECIO - ELEMENTO MÁS GRANDE (CRO: H2/H3) */}
                  <CardDescription className="text-center mt-4">
                    <span className="text-6xl font-black bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent block leading-none">
                      {t(pack.priceKey)}
                    </span>

                    {/* NÚMERO DE FOTOS - SEGUNDO MÁS IMPORTANTE */}
                    <p className="text-2xl mt-4 text-orange-900 font-black">
                      {t(pack.photosKey)}
                    </p>

                    <span className="block text-xs text-gray-600 font-normal mt-2">
                      {t("photoPacks.vatIncluded")}
                    </span>
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col pt-4">
                  <ul className="space-y-2 mb-6 flex-1">
                    {pack.featuresKeys.map((featureKey) => {
                      const featureText = t(featureKey);
                      if (!featureText || featureText.trim() === "")
                        return null;

                      return (
                        <li key={featureKey} className="flex items-start gap-3">
                          <div className="bg-orange-100 rounded-full p-1 flex-shrink-0">
                            <Check className="h-4 w-4 text-orange-600" />
                          </div>
                          <span className="text-sm text-gray-700">
                            {t(featureKey)}
                          </span>
                        </li>
                      );
                    })}
                  </ul>

                  {/* BOTÓN CTA - ALTO CONTRASTE NARANJA (CRO 3) */}
                  <Button
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-black text-base py-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
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
