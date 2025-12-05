import { Leaf, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-herb-deep text-cream py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-gold" />
              </div>
              <span className="font-display text-xl font-semibold">
                Virtual Herbal Garden
              </span>
            </div>
            <p className="text-cream/70 leading-relaxed">
              Preserving and sharing India's ancient herbal wisdom through digital innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Plant Encyclopedia", "Ayurvedic Benefits", "About Us"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-cream/70 hover:text-gold transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              {["Medicinal Plants", "Aromatic Herbs", "Culinary Herbs", "Ayurvedic Plants"].map((cat) => (
                <li key={cat}>
                  <a href="#" className="text-cream/70 hover:text-gold transition-colors">
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-cream/70">
                <Mail className="w-4 h-4 text-gold" />
                <span>info@virtualherbalgarden.com</span>
              </li>
              <li className="flex items-center gap-2 text-cream/70">
                <Phone className="w-4 h-4 text-gold" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2 text-cream/70">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-1" />
                <span>New Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/50 text-sm">
            © 2024 Virtual Herbal Garden. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-cream/50 hover:text-gold text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-cream/50 hover:text-gold text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
