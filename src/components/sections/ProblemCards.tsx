"use client";

import { useEffect, useRef, useState } from "react";
import { RefreshCw, PhoneOff, Clock, HelpCircle, type LucideIcon } from "lucide-react";
import { FlippingCard } from "@/components/ui/flipping-card";

const iconMap: Record<string, LucideIcon> = {
  RefreshCw,
  PhoneOff,
  Clock,
  HelpCircle,
};

interface CardData {
  icon: string;
  title: string;
  body: string;
}

interface ProblemCardsProps {
  sectionTitle?: string;
  cards?: CardData[];
}

const defaultCards: CardData[] = [
  {
    icon: "RefreshCw",
    title: "Feast or Famine",
    body: "Slammed in April, dead in June. You know the cycle. One month you're booked three weeks out, the next you're wondering if you should start knocking doors again.",
  },
  {
    icon: "PhoneOff",
    title: "Leads That Go Nowhere",
    body: "You're dropping $300+ a month on Angi or Thumbtack and half the leads don't pick up. The ones that do? They've got four other guys coming out to quote the same job.",
  },
  {
    icon: "Clock",
    title: "No Follow-Up System",
    body: "Lead comes in at 2 PM. You're on a job site with your hands full. By the time you call back at 6, they already booked the guy who answered first.",
  },
  {
    icon: "HelpCircle",
    title: "No Idea What's Working",
    body: "You're spending money somewhere — maybe Google, maybe a directory, maybe a wrap on your truck — but you have no clue what's actually putting jobs on the calendar.",
  },
];

function FadeInCard({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="transition-all duration-700 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(24px)",
        transitionDelay: `${index * 120}ms`,
      }}
    >
      {children}
    </div>
  );
}

function CardFront({ icon, title }: { icon: string; title: string }) {
  const Icon = iconMap[icon];

  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-8 text-center">
      {Icon && <Icon size={40} className="text-[#D4A843] mb-4" strokeWidth={1.5} />}
      <h3 className="text-xl font-semibold text-[#1A1F36]">{title}</h3>
    </div>
  );
}

function CardBack({ body }: { body: string }) {
  return (
    <div className="flex items-center justify-center h-full w-full p-8">
      <p className="text-[#2D3250] text-base leading-relaxed text-center">{body}</p>
    </div>
  );
}

export function ProblemCards({
  sectionTitle = "Sound Familiar?",
  cards = defaultCards,
}: ProblemCardsProps) {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-2xl md:text-4xl font-bold text-[#1A1F36] mb-12">
          {sectionTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <FadeInCard key={card.title} index={i}>
              <FlippingCard
                height={260}
                frontContent={<CardFront icon={card.icon} title={card.title} />}
                backContent={<CardBack body={card.body} />}
              />
            </FadeInCard>
          ))}
        </div>
      </div>
    </section>
  );
}
