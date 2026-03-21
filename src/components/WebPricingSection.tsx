// src/components/WebPricingSection.tsx
import { Check, MessageCircle } from "lucide-react";

const whatsappNumber = "34667326300";

const tiers = [
  {
    name: "Essential",
    price: "€1,200",
    description: "Perfect for small businesses launching their digital presence.",
    features: [
      "One-page responsive website",
      "Mobile-first design",
      "Basic SEO setup",
      "Contact form integration",
      "2 rounds of revisions",
      "1-month post-launch support",
    ],
    featured: false,
    whatsappMessage: "Hola, me interesa el plan Essential de diseño web",
  },
  {
    name: "Professional",
    price: "€2,800",
    description: "For brands ready to dominate with a premium multi-page experience.",
    features: [
      "Up to 8 custom pages",
      "Advanced animations & transitions",
      "Full SEO optimization",
      "CMS integration",
      "Performance audit & optimization",
      "3 months post-launch support",
      "Analytics dashboard setup",
    ],
    featured: true,
    whatsappMessage: "Hola, me interesa el plan Professional de diseño web",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for complex projects and enterprise needs.",
    features: [
      "Unlimited pages & custom flows",
      "Custom application development",
      "API integrations",
      "Multi-language support (i18n)",
      "Priority support & SLA",
      "Ongoing maintenance contract",
      "Dedicated project manager",
    ],
    featured: false,
    whatsappMessage: "Hola, me interesa el plan Enterprise de diseño web",
  },
];

const WebPricingSection = () => {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
            Service Packages
          </h2>
          <div className="h-1 w-20 bg-secondary mx-auto mb-6" />
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
            Transparent pricing. No hidden fees. Choose the tier that fits your ambition.
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
                <MessageCircle className="h-4 w-4" />
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebPricingSection;
