import { Package, Users, Handshake, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Products = () => {
  const products = [
    {
      icon: <Package className="w-8 h-8" />,
      title: "Substrate Tube Packages",
      description: "Ready-to-fruit mushroom substrate tubes made from premium coffee grounds and agricultural waste.",
      features: [
        "Optimized for oyster mushrooms",
        "7-14 day harvest cycle", 
        "High yield guarantee",
        "Eco-friendly packaging"
      ],
      pricing: "Starting at $5 per tube",
      cta: "Order Substrate Tubes"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Farmer Training Programs",
      description: "Comprehensive education covering mushroom cultivation, maintenance, quality control, and business skills.",
      features: [
        "Hands-on cultivation training",
        "Business development sessions",
        "Quality control techniques",
        "Ongoing support network"
      ],
      pricing: "Included with substrate purchase",
      cta: "Join Training Program"
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Market Linkage Services",
      description: "Direct connections to buyers, restaurants, and markets ensuring guaranteed sales for your harvest.",
      features: [
        "Guaranteed buyer network",
        "Fair price negotiations",
        "Logistics coordination",
        "Payment security"
      ],
      pricing: "5% commission on sales",
      cta: "Access Markets"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Products & Services
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Everything you need to start and scale your mushroom farming operation successfully.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-card rounded-xl p-8 shadow-soft hover:shadow-earth transition-all duration-300 group h-full flex flex-col">
              {/* Header */}
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                  {product.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {product.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Features */}
              <div className="flex-grow mb-6">
                <h4 className="font-semibold text-foreground mb-4">Key Features:</h4>
                <ul className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing & CTA */}
              <div className="text-center">
                <div className="text-lg font-semibold text-primary mb-4">
                  {product.pricing}
                </div>
                <Button variant="hero" className="w-full">
                  {product.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Package Deals */}
        <div className="mt-16 bg-card rounded-xl p-8 shadow-soft">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Complete Farmer Packages
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Comprehensive solutions that include substrate tubes, training, and market access for new and experienced farmers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-border rounded-lg p-6 hover:shadow-soft transition-all duration-300">
              <h4 className="text-lg font-semibold text-foreground mb-3">Starter Package</h4>
              <div className="text-2xl font-bold text-primary mb-4">$50</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm">10 substrate tubes</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm">Basic training session</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm">Market access support</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Choose Starter
              </Button>
            </div>

            <div className="border border-primary rounded-lg p-6 hover:shadow-earth transition-all duration-300 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold rounded-full">
                  Most Popular
                </span>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Growth Package</h4>
              <div className="text-2xl font-bold text-primary mb-4">$150</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm">30 substrate tubes</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm">Comprehensive training</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm">Priority market access</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm">3-month support</span>
                </li>
              </ul>
              <Button variant="hero" className="w-full">
                Choose Growth
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;