// src/components/PricingSection.tsx
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, MessageCircle, Camera, Image } from "lucide-react";
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
      {/* ============ FOTOGRAFÍA Y EDICIÓN ============ */}
      <section
        id="photo-pricing" // ⬅️ ID AÑADIDO PARA NAVEGACIÓN
        className="bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 py-20"
      >
        <div className="container mx-auto px-4">
          {/* Header con icono grande */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl mb-6 shadow-2xl">
              <Image className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-orange-900 mb-4">
              {t("photoPacks.title")}
            </h2>
            <p className="text-xl text-orange-700 max-w-3xl mx-auto">
              {t("photoPacks.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {photoPacks.map((pack) => (
              <Card
                key={pack.nameKey}
                className="flex flex-col bg-white hover:shadow-2xl transition-all hover:scale-105 border-2 border-orange-200"
              >
                <CardHeader className="bg-gradient-to-br from-orange-50 to-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Camera className="h-6 w-6 text-orange-600" />
                    <CardTitle className="text-lg text-orange-900">
                      {t(pack.nameKey)}
                    </CardTitle>
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
                    className={`w-full ${t(pack.priceKey) === "Gratis" || t(pack.priceKey) === "Free" ? "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600" : "bg-orange-600 hover:bg-orange-700"} text-white`}
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
