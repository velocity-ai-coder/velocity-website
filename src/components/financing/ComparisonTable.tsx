const CHECK = (
  <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const PARTIAL = (
  <svg className="w-5 h-5 text-yellow-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
  </svg>
);

const CROSS = (
  <svg className="w-5 h-5 text-red-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

type CellValue = { icon: "check" | "partial" | "cross"; text: string };

type Row = {
  feature: string;
  velocity: CellValue;
  getvantage: CellValue;
  klub: CellValue;
  recur: CellValue;
};

type Group = { label: string; rows: Row[] };

const GROUPS: Group[] = [
  {
    label: "Capital & Terms",
    rows: [
      {
        feature: "Funding amount",
        velocity: { icon: "check", text: "Up to ₹10 Cr" },
        getvantage: { icon: "partial", text: "Up to ₹20 Cr*" },
        klub: { icon: "partial", text: "Up to ₹30 Cr" },
        recur: { icon: "partial", text: "Varies" },
      },
      {
        feature: "Funding speed",
        velocity: { icon: "check", text: "4 days" },
        getvantage: { icon: "partial", text: "~5 days" },
        klub: { icon: "partial", text: "48 hrs" },
        recur: { icon: "partial", text: "48 hrs" },
      },
      {
        feature: "Pricing transparency",
        velocity: { icon: "check", text: "5–8% flat fee, public" },
        getvantage: { icon: "partial", text: "Flat-fee, less clear" },
        klub: { icon: "partial", text: "Product-dependent" },
        recur: { icon: "cross", text: "Less prominent" },
      },
      {
        feature: "Repayment flexibility",
        velocity: { icon: "check", text: "Revenue-based + fixed" },
        getvantage: { icon: "check", text: "Multiple options" },
        klub: { icon: "partial", text: "Revenue-linked" },
        recur: { icon: "partial", text: "Product-dependent" },
      },
      {
        feature: "Term-sheet speed",
        velocity: { icon: "check", text: "~2 minutes" },
        getvantage: { icon: "partial", text: "Fast" },
        klub: { icon: "partial", text: "Fast" },
        recur: { icon: "partial", text: "Fast" },
      },
    ],
  },
  {
    label: "Eligibility & Process",
    rows: [
      {
        feature: "Equity dilution",
        velocity: { icon: "check", text: "None" },
        getvantage: { icon: "check", text: "None" },
        klub: { icon: "check", text: "None" },
        recur: { icon: "check", text: "None" },
      },
      {
        feature: "Collateral required",
        velocity: { icon: "check", text: "None" },
        getvantage: { icon: "partial", text: "No for RBF" },
        klub: { icon: "partial", text: "No for RBF" },
        recur: { icon: "check", text: "None" },
      },
      {
        feature: "Personal guarantee",
        velocity: { icon: "check", text: "None" },
        getvantage: { icon: "partial", text: "No for RBF" },
        klub: { icon: "partial", text: "No for RBF" },
        recur: { icon: "check", text: "None" },
      },
      {
        feature: "No pitch deck",
        velocity: { icon: "check", text: "Data-driven only" },
        getvantage: { icon: "partial", text: "Digital process" },
        klub: { icon: "check", text: "No pitch deck" },
        recur: { icon: "partial", text: "Digital" },
      },
      {
        feature: "D2C-specific underwriting",
        velocity: { icon: "check", text: "eCommerce-native" },
        getvantage: { icon: "partial", text: "Broad digital" },
        klub: { icon: "partial", text: "Broad" },
        recur: { icon: "partial", text: "Broad" },
      },
    ],
  },
  {
    label: "Ecosystem & Growth",
    rows: [
      {
        feature: "Integrated ecosystem",
        velocity: { icon: "check", text: "Finance + Shipping + Payments + AI + Insights" },
        getvantage: { icon: "cross", text: "Finance only" },
        klub: { icon: "cross", text: "Finance only" },
        recur: { icon: "cross", text: "Finance only" },
      },
      {
        feature: "Shipping integration",
        velocity: { icon: "check", text: "ShipFast built-in" },
        getvantage: { icon: "cross", text: "Not available" },
        klub: { icon: "cross", text: "Not available" },
        recur: { icon: "cross", text: "Not available" },
      },
      {
        feature: "AI-powered insights",
        velocity: { icon: "check", text: "Vani AI + Insights" },
        getvantage: { icon: "cross", text: "Limited" },
        klub: { icon: "cross", text: "Limited" },
        recur: { icon: "cross", text: "Limited" },
      },
      {
        feature: "D2C brand network",
        velocity: { icon: "check", text: "4,000+ brands" },
        getvantage: { icon: "partial", text: "Strong" },
        klub: { icon: "partial", text: "Strong" },
        recur: { icon: "partial", text: "Strong" },
      },
      {
        feature: "Repeat funding",
        velocity: { icon: "check", text: "Scales with revenue" },
        getvantage: { icon: "check", text: "Yes" },
        klub: { icon: "check", text: "Yes" },
        recur: { icon: "check", text: "Yes" },
      },
    ],
  },
];

const ICON_MAP = { check: CHECK, partial: PARTIAL, cross: CROSS };

const COMPETITORS = [
  {
    key: "velocity" as const,
    name: "Velocity",
    tag: "Best overall",
    highlight: true,
    tagColor: "bg-green-100 text-green-700",
  },
  {
    key: "getvantage" as const,
    name: "GetVantage",
    tag: "Finance-focused",
    highlight: false,
    tagColor: "bg-gray-100 text-gray-500",
  },
  {
    key: "klub" as const,
    name: "Klub",
    tag: "Capital platform",
    highlight: false,
    tagColor: "bg-gray-100 text-gray-500",
  },
  {
    key: "recur" as const,
    name: "Recur Club",
    tag: "Financing platform",
    highlight: false,
    tagColor: "bg-gray-100 text-gray-500",
  },
];

export default function ComparisonTable() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-3">
            Competitor comparison
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3D3D6B]">
            Why founders choose Velocity
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            We&apos;re not just a lender — we&apos;re a growth platform. See how Velocity stacks up.
          </p>
        </div>

        {/* table */}
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm min-w-[700px]">
            {/* column headers */}
            <thead>
              <tr>
                <th className="px-6 py-5 bg-gray-50 text-left text-gray-500 font-medium w-1/4 border-b border-gray-200">
                  Feature
                </th>
                {COMPETITORS.map((c) => (
                  <th
                    key={c.key}
                    className={`px-6 py-5 text-center border-b ${
                      c.highlight
                        ? "bg-indigo-600 text-white border-indigo-700"
                        : "bg-gray-50 text-gray-700 border-gray-200"
                    }`}
                  >
                    <div className="flex flex-col items-center gap-1.5">
                      <span className="font-bold text-base">{c.name}</span>
                      <span
                        className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                          c.highlight
                            ? "bg-white/20 text-white"
                            : c.tagColor
                        }`}
                      >
                        {c.tag}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {GROUPS.map((group, gi) => (
                <>
                  {/* group label row */}
                  <tr key={`group-${gi}`}>
                    <td
                      colSpan={5}
                      className="px-6 py-3 bg-gray-50 text-xs font-bold text-gray-400 uppercase tracking-widest border-y border-gray-200"
                    >
                      {group.label}
                    </td>
                  </tr>

                  {/* feature rows */}
                  {group.rows.map((row, ri) => (
                    <tr
                      key={`${gi}-${ri}`}
                      className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors"
                    >
                      <td className="px-6 py-4 font-medium text-[#3D3D6B]">
                        {row.feature}
                      </td>
                      {COMPETITORS.map((c) => {
                        const cell = row[c.key];
                        return (
                          <td
                            key={c.key}
                            className={`px-6 py-4 text-center ${
                              c.highlight ? "bg-indigo-50" : ""
                            }`}
                          >
                            <div className="flex flex-col items-center gap-1">
                              {ICON_MAP[cell.icon]}
                              <span
                                className={`text-xs leading-tight ${
                                  c.highlight
                                    ? "text-indigo-700 font-medium"
                                    : "text-gray-500"
                                }`}
                              >
                                {cell.text}
                              </span>
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA below table */}
        <div className="mt-10 text-center">
          <a
            href="/financing/apply"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3.5 rounded-full transition-colors shadow-lg shadow-indigo-200"
          >
            Apply now — get a term sheet in 2 minutes
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <p className="mt-3 text-sm text-gray-400">
            No equity dilution · No collateral · No personal guarantee
          </p>
        </div>
      </div>
    </section>
  );
}
