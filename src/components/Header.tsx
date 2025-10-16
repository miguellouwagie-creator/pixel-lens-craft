import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import logo from "@/assets/Logoo.png";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { labelKey: "nav.home", to: "/" },
    { labelKey: "nav.services", to: "/#packs" },
    { labelKey: "nav.about", to: "/#sobre-mi" },
    { labelKey: "nav.contact", to: "/#contacto" },
  ];

  const whatsappNumber = "34667326300";
  const whatsappMessage = "Hola, estoy interesado en vuestros servicios";

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  // Función para manejar la navegación con scroll suave
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    // Si es el botón de Inicio "/"
    if (to === "/") {
      if (window.location.pathname === "/") {
        // Si ya estamos en la home, hacer scroll al top
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        // Si estamos en otra página, navegar a home
        navigate("/");
      }
      return;
    }

    // Si el link tiene hash
    if (to.includes("#")) {
      const [path, hash] = to.split("#");
      
      // Si estamos en la misma página o el path es "/"
      if (window.location.pathname === path || path === "/") {
        const element = document.getElementById(hash);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      } else {
        // Si estamos en otra página, navegar primero y luego hacer scroll
        navigate(path);
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
          }
        }, 100);
      }
    } else {
      // Navegación normal sin hash
      navigate(to);
    }
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
          <a 
            href="/"
            onClick={(e) => handleNavClick(e, "/")}
            className="flex items-center gap-3 group cursor-pointer"
          >
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
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.labelKey}
                href={item.to}
                onClick={(e) => handleNavClick(e, item.to)}
                className="text-foreground hover:text-primary font-medium transition-colors cursor-pointer"
              >
                {t(item.labelKey)}
              </a>
            ))}
          </nav>

          {/* Desktop CTA + Banderas DESPUÉS */}
          <div className="hidden lg:flex items-center space-x-8">

            <Button variant="cta" size="default" asChild>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                {t("nav.whatsapp")}
              </a>
            </Button>

            {/* Banderas DESPUÉS del botón WhatsApp */}
            <div className="flex items-center gap-2 ml-auto pl-8 border-l border-border">
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
                <a
                  key={item.labelKey}
                  href={item.to}
                  onClick={(e) => handleNavClick(e, item.to)}
                  className="text-foreground hover:text-primary font-medium py-2 transition-colors cursor-pointer"
                >
                  {t(item.labelKey)}
                </a>
              ))}

              <Button
                variant="cta"
                size="default"
                className="w-full mt-2"
                asChild
              >
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <MessageCircle className="h-4 w-4" />
                  {t("nav.whatsapp")}
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
