"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, animate } from "motion/react";

function CountUp({
  target,
  prefix = "",
  suffix = "",
  duration = 1.5,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });

    return () => controls.stop();
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

function ScrollReveal({
  children,
  scrollProgress,
  start,
  end,
}: {
  children: React.ReactNode;
  scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
}) {
  const opacity = useTransform(scrollProgress, [start, end], [0, 1]);
  const y = useTransform(scrollProgress, [start, end], [40, 0]);

  return <motion.div style={{ opacity, y }}>{children}</motion.div>;
}

export function ProofSection() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={ref} className="py-20 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal scrollProgress={scrollYProgress} start={0.05} end={0.2}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] mb-6 text-center">
            Results in Real Businesses
            <br />
            Just Like Yours
          </h2>
        </ScrollReveal>

        <ScrollReveal scrollProgress={scrollYProgress} start={0.08} end={0.25}>
          <p className="text-[#333333] text-lg leading-relaxed text-center max-w-3xl mx-auto">
            We created this system to generate leads for our own business. This
            past year we refined the system and tested it real business to
            generate high intent and qualified leads.
          </p>
        </ScrollReveal>

        <ScrollReveal scrollProgress={scrollYProgress} start={0.12} end={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-14">
            {[
              {
                content: <CountUp target={600} prefix="$" suffix="K+" duration={2} />,
                label: "Revenue Generated",
              },
              {
                content: "5 Min",
                label: "Avg. Lead Response Time",
              },
              {
                content: <CountUp target={100} suffix="%" duration={2} />,
                label: "Exclusive Leads — Never Shared",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="text-center rounded-2xl bg-white px-8 py-12 shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-shadow duration-300 hover:shadow-[0_16px_50px_rgba(0,0,0,0.22)]"
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <p className="text-5xl md:text-6xl font-bold text-[#111111]">
                  {card.content}
                </p>
                <p className="text-base text-[#6B7280] mt-3">{card.label}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal scrollProgress={scrollYProgress} start={0.15} end={0.32}>
          <p className="text-[#333333] text-lg leading-relaxed text-center max-w-3xl mx-auto">
            Now we build it for contractors like you.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
