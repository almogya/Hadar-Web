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
      const isHe = route.startsWith("/he");
      // Ensure correct lang + dir on the <html> element of the static output.
      // Per-page <title>, meta, canonical and hreflang are injected by SEOHead
      // (react-helmet) on every route, so they are intentionally not duplicated here.
      return isHe
        ? html.replace(/<html[^>]*>/, '<html lang="he" dir="rtl">')
        : html.replace(/<html[^>]*>/, '<html lang="en" dir="ltr">');
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
        "/insights/ai-generated-copyright",
        "/insights/trademark-digital-protection",
        "/insights/ip-strategy-startups",
        "/insights/digital-content-protection",
        "/insights/copyright-tech-teams",
        "/insights/acum-copyright-infringement",
        "/insights/google-content-removal",
        "/insights/fake-google-reviews",
        "/insights/meta-account-blocking",
        "/insights/website-terms-of-use",
        "/insights/nda-agreement",
        "/insights/social-media-copyright",
        "/insights/trademark-registration-israel",
        "/insights/defamation-lawsuit-costs",
        "/insights/ai-legal-liability",
        "/insights/reputation-protection",
        "/insights/facebook-defamation",
        "/insights/whatsapp-defamation",
        "/insights/anonymous-defamation-disclosure",
        "/insights/instagram-tiktok-defamation",
        "/insights/share-like-defamation",
        "/insights/supplier-rating-defamation",
        "/insights/defamation-law-guide",
        "/insights/defamation-lawsuit-steps",
        "/insights/defamation-defenses",
        "/insights/libel-vs-slander",
        "/insights/defamation-compensation",
        "/insights/defamation-limitation",
        "/insights/business-defamation",
        "/insights/review-blackmail",
        "/insights/competitor-defamation",
        "/insights/corporate-defamation",
        "/insights/workplace-defamation",
        "/insights/employer-reference-defamation",
        "/insights/neighbors-defamation",
        "/insights/divorce-defamation",
        "/insights/false-police-complaint",
        "/insights/defamation-warning-letter",
        "/insights/received-defamation-warning",
        "/insights/defamation-small-claims",
        "/insights/defamation-evidence",
        "/insights/defamation-injunction",
        "/insights/criminal-defamation",
        "/insights/defamation-precedents",
        "/insights/group-defamation",
        "/insights/free-speech-vs-reputation",
        "/insights/deceased-defamation",
        "/insights/republishing-defamation",
        "/insights/platform-admin-liability",
        "/insights/ai-defamation",
        "/insights/deepfake-defamation",
        "/insights/ai-trademark-registration",
        "/fee-calculator",
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
