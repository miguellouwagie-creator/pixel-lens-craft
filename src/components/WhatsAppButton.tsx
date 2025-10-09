import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "+34123456789";
  const message = "Hola, estoy interesado en sus servicios de diseño web y fotografía.";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        ¡Escríbenos por WhatsApp!
      </span>
    </a>
  );
};

export default WhatsAppButton;
