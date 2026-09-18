const benefits = [
  {
    icon: "⚡",
    title: "Fast",
    description: "Apply online and get a term sheet within 2 minutes. Get funded within 4 days through a fully digital process.",
    highlight: "2 min term sheet · 4 day funding",
  },
  {
    icon: "🤝",
    title: "Fair",
    description: "Founder friendly capital with no equity dilution. Far lower rates vs any other digital financier in India.",
    highlight: "No equity · Lowest rates in India",
  },
  {
    icon: "📈",
    title: "Scalable",
    description: "Funding which keeps scaling with your revenues. Build a repayment history and keep getting better terms.",
    highlight: "Grows with your revenue",
  },
];

export default function KeyBenefits() {
  return (
    <section className="bg-velocity-navy text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-yellow-300 font-semibold text-sm uppercase tracking-widest mb-2">KEY BENEFITS</p>
          <h2 className="text-3xl md:text-4xl font-extrabold">Why choose Velocity's growth capital?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-white/10 border border-white/10 rounded-2xl p-8 hover:bg-white/15 transition-colors"
            >
              <div className="text-4xl mb-4">{b.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{b.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4">{b.description}</p>
              <div className="inline-flex items-center gap-1.5 bg-yellow-300/10 border border-yellow-300/30 text-yellow-300 text-xs font-semibold px-3 py-1.5 rounded-full">
                ✓ {b.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
