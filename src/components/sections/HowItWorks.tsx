"use client";

import { useEffect, useRef, useState } from "react";
import { Target, Route, PhoneCall, MailCheck, BarChart3 } from "lucide-react";
import { CtaButton } from "@/components/ui/cta-button";

const steps = [
  {
    title: "Capture Demand",
    description:
      "We put your business in front of homeowners actively searching for your service. No shared leads. No bidding wars, they're only coming to you.",
    icon: Target,
  },
  {
    title: "Route & Track",
    description:
      "Every lead is tagged, tracked, and routed to you instantly. You know exactly where they came from and what they need.",
    icon: Route,
  },
  {
    title: "Answer & Qualify",
    description:
      "Speed wins. Our system makes sure leads get a response fast — before they move on to someone else.",
    icon: PhoneCall,
  },
  {
    title: "Follow Up",
    description:
      "Most contractors lose jobs because they never follow up. We build automated sequences that keep you top of mind.",
    icon: MailCheck,
  },
  {
    title: "Report Outcomes",
    description:
      "Weekly review: leads in, estimates booked, jobs closed, and what each one cost you. The numbers that actually hit your bank account.",
    icon: BarChart3,
  },
];

const milestones = [
  { label: "Stranger", icon: Target },
  { label: "Lead Captured", icon: Route },
  { label: "Qualified", icon: PhoneCall },
  { label: "Followed Up", icon: MailCheck },
  { label: "Booked Job", icon: BarChart3 },
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
    <section ref={sectionRef} className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2
          className="text-center text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] mb-4 transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
          }}
        >
          {sectionTitle}
        </h2>
        <p
          className="text-center text-base text-[#6B7280] mb-2 transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transitionDelay: "100ms",
          }}
        >
          Five steps from stranger to booked job
        </p>

      </div>

      {/* Progress bar — hidden on mobile, too cramped for 5 milestone labels */}
      <div
        className="mt-10 mb-0 max-w-7xl mx-auto px-6 hidden md:block transition-all duration-700 ease-out"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(24px)",
          transitionDelay: "150ms",
        }}
      >
        <div className="relative flex">
          {/* Track line: runs from center of first node to center of last */}
          <div className="absolute top-5 left-[10%] right-[10%] h-1 rounded-full bg-[#E5E7EB]" />

          {/* Animated fill */}
          <div
            className="absolute top-5 left-[10%] right-[10%] h-1 rounded-full bg-[#111111] origin-left transition-transform duration-[2000ms] ease-out"
            style={{
              transform: isVisible ? "scaleX(1)" : "scaleX(0)",
            }}
          />

          {/* Milestone nodes — each takes 1/5 width to match the 5-col card grid */}
          {milestones.map((m, i) => {
            const Icon = m.icon;
            return (
              <div
                key={m.label}
                className="relative z-10 flex flex-col items-center flex-1"
              >
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-full border-2 bg-white transition-all duration-500 ease-out"
                  style={{
                    borderColor: isVisible ? "#111111" : "#E5E7EB",
                    transitionDelay: `${800 + i * 300}ms`,
                  }}
                >
                  <Icon
                    className="w-4 h-4 transition-colors duration-500"
                    style={{
                      color: isVisible ? "#111111" : "#9CA3AF",
                      transitionDelay: `${800 + i * 300}ms`,
                    }}
                  />
                </div>
                <span
                  className="mt-3 text-xs font-medium text-[#111111] text-center max-w-[3rem] md:max-w-none transition-opacity duration-500"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transitionDelay: `${800 + i * 300}ms`,
                  }}
                >
                  {m.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className="mt-12 max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 transition-all duration-700 ease-out"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(24px)",
          transitionDelay: "200ms",
        }}
      >
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.title}
              className="rounded-3xl border border-black/[0.06] bg-[#f4f4f5] p-3 shadow-[0_2px_20px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] cursor-default"
            >
              <div className="h-full rounded-2xl border border-black/[0.04] bg-white px-5 py-7">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#f4f4f5]">
                  <Icon className="h-5 w-5 text-[#111111]" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-[#111111]">
                  {step.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-[#6B7280]">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="mt-10 flex flex-col items-center text-center gap-5 px-6 transition-all duration-700 ease-out"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(24px)",
          transitionDelay: "400ms",
        }}
      >
        <p className="text-lg text-[#333333] max-w-xl">
          Try the Booked Jobs system risk-free. You don&apos;t pay until we
          generate your business leads.
        </p>
        <CtaButton
          className="text-lg md:text-2xl px-10 md:px-16 py-4 md:py-5"
          onClick={() => {
            document
              .querySelector("#final-cta")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Check Availability
        </CtaButton>
        <p className="text-sm text-[#6B7280]">
          Limited spots per market, so you&apos;re never competing with another
          contractor on our system.
        </p>
      </div>
    </section>
  );
}
