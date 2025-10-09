import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      business: "Restaurante La Marina",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      text: "Increíble trabajo. No solo nos crearon una web preciosa, sino que también hicieron las fotos de nuestro restaurante. Todo en un solo lugar, fue muy cómodo y profesional.",
      rating: 5,
    },
    {
      name: "Carlos Ruiz",
      business: "Hotel Costa Blanca",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      text: "La mejor inversión que hemos hecho. Nuestra web es espectacular y las fotos del hotel son de nivel profesional. Las reservas han aumentado significativamente.",
      rating: 5,
    },
    {
      name: "Ana Martínez",
      business: "Boutique Moda Valencia",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      text: "Son de Dénia y entienden perfectamente el mercado local. El servicio post-venta es excelente, siempre disponibles cuando los necesitamos.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="relative hover-lift animate-fade-in-up border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <Quote className="h-10 w-10 text-primary/20 mb-4" />
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-cta text-cta" />
                  ))}
                </div>

                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.business}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
