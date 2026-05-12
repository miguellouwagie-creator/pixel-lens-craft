import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu } from "lucide-react";
import { LanguageToggle } from "./LanguageToggle";
import { WhatsAppButton } from "./WhatsAppButton";
import { MobileNav } from "./MobileNav";

const NAV_ITEMS = [
  { key: "common.nav.home", to: "/" },
  { key: "common.nav.services", to: "/#services" },
  { key: "common.nav.portfolio", to: "/portfolio" },
  { key: "common.nav.about", to: "/#about" },
  { key: "common.nav.contact", to: "/#contact" },
];

export function Header() {
  const { t } = useTranslation();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 h-16 md:h-20 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 font-display font-semibold text-lg text-foreground hover:text-primary transition-colors"
          >
            <img src="/logo.svg" alt="Studio Pixelens" className="h-8 w-auto" />
            <span className="hidden sm:inline">Studio Pixelens</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.key}
                to={item.to}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <div className="hidden sm:block">
              <WhatsAppButton size="sm" />
            </div>
            <button
              className="lg:hidden p-1 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileNavOpen(true)}
              aria-label={t("header.openMobileNav")}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileNav
        open={mobileNavOpen}
        onOpenChange={setMobileNavOpen}
        navItems={NAV_ITEMS}
      />
    </>
  );
}
