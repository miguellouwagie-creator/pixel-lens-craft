import Hero from '@/components/home/Hero';
import HomeServices from '@/components/home/HomeServices';
import HomeCasesWeb from '@/components/home/HomeCasesWeb';
import HomePhotoShowcase from '@/components/home/HomePhotoShowcase';
import HomeProcess from '@/components/home/HomeProcess';
import HomeAbout from '@/components/home/HomeAbout';
import Testimonials from '@/components/home/Testimonials';
import HomeContact from '@/components/home/HomeContact';

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

      <HomeContact />
    </div>
  );
};

export default Index;
