// src/pages/WebDesign.tsx
import Header from "@/components/Header";
import Process from "@/components/Process";
import WebPortfolioShowcase from "@/components/WebPortfolioShowcase";
import WebPricingSection from "@/components/WebPricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import heroImage from "@/assets/PC1.jpg";

const WebDesign = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="relative">
        {/* Hero — 2-column split */}
        <section className="px-8 py-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-32">
          <div>
            <span className="block text-secondary tracking-[0.2em] text-xs font-bold uppercase mb-4">
              The Cinematic Architect
            </span>

            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary leading-[0.95] mb-6">
              Websites that{" "}
              <span className="text-secondary">breathe</span>
              <br />
              and convert.
            </h1>

            <p className="text-on-surface-variant text-lg max-w-lg mb-10 leading-relaxed">
              We engineer digital experiences that merge performance with artistry.
              Every interface is crafted to tell your brand's story and drive results.
            </p>

            <div className="flex gap-6 flex-wrap">
              <a
                href="#process"
                className="inline-flex items-center bg-secondary text-on-secondary px-8 py-4 rounded-md font-label text-sm font-semibold hover:bg-secondary-container transition-all active:scale-95"
              >
                View Our Process
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center border border-outline-variant/20 text-primary px-8 py-4 rounded-md font-label text-sm font-semibold hover:bg-surface-container transition-all active:scale-95"
              >
                Service Packages
              </a>
            </div>
          </div>

          {/* Right: image + floating badge */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-xl">
              <img
                src={heroImage}
                alt="Web design showcase"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-8 rounded-xl shadow-xl">
              <span className="block text-3xl font-headline font-bold text-secondary mb-1">98%</span>
              <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant font-semibold">
                Success Rate
              </span>
            </div>
          </div>
        </section>

        {/* Process */}
        <div id="process">
          <Process />
        </div>

        {/* Featured work */}
        <WebPortfolioShowcase />

        {/* Pricing */}
        <div id="pricing">
          <WebPricingSection />
        </div>

        {/* CTA */}
        <CTASection />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default WebDesign;
