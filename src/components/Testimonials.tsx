import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      nameKey: "testimonials.testimonial1.name",
      roleKey: "testimonials.testimonial1.role",
      textKey: "testimonials.testimonial1.text",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    },
    {
      nameKey: "testimonials.testimonial2.name",
      roleKey: "testimonials.testimonial2.role",
      textKey: "testimonials.testimonial2.text",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    },
    {
      nameKey: "testimonials.testimonial3.name",
      roleKey: "testimonials.testimonial3.role",
      textKey: "testimonials.testimonial3.text",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            {t("testimonials.title")}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.nameKey}
              className="animate-fade-in-up hover:shadow-xl transition-all bg-white border-2 border-slate-200 hover:border-primary/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-8 relative">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-primary/10">
                  <Quote className="h-12 w-12" />
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-cta text-cta" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{t(testimonial.textKey)}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <img
                    src={testimonial.image}
                    alt={t(testimonial.nameKey)}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <div className="font-bold text-foreground">
                      {t(testimonial.nameKey)}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t(testimonial.roleKey)}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
