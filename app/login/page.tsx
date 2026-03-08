"use client"

import React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [name, setName] = useState("")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [mode, setMode] = useState<"signin" | "signup">("signin")

  // Track mouse for spotlight effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030303]">
      {/* Animated Background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Mouse spotlight */}
        <div
          className="absolute h-[600px] w-[600px] rounded-full opacity-30 blur-[100px] transition-all duration-300"
          style={{
            background: "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)",
            left: mousePosition.x - 300,
            top: mousePosition.y - 300,
          }}
        />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Floating orbs */}
        <motion.div
          className="absolute -left-32 top-1/4 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-32 bottom-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1.5, ease: "easeInOut" }}
        />
        
        {/* Animated lines */}
        <svg className="absolute inset-0 h-full w-full opacity-20">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#10B981" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          {[...Array(5)].map((_, i) => (
            <motion.line
              key={i}
              x1="0%"
              y1={`${20 + i * 15}%`}
              x2="100%"
              y2={`${20 + i * 15}%`}
              stroke="url(#lineGrad)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 0.3, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12">
        <Link href="/" className="group flex items-center gap-3">
          <motion.div
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10"
            whileHover={{ scale: 1.05, borderColor: "rgba(16, 185, 129, 0.5)" }}
          >
            <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
          </motion.div>
          <span className="text-lg font-semibold text-white">ENCRYPT</span>
        </Link>
        
        <Link 
          href="/"
          className="flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Home
        </Link>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex min-h-[calc(100vh-88px)] items-center justify-center px-6 py-12">
        <div className="grid w-full max-w-6xl gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* Left Side - Branding */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <motion.div
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className="h-2 w-2 rounded-full bg-emerald-400"
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-xs font-medium uppercase tracking-wider text-emerald-400">Secure Portal</span>
              </motion.div>
              
              <motion.h1
                className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Welcome back to{" "}
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  privacy.
                </span>
              </motion.h1>
              
              <motion.p
                className="max-w-md text-lg text-white/40"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Access your encrypted communications dashboard. Your data never leaves your device unencrypted.
              </motion.p>
            </div>
            
            {/* Security Features */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {[
                { icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z", text: "End-to-end encryption" },
                { icon: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75v2.25H4.5v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z", text: "Zero-knowledge architecture" },
                { icon: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m0 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418", text: "Swiss server infrastructure" },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                    <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
                    </svg>
                  </div>
                  <span className="text-sm text-white/60">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Login Form */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full max-w-md">
              {/* Form Card */}
              <motion.div
                className="relative overflow-hidden rounded-3xl"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glassmorphism layers */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-transparent backdrop-blur-2xl" />
                <div className="absolute inset-0 rounded-3xl border border-white/[0.08]" />
                
                {/* Animated corner accents */}
                <motion.div 
                  className="absolute -left-1 -top-1 h-20 w-20"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-emerald-400 to-transparent" />
                  <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-emerald-400 to-transparent" />
                </motion.div>
                <motion.div 
                  className="absolute -bottom-1 -right-1 h-20 w-20"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                >
                  <div className="absolute bottom-0 right-0 h-full w-[2px] bg-gradient-to-t from-cyan-400 to-transparent" />
                  <div className="absolute bottom-0 right-0 h-[2px] w-full bg-gradient-to-l from-cyan-400 to-transparent" />
                </motion.div>

                {/* Inner glow */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5" />

                <div className="relative z-10 p-10">
                  {/* Form Header - Minimalist */}
                  <div className="mb-10">
                    <div className="mb-8 flex items-center gap-4">
                      <div className="relative flex h-14 w-14 items-center justify-center">
                        {/* Smooth outer glow */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 blur-xl"
                          animate={{ 
                            opacity: [0.4, 0.7, 0.4],
                            scale: [0.9, 1.1, 0.9],
                          }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />
                        
                        {/* Rotating gradient ring */}
                        <motion.div
                          className="absolute inset-0"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        >
                          <div className="h-full w-full rounded-2xl border border-transparent" style={{
                            background: "linear-gradient(#030303, #030303) padding-box, linear-gradient(135deg, #10B981 0%, transparent 50%, #06B6D4 100%) border-box",
                          }} />
                        </motion.div>
                        
                        {/* Center icon container */}
                        <motion.div 
                          className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/5 backdrop-blur-sm"
                          animate={{ 
                            scale: [1, 1.02, 1],
                          }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                          </svg>
                        </motion.div>
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white">Secure Access</h2>
                        <p className="text-sm text-white/40">Encrypted authentication</p>
                      </div>
                    </div>
                    
                    {/* Mode Toggle Tabs */}
                    <div className="relative mb-6 flex rounded-2xl border border-white/10 bg-white/[0.02] p-1">
                      <motion.div
                        className="absolute inset-y-1 rounded-xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20"
                        animate={{
                          left: mode === "signin" ? "4px" : "50%",
                          width: "calc(50% - 8px)",
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                      <button
                        type="button"
                        onClick={() => setMode("signin")}
                        className={`relative z-10 flex-1 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${mode === "signin" ? "text-white" : "text-white/40 hover:text-white/60"}`}
                      >
                        Sign In
                      </button>
                      <button
                        type="button"
                        onClick={() => setMode("signup")}
                        className={`relative z-10 flex-1 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${mode === "signup" ? "text-white" : "text-white/40 hover:text-white/60"}`}
                      >
                        Sign Up
                      </button>
                    </div>
                    
                    {/* Security status bar */}
                    <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-3">
                      <motion.div
                        className="h-2 w-2 rounded-full bg-emerald-400"
                        animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      <span className="text-xs font-medium text-emerald-400">Connection secured with TLS 1.3</span>
                      <div className="ml-auto flex gap-1">
                        {[...Array(4)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="h-3 w-1 rounded-full bg-emerald-400"
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <AnimatePresence mode="wait">
                      {mode === "signup" && (
                        <motion.div
                          key="name-field"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="group space-y-3 overflow-hidden"
                        >
                          <div className="flex items-center gap-2">
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                            <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
                              Full Name
                            </label>
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                          </div>
                          <div className="relative">
                            <motion.div
                              className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0"
                              animate={{
                                opacity: focusedField === "name" ? 1 : 0,
                              }}
                              style={{
                                background: "linear-gradient(135deg, rgba(16, 185, 129, 0.4), rgba(6, 182, 212, 0.4))",
                              }}
                              transition={{ duration: 0.3 }}
                            />
                            <div className="relative overflow-hidden rounded-2xl bg-white/[0.03]">
                              <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                onFocus={() => setFocusedField("name")}
                                onBlur={() => setFocusedField(null)}
                                className="w-full bg-transparent px-5 py-4 pl-14 text-white placeholder-white/20 outline-none"
                                placeholder="John Doe"
                                required={mode === "signup"}
                              />
                              <div className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2">
                                <motion.svg 
                                  className="h-5 w-5" 
                                  fill="none" 
                                  viewBox="0 0 24 24" 
                                  stroke="currentColor" 
                                  strokeWidth={1.5}
                                  animate={{ color: focusedField === "name" ? "#10B981" : "rgba(255,255,255,0.3)" }}
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                </motion.svg>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    {/* Email Field */}
                    <div className="group space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
                          Identity
                        </label>
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                      </div>
                      <div className="relative">
                        <motion.div
                          className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0"
                          animate={{
                            opacity: focusedField === "email" ? 1 : 0,
                          }}
                          style={{
                            background: "linear-gradient(135deg, rgba(16, 185, 129, 0.4), rgba(6, 182, 212, 0.4))",
                          }}
                          transition={{ duration: 0.3 }}
                        />
                        <div className="relative overflow-hidden rounded-2xl bg-white/[0.03]">
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField(null)}
                            className="w-full bg-transparent px-5 py-4 pl-14 text-white placeholder-white/20 outline-none"
                            placeholder="you@example.com"
                            required
                          />
                          <div className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2">
                            <motion.svg 
                              className="h-5 w-5" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor" 
                              strokeWidth={1.5}
                              animate={{ color: focusedField === "email" ? "#10B981" : "rgba(255,255,255,0.3)" }}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </motion.svg>
                          </div>
                          {/* Scanning line animation on focus */}
                          <AnimatePresence>
                            {focusedField === "email" && (
                              <motion.div
                                className="pointer-events-none absolute inset-x-0 top-0 h-full"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                              >
                                <motion.div
                                  className="absolute left-0 h-full w-1 bg-gradient-to-b from-transparent via-emerald-400 to-transparent"
                                  animate={{ left: ["0%", "100%"] }}
                                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>

                    {/* Password Field */}
                    <div className="group space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
                          Passphrase
                        </label>
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                      </div>
                      <div className="relative">
                        <motion.div
                          className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0"
                          animate={{
                            opacity: focusedField === "password" ? 1 : 0,
                          }}
                          style={{
                            background: "linear-gradient(135deg, rgba(16, 185, 129, 0.4), rgba(6, 182, 212, 0.4))",
                          }}
                          transition={{ duration: 0.3 }}
                        />
                        <div className="relative overflow-hidden rounded-2xl bg-white/[0.03]">
                          <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onFocus={() => setFocusedField("password")}
                            onBlur={() => setFocusedField(null)}
                            className="w-full bg-transparent px-5 py-4 pl-14 pr-14 text-white placeholder-white/20 outline-none"
                            placeholder="Enter secure passphrase"
                            required
                          />
                          <div className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2">
                            <motion.svg 
                              className="h-5 w-5" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor" 
                              strokeWidth={1.5}
                              animate={{ color: focusedField === "password" ? "#10B981" : "rgba(255,255,255,0.3)" }}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                            </motion.svg>
                          </div>
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-5 top-1/2 -translate-y-1/2 text-white/30 transition-colors hover:text-emerald-400"
                          >
                            {showPassword ? (
                              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                              </svg>
                            ) : (
                              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            )}
                          </button>
                          {/* Scanning line animation on focus */}
                          <AnimatePresence>
                            {focusedField === "password" && (
                              <motion.div
                                className="pointer-events-none absolute inset-x-0 top-0 h-full"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                              >
                                <motion.div
                                  className="absolute left-0 h-full w-1 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
                                  animate={{ left: ["0%", "100%"] }}
                                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                      <div className="flex items-center justify-between px-1">
                        {mode === "signin" ? (
                          <button type="button" className="text-xs text-white/30 transition-colors hover:text-emerald-400">
                            Forgot passphrase?
                          </button>
                        ) : (
                          <span className="text-xs text-white/30">Min. 8 characters</span>
                        )}
                        {/* Password strength indicator */}
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-white/20">Strength</span>
                          <div className="flex gap-1">
                            {[...Array(4)].map((_, i) => (
                              <div 
                                key={i}
                                className={`h-1 w-4 rounded-full ${i < (password.length > 12 ? 4 : password.length > 8 ? 3 : password.length > 4 ? 2 : password.length > 0 ? 1 : 0) ? 'bg-emerald-400' : 'bg-white/10'}`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Confirm Password Field - Sign Up Only */}
                    <AnimatePresence mode="wait">
                      {mode === "signup" && (
                        <motion.div
                          key="confirm-password-field"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="group space-y-3 overflow-hidden"
                        >
                          <div className="flex items-center gap-2">
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                            <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
                              Confirm Passphrase
                            </label>
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                          </div>
                          <div className="relative">
                            <motion.div
                              className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0"
                              animate={{
                                opacity: focusedField === "confirmPassword" ? 1 : 0,
                              }}
                              style={{
                                background: "linear-gradient(135deg, rgba(16, 185, 129, 0.4), rgba(6, 182, 212, 0.4))",
                              }}
                              transition={{ duration: 0.3 }}
                            />
                            <div className="relative overflow-hidden rounded-2xl bg-white/[0.03]">
                              <input
                                type={showPassword ? "text" : "password"}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                onFocus={() => setFocusedField("confirmPassword")}
                                onBlur={() => setFocusedField(null)}
                                className="w-full bg-transparent px-5 py-4 pl-14 text-white placeholder-white/20 outline-none"
                                placeholder="Confirm your passphrase"
                                required={mode === "signup"}
                              />
                              <div className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2">
                                <motion.svg 
                                  className="h-5 w-5" 
                                  fill="none" 
                                  viewBox="0 0 24 24" 
                                  stroke="currentColor" 
                                  strokeWidth={1.5}
                                  animate={{ 
                                    color: focusedField === "confirmPassword" 
                                      ? "#10B981" 
                                      : confirmPassword.length > 0 && confirmPassword === password 
                                        ? "#10B981" 
                                        : "rgba(255,255,255,0.3)" 
                                  }}
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </motion.svg>
                              </div>
                              {confirmPassword.length > 0 && (
                                <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2">
                                  {confirmPassword === password ? (
                                    <motion.div
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20"
                                    >
                                      <svg className="h-3 w-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                      </svg>
                                    </motion.div>
                                  ) : (
                                    <motion.div
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500/20"
                                    >
                                      <svg className="h-3 w-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                      </svg>
                                    </motion.div>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Biometric Option - Sign In Only */}
                    <AnimatePresence mode="wait">
                      {mode === "signin" && (
                        <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.02] px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                              <svg className="h-5 w-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-white">Biometric Login</p>
                              <p className="text-xs text-white/30">Use fingerprint or face ID</p>
                            </div>
                          </div>
                          <motion.div 
                            className="flex h-6 w-11 cursor-pointer items-center rounded-full bg-white/10 p-1"
                            whileTap={{ scale: 0.95 }}
                          >
                            <motion.div className="h-4 w-4 rounded-full bg-white/40" />
                          </motion.div>
                        </div>
                      )}
                    </AnimatePresence>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isLoading}
                      className="group relative mt-4 w-full overflow-hidden rounded-2xl p-[1px] transition-all disabled:cursor-not-allowed disabled:opacity-50"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Animated gradient border */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl"
                        style={{
                          background: "linear-gradient(90deg, #10B981, #06B6D4, #10B981)",
                          backgroundSize: "200% 100%",
                        }}
                        animate={{
                          backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      />
                      <div className="relative flex items-center justify-center gap-3 rounded-2xl bg-[#030303] px-6 py-4 transition-all group-hover:bg-[#050505]">
                        {isLoading ? (
                          <>
                            <motion.div
                              className="h-5 w-5 rounded-full border-2 border-emerald-400/30 border-t-emerald-400"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                            <span className="font-medium text-white">{mode === "signin" ? "Authenticating..." : "Creating Account..."}</span>
                          </>
                        ) : (
                          <>
                            <span className="font-medium text-white">{mode === "signin" ? "Initialize Secure Session" : "Create Encrypted Account"}</span>
                            <motion.svg 
                              className="h-5 w-5 text-emerald-400" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor" 
                              strokeWidth={2}
                              animate={{ x: [0, 4, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </motion.svg>
                          </>
                        )}
                      </div>
                    </motion.button>
                  </form>

                  {/* Divider */}
                  <div className="my-8 flex items-center gap-4">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <span className="text-xs text-white/30">or continue with</span>
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  </div>

{/* Social Login */}
  <div className="flex justify-center gap-4">
                    <motion.button
                      type="button"
                      className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition-all hover:border-white/20 hover:bg-white/10"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      <span>Google</span>
                    </motion.button>
                    
                  </div>

                  {/* Toggle Mode Link */}
                  <p className="mt-8 text-center text-sm text-white/40">
                    {mode === "signin" ? (
                      <>
                        {"Don't have an account?"}{" "}
                        <button 
                          type="button"
                          onClick={() => setMode("signup")}
                          className="font-medium text-emerald-400 transition-colors hover:text-emerald-300"
                        >
                          Create one now
                        </button>
                      </>
                    ) : (
                      <>
                        Already have an account?{" "}
                        <button 
                          type="button"
                          onClick={() => setMode("signin")}
                          className="font-medium text-emerald-400 transition-colors hover:text-emerald-300"
                        >
                          Sign in instead
                        </button>
                      </>
                    )}
                  </p>
                </div>
              </motion.div>

              {/* Security Badge */}
              <motion.div
                className="mt-6 flex items-center justify-center gap-2 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <span className="text-xs text-white/30">Protected by 256-bit SSL encryption</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
