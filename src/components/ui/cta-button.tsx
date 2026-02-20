"use client";

import { useCallback, useRef } from "react";
import { cn } from "@/lib/utils";

interface CtaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  /** Hide the flanking animated arrows */
  hideArrows?: boolean;
  /** Add a subtle pulsing glow — useful when arrows are hidden */
  pulse?: boolean;
}

function AnimatedArrows({ direction }: { direction: "left" | "right" }) {
  const isLeft = direction === "left";
  const arrow = isLeft ? "→" : "←";

  return (
    <span
      className={cn(
        "pointer-events-none hidden sm:flex items-center gap-2 sm:gap-3",
        isLeft ? "mr-4 sm:mr-5" : "ml-4 sm:ml-5",
      )}
      aria-hidden
    >
      {[0, 1, 2].map((i) => {
        const delay = isLeft ? `${i * 0.4}s` : `${(2 - i) * 0.4}s`;
        return (
          <span
            key={i}
            className="cta-arrow inline-block text-2xl sm:text-3xl font-semibold text-gray-400"
            style={{ animationDelay: delay }}
          >
            {arrow}
          </span>
        );
      })}
    </span>
  );
}

export function CtaButton({
  children,
  className,
  onClick,
  hideArrows = false,
  pulse = false,
  ...props
}: CtaButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const btn = btnRef.current;
      if (!btn) return;

      const rect = btn.getBoundingClientRect();
      const diameter = Math.max(rect.width, rect.height) * 2.5;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement("span");
      Object.assign(ripple.style, {
        position: "absolute",
        width: `${diameter}px`,
        height: `${diameter}px`,
        left: `${x}px`,
        top: `${y}px`,
        transform: "translate(-50%, -50%) scale(0)",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 40%, rgba(255,255,255,0) 70%)",
        pointerEvents: "none",
        zIndex: "0",
      });

      btn.appendChild(ripple);

      ripple.animate(
        [
          { transform: "translate(-50%, -50%) scale(0)", opacity: 0.6 },
          { transform: "translate(-50%, -50%) scale(0.6)", opacity: 0.5, offset: 0.2 },
          { transform: "translate(-50%, -50%) scale(1.05)", opacity: 0.25, offset: 0.6 },
          { transform: "translate(-50%, -50%) scale(0.98)", opacity: 0.15, offset: 0.75 },
          { transform: "translate(-50%, -50%) scale(1)", opacity: 0 },
        ],
        {
          duration: 2200,
          easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          fill: "forwards",
        },
      ).onfinish = () => ripple.remove();

      onClick?.(e);
    },
    [onClick],
  );

  return (
    <span className="inline-flex items-center justify-center">
      {!hideArrows && <AnimatedArrows direction="left" />}
      <button
        ref={btnRef}
        className={cn(
          "relative overflow-hidden bg-[#111111] text-white font-bold rounded-full cursor-pointer",
          "transition-all duration-300 ease-out cta-ring-glow",
          "hover:scale-105 hover:bg-[#2a3050] hover:shadow-[0_8px_40px_rgba(26,31,54,0.45)]",
          "active:scale-95 active:shadow-[0_2px_10px_rgba(0,0,0,0.25),inset_0_2px_4px_rgba(0,0,0,0.15)] active:duration-100",
          pulse && "cta-pulse",
          className,
        )}
        onClick={handleClick}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </button>
      {!hideArrows && <AnimatedArrows direction="right" />}
    </span>
  );
}
