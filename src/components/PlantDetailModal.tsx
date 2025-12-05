import { Plant } from "@/data/plants";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { X, MapPin, Droplets, Sun, ThermometerSun, CloudRain, Leaf, Heart, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

interface PlantDetailModalProps {
  plant: Plant | null;
  isOpen: boolean;
  onClose: () => void;
}

const PlantDetailModal = ({ plant, isOpen, onClose }: PlantDetailModalProps) => {
  if (!plant) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 bg-background border-border">
        {/* Hero Image */}
        <div className="relative h-64 md:h-80">
          <img
            src={plant.image}
            alt={plant.commonName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Category badge */}
          <span className="absolute top-4 left-4 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-full capitalize">
            {plant.category}
          </span>
        </div>

        <div className="p-6 md:p-8 -mt-16 relative">
          <DialogHeader className="text-left mb-6">
            <DialogTitle className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              {plant.commonName}
            </DialogTitle>
            <p className="text-lg text-muted-foreground italic">{plant.scientificName}</p>
            <p className="text-sm text-secondary font-medium">Family: {plant.family}</p>
          </DialogHeader>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed mb-8">
            {plant.description}
          </p>

          {/* Growing Conditions */}
          <div className="mb-8">
            <h4 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Leaf className="w-5 h-5 text-primary" />
              Growing Conditions
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: Sun, label: "Sunlight", value: plant.growingConditions.sunlight, color: "text-gold" },
                { icon: Droplets, label: "Watering", value: plant.growingConditions.watering, color: "text-herb-light" },
                { icon: ThermometerSun, label: "Temperature", value: plant.growingConditions.temperature, color: "text-earth-terracotta" },
                { icon: CloudRain, label: "Rainfall", value: plant.growingConditions.rainfall, color: "text-herb-light" },
                { icon: Leaf, label: "Soil", value: plant.growingConditions.soil, color: "text-earth-warm" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-4 bg-card rounded-xl border border-border"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <item.icon className={`w-4 h-4 ${item.color}`} />
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Medicinal Properties */}
          <div className="mb-8">
            <h4 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-earth-terracotta" />
              Medicinal Properties
            </h4>
            <div className="flex flex-wrap gap-2">
              {plant.medicinalProperties.map((prop) => (
                <span
                  key={prop}
                  className="px-4 py-2 bg-herb-sage/30 text-herb-deep rounded-full text-sm font-medium"
                >
                  {prop}
                </span>
              ))}
            </div>
          </div>

          {/* Ayurvedic Benefits */}
          <div className="mb-8">
            <h4 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-gold" />
              Ayurvedic Benefits
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {plant.ayurvedicBenefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-2 text-muted-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* Regions */}
          <div className="mb-8">
            <h4 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-secondary" />
              Growing Regions in India
            </h4>
            <div className="flex flex-wrap gap-2">
              {plant.regions.map((region) => (
                <span
                  key={region}
                  className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium border border-secondary/20"
                >
                  {region}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 pt-4 border-t border-border">
            <Button variant="default" size="lg" className="flex-1">
              Add to My Garden
            </Button>
            <Button variant="outline" size="lg" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PlantDetailModal;
