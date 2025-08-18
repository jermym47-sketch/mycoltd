import { Leaf, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <MessageCircle className="w-5 h-5" />, href: "https://wa.me/250xxxxxxxxx", label: "WhatsApp" }
  ];

  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Our Solution", href: "#solution" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Products", href: "#products" }
  ];

  const supportLinks = [
    { label: "Farmer Training", href: "#training" },
    { label: "Market Access", href: "#markets" },
    { label: "Support Center", href: "#support" },
    { label: "Blog", href: "#blog" }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/d1af3f81-1943-477c-a6cd-e6645898d4e1.png" 
                alt="MyCo Mushrooms Logo" 
                className="h-10 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Turning coffee waste into food and income for smallholder farmers across Rwanda. 
              Building sustainable communities through agricultural innovation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-3 text-background/80">
              <p>+250 XXX XXX XXX</p>
              <p>info@mycomushrooms.com</p>
              <p>Kigali, Rwanda</p>
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Stay Updated</h4>
              <p className="text-sm text-background/70 mb-3">
                Get farmer tips and company news
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-background/10 border border-background/20 rounded-l-lg text-background placeholder-background/60 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="px-4 py-2 bg-primary hover:bg-primary-glow rounded-r-lg transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/70 text-sm">
              © {currentYear} MyCo Mushrooms. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-background/70 hover:text-primary text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-background/70 hover:text-primary text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-background/70 hover:text-primary text-sm transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;