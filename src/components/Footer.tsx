// src/components/Footer.tsx
import { Instagram, Mail, Camera, Globe, Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "@/assets/Logo2-PP.png";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { label: "Interface Architecture", href: "/#service-selector" },
    { label: "Editorial Photography", href: "/portfolio" },
    { label: "Brand Aesthetics", href: "/#packs" },
    { label: "Motion Design", href: "/#packs" },
  ];

  const companyLinks = [
    { label: "About Us", href: "/#sobre-mi" },
    { label: "Our Process", href: "/#service-selector" },
    { labelKey: "footer.privacy", href: "/privacidad", isRoute: true },
    { label: "Terms of Service", href: "/aviso-legal", isRoute: true },
  ];

  return (
    <footer className="bg-surface-dim border-t border-outline-variant/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Col 1: Logo + Tagline + Social Icons */}
          <div>
            <div className="mb-6">
              <img
                src={logo}
                alt="Studio Pixelens"
                className="h-24 md:h-28 w-auto"
              />
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              The Cinematic Architect.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/studio.pixelens/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-outline-variant/30 text-on-surface-variant hover:text-secondary hover:border-secondary transition-all duration-300"
                aria-label="Instagram"
              >
                <Camera className="h-4 w-4" />
              </a>
              <a
                href="/#service-selector"
                className="p-2 rounded-full border border-outline-variant/30 text-on-surface-variant hover:text-secondary hover:border-secondary transition-all duration-300"
                aria-label="Web"
              >
                <Globe className="h-4 w-4" />
              </a>
              <a
                href="mailto:studiopixelens@gmail.com"
                className="p-2 rounded-full border border-outline-variant/30 text-on-surface-variant hover:text-secondary hover:border-secondary transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="font-headline text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-on-surface-variant hover:text-secondary transition-all text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h3 className="font-headline text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label || link.labelKey}>
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="text-on-surface-variant hover:text-secondary transition-all text-sm"
                    >
                      {link.labelKey ? t(link.labelKey) : link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-on-surface-variant hover:text-secondary transition-all text-sm"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter (visual placeholder) */}
          <div>
            <h3 className="font-headline text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6">
              Newsletter
            </h3>
            <p className="text-on-surface-variant text-sm mb-4">
              Stay updated with our latest work and insights.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-3 py-2 text-sm bg-surface-container-lowest border border-outline-variant/30 rounded-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors"
                readOnly
              />
              <button
                type="button"
                className="p-2 bg-secondary text-on-secondary rounded-md hover:bg-secondary-container transition-all active:scale-95"
                aria-label="Subscribe"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-outline-variant/10 text-center text-on-surface-variant text-xs py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>
              © {currentYear} Studio Pixelens.{" "}
              {t("footer.rightsReserved")}
            </p>
            <div className="flex gap-6 text-xs">
              <Link
                to="/privacidad"
                className="text-on-surface-variant hover:text-secondary transition-all"
              >
                {t("footer.privacy")}
              </Link>
              <Link
                to="/aviso-legal"
                className="text-on-surface-variant hover:text-secondary transition-all"
              >
                Aviso Legal
              </Link>
              <Link
                to="/cookies"
                className="text-on-surface-variant hover:text-secondary transition-all"
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
