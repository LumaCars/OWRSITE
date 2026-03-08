"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleCanPlay = () => {
      setIsVideoLoaded(true)
    }

    video.addEventListener("canplay", handleCanPlay)
    
    // If video is already loaded
    if (video.readyState >= 3) {
      setIsVideoLoaded(true)
    }

    return () => {
      video.removeEventListener("canplay", handleCanPlay)
    }
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#050505]">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source
          src="https://7k714xxekyiqp0df.public.blob.vercel-storage.com/copy_FC65BE0D-54DB-4379-9850-444AA6271EC0.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/50 via-transparent to-[#050505]/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-end pb-8 md:pb-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVideoLoaded ? 1 : 0, y: isVideoLoaded ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.5em] text-white/70">
            Your Security Is Our Mission
          </p>
          <h1 className="text-5xl font-bold tracking-tighter text-white md:text-7xl lg:text-8xl">
            OWR Wealth
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base text-white/60 md:text-lg">
            100% encrypted communication. Zero compromise.
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 flex flex-col items-center gap-2 my-[-30px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVideoLoaded ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/50">
            Scroll
          </span>
          <motion.div
            className="h-8 w-px bg-gradient-to-b from-white/50 to-transparent"
            animate={{ scaleY: [1, 0.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </motion.div>
      </div>
    </section>
  )
}
