import {
  Award,
  DollarSign,
  Clock,
  RotateCcw,
  Headset,
  CheckCircle,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const WhyUs = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 md:py-18 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4">
        
        {/* Header con color */}
        <div className="text-center mb-10 animate-fade-in-up overflow-visible">
          <h2 
            className="text-3xl md:text-5xl font-bold mb-4 text-emerald-600"
            style={{ lineHeight: '1.75', paddingBottom: '1.5rem', marginBottom: '0.5rem' }}
          >
            {t("whyUs.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("whyUs.subtitle")}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          
          {/* 2 Destacadas: Balance entre visual y profesional */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            
            {/* Profesionales Licenciados */}
            <div className="group relative bg-white rounded-3xl p-10 border-2 border-emerald-200 hover:border-emerald-400 shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in-up overflow-hidden">
              {/* Subtle gradient background */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-emerald-100 to-transparent opacity-40 rounded-full -mr-24 -mt-24"></div>
              
              <div className="relative">
                <div className="flex items-start gap-5 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Award className="h-8 w-8 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-100 rounded-full mb-3">
                      <CheckCircle className="h-3.5 w-3.5 text-emerald-700" />
                      <span className="text-xs font-bold text-emerald-700 tracking-wide">
                        {t("whyUs.badges.certified")}
                      </span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {t("whyUs.reason1.title")}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-base">
                  {t("whyUs.reason1.description")}
                </p>
              </div>
            </div>

            {/* Mejor Calidad-Precio */}
            <div className="group relative bg-white rounded-3xl p-10 border-2 border-green-200 hover:border-green-400 shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in-up overflow-hidden" style={{ animationDelay: "0.1s" }}>
              {/* Subtle gradient background */}
              <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-green-100 to-transparent opacity-40 rounded-full -ml-24 -mt-24"></div>
              
              <div className="relative">
                <div className="flex items-start gap-5 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <DollarSign className="h-8 w-8 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 rounded-full mb-3">
                      <CheckCircle className="h-3.5 w-3.5 text-green-700" />
                      <span className="text-xs font-bold text-green-700 tracking-wide">
                        {t("whyUs.badges.topPrice")}
                      </span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {t("whyUs.bestPrice.title")}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-base">
                  {t("whyUs.bestPrice.description")}
                </p>
              </div>
            </div>
          </div>

          {/* 3 Ventajas secundarias: Más visuales */}
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Entrega Rápida */}
            <div className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-emerald-300 shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <Clock className="h-7 w-7 text-emerald-600" strokeWidth={2} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {t("whyUs.reason4.title")}
                </h4>
                <p className="text-base text-gray-600 leading-relaxed">
                  {t("whyUs.reason4.description")}
                </p>
              </div>
            </div>

            {/* Re-editamos Gratis */}
            <div className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-emerald-300 shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <RotateCcw className="h-7 w-7 text-emerald-600" strokeWidth={2} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {t("whyUs.noRefunds.title")}
                </h4>
                <p className="text-base text-gray-600 leading-relaxed">
                  {t("whyUs.noRefunds.description")}
                </p>
              </div>
            </div>

            {/* Soporte Continuo */}
            <div className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-emerald-300 shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <Headset className="h-7 w-7 text-emerald-600" strokeWidth={2} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {t("whyUs.reason6.title")}
                </h4>
                <p className="text-base text-gray-600 leading-relaxed">
                  {t("whyUs.reason6.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
