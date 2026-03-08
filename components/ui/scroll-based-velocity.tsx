"use client";

import { cn } from "@/lib/utils";

interface VelocityScrollProps {
  text: string;
  default_velocity?: number;
  className?: string;
}

export function VelocityScroll({
  text,
  default_velocity = 5,
  className,
}: VelocityScrollProps) {
  // Calculate speed - slower values = slower animation
  const speed = Math.abs(default_velocity) * 15;
  const direction = default_velocity >= 0 ? "normal" : "reverse";

  return (
    <section className="relative w-full overflow-hidden">
      {/* Row 1 */}
      <div className="flex w-full overflow-hidden">
        <div 
          className="flex shrink-0 gap-4"
          style={{ 
            animation: `scroll-left ${speed}s linear infinite`,
            animationDirection: direction,
          }}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={`r1a-${i}`} className={cn("shrink-0 whitespace-nowrap px-4", className)}>
              {text}
            </span>
          ))}
        </div>
        <div 
          className="flex shrink-0 gap-4"
          style={{ 
            animation: `scroll-left ${speed}s linear infinite`,
            animationDirection: direction,
          }}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={`r1b-${i}`} className={cn("shrink-0 whitespace-nowrap px-4", className)}>
              {text}
            </span>
          ))}
        </div>
      </div>
      
      {/* Row 2 - opposite direction */}
      <div className="flex w-full overflow-hidden">
        <div 
          className="flex shrink-0 gap-4"
          style={{ 
            animation: `scroll-left ${speed}s linear infinite`,
            animationDirection: direction === "normal" ? "reverse" : "normal",
          }}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={`r2a-${i}`} className={cn("shrink-0 whitespace-nowrap px-4", className)}>
              {text}
            </span>
          ))}
        </div>
        <div 
          className="flex shrink-0 gap-4"
          style={{ 
            animation: `scroll-left ${speed}s linear infinite`,
            animationDirection: direction === "normal" ? "reverse" : "normal",
          }}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={`r2b-${i}`} className={cn("shrink-0 whitespace-nowrap px-4", className)}>
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
