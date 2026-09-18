const stats = [
  { value: "3000+", label: "Investments" },
  { value: "₹3,300 Cr", label: "Fundable Revenues" },
  { value: "1.6X", label: "Revenue growth post funding" },
  { value: "78%", label: "Repeating Customers" },
];

export default function StatsBar() {
  return (
    <section className="bg-velocity-light py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-velocity-navy font-semibold text-sm uppercase tracking-widest mb-2">We are</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-velocity-dark">
            India's <span className="text-velocity-blue">largest</span> flexible financing platform.
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-velocity-navy mb-2">{stat.value}</div>
              <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
