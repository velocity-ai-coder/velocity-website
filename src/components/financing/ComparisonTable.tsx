"use client";

import { useState, useEffect, useCallback, type ReactElement } from "react";

/* ─── icons ──────────────────────────────────────────────────── */
const CheckIcon = () => (
  <svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);
const PartialIcon = () => (
  <svg className="w-5 h-5 text-amber-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
  </svg>
);
const CrossIcon = () => (
  <svg className="w-5 h-5 text-red-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
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
    label: "Capital & Pricing",
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
        velocity: { status: "check",   label: "5–8% flat fee, public" },
        a:        { status: "partial", label: "Less visible" },
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
    label: "Eligibility",
    rows: [
      {
        feature: "Equity dilution",
        velocity: { status: "check",   label: "Zero" },
        a:        { status: "check",   label: "None" },
        b:        { status: "check",   label: "None" },
        c:        { status: "check",   label: "None" },
      },
      {
        feature: "Collateral",
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
    label: "Ecosystem",
    rows: [
      {
        feature: "Integrated shipping",
        velocity: { status: "check",   label: "ShipFast built-in" },
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

const COMPETITORS = [
  { key: "a" as CompKey, name: "Competitor A", sub: "Finance platform",  score: 9  },
  { key: "b" as CompKey, name: "Competitor B", sub: "Capital platform",  score: 8  },
  { key: "c" as CompKey, name: "Competitor C", sub: "Finance platform",  score: 8  },
];

const VELOCITY_SCORE = 15;
const TOTAL = 15;
const SLIDE_MS = 5000;

export default function ComparisonTable() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setActive((i) => (i + 1) % COMPETITORS.length), []);
  const prev = useCallback(() => setActive((i) => (i - 1 + COMPETITORS.length) % COMPETITORS.length), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, SLIDE_MS);
    return () => clearInterval(t);
  }, [paused, next]);

  const competitor = COMPETITORS[active];
  const total = COMPETITORS.length;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── section label ── */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-2">
              Competitor comparison
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A2E]">
              Why leading D2C brands<br className="hidden sm:block" /> choose Velocity
            </h2>
          </div>
          {/* Shiprocket-style slide counter */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => { prev(); setPaused(true); }}
              className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-indigo-400 hover:text-indigo-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-sm font-semibold text-gray-400">
              <span className="text-[#1A1A2E] text-lg font-extrabold">{active + 1}</span>/{total}
            </span>
            <button
              onClick={() => { next(); setPaused(true); }}
              className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-indigo-400 hover:text-indigo-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── auto-progress bar ── */}
        <div className="h-0.5 w-full bg-gray-100 rounded-full mb-8 overflow-hidden">
          {!paused && (
            <div
              key={`${active}-bar`}
              className="h-full bg-indigo-500 rounded-full"
              style={{ animation: `growWidth ${SLIDE_MS}ms linear forwards` }}
            />
          )}
        </div>

        {/* ── slide card ── */}
        <div
          key={active}
          className="rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
          style={{ animation: "fadeIn 0.35s ease" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* card header — two columns */}
          <div className="grid grid-cols-2">
            {/* Velocity header */}
            <div className="px-8 py-6 bg-[#1A1A2E] flex flex-col gap-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs font-bold">V</span>
                <span className="text-white font-extrabold text-lg">Velocity</span>
                <span className="ml-auto text-xs font-bold bg-emerald-500 text-white px-2.5 py-0.5 rounded-full">★ Best</span>
              </div>
              <p className="text-indigo-300 text-sm">Finance + Shipping + Payments + AI</p>
              <p className="text-indigo-200 text-xs font-semibold mt-1">{VELOCITY_SCORE}/{TOTAL} features matched</p>
            </div>
            {/* Competitor header */}
            <div className="px-8 py-6 bg-gray-50 border-l border-gray-100 flex flex-col gap-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-xs font-bold">
                  {competitor.name[competitor.name.length - 1]}
                </span>
                <span className="text-[#1A1A2E] font-extrabold text-lg">{competitor.name}</span>
              </div>
              <p className="text-gray-400 text-sm">{competitor.sub}</p>
              <p className="text-gray-400 text-xs font-semibold mt-1">{competitor.score}/{TOTAL} features matched</p>
            </div>
          </div>

          {/* feature groups */}
          {GROUPS.map((group, gi) => (
            <div key={gi}>
              {/* group heading */}
              <div className="px-8 py-3 bg-gray-50 border-y border-gray-100 flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  {gi + 1}/{GROUPS.length} — {group.label}
                </span>
              </div>
              {/* rows */}
              {group.rows.map((row, ri) => {
                const comp = row[competitor.key];
                return (
                  <div
                    key={`${gi}-${ri}`}
                    className="grid grid-cols-2 border-b border-gray-50 hover:bg-gray-50/40 transition-colors"
                  >
                    {/* Velocity */}
                    <div className="px-8 py-4 flex items-center gap-3 border-r border-gray-100">
                      {ICON_MAP[row.velocity.status]}
                      <div>
                        <p className="text-sm font-semibold text-[#1A1A2E]">{row.feature}</p>
                        <p className="text-xs text-emerald-600 font-medium">{row.velocity.label}</p>
                      </div>
                    </div>
                    {/* Competitor */}
                    <div className="px-8 py-4 flex items-center gap-3">
                      {ICON_MAP[comp.status]}
                      <div>
                        <p className="text-sm font-medium text-gray-500">{row.feature}</p>
                        <p className="text-xs text-gray-400">{comp.label}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}

          {/* card footer */}
          <div className="grid grid-cols-2 border-t border-gray-200">
            <div className="px-8 py-5 bg-[#1A1A2E] flex items-center justify-between">
              <div>
                <p className="text-indigo-200 text-xs font-medium">Overall score</p>
                <p className="text-white text-xl font-extrabold">{VELOCITY_SCORE}/{TOTAL}</p>
              </div>
              <a
                href="/financing/apply"
                className="bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors whitespace-nowrap"
              >
                Apply now →
              </a>
            </div>
            <div className="px-8 py-5 bg-gray-50 flex items-center">
              <div>
                <p className="text-gray-400 text-xs font-medium">Overall score</p>
                <p className="text-[#1A1A2E] text-xl font-extrabold">{competitor.score}/{TOTAL}</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── dot indicators (mobile) ── */}
        <div className="flex sm:hidden justify-center gap-2 mt-6">
          {COMPETITORS.map((_, i) => (
            <button
              key={i}
              onClick={() => { setActive(i); setPaused(true); }}
              className={`h-2 rounded-full transition-all ${
                active === i ? "w-6 bg-indigo-600" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>

      <style>{`
        @keyframes growWidth {
          from { width: 0% }
          to   { width: 100% }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
