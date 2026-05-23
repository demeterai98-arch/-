import React, { Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";

// Global styles & Context Providers
import "@/styles/globals.css";

// Custom hooks (Absolute paths for scalable architecture)
import { useScrollReveal } from "@/hooks/useScrollReveal";

// Core UI & SEO Components
import { SEO } from "@/components/core/SEO";
import { Loader } from "@/components/ui/Loader";
import { ErrorFallback } from "@/components/ui/ErrorFallback";

// 1. Critical Components (Loaded synchronously for instant FCP)
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import MarqueeStrip from "@/components/sections/MarqueeStrip";

// 2. Lazy Loaded Components (Loaded only when needed / scrolled)
const MenuSection = lazy(() => import("@/components/sections/MenuSection"));
const AboutSection = lazy(() => import("@/components/sections/AboutSection"));
const CTASection = lazy(() => import("@/components/sections/CTASection"));
const Footer = lazy(() => import("@/components/layout/Footer"));

export default function App() {
  // Activate scroll-reveal animations globally
  useScrollReveal();

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      {/* Centralized Head/SEO management */}
      <SEO title="Replix | Pixel-Perfect Engineering" />
      
      {/* 
        Refined UI wrapper: 
        Vantablack aesthetic, high contrast, anti-aliased for crisp typography 
      */}
      <div className="min-h-screen bg-black font-sans overflow-x-hidden text-zinc-100 selection:bg-zinc-800 selection:text-white antialiased">
        
        {/* Critical UI components loaded immediately */}
        <Navbar />
        <Hero />
        <MarqueeStrip />

        {/* Suspense wrapper handles the loading state of heavy sections seamlessly */}
        <Suspense fallback={<Loader />}>
          <main>
            <MenuSection />
            <AboutSection />
            <CTASection />
          </main>
          <Footer />
        </Suspense>

      </div>
    </ErrorBoundary>
  );
}
