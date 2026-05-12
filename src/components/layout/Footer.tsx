import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Instagram } from "lucide-react";

export function Footer() {
  const { t } = useTranslation();
  const phone = import.meta.env.VITE_WHATSAPP_NUMBER ?? "";
  const waHref = phone ? `https://wa.me/${phone}` : "#";

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: branding + claim + social */}
          <div className="space-y-4">
            <Link
              to="/"
              className="flex items-center gap-2 font-display font-semibold text-lg text-foreground hover:text-primary transition-colors"
            >
              <img src="/logo.svg" alt="Studio Pixelens" className="h-8 w-auto" />
              <span>Studio Pixelens</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              {t("common.footer.claim")}
            </p>
            <a
              href={t("footer.social.instagramUrl")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-block text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>

          {/* Col 2: navegación */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {t("common.footer.navHeading")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("common.nav.home")}
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("common.nav.services")}
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("common.nav.portfolio")}
                </Link>
              </li>
              <li>
                <Link to="/#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("common.nav.about")}
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("common.nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: contacto */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {t("common.footer.contactHeading")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:studiopixelens@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  studiopixelens@gmail.com
                </a>
              </li>
              {phone && (
                <li>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
              )}
              <li className="text-muted-foreground">{t("common.footer.location")}</li>
            </ul>
          </div>

          {/* Col 4: legal */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {t("common.footer.legalHeading")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacidad" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("common.footer.privacy")}
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("common.footer.cookies")}
                </Link>
              </li>
              <li>
                <Link to="/aviso-legal" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("common.footer.legalNotice")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom: rights reserved */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">{t("common.footer.rightsReserved")}</p>
        </div>
      </div>
    </footer>
  );
}
