"use client";

import { motion } from "motion/react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { AuroraBackground } from "@/components/ui/aurora-background";

interface HeroProps {
  headline?: string;
  subhead?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function Hero({
  headline = "We Fill Your Calendar With Homeowners Ready to Hire",
  subhead = "We run a trades business just like you. We built a system that keeps our calendar full — and now we run it for other contractors. No shared leads. No wasted ad spend. Just estimates that actually show up.",
  ctaText = "Book a Free Strategy Call",
  ctaHref = "#final-cta",
}: HeroProps) {
  const handleClick = () => {
    const el = document.querySelector(ctaHref);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AuroraBackground className="md:min-h-screen bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="relative flex flex-col items-center justify-center text-center px-6"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-[#1A1F36] max-w-3xl leading-tight">
          {headline}
        </h1>

        <p className="text-lg md:text-xl text-[#6B7280] max-w-2xl mt-6">
          {subhead}
        </p>

        <div className="mt-10">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="bg-[#ffb900] text-white flex items-center px-8 py-3 cursor-pointer"
            onClick={handleClick}
          >
            {ctaText}
          </HoverBorderGradient>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
