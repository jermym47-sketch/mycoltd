import { ArrowRight, Factory, GraduationCap, Sprout, ShoppingCart } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: <Factory className="w-8 h-8" />,
      title: "Substrate Production",
      description: "We collect spent coffee grounds and agricultural waste, then process them into optimized mushroom substrate tubes in our facility.",
      color: "bg-gradient-coffee"
    },
    {
      number: 2,
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Farmer Training",
      description: "Comprehensive training programs teach farmers mushroom cultivation techniques, maintenance, and harvesting best practices.",
      color: "bg-gradient-primary"
    },
    {
      number: 3,
      icon: <Sprout className="w-8 h-8" />,
      title: "Cultivation & Harvest",
      description: "Farmers receive ready-to-fruit substrate tubes and begin harvesting fresh mushrooms within 7-14 days.",
      color: "bg-secondary"
    },
    {
      number: 4,
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Market Linkage",
      description: "We connect farmers with buyers, ensuring guaranteed markets and fair prices for their mushroom harvests.",
      color: "bg-accent"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            From waste to harvest to market - our end-to-end process ensures farmer success every step of the way.
          </p>
        </div>

        {/* Process Flow */}
        <div className="relative">
          {/* Desktop View */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Connector Arrow */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-muted-foreground" />
                    </div>
                  )}
                  
                  {/* Step Card */}
                  <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-earth transition-all duration-300 group h-full">
                    <div className="text-center">
                      <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground group-hover:scale-110 transition-transform duration-300`}>
                        {step.icon}
                      </div>
                      <div className="text-sm font-semibold text-primary mb-2">
                        Step {step.number}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile View */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-6 bg-muted-foreground/30"></div>
                )}
                
                {/* Step Card */}
                <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-earth transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      {step.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-primary mb-1">
                        Step {step.number}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Summary */}
        <div className="mt-16 bg-gradient-earth rounded-xl p-8 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            From Setup to Profit in Just 2 Weeks
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
            Our streamlined process ensures farmers can start generating income quickly with minimal upfront investment and maximum support.
          </p>
          <div className="flex justify-center items-center space-x-8 text-sm">
            <div className="text-center">
              <div className="font-bold text-primary text-lg">Day 1</div>
              <div className="text-muted-foreground">Training & Setup</div>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground" />
            <div className="text-center">
              <div className="font-bold text-primary text-lg">Day 7-14</div>
              <div className="text-muted-foreground">First Harvest</div>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground" />
            <div className="text-center">
              <div className="font-bold text-primary text-lg">Day 15+</div>
              <div className="text-muted-foreground">Ongoing Income</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;