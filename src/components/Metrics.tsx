import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TrendingUp, Target, Globe, Award } from "lucide-react";
import growthChart from "@/assets/growth-chart.jpg";

const Metrics = () => {
  const metrics = [
    { icon: TrendingUp, value: "+180", label: "Campañas gestionadas" },
    { icon: Target, value: "5.2x", label: "ROAS promedio" },
    { icon: Globe, value: "12", label: "Países" },
    { icon: Award, value: "+$2M", label: "En inversión gestionada" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-24 bg-dark text-secondary-foreground relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-dark opacity-90" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-golden/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-golden/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Más clientes, más ventas,{" "}
                <span className="text-golden">menos adivinanza</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Trabajamos con negocios que facturan desde $5K hasta $500K
                mensuales. Nuestro enfoque está en escalar ingresos de forma
                sostenible y rentable, usando datos reales en lugar de
                intuiciones.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground">
                No importa si vendes productos físicos, cursos online o servicios
                profesionales. Si tu negocio depende de conseguir clientes
                consistentemente, podemos ayudarte.
              </p>
              <p className="text-muted-foreground">
                Nos especializamos en negocios que necesitan:
              </p>
              <ul className="space-y-2">
                {[
                  "Escalar su inversión en anuncios sin perder rentabilidad",
                  "Construir un sistema de adquisición predecible",
                  "Optimizar cada etapa del embudo de ventas",
                  "Dejar de depender solo de referencias y networking",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-golden rounded-full mt-2 flex-shrink-0" />
                    <span className="text-secondary-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 bg-golden/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <metric.icon className="w-5 h-5 text-golden" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-golden">
                      {metric.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {metric.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection("#contacto")}
            >
              Quiero ver cómo se verían mis números
            </Button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-golden/20">
              <img
                src={growthChart}
                alt="Gráfico de crecimiento"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-golden text-dark px-6 py-3 rounded-xl shadow-golden font-bold"
            >
              Crecimiento sostenible y escalable
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
