import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-velocity-navy rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <span className="text-velocity-navy font-bold text-xl">Velocity</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/financing" className="text-gray-600 hover:text-velocity-navy font-medium transition-colors">
              Financing
            </Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-velocity-navy font-medium transition-colors">
              How It Works
            </Link>
            <Link href="#faq" className="text-gray-600 hover:text-velocity-navy font-medium transition-colors">
              FAQ
            </Link>
          </div>
          <a
            href="https://app.velocity.in"
            className="bg-velocity-navy text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-velocity-blue transition-colors"
          >
            Apply Now
          </a>
        </div>
      </div>
    </nav>
  );
}
