import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { plants, categories } from "@/data/plants";
import PlantCard from "@/components/PlantCard";
import PlantDetailModal from "@/components/PlantDetailModal";
import { ArrowLeft, Sparkles, Search, BarChart3 } from "lucide-react";
import type { Plant } from "@/data/plants";

const Gallery = () => {
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);
  const [cat, setCat] = useState("all");
  const [region, setRegion] = useState("all");
  const [dosha, setDosha] = useState("all");
  const [search, setSearch] = useState("");

  const allRegions = useMemo(() => {
    const set = new Set<string>();
    plants.forEach((p) => p.regions.forEach((r) => set.add(r)));
    return ["all", ...Array.from(set).sort()];
  }, []);

  const doshas = ["all", "Vata", "Pitta", "Kapha"];

  const filtered = useMemo(() => {
    return plants.filter((p) => {
      if (cat !== "all" && p.category !== cat) return false;
      if (region !== "all" && !p.regions.includes(region)) return false;
      if (dosha !== "all" && !p.ayurvedicBenefits.some((b) => b.toLowerCase().includes(dosha.toLowerCase()))) return false;
      if (search && !p.commonName.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [cat, region, dosha, search]);

  const stats = useMemo(() => {
    const byCat: Record<string, number> = {};
    filtered.forEach((p) => (byCat[p.category] = (byCat[p.category] || 0) + 1));
    return {
      total: filtered.length,
      byCat,
      regions: new Set(filtered.flatMap((p) => p.regions)).size,
    };
  }, [filtered]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <section className="border-b border-border bg-gradient-to-br from-herb-sage/30 via-background to-gold/10">
          <div className="container mx-auto px-4 py-16">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-herb-sage/40 text-herb-deep mb-4">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Interactive Plant Gallery</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-3">Explore Every Herb</h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Filter by category, region, or dosha. Hover the cards for a 3D tilt effect.
            </p>
          </div>
        </section>

        {/* Stats dashboard */}
        <section className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
            <div className="bg-card border border-border rounded-2xl p-4 hover-lift">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                <BarChart3 className="w-3.5 h-3.5" />Showing
              </div>
              <div className="font-display text-2xl font-bold text-primary">{stats.total}</div>
            </div>
            <div className="bg-card border border-border rounded-2xl p-4 hover-lift">
              <div className="text-xs text-muted-foreground mb-1">Regions</div>
              <div className="font-display text-2xl font-bold text-primary">{stats.regions}</div>
            </div>
            {categories.filter((c) => c.id !== "all").map((c) => (
              <div key={c.id} className="bg-card border border-border rounded-2xl p-4 hover-lift">
                <div className="text-xs text-muted-foreground mb-1">{c.icon} {c.name}</div>
                <div className="font-display text-2xl font-bold text-primary">{stats.byCat[c.id] || 0}</div>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className="bg-card border border-border rounded-2xl p-5 mb-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-lg border border-border bg-background text-sm"
              />
            </div>
            <select value={cat} onChange={(e) => setCat(e.target.value)} className="px-3 py-2 rounded-lg border border-border bg-background text-sm">
              {categories.map((c) => <option key={c.id} value={c.id}>{c.icon} {c.name}</option>)}
            </select>
            <select value={region} onChange={(e) => setRegion(e.target.value)} className="px-3 py-2 rounded-lg border border-border bg-background text-sm">
              {allRegions.map((r) => <option key={r} value={r}>{r === "all" ? "All Regions" : r}</option>)}
            </select>
            <select value={dosha} onChange={(e) => setDosha(e.target.value)} className="px-3 py-2 rounded-lg border border-border bg-background text-sm">
              {doshas.map((d) => <option key={d} value={d}>{d === "all" ? "All Doshas" : d}</option>)}
            </select>
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((plant, i) => (
                <div key={plant.id} className="animate-fade-in-up" style={{ animationDelay: `${Math.min(i * 40, 400)}ms` }}>
                  <PlantCard plant={plant} onSelect={setSelectedPlant} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-muted-foreground">No plants match these filters.</div>
          )}
        </section>
      </main>
      <Footer />
      <PlantDetailModal plant={selectedPlant} isOpen={!!selectedPlant} onClose={() => setSelectedPlant(null)} />
    </div>
  );
};

export default Gallery;
