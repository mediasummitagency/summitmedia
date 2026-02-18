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
import { ProblemCards } from "@/components/sections/ProblemCards";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Differentiator } from "@/components/sections/Differentiator";
import { WhatYouGet } from "@/components/sections/WhatYouGet";
import { MidCTA } from "@/components/sections/MidCTA";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemCards />
      <HowItWorks />
      <Differentiator />
      <WhatYouGet />
      <MidCTA />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
