import { useState, useMemo } from "react";
import { plants, Plant } from "@/data/plants";
import CategoryFilter from "./CategoryFilter";
import PlantCard from "./PlantCard";
import PlantDetailModal from "./PlantDetailModal";
import { Leaf } from "lucide-react";

interface PlantEncyclopediaProps {
  searchQuery: string;
}

const PlantEncyclopedia = ({ searchQuery }: PlantEncyclopediaProps) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);

  const filteredPlants = useMemo(() => {
    return plants.filter((plant) => {
      // Category filter
      const matchesCategory = selectedCategory === "all" || plant.category === selectedCategory;
      
      // Search filter
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        !searchQuery ||
        plant.commonName.toLowerCase().includes(query) ||
        plant.scientificName.toLowerCase().includes(query) ||
        plant.medicinalProperties.some((p) => p.toLowerCase().includes(query)) ||
        plant.ayurvedicBenefits.some((b) => b.toLowerCase().includes(query)) ||
        plant.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="plants" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-herb-sage/30 text-herb-deep mb-4">
            <Leaf className="w-4 h-4" />
            <span className="text-sm font-medium">Plant Encyclopedia</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Explore Medicinal Plants
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover the healing power of nature through our comprehensive collection 
            of medicinal and aromatic plants from across India.
          </p>
        </div>

        {/* Category filter */}
        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Results count */}
        {searchQuery && (
          <p className="text-center text-muted-foreground mb-6">
            Found <span className="font-semibold text-foreground">{filteredPlants.length}</span> plants
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        )}

        {/* Plants grid */}
        {filteredPlants.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPlants.map((plant, index) => (
              <div
                key={plant.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <PlantCard plant={plant} onSelect={setSelectedPlant} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Leaf className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
            <h3 className="font-display text-xl text-foreground mb-2">No plants found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}
      </div>

      {/* Plant detail modal */}
      <PlantDetailModal
        plant={selectedPlant}
        isOpen={!!selectedPlant}
        onClose={() => setSelectedPlant(null)}
      />
    </section>
  );
};

export default PlantEncyclopedia;
