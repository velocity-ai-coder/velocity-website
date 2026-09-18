"use client";

import { useState, type ReactElement } from "react";

/* ─── icons ──────────────────────────────────────────────────── */
const CheckIcon = () => (
  <svg className="w-5 h-5 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);
const PartialIcon = () => (
  <svg className="w-5 h-5 text-yellow-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
  </svg>
);
const CrossIcon = () => (
  <svg className="w-5 h-5 text-red-500/60 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

/* ─── types ──────────────────────────────────────────────────── */
type Status = "check" | "partial" | "cross";
type CompKey = "velocity" | "getvantage" | "klub" | "recur";
type Cell = { status: Status; label: string };
type Row = { feature: string } & Record<CompKey, Cell>;
type Group = { id: string; label: string; rows: Row[] };

/* ─── data ───────────────────────────────────────────────────── */
const GROUPS: Group[] = [
  {
    id: "capital",
    label: "Capital & Pricing",
    rows: [
      {
        feature: "Max funding",
        velocity:   { status: "check",   label: "Up to ₹10 Cr" },
        getvantage: { status: "partial", label: "Up to ₹20 Cr*" },
        klub:       { status: "partial", label: "Up to ₹30 Cr" },
        recur:      { status: "partial", label: "Varies" },
      },
      {
        feature: "Funding speed",
        velocity:   { status: "check",   label: "4 days" },
        getvantage: { status: "partial", label: "~5 days" },
        klub:       { status: "partial", label: "48 hrs" },
        recur:      { status: "partial", label: "48 hrs" },
      },
      {
        feature: "Pricing transparency",
        velocity:   { status: "check",   label: "5–8% flat, published" },
        getvantage: { status: "partial", label: "Flat fee, less visible" },
        klub:       { status: "partial", label: "Product-dependent" },
        recur:      { status: "cross",   label: "Not prominent" },
      },
      {
        feature: "Term sheet",
        velocity:   { status: "check",   label: "~2 minutes" },
        getvantage: { status: "partial", label: "Fast" },
        klub:       { status: "partial", label: "Fast" },
        recur:      { status: "partial", label: "Fast" },
      },
      {
        feature: "Repayment options",
        velocity:   { status: "check",   label: "Revenue + fixed EMI" },
        getvantage: { status: "check",   label: "Multiple options" },
        klub:       { status: "partial", label: "Revenue-linked" },
        recur:      { status: "partial", label: "Product-dependent" },
      },
    ],
  },
  {
    id: "eligibility",
    label: "Eligibility",
    rows: [
      {
        feature: "Equity dilution",
        velocity:   { status: "check",   label: "Zero" },
        getvantage: { status: "check",   label: "None" },
        klub:       { status: "check",   label: "None" },
        recur:      { status: "check",   label: "None" },
      },
      {
        feature: "Collateral",
        velocity:   { status: "check",   label: "None" },
        getvantage: { status: "partial", label: "No for RBF" },
        klub:       { status: "partial", label: "No for RBF" },
        recur:      { status: "check",   label: "None" },
      },
      {
        feature: "Personal guarantee",
        velocity:   { status: "check",   label: "None" },
        getvantage: { status: "partial", label: "No for RBF" },
        klub:       { status: "partial", label: "No for RBF" },
        recur:      { status: "check",   label: "None" },
      },
      {
        feature: "NBFC / RBI regulated",
        velocity:   { status: "check",   label: "RBI-registered NBFC" },
        getvantage: { status: "partial", label: "Varies" },
        klub:       { status: "partial", label: "Varies" },
        recur:      { status: "partial", label: "Varies" },
      },
      {
        feature: "No pitch deck",
        velocity:   { status: "check",   label: "Data-driven only" },
        getvantage: { status: "partial", label: "Digital process" },
        klub:       { status: "check",   label: "Not required" },
        recur:      { status: "partial", label: "Digital" },
      },
    ],
  },
  {
    id: "ecosystem",
    label: "Ecosystem",
    rows: [
      {
        feature: "Integrated shipping",
        velocity:   { status: "check",   label: "ShipFast (built-in)" },
        getvantage: { status: "cross",   label: "Not available" },
        klub:       { status: "cross",   label: "Not available" },
        recur:      { status: "cross",   label: "Not available" },
      },
      {
        feature: "Payments platform",
        velocity:   { status: "check",   label: "Velocity Payments" },
        getvantage: { status: "cross",   label: "Not available" },
        klub:       { status: "cross",   label: "Not available" },
        recur:      { status: "cross",   label: "Not available" },
      },
      {
        feature: "AI & analytics",
        velocity:   { status: "check",   label: "Vani AI + Insights" },
        getvantage: { status: "cross",   label: "Limited" },
        klub:       { status: "cross",   label: "Limited" },
        recur:      { status: "cross",   label: "Limited" },
      },
      {
        feature: "D2C brand network",
        velocity:   { status: "check",   label: "4,000+ brands" },
        getvantage: { status: "partial", label: "Strong" },
        klub:       { status: "partial", label: "Strong" },
        recur:      { status: "partial", label: "Strong" },
      },
      {
        feature: "Repeat funding",
        velocity:   { status: "check",   label: "Scales with revenue" },
        getvantage: { status: "check",   label: "Yes" },
        klub:       { status: "check",   label: "Yes" },
        recur:      { status: "check",   label: "Yes" },
      },
    ],
  },
];

type Competitor = { key: CompKey; name: string; sub: string; score: number };
const COMPETITORS: Competitor[] = [
  { key: "velocity",   name: "Velocity",   sub: "Growth ecosystem",  score: 15 },
  { key: "getvantage", name: "GetVantage", sub: "Finance platform",  score: 9  },
  { key: "klub",       name: "Klub",       sub: "Capital platform",  score: 8  },
  { key: "recur",      name: "Recur Club", sub: "Finance platform",  score: 8  },
];

const TOTAL = 15;
const ICON_MAP: Record<Status, ReactElement> = {
  check:   <CheckIcon />,
  partial: <PartialIcon />,
  cross:   <CrossIcon />,
};

/* ─── tab button ─────────────────────────────────────────────── */
function Tab({ id, label, active, onClick }: { id: string; label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
        active
          ? "bg-violet-600 text-white shadow-lg shadow-violet-900/40"
          : "text-gray-400 hover:text-white hover:bg-white/10"
      }`}
    >
      {label}
    </button>
  );
}

/* ─── main component ─────────────────────────────────────────── */
export default function ComparisonTable() {
  const [activeGroup, setActiveGroup] = useState("all");

  const visibleGroups =
    activeGroup === "all" ? GROUPS : GROUPS.filter((g) => g.id === activeGroup);

  return (
    <section className="py-24 bg-[#0D0D1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── heading ── */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-violet-400 mb-4">
            Competitor comparison
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            Why leading D2C brands<br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              {" "}choose Velocity
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-xl mx-auto">
            We&apos;re the only platform combining growth capital, shipping, payments, and AI — built for D2C.
          </p>
        </div>

        {/* ── score cards ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {COMPETITORS.map((c) => {
            const pct = Math.round((c.score / TOTAL) * 100);
            const isV = c.key === "velocity";
            return (
              <div
                key={c.key}
                className={`relative rounded-2xl p-5 overflow-hidden ${
                  isV
                    ? "bg-gradient-to-br from-violet-600 to-indigo-700"
                    : "bg-white/5 border border-white/10"
                }`}
              >
                {isV && (
                  <span className="absolute top-3 right-3 text-xs font-bold bg-white/20 text-white px-2.5 py-0.5 rounded-full">
                    ★ Best
                  </span>
                )}
                <p className={`text-xs font-medium mb-1 ${isV ? "text-indigo-200" : "text-gray-500"}`}>
                  {c.sub}
                </p>
                <p className={`font-bold text-lg mb-4 ${isV ? "text-white" : "text-gray-200"}`}>
                  {c.name}
                </p>
                <div className={`h-1 rounded-full mb-1.5 ${isV ? "bg-white/20" : "bg-white/10"}`}>
                  <div
                    className={`h-full rounded-full ${isV ? "bg-white" : "bg-white/30"}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <p className={`text-xs font-medium ${isV ? "text-indigo-200" : "text-gray-500"}`}>
                  {c.score}/{TOTAL} features
                </p>
              </div>
            );
          })}
        </div>

        {/* ── filter tabs ── */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[{ id: "all", label: "All features" }, ...GROUPS].map((g) => (
            <Tab
              key={g.id}
              id={g.id}
              label={g.label}
              active={activeGroup === g.id}
              onClick={() => setActiveGroup(g.id)}
            />
          ))}
        </div>

        {/* ── table ── */}
        <div className="rounded-2xl overflow-hidden border border-white/10">
          {/* column headers */}
          <div className="grid grid-cols-[2fr_1.8fr_1fr_1fr_1fr] bg-[#13132A]">
            <div className="px-6 py-5 text-sm text-gray-500 font-medium">Feature</div>
            {COMPETITORS.map((c) => (
              <div
                key={c.key}
                className={`px-4 py-5 text-center ${
                  c.key === "velocity"
                    ? "bg-gradient-to-b from-violet-600/30 to-indigo-600/10 border-x border-violet-500/30"
                    : ""
                }`}
              >
                <p className={`font-bold text-sm ${c.key === "velocity" ? "text-white" : "text-gray-400"}`}>
                  {c.name}
                </p>
                <p className={`text-xs mt-0.5 ${c.key === "velocity" ? "text-violet-300" : "text-gray-600"}`}>
                  {c.sub}
                </p>
              </div>
            ))}
          </div>

          {/* rows */}
          {visibleGroups.map((group, gi) => (
            <div key={group.id}>
              {/* group divider */}
              <div className="grid grid-cols-[2fr_1.8fr_1fr_1fr_1fr] bg-[#0F0F22] border-t border-white/5">
                <div className="px-6 py-3 col-span-5">
                  <span className="text-xs font-bold uppercase tracking-widest text-violet-500/70">
                    {group.label}
                  </span>
                </div>
              </div>

              {group.rows.map((row, ri) => (
                <div
                  key={`${gi}-${ri}`}
                  className="grid grid-cols-[2fr_1.8fr_1fr_1fr_1fr] border-t border-white/5 hover:bg-white/[0.02] transition-colors"
                >
                  {/* feature name */}
                  <div className="px-6 py-4 flex items-center text-sm font-medium text-gray-300">
                    {row.feature}
                  </div>
                  {/* cells */}
                  {COMPETITORS.map((c) => {
                    const cell = row[c.key];
                    return (
                      <div
                        key={c.key}
                        className={`px-4 py-4 flex flex-col items-center justify-center gap-1 ${
                          c.key === "velocity"
                            ? "border-x border-violet-500/20 bg-violet-600/5"
                            : ""
                        }`}
                      >
                        {ICON_MAP[cell.status]}
                        <span
                          className={`text-xs text-center leading-tight ${
                            c.key === "velocity" ? "text-violet-300 font-medium" : "text-gray-600"
                          }`}
                        >
                          {cell.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          ))}

          {/* footer score row */}
          <div className="grid grid-cols-[2fr_1.8fr_1fr_1fr_1fr] border-t-2 border-white/10 bg-[#0F0F22]">
            <div className="px-6 py-5 text-sm font-bold text-white">Overall score</div>
            {COMPETITORS.map((c) => (
              <div
                key={c.key}
                className={`px-4 py-5 flex items-center justify-center ${
                  c.key === "velocity"
                    ? "border-x border-violet-500/20 bg-violet-600/10"
                    : ""
                }`}
              >
                <span
                  className={`text-sm font-bold px-3 py-1.5 rounded-full ${
                    c.key === "velocity"
                      ? "bg-violet-600 text-white"
                      : "bg-white/10 text-gray-400"
                  }`}
                >
                  {c.score}/{TOTAL}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="/financing/apply"
            className="w-full sm:w-auto text-center bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold px-8 py-4 rounded-full transition-all shadow-xl shadow-violet-900/40"
          >
            Apply now — term sheet in 2 minutes →
          </a>
          <div className="flex items-center gap-5 text-sm text-gray-500">
            {["No equity dilution", "No collateral", "No personal guarantee"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <CheckIcon />
                <span className="text-gray-400">{t}</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
