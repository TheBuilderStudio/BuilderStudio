"use client"

import { motion } from "framer-motion"
import { Calendar, Lightbulb, Code2, Rocket } from "lucide-react"

const steps = [
  {
    title: "The Problem",
    description: "Stuck with an idea",
    emoji: "😩",
    isEmoji: true,
  },
  {
    title: "Discovery",
    description: "Aligning vision",
    Icon: Calendar,
  },
  {
    title: "Validate",
    description: "Market testing",
    Icon: Lightbulb,
  },
  {
    title: "Build MVP",
    description: "Rapid execution",
    Icon: Code2,
  },
  {
    title: "Launch",
    description: "Going live to users",
    Icon: Rocket,
  },
  {
    title: "The Solution",
    description: "Profitable Startup",
    emoji: "🤩",
    isEmoji: true,
  }
]

export const JourneySection = () => {
  return (
    <section id="services" className="py-12 lg:py-20 px-4 bg-transparent relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            From Idea to Revenue
          </h2>
          <p className="text-xl text-white/60">
            The journey from idea to scaled product.
          </p>
        </motion.div>

        <div className="relative flex flex-col lg:flex-row justify-between items-start lg:items-start w-full mt-12 gap-y-6 sm:gap-y-8 lg:gap-y-0">

          {/* Mobile Background Wave SVG */}
          <div className="absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-[64px] lg:hidden overflow-visible pointer-events-none z-0">
            <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 64 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 32 0 Q 0 100 32 200 T 32 400 T 32 600 T 32 800 T 32 1000" stroke="rgba(255,255,255,0.05)" strokeWidth="2" fill="none" />
              <motion.path
                d="M 32 0 Q 0 100 32 200 T 32 400 T 32 600 T 32 800 T 32 1000"
                stroke="url(#mobile-wave-gradient)"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient id="mobile-wave-gradient" x1="0" y1="0" x2="0" y2="1000" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#10B981" stopOpacity="1" />
                  <stop offset="1" stopColor="#10B981" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Desktop Background Wave SVG */}
          <div className="absolute left-[80px] right-[80px] top-[0] h-[64px] hidden lg:block overflow-visible pointer-events-none z-0">
            <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1000 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0 32 Q 100 0 200 32 T 400 32 T 600 32 T 800 32 T 1000 32" stroke="rgba(255,255,255,0.05)" strokeWidth="4" fill="none" />
              <motion.path
                d="M 0 32 Q 100 0 200 32 T 400 32 T 600 32 T 800 32 T 1000 32"
                stroke="url(#wave-gradient)"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient id="wave-gradient" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#10B981" stopOpacity="1" />
                  <stop offset="1" stopColor="#10B981" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {steps.map((step, index) => {
            const isFirst = index === 0;
            const isLast = index === steps.length - 1;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative z-20 flex w-full lg:w-40 group lg:flex-col items-center ${index % 2 === 0 ? "justify-start" : "justify-end"} lg:justify-start min-h-[64px] lg:min-h-0`}
              >
                {/* Node / Icon Area */}
                <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 lg:mb-6 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:relative lg:left-0 lg:top-0 lg:translate-x-0 lg:translate-y-0 z-30">
                  <div className="absolute inset-0 bg-emerald-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

                  <motion.div
                    whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? -10 : 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#0A0A0A] border border-white/[0.08] flex items-center justify-center shadow-xl relative z-10 cursor-pointer ${isFirst ? 'border-red-500/30' : isLast ? 'border-emerald-500/30' : ''}`}
                  >
                    {step.isEmoji ? (
                      <span
                        className="text-2xl sm:text-3xl leading-none flex items-center justify-center pt-0.5"
                        style={{
                          filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.5))",
                          transform: "translateZ(10px)"
                        }}
                      >
                        {step.emoji}
                      </span>
                    ) : (
                      step.Icon && <step.Icon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500 relative z-10 transition-transform duration-300 group-hover:scale-110" />
                    )}
                  </motion.div>
                </div>

                {/* Content Area */}
                <div className={`w-1/2 lg:w-full flex flex-col lg:items-center lg:text-center ${
                  index % 2 === 0 
                    ? "items-end text-right pr-8 sm:pr-12 lg:pr-0" 
                    : "items-start text-left pl-8 sm:pl-12 lg:pl-0"
                }`}>
                  <div className={`bg-white/[0.03] backdrop-blur-md border border-white/[0.08] p-3 sm:p-4 rounded-xl shadow-xl lg:bg-transparent lg:backdrop-blur-none lg:border-transparent lg:p-0 lg:shadow-none inline-flex flex-col ${index % 2 === 0 ? "items-end text-right lg:items-center lg:text-center" : "items-start text-left lg:items-center lg:text-center"} w-full max-w-[140px] sm:max-w-[180px] lg:max-w-none`}>
                    <div className={`text-[9px] sm:text-[10px] font-bold mb-1 uppercase tracking-widest ${isFirst ? 'text-white/40' : isLast ? 'text-emerald-500' : 'text-emerald-500/70'}`}>
                      {isFirst ? 'Start' : isLast ? 'Goal' : `Step ${index}`}
                    </div>
                    <h3 className="text-[13px] sm:text-[15px] lg:text-lg font-bold text-white mb-1">
                      {step.title}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] lg:text-xs text-white/50 hidden md:block">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
