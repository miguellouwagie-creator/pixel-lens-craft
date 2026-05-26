import { useTranslation } from "react-i18next";

export function PortfolioIntro() {
  const { t } = useTranslation();

  return (
    <section className="py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-prose-editorial text-muted-foreground max-w-2xl leading-relaxed">
          {t("portfolio.intro.body")}
        </p>
      </div>
    </section>
  );
}
