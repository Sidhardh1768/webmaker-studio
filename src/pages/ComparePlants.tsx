import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { plants } from "@/data/plants";
import { ArrowLeft, GitCompare, Loader2, X, Trophy } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface Compare {
  verdict: string;
  rows: { trait: string; values: string[] }[];
  winner?: { category: string; plant: string };
}

const ComparePlants = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Compare | null>(null);

  const filtered = useMemo(
    () =>
      plants.filter(
        (p) =>
          !selected.includes(p.commonName) &&
          (!search || p.commonName.toLowerCase().includes(search.toLowerCase()))
      ).slice(0, 12),
    [search, selected]
  );

  const add = (name: string) => {
    if (selected.length >= 3) {
      toast.error("Compare up to 3 plants");
      return;
    }
    setSelected([...selected, name]);
  };

  const remove = (name: string) => setSelected(selected.filter((s) => s !== name));

  const compare = async () => {
    if (selected.length < 2) return;
    setLoading(true);
    setResult(null);
    try {
      const { data, error } = await supabase.functions.invoke("compare-plants", {
        body: { plants: selected },
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      setResult(data as Compare);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Failed");
    } finally {
      setLoading(false);
    }
  };

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
              <GitCompare className="w-4 h-4" />
              <span className="text-sm font-medium">Plant Compare Tool</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-3">Compare Herbs Side by Side</h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Pick 2 or 3 plants. Our AI distils their differences across uses, doshas, safety, and more.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 max-w-5xl">
          <div className="bg-card border border-border rounded-2xl p-6 shadow-soft mb-8">
            <div className="flex flex-wrap gap-2 mb-4 min-h-[2.5rem]">
              {selected.length === 0 && (
                <p className="text-sm text-muted-foreground">Select 2-3 plants below…</p>
              )}
              {selected.map((s) => (
                <span key={s} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm">
                  {s}
                  <button onClick={() => remove(s)} className="hover:text-destructive"><X className="w-3.5 h-3.5" /></button>
                </span>
              ))}
            </div>
            <input
              placeholder="Search plants..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background mb-3 text-sm"
            />
            <div className="flex flex-wrap gap-2 mb-4">
              {filtered.map((p) => (
                <button
                  key={p.id}
                  onClick={() => add(p.commonName)}
                  className="px-3 py-1.5 text-sm rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-all"
                >
                  + {p.commonName}
                </button>
              ))}
            </div>
            <Button onClick={compare} disabled={loading || selected.length < 2} size="lg" className="w-full">
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <GitCompare className="w-4 h-4" />}
              {loading ? "Analyzing..." : `Compare ${selected.length} Plants`}
            </Button>
          </div>

          {result && (
            <div className="space-y-4 animate-fade-in-up">
              <div className="bg-herb-sage/20 border border-herb-sage/40 rounded-2xl p-5">
                <p>{result.verdict}</p>
              </div>
              <div className="overflow-x-auto bg-card border border-border rounded-2xl shadow-soft">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/30">
                      <th className="text-left px-4 py-3 font-medium">Trait</th>
                      {selected.map((s) => (
                        <th key={s} className="text-left px-4 py-3 font-display text-base">{s}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {result.rows?.map((row, i) => (
                      <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/20">
                        <td className="px-4 py-3 font-medium text-muted-foreground">{row.trait}</td>
                        {row.values.map((v, j) => (
                          <td key={j} className="px-4 py-3">{v}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {result.winner && (
                <div className="flex items-center gap-3 bg-gold/10 border border-gold/30 rounded-2xl p-5">
                  <Trophy className="w-6 h-6 text-gold" />
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{result.winner.category}</div>
                    <div className="font-display text-lg font-semibold">{result.winner.plant}</div>
                  </div>
                </div>
              )}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ComparePlants;
