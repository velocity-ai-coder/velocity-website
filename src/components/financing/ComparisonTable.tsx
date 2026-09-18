"use client";

import { useState, useEffect, useCallback, type ReactElement } from "react";

/* ─── icons ──────────────────────────────────────────────────── */
const CheckIcon = () => (
  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100">
    <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </span>
);
const PartialIcon = () => (
  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-100">
    <svg className="w-3.5 h-3.5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
    </svg>
  </span>
);
const CrossIcon = () => (
  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100">
    <svg className="w-3.5 h-3.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </span>
);

type Status = "check" | "partial" | "cross";
type CompKey = "a" | "b" | "c";
type Cell = { status: Status; label: string };
type Row = { feature: string; velocity: Cell } & Record<CompKey, Cell>;
type Group = { label: string; rows: Row[] };

const ICON_MAP: Record<Status, ReactElement> = {
  check:   <CheckIcon />,
  partial: <PartialIcon />,
  cross:   <CrossIcon />,
};

const GROUPS: Group[] = [
  {
    label: "💰 Capital & Pricing",
    rows: [
      {
        feature: "Max funding",
        velocity: { status: "check",   label: "Up to ₹10 Cr" },
        a:        { status: "partial", label: "Up to ₹20 Cr*" },
        b:        { status: "partial", label: "Up to ₹30 Cr" },
        c:        { status: "partial", label: "Varies" },
      },
      {
        feature: "Funding speed",
        velocity: { status: "check",   label: "4 days" },
        a:        { status: "partial", label: "~5 days" },
        b:        { status: "partial", label: "48 hrs" },
        c:        { status: "partial", label: "48 hrs" },
      },
      {
        feature: "Pricing transparency",
        velocity: { status: "check",   label: "5–8% flat, published" },
        a:        { status: "partial", label: "Flat fee, less visible" },
        b:        { status: "partial", label: "Product-dependent" },
        c:        { status: "cross",   label: "Not prominent" },
      },
      {
        feature: "Term sheet",
        velocity: { status: "check",   label: "~2 minutes" },
        a:        { status: "partial", label: "Fast" },
        b:        { status: "partial", label: "Fast" },
        c:        { status: "partial", label: "Fast" },
      },
      {
        feature: "Repayment flexibility",
        velocity: { status: "check",   label: "Revenue + fixed EMI" },
        a:        { status: "check",   label: "Multiple options" },
        b:        { status: "partial", label: "Revenue-linked" },
        c:        { status: "partial", label: "Product-dependent" },
      },
    ],
  },
  {
    label: "✅ Eligibility",
    rows: [
      {
        feature: "Equity dilution",
        velocity: { status: "check",   label: "Zero" },
        a:        { status: "check",   label: "None" },
        b:        { status: "check",   label: "None" },
        c:        { status: "check",   label: "None" },
      },
      {
        feature: "Collateral required",
        velocity: { status: "check",   label: "None" },
        a:        { status: "partial", label: "No for RBF" },
        b:        { status: "partial", label: "No for RBF" },
        c:        { status: "check",   label: "None" },
      },
      {
        feature: "Personal guarantee",
        velocity: { status: "check",   label: "None" },
        a:        { status: "partial", label: "No for RBF" },
        b:        { status: "partial", label: "No for RBF" },
        c:        { status: "check",   label: "None" },
      },
      {
        feature: "NBFC / RBI regulated",
        velocity: { status: "check",   label: "RBI-registered NBFC" },
        a:        { status: "partial", label: "Varies" },
        b:        { status: "partial", label: "Varies" },
        c:        { status: "partial", label: "Varies" },
      },
      {
        feature: "No pitch deck",
        velocity: { status: "check",   label: "Data-driven only" },
        a:        { status: "partial", label: "Digital process" },
        b:        { status: "check",   label: "Not required" },
        c:        { status: "partial", label: "Digital" },
      },
    ],
  },
  {
    label: "🚀 Ecosystem",
    rows: [
      {
        feature: "Integrated shipping",
        velocity: { status: "check",   label: "ShipFast (built-in)" },
        a:        { status: "cross",   label: "Not available" },
        b:        { status: "cross",   label: "Not available" },
        c:        { status: "cross",   label: "Not available" },
      },
      {
        feature: "Payments platform",
        velocity: { status: "check",   label: "Velocity Payments" },
        a:        { status: "cross",   label: "Not available" },
        b:        { status: "cross",   label: "Not available" },
        c:        { status: "cross",   label: "Not available" },
      },
      {
        feature: "AI & analytics",
        velocity: { status: "check",   label: "Vani AI + Insights" },
        a:        { status: "cross",   label: "Limited" },
        b:        { status: "cross",   label: "Limited" },
        c:        { status: "cross",   label: "Limited" },
      },
      {
        feature: "D2C brand network",
        velocity: { status: "check",   label: "4,000+ brands" },
        a:        { status: "partial", label: "Strong" },
        b:        { status: "partial", label: "Strong" },
        c:        { status: "partial", label: "Strong" },
      },
      {
        feature: "Repeat funding",
        velocity: { status: "check",   label: "Scales with revenue" },
        a:        { status: "check",   label: "Yes" },
        b:        { status: "check",   label: "Yes" },
        c:        { status: "check",   label: "Yes" },
      },
    ],
  },
];

const COMPETITORS: { key: CompKey; name: string; sub: string; score: number }[] = [
  { key: "a", name: "Competitor A", sub: "Finance platform",  score: 9  },
  { key: "b", name: "Competitor B", sub: "Capital platform",  score: 8  },
  { key: "c", name: "Competitor C", sub: "Finance platform",  score: 8  },
];

const VELOCITY_SCORE = 15;
const TOTAL = 15;
const SLIDE_INTERVAL = 4000;

export default function ComparisonTable() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setActive((i) => (i + 1) % COMPETITORS.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [paused, next]);

  const competitor = COMPETITORS[active];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* heading */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-3">
            Competitor comparison
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3D3D6B]">
            Why leading D2C brands choose Velocity
          </h2>
          <p className="mt-3 text-gray-500 max-w-lg mx-auto">
            We&apos;re the only platform combining growth capital, shipping, payments, and AI.
          </p>
        </div>

        {/* slide tabs */}
        <div
          className="flex justify-center gap-3 mb-8"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {COMPETITORS.map((c, i) => (
            <button
              key={c.key}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                active === i
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                  : "bg-white border border-gray-200 text-gray-500 hover:border-indigo-300 hover:text-indigo-600"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* auto-progress bar */}
        <div className="w-full h-0.5 bg-gray-200 rounded-full mb-8 overflow-hidden">
          {!paused && (
            <div
              key={active}
              className="h-full bg-indigo-500 rounded-full"
              style={{
                animation: `slideProgress ${SLIDE_INTERVAL}ms linear forwards`,
              }}
            />
          )}
        </div>

        {/* slide panel */}
        <div
          className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* column headers */}
          <div className="grid grid-cols-[2fr_1fr_1fr] border-b border-gray-100">
            <div className="px-6 py-5 text-sm text-gray-400 font-medium">Feature</div>
            {/* Velocity */}
            <div className="px-6 py-5 text-center bg-indigo-600">
              <p className="font-bold text-white text-sm">Velocity</p>
              <p className="text-indigo-200 text-xs mt-0.5">Growth ecosystem</p>
              <span className="inline-block mt-2 text-xs font-bold bg-white/20 text-white px-2.5 py-0.5 rounded-full">
                {VELOCITY_SCORE}/{TOTAL} features
              </span>
            </div>
            {/* competitor */}
            <div className="px-6 py-5 text-center bg-gray-50">
              <p className="font-bold text-[#3D3D6B] text-sm">{competitor.name}</p>
              <p className="text-gray-400 text-xs mt-0.5">{competitor.sub}</p>
              <span className="inline-block mt-2 text-xs font-semibold bg-gray-200 text-gray-500 px-2.5 py-0.5 rounded-full">
                {competitor.score}/{TOTAL} features
              </span>
            </div>
          </div>

          {/* feature rows */}
          {GROUPS.map((group, gi) => (
            <div key={gi}>
              <div className="px-6 py-2.5 bg-gray-50 border-y border-gray-100">
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-500/70">
                  {group.label}
                </span>
              </div>
              {group.rows.map((row, ri) => {
                const compCell = row[competitor.key];
                return (
                  <div
                    key={`${gi}-${ri}`}
                    className="grid grid-cols-[2fr_1fr_1fr] border-b border-gray-50 hover:bg-gray-50/50 transition-colors last:border-0"
                  >
                    <div className="px-6 py-4 flex items-center text-sm font-medium text-[#3D3D6B]">
                      {row.feature}
                    </div>
                    {/* Velocity cell */}
                    <div className="px-4 py-4 flex flex-col items-center justify-center gap-1.5 bg-indigo-50/40 border-x border-indigo-100">
                      {ICON_MAP[row.velocity.status]}
                      <span className="text-xs text-indigo-700 font-semibold text-center leading-tight">
                        {row.velocity.label}
                      </span>
                    </div>
                    {/* competitor cell */}
                    <div className="px-4 py-4 flex flex-col items-center justify-center gap-1.5">
                      {ICON_MAP[compCell.status]}
                      <span className="text-xs text-gray-500 text-center leading-tight">
                        {compCell.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}

          {/* score footer */}
          <div className="grid grid-cols-[2fr_1fr_1fr] border-t-2 border-gray-100 bg-gray-50">
            <div className="px-6 py-4 text-sm font-bold text-[#3D3D6B]">Overall score</div>
            <div className="px-4 py-4 flex items-center justify-center border-x border-indigo-100 bg-indigo-50/40">
              <span className="bg-indigo-600 text-white text-sm font-bold px-3 py-1.5 rounded-full">
                {VELOCITY_SCORE}/{TOTAL}
              </span>
            </div>
            <div className="px-4 py-4 flex items-center justify-center">
              <span className="bg-gray-200 text-gray-500 text-sm font-semibold px-3 py-1.5 rounded-full">
                {competitor.score}/{TOTAL}
              </span>
            </div>
          </div>
        </div>

        {/* dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {COMPETITORS.map((_, i) => (
            <button
              key={i}
              onClick={() => { setActive(i); setPaused(true); }}
              className={`w-2 h-2 rounded-full transition-all ${
                active === i ? "bg-indigo-600 w-6" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="/financing/apply"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-4 rounded-full transition-colors shadow-lg shadow-indigo-200"
          >
            Apply now — term sheet in 2 minutes
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes slideProgress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </section>
  );
}
