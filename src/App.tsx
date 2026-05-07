import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MyGarden from "./pages/MyGarden";
import SymptomFinder from "./pages/SymptomFinder";
import ComparePlants from "./pages/ComparePlants";
import GardenJournal from "./pages/GardenJournal";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Index />} />
          <Route path="/garden" element={<MyGarden />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/remedy-finder" element={<SymptomFinder />} />
          <Route path="/compare" element={<ComparePlants />} />
          <Route path="/journal" element={<GardenJournal />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
