const ROWS = [
  {
    category: "Core proposition",
    velocity: "Growth capital for D2C, eCommerce & digital businesses",
    getvantage: "Growth capital / RBF",
    klub: "Revenue-based capital",
    recur: "Non-dilutive capital",
  },
  {
    category: "D2C focus",
    velocity: "Very Strong",
    getvantage: "Strong",
    klub: "Strong",
    recur: "Strong",
  },
  {
    category: "Homepage positioning",
    velocity: "Finance + Shipping + Payments + Insights + AI",
    getvantage: "Finance-focused",
    klub: "Capital-focused",
    recur: "Financing-focused",
  },
  {
    category: "Funding amount",
    velocity: "Up to ₹10 Cr",
    getvantage: "Up to ₹20 Cr*",
    klub: "Up to ₹30 Cr",
    recur: "Varies",
  },
  {
    category: "Funding speed",
    velocity: "Up to 4 days",
    getvantage: "Up to ~5 days",
    klub: "48 hours",
    recur: "48 hours",
  },
  {
    category: "Equity dilution",
    velocity: "No equity dilution",
    getvantage: "No",
    klub: "No",
    recur: "No",
  },
  {
    category: "Collateral",
    velocity: "No collateral",
    getvantage: "No for RBF",
    klub: "No for RBF",
    recur: "No",
  },
  {
    category: "Personal guarantee",
    velocity: "No personal guarantee",
    getvantage: "No for RBF",
    klub: "No for RBF",
    recur: "No",
  },
  {
    category: "Pricing transparency",
    velocity: "5–8% fixed fee publicly communicated",
    getvantage: "Flat-fee positioning",
    klub: "Product-dependent",
    recur: "Less prominent",
  },
  {
    category: "Repayment options",
    velocity: "Revenue-based + fixed monthly repayment",
    getvantage: "Multiple options",
    klub: "Revenue-linked",
    recur: "Product-dependent",
  },
  {
    category: "Application",
    velocity: "Simple digital application",
    getvantage: "Digital",
    klub: "Digital",
    recur: "Digital",
  },
  {
    category: "Term-sheet speed",
    velocity: "~2 minutes",
    getvantage: "Fast",
    klub: "Fast",
    recur: "Fast",
  },
  {
    category: "Underwriting",
    velocity: "Data-driven",
    getvantage: "Data-driven",
    klub: "Data-driven",
    recur: "Data-driven",
  },
  {
    category: "No pitch deck",
    velocity: "No traditional pitch-deck-led process",
    getvantage: "Digital process",
    klub: "No pitch deck",
    recur: "Digital",
  },
  {
    category: "Use of funds",
    velocity: "Marketing, inventory & business growth",
    getvantage: "Marketing / working capital",
    klub: "Marketing / inventory",
    recur: "Growth / working capital",
  },
  {
    category: "D2C ecosystem",
    velocity: "4,000+ brands",
    getvantage: "Strong",
    klub: "Strong",
    recur: "Strong",
  },
  {
    category: "Partner ecosystem",
    velocity: "50+ ecosystem partners",
    getvantage: "Strong",
    klub: "Strong",
    recur: "Strong",
  },
  {
    category: "Integrated ecosystem",
    velocity: "Finance + Shipping + Payments + AI + Insights",
    getvantage: "Mainly finance",
    klub: "Mainly finance/capital",
    recur: "Mainly financing",
  },
  {
    category: "Growth insights",
    velocity: "Insights + business data ecosystem",
    getvantage: "Limited",
    klub: "Limited",
    recur: "Limited",
  },
  {
    category: "Repeat funding",
    velocity: "Additional funding as businesses scale",
    getvantage: "Yes",
    klub: "Yes",
    recur: "Yes",
  },
  {
    category: "Website differentiation",
    velocity: "Complete D2C business ecosystem, not just financing",
    getvantage: "Financing platform",
    klub: "Capital platform",
    recur: "Financing platform",
  },
];

export default function ComparisonTable() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-3">
            Why Velocity
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3D3D6B]">
            How we compare
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            See how Velocity stacks up against other revenue-based financing platforms.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl shadow-sm border border-gray-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#3D3D6B] text-white">
                <th className="px-6 py-4 text-left font-semibold w-1/4">
                  Category
                </th>
                <th className="px-6 py-4 text-left font-semibold bg-indigo-600 w-1/4">
                  <span className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white text-indigo-600 text-xs font-bold">
                      V
                    </span>
                    Velocity Finance
                  </span>
                </th>
                <th className="px-6 py-4 text-left font-semibold w-1/6">
                  GetVantage
                </th>
                <th className="px-6 py-4 text-left font-semibold w-1/6">
                  Klub
                </th>
                <th className="px-6 py-4 text-left font-semibold w-1/6">
                  Recur Club
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr
                  key={row.category}
                  className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="px-6 py-4 font-medium text-[#3D3D6B]">
                    {row.category}
                  </td>
                  <td className="px-6 py-4 bg-indigo-50 text-indigo-700 font-medium border-l-2 border-r-2 border-indigo-100">
                    <span className="flex items-start gap-2">
                      <svg
                        className="w-4 h-4 mt-0.5 text-green-500 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {row.velocity}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{row.getvantage}</td>
                  <td className="px-6 py-4 text-gray-600">{row.klub}</td>
                  <td className="px-6 py-4 text-gray-600">{row.recur}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
