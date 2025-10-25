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
  Image,
  Award,
  Star,
  TrendingUp,
  Zap,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const PricingSection = () => {
  const { t } = useTranslation();
  const whatsappNumber = "34667326300";

  const photoPacks = [
    {
      nameKey: "photoPacks.trial.name",
      priceKey: "photoPacks.trial.price",
      photosKey: "photoPacks.trial.photos",
      featuresKeys: [
        "photoPacks.trial.feature1",
        "photoPacks.trial.feature2",
        "photoPacks.trial.feature3",
      ],
      ctaKey: "photoPacks.trial.cta",
      whatsappMessage:
        "Hola, quiero solicitar el Pack Prueba gratuito (1 foto)",
    },
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
      whatsappMessage: "Hola, me interesa el Pack Básico (5 fotos - 10€)",
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
      whatsappMessage: "Hola, me interesa el Pack Estándar (10 fotos - 20€)",
      featured: true, // ⬅️ PACK DESTACADO
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
      whatsappMessage: "Hola, me interesa el Pack Premium (20 fotos - 35€)",
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
      whatsappMessage: "Hola, me interesa el Pack Profesional (50 fotos - 60€)",
    },
  ];

  return (
    <div className="py-20" id="photo-packs">
      {/* ============ FOTOGRAFÍA Y EDICIÓN - FONDO OSCURO CON PATTERN ============ */}
      <section
        id="photo-pricing"
        className="bg-slate-950 py-20 relative overflow-hidden"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(234, 88, 12, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)
          `,
        }}
      >
        {/* Pattern de puntos */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle, #334155 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          {/* Header ULTRA VISIBLE */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 rounded-3xl mb-8 shadow-2xl shadow-orange-500/50 animate-pulse">
              <Image className="h-16 w-16 text-white" />
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              {t("photoPacks.title")}
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {t("photoPacks.subtitle")}
            </p>
          </div>

          {/* ==================== BANNER GIGANTE DE CREDIBILIDAD ==================== */}
          <div className="mb-24 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-orange-600 via-orange-500 to-red-600 rounded-3xl p-16 shadow-2xl shadow-orange-500/30 relative overflow-hidden">
              {/* Efecto de brillo diagonal */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />

              {/* Círculos decorativos */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-red-500/20 rounded-full blur-3xl" />

              <div className="grid md:grid-cols-3 gap-12 relative z-10">
                {/* Estadística 1 - MÁS GRANDE */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mb-6 backdrop-blur-sm">
                    <Camera className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-7xl font-black text-white mb-3 drop-shadow-2xl">
                    +500
                  </h3>
                  <p className="text-white/90 font-semibold text-lg">
                    Fotos Editadas
                    <br />
                    en 2025
                  </p>
                </div>

                {/* Estadística 2 */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mb-6 backdrop-blur-sm">
                    <Award className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-7xl font-black text-white mb-3 drop-shadow-2xl">
                    100%
                  </h3>
                  <p className="text-white/90 font-semibold text-lg">
                    Satisfacción
                    <br />
                    Garantizada
                  </p>
                </div>

                {/* Estadística 3 */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mb-6 backdrop-blur-sm">
                    <Star className="h-10 w-10 text-white fill-white" />
                  </div>
                  <h3 className="text-7xl font-black text-white mb-3 drop-shadow-2xl">
                    5.0★
                  </h3>
                  <p className="text-white/90 font-semibold text-lg">
                    Valoración
                    <br />
                    Media
                  </p>
                </div>
              </div>

              {/* Badge inferior MÁS VISIBLE */}
              <div className="mt-12 flex items-center justify-center gap-4 bg-black/20 rounded-full px-8 py-4 backdrop-blur-sm mx-auto max-w-max">
                <Zap className="h-6 w-6 text-yellow-300 fill-yellow-300" />
                <span className="text-white font-bold text-lg">
                  Profesionales Licenciados • Edición Premium • Entrega 24-48h
                </span>
              </div>
            </div>
          </div>

          {/* ==================== CARDS DE PRICING MEJORADAS ==================== */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
            {photoPacks.map((pack) => (
              <Card
                key={pack.nameKey}
                className={`flex flex-col relative transition-all duration-500 ${
                  pack.featured
                    ? "bg-gradient-to-br from-orange-600 to-red-600 border-4 border-orange-400 scale-110 shadow-2xl shadow-orange-500/50 z-10"
                    : "bg-slate-800/70 backdrop-blur-md hover:bg-slate-800 hover:shadow-2xl hover:shadow-orange-500/20 hover:scale-105 border-2 border-slate-600 hover:border-orange-500/50"
                }`}
              >
                {/* Badge "MÁS POPULAR" */}
                {pack.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-slate-900 px-6 py-2 rounded-full font-black text-sm shadow-lg whitespace-nowrap">
                    ⚡ MÁS POPULAR
                  </div>
                )}

                <CardHeader
                  className={pack.featured ? "bg-black/20" : "bg-slate-900/50"}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Camera
                      className={`h-6 w-6 ${pack.featured ? "text-white" : "text-orange-500"}`}
                    />
                    <CardTitle className="text-lg text-white">
                      {t(pack.nameKey)}
                    </CardTitle>
                  </div>
                  <CardDescription>
                    <span
                      className={`text-5xl font-black ${
                        pack.featured
                          ? "text-white drop-shadow-lg"
                          : "bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"
                      }`}
                    >
                      {t(pack.priceKey)}
                    </span>
                    <p
                      className={`text-sm mt-2 font-semibold ${pack.featured ? "text-white/90" : "text-gray-300"}`}
                    >
                      {t(pack.photosKey)}
                    </p>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col pt-6">
                  <ul className="space-y-3 mb-8 flex-1">
                    {pack.featuresKeys.map((featureKey) => (
                      <li key={featureKey} className="flex items-start gap-3">
                        <div
                          className={`rounded-full p-1 ${
                            pack.featured ? "bg-white/20" : "bg-orange-500/20"
                          }`}
                        >
                          <Check
                            className={`h-4 w-4 ${pack.featured ? "text-white" : "text-orange-500"}`}
                          />
                        </div>
                        <span
                          className={`text-sm ${pack.featured ? "text-white/90" : "text-gray-300"}`}
                        >
                          {t(featureKey)}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      pack.featured
                        ? "bg-white text-orange-600 hover:bg-gray-100 font-black shadow-xl"
                        : t(pack.priceKey) === "Gratis" ||
                            t(pack.priceKey) === "Free"
                          ? "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold"
                          : "bg-orange-600 hover:bg-orange-700 text-white font-bold"
                    } shadow-lg hover:shadow-xl transition-all text-base py-6`}
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

      {/* Footer de sección */}
      <div className="bg-slate-950 py-16 border-t-2 border-orange-500/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl text-gray-300">
            {t("pricing.footerText")}{" "}
            <a
              href="#contacto"
              className="font-bold text-orange-500 underline decoration-2 hover:text-orange-400 transition-colors"
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
