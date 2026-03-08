"use client"

import * as React from "react"
import { motion, AnimatePresence, type PanInfo } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

type Testimonial = {
  id: number
  quote: string
  author: string
  company: string
  industry: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "OWR has fundamentally changed how we approach secure communications. The peace of mind is invaluable.",
    author: "Chief Security Officer",
    company: "Fortune 100 Financial Institution",
    industry: "Finance",
  },
  {
    id: 2,
    quote: "In our line of work, a single breach can have catastrophic consequences. OWR delivers the security we need.",
    author: "Director of Operations",
    company: "European Government Agency",
    industry: "Government",
  },
  {
    id: 3,
    quote: "The level of encryption and the Swiss data sovereignty gives us confidence in protecting our clients.",
    author: "Managing Partner",
    company: "International Law Firm",
    industry: "Legal",
  },
  {
    id: 4,
    quote: "After evaluating every secure device on the market, OWR was the clear choice for our executive team.",
    author: "VP of Information Security",
    company: "Global Technology Company",
    industry: "Technology",
  },
  {
    id: 5,
    quote: "The seamless integration with our existing security infrastructure exceeded all expectations.",
    author: "Head of IT Security",
    company: "Swiss Private Bank",
    industry: "Banking",
  },
]

function wrap(min: number, max: number, v: number) {
  const rangeSize = max - min
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
}

const BASE_SPRING = {
  type: "spring" as const,
  stiffness: 300,
  damping: 30,
  mass: 1,
}

const TAP_SPRING = {
  type: "spring" as const,
  stiffness: 450,
  damping: 18,
  mass: 1,
}

export default function TestimonialsRail() {
  const [active, setActive] = React.useState(0)
  const [isHovering, setIsHovering] = React.useState(false)
  const lastWheelTime = React.useRef<number>(0)

  const count = TESTIMONIALS.length
  const activeIndex = wrap(0, count, active)
  const activeItem = TESTIMONIALS[activeIndex]

  const handlePrev = React.useCallback(() => {
    setActive((p) => p - 1)
  }, [])

  const handleNext = React.useCallback(() => {
    setActive((p) => p + 1)
  }, [])

  const onWheel = React.useCallback(
    (e: React.WheelEvent) => {
      const now = Date.now()
      if (now - lastWheelTime.current < 400) return

      const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY)
      const delta = isHorizontal ? e.deltaX : e.deltaY

      if (Math.abs(delta) > 20) {
        if (delta > 0) {
          handleNext()
        } else {
          handlePrev()
        }
        lastWheelTime.current = now
      }
    },
    [handleNext, handlePrev]
  )

  React.useEffect(() => {
    if (isHovering) return
    const timer = setInterval(() => handleNext(), 5000)
    return () => clearInterval(timer)
  }, [isHovering, handleNext])

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrev()
    if (e.key === "ArrowRight") handleNext()
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const onDragEnd = (e: MouseEvent | TouchEvent | PointerEvent, { offset, velocity }: PanInfo) => {
    const swipe = swipePower(offset.x, velocity.x)

    if (swipe < -swipeConfidenceThreshold) {
      handleNext()
    } else if (swipe > swipeConfidenceThreshold) {
      handlePrev()
    }
  }

  const visibleIndices = [-2, -1, 0, 1, 2]

  return (
    <div
      className="group relative flex h-[650px] w-full flex-col overflow-hidden bg-[#030303] text-white outline-none select-none"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onWheel={onWheel}
    >
      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent" />
        <motion.div
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      {/* Header */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 pt-16 md:px-12">
        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">Client Stories</p>
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          What our clients say.
        </h2>
      </div>

      {/* Main Stage */}
      <div className="relative z-10 flex flex-1 flex-col justify-center px-4 md:px-8">
        {/* DRAGGABLE RAIL CONTAINER */}
        <motion.div
          className="relative mx-auto flex h-[320px] w-full max-w-6xl items-center justify-center cursor-grab active:cursor-grabbing"
          style={{ perspective: "1200px" }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={onDragEnd}
        >
          {visibleIndices.map((offset) => {
            const absIndex = active + offset
            const index = wrap(0, count, absIndex)
            const item = TESTIMONIALS[index]

            const isCenter = offset === 0
            const dist = Math.abs(offset)

            const xOffset = offset * 280
            const zOffset = -dist * 150
            const scale = isCenter ? 1 : 0.85
            const rotateY = offset * -15

            const opacity = isCenter ? 1 : Math.max(0.2, 1 - dist * 0.4)
            const blur = isCenter ? 0 : dist * 4

            return (
              <motion.div
                key={absIndex}
                className={cn(
                  "absolute flex aspect-[4/5] w-[240px] flex-col justify-between rounded-2xl border bg-gradient-to-br p-6 shadow-2xl transition-shadow duration-300 md:w-[280px]",
                  isCenter 
                    ? "z-20 border-emerald-500/30 from-emerald-500/10 via-white/5 to-transparent shadow-emerald-500/10" 
                    : "z-10 border-white/10 from-white/5 via-transparent to-transparent"
                )}
                initial={false}
                animate={{
                  x: xOffset,
                  z: zOffset,
                  scale: scale,
                  rotateY: rotateY,
                  opacity: opacity,
                  filter: `blur(${blur}px)`,
                }}
                transition={(val) => {
                  if (val === "scale") return TAP_SPRING
                  return BASE_SPRING
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
                onClick={() => {
                  if (offset !== 0) setActive((p) => p + offset)
                }}
              >
                {/* Quote Icon */}
                <svg className="h-8 w-8 text-emerald-400/40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                {/* Quote Text */}
                <p className="flex-1 py-4 text-sm leading-relaxed text-white/70">
                  {`"${item.quote}"`}
                </p>

                {/* Author Info */}
                <div className="border-t border-white/10 pt-4">
                  <div className="mb-2 inline-block rounded-full bg-emerald-500/10 px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider text-emerald-400">
                    {item.industry}
                  </div>
                  <p className="text-sm font-medium text-white">{item.author}</p>
                  <p className="text-xs text-white/40">{item.company}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Controls */}
        <div className="mx-auto mt-8 flex w-full max-w-4xl items-center justify-center gap-4 pointer-events-auto">
          <div className="flex items-center gap-1 rounded-full bg-white/5 p-1 ring-1 ring-white/10 backdrop-blur-md">
            <button
              onClick={handlePrev}
              className="rounded-full p-3 text-white/40 transition hover:bg-white/10 hover:text-white active:scale-95"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="min-w-[40px] text-center font-mono text-xs text-white/50">
              {activeIndex + 1} / {count}
            </span>
            <button
              onClick={handleNext}
              className="rounded-full p-3 text-white/40 transition hover:bg-white/10 hover:text-white active:scale-95"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
