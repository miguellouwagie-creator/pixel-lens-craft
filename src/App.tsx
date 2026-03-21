import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";

// Public pages
import Index from "@/pages/Index";
import WebDesign from "@/pages/WebDesign";
import Photography from "@/pages/Photography";
import Portfolio from "@/pages/Portfolio";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

// Internal pages
import Auth from "@/pages/Auth";
import Dashboard from "@/pages/Dashboard";

// Legal pages
import LegalNotice from "@/pages/legal/LegalNotice";
import PrivacyPolicy from "@/pages/legal/PrivacyPolicy";
import CookiesPolicy from "@/pages/legal/CookiesPolicy";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <ScrollToTop />
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Index />} />
      <Route path="/web-design" element={<WebDesign />} />
      <Route path="/photography" element={<Photography />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      
      {/* Internal component routes */}
      <Route path="/auth" element={<Auth />} />
      <Route path="/dashboard" element={<Dashboard />} />
      
      {/* Legal Routes */}
      <Route path="/aviso-legal" element={<LegalNotice />} />
      <Route path="/privacidad" element={<PrivacyPolicy />} />
      <Route path="/cookies" element={<CookiesPolicy />} />

      {/* 404 & Fallbacks */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </TooltipProvider>
);

export default App;
