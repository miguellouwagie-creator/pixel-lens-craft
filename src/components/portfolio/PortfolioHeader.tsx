import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Heading } from "@/components/ui/heading";

interface PortfolioHeaderProps {
  breadcrumbKey: string;
  eyebrowKey: string;
  headlineKey: string;
  bodyKey: string;
}

export function PortfolioHeader({
  breadcrumbKey,
  eyebrowKey,
  headlineKey,
  bodyKey,
}: PortfolioHeaderProps) {
  const { t } = useTranslation();

  return (
    <section className="pt-16 pb-12 md:pt-20 md:pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 md:mb-10"
        >
          {t(breadcrumbKey)}
        </Link>
        <Heading level={6} eyebrow className="text-primary mb-4">
          {t(eyebrowKey)}
        </Heading>
        <Heading level={1} className="mb-6 max-w-4xl">
          {t(headlineKey)}
        </Heading>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          {t(bodyKey)}
        </p>
      </div>
    </section>
  );
}
