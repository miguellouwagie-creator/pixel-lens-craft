import { useTranslation } from "react-i18next";

const SectionDivider = () => {
  const { t } = useTranslation();

  return (
    <div className="relative overflow-hidden">
      {/* Gradiente que conecta Hero negro con sección azul */}
      <div 
        className="py-10 md:py-12"
        style={{
          background: "linear-gradient(180deg, #000000 0%, #0f172a 50%, #1e3a8a 100%)"
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            
            {/* Línea decorativa naranja superior */}
            <div className="flex justify-center items-center gap-3 mb-5">
              <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-orange-500 to-orange-600 rounded-full"></div>
              <div className="h-1.5 w-1.5 bg-orange-500 rounded-full animate-pulse"></div>
              <div className="h-0.5 w-20 bg-gradient-to-l from-transparent via-orange-500 to-orange-600 rounded-full"></div>
            </div>

            {/* Texto impactante con gradiente blanco-naranja */}
            <h2 className="text-2xl md:text-4xl font-bold mb-5 leading-tight">
              <span className="bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent">
                {t("divider.title")}
              </span>
            </h2>

            {/* Línea decorativa naranja inferior */}
            <div className="flex justify-center items-center gap-3 mt-5">
              <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-orange-500 to-orange-600 rounded-full"></div>
              <div className="h-1.5 w-1.5 bg-orange-500 rounded-full animate-pulse"></div>
              <div className="h-0.5 w-20 bg-gradient-to-l from-transparent via-orange-500 to-orange-600 rounded-full"></div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionDivider;
