"use client";
import { useState } from "react";

const faqs = [
  {
    q: "What is Velocity's financing?",
    a: "Velocity facilitates financing for India's leading digital first businesses. We have financing products ranging from Rs. 10 lakh to Rs. 10 crores that fit your use case. Unlike traditional financing options like VCs and banks, our capital comes without any equity dilution.",
  },
  {
    q: "Who is eligible for Velocity financing?",
    a: "Any digital-first business generating healthy online revenues is eligible. This includes D2C brands, SaaS companies, EdTech platforms, and online restaurants. We look at your revenue history and growth trajectory — not your credit score.",
  },
  {
    q: "How fast can I get funded?",
    a: "You can get an indicative term sheet within 2 minutes of applying. Once you securely share your business data, we provide a binding offer within 4 days and disburse funds shortly after.",
  },
  {
    q: "Do I need to give up equity?",
    a: "No. Velocity's financing is 100% non-dilutive. You keep full ownership of your company. Repayments are made as a percentage of your future revenues — so they scale with your business.",
  },
  {
    q: "How are repayments collected?",
    a: "Repayments are automatically collected as a percentage of your online cashflows. This means when revenue is high you repay faster, and when it's lower you repay less — perfectly aligned with your business.",
  },
  {
    q: "What data do I need to share?",
    a: "You'll need to securely connect your e-commerce platforms (like Shopify, Amazon, etc.) and payment gateways. This is read-only access and is used purely to assess your revenue and underwrite the financing offer.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-velocity-blue font-semibold text-sm uppercase tracking-widest mb-2">FAQS</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-velocity-dark">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-4 font-semibold text-velocity-dark flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span>{faq.q}</span>
                <span className="text-velocity-blue text-xl ml-4 flex-shrink-0">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
