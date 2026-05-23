import React from "react";

// Global styles
import "./styles.css";

// Custom hooks
import { useScrollReveal } from "./hooks/useScrollReveal.js";

// Layout & sections
import Navbar from "./Navabar.jsx";
import Hero from "./Hero.jsx";
import MarqueeStrip from "./marq.jsx";
import MenuSection from "./menu.jsx";
import AboutSection from "./about.jsx";
import CTASection from "./cta.jsx";
import Footer from "./fotor.jsx";

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
