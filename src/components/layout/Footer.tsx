import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Instagram } from "lucide-react";

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: branding + social */}
          <div className="space-y-4">
            <Link
              to="/"
              className="flex items-center gap-2 font-display font-semibold text-lg text-foreground hover:text-primary transition-colors"
            >
              <img src="/logo.svg" alt="Studio Pixelens" className="h-8 w-auto" />
              <span>Studio Pixelens</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              {t("footer.tagline")}
            </p>
            <div className="flex gap-4">
              <a
                href={t("footer.social.instagramUrl")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Servicios */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {t("footer.col.services.title")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/#web"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer.col.services.web")}
                </Link>
              </li>
              <li>
                <Link
                  to="/#photo"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer.col.services.photo")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Recursos */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {t("footer.col.resources.title")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/portfolio"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer.col.resources.portfolio")}
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio-webs"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer.col.resources.portfolioWebs")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacto */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {t("footer.col.contact.title")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${t("footer.col.contact.email")}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer.col.contact.email")}
                </a>
              </li>
              <li className="text-muted-foreground">{t("footer.col.contact.phone")}</li>
              <li>
                <Link
                  to="/#contact"
                  className="text-primary hover:underline"
                >
                  {t("footer.col.contact.cta")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom: copyright + legal */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {year} Studio Pixelens. {t("footer.rightsReserved")}
          </p>
          <ul className="flex gap-6 text-sm text-muted-foreground">
            <li>
              <Link to="/privacidad" className="hover:text-foreground transition-colors">
                {t("footer.legal.privacy")}
              </Link>
            </li>
            <li>
              <Link to="/cookies" className="hover:text-foreground transition-colors">
                {t("footer.legal.cookies")}
              </Link>
            </li>
            <li>
              <Link to="/aviso-legal" className="hover:text-foreground transition-colors">
                {t("footer.legal.terms")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
