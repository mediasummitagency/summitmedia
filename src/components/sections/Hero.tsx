"use client";

import React from "react";
import { motion } from "motion/react";
import { AuroraBackground } from "@/components/ui/aurora-background";

interface HeroProps {
  headline?: React.ReactNode;
  subhead?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function Hero({
  headline = <>Are You Ready to Fill Your Calendar<br className="hidden md:block" /> With Qualified Leads?</>,
  subhead = "No shared leads. No wasted ad spend. Just homeowners in your area who are ready to book — sent exclusively to you.",
  ctaText = "Book a Free Strategy Call",
  ctaHref = "#final-cta",
}: HeroProps) {
  const handleClick = () => {
    const el = document.querySelector(ctaHref);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AuroraBackground className="md:min-h-[80vh] bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="relative flex flex-col items-center justify-center text-center px-4 md:px-8 lg:px-12"
      >
        <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-black text-[#1A1F36] leading-[1.1] tracking-tight md:whitespace-nowrap">
          {headline}
        </h1>

        <p className="text-xl md:text-2xl text-[#4B5563] max-w-2xl mt-6">
          {subhead}
        </p>

        <div className="mt-10 flex flex-col items-center gap-3">
          <button
            onClick={handleClick}
            className="bg-[#ffd815] text-black font-bold text-2xl px-16 py-5 rounded-full cursor-pointer transition-colors duration-200 hover:bg-[#e6c213]"
          >
            {ctaText}
          </button>
          <p className="text-base text-[#4B5563] italic">
            Built by contractors. Run by contractors.
          </p>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
