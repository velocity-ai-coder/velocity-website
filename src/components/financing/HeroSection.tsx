export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-velocity-navy via-[#4a4a8a] to-velocity-blue text-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          Non-dilutive · No equity loss · Fully digital
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 max-w-4xl mx-auto">
          Raise dilution-free growth capital within{" "}
          <span className="text-yellow-300">4 days.</span>
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
          Raise upto <strong className="text-white">₹10 Crores</strong> of fast, flexible, and non-dilutive growth capital
          to boost your marketing and working capital spends. Apply now, get a term-sheet in{" "}
          <strong className="text-white">2 minutes</strong> and get funded in{" "}
          <strong className="text-white">4 days.</strong>
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://app.velocity.in"
            className="bg-white text-velocity-navy font-bold px-8 py-4 rounded-xl text-lg hover:bg-yellow-300 hover:text-velocity-dark transition-all shadow-lg shadow-black/20 w-full sm:w-auto text-center"
          >
            Apply Now — It's Free
          </a>
          <a
            href="#how-it-works"
            className="text-white/90 font-medium px-8 py-4 rounded-xl text-lg border border-white/30 hover:bg-white/10 transition-all w-full sm:w-auto text-center"
          >
            How It Works ↓
          </a>
        </div>
        <p className="mt-6 text-sm text-white/50">No equity dilution · No personal guarantees · 100% digital</p>
      </div>
    </section>
  );
}
