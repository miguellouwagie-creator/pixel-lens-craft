import { MapPin, Settings, Headset } from "lucide-react";

const WhyUs = () => {
  const reasons = [
    {
      icon: MapPin,
      title: "100% Local",
      description: "Conocemos el mercado de Dénia y Marina Alta",
    },
    {
      icon: Settings,
      title: "Servicio Integral",
      description: "Web + Fotografía en un solo lugar",
    },
    {
      icon: Headset,
      title: "Soporte Continuo",
      description: "Te acompañamos después del lanzamiento",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Somos Diferentes, Somos Locales
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Tu agencia digital de confianza en Dénia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={reason.title}
                className="text-center group animate-fade-in-up hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">{reason.title}</h3>
                <p className="text-lg text-muted-foreground">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
