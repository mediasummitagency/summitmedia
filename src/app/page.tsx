// Hero
// Problem Agitation
// How It Works
// Differentiator
// Social Proof
// What You Get
// Mid CTA
// FAQ
// Final CTA + Form
// Footer

import { Hero } from "@/components/sections/Hero";
import { PainPoints } from "@/components/sections/PainPoints";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { ProofSection } from "@/components/sections/ProofSection";
import { SectionDivider } from "@/components/ui/section-divider";
import { LineDivider } from "@/components/ui/line-divider";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <LineDivider />
      <ProofSection />
      <LineDivider />
      <PainPoints />
      <LineDivider />
      <HowItWorks />
      <FAQ />
      <FinalCTA />
      <SectionDivider topColor="#FFFFFF" bottomColor="#0a0a0a" />
      <Footer />
    </main>
  );
}
