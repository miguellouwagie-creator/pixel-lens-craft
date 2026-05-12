import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  size?: "sm" | "default" | "lg";
  variant?: "primary" | "accent" | "outline-primary" | "ghost-accent";
  className?: string;
}

export function WhatsAppButton({
  size = "default",
  variant = "primary",
  className,
}: WhatsAppButtonProps) {
  const { t } = useTranslation();
  const phone = import.meta.env.VITE_WHATSAPP_NUMBER ?? "";
  const message = encodeURIComponent(t("common.whatsapp.prefilledMessage"));
  const href = `https://wa.me/${phone}?text=${message}`;

  if (!phone) {
    if (import.meta.env.DEV) {
      console.warn("WhatsAppButton: VITE_WHATSAPP_NUMBER is not set in .env");
    }
    return null;
  }

  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("common.whatsapp.ariaLabel")}
        title={t("common.whatsapp.tooltip")}
      >
        <MessageCircle className="mr-2 h-4 w-4" />
        {t("common.whatsapp.cta")}
      </a>
    </Button>
  );
}
