import { Plant } from "@/data/plants";
import { MapPin, Droplets, Sun, ThermometerSun } from "lucide-react";
import { Button } from "./ui/button";

interface PlantCardProps {
  plant: Plant;
  onSelect: (plant: Plant) => void;
}

const PlantCard = ({ plant, onSelect }: PlantCardProps) => {
  return (
    <article className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 shadow-soft hover:shadow-elevated transition-all duration-500 h-full flex flex-col">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={plant.image}
          alt={plant.commonName}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = "/placeholder.svg";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
        
        {/* Category badge */}
        <span className="absolute top-3 left-3 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full capitalize">
          {plant.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        {/* Title */}
        <h3 className="font-display text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
          {plant.commonName}
        </h3>
        <p className="text-sm text-muted-foreground italic mb-3">
          {plant.scientificName}
        </p>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
          {plant.description}
        </p>

        {/* Quick info */}
        <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Sun className="w-3.5 h-3.5 text-gold" />
            <span className="truncate">{plant.growingConditions.sunlight.split('(')[0]}</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Droplets className="w-3.5 h-3.5 text-herb-light" />
            <span className="truncate">{plant.growingConditions.watering.split(',')[0]}</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <ThermometerSun className="w-3.5 h-3.5 text-earth-terracotta" />
            <span>{plant.growingConditions.temperature}</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <MapPin className="w-3.5 h-3.5 text-secondary" />
            <span className="truncate">{plant.regions[0]}</span>
          </div>
        </div>

        {/* Properties tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {plant.medicinalProperties.slice(0, 3).map((prop) => (
            <span
              key={prop}
              className="px-2 py-0.5 bg-herb-sage/30 text-herb-deep text-xs rounded-md"
            >
              {prop}
            </span>
          ))}
        </div>

        {/* Action button */}
        <Button
          variant="nature"
          className="w-full mt-auto"
          onClick={() => onSelect(plant)}
        >
          View Details
        </Button>
      </div>
    </article>
  );
};

export default PlantCard;
