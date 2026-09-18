const TRUST_PILLARS = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 10c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286z" />
      </svg>
    ),
    title: "RBI-Regulated Lending",
    description:
      "Velocity partners with RBI-registered NBFCs to disburse all financing. Your capital is governed by India's financial regulatory framework — not a grey-market lender.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    title: "Transparent Pricing",
    description:
      "A flat fee of 5–8% on the capital — no hidden charges, no variable interest rate surprises. You know the exact cost of capital before signing anything.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Bank-Grade Data Security",
    description:
      "Your business data is accessed via read-only integrations and encrypted in transit. We never store sensitive credentials. Velocity is ISO 27001-aligned.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "No Equity. No Guarantee.",
    description:
      "Zero equity dilution, zero personal guarantees, zero collateral. Repayments are automatically collected from your online revenue — you scale at your own pace.",
  },
];

export default function NBFCSection() {
  return (
    <section className="py-20 bg-[#3D3D6B] relative overflow-hidden">
      {/* background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-white/10 text-indigo-200 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
            </svg>
            NBFC-Backed &amp; RBI-Regulated
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Your capital is safe, secure, and compliant
          </h2>
          <p className="mt-4 text-lg text-indigo-200 max-w-2xl mx-auto">
            Unlike unregulated lending apps or peer-to-peer platforms, Velocity disburses financing through RBI-registered Non-Banking Financial Companies — giving you the speed of a fintech with the safety of a regulated lender.
          </p>
        </div>

        {/* pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {TRUST_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-500/30 flex items-center justify-center text-indigo-200 mb-4">
                {pillar.icon}
              </div>
              <h3 className="text-white font-semibold text-base mb-2">
                {pillar.title}
              </h3>
              <p className="text-indigo-200 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* bottom trust bar */}
        <div className="border-t border-white/10 pt-10">
          <p className="text-center text-indigo-300 text-sm font-medium mb-6 uppercase tracking-widest">
            Backed by leading investors
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {["Valar Ventures", "Peter Thiel", "Whiteboard Capital", "Better Capital", "Rainmatter"].map(
              (investor) => (
                <span key={investor} className="text-white font-semibold text-sm">
                  {investor}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
