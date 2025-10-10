import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <section id="inicio" className="relative pt-28 md:pt-32 pb-20 md:pb-28 bg-gradient-to-br from-primary via-primary to-primary/90 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Edición Profesional de Fotografías
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
              Transformamos tus fotos con edición profesional. Entrega en menos de 48 horas. Hasta 3 re-ediciones incluidas. Prueba gratuita disponible.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button 
                variant="cta" 
                size="xl" 
                onClick={() => navigate(user ? '/dashboard' : '/auth')}
              >
                {user ? 'Ir al Dashboard' : 'Empezar Ahora'}
              </Button>
              <Button variant="outlineWhite" size="xl" asChild>
                <a href="#servicios">Ver Packs</a>
              </Button>
            </div>

            {/* Trust Elements */}
            <div className="flex flex-wrap gap-6 md:gap-8">
              {["Entrega 24-48h", "Hasta 3 Re-ediciones", "Muestra Gratuita"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-cta" />
                  <span className="font-semibold text-white/95">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Edición profesional de fotografías"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-cta text-white px-6 py-4 rounded-xl shadow-xl hidden md:block">
              <div className="text-3xl font-bold">2€/foto</div>
              <div className="text-sm">Precio Máximo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
