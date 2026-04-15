import { ViteReactSSG } from "vite-react-ssg";
import { Analytics } from "@vercel/analytics/react";
import routes from "./App.tsx";
import "./index.css";

// Ensure clean theme state on load (client-only)
if (typeof window !== "undefined") {
  if (localStorage.getItem("hy-theme") !== "dark") {
    document.documentElement.classList.remove("dark");
  }
}

export const createRoot = ViteReactSSG(
  { routes },
  ({ isClient }) => {
    if (isClient) {
      // Analytics is client-only
    }
  },
);
