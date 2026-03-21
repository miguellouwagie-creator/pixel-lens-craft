// src/components/Hero.tsx
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden pt-16">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(100%) brightness(0.85)",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <span className="block text-secondary tracking-[0.2em] text-xs font-bold uppercase mb-4">
          THE CINEMATIC ARCHITECT
        </span>

        <h1 className="font-headline text-6xl md:text-8xl font-extrabold text-primary leading-[0.95] mb-6">
          Precision meets
          <br />
          Artistry.
        </h1>

        <p className="text-on-surface-variant text-lg max-w-lg mb-10 leading-relaxed">
          We craft digital experiences and editorial imagery that elevate brands
          beyond the ordinary. Every pixel, every frame — intentional.
        </p>

        <div className="flex gap-6 flex-wrap">
          <Link
            to="/portfolio"
            className="inline-flex items-center bg-secondary text-on-secondary px-8 py-4 rounded-md font-label text-sm font-semibold hover:bg-secondary-container transition-all active:scale-95"
          >
            Explore Works
          </Link>
          <Link
            to="/#service-selector"
            className="inline-flex items-center border border-outline-variant/20 text-primary px-8 py-4 rounded-md font-label text-sm font-semibold hover:bg-surface-container transition-all active:scale-95"
          >
            Our Process
          </Link>
        </div>
      </div>

      {/* Decorative metadata */}
      <div className="absolute bottom-12 left-8 hidden md:block font-label text-[10px] tracking-widest uppercase opacity-50 text-on-surface-variant">
        ISO 100 · f/2.8 · SHUTTER 1/250s · PIXELENS CORE V2.4
      </div>
    </section>
  );
};

export default Hero;
