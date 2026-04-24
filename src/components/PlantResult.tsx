import { Sparkles, ExternalLink, Search } from "lucide-react";
import { plants } from "@/data/plants";
import { Button } from "@/components/ui/button";
import type { PlantInfo } from "@/components/PlantScanner";

interface PlantResultProps {
  plantInfo: PlantInfo;
}

const PlantResult = ({ plantInfo }: PlantResultProps) => {
  if (!plantInfo.identified) return null;

  const matchedPlant = plants.find(
    (plant) =>
      plant.scientificName.toLowerCase() === plantInfo.scientificName?.toLowerCase() ||
      plant.commonName.toLowerCase() === plantInfo.commonName?.toLowerCase(),
  );

  const searchTerm = encodeURIComponent(
    plantInfo.scientificName || plantInfo.commonName || "plant",
  );

  return (
    <div className="bg-muted/50 rounded-lg p-4 space-y-4 animate-in slide-in-from-bottom-4 duration-300">
      {matchedPlant && (
        <img
          src={matchedPlant.image}
          alt={matchedPlant.commonName}
          className="h-48 w-full rounded-lg object-cover border border-border"
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = "/placeholder.svg";
          }}
        />
      )}

      <div className="flex items-start gap-3">
        <Sparkles className="h-5 w-5 text-primary mt-1" />
        <div>
          <h3 className="font-semibold text-lg">{plantInfo.commonName}</h3>
          <p className="text-sm text-muted-foreground italic">{plantInfo.scientificName}</p>
          {plantInfo.family && (
            <p className="text-xs text-muted-foreground">Family: {plantInfo.family}</p>
          )}
          {plantInfo.confidence && (
            <span className={`inline-block mt-1 text-xs px-2 py-0.5 rounded-full ${
              plantInfo.confidence === "high"
                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                : plantInfo.confidence === "medium"
                ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
            }`}>
              {plantInfo.confidence} confidence
            </span>
          )}
        </div>
      </div>

      {plantInfo.description && <p className="text-sm">{plantInfo.description}</p>}

      {plantInfo.medicinalProperties && plantInfo.medicinalProperties.length > 0 && (
        <div>
          <h4 className="font-medium text-sm mb-2">Medicinal Properties</h4>
          <div className="flex flex-wrap gap-1">
            {plantInfo.medicinalProperties.map((prop, idx) => (
              <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                {prop}
              </span>
            ))}
          </div>
        </div>
      )}

      {plantInfo.ayurvedicBenefits && plantInfo.ayurvedicBenefits.length > 0 && (
        <div>
          <h4 className="font-medium text-sm mb-2">Ayurvedic Benefits</h4>
          <ul className="text-sm list-disc list-inside space-y-1">
            {plantInfo.ayurvedicBenefits.map((benefit, idx) => (
              <li key={idx} className="text-muted-foreground">{benefit}</li>
            ))}
          </ul>
        </div>
      )}

      {plantInfo.growingConditions && (
        <div>
          <h4 className="font-medium text-sm mb-2">Growing Conditions</h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {plantInfo.growingConditions.soil && (
              <div><span className="text-muted-foreground">Soil:</span> {plantInfo.growingConditions.soil}</div>
            )}
            {plantInfo.growingConditions.temperature && (
              <div><span className="text-muted-foreground">Temp:</span> {plantInfo.growingConditions.temperature}</div>
            )}
            {plantInfo.growingConditions.sunlight && (
              <div><span className="text-muted-foreground">Sunlight:</span> {plantInfo.growingConditions.sunlight}</div>
            )}
            {plantInfo.growingConditions.watering && (
              <div><span className="text-muted-foreground">Water:</span> {plantInfo.growingConditions.watering}</div>
            )}
          </div>
        </div>
      )}

      {plantInfo.usageTips && (
        <div>
          <h4 className="font-medium text-sm mb-1">Usage Tips</h4>
          <p className="text-sm text-muted-foreground">{plantInfo.usageTips}</p>
        </div>
      )}

      <div className="grid gap-2 sm:grid-cols-2">
        <Button asChild variant="outline">
          <a
            href={`https://lens.google.com/`}
            target="_blank"
            rel="noreferrer"
          >
            <ExternalLink className="h-4 w-4" />
            Compare with Google Lens
          </a>
        </Button>
        <Button asChild variant="nature">
          <a
            href={`https://www.google.com/search?q=${searchTerm}`}
            target="_blank"
            rel="noreferrer"
          >
            <Search className="h-4 w-4" />
            Verify on the web
          </a>
        </Button>
      </div>
    </div>
  );
};

export default PlantResult;
