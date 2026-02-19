"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "motion/react";

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

export function ProofSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20" style={{ background: "linear-gradient(135deg, #dceef8 0%, #c4d8e8 50%, #a8bfd0 100%)" }}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1F36] mb-6 text-center">
            Results in Real Businesses
            <br />
            Just Like Yours
          </h2>

          <p className="text-[#2D3250] text-lg leading-relaxed text-center max-w-3xl mx-auto">
            We created this system to generate leads for our own business. This
            past year we refined the system and tested it real business to
            generate high intent and qualified leads.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-14">
            <div className="text-center rounded-xl bg-white px-6 py-8 shadow-[0_4px_20px_rgba(0,0,0,0.12)]">
              <p className="text-4xl md:text-5xl font-bold text-[#1A1F36]">
                <CountUp target={600} prefix="$" suffix="K+" duration={2} />
              </p>
              <p className="text-sm text-[#6B7280] mt-2">Revenue Generated</p>
            </div>

            <div className="text-center rounded-xl bg-white px-6 py-8 shadow-[0_4px_20px_rgba(0,0,0,0.12)]">
              <p className="text-4xl md:text-5xl font-bold text-[#1A1F36]">
                5 Min
              </p>
              <p className="text-sm text-[#6B7280] mt-2">
                Avg. Lead Response Time
              </p>
            </div>

            <div className="text-center rounded-xl bg-white px-6 py-8 shadow-[0_4px_20px_rgba(0,0,0,0.12)]">
              <p className="text-4xl md:text-5xl font-bold text-[#1A1F36]">
                <CountUp target={100} suffix="%" duration={2} />
              </p>
              <p className="text-sm text-[#6B7280] mt-2">
                Exclusive Leads — Never Shared
              </p>
            </div>
          </div>

          <p className="text-[#2D3250] text-lg leading-relaxed text-center max-w-3xl mx-auto">
            Now we build it for contractors like you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
