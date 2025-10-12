import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
import { Loader2 } from "lucide-react";

const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  phone: z.string().min(9, { message: "Teléfono inválido" }),
  service: z.string().min(1, { message: "Por favor selecciona un servicio" }),
  message: z
    .string()
    .min(10, { message: "El mensaje debe tener al menos 10 caracteres" }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    // Construir mensaje de WhatsApp
    const whatsappNumber = "34667326300";
    const message = `🌟 *Nuevo Mensaje de ${data.name}*

📧 *Email:* ${data.email}
📱 *Teléfono:* ${data.phone}
🎯 *Servicio:* ${data.service}

💬 *Mensaje:*
${data.message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Abrir WhatsApp
    window.open(whatsappUrl, "_blank");

    // Mostrar toast de confirmación
    toast({
      title: "¡Redirigiendo a WhatsApp!",
      description: "Te hemos llevado a WhatsApp para que puedas enviar tu mensaje directamente.",
    });

    form.reset();
    setIsSubmitting(false);
  };
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre *</FormLabel>
                <FormControl>
                  <Input placeholder="¿Cómo te llamas?" {...field} />
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
                <FormLabel>Email *</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="tu@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Teléfono *</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="+34 XXX XXX XXX" {...field} />
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
                <FormLabel>¿En qué podemos ayudarte? *</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Elige una opción" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white">
                    <SelectItem value="web-basica">Web Básica</SelectItem>
                    <SelectItem value="web-profesional">
                      Web Profesional
                    </SelectItem>
                    <SelectItem value="fotografia">
                      Fotografía Profesional
                    </SelectItem>
                    <SelectItem value="pack-completo">
                      Pack Web + Fotografía
                    </SelectItem>
                    <SelectItem value="edicion-fotos">
                      Edición de Fotos
                    </SelectItem>
                    <SelectItem value="consulta">Consulta General</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cuéntanos sobre tu proyecto *</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Explícanos qué necesitas: tipo de negocio, objetivos, plazos... Cuanto más nos cuentes, mejor podremos ayudarte."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          variant="cta"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Enviando...
            </>
          ) : (
            "Enviar Mensaje"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
