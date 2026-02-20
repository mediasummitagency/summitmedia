"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CtaButton } from "@/components/ui/cta-button";
import {
  Crosshair,
  LayoutTemplate,
  MousePointerClick,
  Zap,
  MailCheck,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

interface IncludedItem {
  text: string;
  icon: LucideIcon;
}

interface WhatYouGetProps {
  headline?: string;
  items?: IncludedItem[];
  note?: string;
}

const defaultItems: IncludedItem[] = [
  { text: "Targeted ad campaigns built for your service area and trade", icon: Crosshair },
  { text: "Custom landing pages designed to convert homeowners into leads", icon: LayoutTemplate },
  { text: "Lead tracking from first click to booked job", icon: MousePointerClick },
  { text: "Speed-to-lead system so no opportunity slips through", icon: Zap },
  { text: "Automated follow-up sequences to re-engage cold leads", icon: MailCheck },
  { text: "Weekly performance scorecard with real outcome metrics", icon: BarChart3 },
];

const defaultNote =
  "Every system is customized to your trade, your area, and your capacity. We'll build the right plan on our strategy call.";

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div
    aria-hidden
    className="relative mx-auto size-36 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
  >
    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.25)_1px,transparent_1px)] bg-[size:24px_24px]" />
    <div className="absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l border-white/20 bg-[#111]">
      {children}
    </div>
  </div>
);

function ScrollReveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [50, 0, 0, -50]);

  return (
    <motion.div ref={ref} style={{ opacity, y }} className={className}>
      {children}
    </motion.div>
  );
}

export function WhatYouGet({
  headline = "Everything We Build for You",
  items = defaultItems,
  note = defaultNote,
}: WhatYouGetProps) {
  return (
    <section className="bg-[#0a0a0a] py-16 md:py-32">
      <div className="@container mx-auto max-w-5xl px-6">
        <ScrollReveal className="text-center">
          <h2 className="text-balance text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            {headline}
          </h2>
          <p className="mt-4 text-zinc-400">
            {note}
          </p>
        </ScrollReveal>

        <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
          {items.map((item, i) => {
            const isLastAlone = items.length % 3 === 1 && i === items.length - 1;
            const Icon = item.icon;
            return (
              <ScrollReveal
                key={i}
                className={`group ${isLastAlone ? "@min-4xl:col-start-2" : ""}`}
              >
                <Card className="rounded-lg !bg-white/[0.04] border border-white/10 shadow-none transition-all duration-300 group-hover:!bg-white/[0.12] group-hover:border-[#ffd815]/40 group-hover:shadow-[0_8px_40px_rgba(255,216,21,0.1)] hover:scale-[1.03] hover:-translate-y-2.5">
                  <CardHeader className="pb-3">
                    <CardDecorator>
                      <Icon
                        className="size-6 text-[#ffd815]"
                        strokeWidth={2}
                        aria-hidden
                      />
                    </CardDecorator>
                  </CardHeader>

                  <CardContent>
                    <p className="text-base text-zinc-200 leading-relaxed">
                      {item.text}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal className="mt-14 md:mt-16 flex flex-col items-center text-center gap-5">
          <p className="text-lg text-zinc-300 max-w-xl">
            If you&apos;re doing over 200k a year and want a steady flow of
            high-quality leads without relying on word of mouth or marketplace
            platforms.
          </p>
          <CtaButton
            className="text-lg md:text-2xl px-10 md:px-16 py-4 md:py-5"
            onClick={() => {
              document.querySelector("#final-cta")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Check Availability
          </CtaButton>
          <p className="text-sm text-zinc-500">
            Limited spots per market, so you&apos;re never competing with another
            contractor on our system.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
