// src/components/SimplePricingSection.tsx
import { Check, Camera } from "lucide-react";

const whatsappNumber = "34667326300";

const tiers = [
  {
    name: "Essential Corporate",
    price: "€350",
    description: "Professional headshots and team portraits tailored for modern brands.",
    features: [
      "1 Hour on-location session",
      "Up to 5 team members",
      "15 High-end retouched photos",
      "Digital delivery in 48h",
      "Commercial usage rights",
    ],
    featured: false,
    whatsappMessage: "Hola, me interesa la sesión Essential Corporate",
  },
  {
    name: "Architectural Suite",
    price: "€650",
    description: "Highlighting spaces with precise geometry and natural light control.",
    features: [
      "Half-day coverage (4 hours)",
      "Interior & exterior spaces",
      "Drone/Aerial photography included",
      "40 High-end retouched photos",
      "Advanced perspective correction",
      "Commercial usage rights",
    ],
    featured: true,
    whatsappMessage: "Hola, me interesa la sesión Architectural Suite",
  },
  {
    name: "Cinematic Narrative",
    price: "€1,200",
    description: "Full-scale editorial campaigns for product launches and brand storytelling.",
    features: [
      "Full-day coverage (8 hours)",
      "Creative direction & moodboarding",
      "Multiple locations & setups",
      "All viable photos (color graded)",
      "30 High-end magazine retouches",
      "Full buyout rights",
    ],
    featured: false,
    whatsappMessage: "Hola, me interesa la sesión Cinematic Narrative",
  },
];

const SimplePricingSection = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
            Session Packages
          </h2>
          <div className="h-1 w-20 bg-secondary mx-auto mb-6" />
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
            Investment options crafted for different scales of visual storytelling.
          </p>
        </div>

        {/* Pricing grid */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={
                tier.featured
                  ? "bg-primary text-white scale-105 shadow-2xl rounded-xl p-10 relative"
                  : "bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-10"
              }
            >
              {/* Most Popular badge */}
              {tier.featured && (
                <span className="bg-secondary px-4 py-1 text-white text-[10px] font-bold uppercase tracking-tight rounded-bl-lg absolute top-0 right-0">
                  Most Popular
                </span>
              )}

              <h3
                className={`font-headline text-xl font-bold mb-2 ${
                  tier.featured ? "text-white" : "text-primary"
                }`}
              >
                {tier.name}
              </h3>

              <p
                className={`text-sm mb-6 ${
                  tier.featured ? "text-white/70" : "text-on-surface-variant"
                }`}
              >
                {tier.description}
              </p>

              <div className="mb-8">
                <span
                  className={`text-4xl font-headline font-bold ${
                    tier.featured ? "text-white" : "text-secondary"
                  }`}
                >
                  {tier.price}
                </span>
                <span
                  className={`text-sm ml-2 ${
                    tier.featured ? "text-white/70" : "text-on-surface-variant"
                  }`}
                >
                  / session
                </span>
              </div>

              <ul className="space-y-3 mb-10">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={`h-4 w-4 mt-0.5 flex-shrink-0 ${
                        tier.featured ? "text-secondary-fixed" : "text-secondary"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        tier.featured ? "text-white/90" : "text-on-surface-variant"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(tier.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 w-full py-3 rounded-md font-label text-sm font-semibold transition-all active:scale-95 ${
                  tier.featured
                    ? "bg-secondary text-on-secondary hover:bg-secondary-container"
                    : "border border-primary text-primary hover:bg-primary hover:text-on-primary"
                }`}
              >
                <Camera className="h-4 w-4" />
                Book Session
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimplePricingSection;
