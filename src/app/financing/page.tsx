import HeroSection from "@/components/financing/HeroSection";
import PressLogos from "@/components/financing/PressLogos";
import StatsBar from "@/components/financing/StatsBar";
import HowItWorks from "@/components/financing/HowItWorks";
import CustomerSegments from "@/components/financing/CustomerSegments";
import KeyBenefits from "@/components/financing/KeyBenefits";
import Testimonials from "@/components/financing/Testimonials";
import FeaturedIn from "@/components/financing/FeaturedIn";
import FAQ from "@/components/financing/FAQ";
import NBFCSection from "@/components/financing/NBFCSection";
import ComparisonTable from "@/components/financing/ComparisonTable";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financing | Velocity — Raise ₹10 Crores in 4 Days",
  description:
    "Raise dilution-free growth capital within 4 days. Up to ₹10 Crores. No equity, no personal guarantees. Apply now.",
};

export default function FinancingPage() {
  return (
    <>
      <HeroSection />
      <PressLogos />
      <StatsBar />
      <HowItWorks />
      <CustomerSegments />
      <KeyBenefits />
      <NBFCSection />
      <ComparisonTable />
      <Testimonials />
      <FeaturedIn />
      <FAQ />
    </>
  );
}
