import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PricingSection from "@/components/PricingSection";
import WhyUs from "@/components/WhyUs";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
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
        <Services />
        <PricingSection />
        <WhyUs />
        <Portfolio />
        <Testimonials />
        <Process /> {/* ← Solo UNA vez */}
        <About />
        <FormSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
