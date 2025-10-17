import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import WebPortfolioShowcase from "@/components/WebPortfolioShowcase";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const PortfolioWebs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Back Button - Fixed Position */}
      <div className="fixed top-24 left-4 z-50">
        <Button
          variant="ghost"
          className="text-blue-300 hover:text-white bg-slate-900/80 backdrop-blur"
          asChild
        >
          <a href="/#packs" className="flex items-center gap-2">
            <ArrowLeft className="h-5 w-5" />
            Volver
          </a>
        </Button>
      </div>

      <main className="pt-20">
        <WebPortfolioShowcase />
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PortfolioWebs;
