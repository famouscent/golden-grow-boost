import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "¿Con qué tipo de negocios trabajan?",
      answer:
        "Trabajamos con ecommerces, infoproductores, negocios de servicios profesionales, consultores y agencias. Nuestros clientes suelen facturar desde $5K hasta $500K mensuales y buscan escalar de forma sostenible con anuncios y contenido estratégico.",
    },
    {
      question: "¿Hay permanencia mínima?",
      answer:
        "Recomendamos trabajar al menos 3 meses para ver resultados consistentes. El marketing digital requiere tiempo de optimización y testing. Sin embargo, no hay contratos con permanencia forzada: si no estás viendo resultados, podés cancelar cuando quieras.",
    },
    {
      question: "¿Cómo medimos el éxito de las campañas?",
      answer:
        "Nos enfocamos en métricas de negocio, no de vanidad. Lo más importante es el ROAS (retorno sobre inversión publicitaria), costo por lead, tasa de conversión y, obviamente, las ventas generadas. Te mostramos dashboards claros con los números que realmente importan.",
    },
    {
      question: "¿Trabajan solo con anuncios o también con contenido?",
      answer:
        "Hacemos ambas cosas. Los anuncios son la forma más rápida de generar tráfico, pero el contenido orgánico ayuda a calentar audiencias, construir confianza y alimentar el remarketing. Idealmente, trabajamos con un mix de paid media y contenido estratégico.",
    },
    {
      question: "¿Qué necesito tener listo antes de empezar?",
      answer:
        "Idealmente, necesitás tener: una oferta clara, una landing page funcional o ecommerce, y un presupuesto mínimo de $500-1000 USD mensuales para anuncios. Si no tenés todo listo, podemos ayudarte a prepararlo en las primeras sesiones estratégicas.",
    },
    {
      question: "¿Cuánto cuesta trabajar con Golden Agency?",
      answer:
        "Depende del alcance del proyecto, la facturación actual de tu negocio y el presupuesto en anuncios. Nuestras tarifas empiezan desde $800 USD mensuales para proyectos básicos. En la sesión estratégica inicial evaluamos tu situación y te armamos una propuesta personalizada.",
    },
    {
      question: "¿Puedo ver resultados en el primer mes?",
      answer:
        "Es posible, pero no garantizado. En el primer mes nos enfocamos en setup, análisis de datos, pruebas de audiencias y creatividades. Los mejores resultados suelen verse a partir del segundo y tercer mes, cuando ya tenemos datos suficientes para optimizar agresivamente.",
    },
    {
      question: "¿Trabajan con clientes fuera de Argentina?",
      answer:
        "Sí, trabajamos con clientes de toda Latinoamérica, Estados Unidos y España. Todas nuestras reuniones son remotas por Zoom o Google Meet, y la comunicación diaria es por WhatsApp o Slack.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-background">
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
            Preguntas <span className="text-golden">frecuentes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Todo lo que necesitás saber antes de agendar una sesión
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 shadow-card hover:shadow-elevated transition-all"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-golden py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            ¿Tenés otra pregunta?{" "}
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector("#contacto");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="text-golden hover:text-golden-light font-medium underline underline-offset-4"
            >
              Contactanos directamente
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
