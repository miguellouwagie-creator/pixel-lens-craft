import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.png";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { labelKey: "footer.links.services", href: "#servicios" },
      { labelKey: "footer.links.portfolio", href: "#portfolio" },
      { labelKey: "footer.links.about", href: "#sobre-mi" },
      { labelKey: "footer.links.contact", href: "#contacto" },
    ],
    services: [
      { labelKey: "footer.links.webDesign", href: "#servicios" },
      { labelKey: "footer.links.photography", href: "#servicios" },
      { labelKey: "footer.links.seo", href: "#servicios" },
      { labelKey: "footer.links.maintenance", href: "#servicios" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div>
            <img
              src={logo}
              alt="Pixel & Lens Digital"
              className="h-14 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/80 mb-4 leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 hover:bg-cta rounded-lg flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.labelKey}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-cta transition-colors inline-block"
                  >
                    {t(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t("footer.services")}</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.labelKey}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-cta transition-colors inline-block"
                  >
                    {t(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t("footer.contact")}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-cta" />
                <span className="text-white/80">{t("footer.location")}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 mt-0.5 text-cta" />
                <a
                  href="tel:+34123456789"
                  className="text-white/80 hover:text-cta transition-colors"
                >
                  +34 123 456 789
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 mt-0.5 text-cta" />
                <a
                  href="mailto:info@pixelandlensdigital.com"
                  className="text-white/80 hover:text-cta transition-colors"
                >
                  info@pixelandlensdigital.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              {t("footer.copyright", { year: currentYear })}
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-white/60 hover:text-cta transition-colors"
              >
                {t("footer.privacy")}
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-cta transition-colors"
              >
                {t("footer.terms")}
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-cta transition-colors"
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
