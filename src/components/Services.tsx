// src/components/Services.tsx
import webImage from "@/assets/PC1.jpg";
import photoImage from "@/assets/editada-1.jpeg";

const Services = () => {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        {/* Heading */}
        <div className="mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
            Core Disciplines
          </h2>
          <div className="h-1 w-20 bg-secondary" />
        </div>

        {/* 2-column grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Web Design card */}
          <div>
            <div className="aspect-[16/10] overflow-hidden rounded-xl">
              <img
                src={webImage}
                alt="Web Design — Interface Architecture"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="bg-surface-container-lowest p-8 -mt-16 relative z-10 mx-6 shadow-sm rounded-lg">
              <span className="block text-secondary text-xs font-label font-semibold uppercase tracking-[0.15em] mb-2">
                Interface Architecture
              </span>
              <h3 className="font-headline text-xl font-bold text-primary mb-3">
                Web Design
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Premium websites that blend performance engineering with visual storytelling.
                From concept to deployment — built to convert, designed to inspire.
              </p>
            </div>
          </div>

          {/* Photography card */}
          <div>
            <div className="aspect-[16/10] overflow-hidden rounded-xl">
              <img
                src={photoImage}
                alt="Editorial Photography"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="bg-surface-container-lowest p-8 -mt-16 relative z-10 mx-6 shadow-sm rounded-lg">
              <span className="block text-secondary text-xs font-label font-semibold uppercase tracking-[0.15em] mb-2">
                Editorial Photography
              </span>
              <h3 className="font-headline text-xl font-bold text-primary mb-3">
                Photography
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Corporate portraits, product narratives, and brand imagery with a cinematic
                edge. Every frame tells the story your brand deserves.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
