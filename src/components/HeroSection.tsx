import { Search, Leaf, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

interface HeroSectionProps {
  onSearch: (query: string) => void;
}

const HeroSection = ({ onSearch }: HeroSectionProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-herb-light/20 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gold/10 rounded-full blur-3xl animate-pulse-soft animation-delay-400" />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-cream/10 rounded-full blur-2xl animate-float" />
      
      {/* Floating leaves decoration */}
      <div className="absolute top-1/4 left-1/4 text-cream/20 animate-leaf-sway">
        <Leaf className="w-16 h-16" />
      </div>
      <div className="absolute bottom-1/3 right-1/3 text-cream/15 animate-leaf-sway animation-delay-200">
        <Leaf className="w-12 h-12" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream/10 border border-cream/20 mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-cream/90 text-sm font-medium">
              Discover India's Traditional Healing Wisdom
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-cream mb-6 animate-fade-in-up animation-delay-200">
            Virtual Herbal
            <span className="block text-gold">Garden</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-cream/80 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            Explore the ancient wisdom of Ayurveda through our comprehensive encyclopedia 
            of medicinal and aromatic plants from across India.
          </p>

          {/* Search bar */}
          <form
            onSubmit={handleSearch}
            className="max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-600"
          >
            <div className="flex flex-col sm:flex-row gap-3 p-2 bg-cream/10 backdrop-blur-sm rounded-2xl border border-cream/20">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cream/60" />
                <input
                  type="text"
                  placeholder="Search plants by name, property, or benefit..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-transparent text-cream placeholder:text-cream/50 focus:outline-none text-base"
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="sm:px-8">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
          </form>

          {/* Quick stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 animate-fade-in-up animation-delay-600">
            {[
              { value: "500+", label: "Medicinal Plants" },
              { value: "28", label: "Indian States" },
              { value: "100+", label: "Ayurvedic Uses" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-gold mb-1">
                  {stat.value}
                </div>
                <div className="text-cream/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
