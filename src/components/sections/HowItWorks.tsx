"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";
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

function useIsMobile(breakpoint = 640) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    setIsMobile(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [breakpoint]);

  return isMobile;
}

function ScrollReveal({
  children,
  className,
  isMobile,
}: {
  children: ReactNode;
  className?: string;
  isMobile: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, -80]);

  return (
    <motion.div
      ref={ref}
      style={isMobile ? { opacity, y } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ProgressBar() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
  const fillScale = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="mt-10 mb-0 max-w-7xl mx-auto px-6 hidden md:block"
    >
      <div className="relative flex">
        <div className="absolute top-5 left-[10%] right-[10%] h-1 rounded-full bg-[#E5E7EB]" />

        <motion.div
          className="absolute top-5 left-[10%] right-[10%] h-1 rounded-full bg-[#111111] origin-left"
          style={{ scaleX: fillScale }}
        />

        {milestones.map((m, i) => {
          const Icon = m.icon;
          return (
            <div
              key={m.label}
              className="relative z-10 flex flex-col items-center flex-1"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#111111] bg-white">
                <Icon className="w-4 h-4 text-[#111111]" />
              </div>
              <span className="mt-3 text-xs font-medium text-[#111111] text-center max-w-[3rem] md:max-w-none">
                {m.label}
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export function HowItWorks({
  sectionTitle = "What You'll Get With the Booked Jobs System",
}: HowItWorksProps) {
  const isMobile = useIsMobile();

  return (
    <section className="bg-white py-20">
      <ScrollReveal isMobile={isMobile} className="max-w-5xl mx-auto px-6">
        <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] mb-4">
          {sectionTitle}
        </h2>
        <p className="text-center text-base text-[#6B7280] mb-2">
          Five steps from stranger to booked job
        </p>
      </ScrollReveal>

      <ProgressBar />

      <div className="mt-12 max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <ScrollReveal key={step.title} isMobile={isMobile}>
              <div className="h-full rounded-3xl border border-black/[0.06] bg-[#f4f4f5] p-3 shadow-[0_2px_20px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] cursor-default">
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
            </ScrollReveal>
          );
        })}
      </div>

      <ScrollReveal isMobile={isMobile} className="mt-10 flex flex-col items-center text-center gap-5 px-6">
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
      </ScrollReveal>
    </section>
  );
}
