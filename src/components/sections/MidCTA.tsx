"use client";

import { motion } from "motion/react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

interface MidCTAProps {
  headline?: string;
  subhead?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function MidCTA({
  headline = "Ready to Stop Guessing and Start Booking?",
  subhead = "We keep it tight — limited spots per market so our contractors aren't competing with each other. See if your area's still open.",
  ctaText = "Check Availability",
  ctaHref = "#final-cta",
}: MidCTAProps) {
  const handleClick = () => {
    const el = document.querySelector(ctaHref);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full bg-[#111111] py-16">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {headline}
        </motion.h2>

        <motion.p
          className="text-xl text-gray-200 mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          {subhead}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="mt-8"
        >
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="bg-[#ffb900] text-white flex items-center px-8 py-3 cursor-pointer"
            onClick={handleClick}
          >
            {ctaText}
          </HoverBorderGradient>
        </motion.div>
      </div>
    </section>
  );
}
