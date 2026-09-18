const segments = [
  {
    icon: "🛍️",
    title: "D2C Business",
    description: "Finance your inventory and marketing as you scale new heights with our capital",
    color: "from-purple-50 to-purple-100",
    border: "border-purple-200",
    accent: "text-purple-700",
  },
  {
    icon: "💻",
    title: "SaaS",
    description: "Finance development and infrastructure expenses as your recurring revenue reaches escape velocity",
    color: "from-blue-50 to-blue-100",
    border: "border-blue-200",
    accent: "text-blue-700",
  },
  {
    icon: "🎓",
    title: "Edtech",
    description: "Finance course development and customer acquisition on your path to scaling revenues",
    color: "from-green-50 to-green-100",
    border: "border-green-200",
    accent: "text-green-700",
  },
  {
    icon: "🍽️",
    title: "Restaurants",
    description: "Finance expansion, raw materials and staff wages to keep up with increase in orders",
    color: "from-orange-50 to-orange-100",
    border: "border-orange-200",
    accent: "text-orange-700",
  },
];

export default function CustomerSegments() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-velocity-blue font-semibold text-sm uppercase tracking-widest mb-2">OUR CUSTOMERS</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-velocity-dark mb-4">Who is it for?</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            We provide equity-free growth capital to digital first businesses across sectors that generate healthy revenues.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((seg) => (
            <div
              key={seg.title}
              className={`bg-gradient-to-br ${seg.color} border ${seg.border} rounded-2xl p-6 hover:shadow-md transition-shadow`}
            >
              <div className="text-4xl mb-4">{seg.icon}</div>
              <h3 className={`text-lg font-bold mb-2 ${seg.accent}`}>{seg.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{seg.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
