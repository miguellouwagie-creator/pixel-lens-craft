import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import About from "@/components/About";
import CTASection from "@/components/CTASection";
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
        <WhyUs />
        <Portfolio />
        <Testimonials />
        <Process />
        <About />
        <CTASection />
        <FormSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
