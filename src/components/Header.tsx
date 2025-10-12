import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { i18n, t } = useTranslation(); // ← AÑADIDO 't' aquí

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { labelKey: "nav.home", to: "/" },
    { labelKey: "nav.services", to: "/#servicios" },
    { labelKey: "nav.packs", to: "/#packs" },
    { labelKey: "nav.about", to: "/#sobre-mi" },
    { labelKey: "nav.contact", to: "/#contacto" },
  ];

  const whatsappNumber = "34667326300";
  const whatsappMessage = "Hola, estoy interesado en vuestros servicios";

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-white/95 backdrop-blur-sm py-3"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo + Nombre + Badge profesional */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Studio Pixelens - Páginas Web y Fotografía"
              className="h-16 md:h-20 w-auto transition-transform group-hover:scale-105"
            />
            <div className="hidden md:block">
              <div className="text-xl md:text-2xl font-bold text-primary leading-tight">
                Studio Pixelens
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">
                {t("header.tagline")}
              </div>
              <div className="flex items-center gap-1 mt-0.5">
                <div className="w-1.5 h-1.5 bg-cta rounded-full"></div>
                <span className="text-[10px] md:text-xs text-cta font-semibold uppercase tracking-wide">
                  {t("header.badge")}
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.labelKey}
                to={item.to}
                className="text-foreground hover:text-primary font-medium transition-colors"
              >
                {t(item.labelKey)}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA + Banderas DESPUÉS */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="tel:+34667326300"
              className="flex items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              <span className="font-semibold">{t("nav.phone")}</span>
            </Link>
            <Button variant="cta" size="default" asChild>
              <Link
                to={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                {t("nav.whatsapp")}
              </Link>
            </Button>

            {/* Banderas DESPUÉS del botón WhatsApp */}
            <div className="flex items-center gap-2 ml-6 pl-6 border-l border-border">
              <button
                onClick={() => changeLanguage("es")}
                className={`w-8 h-6 rounded overflow-hidden border-2 transition-all ${
                  i18n.language === "es"
                    ? "border-primary scale-110"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
                aria-label="Español"
              >
                <img
                  src="https://flagcdn.com/es.svg"
                  alt="Español"
                  className="w-full h-full object-cover"
                />
              </button>
              <button
                onClick={() => changeLanguage("en")}
                className={`w-8 h-6 rounded overflow-hidden border-2 transition-all ${
                  i18n.language === "en"
                    ? "border-primary scale-110"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
                aria-label="English"
              >
                <img
                  src="https://flagcdn.com/gb.svg"
                  alt="English"
                  className="w-full h-full object-cover"
                />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button + Banderas Mobile */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Banderas Mobile */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => changeLanguage("es")}
                className={`w-7 h-5 rounded overflow-hidden border-2 transition-all ${
                  i18n.language === "es"
                    ? "border-primary scale-110"
                    : "border-transparent opacity-60"
                }`}
                aria-label="Español"
              >
                <img
                  src="https://flagcdn.com/es.svg"
                  alt="ES"
                  className="w-full h-full object-cover"
                />
              </button>
              <button
                onClick={() => changeLanguage("en")}
                className={`w-7 h-5 rounded overflow-hidden border-2 transition-all ${
                  i18n.language === "en"
                    ? "border-primary scale-110"
                    : "border-transparent opacity-60"
                }`}
                aria-label="English"
              >
                <img
                  src="https://flagcdn.com/gb.svg"
                  alt="EN"
                  className="w-full h-full object-cover"
                />
              </button>
            </div>

            <button
              className="p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.labelKey}
                  to={item.to}
                  className="text-foreground hover:text-primary font-medium py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t(item.labelKey)}
                </Link>
              ))}
              <Link
                to="tel:+34667326300"
                className="flex items-center text-muted-foreground hover:text-primary py-2 transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                <span className="font-semibold">{t("nav.phone")}</span>
              </Link>
              <Button
                variant="cta"
                size="default"
                className="w-full mt-2"
                asChild
              >
                <Link
                  to={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <MessageCircle className="h-4 w-4" />
                  {t("nav.whatsapp")}
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
