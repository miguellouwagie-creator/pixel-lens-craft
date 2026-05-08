import { useTranslation } from 'react-i18next';
import { Heading } from '@/components/ui/heading';

export default function HomeProcess() {
  const { t } = useTranslation();

  const steps = [
    {
      number: t('home.process.step1.number'),
      title: t('home.process.step1.title'),
      body: t('home.process.step1.body'),
      promise: t('home.process.step1.promise'),
    },
    {
      number: t('home.process.step2.number'),
      title: t('home.process.step2.title'),
      body: t('home.process.step2.body'),
      promise: t('home.process.step2.promise'),
    },
    {
      number: t('home.process.step3.number'),
      title: t('home.process.step3.title'),
      body: t('home.process.step3.body'),
      promise: t('home.process.step3.promise'),
    },
  ];

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="py-20 md:py-28"
    >
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        <Heading level={6} eyebrow className="mb-4 text-primary">
          {t('home.process.eyebrow')}
        </Heading>
        <Heading level={2} id="process-heading" className="mb-14 max-w-xl">
          {t('home.process.heading')}
        </Heading>

        <div className="space-y-14">
          {steps.map((step) => (
            <div key={step.number} className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-10">
              {/* Numeral decorativo */}
              <div className="hidden md:block">
                <span
                  className="font-display text-[6rem] leading-none font-extrabold text-primary/20 select-none"
                  aria-hidden
                >
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="flex items-baseline gap-4 md:hidden">
                  <span
                    className="font-display text-4xl font-extrabold text-primary/30 select-none"
                    aria-hidden
                  >
                    {step.number}
                  </span>
                  <Heading level={3} visualLevel={4}>
                    {step.title}
                  </Heading>
                </div>
                <Heading level={3} visualLevel={4} className="hidden md:block">
                  {step.title}
                </Heading>
                <p className="text-muted-foreground leading-relaxed max-w-prose">
                  {step.body}
                </p>
                <p className="text-primary font-medium text-sm underline-offset-2 underline decoration-primary/40">
                  {step.promise}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
