import { useTranslation } from 'react-i18next';
import { Heading } from '@/components/ui/heading';

export default function HomeServices() {
  const { t } = useTranslation();

  const services = [
    {
      number: t('home.services.web.number'),
      label: t('home.services.web.label'),
      title: t('home.services.web.title'),
      body: t('home.services.web.body'),
      link: t('home.services.web.link'),
      href: '/portfolio-webs',
    },
    {
      number: t('home.services.photo.number'),
      label: t('home.services.photo.label'),
      title: t('home.services.photo.title'),
      body: t('home.services.photo.body'),
      link: t('home.services.photo.link'),
      href: '/portfolio',
    },
  ];

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-20 md:py-28"
    >
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <Heading
            level={2}
            id="services-heading"
            className="mb-4"
          >
            {t('home.services.heading')}
          </Heading>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {t('home.services.subheading')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {services.map((service) => (
            <div key={service.number} className="space-y-5">
              <div className="flex items-baseline gap-3">
                <span
                  className="font-display text-[5rem] leading-none font-extrabold text-primary/20 select-none"
                  aria-hidden
                >
                  {service.number}
                </span>
                <Heading level={6} eyebrow className="text-primary">
                  {service.label}
                </Heading>
              </div>
              <Heading level={3} visualLevel={4}>
                {service.title}
              </Heading>
              <p className="text-muted-foreground leading-relaxed">
                {service.body}
              </p>
              <a
                href={service.href}
                className="inline-flex items-center gap-1 text-sm text-primary underline-offset-4 hover:underline transition-colors"
              >
                {service.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
