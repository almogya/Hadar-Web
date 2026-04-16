import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch: only render theme-aware UI after mount
  useEffect(() => { setMounted(true); }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex items-center justify-center w-9 h-9 text-muted-foreground hover:text-foreground border border-border hover:border-foreground/20 transition-all"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
};

export default ThemeToggle;
