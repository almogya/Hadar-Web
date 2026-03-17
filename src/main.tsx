import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Ensure clean theme state on load
if (localStorage.getItem("hy-theme") !== "dark") {
  document.documentElement.classList.remove("dark");
}

createRoot(document.getElementById("root")!).render(<App />);
