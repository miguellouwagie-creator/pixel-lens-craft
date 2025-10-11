import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from "./locales/es.json";
import en from "./locales/en.json";

// Función segura para leer localStorage
const getStoredLanguage = () => {
  try {
    return localStorage.getItem("language") || "es";
  } catch {
    return "es";
  }
};

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    en: { translation: en },
  },
  lng: getStoredLanguage(),
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
