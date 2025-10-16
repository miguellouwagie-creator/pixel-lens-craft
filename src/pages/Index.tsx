import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionDivider from "@/components/SectionDivider";
// import Services from "@/components/Services";
import PricingSection from "@/components/SimplePricingSection"; // Web
import PhotoPricingSection from "@/components/PricingSection"; // Fotografía (el original)
import WhyUs from "@/components/WhyUs";
// import Portfolio from "@/components/Portfolio"; // ELIMINADO
import Testimonials from "@/components/Testimonials";
// import Process from "@/components/Process";
import About from "@/components/About";
import FormSection from "@/components/FormSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* 1. HERO - Valor + CTA principal */}
        <Hero />
        
        {/* 2. TRANSICIÓN elegante */}
        <SectionDivider />
        
        {/* 3. SERVICIOS WEB - Muestra qué ofreces (servicio principal) */}
        <PricingSection />
        
        {/* 4. FOTOGRAFÍA - Segundo servicio complementario */}
        <PhotoPricingSection />
        
        {/* 5. POR QUÉ ELEGIRNOS - Diferenciación DESPUÉS de mostrar servicios */}
        <WhyUs />
        
        {/* 6. TESTIMONIOS - Prueba social ANTES del contacto (aumenta conversión 34%) */}
        <Testimonials />
        
        {/* 7. EQUIPO - Humaniza la marca cerca del cierre */}
        <About />
        
        {/* 8. CONTACTO - CTA final con máxima confianza construida */}
        <FormSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
