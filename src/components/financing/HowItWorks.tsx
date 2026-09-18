const steps = [
  {
    number: "01",
    title: "Fill a quick online form",
    description: "Share a few details about your business and get an indicative offer instantly",
    icon: "📋",
  },
  {
    number: "02",
    title: "Get your Financing Offer",
    description: "Securely share access to your business's data. Get a binding financing offer within 4 days",
    icon: "💼",
  },
  {
    number: "03",
    title: "Get Funded!",
    description: "Your financing will be disbursed to your account and repayments automatically collected from your online cashflows",
    icon: "🚀",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-velocity-blue font-semibold text-sm uppercase tracking-widest mb-2">HOW IT WORKS</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-velocity-dark">
            Here is how the magic is done
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-velocity-blue/30 to-velocity-blue/30" />
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-2xl bg-velocity-light flex items-center justify-center text-3xl mb-5 shadow-sm">
                {step.icon}
              </div>
              <div className="absolute -top-3 -right-3 md:right-auto md:left-12 w-7 h-7 rounded-full bg-velocity-navy text-white text-xs font-bold flex items-center justify-center">
                {i + 1}
              </div>
              <h3 className="text-lg font-bold text-velocity-dark mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://app.velocity.in"
            className="inline-block bg-velocity-navy text-white font-bold px-8 py-4 rounded-xl text-base hover:bg-velocity-blue transition-colors shadow-lg"
          >
            Get Started — Apply Now
          </a>
        </div>
      </div>
    </section>
  );
}
