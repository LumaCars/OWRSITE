"use client"

import { useEffect, useRef, useState, useMemo } from "react"
import { motion, useScroll, useTransform, useSpring, useMotionValue, animate } from "framer-motion"

const FRAME_COUNT = 100
const IMAGE_PATH = "/frames/"

function getFramePath(index: number): string {
  // Load every 3rd frame to reduce loading time (305 -> ~100 frames)
  const frameNumber = (index * 3 + 1).toString().padStart(4, "0")
  return `${IMAGE_PATH}frame_${frameNumber}.png`
}

export default function HeadphoneScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [images, setImages] = useState<HTMLImageElement[]>([])
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [successCount, setSuccessCount] = useState(0)
  const [displayProgress, setDisplayProgress] = useState(0)
  const progressMotionValue = useMotionValue(0)

  // Smooth counter animation - faster duration
  useEffect(() => {
    const controls = animate(progressMotionValue, loadingProgress, {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate: (latest) => {
        setDisplayProgress(Math.round(latest))
      },
    })
    return () => controls.stop()
  }, [loadingProgress, progressMotionValue])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Preload all images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = []
    let loadedCount = 0
    let successfulLoads = 0

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image()
      img.crossOrigin = "anonymous"
      img.src = getFramePath(i)

      img.onload = () => {
        loadedCount++
        successfulLoads++
        setLoadingProgress(Math.round((loadedCount / FRAME_COUNT) * 100))
        setSuccessCount(successfulLoads)

        if (loadedCount === FRAME_COUNT && successfulLoads > 0) {
          setImages(loadedImages)
          setIsLoaded(true)
        }
      }

      img.onerror = () => {
        loadedCount++
        setLoadingProgress(Math.round((loadedCount / FRAME_COUNT) * 100))

        if (loadedCount === FRAME_COUNT && successfulLoads > 0) {
          setImages(loadedImages)
          setIsLoaded(true)
        }
      }

      loadedImages[i] = img
    }
  }, [])

  // Draw frame to canvas
  useEffect(() => {
    if (!isLoaded || images.length === 0) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const render = () => {
      const frameIndex = Math.min(FRAME_COUNT - 1, Math.max(0, Math.floor(smoothProgress.get() * (FRAME_COUNT - 1))))

      const img = images[frameIndex]
      if (!img || !img.complete || img.naturalWidth === 0) return

      // Set canvas size to match image aspect ratio
      const dpr = window.devicePixelRatio || 1
      const containerWidth = canvas.clientWidth
      const containerHeight = canvas.clientHeight

      canvas.width = containerWidth * dpr
      canvas.height = containerHeight * dpr

      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)
      ctx.clearRect(0, 0, containerWidth, containerHeight)

      const imgAspect = img.width / img.height
      const canvasAspect = containerWidth / containerHeight

      let drawWidth, drawHeight, drawX, drawY

      if (imgAspect > canvasAspect) {
        drawHeight = containerHeight
        drawWidth = containerHeight * imgAspect
        drawX = (containerWidth - drawWidth) / 2
        drawY = 0
      } else {
        drawWidth = containerWidth
        drawHeight = containerWidth / imgAspect
        drawX = 0
        drawY = (containerHeight - drawHeight) / 2
      }

      ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight)
    }

    render()
    const unsubscribe = smoothProgress.on("change", render)

    window.addEventListener("resize", render)
    return () => {
      unsubscribe()
      window.removeEventListener("resize", render)
    }
  }, [isLoaded, images, smoothProgress])

  const titleOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0])
  const precisionOpacity = useTransform(scrollYProgress, [0.18, 0.28, 0.42, 0.52], [0, 1, 1, 0])
  const titaniumOpacity = useTransform(scrollYProgress, [0.52, 0.62, 0.76, 0.86], [0, 1, 1, 0])
  const finalOpacity = useTransform(scrollYProgress, [0.88, 0.95], [0, 1])

  return (
    <>
      {/* Intro Section */}
      <section className="relative overflow-hidden bg-[#050505] px-6 py-16 md:px-12 md:py-24 lg:px-20">
        {/* Static background lines - desktop only */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden hidden md:block">
          <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/5 to-transparent" />
          <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/5 to-transparent" />
          <div className="absolute left-3/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        </div>

        {/* Top bar */}
        <div className="mb-12 flex items-center justify-between border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold tracking-tight text-white">OWR</span>
            <span className="h-4 w-px bg-white/20" />
            <span className="text-xs text-white/50">Secure Device</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="text-[10px] font-medium uppercase tracking-wider text-white/40">Swiss Engineered</span>
          </div>
        </div>

        {/* Main content */}
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Left column */}
          <div>
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.4em] text-white/40">
              Premium Security
            </p>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-6xl">
              Uncompromising Protection for the Digital Age
            </h2>
            <p className="text-sm leading-relaxed text-white/50 md:text-base">
              The OWR Secure combines Swiss precision engineering with military-grade encryption. 
              Every component is designed to protect your most sensitive communications and data.
            </p>
          </div>

          {/* Right column - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "256-bit", label: "AES Encryption" },
              { value: "100%", label: "European Development" },
              { value: "195", label: "Countries Available" },
              { value: "24/7", label: "Security Monitoring" },
            ].map((stat, index) => (
              <div
                key={index}
                className="border-l border-white/10 pl-4"
              >
                <span className="block text-2xl font-bold text-white md:text-3xl">
                  {stat.value}
                </span>
                <p className="mt-1 text-xs text-white/40">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* TechBoost Partnership Badge */}
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-6">
          <div className="group relative flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-4">
            {/* TechBoost Logo */}
            <div className="relative h-12 w-24 flex-shrink-0">
              <img 
                src="/images/techboost-logo.png"
                alt="Telekom TechBoost"
                className="h-full w-full object-contain"
              />
            </div>
            
            {/* Divider */}
            <div className="h-10 w-px bg-white/20" />
            
            {/* Description */}
            <div className="flex flex-col">
              <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-fuchsia-400/80">Official Participant</span>
              <span className="text-sm font-medium text-white">Telekom TechBoost Program</span>
              <span className="mt-1 text-[11px] text-white/40">Accelerating innovation in secure communications</span>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="mt-16 flex items-center gap-3">
          <div className="h-px w-8 bg-white/20" />
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/30">
            Scroll to explore the device
          </span>
          <span className="text-white/30">↓</span>
        </div>

        {/* Gradient transition to next section */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#050505]" />
      </section>

      {/* Feature Showcase Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#050505] via-[#040404] to-[#030303] px-6 py-24 md:px-12 md:py-32 lg:px-20">
        {/* Large background text - desktop only */}
        <div className="pointer-events-none absolute inset-0 hidden items-center justify-center overflow-hidden md:flex">
          <span className="select-none text-[20vw] font-bold tracking-tighter text-white/[0.015]">
            SECURE
          </span>
        </div>

        {/* Static glow - no animation */}
        <div className="pointer-events-none absolute -left-32 top-1/4 h-[300px] w-[300px] rounded-full bg-emerald-500/5 blur-[100px] hidden md:block" />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Section header */}
          <div className="mb-16 max-w-3xl md:mb-20">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10">
                <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">Advanced Security Features</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Protection at every layer.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/40 md:text-lg">
              From hardware to software, every component of OWR Secure is engineered to provide uncompromising security for your most sensitive communications.
            </p>
          </div>

          {/* Feature cards grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                ),
                title: "Hardware Encryption",
                description: "Dedicated security chip physically isolates encryption keys from the main processor, preventing all software-based attacks.",
                stat: "256-bit",
                statLabel: "AES",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 018.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
                  </svg>
                ),
                title: "Biometric Security",
                description: "Multi-factor authentication with fingerprint, facial recognition, and behavioral analysis for secure access control.",
                stat: "0.001%",
                statLabel: "False Accept Rate",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m0 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                ),
                title: "Swiss Data Centers",
                description: "All data processed and stored exclusively in Switzerland, protected by the world's strongest privacy laws.",
                stat: "100%",
                statLabel: "Swiss Hosted",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                ),
                title: "Zero Knowledge",
                description: "We never have access to your encryption keys or data. Even under legal pressure, we cannot decrypt your communications.",
                stat: "Zero",
                statLabel: "Access Policy",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                ),
                title: "Threat Detection",
                description: "AI-powered real-time monitoring detects and neutralizes threats before they can compromise your device or data.",
                stat: "24/7",
                statLabel: "Monitoring",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                ),
                title: "Remote Wipe",
                description: "Instantly and securely erase all data remotely if your device is lost or stolen. Automatic wipe on tamper detection.",
                stat: "Instant",
                statLabel: "Data Erasure",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6"
              >
                {/* Icon */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60">
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="mb-2 text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-white/40">{feature.description}</p>

                {/* Stat */}
                <div className="flex items-baseline gap-2 border-t border-white/5 pt-4">
                  <span className="text-2xl font-bold text-emerald-400">{feature.stat}</span>
                  <span className="text-[10px] font-medium uppercase tracking-wider text-white/30">{feature.statLabel}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 flex flex-col items-center justify-center gap-6 text-center md:mt-20">
            <p className="text-sm text-white/40">Experience uncompromising security firsthand</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black">
                <span>Request a Demo</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-8 py-4 text-sm font-semibold text-white">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                <span>Download Specs</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom gradient transition */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#050505]" />
      </section>

      {/* Loading Screen */}
      {!isLoaded && (
        <motion.div 
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030303] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Simple rotating ring - desktop only */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
            <div
              className="absolute h-[300px] w-[300px] rounded-full border border-white/[0.05] animate-[spin_30s_linear_infinite]"
              style={{ left: '-150px', top: '-150px' }}
            />
          </div>

          {/* Static glow - no animation for better performance */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="h-[150px] w-[150px] rounded-full bg-emerald-500/10 blur-3xl md:h-[200px] md:w-[200px]" />
          </div>

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Simple Spin Loader */}
            <div className="relative mb-10">
              <div className="relative w-16 h-16 flex items-center justify-center md:w-20 md:h-20">
                {/* Main Arc - CSS only */}
                <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-emerald-500 animate-[spin_1s_linear_infinite]" />
                
                {/* Center Core */}
                <div className="absolute w-2 h-2 rounded-full bg-emerald-500 md:w-3 md:h-3" />
              </div>
            </div>

            {/* Brand */}
            <motion.div 
              className="mb-2 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <motion.h1 
                className="text-4xl font-bold tracking-[0.2em] text-white"
                initial={{ y: 40 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.25, duration: 0.4, ease: "easeOut" }}
              >
                OWR
              </motion.h1>
            </motion.div>
            
            <motion.div 
              className="mb-12 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <motion.p 
                className="text-[11px] font-medium uppercase tracking-[0.5em] text-white/30"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.35, duration: 0.3, ease: "easeOut" }}
              >
                Secure Device
              </motion.p>
            </motion.div>

            {/* Futuristic progress display */}
            <motion.div 
              className="relative mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              {/* Large percentage */}
              <div className="flex items-baseline justify-center gap-1">
                <span className="font-mono text-7xl font-extralight tracking-tighter text-white tabular-nums">
                  {displayProgress.toString().padStart(2, '0')}
                </span>
                <span className="text-2xl font-extralight text-white/30">%</span>
              </div>

              {/* Animated underline */}
              <div className="mt-4 h-px w-48 bg-white/10">
                <motion.div
                  className="h-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500"
                  style={{ width: `${displayProgress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </motion.div>

            {/* Simple status text */}
            <div className="mt-6 flex items-center gap-3 rounded-full border border-white/5 bg-white/[0.02] px-4 py-2">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] font-medium text-white/40">
                {loadingProgress < 50 ? "Loading..." : loadingProgress < 100 ? "Almost ready..." : "Ready"}
              </span>
            </div>
          </div>

          {/* Bottom tagline - hidden on mobile */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block">
            <span className="text-[9px] font-medium uppercase tracking-[0.4em] text-white/15">
              Swiss Engineered Security
            </span>
          </div>
        </motion.div>
      )}

      {/* Scroll Container */}
      <div ref={containerRef} className="relative h-[500vh] bg-[#050505]">
        {/* Top gradient fade-in */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-[#050505] to-transparent" />
        {/* Sticky Canvas */}
        <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
          <canvas ref={canvasRef} className="h-full w-full" />
          {/* Scroll Indicator - hidden on mobile */}
          {isLoaded && (
            <div className="absolute bottom-8 hidden flex-col items-center gap-2 md:flex">
              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/50">Scroll</span>
              <div className="h-8 w-px bg-gradient-to-b from-white/50 to-transparent" />
            </div>
          )}
          {/* Text Overlays */}
          <div className="pointer-events-none absolute inset-0">
            <motion.div className="absolute inset-x-0 bottom-0" style={{ opacity: titleOpacity }}>
              {/* Gradient backdrop for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
              <div className="relative px-6 pb-16 md:px-12 md:pb-20 lg:px-20">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.5em] text-white/70">
                  Introducing
                </p>
                <h1
                  className="text-5xl font-bold tracking-tighter text-white md:text-8xl lg:text-9xl"
                  style={{ textShadow: "0 4px 30px rgba(0,0,0,0.5)" }}
                >
                  OWR Secure
                </h1>
                <p className="mt-4 max-w-md text-base font-normal tracking-wide text-white/70 md:text-lg">
                  Total Security. Zero Compromise.
                </p>
                <div className="mt-8 hidden items-center gap-3 md:flex">
                  <div className="h-px w-8 bg-white/30" />
                  <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/50">
                    Scroll to explore
                  </span>
                  <span className="text-white/50">↓</span>
                </div>
              </div>
            </motion.div>
            <motion.div className="absolute bottom-0 left-0 right-0" style={{ opacity: precisionOpacity }}>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent" />
              <div className="relative flex justify-end px-6 pb-16 md:px-12 md:pb-20 lg:px-20">
                <div className="text-right">
                  <p className="mb-3 font-mono text-[10px] font-medium uppercase tracking-[0.4em] text-white/60">01</p>
                  <h2
                    className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
                    style={{ textShadow: "0 4px 30px rgba(0,0,0,0.4)" }}
                  >
                    Designed for
                    <br />
                    Security.
                  </h2>
                  <p className="ml-auto mt-4 max-w-sm text-sm leading-relaxed text-white/60 md:text-base">
                    100% European development with Swiss server infrastructure for maximum data protection.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div className="absolute bottom-0 left-0 right-0" style={{ opacity: titaniumOpacity }}>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent" />
              <div className="relative flex justify-end px-6 pb-16 md:px-12 md:pb-20 lg:px-20">
                <div className="text-right">
                  <p className="mb-3 font-mono text-[10px] font-medium uppercase tracking-[0.4em] text-white/60">02</p>
                  <h2
                    className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
                    style={{ textShadow: "0 4px 30px rgba(0,0,0,0.4)" }}
                  >
                    Encrypted
                    <br />
                    Communication.
                  </h2>
                  <p className="ml-auto mt-4 max-w-sm text-sm leading-relaxed text-white/60 md:text-base">
                    Tap-proof technology with fully encrypted data transmission. Complete defense against cyber threats.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div className="absolute bottom-0 left-0 right-0" style={{ opacity: finalOpacity }}>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
              <div className="relative px-6 pb-16 md:px-12 md:pb-20 lg:px-20">
                <p className="mb-3 font-mono text-[10px] font-medium uppercase tracking-[0.4em] text-white/60">03</p>
                <h2
                  className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
                  style={{ textShadow: "0 4px 30px rgba(0,0,0,0.4)" }}
                >
                  Communicate Secure.
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60 md:text-base">
                  Custom secure OS. Swiss servers. 40+ customization options. Available in 195 countries.
                </p>
                <motion.button
                  className="pointer-events-auto mt-8 rounded-full bg-white px-8 py-4 text-sm font-semibold tracking-wide text-black transition-all hover:bg-white/90"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Request Consultation
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}
