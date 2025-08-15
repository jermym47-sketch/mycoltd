import { Target, Eye, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            About MyCo Mushrooms
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We're a Rwanda-based agri-innovation startup on a mission to transform agricultural waste 
            into sustainable income opportunities for smallholder farmers while addressing food security.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-earth transition-all duration-300">
              <Target className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To empower smallholder farmers in Rwanda by converting agricultural waste into 
              high-value mushroom production systems that ensure food security and sustainable income.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-coffee rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-earth transition-all duration-300">
              <Eye className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              A Rwanda where every smallholder farmer has access to sustainable, profitable 
              agricultural innovations that strengthen communities and protect the environment.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-earth transition-all duration-300">
              <Heart className="w-8 h-8 text-secondary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Our Values</h3>
            <p className="text-muted-foreground leading-relaxed">
              Sustainability, farmer empowerment, innovation, and environmental stewardship 
              guide everything we do in building resilient agricultural communities.
            </p>
          </div>
        </div>

        {/* Founder Stories */}
        <div className="bg-card rounded-xl p-8 shadow-soft">
          <h3 className="text-2xl font-semibold text-center text-foreground mb-8">
            Meet Our Co-Founders
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">CF</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Co-Founder 1</h4>
              <p className="text-muted-foreground">
                Agricultural innovation expert with 10+ years experience in sustainable farming 
                and waste management solutions across East Africa.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-coffee rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">CF</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Co-Founder 2</h4>
              <p className="text-muted-foreground">
                Business development leader focused on farmer training, market linkages, 
                and sustainable supply chain development in rural communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;