import { MessageSquare, FileText, Wrench, CheckCircle, Rocket } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Consulta Inicial",
      subtitle: "(Gratis)",
      description: "Analizamos tu negocio y necesidades",
    },
    {
      icon: FileText,
      title: "Propuesta Personalizada",
      description: "Presupuesto detallado y timeline",
    },
    {
      icon: Wrench,
      title: "Desarrollo y Producción",
      description: "Creamos tu web y realizamos las fotos",
    },
    {
      icon: CheckCircle,
      title: "Revisión y Ajustes",
      description: "Refinamos todo hasta tu satisfacción total",
    },
    {
      icon: Rocket,
      title: "Lanzamiento y Soporte",
      description: "Publicamos y te damos soporte continuo",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Cómo Trabajamos Contigo
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Un proceso transparente y profesional de principio a fin
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-16 left-0 right-0 h-1 bg-border">
              <div className="h-full bg-gradient-to-r from-primary via-cta to-primary w-full"></div>
            </div>

            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div
                    key={step.title}
                    className="relative animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Icon Circle */}
                    <div className="flex justify-center mb-6">
                      <div className="relative z-10 flex items-center justify-center w-32 h-32 bg-white rounded-full border-4 border-primary shadow-lg">
                        <IconComponent className="h-12 w-12 text-primary" />
                      </div>
                    </div>

                    {/* Step Number */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 bg-cta text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                      {index + 1}
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-2 text-foreground">{step.title}</h3>
                      {step.subtitle && (
                        <div className="text-sm font-semibold text-cta mb-2">{step.subtitle}</div>
                      )}
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Vertical Timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.title}
                className="flex gap-6 items-start animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon and Number */}
                <div className="relative flex-shrink-0">
                  <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full border-4 border-primary shadow-lg">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-cta text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-bold mb-1 text-foreground">{step.title}</h3>
                  {step.subtitle && (
                    <div className="text-sm font-semibold text-cta mb-2">{step.subtitle}</div>
                  )}
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
