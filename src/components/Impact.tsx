import { Leaf, Users, Recycle, TrendingUp } from "lucide-react";

const Impact = () => {
  const sdgCards = [
    {
      number: "SDG 2",
      title: "Zero Hunger",
      description: "Providing nutritious, protein-rich mushrooms as a meat alternative",
      color: "bg-orange-500"
    },
    {
      number: "SDG 8", 
      title: "Decent Work & Economic Growth",
      description: "Creating jobs for youth and women through sustainable farming",
      color: "bg-red-500"
    },
    {
      number: "SDG 12",
      title: "Responsible Consumption & Production",
      description: "Recycling waste into valuable products and reducing environmental impact",
      color: "bg-yellow-500"
    }
  ];

  const impactStats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "22",
      label: "Farmers Trained",
      description: "Farmers equipped with mushroom cultivation skills and substrate tubes"
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      number: "120",
      label: "Substrate Tubes Sold",
      description: "Ready-to-fruit tubes produced and sold out in just 5 days"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "100%",
      label: "Recycled Waste",
      description: "All coffee-based substrate made from recycled waste materials"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      number: "Zero",
      label: "Waste to Landfill",
      description: "Converting agricultural waste into valuable mushroom substrate"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our Impact on Communities
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Measuring success through sustainable development goals and real community transformation.
          </p>
        </div>

        {/* SDG Alignment */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center text-foreground mb-8">
            UN Sustainable Development Goals Alignment
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {sdgCards.map((sdg, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-soft hover:shadow-earth transition-all duration-300 group">
                <div className={`w-16 h-16 ${sdg.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white font-bold text-sm">{sdg.number}</span>
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">{sdg.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{sdg.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="bg-card rounded-xl p-8 shadow-soft">
          <h3 className="text-2xl font-semibold text-center text-foreground mb-12">
            Measurable Impact
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground group-hover:shadow-earth transition-all duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Infographic Placeholder */}
        <div className="mt-16 text-center">
          <div className="bg-muted rounded-xl p-12 shadow-soft">
            <h4 className="text-xl font-semibold text-foreground mb-4">
              Interactive Impact Dashboard
            </h4>
            <p className="text-muted-foreground mb-6">
              Real-time visualization of our community impact across Rwanda
            </p>
            <div className="w-full h-48 bg-accent/20 rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground">Interactive infographic coming soon</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;