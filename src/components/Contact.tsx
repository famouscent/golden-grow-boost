import { useState } from "react";
import { motion } from "framer-motion";
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
import { MapPin, Mail, Phone, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo en menos de 24 horas.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Teléfono / WhatsApp",
      value: "+54 11 1234-5678",
      href: "https://wa.me/5491123456789",
    },
    {
      icon: Mail,
      label: "Email",
      value: "hola@goldenagency.com",
      href: "mailto:hola@goldenagency.com",
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Buenos Aires, Argentina",
      href: null,
    },
  ];

  return (
    <section id="contacto" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Agendá una sesión estratégica con{" "}
            <span className="text-golden">Golden Agency</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Contanos sobre tu negocio y veamos si somos el equipo indicado para
            ayudarte a escalar
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Información de Contacto
              </h3>
              <p className="text-muted-foreground mb-6">
                Preferís hablar directamente? Escribinos por WhatsApp o
                envianos un email. Respondemos en menos de 24 horas.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-card"
                >
                  <div className="w-10 h-10 bg-golden/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-golden" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      {info.label}
                    </div>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-foreground font-medium hover:text-golden transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-foreground font-medium">
                        {info.value}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Button
                variant="hero"
                size="xl"
                className="w-full"
                asChild
              >
                <a
                  href="https://wa.me/5491123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  Hablar por WhatsApp
                </a>
              </Button>
            </motion.div>

            {/* Hours */}
            <div className="p-6 bg-card rounded-xl border border-border">
              <h4 className="font-semibold text-foreground mb-2">
                Horarios de Atención
              </h4>
              <p className="text-sm text-muted-foreground">
                Lunes a Viernes: 9:00 - 18:00 (GMT-3)
                <br />
                Sábados: 10:00 - 14:00 (GMT-3)
              </p>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card p-8 rounded-2xl shadow-elevated border border-border space-y-6"
            >
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nombre Completo
                  </label>
                  <Input
                    type="text"
                    placeholder="Juan Pérez"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="juan@ejemplo.com"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Negocio / Nicho
                  </label>
                  <Input
                    type="text"
                    placeholder="Ej: Ecommerce de ropa"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Facturación Mensual Aproximada
                  </label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Seleccionar rango" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-5k">$0 - $5K</SelectItem>
                      <SelectItem value="5k-20k">$5K - $20K</SelectItem>
                      <SelectItem value="20k-50k">$20K - $50K</SelectItem>
                      <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                      <SelectItem value="100k+">$100K+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    ¿Qué querés lograr?
                  </label>
                  <Textarea
                    placeholder="Contanos qué objetivos tenés y qué desafíos estás enfrentando..."
                    rows={4}
                    required
                    className="w-full"
                  />
                </div>
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Enviar y Agendar Llamada
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Al enviar este formulario, aceptás que nos comuniquemos con vos
                para coordinar una sesión estratégica.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
