import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PlantEncyclopedia from "@/components/PlantEncyclopedia";
import BenefitsSection from "@/components/BenefitsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import PlantScanner from "@/components/PlantScanner";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Scroll to plants section
    const plantsSection = document.getElementById("plants");
    if (plantsSection) {
      plantsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection onSearch={handleSearch} />
        <PlantEncyclopedia searchQuery={searchQuery} />
        <BenefitsSection />
        <AboutSection />
      </main>
      <Footer />
      <PlantScanner />
    </div>
  );
};

export default Index;
