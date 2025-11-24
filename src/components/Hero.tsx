import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, TrendingUp, Users, Target } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const features = [
    { icon: Target, text: "Estrategias hechas a medida" },
    { icon: TrendingUp, text: "Traffic & funnels orientados a ROAS" },
    { icon: Users, text: "Acompañamiento 1 a 1" },
  ];

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-hero -z-10" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left space-y-8"
          >
            {/* Logo Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-golden/10 rounded-full border border-golden/20"
            >
              <span className="w-2 h-2 bg-golden rounded-full animate-pulse" />
              <span className="text-sm font-medium text-yellow-400">
                Agencia de Marketing Digital
              </span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
                Escalamos tu negocio con{" "}
                <span className="text-yellow-400">campañas y contenido</span> que
                convierten en clientes
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 text-balance drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
                Golden Agency es la agencia de marketing que se mete en tus
                números: optimizamos anuncios, funnels y contenido para que
                dejes de adivinar y empieces a escalar con datos.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
                >
                  <feature.icon className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-medium text-white">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                variant="hero"
                size="xl"
                onClick={() => scrollToSection("#contacto")}
                className="group"
              >
                <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Agendar una Sesión Estratégica
              </Button>
              <Button
                variant="outline"
                size="xl"
                onClick={() => scrollToSection("#casos")}
              >
                Ver Casos de Éxito
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Dashboard Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-yellow-400/20 before:absolute before:inset-0 before:bg-black/30 before:rounded-xl before:z-10">
              <img
                src={heroDashboard}
                alt="Dashboard de resultados de marketing"
                className="w-full h-auto"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-20" />
            </div>

            {/* Floating Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-elevated border border-border z-30"
            >
              <div className="text-sm text-muted-foreground">ROAS Promedio</div>
              <div className="text-3xl font-bold text-yellow-400">5.2x</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="absolute -top-6 -right-6 bg-card p-4 rounded-xl shadow-elevated border border-border z-30"
            >
              <div className="text-sm text-muted-foreground">
                Crecimiento Mensual
              </div>
              <div className="text-3xl font-bold text-yellow-400">+247%</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
