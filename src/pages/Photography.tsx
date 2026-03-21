// src/pages/Photography.tsx
import Header from "@/components/Header";
import SimplePricingSection from "@/components/SimplePricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import heroImage from "@/assets/editada-1.jpeg";
import gridMain from "@/assets/showcase/gymdenia.jpg";
import gridRight1 from "@/assets/showcase/tropidenia.jpg";
import gridRight2 from "@/assets/editada-5.jpg";

const Photography = () => {
  return (
    <div className="min-h-screen bg-surface">
      <Header />

      <main className="relative">
        {/* Hero — split layout */}
        <section className="pt-32 px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-20">
          <div>
            <span className="block text-secondary tracking-[0.2em] text-xs font-bold uppercase mb-4">
              Our Services
            </span>
            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary leading-[0.95] mb-6">
              Capturing the <span className="text-secondary">Cinematic</span>
              <br />
              Essence.
            </h1>
            <p className="text-on-surface-variant text-lg max-w-lg mb-10 leading-relaxed">
              From corporate architecture to bespoke commercial narratives. We don't just take
              photos; we engineer visual stories that command attention and elevate your brand's prestige.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="#pricing"
                className="inline-flex items-center bg-secondary text-on-secondary px-8 py-4 rounded-md font-label text-sm font-semibold hover:bg-secondary-container transition-all active:scale-95"
              >
                Book a Session
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center border border-outline-variant/20 text-primary px-8 py-4 rounded-md font-label text-sm font-semibold hover:bg-surface-container transition-all active:scale-95"
              >
                View Gallery
              </a>
            </div>
          </div>

          {/* Right: full-height image */}
          <div className="relative h-[500px] lg:h-[600px]">
            <div className="w-full h-full overflow-hidden rounded-xl">
              <img
                src={heroImage}
                alt="Editorial Photography"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute top-8 -left-8 bg-surface-container-lowest p-6 rounded-xl shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold">RAW</span>
              </div>
              <div>
                <span className="block text-sm font-headline font-bold text-primary">Featured Project</span>
                <span className="text-xs font-label text-on-surface-variant">Editorial Campaign</span>
              </div>
            </div>
          </div>
        </section>

        {/* Perspective Grid — signature component */}
        <section id="portfolio" className="bg-surface-container-low py-24">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
                The Portfolio Lens
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto" />
            </div>

            <div className="grid md:grid-cols-3 gap-6 h-[800px]">
              {/* Large item (span 2) */}
              <div className="md:col-span-2 relative overflow-hidden rounded-xl perspective-grid-item group h-full">
                <img
                  src={gridMain}
                  alt="Photography Project"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="block text-secondary text-xs font-label uppercase tracking-widest mb-2 font-bold">
                    Commercial
                  </span>
                  <h3 className="text-3xl font-headline font-bold text-white">
                    Athletic Kinetics
                  </h3>
                </div>
              </div>

              {/* Right column (2 stacked items) */}
              <div className="flex flex-col gap-6 h-full">
                <div className="relative overflow-hidden rounded-xl perspective-grid-item group h-1/2">
                  <img
                    src={gridRight1}
                    alt="Architecture Project"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="block text-secondary text-xs font-label uppercase tracking-widest mb-1 font-bold">
                      Architecture
                    </span>
                    <h3 className="text-xl font-headline font-bold text-white">
                      The Tropidenia Space
                    </h3>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-xl perspective-grid-item group h-1/2">
                  <img
                    src={gridRight2}
                    alt="Corporate Portrait"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="block text-secondary text-xs font-label uppercase tracking-widest mb-1 font-bold">
                      Corporate
                    </span>
                    <h3 className="text-xl font-headline font-bold text-white">
                      Executive Portraits
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Session pricing */}
        <div id="pricing">
          <SimplePricingSection />
        </div>

        {/* CTA */}
        <CTASection />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Photography;
