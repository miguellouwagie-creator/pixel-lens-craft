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
        <Hero />
        <SectionDivider /> {/* Nueva sección de transición */}
        {/*         <Services /> */}
        <PricingSection /> {/* Nueva sección web simplificada */}
        <PhotoPricingSection /> {/* Sección de fotografía completa */}
        <WhyUs />
        {/* <Portfolio /> ELIMINADO COMPLETAMENTE */}
        <Testimonials />
        {/* <Process /> */}
        <About />
        <FormSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
