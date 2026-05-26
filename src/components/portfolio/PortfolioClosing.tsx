import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MessageCircle } from "lucide-react";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";

interface PortfolioClosingProps {
  headingKey: string;
  bodyKey: string;
  ctaPrimaryKey: string;
  linkCrossKey: string;
  linkCrossHref: string;
}

export function PortfolioClosing({
  headingKey,
  bodyKey,
  ctaPrimaryKey,
  linkCrossKey,
  linkCrossHref,
}: PortfolioClosingProps) {
  const { t } = useTranslation();
  const phone = import.meta.env.VITE_WHATSAPP_NUMBER ?? "";
  const message = encodeURIComponent(t("common.whatsapp.prefilledMessage"));
  const waHref = phone ? `https://wa.me/${phone}?text=${message}` : "#";

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <Heading level={2} className="mb-4 max-w-2xl mx-auto">
          {t(headingKey)}
        </Heading>
        <p className="text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
          {t(bodyKey)}
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild variant="primary" size="lg">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("common.whatsapp.ariaLabel")}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              {t(ctaPrimaryKey)}
            </a>
          </Button>

          <Button asChild variant="outline-primary" size="lg">
            <Link to={linkCrossHref}>{t(linkCrossKey)}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
