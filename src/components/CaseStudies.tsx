import { motion } from "framer-motion";
import { TrendingUp, ShoppingCart, Briefcase, Award } from "lucide-react";
import caseEcommerce from "@/assets/case-ecommerce.jpg";
import caseServices from "@/assets/case-services.jpg";

const CaseStudies = () => {
  const cases = [
    {
      image: caseEcommerce,
      icon: ShoppingCart,
      badge: "+500% leads",
      title: "Ecommerce de Ropa – de $10K a $60K/mes",
      client: "Tienda de moda online",
      description:
        "Marca de ropa que estaba estancada en $10K mensuales. Su problema principal era la falta de tráfico cualificado y un funnel de ventas mal optimizado.",
      results: [
        "Implementamos campañas de Meta Ads segmentadas por intereses y comportamientos de compra",
        "Optimizamos el checkout y agregamos upsells estratégicos",
        "En 4 meses, escalamos de $10K a $60K mensuales con un ROAS de 4.8x",
      ],
      question:
        "¿Cuánto podrías facturar si optimizáramos cada etapa de tu embudo de ventas?",
    },
    {
      image: caseServices,
      icon: Briefcase,
      badge: "ROAS 7.2x",
      title: "Agencia de Diseño – triplicó sus clientes en 90 días",
      client: "Estudio de diseño gráfico",
      description:
        "Agencia de diseño con servicios premium pero sin sistema de adquisición de clientes. Dependían 100% de referencias.",
      results: [
        "Creamos un funnel de webinar automatizado con secuencias de email",
        "Lanzamos campañas de Google Ads enfocadas en palabras clave de alta intención",
        "Pasaron de 2-3 clientes al mes a 8-10 clientes cualificados con ROAS de 7.2x",
      ],
      question:
        "¿Qué pasaría si tu negocio dejara de depender solo de referencias?",
    },
    {
      image: caseEcommerce,
      icon: Award,
      badge: "+320% ventas",
      title: "Infoproductor – de lanzamientos a ventas evergreen",
      client: "Curso online de marketing digital",
      description:
        "Creador de contenido que solo vendía durante lanzamientos. Necesitaba un sistema de ventas automático y escalable.",
      results: [
        "Diseñamos un embudo evergreen con webinar grabado y seguimiento automatizado",
        "Implementamos remarketing multicanal (Facebook, YouTube, Email)",
        "Generó $120K en 6 meses con un sistema que funciona 24/7",
      ],
      question:
        "¿Cómo sería tener un sistema que venda todos los días sin depender de lanzamientos?",
    },
  ];

  return (
    <section id="casos" className="py-24 bg-background">
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
            Resultados que hablan por{" "}
            <span className="text-golden">nosotros</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Algunos de los negocios y marcas con los que trabajamos y cómo
            transformamos sus números.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-16">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 lg:gap-12 items-center`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-elevated group">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-golden text-dark font-bold rounded-full shadow-golden">
                    <TrendingUp className="w-4 h-4" />
                    {caseStudy.badge}
                  </div>

                  {/* Icon */}
                  <div className="absolute bottom-6 right-6 w-12 h-12 bg-golden/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-golden/30">
                    <caseStudy.icon className="w-6 h-6 text-golden" />
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">
                    {caseStudy.title}
                  </h3>
                  <p className="text-sm text-golden font-medium">
                    {caseStudy.client}
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {caseStudy.description}
                </p>

                <div className="space-y-3">
                  {caseStudy.results.map((result, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-golden rounded-full mt-2 flex-shrink-0" />
                      <p className="text-foreground">{result}</p>
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-golden/5 border-l-4 border-golden rounded-lg">
                  <p className="text-lg font-medium text-foreground italic">
                    {caseStudy.question}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
