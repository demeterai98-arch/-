import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  // 1. Hydration-Safe Architecture: منع عدم التطابق بين الخادم والعميل (SSR Mismatch)
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeRoute, setActiveRoute] = useState("#hero");

  const menuRef = useRef(null);
  const ticking = useRef(false);

  // 2. Reduced Motion System: احترام إعدادات نظام تشغيل المستخدم
  const shouldReduceMotion = useReducedMotion();

  // متغيرات الحركة (تتكيف تلقائياً إذا كان المستخدم يفضل تقليل الحركة)
  const menuVariants = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : "-100%" },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: shouldReduceMotion ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] } 
    },
    exit: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : "-100%", 
      transition: { duration: shouldReduceMotion ? 0 : 0.4, ease: [0.7, 0, 0.3, 1] } 
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 3. Throttled Scroll & Active Route Detection
  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 20);
        
        // منطق مبسط لتحديد المسار النشط بناءً على التمرير
        const sections = ["hero", "menu", "about", "locations"];
        let current = "#hero";
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element && window.scrollY >= element.offsetTop - 100) {
            current = `#${section}`;
          }
        }
        setActiveRoute(current);
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true }); // passive لتحسين الأداء
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // 4. Escape Handling & Focus Trap
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
      
      // Focus Trap الأساسي
      if (e.key === "Tab" && isOpen && menuRef.current) {
        const focusableElements = menuRef.current.querySelectorAll(
          'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // 5. Semantic Navigation Data
  const navLinks = [
    { name: "Menu", href: "#menu" },
    { name: "Our Story", href: "#about" },
    { name: "Locations", href: "#locations" },
  ];

  // تجنب عرض المكون قبل الـ Hydration
  if (!isMounted) return null;

  return (
    <>
      {/* 6. Semantic HTML: استخدام <header> و <nav> */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
          isScrolled
            // 7. Optimized Blur Usage: will-change لتفعيل تسريع الأجهزة (Hardware Acceleration)
            ? "bg-black/80 backdrop-blur-xl border-zinc-800/50 py-4 shadow-2xl will-change-[backdrop-filter]"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          
          <a href="#hero" aria-label="Home" className="relative z-[60] text-2xl font-black tracking-tighter text-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-500 rounded-sm">
            ricebox<span className="text-zinc-500">Jb.</span>
          </a>

          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-10">
            {/* استخدام <ul> و <li> للمعنى الدلالي (Semantic HTML) */}
            <ul className="flex items-center gap-10 text-sm font-medium tracking-wide">
              {navLinks.map((link, index) => {
                const isActive = activeRoute === link.href;
                return (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setActiveRoute(link.href)}
                      className={`transition-colors duration-300 relative group focus:outline-none focus:ring-2 focus:ring-zinc-500 rounded-sm p-1 ${
                        isActive ? "text-zinc-100" : "text-zinc-400 hover:text-zinc-100"
                      }`}
                    >
                      {link.name}
                      <span className={`absolute -bottom-1 left-0 h-[1px] bg-zinc-100 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden md:block relative z-[60]">
            <button className="bg-zinc-100 text-black px-7 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-zinc-500/50">
              Order Now
            </button>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="md:hidden relative z-[60] text-zinc-100 p-2 -mr-2 focus:outline-none focus:ring-2 focus:ring-zinc-500 rounded-md"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            className="fixed inset-0 z-40 bg-black flex flex-col justify-center items-center"
          >
            <div className="absolute inset-0 bg-zinc-900/40 backdrop-blur-3xl -z-10 will-change-[backdrop-filter]"></div>

            <nav>
              <ul className="flex flex-col items-center gap-8 w-full px-6">
                {navLinks.map((link, index) => {
                  const isActive = activeRoute === link.href;
                  return (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                      animate={{ opacity: 1, y: 0, transition: { delay: 0.1 + index * 0.1 } }}
                    >
                      <a
                        href={link.href}
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => {
                          setIsOpen(false);
                          setActiveRoute(link.href);
                        }}
                        className={`text-4xl font-light tracking-tight transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-zinc-500 rounded-lg p-2 ${
                          isActive ? "text-zinc-100 font-medium" : "text-zinc-400 hover:text-zinc-100"
                        }`}
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  );
                })}
                
                <motion.li
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.1 + navLinks.length * 0.1 } }}
                  className="mt-8 w-full max-w-xs"
                >
                  <button className="w-full bg-zinc-100 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-white transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-zinc-500/50">
                    Order Now
                  </button>
                </motion.li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
