import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import DOMPurify from "dompurify";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

type ContactFormValues = {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
  terms: boolean;
};

const HomeContact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Schema inside component so Zod messages are already translated,
  // allowing shadcn FormMessage to render the translated string directly.
  const contactSchema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, { message: t("home.contact.form.validation.nameTooShort") }),
        email: z.string().email({ message: t("home.contact.form.validation.emailInvalid") }),
        phone: z.string().optional(),
        service: z.string().min(1, { message: t("home.contact.form.validation.serviceRequired") }),
        message: z.string().min(20, { message: t("home.contact.form.validation.messageTooShort") }),
        terms: z
          .boolean()
          .refine((v) => v === true, { message: t("home.contact.form.validation.termsRequired") }),
      }),
    [t]
  );

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      terms: false,
    },
  });

  const sanitize = (s: string) =>
    DOMPurify.sanitize(s, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const number = import.meta.env.VITE_WHATSAPP_NUMBER;
      if (!number) {
        throw new Error("VITE_WHATSAPP_NUMBER missing");
      }

      const safe = {
        name: sanitize(data.name),
        email: sanitize(data.email),
        phone: data.phone ? sanitize(data.phone) : "",
        service: sanitize(data.service),
        message: sanitize(data.message),
      };

      const serviceLabel = t(
        `home.contact.form.serviceOptions.${safe.service}`
      );

      const lines = [
        t("home.contact.whatsapp.subject"),
        "",
        `${t("home.contact.whatsapp.nameLabel")}: ${safe.name}`,
        `${t("home.contact.whatsapp.emailLabel")}: ${safe.email}`,
        safe.phone
          ? `${t("home.contact.whatsapp.phoneLabel")}: ${safe.phone}`
          : null,
        `${t("home.contact.whatsapp.serviceLabel")}: ${serviceLabel}`,
        "",
        `${t("home.contact.whatsapp.messageLabel")}:`,
        safe.message,
      ]
        .filter(Boolean)
        .join("\n");

      const url = `https://wa.me/${number}?text=${encodeURIComponent(lines)}`;
      window.open(url, "_blank", "noopener,noreferrer");

      toast({
        title: t("common.toast.successTitle"),
        description: t("common.toast.successBody"),
      });
      form.reset();
    } catch (err) {
      toast({
        title: t("common.toast.errorTitle"),
        description: t("common.toast.errorBody"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Columna izquierda: Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-wider text-muted-foreground">
                {t("home.contact.eyebrow")}
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
                {t("home.contact.heading")}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                {t("home.contact.body")}
              </p>
            </div>

            <div className="space-y-6">
              <a
                href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                style={{ boxShadow: "var(--shadow-primary-glow)" }}
              >
                {t("home.contact.whatsappCta")}
              </a>

              <div className="space-y-1">
                <p className="text-sm uppercase tracking-wider text-muted-foreground">
                  {t("home.contact.emailLabel")}
                </p>
                <a
                  href={`mailto:${t("home.contact.emailAddress")}`}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {t("home.contact.emailAddress")}
                </a>
              </div>

              <div className="space-y-1">
                <p className="text-sm uppercase tracking-wider text-muted-foreground">
                  {t("home.contact.hoursLabel")}
                </p>
                <p className="text-foreground">{t("home.contact.hoursValue")}</p>
              </div>
            </div>
          </div>

          {/* Columna derecha: Form */}
          <div className="bg-card border border-border/40 rounded-lg p-6 md:p-8">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              {t("home.contact.form.heading")}
            </h3>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
                noValidate
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("home.contact.form.nameLabel")}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t("home.contact.form.namePlaceholder")}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("home.contact.form.emailLabel")}</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder={t("home.contact.form.emailPlaceholder")}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("home.contact.form.phoneLabel")}</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder={t("home.contact.form.phonePlaceholder")}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {t("home.contact.form.serviceLabel")}
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue
                              placeholder={t(
                                "home.contact.form.servicePlaceholder"
                              )}
                            />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="web">
                            {t("home.contact.form.serviceOptions.web")}
                          </SelectItem>
                          <SelectItem value="photo">
                            {t("home.contact.form.serviceOptions.photo")}
                          </SelectItem>
                          <SelectItem value="both">
                            {t("home.contact.form.serviceOptions.both")}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {t("home.contact.form.messageLabel")}
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t(
                            "home.contact.form.messagePlaceholder"
                          )}
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="terms"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="font-normal text-sm">
                          {t("home.contact.form.termsLabel")}{" "}
                          <Link
                            to="/privacidad"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline text-primary hover:text-primary/80"
                          >
                            {t("home.contact.form.termsLink")}
                          </Link>
                          .
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {t("home.contact.form.submitting")}
                    </>
                  ) : (
                    t("home.contact.form.submit")
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
