import { Leaf, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", href: "/#home" },
  { label: "Plant Encyclopedia", href: "/#plants" },
  { label: "Ayurvedic Benefits", href: "/#benefits" },
  { label: "About Us", href: "/#about" },
];

const categories = [
  { label: "Medicinal Plants", href: "/#plants?category=medicinal" },
  { label: "Aromatic Herbs", href: "/#plants?category=aromatic" },
  { label: "Culinary Herbs", href: "/#plants?category=culinary" },
  { label: "Ayurvedic Plants", href: "/#plants?category=ayurvedic" },
];

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
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-cream/70 hover:text-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link to="/garden" className="text-cream/70 hover:text-gold transition-colors">
                  My Garden
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.label}>
                  <a href={cat.href} className="text-cream/70 hover:text-gold transition-colors">
                    {cat.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@virtualherbalgarden.com"
                  className="flex items-center gap-2 text-cream/70 hover:text-gold transition-colors"
                >
                  <Mail className="w-4 h-4 text-gold" />
                  <span>info@virtualherbalgarden.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+917022682658"
                  className="flex items-center gap-2 text-cream/70 hover:text-gold transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  <span>+91 70226 82658</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Bangalore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-cream/70 hover:text-gold transition-colors"
                >
                  <MapPin className="w-4 h-4 text-gold shrink-0 mt-1" />
                  <span>Bangalore, India</span>
                </a>
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
            <a href="/#about" className="text-cream/50 hover:text-gold text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="/#about" className="text-cream/50 hover:text-gold text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
