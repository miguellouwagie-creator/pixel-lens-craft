import { Upload, Palette, Download } from "lucide-react";
import { useTranslation } from "react-i18next";

const Process = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: Upload,
      titleKey: "process.step1.title",
      descriptionKey: "process.step1.description",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Palette,
      titleKey: "process.step2.title",
      descriptionKey: "process.step2.description",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: Download,
      titleKey: "process.step3.title",
      descriptionKey: "process.step3.description",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
            {t("process.title")}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("process.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.titleKey}
                className="relative group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`${step.bgColor} rounded-2xl p-6 h-full transition-all hover:shadow-xl border-2 border-transparent hover:border-gray-200`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${step.color} text-white font-bold text-xl shadow-lg`}
                    >
                      {index + 1}
                    </div>

                    <div
                      className={`p-4 rounded-2xl bg-gradient-to-br ${step.color} shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {t(step.descriptionKey)}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <svg
                      className="w-8 h-8 text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">{t("process.ctaText")}</p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-cta text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105"
          >
            {t("process.ctaButton")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
