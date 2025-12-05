import { BookOpen, Users, Globe, Award } from "lucide-react";
import { Button } from "./ui/button";

const stats = [
  { icon: BookOpen, value: "500+", label: "Documented Plants" },
  { icon: Users, value: "10K+", label: "Monthly Visitors" },
  { icon: Globe, value: "28", label: "Indian States" },
  { icon: Award, value: "100+", label: "Ayurvedic Formulas" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-herb-sage/30 text-herb-deep mb-6">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-medium">About Our Project</span>
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Preserving India's
              <span className="text-primary block">Herbal Heritage</span>
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              The Virtual Herbal Garden is a digital platform designed to provide detailed 
              information about various medicinal and aromatic plants found across India. 
              Our mission is to preserve and share the ancient wisdom of Ayurveda with the world.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our comprehensive encyclopedia includes plant taxonomy, scientific names, 
              medicinal properties, Ayurvedic benefits, growing conditions, and state-wise 
              cultivation regions. Whether you're a student, practitioner, or enthusiast, 
              this platform serves as your gateway to understanding India's rich herbal tradition.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="default" size="lg">
                Start Exploring
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="p-6 bg-card rounded-2xl border border-border shadow-soft hover:shadow-elevated transition-all duration-300 text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features list */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Comprehensive Database",
              description: "Detailed information on taxonomy, botanical descriptions, and medicinal properties of each plant."
            },
            {
              title: "Growing Guides",
              description: "Step-by-step cultivation guides including soil, sunlight, temperature, and watering requirements."
            },
            {
              title: "Regional Information",
              description: "State-wise distribution data showing where each plant naturally grows across India."
            }
          ].map((feature, index) => (
            <div key={feature.title} className="text-center">
              <div className="w-10 h-10 rounded-full bg-gold/20 text-gold flex items-center justify-center mx-auto mb-4 font-display font-bold text-lg">
                {index + 1}
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
