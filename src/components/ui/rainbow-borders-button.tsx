"use client";

import React from "react";

interface GlowBorderButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button = ({
  children = "Button",
  className = "",
  onClick,
}: GlowBorderButtonProps) => {
  return (
    <div className="relative inline-flex group">
      {/* Animated yellow border */}
      <span
        className="absolute -inset-[4px] rounded-full animate-[glow-sweep_6s_linear_infinite]"
        style={{
          background:
            "linear-gradient(45deg, #ffcc00, #ffe566, #ffd000, #ffcc00, #ffe566, #ffd000, #ffcc00, #ffe566)",
          backgroundSize: "400%",
        }}
      />
      {/* Blurred yellow glow */}
      <span
        className="absolute -inset-[6px] rounded-full opacity-100 blur-[28px] animate-[glow-sweep_6s_linear_infinite]"
        style={{
          background:
            "linear-gradient(45deg, #ffcc00, #ffe566, #ffd000, #ffcc00, #ffe566, #ffd000, #ffcc00, #ffe566)",
          backgroundSize: "400%",
        }}
      />
      <button
        onClick={onClick}
        className={`relative flex items-center justify-center gap-2.5 px-8 py-3 bg-white rounded-full border-none text-black cursor-pointer font-bold text-lg transition-all duration-200 ${className}`}
      >
        {children}
      </button>
    </div>
  );
};
