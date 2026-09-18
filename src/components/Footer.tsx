import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-velocity-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-velocity-navy font-bold text-sm">V</span>
              </div>
              <span className="font-bold text-xl">Velocity</span>
            </div>
            <p className="text-gray-400 text-sm">
              India's largest flexible financing platform for digital-first businesses.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-gray-400">Products</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/financing" className="hover:text-white transition-colors">Financing</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">ShipFast</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Vani AI</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Insights</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-gray-400">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-gray-400">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Velocity. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
