import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Solution from "@/components/Solution";
import Impact from "@/components/Impact";
import HowItWorks from "@/components/HowItWorks";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Solution />
      <Impact />
      <HowItWorks />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
