import { CheckCircle, Clock, DollarSign, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import substrateImage from "@/assets/substrate-tubes.jpg";

const Solution = () => {
  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Higher Yields",
      description: "Our tubes produce twice as many mushrooms as traditional methods"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Faster Harvest",
      description: "Reduced incubation by 6 days compared to conventional approaches"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Low Cost",
      description: "Start farming for as little as $25 with guaranteed return"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "No Experience Needed",
      description: "We provide training and ongoing support for all farmers"
    }
  ];

  return (
    <section id="solution" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our Revolutionary Solution
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We produce ready-to-fruit mushroom substrate tubes made from a unique blend of spent coffee grounds, rice husks, and cotton waste.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <img
              src={substrateImage}
              alt="Mushroom substrate tubes made from coffee grounds"
              className="relative w-full h-96 object-cover rounded-2xl shadow-earth"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Why Farmers Love It
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our innovative substrate tubes convert spent coffee grounds, rice husks, and cotton waste 
              into perfect growing medium for oyster mushrooms. Each tube is scientifically formulated 
              to maximize yield while minimizing input costs for farmers. Plus, we provide market access and even secure offtake agreements.
            </p>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground group-hover:shadow-earth transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" className="w-full sm:w-auto">
              Learn More About Our Substrate
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;