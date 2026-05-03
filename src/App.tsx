import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import PageLoader from "@/components/PageLoader";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Lazy load pages
const Index = lazy(() => import("./pages/Index"));
const Auth = lazy(() => import("./pages/Auth"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const PortfolioWebs = lazy(() => import("./pages/PortfolioWebs"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Legal pages
const LegalNotice = lazy(() => import("./pages/legal/LegalNotice"));
const PrivacyPolicy = lazy(() => import("./pages/legal/PrivacyPolicy"));
const CookiesPolicy = lazy(() => import("./pages/legal/CookiesPolicy"));

// Dev-only: design system styleguide
const Styleguide = import.meta.env.DEV
  ? lazy(() => import("./pages/Styleguide"))
  : null;

function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <ScrollToTop />
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<PublicLayout><Index /></PublicLayout>} />
        <Route path="/portfolio" element={<PublicLayout><Portfolio /></PublicLayout>} />
        <Route path="/portfolio-webs" element={<PublicLayout><PortfolioWebs /></PublicLayout>} />

        {/* RUTAS LEGALES OBLIGATORIAS */}
        <Route path="/aviso-legal" element={<PublicLayout><LegalNotice /></PublicLayout>} />
        <Route path="/privacidad" element={<PublicLayout><PrivacyPolicy /></PublicLayout>} />
        <Route path="/cookies" element={<PublicLayout><CookiesPolicy /></PublicLayout>} />

        {/* Auth and Dashboard: own layout, no PublicLayout */}
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {import.meta.env.DEV && Styleguide && (
          <Route path="/styleguide" element={<PublicLayout><Styleguide /></PublicLayout>} />
        )}

        <Route path="*" element={<PublicLayout><NotFound /></PublicLayout>} />
      </Routes>
    </Suspense>
  </TooltipProvider>
);

export default App;
