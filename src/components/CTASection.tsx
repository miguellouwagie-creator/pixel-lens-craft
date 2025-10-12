import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const CTASection = () => {
  const whatsappNumber = "34667326300";
  const whatsappMessage =
    "Hola, me gustaría hablar sobre mi proyecto web y/o fotografía";

  return (
    <section className="bg-primary text-white py-16">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          ¿Listo para dar el siguiente paso?
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Hablemos de tu proyecto. Ya sea una web nueva, fotografía profesional
          o ambos servicios, estamos aquí para ayudarte sin compromiso.
        </p>
        <Button size="lg" variant="secondary" asChild>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <MessageCircle className="h-5 w-5" />
            Hablemos por WhatsApp
          </a>
        </Button>
        <p className="mt-6 text-sm text-white/80">
          También puedes llamarnos directamente al{" "}
          <a href="tel:+34667326300" className="underline font-medium">
            +34 667 32 63 00
          </a>
        </p>
      </div>
    </section>
  );
};

export default CTASection;
