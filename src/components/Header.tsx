import { useState, useEffect } from "react";
import { Menu, X, MessageCircle, ChevronDown, Camera, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import logo from "@/assets/Logoo.png";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPortfolioDropdownOpen, setIsPortfolioDropdownOpen] = useState(false);
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
    { 
      labelKey: "nav.portfolio", 
      to: "#", 
      dropdown: [
        { labelKey: "nav.photoPortfolio", to: "/portfolio", icon: "Camera" },
        { labelKey: "nav.webExamples", to: "/portfolio-webs", icon: "Globe" }
      ]
    },
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
              item.dropdown ? (
                <div 
                  key={item.labelKey}
                  className="relative"
                  onMouseEnter={() => setIsPortfolioDropdownOpen(true)}
                >
                  <button
                    className="flex items-center gap-1 text-orange-600 font-semibold transition-colors cursor-pointer hover:text-orange-700"
                  >
                    {t(item.labelKey)}
                    <ChevronDown className={`h-4 w-4 transition-transform ${isPortfolioDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isPortfolioDropdownOpen && (
                    <div 
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-xl shadow-2xl border-2 border-gray-100 p-3 z-[9999]"
                      onMouseLeave={() => setIsPortfolioDropdownOpen(false)}
                    >
                      <div className="flex gap-3">
                        {item.dropdown.map((subItem) => {
                          const Icon = subItem.icon === "Camera" ? Camera : Globe;
                          const isPhoto = subItem.icon === "Camera";
                          return (
                            <a
                              key={subItem.labelKey}
                              href={subItem.to}
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleNavClick(e, subItem.to);
                                setIsPortfolioDropdownOpen(false);
                              }}
                              className={`group relative flex items-center gap-2.5 px-5 py-3 rounded-lg transition-all cursor-pointer overflow-hidden ${
                                isPhoto 
                                  ? 'bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 border-2 border-purple-200 hover:border-purple-400' 
                                  : 'bg-gradient-to-r from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 border-2 border-blue-200 hover:border-blue-400'
                              }`}
                            >
                              <div className={`rounded-full p-2 transition-all ${
                                isPhoto 
                                  ? 'bg-purple-200 group-hover:bg-purple-300' 
                                  : 'bg-blue-200 group-hover:bg-blue-300'
                              }`}>
                                <Icon className={`h-4 w-4 ${
                                  isPhoto ? 'text-purple-700' : 'text-blue-700'
                                }`} />
                              </div>
                              <span className={`font-bold whitespace-nowrap transition-colors text-sm ${
                                isPhoto 
                                  ? 'text-purple-800 group-hover:text-purple-900' 
                                  : 'text-blue-800 group-hover:text-blue-900'
                              }`}>{t(subItem.labelKey)}</span>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.labelKey}
                  href={item.to}
                  onClick={(e) => handleNavClick(e, item.to)}
                  className="text-foreground hover:text-primary font-medium transition-colors cursor-pointer"
                >
                  {t(item.labelKey)}
                </a>
              )
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
                item.dropdown ? (
                  <div key={item.labelKey} className="flex flex-col">
                    <button
                      onClick={() => setIsPortfolioDropdownOpen(!isPortfolioDropdownOpen)}
                      className="flex items-center justify-between text-foreground hover:text-primary font-medium py-2 transition-colors"
                    >
                      {t(item.labelKey)}
                      <ChevronDown className={`h-4 w-4 transition-transform ${isPortfolioDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isPortfolioDropdownOpen && (
                      <div className="ml-4 mt-2 flex flex-col space-y-2">
                        {item.dropdown.map((subItem) => {
                          const Icon = subItem.icon === "Camera" ? Camera : Globe;
                          return (
                            <a
                              key={subItem.labelKey}
                              href={subItem.to}
                              onClick={(e) => {
                                handleNavClick(e, subItem.to);
                                setIsMobileMenuOpen(false);
                                setIsPortfolioDropdownOpen(false);
                              }}
                              className="flex items-center gap-2 text-gray-600 hover:text-primary py-2 transition-colors cursor-pointer"
                            >
                              <Icon className="h-4 w-4 text-primary" />
                              <span>{t(subItem.labelKey)}</span>
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={item.labelKey}
                    href={item.to}
                    onClick={(e) => handleNavClick(e, item.to)}
                    className="text-foreground hover:text-primary font-medium py-2 transition-colors cursor-pointer"
                  >
                    {t(item.labelKey)}
                  </a>
                )
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
