import { useTranslation } from 'react-i18next';
import { Heading } from '@/components/ui/heading';

export default function Testimonials() {
  const { t } = useTranslation();

  const quotes = [
    {
      text: t('home.testimonials.quote1.text'),
      author: t('home.testimonials.quote1.author'),
      role: t('home.testimonials.quote1.role'),
    },
    {
      text: t('home.testimonials.quote2.text'),
      author: t('home.testimonials.quote2.author'),
      role: t('home.testimonials.quote2.role'),
    },
    {
      text: t('home.testimonials.quote3.text'),
      author: t('home.testimonials.quote3.author'),
      role: t('home.testimonials.quote3.role'),
    },
  ];

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-20 md:py-28"
    >
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        <Heading level={6} eyebrow className="mb-4 text-primary">
          {t('home.testimonials.eyebrow')}
        </Heading>
        <Heading level={2} id="testimonials-heading" className="mb-14 max-w-xl">
          {t('home.testimonials.heading')}
        </Heading>

        <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-3 md:gap-10">
          {quotes.map((quote, i) => (
            <blockquote key={i} className="space-y-4">
              <p className="font-display italic text-lg font-light tracking-tight text-foreground leading-relaxed">
                &ldquo;{quote.text}&rdquo;
              </p>
              <footer className="text-sm text-muted-foreground">
                {quote.author}
                {' · '}
                {quote.role}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
