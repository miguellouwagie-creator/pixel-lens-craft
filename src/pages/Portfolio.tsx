// src/pages/Portfolio.tsx
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import { ArrowUpRight } from "lucide-react";
import { showcaseProjects, ProjectCategory } from "@/data/showcaseData";
import ScrollToTop from "@/components/ScrollToTop";

type FilterType = "all" | ProjectCategory;

const filters: { id: FilterType; label: string }[] = [
  { id: "all", label: "All Works" },
  { id: "web", label: "Web Design" },
  { id: "photography", label: "Photography" },
  { id: "branding", label: "Brand Identity" },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredProjects = showcaseProjects.filter(
    (p) => activeFilter === "all" || p.category === activeFilter
  );

  return (
    <div className="min-h-screen bg-surface">
      <Header />

      <main className="relative">
        {/* Editorial page header */}
        <header className="pt-32 pb-16 px-8 max-w-7xl mx-auto">
          <span className="font-label text-secondary tracking-widest uppercase text-xs font-bold mb-4 block">
            Showcase
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-primary mb-6">
            The Curated <span className="text-secondary">Archives.</span>
          </h1>
          <p className="text-on-surface-variant text-lg leading-relaxed font-body max-w-2xl">
            Explore our intersection of technical precision and visual storytelling.
            Each project is a testament to intentional design and cinematic aesthetics.
          </p>
        </header>

        {/* Filter bar */}
        <section className="px-8 max-w-7xl mx-auto mb-16">
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`font-label text-sm font-semibold rounded-full px-6 py-2.5 transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-primary text-on-primary shadow-md"
                    : "bg-surface-container-low text-on-surface/70 hover:bg-surface-container-high hover:text-primary"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </section>

        {/* Asymmetric masonry grid (12 columns) */}
        <section className="px-8 max-w-7xl mx-auto mb-32">
          {filteredProjects.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-on-surface-variant text-lg">No projects found in this category yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[300px] gap-6">
              {filteredProjects.map((project, index) => {
                // Alternating pattern via CSS classes based on project span or index
                // Large = col-span-8, Medium = col-span-6, Small = col-span-4
                let colSpan = "md:col-span-4";
                let rowSpan = "row-span-1";

                if (project.span === "large") {
                  colSpan = "md:col-span-8";
                  rowSpan = "md:row-span-2";
                } else if (project.span === "medium") {
                  colSpan = "md:col-span-6";
                  rowSpan = "md:row-span-1";
                } else if (project.span === "small") {
                  colSpan = "md:col-span-4";
                  rowSpan = "md:row-span-1";
                }

                return (
                  <div
                    key={project.id}
                    className={`group relative overflow-hidden rounded-xl ${colSpan} ${rowSpan} bg-surface-container-low`}
                  >
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="absolute bottom-6 left-6 right-6 p-6 md:p-8 bg-surface-container-lowest/95 backdrop-blur-md rounded-xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-xl flex justify-between items-end">
                      <div>
                        <span className="block text-secondary text-xs font-bold tracking-widest uppercase mb-2">
                          {project.category}
                        </span>
                        <h3 className="font-headline text-2xl font-bold text-primary">
                          {project.title}
                        </h3>
                      </div>
                      {(project.span === "large" || project.span === "medium") && (
                        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                          <ArrowUpRight className="h-5 w-5" />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* Editorial section */}
        <div className="border-t border-outline-variant/20 pt-16 mb-16">
          <div className="px-8 max-w-7xl mx-auto text-center mb-8">
            <span className="font-label text-primary tracking-widest uppercase text-xs font-bold">
              The Genesis
            </span>
            <h2 className="font-headline text-3xl font-bold text-primary mt-2">
              We believe in intentional design.
            </h2>
          </div>
          <About />
        </div>

      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Portfolio;
