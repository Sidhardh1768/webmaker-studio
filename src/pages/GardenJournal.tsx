import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { plants } from "@/data/plants";
import { ArrowLeft, BookHeart, Droplets, Plus, Trash2, Bell, BellOff } from "lucide-react";
import { toast } from "sonner";

interface JournalEntry {
  id: string;
  plantId: string;
  date: string;
  note: string;
  watered: boolean;
}
interface Reminder {
  id: string;
  plantId: string;
  task: string;
  intervalDays: number;
  lastDone: string;
}

const J_KEY = "garden-journal";
const R_KEY = "garden-reminders";

const GardenJournal = () => {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [plantId, setPlantId] = useState(plants[0]?.id || "");
  const [note, setNote] = useState("");
  const [task, setTask] = useState("");
  const [interval, setInterval] = useState(3);

  useEffect(() => {
    try {
      setEntries(JSON.parse(localStorage.getItem(J_KEY) || "[]"));
      setReminders(JSON.parse(localStorage.getItem(R_KEY) || "[]"));
    } catch {}
  }, []);

  const save = (e: JournalEntry[], r: Reminder[]) => {
    localStorage.setItem(J_KEY, JSON.stringify(e));
    localStorage.setItem(R_KEY, JSON.stringify(r));
  };

  const addEntry = (watered = false) => {
    if (!note.trim() && !watered) return;
    const next = [
      { id: crypto.randomUUID(), plantId, date: new Date().toISOString(), note: note || (watered ? "Watered 💧" : ""), watered },
      ...entries,
    ];
    setEntries(next);
    save(next, reminders);
    setNote("");
    toast.success("Logged to journal");
  };

  const removeEntry = (id: string) => {
    const next = entries.filter((e) => e.id !== id);
    setEntries(next);
    save(next, reminders);
  };

  const addReminder = () => {
    if (!task.trim()) return;
    const next = [
      ...reminders,
      { id: crypto.randomUUID(), plantId, task, intervalDays: interval, lastDone: new Date().toISOString() },
    ];
    setReminders(next);
    save(entries, next);
    setTask("");
    toast.success("Reminder set");
  };

  const markDone = (id: string) => {
    const next = reminders.map((r) => (r.id === id ? { ...r, lastDone: new Date().toISOString() } : r));
    setReminders(next);
    save(entries, next);
  };

  const removeReminder = (id: string) => {
    const next = reminders.filter((r) => r.id !== id);
    setReminders(next);
    save(entries, next);
  };

  const dueIn = (r: Reminder) => {
    const last = new Date(r.lastDone).getTime();
    const due = last + r.intervalDays * 86400000;
    const days = Math.ceil((due - Date.now()) / 86400000);
    return days;
  };

  const plantName = (id: string) => plants.find((p) => p.id === id)?.commonName || id;

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
              <BookHeart className="w-4 h-4" />
              <span className="text-sm font-medium">Garden Journal</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-3">Your Plant Diary</h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Log watering, growth notes, and set gentle reminders to care for your herbs.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 grid lg:grid-cols-2 gap-8">
          {/* Journal */}
          <div>
            <h2 className="font-display text-2xl font-semibold mb-4">📖 Add Entry</h2>
            <div className="bg-card border border-border rounded-2xl p-5 shadow-soft mb-6 space-y-3">
              <select
                value={plantId}
                onChange={(e) => setPlantId(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-border bg-background"
              >
                {plants.map((p) => (
                  <option key={p.id} value={p.id}>{p.commonName}</option>
                ))}
              </select>
              <Textarea
                placeholder="New leaves emerging, soil felt dry..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={3}
                maxLength={300}
              />
              <div className="flex gap-2">
                <Button onClick={() => addEntry(false)} className="flex-1"><Plus className="w-4 h-4" />Log Note</Button>
                <Button onClick={() => addEntry(true)} variant="outline"><Droplets className="w-4 h-4" />Watered</Button>
              </div>
            </div>

            <h3 className="font-display text-lg font-semibold mb-3">Recent Entries</h3>
            <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2">
              {entries.length === 0 && (
                <p className="text-sm text-muted-foreground text-center py-8">No entries yet.</p>
              )}
              {entries.map((e) => (
                <div key={e.id} className="bg-card border border-border rounded-xl p-4 hover-lift group">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-sm">{plantName(e.plantId)}</span>
                        {e.watered && <Droplets className="w-3.5 h-3.5 text-herb-light" />}
                      </div>
                      <p className="text-sm text-muted-foreground">{e.note}</p>
                      <p className="text-xs text-muted-foreground/60 mt-1">{new Date(e.date).toLocaleString()}</p>
                    </div>
                    <button onClick={() => removeEntry(e.id)} className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-destructive transition-opacity">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reminders */}
          <div>
            <h2 className="font-display text-2xl font-semibold mb-4">⏰ Care Reminders</h2>
            <div className="bg-card border border-border rounded-2xl p-5 shadow-soft mb-6 space-y-3">
              <select
                value={plantId}
                onChange={(e) => setPlantId(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-border bg-background"
              >
                {plants.map((p) => (
                  <option key={p.id} value={p.id}>{p.commonName}</option>
                ))}
              </select>
              <Input placeholder="Task (e.g. Water, Prune)" value={task} onChange={(e) => setTask(e.target.value)} maxLength={60} />
              <div className="flex items-center gap-3">
                <label className="text-sm text-muted-foreground whitespace-nowrap">Every</label>
                <Input type="number" min={1} max={60} value={interval} onChange={(e) => setInterval(Number(e.target.value) || 1)} className="w-20" />
                <span className="text-sm text-muted-foreground">days</span>
              </div>
              <Button onClick={addReminder} className="w-full"><Bell className="w-4 h-4" />Set Reminder</Button>
            </div>

            <h3 className="font-display text-lg font-semibold mb-3">Active Reminders</h3>
            <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2">
              {reminders.length === 0 && (
                <p className="text-sm text-muted-foreground text-center py-8">No reminders set.</p>
              )}
              {reminders.map((r) => {
                const days = dueIn(r);
                const overdue = days < 0;
                const dueToday = days === 0;
                return (
                  <div key={r.id} className={`bg-card border rounded-xl p-4 hover-lift group ${overdue ? "border-destructive/40 bg-destructive/5" : dueToday ? "border-gold/40 bg-gold/5" : "border-border"}`}>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <div className="font-medium text-sm">{r.task} — {plantName(r.plantId)}</div>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          Every {r.intervalDays} day{r.intervalDays > 1 ? "s" : ""} •{" "}
                          {overdue ? <span className="text-destructive font-medium">Overdue by {Math.abs(days)}d</span> :
                            dueToday ? <span className="text-gold font-medium">Due today</span> :
                              <span>Due in {days}d</span>}
                        </p>
                      </div>
                      <div className="flex gap-1">
                        <Button size="sm" variant="ghost" onClick={() => markDone(r.id)} title="Mark done">✓</Button>
                        <button onClick={() => removeReminder(r.id)} className="p-1 text-muted-foreground hover:text-destructive">
                          <BellOff className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GardenJournal;
