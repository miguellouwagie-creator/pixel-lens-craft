import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contacto" className="py-20 md:py-28 bg-gradient-to-br from-primary/5 to-cta/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              ¿Listo para Impulsar tu Negocio?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Obtén una consulta gratuita y descubre cómo podemos ayudarte
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 animate-fade-in-up">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-cta flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-1">Sin Compromiso</h3>
                  <p className="text-sm text-muted-foreground">Primera consulta totalmente gratuita</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-cta flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-1">Respuesta en 24h</h3>
                  <p className="text-sm text-muted-foreground">Te contactamos en menos de un día</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" asChild>
                <a href="#formulario">Solicitar Consulta Gratuita</a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="tel:+34123456789" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Llamar Ahora
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
