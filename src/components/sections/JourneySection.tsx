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

        <div className="relative flex flex-col lg:flex-row justify-between items-start lg:items-start w-full mt-12 gap-y-16 lg:gap-y-0">

          {/* Mobile Background Line */}
          <div className="absolute left-[32px] top-8 bottom-8 w-[2px] bg-white/10 lg:hidden" />

          {/* Mobile Animated Line */}
          <motion.div
            className="absolute left-[32px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-emerald-500/50 via-emerald-500/50 to-transparent origin-top lg:hidden"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />

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
                className={`relative z-10 flex lg:flex-col items-center lg:items-center w-full lg:w-40 group`}
              >
                {/* Node / Icon Area */}
                <div className="relative flex items-center justify-center w-16 h-16 flex-shrink-0 lg:mb-6">
                  <div className="absolute inset-0 bg-emerald-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

                  <motion.div
                    whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? -10 : 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`w-14 h-14 rounded-2xl bg-[#0A0A0A] border border-white/[0.08] flex items-center justify-center shadow-xl relative z-10 cursor-pointer ${isFirst ? 'bg-red-500/5 border-red-500/20' : isLast ? 'bg-emerald-500/5 border-emerald-500/20' : ''}`}
                  >
                    {step.isEmoji ? (
                      <span
                        className="text-3xl"
                        style={{
                          filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.5))",
                          transform: "translateZ(10px)"
                        }}
                      >
                        {step.emoji}
                      </span>
                    ) : (
                      step.Icon && <step.Icon className="w-6 h-6 text-emerald-500 relative z-10 transition-transform duration-300 group-hover:scale-110" />
                    )}
                  </motion.div>
                </div>

                {/* Content Area */}
                <div className="ml-6 lg:ml-0 flex flex-col items-start lg:items-center text-left lg:text-center">
                  <div className={`text-[10px] font-bold mb-1 uppercase tracking-widest ${isFirst ? 'text-white/40' : isLast ? 'text-emerald-500' : 'text-emerald-500/70'}`}>
                    {isFirst ? 'Start' : isLast ? 'Goal' : `Step ${index}`}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-white/50 hidden md:block">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
