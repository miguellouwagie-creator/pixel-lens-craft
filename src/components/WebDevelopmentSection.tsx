import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, MessageCircle, Check, AlertCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const WebDevelopmentSection = () => {
  const { t } = useTranslation();
  const whatsappNumber = "34667326300";

  const webPackages = [
    {
      nameKey: "webDevelopment.basic.name",
      setupPriceKey: "webDevelopment.basic.setupPrice",
      monthlyPriceKey: "webDevelopment.basic.monthlyPrice",
      featuresKeys: [
        "webDevelopment.basic.feature1",
        "webDevelopment.basic.feature2",
        "webDevelopment.basic.feature3",
        "webDevelopment.basic.feature4",
      ],
      maintenanceKeys: [
        "webDevelopment.basic.maintenance1",
        "webDevelopment.basic.maintenance2",
      ],
      popular: false,
    },
    {
      nameKey: "webDevelopment.professional.name",
      setupPriceKey: "webDevelopment.professional.setupPrice",
      monthlyPriceKey: "webDevelopment.professional.monthlyPrice",
      badgeKey: "webDevelopment.professional.badge",
      featuresKeys: [
        "webDevelopment.professional.feature1",
        "webDevelopment.professional.feature2",
        "webDevelopment.professional.feature3",
        "webDevelopment.professional.feature4",
      ],
      maintenanceKeys: [
        "webDevelopment.professional.maintenance1",
        "webDevelopment.professional.maintenance2",
      ],
      popular: true,
    },
  ];

  return (
    <section id="desarrollo-web" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Code className="h-5 w-5 text-primary" />
            <span className="text-primary font-semibold">
              {t("webDevelopment.badge")}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {t("webDevelopment.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            {t("webDevelopment.subtitle")}
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {webPackages.map((pkg) => (
            <Card
              key={pkg.nameKey}
              className={`flex flex-col ${pkg.popular ? "border-2 border-cta shadow-xl relative" : ""}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cta text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {t(pkg.badgeKey!)}
                </div>
              )}

              <CardHeader>
                <CardTitle className="text-xl mb-4">{t(pkg.nameKey)}</CardTitle>
                <div className="space-y-2">
                  <div>
                    <div className="text-sm text-muted-foreground">
                      {t("webDevelopment.basic.setupLabel")}
                    </div>
                    <div className="text-3xl font-bold text-primary">
                      {t(pkg.setupPriceKey)}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      {t("webDevelopment.basic.maintenanceLabel")}
                    </div>
                    <div className="text-xl font-bold text-foreground">
                      {t(pkg.monthlyPriceKey)}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-foreground text-sm">
                    {t("webDevelopment.basic.includes")}
                  </h4>
                  <ul className="space-y-2">
                    {pkg.featuresKeys.map((featureKey) => (
                      <li key={featureKey} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{t(featureKey)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2 text-foreground text-sm">
                    {t("webDevelopment.basic.maintenanceTitle")}
                  </h4>
                  <ul className="space-y-2">
                    {pkg.maintenanceKeys.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-cta flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{t(item)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  className={`w-full mt-auto ${pkg.popular ? "bg-gradient-to-r from-cta to-primary hover:from-primary hover:to-cta" : "bg-primary hover:bg-primary/90"} text-white`}
                  size="lg"
                  asChild
                >
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola, me interesa el plan ${t(pkg.nameKey)}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    {t("webDevelopment.basic.cta")}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-secondary p-6 md:p-8 rounded-2xl max-w-4xl mx-auto">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div className="w-full">
              <h3 className="font-bold text-foreground mb-3">
                {t("webDevelopment.infoTitle")}
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t("webDevelopment.info1"),
                    }}
                  />
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t("webDevelopment.info2"),
                    }}
                  />
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t("webDevelopment.info3"),
                    }}
                  />
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t("webDevelopment.info4"),
                    }}
                  />
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  <strong className="text-foreground">
                    {t("webDevelopment.customProject")}
                  </strong>{" "}
                  {t("webDevelopment.customDescription")}{" "}
                  <a
                    href="#contacto"
                    className="text-primary font-medium underline"
                  >
                    {t("webDevelopment.customCta")}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevelopmentSection;
