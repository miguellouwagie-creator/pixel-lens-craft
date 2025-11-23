// src/components/Header.tsx
import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  MessageCircle,
  ChevronDown,
  Camera,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import logo from "@/assets/Logo2-PP.png";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPortfolioDropdownOpen, setIsPortfolioDropdownOpen] = useState(false);
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();

  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight - 100);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { labelKey: "nav.home", to: "/" },
    { labelKey: "nav.services", to: "/#service-selector" },
    {
      labelKey: "nav.portfolio",
      to: "#",
      dropdown: [
        { labelKey: "nav.photoPortfolio", to: "/portfolio", icon: "Camera" },
      ],
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

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    to: string,
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (to === "/") {
      if (window.location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/");
      }
      return;
    }

    if (to.includes("#")) {
      const [path, hash] = to.split("#");
      if (window.location.pathname === path || path === "/" || path === "") {
        const targetPath = path || "/";
        if (window.location.pathname === targetPath) {
          const element = document.getElementById(hash);
          if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
              elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
          }
        } else {
          navigate(targetPath);
          setTimeout(() => {
            const element = document.getElementById(hash);
            if (element) {
              const headerOffset = 100;
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition =
                elementPosition + window.pageYOffset - headerOffset;
              window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            }
          }, 150);
        }
      } else {
        navigate(to);
      }
    } else {
      navigate(to);
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  };

  const handleMouseEnterDropdown = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setIsPortfolioDropdownOpen(true);
  };

  const handleMouseLeaveDropdown = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsPortfolioDropdownOpen(false);
    }, 400);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ease-out",
        isScrolled ? "py-1" : "py-2 md:py-3",
      )}
    >
      <div className="container mx-auto px-4">
        <nav
          className={cn(
            "transition-all duration-500 ease-out",
            isScrolled
              ? "bg-white/95 backdrop-blur-md shadow-lg w-full rounded-xl border border-border"
              : "bg-white/10 backdrop-blur-lg border border-white/20 w-full md:w-[95%] lg:w-[90%] mx-auto rounded-full shadow-2xl",
            isMobileMenuOpen && "bg-white shadow-lg",
          )}
        >
          <div className="flex items-center justify-between px-4 md:px-6 py-2 md:py-3">
            {/* Logo */}
            <a
              href="/"
              onClick={(e) => handleNavClick(e, "/")}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <img
                src={logo}
                alt="Studio Pixelens"
                className="h-20 md:h-22 lg:h-26 w-auto transition-transform group-hover:scale-105"
              />
              <div className="hidden md:block">
                <div
                  className={cn(
                    "text-lg md:text-xl font-black leading-tight transition-colors duration-300",
                    isScrolled || isMobileMenuOpen
                      ? "text-primary"
                      : "text-white",
                  )}
                >
                  Studio Pixelens
                </div>
                <div
                  className={cn(
                    "text-xs transition-colors duration-300",
                    isScrolled || isMobileMenuOpen
                      ? "text-muted-foreground"
                      : "text-white/80",
                  )}
                >
                  {t("header.tagline")}
                </div>
                <div className="flex items-center gap-1 mt-0.5">
                  <div className="w-1.5 h-1.5 bg-cta rounded-full"></div>
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-cta">
                    {t("header.badge")}
                  </span>
                </div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div
                    key={item.labelKey}
                    className="relative"
                    onMouseEnter={handleMouseEnterDropdown}
                    onMouseLeave={handleMouseLeaveDropdown}
                  >
                    <button
                      className={cn(
                        "flex items-center gap-1 font-semibold transition-all duration-300 hover:scale-105",
                        isScrolled
                          ? "text-orange-600 hover:text-orange-700"
                          : "text-white/90 hover:text-white",
                      )}
                    >
                      {t(item.labelKey)}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${isPortfolioDropdownOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {isPortfolioDropdownOpen && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-xl shadow-2xl border-2 border-gray-100 p-3 z-[9999]">
                        <div className="flex gap-3">
                          {item.dropdown.map((subItem) => {
                            const Icon =
                              subItem.icon === "Camera" ? Camera : Globe;
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
                                className={`group flex items-center gap-2.5 px-5 py-3 rounded-lg transition-all cursor-pointer ${isPhoto
                                  ? "bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 border-2 border-purple-200 hover:border-purple-400"
                                  : "bg-gradient-to-r from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 border-2 border-blue-200 hover:border-blue-400"
                                  }`}
                              >
                                <div
                                  className={`rounded-full p-2 transition-all ${isPhoto
                                    ? "bg-purple-200 group-hover:bg-purple-300"
                                    : "bg-blue-200 group-hover:bg-blue-300"
                                    }`}
                                >
                                  <Icon
                                    className={`h-4 w-4 ${isPhoto
                                      ? "text-purple-700"
                                      : "text-blue-700"
                                      }`}
                                  />
                                </div>
                                <span
                                  className={`font-bold whitespace-nowrap text-sm ${isPhoto
                                    ? "text-purple-800 group-hover:text-purple-900"
                                    : "text-blue-800 group-hover:text-blue-900"
                                    }`}
                                >
                                  {t(subItem.labelKey)}
                                </span>
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
                    className={cn(
                      "font-semibold transition-all duration-300 hover:scale-105",
                      isScrolled
                        ? "text-foreground hover:text-primary"
                        : "text-white/90 hover:text-white",
                    )}
                  >
                    {t(item.labelKey)}
                  </a>
                ),
              )}
            </nav>

            {/* Right Section: Languages + WhatsApp CTA */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Language Toggles */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => changeLanguage("es")}
                  className={`w-8 h-6 rounded overflow-hidden border-2 transition-all ${i18n.language === "es"
                    ? (isScrolled ? "border-primary" : "border-white") +
                    " scale-110"
                    : "border-transparent opacity-60 hover:opacity-100"
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
                  className={`w-8 h-6 rounded overflow-hidden border-2 transition-all ${i18n.language === "en"
                    ? (isScrolled ? "border-primary" : "border-white") +
                    " scale-110"
                    : "border-transparent opacity-60 hover:opacity-100"
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

              {/* WhatsApp CTA - SIEMPRE CON ALTO CONTRASTE */}
              <Button
                className="flex items-center gap-2 bg-gradient-to-r from-cta to-orange-600 hover:from-orange-600 hover:to-cta text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-full"
                asChild
              >
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t("nav.whatsapp")}
                </a>
              </Button>
            </div>

            {/* Mobile: Language + Menu Toggle */}
            <div className="flex items-center gap-3 lg:hidden">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => changeLanguage("es")}
                  className={`w-7 h-5 rounded overflow-hidden border-2 transition-all ${i18n.language === "es"
                    ? (isScrolled || isMobileMenuOpen
                      ? "border-primary"
                      : "border-white") + " scale-110"
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
                  className={`w-7 h-5 rounded overflow-hidden border-2 transition-all ${i18n.language === "en"
                    ? (isScrolled || isMobileMenuOpen
                      ? "border-primary"
                      : "border-white") + " scale-110"
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
                className={cn(
                  "p-2 transition-colors",
                  isMobileMenuOpen || isScrolled
                    ? "text-foreground"
                    : "text-white",
                )}
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
            <div className="lg:hidden border-t border-border bg-white">
              <nav className="flex flex-col gap-2 px-4 py-4">
                {navItems.map((item) =>
                  item.dropdown ? (
                    <div key={item.labelKey} className="flex flex-col">
                      <button
                        onClick={() =>
                          setIsPortfolioDropdownOpen(!isPortfolioDropdownOpen)
                        }
                        className="flex items-center justify-between text-foreground hover:text-primary font-semibold py-2 transition-colors"
                      >
                        {t(item.labelKey)}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${isPortfolioDropdownOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      {isPortfolioDropdownOpen && (
                        <div className="ml-4 mt-2 flex flex-col space-y-2">
                          {item.dropdown.map((subItem) => {
                            const Icon =
                              subItem.icon === "Camera" ? Camera : Globe;
                            return (
                              <a
                                key={subItem.labelKey}
                                href={subItem.to}
                                onClick={(e) => {
                                  handleNavClick(e, subItem.to);
                                  setIsMobileMenuOpen(false);
                                  setIsPortfolioDropdownOpen(false);
                                }}
                                className="flex items-center gap-2 text-gray-600 hover:text-primary py-2 transition-colors"
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
                      className="text-foreground hover:text-primary font-semibold py-2 transition-colors"
                    >
                      {t(item.labelKey)}
                    </a>
                  ),
                )}

                <Button
                  className="w-full mt-2 bg-gradient-to-r from-cta to-orange-600 hover:from-orange-600 hover:to-cta text-white font-bold rounded-full"
                  asChild
                >
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    {t("nav.whatsapp")}
                  </a>
                </Button>
              </nav>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
