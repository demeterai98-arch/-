import { ArrowRight } from "lucide-react"; // تم تصحيح علامات الاقتباس
import { drinks } from "../data/drinks.js"; // تم تصحيح علامات الاقتباس

export default function MenuSection() {
  return (
    <section id="menu" className="py-32 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20 reveal">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Signature Sips</h2>
          <p className="text-slate-600 text-lg">
            Carefully curated recipes blending exotic fruits, fresh greens, and
            organic superfoods. Every drop is a celebration of flavor.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {drinks.map((drink, index) => (
            <div
              key={index}
              // تم نقل الـ delay إلى الـ style ليتم تطبيقه برمجياً بشكل صحيح
              style={{ animationDelay: `${(index % 4) * 200}ms` }}
              className="reveal group rounded-3xl p-6 transition-all duration-500 hover:shadow-2xl bg-slate-50 border border-slate-100 relative overflow-hidden"
            >
              {/* Corner accent */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 ${drink.color} rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-150`}
              ></div>

              {/* Drink Image */}
              <div className="h-64 mb-6 rounded-2xl overflow-hidden img-zoom-container shadow-md">
                <img
                  src={drink.img}
                  alt={drink.name}
                  className="w-full h-full object-cover img-zoom"
                />
              </div>

              <h3 className="text-2xl font-bold mb-2">{drink.name}</h3>
              <p className="text-slate-500 text-sm mb-6 h-10">{drink.desc}</p>

              <div className="flex justify-between items-center mt-auto">
                <span className={`text-xl font-black ${drink.textColor}`}>
                  {drink.price}
                </span>
                <button className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:bg-orange-500 transition-colors transform group-hover:rotate-12">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Full Menu Link */}
        <div className="mt-16 text-center reveal">
          <button className="inline-flex items-center gap-2 text-slate-900 font-bold border-b-2 border-slate-900 pb-1 hover:text-orange-500 hover:border-orange-500 transition-colors">
            Explore Full Menu <ArrowRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
}
