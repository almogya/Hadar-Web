import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode, isSsrBuild }) => ({
  server: {
    host: "::",
    port: 3000,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: isSsrBuild ? {} : {
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-ui": [
            "@radix-ui/react-accordion", "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu", "@radix-ui/react-navigation-menu",
            "@radix-ui/react-tooltip",
          ],
          "vendor-query": ["@tanstack/react-query"],
        },
      },
    },
  },
  ssgOptions: {
    dirStyle: "nested",
    includedRoutes: async (paths: string[]) => {
      const langs = ["he", "en"];
      const staticRoutes = [
        "", "/about", "/practice-areas",
        "/practice-areas/intellectual-property",
        "/practice-areas/trademarks",
        "/practice-areas/copyright-digital-content",
        "/practice-areas/ai-and-law",
        "/practice-areas/technology-internet-law",
        "/practice-areas/commercial-litigation",
        "/practice-areas/internet-defamation",
        "/insights",
        "/insights/ai-ip-ownership-2026",
        "/insights/privacy-amendment-13",
        "/insights/ai-copyright-israel",
        "/insights/trademark-clearance-checklist",
        "/insights/ip-ownership-startups",
        "/insights/internet-defamation-israel",
        "/contact",
      ];
      const allRoutes = langs.flatMap(lang =>
        staticRoutes.map(r => `/${lang}${r}`)
      );
      return ["/", ...allRoutes];
    },
  },
}));
