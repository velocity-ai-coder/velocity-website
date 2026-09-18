const testimonials = [
  {
    quote: "Why dilute equity for working capital? We got to retain more equity in a growing business thanks to Velocity's financing. We just connected our online data and got funded within a week.",
    name: "Divij Bajaj",
    initials: "DB",
    color: "bg-purple-100 text-purple-700",
  },
  {
    quote: "Fast, seamless and fully digital. Thanks to Velocity's fast and seamless financing process, we could efficiently manage our working capital needs even during the pandemic.",
    name: "Ganesh Sonawane",
    initials: "GS",
    color: "bg-blue-100 text-blue-700",
  },
  {
    quote: "Cost effective with a great ROI. Velocity's financing is already priced much lower than peers. We paid our vendors upfront to get additional discounts, making it even more attractive.",
    name: "Shashank A.",
    initials: "SA",
    color: "bg-green-100 text-green-700",
  },
  {
    quote: "Financing which scales with you. Velocity kept scaling its financing in line with our growth. This allowed us to build inventory globally and offer a wider selection to our customers.",
    name: "Disha Katharani",
    initials: "DK",
    color: "bg-orange-100 text-orange-700",
  },
  {
    quote: "Easily spread out large expenses. We used Velocity's financing to secure celebrity endorsement from Swara Bhaskar! Great for our brand, without the huge upfront cost.",
    name: "Dheeraj Bansal",
    initials: "DB",
    color: "bg-red-100 text-red-700",
  },
  {
    quote: "Truly a growth partner. Velocity's support goes much beyond financing. The team is prompt, very receptive to suggestions and also support with a host of business connections.",
    name: "Natasha Tuli",
    initials: "NT",
    color: "bg-teal-100 text-teal-700",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-velocity-blue font-semibold text-sm uppercase tracking-widest mb-2">TESTIMONIALS</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-velocity-dark">
            Don't believe us? Believe them
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="text-3xl text-velocity-blue mb-4">"</div>
              <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-6">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${t.color}`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-velocity-dark text-sm">{t.name}</div>
                  <div className="text-xs text-gray-400">Velocity Customer</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
