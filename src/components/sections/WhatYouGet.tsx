"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Crosshair,
  LayoutTemplate,
  MousePointerClick,
  Zap,
  MailCheck,
  BarChart3,
  UserCheck,
  type LucideIcon,
} from "lucide-react";
import { ReactNode } from "react";

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
  { text: "Dedicated point of contact who actually understands your business", icon: UserCheck },
];

const defaultNote =
  "Every system is customized to your trade, your area, and your capacity. We'll build the right plan on our strategy call.";

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div
    aria-hidden
    className="relative mx-auto size-36 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
  >
    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:24px_24px]" />
    <div className="absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l border-white/10 bg-[#0a0a0a]">
      {children}
    </div>
  </div>
);

export function WhatYouGet({
  headline = "What's Included",
  items = defaultItems,
  note = defaultNote,
}: WhatYouGetProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="bg-[#0a0a0a] py-16 md:py-32">
      <div className="@container mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-balance text-2xl md:text-4xl lg:text-5xl font-semibold text-white">
            {headline}
          </h2>
          <p className="mt-4 text-zinc-400">
            {note}
          </p>
        </motion.div>

        <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
          {items.map((item, i) => {
            const isLastAlone = items.length % 3 === 1 && i === items.length - 1;
            const Icon = item.icon;
            return (
            <motion.div
              key={i}
              className={isLastAlone ? "@min-4xl:col-start-2" : ""}
              initial={{ opacity: 0, y: 24 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
              }
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.1 + i * 0.08,
              }}
            >
              <Card className="group border-white/10 bg-transparent shadow-none">
                <CardHeader className="pb-3">
                  <CardDecorator>
                    <Icon
                      className="size-6 text-[#ffb900]"
                      strokeWidth={2}
                      aria-hidden
                    />
                  </CardDecorator>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {item.text}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
