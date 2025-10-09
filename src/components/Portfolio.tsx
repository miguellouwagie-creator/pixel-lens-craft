import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      name: "Restaurante La Marina",
      type: "Restaurante",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      result: "Aumento 45% reservas online",
    },
    {
      name: "Hotel Costa Blanca",
      type: "Hotel",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
      result: "Aumento 60% visitas web",
    },
    {
      name: "Boutique Moda Valencia",
      type: "Tienda",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      result: "Aumento 35% ventas online",
    },
    {
      name: "Clínica Dental Dénia",
      type: "Servicios de Salud",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop",
      result: "Aumento 50% nuevas citas",
    },
    {
      name: "Inmobiliaria Costa",
      type: "Inmobiliaria",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      result: "Aumento 40% leads cualificados",
    },
    {
      name: "Gimnasio FitZone",
      type: "Fitness",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
      result: "Aumento 55% inscripciones",
    },
  ];

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Trabajos que Hablan por Sí Solos
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Proyectos exitosos de empresas locales que confiaron en nosotros
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="group relative overflow-hidden rounded-xl shadow-lg hover-lift animate-fade-in-up bg-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-cta font-semibold mb-2">{project.type}</div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{project.name}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <TrendingUp className="h-4 w-4 text-cta" />
                  <span className="font-semibold">{project.result}</span>
                </div>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-white rounded-full p-2 shadow-lg">
                  <ExternalLink className="h-5 w-5 text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <a href="#contacto">Ver Todos los Proyectos</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
