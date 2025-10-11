import { Shield, RefreshCw, Clock, CheckCircle } from "lucide-react";

const guarantees = [
  {
    icon: Shield,
    title: "Imágenes Verificadas",
    description: "Todas nuestras ediciones son verificadas y 100% reales",
  },
  {
    icon: Clock,
    title: "Entrega 24-48h",
    description: "Garantizamos la entrega en máximo 48 horas",
  },
  {
    icon: RefreshCw,
    title: "Hasta 3 Re-ediciones",
    description:
      "No te preocupes, puedes solicitar cambios hasta 3 veces por foto",
  },
  {
    icon: CheckCircle,
    title: "Sin Devoluciones",
    description:
      "Política clara: re-ediciones gratuitas en lugar de devoluciones",
  },
];

const GuaranteesSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Nuestras Garantías
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Tu tranquilidad es nuestra prioridad. Por eso ofrecemos garantías
          claras y transparentes.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guarantees.map((guarantee) => {
            const Icon = guarantee.icon;
            return (
              <div key={guarantee.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {guarantee.title}
                </h3>
                <p className="text-muted-foreground">{guarantee.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GuaranteesSection;
