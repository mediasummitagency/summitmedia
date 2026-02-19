import { Hero } from "@/components/sections/Hero";
import { Blog7 } from "@/components/blocks/blog7";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Differentiator } from "@/components/sections/Differentiator";
import { WhatYouGet } from "@/components/sections/WhatYouGet";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { SlideTabs } from "@/components/ui/slide-tabs";

const problemData = {
  heading: "The Leads Aren't the Problem. The System Is.",
  description:
    "You're working hard, but the way leads come in — and get followed up on — is broken. Here's what that looks like for most contractors.",
  posts: [
    {
      id: "problem-1",
      title: "Feast or Famine",
      summary:
        "Slammed in April, dead in June. You know the cycle. One month you're booked three weeks out, the next you're wondering if you should start knocking doors again.",
      label: "Revenue Cycle",
      author: "",
      published: "",
      url: "#how-it-works",
      image: "https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg",
    },
    {
      id: "problem-2",
      title: "Leads That Go Nowhere",
      summary:
        "You're dropping $300+ a month on Angi or Thumbtack and half the leads don't pick up. The ones that do? They've got four other guys coming out to quote the same job.",
      label: "Wasted Ad Spend",
      author: "",
      published: "",
      url: "#how-it-works",
      image: "https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg",
    },
    {
      id: "problem-3",
      title: "No Follow-Up System",
      summary:
        "Lead comes in at 2 PM. You're on a job site with your hands full. By the time you call back at 6, they already booked the guy who answered first.",
      label: "Missed Opportunities",
      author: "",
      published: "",
      url: "#how-it-works",
      image: "https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg",
    },
    {
      id: "problem-4",
      title: "No Idea What's Working",
      summary:
        "You're spending money somewhere — maybe Google, maybe a directory, maybe a wrap on your truck — but you have no clue what's actually putting jobs on the calendar.",
      label: "Zero Visibility",
      author: "",
      published: "",
      url: "#how-it-works",
      image: "https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg",
    },
  ],
};

export default function FlooringPage() {
  return (
    <main>
      <nav className="flex justify-center pt-4">
        <SlideTabs />
      </nav>
      <Hero
        headline={
          <>
            Ready to Book More Flooring Jobs
            <br className="hidden md:block" /> Without Chasing Leads?
          </>
        }
        subhead="No shared leads. No bidding wars. Just homeowners in your area who need flooring service, sent exclusively to your business."
        ctaText="Book a Free Strategy Call"
      />
      <hr className="mx-auto w-full max-w-6xl border-t border-border" />
      <Blog7 {...problemData} />
      <HowItWorks />
      <Differentiator />
      <WhatYouGet />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
