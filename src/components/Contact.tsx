import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    interest: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "", interest: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+250796519383",
      action: "tel:+250796519383"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email", 
      details: "info@myco.rw",
      action: "mailto:info@myco.rw"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: "Kigali, Rwanda",
      action: "https://goo.gl/maps/anvFxw981TrVqXCv5?g_st=aw"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      details: "Click to chat directly",
      action: "https://wa.me/250796519383"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Ready to start your mushroom farming journey? We're here to help you succeed every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-xl p-8 shadow-soft">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+250 xxx xxx xxx"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-foreground mb-2">
                  I'm interested in
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select your interest</option>
                  <option value="farmer-partner">Becoming a Farmer Partner</option>
                  <option value="substrate-purchase">Purchasing Substrate Tubes</option>
                  <option value="training">Training Programs</option>
                  <option value="business-partnership">Business Partnership</option>
                  <option value="investment">Investment Opportunities</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell us about your interest, questions, or how we can help you..."
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full group">
                Send Message
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Contact Information
            </h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.action}
                  className="flex items-center space-x-4 p-4 bg-card rounded-lg shadow-soft hover:shadow-earth transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{info.title}</div>
                    <div className="text-muted-foreground">{info.details}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <Button variant="hero" size="lg" className="w-full">
                Become a Farmer Partner
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                Partner with Us
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                className="w-full"
                onClick={() => window.open("https://wa.me/250796519383", "_blank")}
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                WhatsApp Us
              </Button>
            </div>

            {/* Map */}
            <div className="mt-8 bg-muted rounded-xl p-8 text-center">
              <h4 className="font-semibold text-foreground mb-2">Visit Our Office</h4>
              <p className="text-muted-foreground mb-4">Kigali, Rwanda</p>
              <div className="w-full h-32 bg-accent/20 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63824.55771574948!2d30.031862!3d-1.9441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0xf32b36a5411d0bc8!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1635789012345!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MyCo Mushrooms Location"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;