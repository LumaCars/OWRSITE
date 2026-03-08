"use client"
import React, { useState, memo } from 'react';

type GlowColor = 'emerald' | 'cyan';

interface OrbitingItemProps {
  size: number;
  glowColor: GlowColor;
  label: string;
  icon: React.ReactNode;
  initialRotation: number;
}

// Security icons
const securityIcons = {
  hardware: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
    </svg>
  ),
  encryption: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
  network: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
  shield: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  eye: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
    </svg>
  ),
  server: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
    </svg>
  ),
};

// Orbiting item with CSS animation (counter-rotate to keep icon upright)
const OrbitingItem = memo(({ size, glowColor, label, icon, initialRotation }: OrbitingItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const glowColors = {
    emerald: { bg: 'bg-emerald-500/20', border: 'border-emerald-500/30', text: 'text-emerald-400', shadow: 'rgba(16, 185, 129, 0.4)' },
    cyan: { bg: 'bg-cyan-500/20', border: 'border-cyan-500/30', text: 'text-cyan-400', shadow: 'rgba(6, 182, 212, 0.4)' },
  };

  const colors = glowColors[glowColor];

  return (
    <div
      className="absolute top-1/2 left-1/2"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        marginLeft: `-${size / 2}px`,
        marginTop: `-${size / 2}px`,
        transform: `rotate(${initialRotation}deg)`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          relative w-full h-full p-2 backdrop-blur-sm
          rounded-full flex items-center justify-center
          transition-all duration-300 cursor-pointer border
          ${colors.bg} ${colors.border} ${colors.text}
          ${isHovered ? 'scale-125' : 'hover:scale-110'}
        `}
        style={{
          boxShadow: isHovered
            ? `0 0 30px ${colors.shadow}, 0 0 60px ${colors.shadow}`
            : `0 0 15px ${colors.shadow}`,
          transform: `rotate(-${initialRotation}deg)`,
        }}
      >
        {icon}
        {isHovered && (
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/90 backdrop-blur-sm rounded-lg text-[10px] font-medium text-white whitespace-nowrap pointer-events-none border border-white/10 z-50">
            {label}
          </div>
        )}
      </div>
    </div>
  );
});
OrbitingItem.displayName = 'OrbitingItem';

// Main component using pure CSS animations
export default function OrbitingSecurity() {
  return (
    <div className="relative w-full flex items-center justify-center">
      {/* CSS Keyframes */}
      <style jsx>{`
        @keyframes orbit-cw {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbit-ccw {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .orbit-inner {
          animation: orbit-cw 20s linear infinite;
        }
        .orbit-outer {
          animation: orbit-ccw 30s linear infinite;
        }
        .orbit-inner:hover, .orbit-outer:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative w-[320px] h-[320px] md:w-[360px] md:h-[360px] flex items-center justify-center">
        {/* Central shield icon */}
        <div className="relative z-20 w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 rounded-full flex items-center justify-center border border-emerald-500/30 shadow-2xl">
          <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-xl animate-pulse" />
          <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative z-10">
            <svg className="h-10 w-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
          </div>
        </div>

        {/* Inner Orbit Path */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] rounded-full pointer-events-none">
          <div className="absolute inset-0 rounded-full animate-pulse" style={{
            background: 'radial-gradient(circle, transparent 60%, rgba(16, 185, 129, 0.1) 80%, rgba(16, 185, 129, 0.2) 100%)',
            boxShadow: '0 0 40px rgba(16, 185, 129, 0.2), inset 0 0 40px rgba(16, 185, 129, 0.1)',
          }} />
          <div className="absolute inset-0 rounded-full" style={{ border: '1px dashed rgba(16, 185, 129, 0.2)' }} />
        </div>

        {/* Outer Orbit Path */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full pointer-events-none">
          <div className="absolute inset-0 rounded-full animate-pulse" style={{
            background: 'radial-gradient(circle, transparent 60%, rgba(6, 182, 212, 0.1) 80%, rgba(6, 182, 212, 0.2) 100%)',
            boxShadow: '0 0 40px rgba(6, 182, 212, 0.2), inset 0 0 40px rgba(6, 182, 212, 0.1)',
            animationDelay: '1s',
          }} />
          <div className="absolute inset-0 rounded-full" style={{ border: '1px dashed rgba(6, 182, 212, 0.2)' }} />
        </div>

        {/* Inner Orbit - 3 items rotating clockwise */}
        <div className="orbit-inner absolute top-1/2 left-1/2 w-[160px] h-[160px]" style={{ marginLeft: '-80px', marginTop: '-80px' }}>
          {/* Item at top (0deg) */}
          <div className="absolute" style={{ top: '0', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <OrbitingItem size={44} glowColor="emerald" label="Hardware" icon={securityIcons.hardware} initialRotation={0} />
          </div>
          {/* Item at 120deg */}
          <div className="absolute" style={{ top: '93px', left: '0', transform: 'translate(-50%, -50%)' }}>
            <OrbitingItem size={44} glowColor="emerald" label="Encryption" icon={securityIcons.encryption} initialRotation={120} />
          </div>
          {/* Item at 240deg */}
          <div className="absolute" style={{ top: '93px', right: '0', transform: 'translate(50%, -50%)' }}>
            <OrbitingItem size={44} glowColor="emerald" label="Protection" icon={securityIcons.shield} initialRotation={240} />
          </div>
        </div>

        {/* Outer Orbit - 3 items rotating counter-clockwise */}
        <div className="orbit-outer absolute top-1/2 left-1/2 w-[280px] h-[280px]" style={{ marginLeft: '-140px', marginTop: '-140px' }}>
          {/* Item at top (0deg) */}
          <div className="absolute" style={{ top: '0', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <OrbitingItem size={40} glowColor="cyan" label="Network" icon={securityIcons.network} initialRotation={0} />
          </div>
          {/* Item at 120deg */}
          <div className="absolute" style={{ top: '161px', left: '0', transform: 'translate(-50%, -50%)' }}>
            <OrbitingItem size={40} glowColor="cyan" label="Zero Knowledge" icon={securityIcons.eye} initialRotation={120} />
          </div>
          {/* Item at 240deg */}
          <div className="absolute" style={{ top: '161px', right: '0', transform: 'translate(50%, -50%)' }}>
            <OrbitingItem size={40} glowColor="cyan" label="Swiss Servers" icon={securityIcons.server} initialRotation={240} />
          </div>
        </div>

        {/* Connecting lines (decorative) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 360 360">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <line
              key={angle}
              x1="180"
              y1="180"
              x2={180 + Math.cos((angle * Math.PI) / 180) * 160}
              y2={180 + Math.sin((angle * Math.PI) / 180) * 160}
              stroke="url(#lineGradient)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          ))}
        </svg>
      </div>
    </div>
  );
}
