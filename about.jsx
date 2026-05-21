export default function AboutSection() {
return (
<section id="about" className="py-24 bg-slate-900 text-white overflow-hidden">
<div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16">
{/* Image Column */}
<div className="w-full lg:w-1/2 relative reveal">
<div className="absolute inset-0 bg-orange-500 rounded-3xl transform rotate-3 scale-105 opacity-20"></div>
<img
src="https://images.unsplash.com/photo-1546889759-3fb766100b1a?q=80&w=1000&auto=format&fit=crop"
alt="Pouring fresh juice"
className="rounded-3xl relative z-10 w-full h-[500px] object-cover shadow-2xl"
/>
{/* Floating Stat Badge */}
<div className="absolute -bottom-8 -right-8 bg-white text-slate-900 p-6 rounded-3xl shadow-xl z-20 animate-float">
<p className="text-4xl font-black text-orange-500 mb-1">10k+</p>
<p className="text-sm font-bold uppercase tracking-wider text-slate-500">Happy Drinkers</p>
</div>
</div>

```
    {/* Text Column */}
    <div className="w-full lg:w-1/2 space-y-8 reveal reveal-delay-2">
      <h2 className="text-4xl md:text-5xl font-black leading-tight">
        Pouring Joy in Every Cup.
      </h2>
      <p className="text-slate-400 text-lg leading-relaxed">
        At riceboxJb, we don't just mix drinks; we craft experiences. Born from a
        passion for healthy living and vibrant flavors, our journey started with a
        simple blender and a big dream.
      </p>
      <p className="text-slate-400 text-lg leading-relaxed">
        Today, we source the finest organic produce locally and globally to bring
        you beverages that not only taste incredible but make you feel unstoppable.
      </p>

      <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-800">
        <div>
          <h4 className="text-xl font-bold mb-2">100% Real</h4>
          <p className="text-sm text-slate-400">No syrups, no artificial colors. Just nature.</p>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-2">Eco-Friendly</h4>
          <p className="text-sm text-slate-400">Sustainable packaging and zero waste practices.</p>
        </div>
      </div>
    </div>
  </div>
</section>

);
}