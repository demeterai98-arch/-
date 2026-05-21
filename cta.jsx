export default function CTASection() {
  return (
    <section className="py-32 bg-orange-500 relative overflow-hidden">
      {/* Dot Pattern - تم تصحيح علامات الاقتباس هنا */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="container mx-auto px-6 text-center relative z-10 reveal">
        <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
          Ready to get refreshed?
        </h2>
        <p className="text-orange-100 text-xl mb-10 max-w-2xl mx-auto">
          Order online and skip the line, or visit us in-store to experience the
          vibrant atmosphere of riceboxJb.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="w-full sm:w-auto bg-slate-900 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-slate-900 transition-colors duration-300 shadow-xl">
            Start Your Order
          </button>
          <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-colors duration-300">
            Find a Location
          </button>
        </div>
      </div>
    </section>
  );
}
