import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useTranslation } from "react-i18next";
import { Globe, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const PortfolioWebs = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <Button
              variant="ghost"
              className="text-blue-300 hover:text-white mb-6"
              asChild
            >
              <a href="/#packs" className="flex items-center gap-2">
                <ArrowLeft className="h-5 w-5" />
                Volver
              </a>
            </Button>

            <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-500 rounded-2xl mb-6 shadow-2xl">
              <Globe className="h-12 w-12 text-white" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Portfolio de Páginas Web
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Ejemplos reales de nuestros proyectos web
            </p>
          </div>

          {/* Contenido vacío por ahora */}
          <div className="bg-white/10 backdrop-blur rounded-2xl p-12 text-center">
            <Globe className="h-24 w-24 text-blue-300 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4">
              Portfolio en construcción
            </h2>
            <p className="text-blue-200 mb-8">
              Pronto añadiremos ejemplos de nuestros proyectos web
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
              asChild
            >
              <a href="/#packs">Volver a Packs</a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PortfolioWebs;
