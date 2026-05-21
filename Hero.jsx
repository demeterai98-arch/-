import { ArrowRight, Droplet, Leaf, Sparkles } from "lucide-react";

export default function Hero() {
return (
<section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
{/* Background Blobs */}
<div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-1/4 -right-20 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
<div className="absolute top-1/3 right-40 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-32 left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
</div>

```
  <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
    {/* Text Content */}
    <div className="space-y-8 z-10">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-semibold text-sm uppercase tracking-wider mb-4">
        <Sparkles size={16} /> 100% Organic & Fresh
      </div>

      <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
        Sip the <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
          Extraordinary.
        </span>
      </h1>

      <p className="text-lg text-slate-600 max-w-md leading-relaxed">
        Experience the perfect blend of nature's best. Hand-crafted juices,
        smoothies, and signature beverages designed to refresh your soul at riceboxJb.
      </p>

      <div className="flex flex-wrap gap-4 pt-4">
        <button className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/30 flex items-center gap-2 group">
          View Menu
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
        </button>
        <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all duration-300">
          Our Story
        </button>
      </div>
    </div>

    {/* Hero Images */}
    <div className="relative h-[500px] md:h-[600px] w-full z-10 flex justify-center items-center">
      {/* Main Drink */}
      <div className="absolute w-64 h-80 rounded-3xl overflow-hidden shadow-2xl z-20 animate-float border-4 border-white">
        <img
          src="https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=800&auto=format&fit=crop"
          alt="Fresh Juice"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Secondary Drink 1 */}
      <div className="absolute w-48 h-60 rounded-3xl overflow-hidden shadow-xl z-10 -right-4 top-10 animate-float-delayed border-4 border-white opacity-90 transform rotate-6">
        <img
          src="https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=800&auto=format&fit=crop"
          alt="Berry Smoothie"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Secondary Drink 2 */}
      <div
        className="absolute w-48 h-60 rounded-3xl overflow-hidden shadow-xl z-10 -left-4 bottom-10 animate-float border-4 border-white opacity-90 transform -rotate-6"
        style={{ animationDelay: "1.5s" }}
      >
        <img
          src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop"
          alt="Tropical Juice"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating Badges */}
      <div
        className="absolute top-1/4 -left-8 bg-white p-3 rounded-2xl shadow-lg z-30 animate-float"
        style={{ animationDelay: "0.5s" }}
      >
        <Droplet className="text-orange-500" size={24} />
      </div>
      <div
        className="absolute bottom-1/4 -right-8 bg-white p-3 rounded-2xl shadow-lg z-30 animate-float"
        style={{ animationDelay: "2s" }}
      >
        <Leaf className="text-green-500" size={24} />
      </div>
    </div>
  </div>
</section>

);
}