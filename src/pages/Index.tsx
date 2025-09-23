import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Strategies from "@/components/Strategies";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-trading">
      <Navigation />
      <Hero />
      <Services />
      <Strategies />
      <About />
      <Contact />
    </div>
  );
};

export default Index;