import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import RevenueLeakage from "./pages/RevenueLeakage.tsx";
import PatientGrowthEngine from "./pages/PatientGrowthEngine.tsx";
import NoShows from "./pages/NoShows.tsx";
import DormantLeads from "./pages/DormantLeads.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/revenue-leakage" element={<RevenueLeakage />} />
          <Route path="/patient-growth-engine" element={<PatientGrowthEngine />} />
          <Route path="/no-shows" element={<NoShows />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
