import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Globe, Camera, Package, Check, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  const whatsappNumber = "34123456789";

  const services = [
    {
      icon: Globe,
      titleKey: "services.web.title",
      descriptionKey: "services.web.description",
      featuresKeys: [
        "services.web.feature1",
        "services.web.feature2",
        "services.web.feature3",
        "services.web.feature4",
        "services.web.feature5",
      ],
      priceKey: "services.web.price",
      ctaKey: "services.web.cta",
      whatsappMessage:
        "Hola, me interesa información sobre desarrollo de páginas web profesionales",
      bgColor: "from-blue-900 to-slate-800",
      featured: false,
    },
    {
      icon: Camera,
      titleKey: "services.photography.title",
      descriptionKey: "services.photography.description",
      featuresKeys: [
        "services.photography.feature1",
        "services.photography.feature2",
        "services.photography.feature3",
        "services.photography.feature4",
        "services.photography.feature5",
      ],
      priceKey: "services.photography.price",
      ctaKey: "services.photography.cta",
      whatsappMessage:
        "Hola, me interesa información sobre fotografía profesional para mi negocio",
      bgColor: "from-orange-500 to-red-500",
      featured: false,
    },
    {
      icon: Package,
      titleKey: "services.combo.title",
      descriptionKey: "services.combo.description",
      featuresKeys: [
        "services.combo.feature1",
        "services.combo.feature2",
        "services.combo.feature3",
        "services.combo.feature4",
        "services.combo.feature5",
      ],
      priceKey: "services.combo.price",
      priceNoteKey: "services.combo.priceNote",
      ctaKey: "services.combo.cta",
      whatsappMessage: "Hola, me interesa el Pack Web + Fotografía completo",
      bgColor: "from-purple-600 to-indigo-600",
      featured: true,
      badgeKey: "services.combo.badge",
    },
  ];

  return (
    <section id="servicios" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            {t("services.title")}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={service.titleKey}
                className={`hover-lift relative ${
                  service.featured
                    ? "border-4 border-purple-500 shadow-2xl transform scale-105"
                    : "border-2 border-gray-200"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {service.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg z-10">
                    {t(service.badgeKey!)}
                  </div>
                )}

                <div
                  className={`bg-gradient-to-br ${service.bgColor} p-6 text-white`}
                >
                  <div className="mb-4 inline-flex p-3 bg-white/20 backdrop-blur rounded-xl">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl mb-2">
                    {t(service.titleKey)}
                  </CardTitle>
                  <CardDescription className="text-base text-white/90">
                    {t(service.descriptionKey)}
                  </CardDescription>
                </div>

                <CardContent className="pt-6">
                  <ul className="space-y-3 mb-6">
                    {service.featuresKeys.map((featureKey) => (
                      <li key={featureKey} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">
                          {t(featureKey)}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-border">
                    <div className="text-3xl font-bold text-foreground mb-1">
                      {t(service.priceKey)}
                    </div>
                    {service.priceNoteKey && (
                      <div className="text-sm text-purple-600 font-semibold">
                        {t(service.priceNoteKey)}
                      </div>
                    )}
                  </div>
                </CardContent>

                <CardFooter>
                  <Button
                    variant={service.featured ? "default" : "outline"}
                    className={`w-full ${service.featured ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:opacity-90" : ""}`}
                    size="lg"
                    asChild
                  >
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(service.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="h-4 w-4" />
                      {t(service.ctaKey)}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
