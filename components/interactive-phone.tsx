"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

type ScreenType = "home" | "security" | "messages" | "settings"

export default function InteractivePhone() {
  const [activeScreen, setActiveScreen] = useState<ScreenType>("home")
  const [isScanning, setIsScanning] = useState(false)
  const [notifications, setNotifications] = useState(3)

  const handleScan = () => {
    setIsScanning(true)
    setTimeout(() => {
      setIsScanning(false)
      setNotifications(0)
    }, 2000)
  }

  return (
    <div className="relative flex items-center justify-center">
      <div className="relative h-[400px] w-[300px] rounded-[3rem] border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-2">
        <div className="h-full w-full overflow-hidden rounded-[2.5rem] bg-[#0a0a0a]">
          {/* Phone Notch */}
          <div className="mx-auto mt-2 h-6 w-24 rounded-full bg-black" />
          
          {/* Screen Content */}
          <div className="relative h-[calc(100%-80px)] p-4">
            <AnimatePresence mode="wait">
              {/* Home Screen */}
              {activeScreen === "home" && (
                <motion.div
                  key="home"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex h-full flex-col"
                >
                  {/* Status Bar */}
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-[9px] text-white/40">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[8px] text-emerald-400">Secure</span>
                    </div>
                  </div>

                  {/* Security Status */}
                  <motion.button
                    onClick={handleScan}
                    className="mb-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-left transition-all hover:bg-white/10 active:scale-[0.98]"
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-wider text-white/40">Security Status</span>
                      {notifications > 0 && (
                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-[8px] font-bold text-black">
                          {notifications}
                        </span>
                      )}
                    </div>
                    {isScanning ? (
                      <div className="flex items-center gap-2">
                        <motion.div
                          className="h-3 w-3 rounded-full border-2 border-emerald-400 border-t-transparent"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        <span className="text-xs text-emerald-400">Scanning...</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-emerald-400" />
                        <span className="text-sm font-semibold text-white">Protected</span>
                      </div>
                    )}
                    <p className="mt-1 text-[9px] text-white/30">Tap to run security scan</p>
                  </motion.button>

                  {/* Quick Actions Grid */}
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { icon: "shield", label: "Security", screen: "security" as ScreenType },
                      { icon: "message", label: "Messages", screen: "messages" as ScreenType },
                      { icon: "settings", label: "Settings", screen: "settings" as ScreenType },
                      { icon: "lock", label: "Vault", screen: "home" as ScreenType },
                    ].map((item, i) => (
                      <motion.button
                        key={i}
                        onClick={() => setActiveScreen(item.screen)}
                        className="flex flex-col items-center justify-center rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-all hover:bg-white/10"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="mb-1 flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                          {item.icon === "shield" && (
                            <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                            </svg>
                          )}
                          {item.icon === "message" && (
                            <svg className="h-4 w-4 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                            </svg>
                          )}
                          {item.icon === "settings" && (
                            <svg className="h-4 w-4 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          )}
                          {item.icon === "lock" && (
                            <svg className="h-4 w-4 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                            </svg>
                          )}
                        </div>
                        <span className="text-[9px] text-white/60">{item.label}</span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Security Screen */}
              {activeScreen === "security" && (
                <motion.div
                  key="security"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex h-full flex-col"
                >
                  <button
                    onClick={() => setActiveScreen("home")}
                    className="mb-4 flex items-center gap-1 text-[10px] text-white/40 hover:text-white"
                  >
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                  </button>
                  <h3 className="mb-4 text-sm font-semibold text-white">Security Center</h3>
                  
                  <div className="space-y-2">
                    {[
                      { label: "Encryption", status: "Active", color: "emerald" },
                      { label: "Firewall", status: "Active", color: "emerald" },
                      { label: "VPN", status: "Connected", color: "emerald" },
                      { label: "Anti-Malware", status: "Updated", color: "emerald" },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] p-3"
                      >
                        <span className="text-[10px] text-white/60">{item.label}</span>
                        <div className="flex items-center gap-1">
                          <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          <span className="text-[9px] text-emerald-400">{item.status}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Messages Screen */}
              {activeScreen === "messages" && (
                <motion.div
                  key="messages"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex h-full flex-col"
                >
                  <button
                    onClick={() => setActiveScreen("home")}
                    className="mb-4 flex items-center gap-1 text-[10px] text-white/40 hover:text-white"
                  >
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                  </button>
                  <h3 className="mb-4 text-sm font-semibold text-white">Secure Messages</h3>
                  
                  <div className="space-y-2">
                    {[
                      { name: "Executive Team", preview: "Meeting confirmed for...", time: "2m", unread: true },
                      { name: "Security Alert", preview: "All systems normal", time: "1h", unread: false },
                      { name: "IT Department", preview: "Update complete", time: "3h", unread: false },
                    ].map((msg, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="cursor-pointer rounded-lg border border-white/5 bg-white/[0.02] p-3 transition-all hover:bg-white/10"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-2">
                            {msg.unread && <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />}
                            <span className={`text-[10px] ${msg.unread ? "font-semibold text-white" : "text-white/60"}`}>
                              {msg.name}
                            </span>
                          </div>
                          <span className="text-[8px] text-white/30">{msg.time}</span>
                        </div>
                        <p className="mt-1 text-[9px] text-white/40 truncate">{msg.preview}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span className="text-[8px] text-white/40">End-to-end encrypted</span>
                  </div>
                </motion.div>
              )}

              {/* Settings Screen */}
              {activeScreen === "settings" && (
                <motion.div
                  key="settings"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex h-full flex-col"
                >
                  <button
                    onClick={() => setActiveScreen("home")}
                    className="mb-4 flex items-center gap-1 text-[10px] text-white/40 hover:text-white"
                  >
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                  </button>
                  <h3 className="mb-4 text-sm font-semibold text-white">Settings</h3>
                  
                  <div className="space-y-3">
                    {[
                      { label: "Biometric Lock", enabled: true },
                      { label: "Auto-Wipe", enabled: true },
                      { label: "Stealth Mode", enabled: false },
                      { label: "Location Mask", enabled: true },
                    ].map((setting, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center justify-between"
                      >
                        <span className="text-[10px] text-white/60">{setting.label}</span>
                        <div
                          className={`h-5 w-9 rounded-full p-0.5 transition-colors ${
                            setting.enabled ? "bg-emerald-500" : "bg-white/10"
                          }`}
                        >
                          <motion.div
                            className="h-4 w-4 rounded-full bg-white"
                            animate={{ x: setting.enabled ? 16 : 0 }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Home Indicator */}
          <div className="absolute bottom-2 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-white/20" />
        </div>
      </div>

      {/* Floating Labels */}
      <motion.div 
        className="absolute -right-4 top-1/4 cursor-pointer rounded-lg border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm transition-all hover:bg-white/10"
        whileHover={{ scale: 1.05, x: 4 }}
        onClick={() => setActiveScreen("security")}
      >
        <span className="text-[10px] text-white/40">Encryption</span>
        <p className="text-sm font-semibold text-emerald-400">Active</p>
      </motion.div>
      
      <motion.div 
        className="absolute -left-4 bottom-1/4 cursor-pointer rounded-lg border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm transition-all hover:bg-white/10"
        whileHover={{ scale: 1.05, x: -4 }}
        onClick={() => setActiveScreen("messages")}
      >
        <span className="text-[10px] text-white/40">Threats Blocked</span>
        <p className="text-sm font-semibold text-white">14,892</p>
      </motion.div>

      <motion.div 
        className="absolute -right-8 bottom-1/3 cursor-pointer rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 backdrop-blur-sm transition-all hover:bg-emerald-500/20"
        whileHover={{ scale: 1.05 }}
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={handleScan}
      >
        <span className="text-[9px] font-medium text-emerald-400">Tap to scan</span>
      </motion.div>
    </div>
  )
}
