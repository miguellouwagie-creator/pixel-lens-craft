import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Portfolio from "./pages/Portfolio";
import PortfolioWebs from "./pages/PortfolioWebs";
import NotFound from "./pages/NotFound";

// IMPORTACIONES LEGALES QUE FALTABAN
import LegalNotice from "./pages/legal/LegalNotice";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import CookiesPolicy from "./pages/legal/CookiesPolicy";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/portfolio-webs" element={<PortfolioWebs />} />

      {/* RUTAS LEGALES OBLIGATORIAS */}
      <Route path="/aviso-legal" element={<LegalNotice />} />
      <Route path="/privacidad" element={<PrivacyPolicy />} />
      <Route path="/cookies" element={<CookiesPolicy />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  </TooltipProvider>
);

export default App;
