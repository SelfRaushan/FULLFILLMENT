import React from "react";
import HeroSection from "./components/HeroSection";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans text-gray-800">
      <HeroSection />
      <Hero />
      <Services />
      <Pricing />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
