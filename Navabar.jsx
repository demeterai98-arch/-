import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // تأثير لمراقبة التمرير وتغيير خلفية الناف بار
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* الشعار */}
        <a href="#" className="text-2xl font-black tracking-tighter text-slate-900">
          ricebox<span className="text-orange-500">Jb.</span>
        </a>

        {/* روابط الشاشات الكبيرة */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide text-slate-600">
          <a href="#menu" className="hover:text-orange-500 transition-colors">Menu</a>
          <a href="#about" className="hover:text-orange-500 transition-colors">Our Story</a>
          <a href="#locations" className="hover:text-orange-500 transition-colors">Locations</a>
        </div>

        {/* زر اتخاذ الإجراء (CTA) */}
        <div className="hidden md:block">
          <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
            Order Now
          </button>
        </div>

        {/* زر القائمة للشاشات الصغيرة */}
        <button className="md:hidden text-slate-900 hover:text-orange-500 transition-colors">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
}
