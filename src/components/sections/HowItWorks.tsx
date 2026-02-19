"use client";

import { useEffect, useRef, useState } from "react";
import { Target, Route, PhoneCall, MailCheck, BarChart3 } from "lucide-react";
import {
  FeaturesSectionWithHoverEffects,
  type FeatureItem,
} from "@/components/blocks/feature-section-with-hover-effects";
import { AuroraBackground } from "@/components/ui/aurora-background";

const steps: FeatureItem[] = [
  {
    title: "Capture Demand",
    description:
      "We put your business in front of homeowners actively searching for your service. No shared leads. No bidding wars, they're only coming to you.",
    icon: <Target />,
  },
  {
    title: "Route & Track",
    description:
      "Every lead is tagged, tracked, and routed to you instantly. You know exactly where they came from and what they need.",
    icon: <Route />,
  },
  {
    title: "Answer & Qualify",
    description:
      "Speed wins. Our system makes sure leads get a response fast — before they move on to someone else.",
    icon: <PhoneCall />,
  },
  {
    title: "Follow Up",
    description:
      "Most contractors lose jobs because they never follow up. We build automated sequences that keep you top of mind.",
    icon: <MailCheck />,
  },
  {
    title: "Report Outcomes",
    description:
      "Weekly review: leads in, estimates booked, jobs closed, and what each one cost you. The numbers that actually hit your bank account.",
    icon: <BarChart3 />,
  },
];

interface HowItWorksProps {
  sectionTitle?: string;
}

export function HowItWorks({
  sectionTitle = "What You'll Get With the Booked Jobs System",
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
              className="text-center text-base text-white/80 mb-2 transition-all duration-700 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(24px)",
                transitionDelay: "100ms",
              }}
            >
              Five steps from stranger to booked job
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
            <FeaturesSectionWithHoverEffects features={steps} />
          </div>
        </section>
      </AuroraBackground>
    </div>
  );
}
