import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import heroImage from "@/assets/hero-farmers-mushrooms.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Rwandan farmers showcasing fresh mushroom harvest"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Turning Coffee Waste Into{" "}
              <span className="text-accent">Food & Income</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed">
              Empowering smallholder farmers through sustainable mushroom farming. We transform spent coffee grounds and other agricultural waste into ready-to-fruit mushroom substrate tubes—helping farmers grow nutritious mushrooms, increase their income, and reduce waste.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="hero" size="xl" className="group">
                Become a Farmer Partner
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button variant="earth" size="xl" className="group">
                Partner with Us
              </Button>

              <Button variant="outline" size="xl" className="group text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-foreground">
                Get in Touch
              </Button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-primary-foreground">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-accent">120</div>
                <div className="text-sm opacity-90">Substrate Tubes Sold</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-accent">22</div>
                <div className="text-sm opacity-90">Farmers Trained</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-accent">100%</div>
                <div className="text-sm opacity-90">Recycled Waste</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;