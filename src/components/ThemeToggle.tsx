import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    const stored = localStorage.getItem("garden-theme");
    if (stored) return stored === "night";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("garden-theme", "night");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("garden-theme", "day");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark((v) => !v)}
      aria-label="Toggle day/night garden mode"
      title={isDark ? "Switch to Day Garden" : "Switch to Night Garden"}
      className="relative w-14 h-8 rounded-full bg-muted border border-border flex items-center transition-colors hover:border-primary/40 px-1"
    >
      <span
        className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-soft transition-transform duration-300 ${
          isDark ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {isDark ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
      </span>
    </button>
  );
};

export default ThemeToggle;
