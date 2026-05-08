import { useTranslation } from 'react-i18next';
import { Heading } from '@/components/ui/heading';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

export default function Hero() {
  const { t } = useTranslation();
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER as string;
  const prefilledMessage = encodeURIComponent(t('common.whatsapp.prefilledMessage'));

  return (
    <section className="py-20 md:py-28 lg:py-32">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">

          {/* Text column */}
          <div className="order-1">
            <Heading level={6} eyebrow className="mb-5 text-primary">
              {t('home.hero.eyebrow')}
            </Heading>
            <Heading level={1} className="mb-6 max-w-2xl">
              {t('home.hero.headline')}
            </Heading>
            <p className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
              {t('home.hero.subclaim')}
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Button
                variant="primary"
                size="lg"
                glow
                asChild
              >
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${prefilledMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('home.hero.ctaPrimary')}
                </a>
              </Button>
              <a
                href="#cases-web"
                className="inline-flex items-center gap-2 text-base text-foreground underline-offset-4 hover:underline hover:text-primary transition-colors"
              >
                {t('home.hero.ctaSecondary')}
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>

          {/* Image column */}
          <div className="order-2 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm lg:max-w-none">
              <img
                src={heroImage}
                alt={t('home.hero.headline')}
                className="w-full h-auto object-cover rounded-sm shadow-[0_8px_40px_hsl(var(--primary)/0.18)]"
                style={{ aspectRatio: '4/5' }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
