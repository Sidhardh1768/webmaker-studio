import { Heart, Brain, Shield, Sparkles, Leaf, Sun } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Heart & Circulatory Health",
    description: "Many herbs like Arjuna and Ashwagandha support cardiovascular function and help maintain healthy blood pressure.",
    color: "text-earth-terracotta",
    bgColor: "bg-earth-terracotta/10",
  },
  {
    icon: Brain,
    title: "Mental Clarity & Focus",
    description: "Brahmi, Shankhpushpi, and other nootropic herbs enhance memory, concentration, and cognitive function.",
    color: "text-herb-deep",
    bgColor: "bg-herb-sage/30",
  },
  {
    icon: Shield,
    title: "Immune System Support",
    description: "Tulsi, Giloy, and Amla are powerful immunomodulators that strengthen the body's natural defenses.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Sparkles,
    title: "Skin & Beauty Care",
    description: "Neem, Turmeric, and Aloe Vera provide natural solutions for radiant skin and healthy hair.",
    color: "text-gold",
    bgColor: "bg-gold/10",
  },
  {
    icon: Leaf,
    title: "Digestive Wellness",
    description: "Triphala, Ginger, and Mint aid digestion, reduce bloating, and promote gut health naturally.",
    color: "text-herb-light",
    bgColor: "bg-herb-light/20",
  },
  {
    icon: Sun,
    title: "Energy & Vitality",
    description: "Adaptogenic herbs like Ashwagandha and Shatavari help combat fatigue and restore natural energy.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-earth-warm mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Ayurvedic Wisdom</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            The Power of Herbal Medicine
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ayurveda, the ancient Indian system of medicine, harnesses the therapeutic 
            properties of plants to promote holistic well-being.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/30 shadow-soft hover:shadow-elevated transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl ${benefit.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className={`w-7 h-7 ${benefit.color}`} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Ayurveda quote */}
        <div className="mt-16 p-8 md:p-12 bg-hero-gradient rounded-3xl text-center">
          <blockquote className="font-display text-xl md:text-2xl text-cream/90 italic mb-4 max-w-3xl mx-auto">
            "When diet is wrong, medicine is of no use. When diet is correct, medicine is of no need."
          </blockquote>
          <cite className="text-gold font-medium">— Ayurvedic Proverb</cite>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
