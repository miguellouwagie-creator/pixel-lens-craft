import { Card, CardContent } from "@/components/ui/card";
import { Star, MapPin, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      nameKey: "testimonials.testimonial1.name",
      locationKey: "testimonials.testimonial1.location",
      textKey: "testimonials.testimonial1.text",
      rating: 5,
      initials: "MG",
      colorClass: "bg-gradient-to-br from-orange-400 to-orange-600",
    },
    {
      nameKey: "testimonials.testimonial2.name",
      locationKey: "testimonials.testimonial2.location",
      textKey: "testimonials.testimonial2.text",
      rating: 5,
      initials: "RM",
      colorClass: "bg-gradient-to-br from-blue-400 to-blue-600",
    },
    {
      nameKey: "testimonials.testimonial3.name",
      locationKey: "testimonials.testimonial3.location",
      textKey: "testimonials.testimonial3.text",
      rating: 5,
      initials: "AL",
      colorClass: "bg-gradient-to-br from-emerald-400 to-emerald-600",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-slate-50 via-white to-slate-50">
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
              className="animate-fade-in-up hover:shadow-2xl transition-all duration-300 bg-white border-0 shadow-lg hover:-translate-y-2 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Decorative gradient top bar */}
              <div className={`h-2 w-full ${testimonial.colorClass}`}></div>
              
              <CardContent className="pt-8 pb-8 px-6">
                {/* Rating Stars - Más prominentes */}
                <div className="flex gap-1 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-orange-500 text-orange-500" />
                  ))}
                </div>

                {/* Testimonial Text - Más grande y legible */}
                <p className="text-gray-700 mb-6 leading-relaxed text-base">
                  "{t(testimonial.textKey)}"
                </p>

                {/* Author Info - Rediseñado sin foto */}
                <div className="flex items-center gap-4 pt-5 border-t border-gray-100">
                  {/* Círculo con iniciales */}
                  <div className={`w-14 h-14 rounded-full ${testimonial.colorClass} flex items-center justify-center text-white font-bold text-lg shadow-md flex-shrink-0`}>
                    {testimonial.initials}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-gray-900 text-base">
                        {t(testimonial.nameKey)}
                      </span>
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <MapPin className="h-3.5 w-3.5 text-gray-400" />
                      <span>{t(testimonial.locationKey)}</span>
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
