// src/pages/Index.tsx
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceSelector from "@/components/ServiceSelector"; // ⬅️ NUEVO IMPORT
import SectionDivider from "@/components/SectionDivider";
import HorizontalShowcase from "@/components/HorizontalShowcase";
import StickyScrollSection from "@/components/StickyScrollSection";
import PhotoPricingSection from "@/components/PricingSection";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import FormSection from "@/components/FormSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="relative">
        {/* Hero Section - Sticky con efecto parallax */}
        <section id="hero-section">
          <Hero />
        </section>

        {/* ================================================ */}
        {/* SERVICE SELECTOR - Índice de Servicios Dual     */}
        {/* ================================================ */}
        <ServiceSelector />

        {/* Todas las secciones después del Hero tienen fondo sólido que oculta el video */}
        <SectionDivider />

        <HorizontalShowcase />

        <SectionDivider />

        {/* Sección de Proceso con Scroll-Spy */}
        <StickyScrollSection />

        {/* Sección de Precio con Módulos de Valor */}
        <PhotoPricingSection />

        <SectionDivider />

        {/* Sección "Por Qué Elegirnos" con animaciones avanzadas */}
        <WhyUs />

        <SectionDivider />

        <Testimonials />

        <SectionDivider />

        <About />

        <FormSection />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
