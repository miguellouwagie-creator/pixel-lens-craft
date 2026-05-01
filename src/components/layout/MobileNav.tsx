import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageToggle } from "./LanguageToggle";
import { WhatsAppButton } from "./WhatsAppButton";

interface MobileNavProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  navItems: { key: string; to: string }[];
}

export function MobileNav({ open, onOpenChange, navItems }: MobileNavProps) {
  const { t } = useTranslation();

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:w-96">
        <nav className="flex flex-col gap-4 mt-12">
          {navItems.map((item) => (
            <Link
              key={item.key}
              to={item.to}
              onClick={() => onOpenChange(false)}
              className="text-2xl font-display text-foreground hover:text-primary transition-colors"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>
        <div className="mt-12 flex flex-col gap-4">
          <LanguageToggle />
          <WhatsAppButton size="lg" className="w-full" />
        </div>
      </SheetContent>
    </Sheet>
  );
}
