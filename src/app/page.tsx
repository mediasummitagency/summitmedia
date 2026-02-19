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
import { SlideTabs } from "@/components/ui/slide-tabs";

export default function Home() {
  return (
    <main>
      <Hero />
      <hr className="mx-auto w-full max-w-6xl border-t border-border" />
      <ProofSection />
      <PainPoints />
      <HowItWorks />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
