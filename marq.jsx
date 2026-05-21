const items = [
"Fresh Ingredients",
"Zero Preservatives",
"Taste The Difference",
];

function MarqueeRow() {
return (
<div className="animate-marquee flex gap-12 items-center text-xl font-bold uppercase tracking-widest">
{items.map((item, i) => (
<span key={i} className="flex items-center gap-12">
{item} <span className="text-orange-500">✦</span>
</span>
))}
</div>
);
}

export default function MarqueeStrip() {
return (
<div className="bg-slate-900 text-white py-4 overflow-hidden flex whitespace-nowrap relative border-y-4 border-orange-500">
<MarqueeRow />
<div className="absolute top-4 left-full">
<MarqueeRow />
</div>
</div>
);
}