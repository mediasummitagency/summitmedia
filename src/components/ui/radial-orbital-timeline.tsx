"use client";
import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
  isInView?: boolean;
}

export default function RadialOrbitalTimeline({
  timelineData,
  isInView = false,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {}
  );
  const [viewMode, setViewMode] = useState<"orbital">("orbital");
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [centerOffset, setCenterOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const [orbitLocked, setOrbitLocked] = useState(false);
  const [isPointerFine, setIsPointerFine] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setIsPointerFine(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsPointerFine(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (isInView && !orbitLocked) {
      setOrbitLocked(true);
      setAutoRotate(false);
      setRotationAngle(270);
    }
  }, [isInView, orbitLocked]);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      if (!orbitLocked) {
        setAutoRotate(true);
      }
    }
  };

  const activateItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState: Record<number, boolean> = {};
      Object.keys(prev).forEach((key) => {
        newState[parseInt(key)] = false;
      });
      newState[id] = true;
      return newState;
    });
    setActiveNodeId(id);

    if (!orbitLocked) {
      setAutoRotate(false);
      centerViewOnNode(id);
    }

    const relatedItems = getRelatedItems(id);
    const newPulseEffect: Record<number, boolean> = {};
    relatedItems.forEach((relId) => {
      newPulseEffect[relId] = true;
    });
    setPulseEffect(newPulseEffect);
  };

  const deactivateItem = () => {
    setExpandedItems({});
    setActiveNodeId(null);
    if (!orbitLocked) {
      setAutoRotate(true);
    }
    setPulseEffect({});
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        if (!orbitLocked) {
          setAutoRotate(false);
          centerViewOnNode(id);
        }

        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);
      } else {
        setActiveNodeId(null);
        if (!orbitLocked) {
          setAutoRotate(true);
        }
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer: NodeJS.Timeout;

    if (autoRotate && viewMode === "orbital") {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.3) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate, viewMode]);

  const centerViewOnNode = (nodeId: number) => {
    if (viewMode !== "orbital" || !nodeRefs.current[nodeId]) return;

    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 250;
    const radian = (angle * Math.PI) / 180;

    const x = Math.round((radius * Math.cos(radian) + centerOffset.x) * 100) / 100;
    const y = Math.round((radius * Math.sin(radian) + centerOffset.y) * 100) / 100;

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.round(Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))) * 1000) / 1000;

    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };


  return (
    <div
      className="w-full h-[750px] flex flex-col items-center justify-center overflow-visible"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{
            perspective: "1000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
        >
          {/* Central orb */}
          <div className="absolute w-16 h-16 rounded-full bg-[#D4A843] animate-pulse flex items-center justify-center z-10">
            <div className="absolute w-20 h-20 rounded-full border border-[#D4A843]/20 animate-ping opacity-70"></div>
            <div
              className="absolute w-24 h-24 rounded-full border border-[#D4A843]/10 animate-ping opacity-50"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md"></div>
          </div>

          {/* Orbit ring */}
          <div className="absolute w-[500px] h-[500px] rounded-full border border-white/15"></div>

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;
            const isBottomHalf = position.y > 30;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded || orbitLocked ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                ref={(el) => { nodeRefs.current[item.id] = el; }}
                className="absolute transition-all duration-700 cursor-pointer"
                style={nodeStyle}
                onMouseEnter={isPointerFine ? () => activateItem(item.id) : undefined}
                onMouseLeave={isPointerFine ? () => deactivateItem() : undefined}
                onClick={!isPointerFine ? (e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                } : undefined}
              >
                {/* Energy field glow */}
                <div
                  className={`absolute rounded-full -inset-1 ${
                    isPulsing ? "animate-pulse duration-1000" : ""
                  }`}
                  style={{
                    background: `radial-gradient(circle, rgba(212,168,67,0.15) 0%, rgba(212,168,67,0) 70%)`,
                    width: `${item.energy * 0.5 + 40}px`,
                    height: `${item.energy * 0.5 + 40}px`,
                    left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                    top: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                  }}
                ></div>

                {/* Node circle */}
                <div
                  className={`
                  w-10 h-10 rounded-full flex items-center justify-center
                  ${
                    isExpanded
                      ? "bg-[#D4A843] text-white"
                      : isRelated
                      ? "bg-[#D4A843]/20 text-white"
                      : "bg-white/10 text-white"
                  }
                  border-2 
                  ${
                    isExpanded
                      ? "border-[#D4A843] shadow-lg shadow-[#D4A843]/30"
                      : isRelated
                      ? "border-[#D4A843] animate-pulse"
                      : "border-white/20"
                  }
                  transition-all duration-300 transform
                  ${isExpanded ? "scale-150" : ""}
                `}
                >
                  <Icon size={16} />
                </div>

                {/* Node title label */}
                <div
                  className={`
                  absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-center
                  text-xs font-semibold tracking-wider
                  transition-all duration-300
                  ${isBottomHalf ? "bottom-12" : "top-12"}
                  ${isExpanded ? "text-white scale-125" : "text-white/90"}
                `}
                >
                  {item.title}
                </div>

                {/* Expanded card */}
                {isExpanded && (
                  <Card className={`absolute left-1/2 -translate-x-1/2 w-72 h-56 bg-black/60 backdrop-blur-xl border-white/10 shadow-xl shadow-black/20 overflow-visible flex flex-col ${isBottomHalf ? "bottom-20" : "top-20"}`}>
                    <div className={`absolute left-1/2 -translate-x-1/2 w-px h-3 bg-white/20 ${isBottomHalf ? "-bottom-3" : "-top-3"}`}></div>
                    <CardHeader className="pb-2 flex-shrink-0">
                      <span className="text-xs font-mono text-white/50">
                        {item.date}
                      </span>
                      <CardTitle className="text-sm mt-1 text-white">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs text-white/80 flex-1 overflow-y-auto">
                      <p>{item.content}</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
