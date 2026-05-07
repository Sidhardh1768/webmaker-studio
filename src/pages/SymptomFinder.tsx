import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Stethoscope, Loader2, Leaf, AlertTriangle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface Remedy {
  plant: string;
  scientificName: string;
  whyItHelps: string;
  preparation: string;
  dosage: string;
  cautions: string;
}
interface Result {
  summary: string;
  remedies: Remedy[];
  disclaimer: string;
}

const SymptomFinder = () => {
  const [symptoms, setSymptoms] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);

  const submit = async () => {
    if (!symptoms.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      const { data, error } = await supabase.functions.invoke("symptom-remedy", {
        body: { symptoms },
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      setResult(data as Result);
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
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-herb-sage/30 via-background to-gold/10" />
          <div className="container mx-auto px-4 py-16 relative">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-herb-sage/40 text-herb-deep mb-4">
              <Stethoscope className="w-4 h-4" />
              <span className="text-sm font-medium">AI Remedy Finder</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-3">
              Symptom → Herbal Remedy
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Describe what you're feeling and our AI Ayurvedic guide will suggest matching herbs, preparations, and cautions.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 max-w-3xl">
          <div className="bg-card border border-border rounded-2xl p-6 shadow-soft mb-8">
            <Textarea
              placeholder="e.g. trouble sleeping, anxiety in the evenings, occasional indigestion after meals..."
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              rows={4}
              className="mb-4"
              maxLength={500}
            />
            <Button onClick={submit} disabled={loading || !symptoms.trim()} size="lg" className="w-full">
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Stethoscope className="w-4 h-4" />}
              {loading ? "Consulting the herbalist..." : "Find Remedies"}
            </Button>
          </div>

          {result && (
            <div className="space-y-6 animate-fade-in-up">
              <div className="bg-herb-sage/20 border border-herb-sage/40 rounded-2xl p-5">
                <p className="text-foreground">{result.summary}</p>
              </div>
              <div className="grid gap-4">
                {result.remedies?.map((r, i) => (
                  <div key={i} className="bg-card border border-border rounded-2xl p-6 shadow-soft hover-lift">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Leaf className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-semibold">{r.plant}</h3>
                        <p className="text-xs italic text-muted-foreground">{r.scientificName}</p>
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3 text-sm">
                      <div><span className="font-medium text-foreground">Why it helps: </span><span className="text-muted-foreground">{r.whyItHelps}</span></div>
                      <div><span className="font-medium text-foreground">Preparation: </span><span className="text-muted-foreground">{r.preparation}</span></div>
                      <div><span className="font-medium text-foreground">Dosage: </span><span className="text-muted-foreground">{r.dosage}</span></div>
                      <div className="text-amber-600 dark:text-amber-400"><AlertTriangle className="w-3.5 h-3.5 inline mr-1" /><span className="font-medium">Cautions: </span>{r.cautions}</div>
                    </div>
                  </div>
                ))}
              </div>
              {result.disclaimer && (
                <p className="text-xs text-muted-foreground text-center italic px-4">{result.disclaimer}</p>
              )}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SymptomFinder;
