// src/components/Footer.tsx
import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"; // IMPORTANTE: Importar Link
import logo from "@/assets/Logo2-PP.png";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { labelKey: "nav.home", href: "/" },
      { labelKey: "nav.services", href: "/#packs" },
      { labelKey: "nav.portfolio", href: "/portfolio" },
      { labelKey: "nav.webExamples", href: "/portfolio-webs" },
      { labelKey: "nav.about", href: "/#sobre-mi" },
      { labelKey: "nav.contact", href: "/#contacto" },
    ],
    services: [
      { labelKey: "footer.links.webDesign", href: "/#packs" },
      { labelKey: "footer.links.photography", href: "/#packs" },
    ],
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div>
            <div className="inline-block mb-6 relative">
              <div className="absolute -inset-x-4 -inset-y-1.5 bg-white/20 backdrop-blur-sm rounded-lg"></div>
              <img
                src={logo}
                alt="Studio Pixelens"
                className="relative h-28 md:h-32 lg:h-36 w-auto"
              />
            </div>
            <p className="text-blue-100 mb-4 leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.labelKey}>
                  {/* Usamos Link para rutas internas y a para anclas (#) */}
                  {link.href.startsWith("/#") ? (
                    <a
                      href={link.href}
                      className="text-blue-100 hover:text-cta transition-colors inline-block"
                    >
                      {t(link.labelKey)}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-blue-100 hover:text-cta transition-colors inline-block"
                    >
                      {t(link.labelKey)}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">
              {t("footer.services")}
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.labelKey}>
                  <a
                    href={link.href}
                    className="text-blue-100 hover:text-cta transition-colors inline-block"
                  >
                    {t(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">
              {t("footer.contact")}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-cta" />
                <span className="text-blue-100">{t("footer.location")}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 mt-0.5 text-cta" />
                <a
                  href="tel:+34667326300"
                  className="text-blue-100 hover:text-cta transition-colors"
                >
                  +34 667 32 63 00
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 mt-0.5 text-cta" />
                <a
                  href="mailto:studiopixelens@gmail.com"
                  className="text-blue-100 hover:text-cta transition-colors"
                >
                  studiopixelens@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer - ENLACES LEGALES CORREGIDOS */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-100 text-sm text-center md:text-left">
              Copyright © {currentYear} Studio Pixelens.{" "}
              {t("footer.rightsReserved")}
            </p>
            <div className="flex gap-6 text-sm">
              {/* AQUÍ ESTABA EL ERROR: Usamos Link y rutas reales */}
              <Link
                to="/privacidad"
                className="text-blue-100 hover:text-cta transition-colors"
              >
                {t("footer.privacy")}
              </Link>
              <Link
                to="/aviso-legal"
                className="text-blue-100 hover:text-cta transition-colors"
              >
                Aviso Legal
              </Link>
              <Link
                to="/cookies"
                className="text-blue-100 hover:text-cta transition-colors"
              >
                {t("footer.cookies")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
