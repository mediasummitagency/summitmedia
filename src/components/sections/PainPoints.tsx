"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const painPoints = [
  {
    heading: "if you\u2019re struggling to get enough leads",
    body: "You\u2019re good at your trade, but the phone isn\u2019t ringing the way it should. Word of mouth got you started, but it can\u2019t fill your calendar consistently. We put your business in front of homeowners who are actively searching for your service\u00a0\u2014 so the work comes to you.",
  },
  {
    heading: "if you\u2019re wasting money on leads that aren\u2019t worth your time",
    body: "You\u2019re paying for Angi, Thumbtack, or HomeAdvisor and getting the same recycled leads your competitors are getting. Half don\u2019t pick up. The other half are price shopping. We build your own pipeline\u00a0\u2014 every lead is exclusively yours, and they\u2019re already looking for what you do.",
  },
  {
    heading: "if you\u2019re losing jobs because you can\u2019t respond fast enough",
    body: "Leads come in while you\u2019re on a job site. By the time you call back, they\u2019ve already booked someone else. Our system responds to new leads instantly and keeps them engaged until you\u2019re ready to talk\u00a0\u2014 so you stop losing work to whoever just happened to answer first.",
  },
  {
    heading: "if you have no idea what\u2019s actually working",
    body: "You\u2019re spending money on marketing but you can\u2019t connect the dots between what you\u2019re spending and what\u2019s landing on your calendar. We track every lead from first click to booked job and send you a weekly scorecard\u00a0\u2014 so you always know exactly what each job cost you to win.",
  },
];

function PainPointCard({
  item,
  index,
  scrollProgress,
}: {
  item: (typeof painPoints)[number];
  index: number;
  scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const isLeft = index % 2 === 0;
  const direction = isLeft ? -1 : 1;

  const xPercent = useTransform(
    scrollProgress,
    [0.05, 0.3, 0.7, 0.95],
    [100 * direction, 0, 0, 100 * direction]
  );
  const opacity = useTransform(
    scrollProgress,
    [0.05, 0.25, 0.75, 0.95],
    [0, 1, 1, 0]
  );

  return (
    <motion.div
      style={{ x: useTransform(xPercent, (v) => `${v}%`), opacity }}
      className="h-full rounded-3xl border border-white/10 bg-[#111214] p-4 md:p-5 shadow-[0_2px_20px_rgba(0,0,0,0.15)]"
    >
      <div className="h-full rounded-2xl border border-white/[0.06] bg-[#1a1c1f] px-6 py-8 md:px-8 md:py-10">
        <h3 className="mb-4 text-center text-lg font-semibold text-white md:text-xl leading-snug">
          {item.heading}
        </h3>
        <p className="leading-relaxed text-white/55 text-[15px]">
          {item.body}
        </p>
      </div>
    </motion.div>
  );
}

const PainPoints = () => {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const headingOpacity = useTransform(scrollYProgress, [0.05, 0.25, 0.75, 0.95], [0, 1, 1, 0]);
  const headingY = useTransform(scrollYProgress, [0.05, 0.25, 0.75, 0.95], [24, 0, 0, -24]);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div style={{ opacity: headingOpacity, y: headingY }}>
          <h2 className="text-center text-4xl font-bold tracking-tight text-[#111111] md:text-5xl lg:text-6xl">
            The Booked Jobs System is
            <br />
            Built for You
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 md:gap-8 [grid-auto-rows:1fr]">
          {painPoints.map((item, i) => (
            <PainPointCard
              key={i}
              item={item}
              index={i}
              scrollProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { PainPoints };
