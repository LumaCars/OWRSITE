"use client";

import HeadphoneScroll from "@/components/headphone-scroll";
import VideoHero from "@/components/video-hero";
import InteractivePhone from "@/components/interactive-phone";
import TestimonialsRail from "@/components/testimonials-rail";
import OrbitingSecurity from "@/components/orbiting-security";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import Script from "next/script";
import { useState } from "react";

export default function Home() {
    const [splineReady, setSplineReady] = useState(false);
  return (
    <main className="relative bg-[#050505]">
      {/* Navigation */}
      <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-4 md:px-10">
        {/* Logo - Left */}
        <a href="#" className="text-sm font-semibold tracking-tight text-white transition-opacity hover:opacity-70">
          {""}
        </a>

        {/* Nav Links - Center (hidden on mobile) */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          <a href="#specs" className="text-xs uppercase tracking-widest text-white/50 transition-colors hover:text-white">
            Products
          </a>
          <a href="#security" className="text-xs uppercase tracking-widest text-white/50 transition-colors hover:text-white">
            Security
          </a>
          <a href="#faq" className="text-xs uppercase tracking-widest text-white/50 transition-colors hover:text-white">
            FAQ
          </a>
        </div>

        {/* Log In - Right */}
        <a href="/login" className="group flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-5 py-2 text-xs font-medium text-white transition-all hover:border-emerald-500/50 hover:bg-emerald-500/10">
          <svg className="h-4 w-4 text-white/70 transition-colors group-hover:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
          <span>Log In</span>
        </a>
      </nav>

      {/* Technical Hero Section */}
      <section className="relative z-10 flex min-h-screen items-center justify-center overflow-hidden bg-[#050505]">
        {/* Grid pattern background */}
        <div 
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]" />
        
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-32 text-center md:py-40">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-5 py-2.5">
            <div className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-emerald-400">Military-Grade Security</span>
          </div>
          
          {/* Main headline */}
          <h1 className="mb-6 text-balance text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl">
            Your Security Is <br className="hidden md:block" />Our Mission.
          </h1>
          
          <p className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-white/50 md:text-lg">
            100% encrypted communication with Swiss server infrastructure. 
            Built for CEOs, government agencies, and those who demand absolute privacy.
          </p>
          
          {/* Key specs row */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {[
              { value: "AES-256", label: "Encryption" },
              { value: "RSA-4096", label: "Key Exchange" },
              { value: "Swiss", label: "Infrastructure" },
              { value: "Zero Access", label: "Architecture" },
            ].map((spec, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <span className="font-mono text-lg font-bold text-white md:text-xl">{spec.value}</span>
                <span className="text-[10px] uppercase tracking-wider text-white/30">{spec.label}</span>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#security" className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-all hover:scale-105 active:scale-95">
              <span>Explore Security</span>
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
              </svg>
            </a>
            <a href="#specs" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-white/5">
              Technical Specs
            </a>
          </div>
          
          {/* Scroll indicator */}
          <div className="mt-16 flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Scroll</span>
            <div className="h-8 w-px bg-gradient-to-b from-white/30 to-transparent" />
          </div>
        </div>
      </section>

      {/* Core Principles Section - Redesigned */}
      <section id="security" className="relative z-10 overflow-hidden bg-gradient-to-b from-[#050505] via-[#040404] to-[#030303] scroll-mt-20">
        {/* Background elements */}
        <div className="pointer-events-none absolute inset-0">
          {/* Large background text */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[25vw] font-bold tracking-tighter text-white/[0.015]">
            SECURE
          </div>
          {/* Animated gradient orbs */}
          <div className="absolute -left-64 top-1/4 h-[600px] w-[600px] animate-pulse rounded-full bg-emerald-500/5 blur-[150px]" />
          <div className="absolute -right-64 bottom-1/4 h-[500px] w-[500px] animate-pulse rounded-full bg-emerald-400/5 blur-[120px]" style={{ animationDelay: '1s' }} />
          {/* Grid pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '80px 80px'
            }}
          />
        </div>

        {/* Top fade */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#050505] to-transparent" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-40">
          {/* Section Header */}
          <div className="mb-20 flex flex-col items-center text-center md:mb-28">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-5 py-2.5">
              <div className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-emerald-400">Core Principles</span>
            </div>
            <h2 className="mb-6 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Engineered for maximum <span className="text-white/50">security demands.</span>
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-white/40 md:text-lg">
              Every layer of our infrastructure is designed with uncompromising security standards, ensuring your data remains protected at all times.
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
            
            {/* Feature 1 - Large Card */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.05] to-transparent p-8 transition-all duration-500 hover:border-emerald-500/30 hover:shadow-[0_0_60px_-15px_rgba(16,185,129,0.3)] lg:col-span-2 lg:row-span-2">
              {/* Animated border glow */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1) 0%, transparent 50%)' }} />
              
              {/* Icon with glow */}
              <div className="relative mb-8">
                <div className="absolute -inset-4 rounded-full bg-emerald-500/20 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10 transition-all duration-300 group-hover:scale-110 group-hover:border-emerald-500/40">
                  <svg className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
              </div>
              
              <span className="mb-3 inline-block rounded-full bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white/40">Primary Shield</span>
              <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">European Development</h3>
              <p className="mb-8 max-w-md text-sm leading-relaxed text-white/40 md:text-base">
                All product development conducted entirely in Europe to ensure the highest security standards and complete GDPR compliance.
              </p>
              
              {/* Stats row */}
              <div className="flex items-center gap-8">
                <div>
                  <span className="text-4xl font-bold text-white">100%</span>
                  <p className="text-xs uppercase tracking-wider text-white/30">EU Based</p>
                </div>
                <div className="h-12 w-px bg-white/10" />
                <div>
                  <span className="text-4xl font-bold text-white">GDPR</span>
                  <p className="text-xs uppercase tracking-wider text-white/30">Compliant</p>
                </div>
              </div>
              
              {/* Decorative corner element */}
              <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl transition-all duration-500 group-hover:bg-emerald-500/20" />
            </div>

            {/* Feature 2 - Swiss Servers */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-500 hover:border-emerald-500/20 hover:bg-white/[0.04]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10">
                <svg className="h-6 w-6 text-white/70 transition-colors group-hover:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 010-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">Swiss Servers</h3>
              <p className="mb-4 text-xs leading-relaxed text-white/40">Data sovereignty with Swiss infrastructure.</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-emerald-400">CH</span>
                <span className="text-xs text-white/30">protected</span>
              </div>
            </div>

            {/* Feature 3 - Encryption */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-500 hover:border-emerald-500/20 hover:bg-white/[0.04]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10">
                <svg className="h-6 w-6 text-white/70 transition-colors group-hover:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">Full Encryption</h3>
              <p className="mb-4 text-xs leading-relaxed text-white/40">Military-grade protection for all data.</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-emerald-400">256</span>
                <span className="text-xs text-white/30">bit AES</span>
              </div>
            </div>

            {/* Feature 4 - Global */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-500 hover:border-emerald-500/20 hover:bg-white/[0.04]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10">
                <svg className="h-6 w-6 text-white/70 transition-colors group-hover:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">Global Reach</h3>
              <p className="mb-4 text-xs leading-relaxed text-white/40">Available in countries worldwide.</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-emerald-400">195</span>
                <span className="text-xs text-white/30">countries</span>
              </div>
            </div>

            {/* Feature 5 - Uptime */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-500 hover:border-emerald-500/20 hover:bg-white/[0.04]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10">
                <svg className="h-6 w-6 text-white/70 transition-colors group-hover:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">Always Online</h3>
              <p className="mb-4 text-xs leading-relaxed text-white/40">Maximum reliability guaranteed.</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-emerald-400">99.9</span>
                <span className="text-xs text-white/30">% uptime</span>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 flex flex-col items-center justify-center gap-6 text-center">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#050505] bg-gradient-to-br from-white/20 to-white/5">
                    <span className="text-[10px] font-bold text-white/60">{i}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-white/40">Trusted by 50,000+ security professionals</p>
            </div>
            <button className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-medium text-white transition-all hover:border-emerald-500/30 hover:bg-emerald-500/10">
              <span>Explore All Features</span>
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Bottom gradient */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#030303] to-transparent" />
      </section>

      {/* Section 2: Technology Specs */}
      <section id="specs" className="relative z-10 overflow-hidden bg-gradient-to-b from-[#030303] via-[#040404] to-[#050505] scroll-mt-20">
        {/* Top fade */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#030303] to-transparent" />
        
        {/* Velocity Scroll Banner - Top */}
        
        
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
          {/* Section Header - Centered */}
          <div className="mb-16 flex flex-col items-center text-center md:mb-20">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2.5">
              <svg className="h-4 w-4 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">Technical Specifications</span>
            </div>
            <h2 className="mb-6 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Built with <span className="text-white/50">precision engineering.</span>
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-white/40">
              Every component is meticulously designed and tested to meet the highest security standards in the industry.
            </p>
          </div>
          
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Left - Specs List */}
            <div className="order-2 lg:order-1">
              <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-8">
                <div className="space-y-0">
                  {[
                    { label: "Processor", value: "Custom Security Chip v3", icon: (
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
                      </svg>
                    ) },
                    { label: "Encryption", value: "AES-256 + RSA-4096", icon: (
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                      </svg>
                    ) },
                    { label: "Memory", value: "8GB Encrypted RAM", icon: (
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                      </svg>
                    ) },
                    { label: "Storage", value: "256GB Secure Storage", icon: (
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                      </svg>
                    ) },
                    { label: "Battery", value: "4500mAh / 72h Standby", icon: (
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" />
                      </svg>
                    ) },
                    { label: "Display", value: '6.1" AMOLED Privacy', icon: (
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                      </svg>
                    ) },
                  ].map((spec, i) => (
                    <div key={i} className="group flex items-center gap-4 border-b border-white/5 py-5 transition-colors last:border-0 hover:bg-white/[0.02]">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/40 transition-all group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 group-hover:text-emerald-400">
                        {spec.icon}
                      </div>
                      <div className="flex flex-1 items-center justify-between">
                        <span className="text-sm text-white/40">{spec.label}</span>
                        <span className="font-mono text-sm font-medium text-white">{spec.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right - Interactive Phone */}
            <div className="order-1 lg:order-2">
              <InteractivePhone />
            </div>
          </div>
        </div>
        
        {/* Velocity Scroll Banner - Bottom */}
        
      </section>

      {/* Section 4: How It Works */}
      <section className="relative z-10 overflow-hidden bg-gradient-to-b from-[#030303] via-[#040404] to-[#050505]">
        {/* Background elements */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[20vw] font-bold tracking-tighter text-white/[0.01]">
            PROTECT
          </div>
          <div className="absolute -right-32 top-1/4 h-[500px] w-[500px] animate-pulse rounded-full bg-emerald-500/5 blur-[120px]" />
          <div className="absolute -left-32 bottom-1/4 h-[400px] w-[400px] animate-pulse rounded-full bg-cyan-500/5 blur-[100px]" style={{ animationDelay: '1.5s' }} />
        </div>
        
        {/* Top fade */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#030303] to-transparent" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-40">
          {/* Section Header - Centered */}
          <div className="mb-20 flex flex-col items-center text-center md:mb-28">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-5 py-2.5">
              <div className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-400">How It Works</span>
            </div>
            <h2 className="mb-6 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Security without <span className="text-white/50">compromise.</span>
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-white/40 md:text-lg">
              Our multi-layer defense architecture ensures your data remains protected at every level, from hardware to network.
            </p>
          </div>
          
          {/* Main Grid - Orbiting Visual + Content */}
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
            {/* Left - Orbiting Security Visualization */}
            <div className="relative order-2 lg:order-1">
              <OrbitingSecurity />
              {/* Decorative elements */}
              <div className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-emerald-500/10 blur-3xl" />
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan-500/10 blur-3xl" />
            </div>
            
            {/* Right - Process Steps */}
            <div className="order-1 space-y-6 lg:order-2">
              {[
                {
                  step: "01",
                  title: "Hardware Isolation",
                  description: "Dedicated security chip physically separates sensitive data from the main processor.",
                  color: "emerald",
                },
                {
                  step: "02",
                  title: "End-to-End Encryption",
                  description: "All communications encrypted before leaving your device, decrypted only by recipients.",
                  color: "cyan",
                },
                {
                  step: "03",
                  title: "Zero Knowledge Architecture",
                  description: "We never have access to your encryption keys. Your data remains yours alone.",
                  color: "emerald",
                },
                {
                  step: "04",
                  title: "Continuous Protection",
                  description: "Real-time threat monitoring and automatic security updates against emerging threats.",
                  color: "cyan",
                },
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-500 hover:border-white/10 hover:bg-white/[0.04]"
                >
                  {/* Hover glow effect */}
                  <div className={`pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full ${item.color === 'emerald' ? 'bg-emerald-500/10' : 'bg-cyan-500/10'} blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                  
                  <div className="relative flex items-start gap-5">
                    {/* Step number */}
                    <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border ${item.color === 'emerald' ? 'border-emerald-500/20 bg-emerald-500/10' : 'border-cyan-500/20 bg-cyan-500/10'} transition-all duration-300 group-hover:scale-110`}>
                      <span className={`font-mono text-sm font-bold ${item.color === 'emerald' ? 'text-emerald-400' : 'text-cyan-400'}`}>{item.step}</span>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-white/40">{item.description}</p>
                    </div>
                    
                    {/* Arrow indicator */}
                    <svg className="h-5 w-5 flex-shrink-0 text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Stats Row */}
          <div className="mt-24 grid gap-6 md:grid-cols-4">
            {[
              { value: "4", label: "Security Layers", suffix: "" },
              { value: "256", label: "Bit Encryption", suffix: "-bit" },
              { value: "0", label: "Data Breaches", suffix: "" },
              { value: "24/7", label: "Threat Monitoring", suffix: "" },
            ].map((stat, i) => (
              <div key={i} className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center transition-all hover:border-emerald-500/20 hover:bg-white/[0.04]">
                <span className="text-4xl font-bold text-white">{stat.value}<span className="text-lg text-white/50">{stat.suffix}</span></span>
                <p className="mt-2 text-xs font-medium uppercase tracking-wider text-white/40">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom gradient */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />
      </section>

      {/* Section 5: Testimonials - Focus Rail Style */}
      <section className="relative z-10 overflow-hidden bg-gradient-to-b from-[#050505] via-[#040404] to-[#030303]">
        {/* Top fade */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-[#050505] to-transparent" />
        <TestimonialsRail />
        {/* Bottom fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-[#030303] to-transparent" />
      </section>

      {/* ===== DESIGN SHOWCASE SECTIONS (moved to bottom) ===== */}

      {/* Design Section: Spline 3D Hero */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <Script
          type="module"
          src="https://unpkg.com/@splinetool/viewer@1.12.39/build/spline-viewer.js"
          onLoad={() => setSplineReady(true)}
        />

        <div className="pointer-events-none absolute inset-0 z-0">
          {splineReady ? (
            // @ts-expect-error - spline-viewer is a web component
            <spline-viewer
              url="https://prod.spline.design/XxdRhcWuzaSQnfoM/scene.splinecode"
              style={{ width: "100%", height: "100%" }}
            />
          ) : (
            <div className="h-full w-full bg-black" />
          )}
        </div>

        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-[#030303]/70 via-transparent to-[#050505]/80" />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#030303]/80 via-transparent to-[#050505]/40" />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-black/15" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20 md:px-12">
          <div className="grid w-full gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-white/60">Trusted Worldwide</span>
              </div>

              <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                <span className="text-balance">Protecting those who protect others.</span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/50 md:text-lg">
                Trusted by government agencies, Fortune 500 companies, and security-conscious individuals across 195 countries.
              </p>

              <div className="mt-10 space-y-4">
                {[
                  { icon: (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  ), title: "Military-Grade Encryption", desc: "AES-256 hardware encryption protects every byte" },
                  { icon: (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  ), title: "Swiss Data Sovereignty", desc: "All data stored exclusively in Switzerland" },
                  { icon: (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                  ), title: "Zero Knowledge Architecture", desc: "We can never access your encrypted data" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 backdrop-blur-sm transition-all hover:border-emerald-500/20 hover:bg-white/[0.04]">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                      <p className="mt-1 text-xs text-white/40">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <button className="group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] active:scale-95">
                  <span>Discover Our Solutions</span>
                  <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
                <button className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-transparent px-8 text-sm font-semibold text-white transition-all hover:bg-white/5">
                  Learn More
                </button>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "500+", label: "Government Agencies", icon: (
                    <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                    </svg>
                  ) },
                  { number: "2,000+", label: "Enterprise Clients", icon: (
                    <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                    </svg>
                  ) },
                  { number: "50,000+", label: "Individual Users", icon: (
                    <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                  ) },
                  { number: "195", label: "Countries Worldwide", icon: (
                    <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  ) },
                ].map((stat, i) => (
                  <div key={i} className="group rounded-2xl border border-white/5 bg-white/[0.02] p-5 backdrop-blur-sm transition-all hover:border-emerald-500/20 hover:bg-white/[0.04]">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10">
                      {stat.icon}
                    </div>
                    <span className="text-2xl font-bold text-white md:text-3xl">{stat.number}</span>
                    <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-white/40">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10">
                    <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Certified Security</p>
                    <p className="text-[10px] text-white/40">ISO 27001 & SOC 2 Type II</p>
                  </div>
                </div>
                <p className="text-xs leading-relaxed text-white/40">
                  Our security infrastructure is independently audited and certified to meet the highest international standards for information security management.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-32 bg-gradient-to-t from-[#050505] to-transparent" />
      </section>

      {/* Design Section 3: Phone Showcase */}
      <section className="relative z-10 overflow-hidden bg-gradient-to-b from-[#050505] via-[#040404] to-[#030303]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#050505] to-transparent" />
        
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[40vw] font-bold tracking-tighter text-white/[0.015]">
            OWR
          </div>
          <div className="absolute -left-64 top-1/4 h-[600px] w-[600px] rounded-full bg-emerald-500/5 blur-[150px]" />
          <div className="absolute -right-64 bottom-1/4 h-[500px] w-[500px] rounded-full bg-emerald-400/5 blur-[120px]" />
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)',
              backgroundSize: '48px 48px'
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32 lg:py-40">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="relative flex items-center justify-center order-2 lg:order-1">
              <div className="absolute h-[500px] w-[300px] rounded-full bg-emerald-500/10 blur-[80px]" />
              
              <div className="relative">
                <div className="relative h-[580px] w-[280px] rounded-[3.5rem] border border-white/10 bg-gradient-to-b from-white/10 via-white/5 to-transparent p-1.5 shadow-2xl shadow-black/50">
                  <div className="relative h-full w-full overflow-hidden rounded-[3rem] bg-[#0a0a0a]">
                    <div className="flex items-center justify-between px-6 py-3">
                      <span className="text-[10px] font-medium text-white/40">9:41</span>
                      <div className="absolute left-1/2 top-3 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
                      <div className="flex items-center gap-1">
                        <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                      </div>
                    </div>
                    
                    <div className="flex h-full flex-col items-center px-6 pt-8">
                      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10">
                        <svg className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                      </div>
                      
                      <span className="mb-2 text-lg font-semibold text-white">OWR Secure</span>
                      <span className="mb-8 text-[10px] font-medium uppercase tracking-widest text-emerald-400">Protected</span>
                      
                      <div className="w-full space-y-3">
                        {[
                          { label: "Encryption", status: "AES-256 Active", active: true },
                          { label: "Firewall", status: "All Threats Blocked", active: true },
                          { label: "VPN", status: "Swiss Tunnel", active: true },
                          { label: "Anti-Tracking", status: "Enabled", active: true },
                        ].map((item, i) => (
                          <div key={i} className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3">
                            <span className="text-xs text-white/50">{item.label}</span>
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-medium text-white/70">{item.status}</span>
                              <div className={`h-2 w-2 rounded-full ${item.active ? 'bg-emerald-400' : 'bg-white/20'}`} />
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8 w-full">
                        <div className="flex items-center justify-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 py-3 text-sm font-medium text-emerald-400">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                          </svg>
                          All Systems Secure
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -left-16 top-20 rounded-xl border border-white/10 bg-[#0a0a0a]/90 px-4 py-3 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20">
                      <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-white">Hardware Encryption</p>
                      <p className="text-[10px] text-white/40">Military Grade</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -right-12 bottom-32 rounded-xl border border-white/10 bg-[#0a0a0a]/90 px-4 py-3 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20">
                      <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-white">Swiss Infrastructure</p>
                      <p className="text-[10px] text-white/40">Data Sovereignty</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2">
                <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                <span className="text-xs font-medium uppercase tracking-wider text-emerald-400">The Device</span>
              </div>
              
              <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                OWR Secure Phone
              </h2>
              
              <p className="mb-8 text-base leading-relaxed text-white/50 md:text-lg">
                The most advanced secure smartphone ever created. Built from the ground up with privacy and security as the foundation, not an afterthought.
              </p>
              
              <div className="mb-10 space-y-4">
                {[
                  { title: "Custom Security Chip", desc: "Dedicated hardware encryption module isolated from all other systems" },
                  { title: "Hardened OS", desc: "Proprietary operating system with zero backdoors and no data collection" },
                  { title: "Tamper Detection", desc: "Physical intrusion sensors trigger automatic secure data wipe" },
                  { title: "Privacy Screen", desc: "Advanced AMOLED with built-in anti-surveillance technology" },
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10">
                      <svg className="h-3 w-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{feature.title}</h4>
                      <p className="text-sm text-white/40">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-all hover:scale-105 active:scale-95">
                  Explore Specifications
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
                <button className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-white/5">
                  Request Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#030303] to-transparent" />
      </section>

      {/* Design Section 4: Inline Video (former Hero) */}
      <VideoHero />

      {/* Design Section 5: Scrollytelling */}
      <HeadphoneScroll />

      {/* Design Section: Spline Mouse Follow (last design section) */}
      <section className="relative z-10 min-h-[80vh] w-full overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 z-0">
          {splineReady ? (
            // @ts-expect-error - spline-viewer is a web component
            <spline-viewer
              url="https://prod.spline.design/VurOuhfpnUXT4dJ0/scene.splinecode"
              style={{ width: "100%", height: "100%" }}
            />
          ) : (
            <div className="h-full w-full bg-black" />
          )}
        </div>

        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-[#050505]/50 via-transparent to-[#050505]/80" />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-l from-[#050505]/70 via-transparent to-transparent" />

        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-end">
          <div className="mr-8 max-w-lg px-6 md:mr-16 lg:mr-24">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 backdrop-blur-sm">
              <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              <span className="text-xs font-medium uppercase tracking-wider text-emerald-400">Interactive 3D Experience</span>
            </div>

            <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Security you can <span className="text-white/60">feel.</span>
            </h2>

            <p className="mb-8 text-base leading-relaxed text-white/50">
              Experience our security architecture in an entirely new way. Move your cursor to explore the multi-layered protection that guards your most sensitive data.
            </p>

            <div className="space-y-4">
              {[
                { label: "Hardware Layer", desc: "Physical encryption module" },
                { label: "Network Layer", desc: "Swiss-routed secure tunnel" },
                { label: "Application Layer", desc: "Sandboxed environment" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                    <span className="text-xs font-bold text-emerald-400">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{item.label}</p>
                    <p className="text-xs text-white/40">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 backdrop-blur-sm">
              <svg className="h-5 w-5 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
              </svg>
              <span className="text-xs text-white/40">Move your cursor to interact with the 3D model</span>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-32 bg-gradient-to-t from-[#050505] to-transparent" />
      </section>

      {/* Section: FAQ */}
      <section id="faq" className="relative z-10 overflow-hidden bg-gradient-to-b from-[#030303] via-[#040404] to-[#050505] scroll-mt-20">
        {/* Background elements */}
        <div className="pointer-events-none absolute inset-0">
          {/* Large FAQ text */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 select-none text-[40vw] font-bold tracking-tighter text-white/[0.015] md:text-[25vw]">
            FAQ
          </div>
          {/* Gradient orbs */}
          <div className="absolute -left-32 top-1/3 h-[400px] w-[400px] animate-pulse rounded-full bg-emerald-500/5 blur-[120px]" />
          <div className="absolute -right-32 bottom-1/3 h-[300px] w-[300px] animate-pulse rounded-full bg-cyan-500/5 blur-[100px]" style={{ animationDelay: '2s' }} />
        </div>
        
        {/* Top fade */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#030303] to-transparent" />
        
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:px-12 md:py-32">
          {/* Two Column Layout */}
          <div className="grid gap-16 lg:grid-cols-5 lg:gap-20">
            {/* Left Column - Header (sticky) */}
            <div className="lg:col-span-2 lg:sticky lg:top-32 lg:self-start">
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2">
                <div className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-400">Support</span>
              </div>
              
              <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
                Questions? <br /><span className="text-white/50">We have answers.</span>
              </h2>
              
              <p className="mb-8 max-w-md text-base leading-relaxed text-white/40">
                Everything you need to know about OWR Secure and how it protects your communications.
              </p>
              
              {/* Quick contact card */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10">
                    <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Still have questions?</p>
                    <p className="text-xs text-white/40">Our team is here to help</p>
                  </div>
                </div>
                <button className="group flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition-all hover:border-emerald-500/30 hover:bg-emerald-500/10">
                  <span>Contact Support</span>
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Right Column - FAQ Items */}
            <div className="lg:col-span-3">
              <div className="space-y-4">
                {[
                  {
                    q: "How does OWR encryption differ from standard smartphones?",
                    a: "OWR uses military-grade AES-256 encryption combined with RSA-4096 for key exchange. Unlike standard devices, encryption is hardware-based and cannot be bypassed by software exploits.",
                    icon: (
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                      </svg>
                    ),
                  },
                  {
                    q: "Can government agencies access my data?",
                    a: "No. Our Swiss-based infrastructure operates under Swiss privacy laws, which are among the strictest in the world. We have zero-access architecture, meaning even we cannot decrypt your data.",
                    icon: (
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                      </svg>
                    ),
                  },
                  {
                    q: "What happens if my device is lost or stolen?",
                    a: "You can instantly trigger a remote wipe that securely erases all data. The device also features tamper detection that automatically wipes data if physical intrusion is detected.",
                    icon: (
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                      </svg>
                    ),
                  },
                  {
                    q: "How long does setup and onboarding take?",
                    a: "Standard setup takes less than 30 minutes. For enterprise deployments, our team provides white-glove onboarding with custom security protocols tailored to your organization.",
                    icon: (
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                  },
                  {
                    q: "Is there ongoing support included?",
                    a: "All plans include 24/7 priority support. Professional and Sovereign tiers include a dedicated account manager and security consultant.",
                    icon: (
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                      </svg>
                    ),
                  },
                ].map((faq, i) => (
                  <div 
                    key={i} 
                    className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]"
                  >
                    {/* Hover glow */}
                    <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-emerald-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                    
                    <div className="relative z-10">
                      <div className="mb-4 flex items-start gap-4">
                        {/* Icon */}
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/50 transition-all duration-300 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 group-hover:text-emerald-400">
                          {faq.icon}
                        </div>
                        {/* Question */}
                        <h3 className="flex-1 pt-2 text-base font-medium leading-snug text-white transition-colors group-hover:text-white">
                          {faq.q}
                        </h3>
                      </div>
                      
                      {/* Answer */}
                      <div className="pl-14">
                        <p className="text-sm leading-relaxed text-white/40">
                          {faq.a}
                        </p>
                      </div>
                      
                      {/* Number indicator */}
                      <div className="absolute right-6 top-6 font-mono text-xs text-white/10">
                        0{i + 1}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Bottom note */}
              <div className="mt-8 flex items-center justify-center gap-2 text-center">
                <svg className="h-4 w-4 text-emerald-400/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-xs text-white/30">Updated January 2026</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom gradient */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#030303] to-transparent" />
      </section>

      {/* Footer (last section) */}
      <section className="relative z-10 overflow-hidden bg-gradient-to-b from-[#030303] to-[#020202]">
        {/* Top fade */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#030303] to-transparent" />
        
        {/* Giant OWR Background Text */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
          <span 
            className="select-none text-[30vw] font-bold tracking-tighter text-white/[0.02] md:text-[25vw] animate-pulse"
            style={{ 
              textShadow: '0 0 80px rgba(16,185,129,0.05)',
              animation: 'pulse 4s ease-in-out infinite'
            }}
          >
            OWR
          </span>
        </div>

        {/* Animated gradient orbs */}
        <div className="pointer-events-none absolute -left-32 top-1/4 h-[400px] w-[400px] rounded-full bg-emerald-500/5 blur-[100px] animate-[pulse_6s_ease-in-out_infinite]" />
        <div className="pointer-events-none absolute -right-32 bottom-1/4 h-[300px] w-[300px] rounded-full bg-emerald-400/5 blur-[80px] animate-[pulse_8s_ease-in-out_infinite_1s]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-32">
          {/* Main Footer Content */}
          <div className="grid gap-16 lg:grid-cols-12">
            {/* Left Column - Brand & CTA */}
            <div className="lg:col-span-5">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <span className="text-xl font-semibold tracking-tight text-white">OWR</span>
              </div>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">The Future of Security</p>
              <h3 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Communication that protects.</h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/40">
                OWR Secure represents the pinnacle of secure communication. Combining cutting-edge encryption with over 30 years of security expertise.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="group relative inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition-all hover:scale-105 active:scale-95">
                  Schedule Consultation
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
                <button className="rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/5">
                  Contact Sales
                </button>
              </div>
            </div>

            {/* Middle Column - Links */}
            <div className="grid grid-cols-2 gap-8 lg:col-span-4 lg:gap-12">
              <div>
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/60">Product</h4>
                <ul className="space-y-3">
                  {["Features", "Security", "Pricing", "Enterprise", "Updates"].map((link, i) => (
                    <li key={i}>
                      <a href="#" className="group flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white">
                        <span className="h-px w-0 bg-emerald-400 transition-all group-hover:w-3" />
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/60">Company</h4>
                <ul className="space-y-3">
                  {["About", "Careers", "Press", "Partners", "Contact"].map((link, i) => (
                    <li key={i}>
                      <a href="#" className="group flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white">
                        <span className="h-px w-0 bg-emerald-400 transition-all group-hover:w-3" />
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Stats & Social */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
                <div className="mb-6 grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <span className="text-2xl font-bold text-white">195</span>
                    <p className="text-[10px] uppercase tracking-wider text-white/30">Countries</p>
                  </div>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-white">24/7</span>
                    <p className="text-[10px] uppercase tracking-wider text-white/30">Support</p>
                  </div>
                </div>
                <div className="border-t border-white/5 pt-6">
                  <p className="mb-3 text-[10px] font-medium uppercase tracking-wider text-white/30">Follow Us</p>
                  <div className="flex gap-3">
                    {[
                      { name: "X", icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /> },
                      { name: "LinkedIn", icon: <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" /> },
                      { name: "Instagram", icon: <><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.058-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.684-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.041 0 2.67.01 2.986.058 4.04.045.976.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058 2.67 0 2.987-.01 4.04-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041 0-2.67-.01-2.986-.058-4.04-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.055-.048-1.37-.058-4.041-.058zm0 3.063a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.468a3.333 3.333 0 100-6.666 3.333 3.333 0 000 6.666zm6.538-8.671a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" /></> },
                    ].map((social, i) => (
                      <a 
                        key={i}
                        href="#" 
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/40 transition-all hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:text-emerald-400"
                      >
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          {social.icon}
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-white/5 pt-8">
            <div className="flex items-center gap-4">
              <span className="text-xs text-white/30">2026 OWR Wealth GmbH</span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span className="text-xs text-white/30">Swiss Engineered</span>
            </div>
            <div className="flex flex-wrap gap-6">
              {["Privacy Policy", "Terms of Service", "Imprint", "Cookie Settings"].map((link, i) => (
                <a 
                  key={i}
                  href="#" 
                  className="text-xs text-white/30 transition-colors hover:text-white/60"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Security Badge */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.02] px-4 py-2">
              <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <span className="text-[10px] font-medium uppercase tracking-wider text-white/40">ISO 27001 Certified</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.02] px-4 py-2">
              <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
              <span className="text-[10px] font-medium uppercase tracking-wider text-white/40">End-to-End Encrypted</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
