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
      className="fixed top-0 left-0 right-0 w-full z-[9999]"
    >
      <nav
        className={cn(
          "w-full transition-all duration-500 ease-out glass-nav",
          isScrolled
            ? "bg-surface/80 shadow-sm border-b border-outline-variant/20"
            : "bg-surface/60",
          isMobileMenuOpen && "bg-surface shadow-sm",
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between py-3 md:py-4">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => handleNavClick(e, "/")}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <img
              src={logo}
              alt="Studio Pixelens"
              className="h-16 md:h-20 lg:h-22 w-auto transition-transform group-hover:scale-105"
            />
            <span className="hidden md:block text-xl font-headline font-bold tracking-tighter text-primary">
              Studio Pixelens
            </span>
          </a>

          {/* Desktop Navigation — Center */}
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
                    className="flex items-center gap-1 font-headline text-sm tracking-tight text-on-surface/70 hover:text-secondary transition-colors duration-300"
                  >
                    {t(item.labelKey)}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${isPortfolioDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {isPortfolioDropdownOpen && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 bg-surface-container-lowest rounded-lg shadow-lg border border-outline-variant/20 p-3 z-[9999]">
                      <div className="flex gap-3">
                        {item.dropdown.map((subItem) => {
                          const Icon =
                            subItem.icon === "Camera" ? Camera : Globe;
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
                              className="group flex items-center gap-2.5 px-5 py-3 rounded-md bg-primary-fixed/30 hover:bg-primary-fixed border border-outline-variant/20 hover:border-primary/30 transition-all cursor-pointer"
                            >
                              <div className="rounded-full p-2 bg-primary-fixed-dim/40 group-hover:bg-primary-fixed-dim/60 transition-all">
                                <Icon className="h-4 w-4 text-primary" />
                              </div>
                              <span className="font-headline font-bold whitespace-nowrap text-sm text-primary group-hover:text-primary-container">
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
                  className="font-headline text-sm tracking-tight text-on-surface/70 hover:text-secondary transition-colors duration-300"
                >
                  {t(item.labelKey)}
                </a>
              ),
            )}
          </nav>

          {/* Right Section: Languages + Contact CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Toggles */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => changeLanguage("es")}
                className={`w-8 h-6 rounded overflow-hidden border-2 transition-all ${i18n.language === "es"
                  ? "border-primary scale-110"
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
                  ? "border-primary scale-110"
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

            {/* Contact CTA */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary text-on-secondary px-6 py-2 rounded-md font-label text-sm font-semibold hover:bg-secondary-container transition-all active:scale-95"
            >
              <MessageCircle className="h-4 w-4" />
              {t("nav.whatsapp")}
            </a>
          </div>

          {/* Mobile: Language + Menu Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <div className="flex items-center gap-2">
              <button
                onClick={() => changeLanguage("es")}
                className={`w-7 h-5 rounded overflow-hidden border-2 transition-all ${i18n.language === "es"
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
                className={`w-7 h-5 rounded overflow-hidden border-2 transition-all ${i18n.language === "en"
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
              className="p-2 text-on-surface transition-colors"
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
          <div className="lg:hidden border-t border-outline-variant/20 bg-surface">
            <nav className="flex flex-col gap-2 px-4 py-4">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.labelKey} className="flex flex-col">
                    <button
                      onClick={() =>
                        setIsPortfolioDropdownOpen(!isPortfolioDropdownOpen)
                      }
                      className="flex items-center justify-between font-headline text-sm text-on-surface hover:text-secondary font-semibold py-2 transition-colors"
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
                              className="flex items-center gap-2 text-on-surface-variant hover:text-secondary py-2 transition-colors"
                            >
                              <Icon className="h-4 w-4 text-primary" />
                              <span className="font-headline text-sm">{t(subItem.labelKey)}</span>
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
                    className="font-headline text-sm text-on-surface hover:text-secondary font-semibold py-2 transition-colors"
                  >
                    {t(item.labelKey)}
                  </a>
                ),
              )}

              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 w-full mt-2 bg-secondary text-on-secondary px-6 py-2.5 rounded-md font-label text-sm font-semibold hover:bg-secondary-container transition-all active:scale-95"
              >
                <MessageCircle className="h-4 w-4" />
                {t("nav.whatsapp")}
              </a>
            </nav>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
