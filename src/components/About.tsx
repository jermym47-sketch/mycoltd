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
            MyCo Mushrooms is a Rwanda-based agri-innovation startup dedicated to creating a circular economy in agriculture. We empower youth and women farmers by providing ready-to-use, high-yield mushroom substrates made from recycled coffee grounds and other local agricultural waste.
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
              To turn "dump to wealth" by transforming waste into nutritious food, income opportunities, and environmental benefits.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-coffee rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-earth transition-all duration-300">
              <Eye className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              A future where every farmer can grow more with less—producing nutritious food sustainably while regenerating our planet.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-earth transition-all duration-300">
              <Heart className="w-8 h-8 text-secondary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Our Story</h3>
            <p className="text-muted-foreground leading-relaxed">
              Founded by three passionate entrepreneurs—Ermias Mekonnen, Clever Kayitaramirwa, and Providence Irakoze—MyCo Mushrooms was born out of the desire to solve three urgent problems: food insecurity, agricultural waste, and youth unemployment.
            </p>
          </div>
        </div>

        {/* Founder Stories */}
        <div className="bg-card rounded-xl p-8 shadow-soft">
          <h3 className="text-2xl font-semibold text-center text-foreground mb-8">
            Meet Our Co-Founders
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">EM</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Ermias Mekonnen</h4>
              <p className="text-muted-foreground">
                Co-Founder passionate about sustainable agriculture and transforming waste into wealth through innovative farming solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-coffee rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">CK</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Clever Kayitaramirwa</h4>
              <p className="text-muted-foreground">
                Co-Founder focused on empowering farmers through technology and creating sustainable income opportunities in rural communities.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-secondary-foreground">PI</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Providence Irakoze</h4>
              <p className="text-muted-foreground">
                Co-Founder dedicated to solving food insecurity and youth unemployment through agricultural innovation and circular economy principles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;