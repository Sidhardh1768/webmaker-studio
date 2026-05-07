import { useState, useMemo } from "react";
import { plants, Plant } from "@/data/plants";
import CategoryFilter from "./CategoryFilter";
import PlantCard from "./PlantCard";
import PlantDetailModal from "./PlantDetailModal";
import PlantResult from "./PlantResult";
import type { PlantInfo } from "./PlantScanner";
import { Leaf, Sparkles, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface PlantEncyclopediaProps {
  searchQuery: string;
}

const PlantEncyclopedia = ({ searchQuery }: PlantEncyclopediaProps) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);
  const [aiResult, setAiResult] = useState<PlantInfo | null>(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiQuery, setAiQuery] = useState<string>("");
  const { toast } = useToast();

  const filteredPlants = useMemo(() => {
    return plants.filter((plant) => {
      const matchesCategory = selectedCategory === "all" || plant.category === selectedCategory;
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

  const handleAiSearch = async () => {
    if (!searchQuery.trim()) return;
    setAiLoading(true);
    setAiResult(null);
    setAiQuery(searchQuery);
    try {
      const { data, error } = await supabase.functions.invoke("search-plant", {
        body: { query: searchQuery },
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      setAiResult(data as PlantInfo);
      if (!data?.identified) {
        toast({
          title: "Not found",
          description: data?.message || "Couldn't find that plant.",
        });
      }
    } catch (e) {
      toast({
        title: "Search failed",
        description: e instanceof Error ? e.message : "Try again later.",
        variant: "destructive",
      });
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <section id="plants" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 reveal">
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

        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {searchQuery && (
          <div className="text-center mb-6 space-y-3">
            <p className="text-muted-foreground">
              Found <span className="font-semibold text-foreground">{filteredPlants.length}</span> plants
              {` for "${searchQuery}"`}
            </p>
            <Button
              variant="nature"
              onClick={handleAiSearch}
              disabled={aiLoading}
            >
              {aiLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Sparkles className="w-4 h-4" />
              )}
              {aiLoading ? "Asking AI..." : `Ask AI about "${searchQuery}"`}
            </Button>
          </div>
        )}

        {aiResult && (
          <div className="max-w-3xl mx-auto mb-10">
            <div className="text-sm text-muted-foreground mb-2 text-center">
              AI result for <span className="italic">"{aiQuery}"</span>
            </div>
            {aiResult.identified ? (
              <PlantResult plantInfo={aiResult} />
            ) : (
              <div className="bg-muted/50 rounded-lg p-6 text-center">
                <p className="text-sm text-muted-foreground">
                  {aiResult.message || "No plant info found."}
                </p>
              </div>
            )}
          </div>
        )}

        {filteredPlants.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPlants.map((plant, index) => (
              <div
                key={plant.id}
                className="reveal"
                style={{ transitionDelay: `${Math.min(index * 60, 400)}ms` }}
              >
                <PlantCard plant={plant} onSelect={setSelectedPlant} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Leaf className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
            <h3 className="font-display text-xl text-foreground mb-2">No plants in our library</h3>
            <p className="text-muted-foreground mb-4">
              We don't have "{searchQuery}" in our local collection — try our AI search above.
            </p>
          </div>
        )}
      </div>

      <PlantDetailModal
        plant={selectedPlant}
        isOpen={!!selectedPlant}
        onClose={() => setSelectedPlant(null)}
      />
    </section>
  );
};

export default PlantEncyclopedia;
