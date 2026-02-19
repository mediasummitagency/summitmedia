"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface DifferentiatorProps {
  headline?: string;
  paragraphs?: string[];
  closingLine?: string;
}

const defaultParagraphs = [
  "We run Summit Home Services, our own contracting business in central New Jersey. This isn't something we read about in a course. We built the Booked Jobs System because we were tired of the same problems you're dealing with right now.",
  "We've been on a job site since 7 AM and still checking our ad performance at 10 PM. We've had the no-shows. We've chased the tire-kickers. We've lost jobs to guys who just happened to answer the phone faster. So we built a system that fixed all of it — for our business first, and now we run it for yours.",
];

export function Differentiator({
  headline = "We're Not an Agency. We're Contractors.",
  paragraphs = defaultParagraphs,
  closingLine = "You're not going to be on a call with some account manager reading off a script. You're talking to people who do this work.",
}: DifferentiatorProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-[#1A1F36] mb-10 text-center">
            {headline}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {paragraphs.map((text, i) => (
              <p
                key={i}
                className="text-[#2D3250] text-lg leading-relaxed text-center"
              >
                {text}
              </p>
            ))}
          </div>

          <p className="text-[#1A1F36] font-semibold text-lg text-center">
            {closingLine}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
