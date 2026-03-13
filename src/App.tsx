import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
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
import Insights from "./pages/Insights";
import PillarArticle from "./pages/insights/PillarArticle";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Disclaimer from "./pages/Disclaimer";
import Accessibility from "./pages/Accessibility";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const LocalizedRoutes = () => (
  <LanguageProvider>
    <Routes>
      <Route index element={<Index />} />
      <Route path="about" element={<About />} />
      <Route path="practice-areas" element={<PracticeAreas />} />
      <Route path="practice-areas/intellectual-property" element={<IntellectualProperty />} />
      <Route path="practice-areas/trademarks" element={<Trademarks />} />
      <Route path="practice-areas/copyright-digital-content" element={<CopyrightDigitalContent />} />
      <Route path="practice-areas/ai-and-law" element={<AiAndLaw />} />
      <Route path="practice-areas/technology-internet-law" element={<TechnologyInternetLaw />} />
      <Route path="practice-areas/commercial-litigation" element={<CommercialLitigation />} />
      <Route path="insights" element={<Insights />} />
      <Route path="insights/:slug" element={<PillarArticle />} />
      <Route path="contact" element={<Contact />} />
      <Route path="thank-you" element={<ThankYou />} />
      <Route path="privacy-policy" element={<PrivacyPolicy />} />
      <Route path="terms" element={<Terms />} />
      <Route path="disclaimer" element={<Disclaimer />} />
      <Route path="accessibility" element={<Accessibility />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </LanguageProvider>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LanguageSelector />} />
          <Route path="/en/*" element={<LocalizedRoutes />} />
          <Route path="/he/*" element={<LocalizedRoutes />} />
          <Route path="/about" element={<Navigate to="/en/about" replace />} />
          <Route path="/practice-areas/*" element={<Navigate to="/en/practice-areas" replace />} />
          <Route path="/insights" element={<Navigate to="/en/insights" replace />} />
          <Route path="/contact" element={<Navigate to="/en/contact" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
