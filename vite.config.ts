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
    onPageRendered: (route: string, html: string) => {
      const DOMAIN = "https://ai-law.co.il";
      const isHe = route.startsWith("/he");
      const pathWithoutLang = route.replace(/^\/(en|he)/, "") || "";
      const selfUrl = route === "/" ? `${DOMAIN}/` : `${DOMAIN}${route}`;
      const heUrl = `${DOMAIN}/he${pathWithoutLang}`;
      const enUrl = `${DOMAIN}/en${pathWithoutLang}`;

      // Fix lang + dir on <html> element
      let result = isHe
        ? html.replace(/<html[^>]*>/, '<html lang="he" dir="rtl">')
        : html.replace(/<html[^>]*>/, '<html lang="en" dir="ltr">');

      // Inject canonical + hreflang into static HTML so crawlers without JS see correct values
      const headTags = route === "/"
        ? `  <link rel="canonical" href="${DOMAIN}/" />\n  <link rel="alternate" hreflang="he" href="${DOMAIN}/he" />\n  <link rel="alternate" hreflang="en" href="${DOMAIN}/en" />\n  <link rel="alternate" hreflang="x-default" href="${DOMAIN}/" />`
        : `  <link rel="canonical" href="${selfUrl}" />\n  <link rel="alternate" hreflang="he" href="${heUrl}" />\n  <link rel="alternate" hreflang="en" href="${enUrl}" />\n  <link rel="alternate" hreflang="x-default" href="${DOMAIN}/" />`;

      result = result.replace("</head>", `${headTags}\n  </head>`);
      return result;
    },
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
        "/practice-areas/terms-of-use",
        "/practice-areas/accessibility-compliance",
        "/practice-areas/user-blocking",
        "/insights",
        "/insights/ai-ip-ownership-2026",
        "/insights/privacy-amendment-13",
        "/insights/ai-copyright-israel",
        "/insights/trademark-clearance-checklist",
        "/insights/ip-ownership-startups",
        "/insights/internet-defamation-israel",
        "/contact",
        "/thank-you",
        "/privacy-policy",
        "/terms",
        "/disclaimer",
        "/accessibility",
      ];
      const allRoutes = langs.flatMap(lang =>
        staticRoutes.map(r => `/${lang}${r}`)
      );
      return ["/", ...allRoutes];
    },
  },
}));
