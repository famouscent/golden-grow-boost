import { Sparkles, Instagram, Linkedin, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = {
    main: [
      { name: "Inicio", href: "#inicio" },
      { name: "Casos de Éxito", href: "#casos" },
      { name: "Servicios", href: "#servicios" },
      { name: "Sobre Nosotros", href: "#nosotros" },
      { name: "Beneficios", href: "#beneficios" },
      { name: "FAQ", href: "#faq" },
      { name: "Contacto", href: "#contacto" },
    ],
    social: [
      { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
      { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
      { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
    ],
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-dark text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 - Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-8 h-8 text-golden" />
              <span className="text-2xl font-bold">
                Golden<span className="text-golden">Agency</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Agencia de marketing digital especializada en escalar negocios
              con estrategias de paid media, funnels y contenido que convierten.
            </p>
            <div className="flex gap-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-dark-lighter rounded-full flex items-center justify-center hover:bg-golden/20 transition-colors group"
                  aria-label={item.name}
                >
                  <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-golden transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary-foreground">
              Navegación
            </h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="text-muted-foreground hover:text-golden transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary-foreground">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/5491123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-golden transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  +54 11 1234-5678
                </a>
              </li>
              <li>
                <a
                  href="mailto:hola@goldenagency.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-golden transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  hola@goldenagency.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark-lighter">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Golden Agency. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-golden transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-golden transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
