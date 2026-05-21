import React from "react";

// Global styles
import "./styles/styles.css";

// Custom hooks
import { useScrollReveal } from "./hooks/useScrollReveal.js";

// Layout & sections
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import MarqueeStrip from "./components/MarqueeStrip.jsx";
import MenuSection from "./components/MenuSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import CTASection from "./components/CTASection.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  // Activate scroll-reveal animations
  useScrollReveal();

  return (
    <div className="min-h-screen bg-slate-50 font-sans overflow-x-hidden text-slate-800 selection:bg-orange-200">
      <Navbar />
      <Hero />
      <MarqueeStrip />
      <MenuSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
}