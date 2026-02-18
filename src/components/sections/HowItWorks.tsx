"use client";

import { useEffect, useRef, useState } from "react";
import { Target, Route, PhoneCall, MailCheck, BarChart3 } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { AuroraBackground } from "@/components/ui/aurora-background";

const timelineData = [
  {
    id: 1,
    title: "Capture Demand",
    date: "Step 1",
    content:
      "We put your business in front of homeowners in your area who are actively looking for your service right now. Not shared leads. Not a bidding war. These people are only coming to you.",
    category: "Acquisition",
    icon: Target,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Route & Track",
    date: "Step 2",
    content:
      "Every lead is tagged, tracked, and routed to you instantly. You know exactly where they came from and what they need.",
    category: "Operations",
    icon: Route,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Answer & Qualify",
    date: "Step 3",
    content:
      "Speed wins. Our system makes sure leads get a response fast — before they move on to someone else.",
    category: "Response",
    icon: PhoneCall,
    relatedIds: [2, 4],
    status: "completed" as const,
    energy: 80,
  },
  {
    id: 4,
    title: "Follow Up",
    date: "Step 4",
    content:
      "Most contractors lose jobs because they never follow up. We build automated sequences that keep you top of mind.",
    category: "Nurture",
    icon: MailCheck,
    relatedIds: [3, 5],
    status: "completed" as const,
    energy: 85,
  },
  {
    id: 5,
    title: "Report Outcomes",
    date: "Step 5",
    content:
      "Every week you get a scorecard: how many leads came in, how many picked up, how many estimates you booked, how many closed, and what each booked job cost you. No fluff metrics. Just the numbers that hit your bank account.",
    category: "Analytics",
    icon: BarChart3,
    relatedIds: [4],
    status: "completed" as const,
    energy: 95,
  },
];

interface HowItWorksProps {
  sectionTitle?: string;
}

export function HowItWorks({
  sectionTitle = "How the Booked Jobs System Works",
}: HowItWorksProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="dark">
      <AuroraBackground className="h-auto py-20 !bg-black" showRadialGradient={true}>
        <section ref={sectionRef} className="relative z-10">
          <div className="max-w-5xl mx-auto px-6">
            <h2
              className="text-center text-2xl md:text-4xl font-bold text-white mb-4 transition-all duration-700 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(24px)",
              }}
            >
              {sectionTitle}
            </h2>
            <p
              className="text-center text-sm text-white/60 mb-8 transition-all duration-700 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(24px)",
                transitionDelay: "100ms",
              }}
            >
              Click any step to explore
            </p>
          </div>

          <div
            className="transition-all duration-700 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(24px)",
              transitionDelay: "200ms",
            }}
          >
            <RadialOrbitalTimeline timelineData={timelineData} isInView={isVisible} />
          </div>
        </section>
      </AuroraBackground>
    </div>
  );
}
