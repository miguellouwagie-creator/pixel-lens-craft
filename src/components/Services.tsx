import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Camera, Package, Check } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Páginas Web Profesionales",
      description: "Sitios web modernos, responsivos y optimizados para convertir visitantes en clientes",
      features: [
        "Diseño responsive",
        "SEO local optimizado",
        "Velocidad de carga optimizada",
        "Integración redes sociales",
        "Panel de administración"
      ],
      price: "Desde 600€",
      cta: "Más Información",
      ctaHref: "#contacto",
      featured: false,
    },
    {
      icon: Camera,
      title: "Fotografía Profesional de Negocio",
      description: "Capturamos la esencia de tu empresa con fotografías que transmiten profesionalidad",
      features: [
        "Fotografía corporativa",
        "Fotos de productos",
        "Fotografía inmobiliaria",
        "Edición profesional",
        "Entrega digital"
      ],
      price: "Desde 200€",
      cta: "Ver Portfolio",
      ctaHref: "#portfolio",
      featured: false,
    },
    {
      icon: Package,
      title: "Web + Fotografía",
      description: "La combinación perfecta: tu página web profesional con sesión fotográfica incluida",
      features: [
        "Todo lo de diseño web",
        "Sesión fotográfica completa",
        "Integración de fotos en web",
        "Optimización para velocidad",
        "12 meses soporte"
      ],
      price: "Desde 750€",
      priceNote: "(Ahorra 50€)",
      cta: "¡Quiero Este Paquete!",
      ctaHref: "#contacto",
      featured: true,
    },
  ];

  return (
    <section id="servicios" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Servicios que Impulsan tu Negocio
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluciones completas para que tu empresa destaque en el mundo digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={service.title}
                className={`hover-lift ${
                  service.featured
                    ? "border-2 border-cta shadow-xl relative"
                    : "border border-border"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {service.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cta text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Más Popular
                  </div>
                )}
                
                <CardHeader>
                  <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-xl">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-cta flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-border">
                    <div className="text-3xl font-bold text-primary mb-1">{service.price}</div>
                    {service.priceNote && (
                      <div className="text-sm text-cta font-semibold">{service.priceNote}</div>
                    )}
                  </div>
                </CardContent>

                <CardFooter>
                  <Button
                    variant={service.featured ? "cta" : "outline"}
                    className="w-full"
                    size="lg"
                    asChild
                  >
                    <a href={service.ctaHref}>{service.cta}</a>
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
