import Hero from '@/components/home/Hero';
import HomeServices from '@/components/home/HomeServices';
import HomeCasesWeb from '@/components/home/HomeCasesWeb';
import HomePhotoShowcase from '@/components/home/HomePhotoShowcase';
import HomeProcess from '@/components/home/HomeProcess';
import HomeAbout from '@/components/home/HomeAbout';
import Testimonials from '@/components/home/Testimonials';

const Index = () => {
  return (
    <div>
      <Hero />
      <HomeServices />
      <HomeCasesWeb />
      <HomePhotoShowcase />
      <HomeProcess />
      {/* Divider T2 — SectionDivider descartado, inlinado aquí */}
      <div aria-hidden className="border-t border-border/40 my-16 mx-auto max-w-6xl" />
      <HomeAbout />
      <Testimonials />

      {/* Placeholder contacto — lorem heredado Fase 4 (D36-3). Subfase 5.4 sustituye por FormSection REBUILD. */}
      <section id="contact" className="py-24 md:py-32">
        <div className="container max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <input
                disabled
                placeholder="Lorem ipsum nombre"
                className="w-full rounded-md border border-input bg-muted px-4 py-3 text-sm text-muted-foreground cursor-not-allowed"
              />
              <input
                disabled
                placeholder="lorem@ipsum.com"
                className="w-full rounded-md border border-input bg-muted px-4 py-3 text-sm text-muted-foreground cursor-not-allowed"
              />
              <textarea
                disabled
                rows={4}
                placeholder="Lorem ipsum dolor sit amet..."
                className="w-full rounded-md border border-input bg-muted px-4 py-3 text-sm text-muted-foreground cursor-not-allowed resize-none"
              />
            </div>
            <div className="space-y-3 text-muted-foreground">
              <p className="font-medium text-foreground">Lorem ipsum datos de contacto</p>
              <p>lorem@ipsum.com</p>
              <p>+34 600 000 000</p>
              <p>Lorem ipsum, Dénia, Alicante</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
