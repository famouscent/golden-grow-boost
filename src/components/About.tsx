import { motion } from "framer-motion";
import { Instagram, TrendingUp, Award, Users } from "lucide-react";
import founderImage from "@/assets/founder.jpg";

const About = () => {
  const stats = [
    { icon: TrendingUp, label: "En inversión publicitaria gestionada", value: "+$2M" },
    { icon: Users, label: "Clientes activos", value: "47+" },
    { icon: Award, label: "ROAS promedio", value: "5.2x" },
  ];

  return (
    <section id="nosotros" className="py-24 bg-muted/30">
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
            Sobre <span className="text-golden">Golden Agency</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Estrategas obsesionados con el retorno de tu inversión
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <h3 className="text-2xl font-bold text-foreground">
                  Martín García
                </h3>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-golden hover:text-golden-light transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
              <p className="text-sm text-golden font-medium">
                Fundador & Estratega de Marketing
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Llevo más de 8 años trabajando con negocios digitales y marcas personales, 
                ayudándolos a escalar sus ingresos mediante estrategias de marketing que realmente funcionan.
              </p>
              <p>
                Empecé gestionando campañas pequeñas de Meta Ads para emprendedores locales 
                y hoy manejo presupuestos de más de $50K mensuales para clientes en todo Latinoamérica.
              </p>
              <p>
                Mi filosofía es simple: <strong className="text-foreground">no más campañas bonitas que no venden</strong>. 
                Todo lo que hacemos está orientado a resultados medibles: más leads, más ventas, 
                mejor ROAS. Si no se puede medir, no sirve.
              </p>
              <p>
                He trabajado con ecommerces, infoproductores, agencias, consultores y negocios de servicios. 
                Todos con un objetivo en común: <strong className="text-foreground">escalar de forma sostenible y rentable</strong>.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-4 bg-card rounded-xl shadow-card"
                >
                  <stat.icon className="w-6 h-6 text-golden mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={founderImage}
                alt="Martín García - Fundador de Golden Agency"
                className="w-full h-auto"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-golden/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-golden/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
