// src/pages/Index.tsx
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionDivider from "@/components/SectionDivider";
import HorizontalShowcase from "@/components/HorizontalShowcase";
import PricingSection from "@/components/SimplePricingSection";
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
      <main>
        <Hero />
        <SectionDivider />
        <HorizontalShowcase />
        <PricingSection />
        <PhotoPricingSection />
        <WhyUs />
        <Testimonials />
        <About />
        <FormSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
