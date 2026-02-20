interface SectionDividerProps {
  topColor: string;
  bottomColor: string;
  flip?: boolean;
  /** Adds a subtle shadow along the wave edge — useful for light-on-light transitions */
  shadow?: boolean;
  className?: string;
}

export function SectionDivider({
  topColor,
  bottomColor,
  flip = false,
  shadow = false,
  className = "",
}: SectionDividerProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-[0] ${className}`}
      style={{ background: topColor, marginTop: -1, marginBottom: -1 }}
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="block w-full h-[50px] md:h-[70px] lg:h-[100px]"
        style={flip ? { transform: "scaleX(-1)" } : undefined}
      >
        <path
          d="M0,0 C360,90 1080,10 1440,70 L1440,100 L0,100 Z"
          fill={bottomColor}
          style={shadow ? { filter: "drop-shadow(0px -2px 3px rgba(0,0,0,0.07))" } : undefined}
        />
      </svg>
    </div>
  );
}
