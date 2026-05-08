import { useTranslation } from 'react-i18next';
import { Heading } from '@/components/ui/heading';
import { webCasesData } from '@/data/webCasesData';

export default function HomeCasesWeb() {
  const { t } = useTranslation();

  return (
    <section
      id="cases-web"
      aria-labelledby="cases-web-heading"
      className="py-20 md:py-28"
    >
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        <Heading level={6} eyebrow className="mb-3 text-primary">
          {t('home.casesWeb.eyebrow')}
        </Heading>
        <Heading level={2} id="cases-web-heading" className="mb-3 max-w-xl">
          {t('home.casesWeb.heading')}
        </Heading>
        <p className="text-muted-foreground text-lg max-w-xl mb-10">
          {t('home.casesWeb.subheading')}
        </p>
      </div>

      {/* Scroll horizontal con snap */}
      <div
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 px-6 md:px-8"
        style={{ scrollPaddingLeft: '1.5rem' }}
      >
        {/* Spacer alineado con container */}
        <div className="shrink-0 w-[max(0px,calc((100vw-72rem)/2))]" aria-hidden />

        {webCasesData.map((item) => (
          <article
            key={item.id}
            className="snap-start shrink-0 w-[min(80vw,420px)] flex flex-col gap-4"
          >
            {/* Imagen 4:3 */}
            <div className="w-full overflow-hidden rounded-sm" style={{ aspectRatio: '4/3' }}>
              <img
                src={item.image}
                alt={t(item.titleKey)}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Copy */}
            <div className="space-y-3">
              <Heading level={6} eyebrow className="text-muted-foreground">
                {t(item.eyebrowKey)}
              </Heading>
              <Heading level={3} visualLevel={4}>
                {t(item.titleKey)}
              </Heading>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(item.bodyKey)}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tagKeys.map((key) => (
                  <span
                    key={key}
                    className="border border-border rounded-full px-3 py-1 text-xs text-muted-foreground"
                  >
                    {t(key)}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}

        {/* Spacer cierre */}
        <div className="shrink-0 w-6" aria-hidden />
      </div>

      {/* CTA al final */}
      <div className="container mx-auto px-6 md:px-8 max-w-6xl mt-6">
        <a
          href="/portfolio-webs"
          className="inline-flex items-center gap-1 text-sm text-primary underline-offset-4 hover:underline transition-colors"
        >
          {t('home.casesWeb.cta')}
        </a>
      </div>
    </section>
  );
}
