import { motion } from "framer-motion";
import {
  Users,
  Target,
  MessageSquare,
  FileSearch,
  BarChart3,
  Folder,
} from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Users,
      title: "Estrategia 1 a 1 con un Especialista",
      description:
        "Reuniones estratégicas personalizadas para definir pasos, prioridades y objetivos. No sos un número más, sos un proyecto que nos importa.",
    },
    {
      icon: Target,
      title: "Gestión Completa de Campañas",
      description:
        "Configuración, segmentación, pruebas A/B y optimización continua de tus anuncios. Nos encargamos de todo el setup técnico.",
    },
    {
      icon: MessageSquare,
      title: "Soporte Directo por Chat",
      description:
        "Canal privado de comunicación para dudas rápidas, revisión de ideas y feedback inmediato. Respuesta en menos de 24hs.",
    },
    {
      icon: FileSearch,
      title: "Revisión de Embudos y Landing Pages",
      description:
        "Feedback detallado y mejoras en páginas de captura, checkout, copys y llamadas a la acción. Optimizamos cada punto de contacto.",
    },
    {
      icon: BarChart3,
      title: "Reportes Claros y Orientados a Decisión",
      description:
        "Informes mensuales y semanales con métricas clave: ROAS, CPL, tasa de conversión, y todo lo que necesitás para tomar decisiones.",
    },
    {
      icon: Folder,
      title: "Acceso a Recursos y Plantillas",
      description:
        "Copy de anuncios probados, guiones de videos, estructuras de funnels, checklists y herramientas que usamos con nuestros clientes.",
    },
  ];

  return (
    <section id="beneficios" className="py-24 bg-muted/30">
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
            Lo que obtenés al trabajar con{" "}
            <span className="text-golden">Golden Agency</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            No solo campañas: un sistema completo de adquisición y crecimiento
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card p-6 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 border border-border hover:border-golden/30"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-golden/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-golden/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-golden" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>

              {/* Decorative Dot */}
              <div className="mt-4 w-8 h-1 bg-golden/30 rounded-full group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 p-8 bg-gradient-to-r from-golden/10 to-golden/5 rounded-2xl border border-golden/20 text-center max-w-4xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            ¿Listo para transformar tus números?
          </h3>
          <p className="text-muted-foreground mb-6">
            Trabajamos con pocos clientes a la vez para garantizar resultados de calidad. 
            Si estás buscando una agencia que se comprometa con tus objetivos, hablemos.
          </p>
          <div className="inline-flex items-center gap-2 text-sm text-golden font-medium">
            <span className="w-2 h-2 bg-golden rounded-full animate-pulse" />
            Cupos limitados disponibles
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
