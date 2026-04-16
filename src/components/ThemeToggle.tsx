import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("hy-theme") === "dark";
    setDark(saved);
    if (saved) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("hy-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex items-center justify-center w-9 h-9 text-muted-foreground hover:text-foreground border border-border hover:border-foreground/20 transition-all"
    >
      {dark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
};

export default ThemeToggle;
