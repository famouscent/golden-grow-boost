import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Filter, Megaphone, Share2, BarChart3 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Filter,
      title: "Auditoría de Oferta y Embudo",
      description:
        "Análisis profundo de tu oferta, pricing, propuesta de valor y funnel actual para detectar cuellos de botella que están frenando tus ventas.",
      features: [
        "Revisión de tu propuesta de valor",
        "Análisis de pricing y estructura de oferta",
        "Mapeo del customer journey actual",
        "Identificación de puntos de fuga",
      ],
    },
    {
      icon: Megaphone,
      title: "Estrategia de Anuncios y Tráfico",
      description:
        "Diseño y gestión de campañas en Meta y Google Ads enfocadas en ROAS y costo por lead. No gastamos por gastar, cada peso invertido tiene que generar retorno.",
      features: [
        "Campañas en Meta Ads y Google Ads",
        "Segmentación avanzada y audiencias personalizadas",
        "Optimización continua de ROAS",
        "Testing de creatividades y copys",
      ],
    },
    {
      icon: Share2,
      title: "Estrategia de Contenido y Social Media",
      description:
        "Calendario de contenido, guiones para reels, piezas para stories y contenidos que alimentan el funnel. Contenido que vende, no solo que entretiene.",
      features: [
        "Calendario editorial mensual",
        "Guiones para videos y reels",
        "Contenido para cada etapa del funnel",
        "Estrategia de engagement y conversión",
      ],
    },
    {
      icon: BarChart3,
      title: "Optimización y Reporting",
      description:
        "Reuniones de revisión, optimización continua de anuncios, landing pages y CRM. Te mostramos los números que importan, sin humo.",
      features: [
        "Reportes semanales de métricas clave",
        "Optimización de landing pages",
        "A/B testing sistemático",
        "Reuniones estratégicas mensuales",
      ],
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="servicios" className="py-24 bg-background">
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
            ¿Qué vamos a trabajar{" "}
            <span className="text-golden">juntos?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Analizamos todo tu sistema de adquisición de clientes y ajustamos
            cada pieza hasta que funcione
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card p-8 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 border border-border hover:border-golden/30"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-golden/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-golden/20 transition-colors">
                <service.icon className="w-7 h-7 text-golden" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 bg-golden rounded-full mt-1.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-golden to-golden-light scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-2xl" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Button
            variant="hero"
            size="xl"
            onClick={() => scrollToSection("#contacto")}
          >
            Agendar una Sesión
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
