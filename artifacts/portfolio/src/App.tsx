import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

// Components
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CapabilityPillars from "@/components/CapabilityPillars";
import FeaturedWork from "@/components/FeaturedWork";
import CapabilityList from "@/components/CapabilityList";
import About from "@/components/About";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";

// =========================================================================
// TO UPDATE LINKS (GITHUB/LINKEDIN), EDIT src/config/links.ts
// =========================================================================

const queryClient = new QueryClient();

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-blue-500/30">
      <Header />
      <main className="flex-1 flex flex-col">
        <Hero />
        <CapabilityPillars />
        <CapabilityList />
        <About />
        <FeaturedWork />
        <Connect />
      </main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
