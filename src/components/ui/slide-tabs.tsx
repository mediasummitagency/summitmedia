"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface Position {
  left: number;
  width: number;
  opacity: number;
}

const tabs = [
  { label: "Home", href: "/" },
  { label: "Flooring", href: "/flooring" },
  { label: "Features", href: "#" },
  { label: "Docs", href: "#" },
  { label: "Blog", href: "#" },
];

export const SlideTabs = () => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [selected, setSelected] = useState(0);
  const tabsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const selectedTab = tabsRef.current[selected];
    if (selectedTab) {
      const { width } = selectedTab.getBoundingClientRect();
      setPosition({
        left: selectedTab.offsetLeft,
        width,
        opacity: 1,
      });
    }
  }, [selected]);

  return (
    <ul
      onMouseLeave={() => {
        const selectedTab = tabsRef.current[selected];
        if (selectedTab) {
          const { width } = selectedTab.getBoundingClientRect();
          setPosition({
            left: selectedTab.offsetLeft,
            width,
            opacity: 1,
          });
        }
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1 dark:border-white dark:bg-neutral-800"
    >
      {tabs.map((tab, i) => (
        <Tab
          key={tab.label}
          ref={(el) => { tabsRef.current[i] = el; }}
          setPosition={setPosition}
          onClick={() => setSelected(i)}
          href={tab.href}
        >
          {tab.label}
        </Tab>
      ))}

      <Cursor position={position} />
    </ul>
  );
};

interface TabProps {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
  onClick: () => void;
  href: string;
}

const Tab = React.forwardRef<HTMLLIElement, TabProps>(
  ({ children, setPosition, onClick, href }, ref) => {
    return (
      <li
        ref={ref}
        onClick={onClick}
        onMouseEnter={() => {
          if (!ref || typeof ref === "function" || !ref.current) return;

          const { width } = ref.current.getBoundingClientRect();

          setPosition({
            left: ref.current.offsetLeft,
            width,
            opacity: 1,
          });
        }}
        className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
      >
        <Link href={href}>{children}</Link>
      </li>
    );
  }
);

Tab.displayName = "Tab";

const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-black dark:bg-white md:h-12"
    />
  );
};
