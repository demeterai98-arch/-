import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Droplet, Leaf, Sparkles } from "lucide-react";

// --- Animation Variants for Buttery-Smooth Orchestration ---
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } // Apple-like easing
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const float = (delay = 0) => ({
  initial: { y: 0 },
  animate: {
    y: [0, -12, 0],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut", delay }
  }
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-black text-zinc-100 selection:bg-zinc-800">
      
      {/* 
        Minimalist Background: Replacing colorful blobs with a sophisticated, 
        dramatic cinematic spotlight effect to highlight the products.
      */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
        <div className="w-[800px] h-[800px] bg-gradient-to-tr from-zinc-900/50 to-zinc-800/20 rounded-full blur-[120px] opacity-60"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
        
        {/* --- Typography & Text Content --- */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-8 z-10"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-md text-zinc-400 font-medium text-xs tracking-[0.2em] uppercase">
            <Sparkles size={14} className="text-zinc-100" />
            100% Organic & Premium
          </motion.div>

          <motion.div variants={fadeUp}>
            <h1 className="text-6xl md:text-8xl font-black leading-[1.05] tracking-tighter">
              Sip the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500">
                Extraordinary.
              </span>
            </h1>
          </motion.div>

          <motion.p variants={fadeUp} className="text-lg text-zinc-400 max-w-md leading-relaxed font-light">
            Experience the perfect blend of nature's best. Hand-crafted juices and 
            signature beverages designed to refresh your soul at <span className="text-zinc-100 font-medium">riceboxJb</span>.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-6">
            <button className="group relative overflow-hidden bg-zinc-100 text-black px-8 py-4 rounded-full font-semibold hover:scale-[1.02] transition-all duration-300 flex items-center gap-3">
              <span className="relative z-10">View Menu</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform relative z-10" size={18} />
              {/* Button hover shine effect */}
              <div className="absolute inset-0 w-full h-full bg-white/40 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
            <button className="bg-transparent text-zinc-100 border border-zinc-800 px-8 py-4 rounded-full font-semibold hover:bg-zinc-900 transition-all duration-300">
              Our Story
            </button>
          </motion.div>
        </motion.div>

        {/* --- Hero Images & 3D Parallax Layout --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="relative h-[600px] w-full z-10 flex justify-center items-center"
        >
          {/* Main Drink */}
          <motion.div 
            variants={float(0)}
            initial="initial"
            animate="animate"
            className="absolute w-72 h-[400px] rounded-[2rem] overflow-hidden shadow-2xl shadow-black/50 z-20 border border-zinc-800/50 bg-zinc-900"
          >
            <img
              src="https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=800&auto=format&fit=crop"
              alt="Fresh Juice"
              className="w-full h-full object-cover opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
            />
            {/* Elegant inner shadow for depth */}
            <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.6)] rounded-[2rem]"></div>
          </motion.div>

          {/* Secondary Drink 1 */}
          <motion.div 
            variants={float(1.5)}
            initial="initial"
            animate="animate"
            className="absolute w-52 h-72 rounded-[2rem] overflow-hidden shadow-xl z-10 -right-8 top-12 border border-zinc-800/50 bg-zinc-900 transform rotate-6"
          >
            <img
              src="https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=800&auto=format&fit=crop"
              alt="Berry Smoothie"
              className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:opacity-100 hover:mix-blend-normal transition-all duration-700"
            />
          </motion.div>

          {/* Secondary Drink 2 */}
          <motion.div 
            variants={float(0.8)}
            initial="initial"
            animate="animate"
            className="absolute w-52 h-72 rounded-[2rem] overflow-hidden shadow-xl z-10 -left-8 bottom-12 border border-zinc-800/50 bg-zinc-900 transform -rotate-6"
          >
            <img
              src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop"
              alt="Tropical Juice"
              className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:opacity-100 hover:mix-blend-normal transition-all duration-700"
            />
          </motion.div>

          {/* Floating Minimalist Badges (Glassmorphism) */}
          <motion.div
            variants={float(0.5)}
            initial="initial"
            animate="animate"
            className="absolute top-1/4 -left-12 bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 p-4 rounded-2xl shadow-2xl z-30"
          >
            <Droplet className="text-zinc-100" size={24} />
          </motion.div>

          <motion.div
            variants={float(2)}
            initial="initial"
            animate="animate"
            className="absolute bottom-1/4 -right-12 bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 p-4 rounded-2xl shadow-2xl z-30"
          >
            <Leaf className="text-zinc-100" size={24} />
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}
