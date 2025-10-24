// src/components/Footer.tsx
import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "@/assets/Logo2-PP.png"; // Considera una versión blanca del logo si esta no contrasta bien

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  // IDs de secciones actualizadas para coincidir con Index.tsx si es necesario
  const footerLinks = {
    quickLinks: [
      // Asumiendo que PricingSection tiene id="packs-web" y PhotoPricingSection id="packs-foto"
      { labelKey: "nav.home", href: "/" }, // Enlace a Inicio
      { labelKey: "nav.services", href: "/#packs" }, // Enlace a la sección general de packs
      { labelKey: "nav.portfolio", href: "/portfolio" }, // Enlace a página portfolio foto
      { labelKey: "nav.webExamples", href: "/portfolio-webs" }, // Enlace a portfolio webs
      { labelKey: "nav.about", href: "/#sobre-mi" },
      { labelKey: "nav.contact", href: "/#contacto" },
    ],
    services: [
      { labelKey: "footer.links.webDesign", href: "/#packs" }, // Apunta a la sección general
      { labelKey: "footer.links.photography", href: "/#packs" }, // Apunta a la sección general
      // Los siguientes podrían necesitar sus propias secciones o páginas si son importantes
      // { labelKey: "footer.links.seo", href: "#" },
      // { labelKey: "footer.links.maintenance", href: "#" },
    ],
  };

  return (
    // Usa bg-primary y text-primary-foreground como base
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {" "}
          {/* Aumentado gap */}
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
            {/* MODIFICADO: Usar text-blue-100 para texto secundario con mejor contraste */}
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
              {" "}
              {/* Aumentado space-y */}
              {footerLinks.quickLinks.map((link) => (
                <li key={link.labelKey}>
                  <a
                    href={link.href}
                    // MODIFICADO: Usar text-blue-100 para enlaces
                    className="text-blue-100 hover:text-cta transition-colors inline-block"
                  >
                    {t(link.labelKey)}
                  </a>
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
              {" "}
              {/* Aumentado space-y */}
              {footerLinks.services.map((link) => (
                <li key={link.labelKey}>
                  <a
                    href={link.href}
                    // MODIFICADO: Usar text-blue-100 para enlaces
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
                {/* MODIFICADO: Usar text-blue-100 */}
                <span className="text-blue-100">{t("footer.location")}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 mt-0.5 text-cta" />
                <a
                  href="tel:+34667326300"
                  // MODIFICADO: Usar text-blue-100
                  className="text-blue-100 hover:text-cta transition-colors"
                >
                  +34 667 32 63 00
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 mt-0.5 text-cta" />
                <a
                  href="mailto:studiopixelens@gmail.com"
                  // MODIFICADO: Usar text-blue-100
                  className="text-blue-100 hover:text-cta transition-colors"
                >
                  studiopixelens@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* MODIFICADO: Usar text-blue-100 para copyright */}
            <p className="text-blue-100 text-sm text-center md:text-left">
              Copyright © {currentYear} Studio Pixelens.{" "}
              {t("footer.rightsReserved")}
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-blue-100 hover:text-cta transition-colors"
              >
                {t("footer.privacy")}
              </a>
              <a
                href="#"
                className="text-blue-100 hover:text-cta transition-colors"
              >
                {t("footer.terms")}
              </a>
              <a
                href="#"
                className="text-blue-100 hover:text-cta transition-colors"
              >
                {t("footer.cookies")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
