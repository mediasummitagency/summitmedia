import React from "react";
import { cn } from "@/lib/utils";

interface FlippingCardProps {
  className?: string;
  cardClassName?: string;
  frontClassName?: string;
  backClassName?: string;
  height?: number;
  frontContent?: React.ReactNode;
  backContent?: React.ReactNode;
}

export function FlippingCard({
  className,
  cardClassName,
  frontClassName,
  backClassName,
  frontContent,
  backContent,
  height = 300,
}: FlippingCardProps) {
  return (
    <div
      className={cn(
        "group/flipping-card [perspective:1000px] w-full",
        className
      )}
      style={
        {
          "--height": `${height}px`,
        } as React.CSSProperties
      }
    >
      <div
        className={cn(
          "relative rounded-xl transition-all duration-700 [transform-style:preserve-3d] group-hover/flipping-card:[transform:rotateY(180deg)]",
          "h-[var(--height)] w-full",
          cardClassName
        )}
      >
        <div
          className={cn(
            "absolute inset-0 h-full w-full rounded-[inherit] [transform-style:preserve-3d] [backface-visibility:hidden] [transform:rotateY(0deg)]",
            frontClassName
          )}
        >
          <div className="[transform:translateZ(70px)_scale(.93)] h-full w-full">
            {frontContent}
          </div>
        </div>
        <div
          className={cn(
            "absolute inset-0 h-full w-full rounded-[inherit] [transform-style:preserve-3d] [backface-visibility:hidden] [transform:rotateY(180deg)]",
            backClassName
          )}
        >
          <div className="[transform:translateZ(70px)_scale(.93)] h-full w-full">
            {backContent}
          </div>
        </div>
      </div>
    </div>
  );
}
