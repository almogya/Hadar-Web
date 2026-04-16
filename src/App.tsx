import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navigate } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import LanguageLayout from "@/components/LanguageLayout";
import LanguageSelector from "./pages/LanguageSelector";

const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const PracticeAreas = lazy(() => import("./pages/PracticeAreas"));
const IntellectualProperty = lazy(() => import("./pages/practice-areas/IntellectualProperty"));
const Trademarks = lazy(() => import("./pages/practice-areas/Trademarks"));
const CopyrightDigitalContent = lazy(() => import("./pages/practice-areas/CopyrightDigitalContent"));
const AiAndLaw = lazy(() => import("./pages/practice-areas/AiAndLaw"));
const TechnologyInternetLaw = lazy(() => import("./pages/practice-areas/TechnologyInternetLaw"));
const CommercialLitigation = lazy(() => import("./pages/practice-areas/CommercialLitigation"));
const InternetDefamation = lazy(() => import("./pages/practice-areas/InternetDefamation"));
const Insights = lazy(() => import("./pages/Insights"));
const PillarArticle = lazy(() => import("./pages/insights/PillarArticle"));
const AiIpArticle = lazy(() => import("./pages/insights/AiIpArticle"));
const PrivacyAmendment13Article = lazy(() => import("./pages/insights/PrivacyAmendment13Article"));
const Contact = lazy(() => import("./pages/Contact"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Terms"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const Accessibility = lazy(() => import("./pages/Accessibility"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background" />
);

const AppShell = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Suspense fallback={<PageLoader />}>
        {children}
      </Suspense>
    </TooltipProvider>
  </QueryClientProvider>
);

const localizedChildren: RouteObject[] = [
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
    element: <AppShell><LanguageLayout /></AppShell>,
    children: localizedChildren,
  },
  {
    path: "/en",
    element: <AppShell><LanguageLayout /></AppShell>,
    children: localizedChildren,
  },
  { path: "/about", element: <Navigate to="/he/about" replace /> },
  { path: "/practice-areas/*", element: <Navigate to="/he/practice-areas" replace /> },
  { path: "/insights", element: <Navigate to="/he/insights" replace /> },
  { path: "/contact", element: <Navigate to="/he/contact" replace /> },
  { path: "*", element: <AppShell><NotFound /></AppShell> },
];

export default routes;
