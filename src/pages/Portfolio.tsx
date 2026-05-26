import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { PortfolioHeader } from "@/components/portfolio/PortfolioHeader";
import { PortfolioIntro } from "@/components/portfolio/PortfolioIntro";
import { PortfolioGallery } from "@/components/portfolio/PortfolioGallery";
import { PortfolioClosing } from "@/components/portfolio/PortfolioClosing";
import { galleryData } from "@/data/galleryData";

export default function Portfolio() {
  return (
    <>
      <Header />
      <main>
        <PortfolioHeader
          breadcrumbKey="portfolio.header.breadcrumb"
          eyebrowKey="portfolio.header.eyebrow"
          headlineKey="portfolio.header.headline"
          bodyKey="portfolio.header.body"
        />
        <PortfolioIntro />
        <PortfolioGallery items={galleryData} />
        <PortfolioClosing
          headingKey="portfolio.closing.heading"
          bodyKey="portfolio.closing.body"
          ctaPrimaryKey="portfolio.closing.ctaPrimary"
          linkCrossKey="portfolio.closing.linkCross"
          linkCrossHref="/portfolio-webs"
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
