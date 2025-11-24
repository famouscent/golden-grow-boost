import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CaseStudies from "@/components/CaseStudies";
import About from "@/components/About";
import Services from "@/components/Services";
import Metrics from "@/components/Metrics";
import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CaseStudies />
        <About />
        <Services />
        <Metrics />
        <Benefits />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
