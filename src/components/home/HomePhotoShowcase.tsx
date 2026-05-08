import { useTranslation } from 'react-i18next';
import ReactCompareImage from 'react-compare-image';
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
            <ReactCompareImage
              leftImage={item.imageBefore}
              rightImage={item.imageAfter}
              leftImageLabel={t('home.photoShowcase.labelBefore')}
              rightImageLabel={t('home.photoShowcase.labelAfter')}
              sliderLineColor="hsl(var(--primary))"
              sliderLineWidth={2}
              handleSize={48}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
