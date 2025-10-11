import {
  MapPin,
  Award,
  Shield,
  CheckCircle,
  Clock,
  Headset,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const WhyUs = () => {
  const { t } = useTranslation();

  const reasons = [
    {
      icon: Award,
      titleKey: "whyUs.reason1.title",
      descriptionKey: "whyUs.reason1.description",
      highlight: true,
    },
    {
      icon: MapPin,
      titleKey: "whyUs.reason2.title",
      descriptionKey: "whyUs.reason2.description",
      highlight: false,
    },
    {
      icon: CheckCircle,
      titleKey: "whyUs.reason3.title",
      descriptionKey: "whyUs.reason3.description",
      highlight: false,
    },
    {
      icon: Clock,
      titleKey: "whyUs.reason4.title",
      descriptionKey: "whyUs.reason4.description",
      highlight: false,
    },
    {
      icon: Shield,
      titleKey: "whyUs.reason5.title",
      descriptionKey: "whyUs.reason5.description",
      highlight: false,
    },
    {
      icon: Headset,
      titleKey: "whyUs.reason6.title",
      descriptionKey: "whyUs.reason6.description",
      highlight: false,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            {t("whyUs.title")}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("whyUs.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={reason.titleKey}
                className={`text-center group animate-fade-in-up p-6 rounded-2xl transition-all ${
                  reason.highlight
                    ? "bg-gradient-to-br from-cta/10 to-cta/5 border-2 border-cta/30 shadow-lg hover:shadow-xl"
                    : "bg-white hover:bg-slate-50 border border-slate-200 hover:shadow-lg"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 mb-4 rounded-2xl transition-all ${
                    reason.highlight
                      ? "bg-cta/20 group-hover:bg-cta/30"
                      : "bg-primary/10 group-hover:bg-primary/20"
                  }`}
                >
                  <IconComponent
                    className={`h-8 w-8 ${reason.highlight ? "text-cta" : "text-primary"}`}
                  />
                </div>
                <h3
                  className={`text-xl font-bold mb-3 ${reason.highlight ? "text-cta" : "text-foreground"}`}
                >
                  {t(reason.titleKey)}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {t(reason.descriptionKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
