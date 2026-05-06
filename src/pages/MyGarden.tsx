import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { plants, Plant } from "@/data/plants";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlantCard from "@/components/PlantCard";
import PlantDetailModal from "@/components/PlantDetailModal";
import { Button } from "@/components/ui/button";
import { Leaf, Sparkles, Trash2, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const STORAGE_KEY = "my-garden";

const readGarden = (): string[] => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
};

const MyGarden = () => {
  const [ids, setIds] = useState<string[]>([]);
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);

  useEffect(() => {
    setIds(readGarden());
    const onStorage = () => setIds(readGarden());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const myPlants = useMemo(
    () => ids.map((id) => plants.find((p) => p.id === id)).filter(Boolean) as Plant[],
    [ids]
  );

  const removePlant = (id: string) => {
    const next = ids.filter((x) => x !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setIds(next);
    toast.success("Removed from your garden");
  };

  const clearAll = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    setIds([]);
    toast.success("Garden cleared");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-herb-sage/30 via-background to-gold/10 pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(hsl(var(--primary)) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="container mx-auto px-4 py-16 relative">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-herb-sage/40 text-herb-deep mb-4">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-medium">Your Personal Collection</span>
                </div>
                <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-3">
                  My Herbal Garden
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl">
                  A curated grove of the medicinal plants you&apos;ve gathered.
                  Tend it, learn from it, and let nature&apos;s wisdom take root.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center px-6 py-4 rounded-2xl bg-card border border-border shadow-soft">
                  <div className="font-display text-3xl font-bold text-primary">
                    {myPlants.length}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    Plants
                  </div>
                </div>
                {myPlants.length > 0 && (
                  <Button variant="outline" onClick={clearAll}>
                    <Trash2 className="w-4 h-4" /> Clear All
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Garden grid */}
        <section className="container mx-auto px-4 py-12">
          {myPlants.length === 0 ? (
            <div className="max-w-xl mx-auto text-center py-16 px-6 rounded-3xl bg-card border border-dashed border-border">
              <div className="w-20 h-20 mx-auto rounded-full bg-herb-sage/30 flex items-center justify-center mb-6 animate-grow-pop">
                <Leaf className="w-10 h-10 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-3">
                Your garden is empty
              </h2>
              <p className="text-muted-foreground mb-6">
                Browse the encyclopedia and tap{" "}
                <span className="text-primary font-medium">Add to My Garden</span>{" "}
                on any plant to begin growing your collection.
              </p>
              <Button asChild size="lg">
                <Link to="/#plants">
                  <Leaf className="w-4 h-4" /> Explore Plants
                </Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {myPlants.map((plant, i) => (
                <div
                  key={plant.id}
                  className="relative animate-fade-in-up"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <PlantCard plant={plant} onSelect={setSelectedPlant} />
                  <button
                    onClick={() => removePlant(plant.id)}
                    aria-label="Remove from garden"
                    className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-background/90 backdrop-blur border border-border text-muted-foreground hover:text-destructive hover:border-destructive transition-all flex items-center justify-center opacity-0 group-hover:opacity-100"
                    style={{ opacity: 1 }}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
      <PlantDetailModal
        plant={selectedPlant}
        isOpen={!!selectedPlant}
        onClose={() => setSelectedPlant(null)}
      />
    </div>
  );
};

export default MyGarden;
