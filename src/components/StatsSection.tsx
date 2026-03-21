// src/components/StatsSection.tsx
import showcaseMain from "@/assets/showcase/goldencoast.jpg";
import showcaseSmall1 from "@/assets/showcase/bvs.jpg";
import showcaseSmall2 from "@/assets/showcase/tropidenia.jpg";

const stats = [
  { value: "240+", label: "Average Engagement Increase", color: "text-secondary" },
  { value: "0.8s", label: "Optimized Load Velocity", color: "text-primary" },
  { value: "15", label: "International Design Awards", color: "text-primary" },
];

const StatsSection = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Stats column */}
          <div className="lg:col-span-4 space-y-10">
            {stats.map((stat) => (
              <div key={stat.value}>
                <span className={`block text-4xl font-headline font-bold ${stat.color} mb-1`}>
                  {stat.value}
                </span>
                <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant font-semibold">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Asymmetric image grid */}
          <div className="lg:col-span-8 grid grid-cols-2 grid-rows-2 gap-4 h-[500px] lg:h-[600px]">
            {/* Main image — spans 2 rows on left */}
            <div className="col-span-1 row-span-2 relative overflow-hidden rounded-xl perspective-grid-item">
              <img
                src={showcaseMain}
                alt="Featured Project — The Nexus Atrium"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
                <span className="block text-[10px] font-label uppercase tracking-widest text-white/60 mb-1">
                  Featured Project
                </span>
                <span className="block font-headline text-sm font-bold text-white">
                  The Nexus Atrium
                </span>
              </div>
            </div>

            {/* Top-right small image */}
            <div className="overflow-hidden rounded-xl perspective-grid-item">
              <img
                src={showcaseSmall1}
                alt="Project showcase"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Bottom-right small image */}
            <div className="overflow-hidden rounded-xl perspective-grid-item">
              <img
                src={showcaseSmall2}
                alt="Project showcase"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
