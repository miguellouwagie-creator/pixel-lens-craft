import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Importar imágenes desde assets
import sinEditar1 from "@/assets/sin-editar-1.jpeg";
import editada1 from "@/assets/editada-1.jpeg";
import sinEditar2 from "@/assets/sin-editar-2.jpeg";
import editada2 from "@/assets/editada-2.png";
import sinEditar3 from "@/assets/sin-editar-3.jpeg";
import editada3 from "@/assets/editada-3.png";
import sinEditar4 from "@/assets/sin-editar-4.jpeg";
import editada4 from "@/assets/editada-4.png";
import sinEditar5 from "@/assets/sin-editar-5.jpg";
import editada5 from "@/assets/editada-5.jpg";
import sinEditar6 from "@/assets/sin-editar-6.jpg";
import editada6 from "@/assets/editada-6.jpg";
import sinEditar8 from "@/assets/sin-editar-8.jpeg";
import editada8 from "@/assets/editada-8.png";
import sinEditar9 from "@/assets/sin-editar-9.jpeg";
import editada9 from "@/assets/editada-9.png";
import sinEditar10 from "@/assets/sin-editar-10.jpeg";
import editada10 from "@/assets/editada-10.png";

const portfolioImages = [
  { before: sinEditar1, after: editada1, id: 1 },
  { before: sinEditar2, after: editada2, id: 2 },
  { before: sinEditar3, after: editada3, id: 3 },
  { before: sinEditar4, after: editada4, id: 4 },
  { before: sinEditar5, after: editada5, id: 5 },
  { before: sinEditar6, after: editada6, id: 6 },
  { before: sinEditar8, after: editada8, id: 8 },
  { before: sinEditar9, after: editada9, id: 9 },
  { before: sinEditar10, after: editada10, id: 10 },
];

const ImageComparison = ({ before, after, id }: { before: string; after: string; id: number }) => {
  const [showAfter, setShowAfter] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white hover:border-orange-500 transition-all duration-300 bg-white group">
      <div className="relative aspect-[4/3]">
        {/* Imagen "Antes" */}
        <img
          src={before}
          alt={`Antes ${id}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${showAfter ? 'opacity-0' : 'opacity-100'}`}
        />
        {/* Imagen "Después" */}
        <img
          src={after}
          alt={`Después ${id}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${showAfter ? 'opacity-100' : 'opacity-0'}`}
        />
        
        {/* Etiquetas */}
        {!showAfter && (
          <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-md text-sm font-bold">
            {t("portfolioGallery.beforeLabel")}
          </div>
        )}
        {showAfter && (
          <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-md text-sm font-bold">
            {t("portfolioGallery.afterLabel")}
          </div>
        )}
        
        {/* Botón para alternar */}
        <button
          onClick={() => setShowAfter(!showAfter)}
          className="absolute bottom-4 right-4 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-bold shadow-lg transition-all transform hover:scale-105 text-sm"
        >
          {showAfter ? "← Antes" : "Después →"}
        </button>
      </div>
    </div>
  );
};

const PortfolioPage = () => {
  const { t } = useTranslation();
  const whatsappNumber = "34667326300";
  const whatsappMessage = t("portfolioGallery.ctaButton");

  return (
    <>
      {/* Encabezado */}
      <header className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-orange-100 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            {t("portfolioGallery.backButton")}
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{t("portfolioGallery.title")}</h1>
          <p className="text-lg md:text-xl text-orange-100 max-w-2xl mx-auto">
            {t("portfolioGallery.subtitle")}
          </p>
        </div>
      </header>

      {/* Galería de Comparación - 3 columnas */}
      <main className="py-16 md:py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {portfolioImages.map((image) => (
              <ImageComparison
                key={image.id}
                before={image.before}
                after={image.after}
                id={image.id}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Sección de Llamada a la Acción (CTA) */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t("portfolioGallery.ctaTitle")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            {t("portfolioGallery.ctaSubtitle")}
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white text-lg px-10 py-7 shadow-2xl hover:shadow-orange-500/60 transform hover:scale-105 transition-all"
            asChild
          >
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <MessageCircle className="h-6 w-6" />
              <span className="font-bold">{t("portfolioGallery.ctaButton")}</span>
            </a>
          </Button>
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;
