"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { BeamsBackground } from "@/components/ui/beams-background";
import { Spotlight } from "@/components/blocks/spotlight-new";

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
    <BeamsBackground className="md:min-h-screen" intensity="subtle">
      <Spotlight />
      <div className="flex w-full md:min-h-screen items-center justify-center py-20 md:py-0 px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-white max-w-3xl leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {headline}
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-[#CCCCCC] max-w-2xl mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            {subhead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="mt-10"
          >
            <Button
              size="lg"
              className="bg-[#D4A843] text-white hover:bg-[#C4952E] rounded-lg text-base px-8 py-3 h-auto cursor-pointer"
              onClick={handleClick}
            >
              {ctaText}
            </Button>
          </motion.div>
        </div>
      </div>
    </BeamsBackground>
  );
}
