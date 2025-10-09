import ContactForm from "./ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

const FormSection = () => {
  return (
    <section id="formulario" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Hablemos de Tu Proyecto
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Estamos aquí para ayudarte a hacer crecer tu negocio. Rellena el formulario y nos pondremos en contacto contigo lo antes posible.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Ubicación</h3>
                  <p className="text-muted-foreground">Dénia, Valencia (Marina Alta)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Teléfono</h3>
                  <a href="tel:+34123456789" className="text-muted-foreground hover:text-primary transition-colors">
                    +34 123 456 789
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Email</h3>
                  <a href="mailto:info@pixelandlensdigital.com" className="text-muted-foreground hover:text-primary transition-colors">
                    info@pixelandlensdigital.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-secondary rounded-xl">
              <h3 className="font-bold text-foreground mb-3">Horario de Atención</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Lunes - Viernes: 9:00 - 19:00</p>
                <p>Sábados: 10:00 - 14:00</p>
                <p>Domingos: Cerrado</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="bg-secondary p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Formulario de Contacto</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
