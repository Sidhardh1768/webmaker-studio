import { Leaf, Menu, X, ChevronDown, Stethoscope, GitCompare, BookHeart, Sparkles, LayoutGrid } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/#plants", label: "Encyclopedia" },
    { href: "/#benefits", label: "Benefits" },
    { href: "/#about", label: "About" },
  ];

  const tools = [
    { to: "/gallery", label: "Interactive Gallery", icon: LayoutGrid },
    { to: "/remedy-finder", label: "Symptom → Remedy", icon: Stethoscope },
    { to: "/compare", label: "Compare Plants", icon: GitCompare },
    { to: "/journal", label: "Garden Journal", icon: BookHeart },
    { to: "/garden", label: "My Garden", icon: Sparkles },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/60 transition-all duration-500">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center group-hover:shadow-glow group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
              <Leaf className="w-5 h-5 text-primary-foreground transition-transform duration-500 group-hover:-rotate-12" />
            </div>
            <span className="font-display text-xl md:text-2xl font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
              Virtual Herbal Garden
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-muted-foreground hover:text-primary text-sm font-medium transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-primary after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300"
              >
                {link.label}
              </a>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors outline-none">
                Tools <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {tools.map((t) => (
                  <DropdownMenuItem key={t.to} asChild>
                    <Link to={t.to} className="cursor-pointer">
                      <t.icon className="w-4 h-4 mr-2 text-primary" /> {t.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <ThemeToggle />
            <Button variant="default" size="sm" asChild>
              <Link to="/garden">My Garden</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary font-medium py-2 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="default" className="w-full mt-2" asChild>
                <Link to="/garden" onClick={() => setIsMenuOpen(false)}>
                  Explore Garden
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
