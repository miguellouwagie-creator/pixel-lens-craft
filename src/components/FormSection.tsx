import ContactForm from "./ContactForm";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const FormSection = () => {
  const { t } = useTranslation();

  return (
    <section id="contacto" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              {t("contact.title")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t("contact.description")}
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">
                    {t("contact.location.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("contact.location.value")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">
                    {t("contact.phone.title")}
                  </h3>
                  <a
                    href="tel:+34TU_NUMERO"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t("contact.phone.value")}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">
                    {t("contact.email.title")}
                  </h3>
                  <a
                    href="mailto:info@pixelandlensdigital.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t("contact.email.value")}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-cta/10 rounded-lg flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-cta" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">
                    {t("contact.preference.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("contact.preference.value")}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-secondary rounded-xl">
              <h3 className="font-bold text-foreground mb-3">
                {t("contact.schedule.title")}
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p>{t("contact.schedule.weekdays")}</p>
                <p>{t("contact.schedule.weekends")}</p>
                <p className="text-sm italic mt-3">
                  {t("contact.schedule.note")}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="bg-secondary p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                {t("contact.formTitle")}
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
