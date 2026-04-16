import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navigate } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import LanguageLayout from "@/components/LanguageLayout";
import LanguageSelector from "./pages/LanguageSelector";
import Index from "./pages/Index";
import About from "./pages/About";
import PracticeAreas from "./pages/PracticeAreas";
import IntellectualProperty from "./pages/practice-areas/IntellectualProperty";
import Trademarks from "./pages/practice-areas/Trademarks";
import CopyrightDigitalContent from "./pages/practice-areas/CopyrightDigitalContent";
import AiAndLaw from "./pages/practice-areas/AiAndLaw";
import TechnologyInternetLaw from "./pages/practice-areas/TechnologyInternetLaw";
import CommercialLitigation from "./pages/practice-areas/CommercialLitigation";
import InternetDefamation from "./pages/practice-areas/InternetDefamation";
import Insights from "./pages/Insights";
import PillarArticle from "./pages/insights/PillarArticle";
import AiIpArticle from "./pages/insights/AiIpArticle";
import PrivacyAmendment13Article from "./pages/insights/PrivacyAmendment13Article";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Disclaimer from "./pages/Disclaimer";
import Accessibility from "./pages/Accessibility";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppShell = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider attribute="class" storageKey="hy-theme" defaultTheme="light" disableTransitionOnChange>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {children}
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

// Children are defined as a factory so each language gets its OWN array of
// distinct React element instances. Sharing the same array causes React to
// reuse component instances when navigating between /he and /en, which can
// prevent a proper re-render of language-sensitive components.
const makeChildren = (): RouteObject[] => [
  { index: true, element: <Index /> },
  { path: "about", element: <About /> },
  { path: "practice-areas", element: <PracticeAreas /> },
  { path: "practice-areas/intellectual-property", element: <IntellectualProperty /> },
  { path: "practice-areas/trademarks", element: <Trademarks /> },
  { path: "practice-areas/copyright-digital-content", element: <CopyrightDigitalContent /> },
  { path: "practice-areas/ai-and-law", element: <AiAndLaw /> },
  { path: "practice-areas/technology-internet-law", element: <TechnologyInternetLaw /> },
  { path: "practice-areas/commercial-litigation", element: <CommercialLitigation /> },
  { path: "practice-areas/internet-defamation", element: <InternetDefamation /> },
  { path: "insights", element: <Insights /> },
  { path: "insights/ai-ip-ownership-2026", element: <AiIpArticle /> },
  { path: "insights/privacy-amendment-13", element: <PrivacyAmendment13Article /> },
  { path: "insights/:slug", element: <PillarArticle /> },
  { path: "contact", element: <Contact /> },
  { path: "thank-you", element: <ThankYou /> },
  { path: "privacy-policy", element: <PrivacyPolicy /> },
  { path: "terms", element: <Terms /> },
  { path: "disclaimer", element: <Disclaimer /> },
  { path: "accessibility", element: <Accessibility /> },
];

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppShell><LanguageSelector /></AppShell>,
  },
  {
    path: "/he",
    // key="he" forces React to fully remount LanguageLayout (and its LanguageProvider)
    // when navigating between /he/* and /en/*. Without the key, React reconciles
    // the two identical-looking elements as the same instance and may skip re-renders.
    element: <AppShell><LanguageLayout key="he" /></AppShell>,
    children: makeChildren(),
  },
  {
    path: "/en",
    element: <AppShell><LanguageLayout key="en" /></AppShell>,
    children: makeChildren(),
  },
  { path: "/about", element: <Navigate to="/he/about" replace /> },
  { path: "/practice-areas/*", element: <Navigate to="/he/practice-areas" replace /> },
  { path: "/insights", element: <Navigate to="/he/insights" replace /> },
  { path: "/contact", element: <Navigate to="/he/contact" replace /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
