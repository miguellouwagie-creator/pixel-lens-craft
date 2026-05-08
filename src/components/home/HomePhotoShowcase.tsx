import { useTranslation } from 'react-i18next';
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  ReactCompareSliderHandle,
} from 'react-compare-slider';
import { Heading } from '@/components/ui/heading';
import { galleryData } from '@/data/galleryData';

const item = galleryData[0];

export default function HomePhotoShowcase() {
  const { t } = useTranslation();

  return (
    <section
      id="photo-showcase"
      aria-labelledby="photo-showcase-heading"
      className="py-20 md:py-28"
    >
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-16 items-start">

          {/* Copy column — right-aligned on desktop */}
          <div className="order-2 lg:order-2 space-y-5">
            <Heading level={6} eyebrow className="text-primary">
              {t('home.photoShowcase.eyebrow')}
            </Heading>
            <Heading level={2} id="photo-showcase-heading">
              {t('home.photoShowcase.heading')}
            </Heading>
            <p className="text-muted-foreground leading-relaxed">
              {t('home.photoShowcase.body')}
            </p>
            <a
              href="/portfolio"
              className="inline-flex items-center gap-1 text-sm text-primary underline-offset-4 hover:underline transition-colors"
            >
              {t('home.photoShowcase.cta')}
            </a>
          </div>

          {/* Slider column */}
          <div className="order-1 lg:order-1 w-full overflow-hidden rounded-sm">
            <div className="relative">
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage
                    src={item.imageBefore}
                    alt={t('home.photoShowcase.labelBefore')}
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    src={item.imageAfter}
                    alt={t('home.photoShowcase.labelAfter')}
                  />
                }
                handle={
                  <ReactCompareSliderHandle
                    buttonStyle={{
                      width: 48,
                      height: 48,
                      backgroundColor: 'hsl(var(--primary))',
                      color: 'hsl(var(--primary-foreground))',
                      border: 'none',
                    }}
                    linesStyle={{
                      color: 'hsl(var(--primary))',
                      width: 2,
                    }}
                  />
                }
              />
              <span className="pointer-events-none absolute top-4 left-4 z-10 px-3 py-1 text-xs font-medium tracking-wider uppercase bg-background/80 backdrop-blur rounded">
                {t('home.photoShowcase.labelBefore')}
              </span>
              <span className="pointer-events-none absolute top-4 right-4 z-10 px-3 py-1 text-xs font-medium tracking-wider uppercase bg-background/80 backdrop-blur rounded">
                {t('home.photoShowcase.labelAfter')}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
