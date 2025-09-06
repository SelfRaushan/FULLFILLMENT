// frontend/src/components/HeroSection.jsx
import React from "react";
import logo from "../assets/image.png";
import bgImage from "../assets/truck-on-the-road.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 w-full px-8 md:px-16">
        {/* Logo */}
        <div className="mb-8">
          <img src={logo} alt="HHS Logo" className="w-20 h-20 object-contain" />
        </div>

        {/* Text */}
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
          HHS FULLFILLMENT
        </h1>
        <p className="text-white text-lg md:text-xl max-w-2xl">
          An accomplished 3PL partner based in the US, dedicated to enhancing
          supply chain effectiveness and logistics performance for companies.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
