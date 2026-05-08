import { useTranslation } from 'react-i18next';
import { Heading } from '@/components/ui/heading';
import miguelPhoto from '@/assets/miguel-photo.jpeg';
import sergioFoto from '@/assets/sergio-foto2.png';

export default function HomeAbout() {
  const { t } = useTranslation();

  const trustSignals = [
    t('home.about.trust1'),
    t('home.about.trust2'),
    t('home.about.trust3'),
    t('home.about.trust4'),
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-20 md:py-28"
    >
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Columna izquierda: fotos apiladas */}
          <div className="flex flex-col gap-6">
            <figure className="space-y-2">
              <img
                src={miguelPhoto}
                alt={t('home.about.miguelName')}
                loading="lazy"
                className="w-full object-cover rounded-sm"
                style={{ aspectRatio: '4/5' }}
              />
              <figcaption className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{t('home.about.miguelName')}</span>
                {' · '}
                {t('home.about.miguelRole')}
              </figcaption>
            </figure>

            <figure className="space-y-2">
              <img
                src={sergioFoto}
                alt={t('home.about.sergioName')}
                loading="lazy"
                className="w-full object-cover rounded-sm"
                style={{ aspectRatio: '4/5' }}
              />
              <figcaption className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{t('home.about.sergioName')}</span>
                {' · '}
                {t('home.about.sergioRole')}
              </figcaption>
            </figure>
          </div>

          {/* Columna derecha: copy */}
          <div className="space-y-6">
            <Heading level={6} eyebrow className="text-primary">
              {t('home.about.eyebrow')}
            </Heading>
            <Heading level={2} id="about-heading">
              {t('home.about.heading')}
            </Heading>
            <p className="text-muted-foreground leading-relaxed">
              {t('home.about.body1')}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t('home.about.body2')}
            </p>

            <div className="pt-2 space-y-3">
              <p className="font-medium text-foreground">
                {t('home.about.trustHeading')}
              </p>
              <ul className="space-y-2">
                {trustSignals.map((signal) => (
                  <li key={signal} className="text-muted-foreground text-sm">
                    {signal}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
