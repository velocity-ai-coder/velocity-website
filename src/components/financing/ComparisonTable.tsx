"use client";

import { useState, type ReactElement } from "react";

/* ─── icons ─────────────────────────────────────────────────── */
const CheckIcon = () => (
  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100">
    <svg className="w-3.5 h-3.5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </span>
);
const PartialIcon = () => (
  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-yellow-100">
    <svg className="w-3.5 h-3.5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
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

/* ─── types ──────────────────────────────────────────────────── */
type Status = "check" | "partial" | "cross";
type CompKey = "velocity" | "getvantage" | "klub" | "recur";
type Cell = { status: Status; label: string };
type Row = { feature: string } & Record<CompKey, Cell>;
type Group = { id: string; emoji: string; label: string; rows: Row[] };

/* ─── data ───────────────────────────────────────────────────── */
const GROUPS: Group[] = [
  {
    id: "capital",
    emoji: "💰",
    label: "Capital & Pricing",
    rows: [
      {
        feature: "Max funding amount",
        velocity: { status: "check", label: "₹10 Cr" },
        getvantage: { status: "partial", label: "₹20 Cr*" },
        klub: { status: "partial", label: "₹30 Cr" },
        recur: { status: "partial", label: "Varies" },
      },
      {
        feature: "Funding speed",
        velocity: { status: "check", label: "4 days" },
        getvantage: { status: "partial", label: "~5 days" },
        klub: { status: "partial", label: "48 hrs" },
        recur: { status: "partial", label: "48 hrs" },
      },
      {
        feature: "Pricing transparency",
        velocity: { status: "check", label: "5–8% flat, public" },
        getvantage: { status: "partial", label: "Flat fee, less clear" },
        klub: { status: "partial", label: "Product-dependent" },
        recur: { status: "cross", label: "Not prominent" },
      },
      {
        feature: "Term-sheet speed",
        velocity: { status: "check", label: "~2 minutes" },
        getvantage: { status: "partial", label: "Fast" },
        klub: { status: "partial", label: "Fast" },
        recur: { status: "partial", label: "Fast" },
      },
      {
        feature: "Repayment flexibility",
        velocity: { status: "check", label: "Revenue + fixed" },
        getvantage: { status: "check", label: "Multiple options" },
        klub: { status: "partial", label: "Revenue-linked" },
        recur: { status: "partial", label: "Product-dependent" },
      },
    ],
  },
  {
    id: "eligibility",
    emoji: "✅",
    label: "Eligibility & Process",
    rows: [
      {
        feature: "Equity dilution",
        velocity: { status: "check", label: "Zero" },
        getvantage: { status: "check", label: "None" },
        klub: { status: "check", label: "None" },
        recur: { status: "check", label: "None" },
      },
      {
        feature: "Collateral required",
        velocity: { status: "check", label: "None" },
        getvantage: { status: "partial", label: "No for RBF" },
        klub: { status: "partial", label: "No for RBF" },
        recur: { status: "check", label: "None" },
      },
      {
        feature: "Personal guarantee",
        velocity: { status: "check", label: "None" },
        getvantage: { status: "partial", label: "No for RBF" },
        klub: { status: "partial", label: "No for RBF" },
        recur: { status: "check", label: "None" },
      },
      {
        feature: "Pitch deck required",
        velocity: { status: "check", label: "No — data only" },
        getvantage: { status: "partial", label: "Digital process" },
        klub: { status: "check", label: "Not required" },
        recur: { status: "partial", label: "Digital" },
      },
      {
        feature: "NBFC / RBI regulated",
        velocity: { status: "check", label: "RBI-backed NBFC" },
        getvantage: { status: "partial", label: "Varies" },
        klub: { status: "partial", label: "Varies" },
        recur: { status: "partial", label: "Varies" },
      },
    ],
  },
  {
    id: "ecosystem",
    emoji: "🚀",
    label: "Ecosystem & Growth",
    rows: [
      {
        feature: "Integrated shipping",
        velocity: { status: "check", label: "ShipFast built-in" },
        getvantage: { status: "cross", label: "Not available" },
        klub: { status: "cross", label: "Not available" },
        recur: { status: "cross", label: "Not available" },
      },
      {
        feature: "Payments platform",
        velocity: { status: "check", label: "Velocity Payments" },
        getvantage: { status: "cross", label: "Not available" },
        klub: { status: "cross", label: "Not available" },
        recur: { status: "cross", label: "Not available" },
      },
      {
        feature: "AI & insights",
        velocity: { status: "check", label: "Vani AI + Insights" },
        getvantage: { status: "cross", label: "Limited" },
        klub: { status: "cross", label: "Limited" },
        recur: { status: "cross", label: "Limited" },
      },
      {
        feature: "D2C brand network",
        velocity: { status: "check", label: "4,000+ brands" },
        getvantage: { status: "partial", label: "Strong" },
        klub: { status: "partial", label: "Strong" },
        recur: { status: "partial", label: "Strong" },
      },
      {
        feature: "Repeat funding",
        velocity: { status: "check", label: "Scales with revenue" },
        getvantage: { status: "check", label: "Yes" },
        klub: { status: "check", label: "Yes" },
        recur: { status: "check", label: "Yes" },
      },
    ],
  },
];

const COMPETITORS: { key: CompKey; name: string; subtitle: string; score: number; total: number }[] = [
  { key: "velocity",   name: "Velocity",    subtitle: "Finance + Shipping + AI", score: 15, total: 15 },
  { key: "getvantage", name: "GetVantage",  subtitle: "Finance platform",        score: 9,  total: 15 },
  { key: "klub",       name: "Klub",        subtitle: "Capital platform",         score: 8,  total: 15 },
  { key: "recur",      name: "Recur Club",  subtitle: "Financing platform",       score: 8,  total: 15 },
];

const ICON_MAP: Record<Status, ReactElement> = {
  check:   <CheckIcon />,
  partial: <PartialIcon />,
  cross:   <CrossIcon />,
};

/* ─── component ─────────────────────────────────────────────── */
export default function ComparisonTable() {
  const [activeGroup, setActiveGroup] = useState("all");

  const visibleGroups =
    activeGroup === "all" ? GROUPS : GROUPS.filter((g) => g.id === activeGroup);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── heading ── */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-3">
            Competitor comparison
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3D3D6B]">
            Why founders choose Velocity
          </h2>
          <p className="mt-3 text-lg text-gray-500 max-w-xl mx-auto">
            We&apos;re not just a lender — we&apos;re your growth platform.
          </p>
        </div>

        {/* ── score cards ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {COMPETITORS.map((c) => {
            const pct = Math.round((c.score / c.total) * 100);
            const isVelocity = c.key === "velocity";
            return (
              <div
                key={c.key}
                className={`rounded-2xl p-5 text-center ${
                  isVelocity
                    ? "bg-[#3D3D6B] text-white shadow-xl shadow-indigo-200"
                    : "bg-white text-gray-700 border border-gray-200"
                }`}
              >
                <p className={`text-xs font-semibold mb-1 ${isVelocity ? "text-indigo-200" : "text-gray-400"}`}>
                  {c.subtitle}
                </p>
                <p className={`text-xl font-bold mb-3 ${isVelocity ? "text-white" : "text-[#3D3D6B]"}`}>
                  {c.name}
                </p>
                <div className={`h-1.5 rounded-full mb-2 ${isVelocity ? "bg-white/20" : "bg-gray-100"}`}>
                  <div
                    className={`h-full rounded-full ${isVelocity ? "bg-green-400" : "bg-gray-300"}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <p className={`text-xs font-medium ${isVelocity ? "text-indigo-200" : "text-gray-400"}`}>
                  {c.score}/{c.total} features
                </p>
              </div>
            );
          })}
        </div>

        {/* ── category filter tabs ── */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {[{ id: "all", emoji: "📋", label: "All features" }, ...GROUPS].map((g) => (
            <button
              key={g.id}
              onClick={() => setActiveGroup(g.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeGroup === g.id
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-indigo-300 hover:text-indigo-600"
              }`}
            >
              <span>{g.emoji}</span>
              {g.label}
            </button>
          ))}
        </div>

        {/* ── table ── */}
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white">
          <table className="w-full text-sm min-w-[680px]">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-6 py-5 text-left text-gray-500 font-medium w-[30%]">
                  Feature
                </th>
                {COMPETITORS.map((c) => (
                  <th
                    key={c.key}
                    className={`px-4 py-5 text-center w-[17.5%] ${
                      c.key === "velocity"
                        ? "bg-gradient-to-b from-indigo-600 to-indigo-700 text-white"
                        : "text-gray-600 bg-gray-50"
                    }`}
                  >
                    <div className="flex flex-col items-center gap-1">
                      {c.key === "velocity" && (
                        <span className="inline-flex items-center gap-1 bg-white/20 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full mb-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          Best overall
                        </span>
                      )}
                      <span className={`font-bold text-sm ${c.key === "velocity" ? "text-white" : "text-[#3D3D6B]"}`}>
                        {c.name}
                      </span>
                      <span className={`text-xs ${c.key === "velocity" ? "text-indigo-200" : "text-gray-400"}`}>
                        {c.subtitle}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {visibleGroups.map((group, gi) => (
                <>
                  <tr key={`g-${gi}`}>
                    <td
                      colSpan={5}
                      className="px-6 py-3 bg-gray-50 border-y border-gray-100"
                    >
                      <span className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
                        <span className="text-base">{group.emoji}</span>
                        {group.label}
                      </span>
                    </td>
                  </tr>
                  {group.rows.map((row, ri) => (
                    <tr
                      key={`${gi}-${ri}`}
                      className="border-b border-gray-100 last:border-0 hover:bg-gray-50/60 transition-colors"
                    >
                      <td className="px-6 py-4 font-medium text-[#3D3D6B]">
                        {row.feature}
                      </td>
                      {COMPETITORS.map((c) => {
                        const cell = row[c.key];
                        return (
                          <td
                            key={c.key}
                            className={`px-4 py-4 text-center ${
                              c.key === "velocity"
                                ? "bg-indigo-50/60 border-x border-indigo-100"
                                : ""
                            }`}
                          >
                            <div className="flex flex-col items-center gap-1.5">
                              {ICON_MAP[cell.status]}
                              <span
                                className={`text-xs leading-tight ${
                                  c.key === "velocity"
                                    ? "text-indigo-700 font-semibold"
                                    : "text-gray-500"
                                }`}
                              >
                                {cell.label}
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

            {/* summary footer row */}
            <tfoot>
              <tr className="border-t-2 border-gray-200 bg-gray-50">
                <td className="px-6 py-4 font-bold text-[#3D3D6B] text-sm">
                  Overall score
                </td>
                {COMPETITORS.map((c) => (
                  <td
                    key={c.key}
                    className={`px-4 py-4 text-center ${
                      c.key === "velocity" ? "bg-indigo-50 border-x border-indigo-100" : ""
                    }`}
                  >
                    <span
                      className={`inline-flex items-center justify-center font-bold text-sm px-3 py-1.5 rounded-full ${
                        c.key === "velocity"
                          ? "bg-indigo-600 text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {c.score}/{c.total}
                    </span>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>

        {/* ── bottom CTA ── */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/financing/apply"
            className="w-full sm:w-auto text-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3.5 rounded-full transition-colors shadow-lg shadow-indigo-200"
          >
            Apply now — get a term sheet in 2 minutes →
          </a>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-1.5"><CheckIcon /> No equity</span>
            <span className="flex items-center gap-1.5"><CheckIcon /> No collateral</span>
            <span className="flex items-center gap-1.5"><CheckIcon /> No guarantee</span>
          </div>
        </div>

      </div>
    </section>
  );
}
