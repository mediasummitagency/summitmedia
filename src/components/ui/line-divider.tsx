export function LineDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center py-10 bg-white ${className}`}>
      {/* Left dashed line */}
      <div className="flex-1 mx-6 sm:mx-12 lg:mx-24 h-px border-t border-dashed border-gray-300" />

      {/* Center icon with gap and shadow */}
      <div className="relative mx-2.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#111111] shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className="text-white"
        >
          <rect x="1" y="1" width="5" height="5" rx="1" fill="currentColor" />
          <rect x="8" y="1" width="5" height="5" rx="1" fill="currentColor" opacity="0.7" />
          <rect x="1" y="8" width="5" height="5" rx="1" fill="currentColor" opacity="0.7" />
          <rect x="8" y="8" width="5" height="5" rx="1" fill="currentColor" opacity="0.4" />
        </svg>
      </div>

      {/* Right dashed line */}
      <div className="flex-1 mx-6 sm:mx-12 lg:mx-24 h-px border-t border-dashed border-gray-300" />
    </div>
  );
}
