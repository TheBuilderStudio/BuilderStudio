"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Users, CheckCircle2, ArrowRight, MessageSquare, Lightbulb, Globe, Key, TrendingUp, Target, Share2 } from "lucide-react"

// Nodes for the network ecosystem
const networkNodes = [
  { label: "Founders", angle: -90 },
  { label: "Builders", angle: -18 },
  { label: "Creators", angle: 54 },
  { label: "Developers", angle: 126 },
  { label: "Marketers", angle: 198 },
]

const benefits = [
  { label: "Product Feedback", Icon: MessageSquare },
  { label: "Idea Validation", Icon: Lightbulb },
  { label: "Build In Public Updates", Icon: Globe },
  { label: "Founder Discussions", Icon: Users },
  { label: "Early Product Access", Icon: Key },
  { label: "Growth Insights", Icon: TrendingUp },
  { label: "Marketing Support", Icon: Target },
  { label: "Distribution Channels", Icon: Share2 },
]

export const CommunitySection = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section className="py-12 lg:py-20 px-6 md:px-12 lg:px-16 xl:px-24 w-full bg-transparent z-10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
        
        {/* Left Column: Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left relative z-20 order-2 lg:order-1">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#10B981] text-[12px] md:text-[14px] font-semibold tracking-[0.3em] uppercase mb-8"
          >
            THE BUILDER ECOSYSTEM
          </motion.span>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-white/60 max-w-[500px] leading-relaxed"
          >
            An exclusive ecosystem to validate and grow products alongside top creators and founders.
          </motion.p>

          {/* Benefits Section */}
          <div className="w-full mt-8 mb-10">
            <div className="flex flex-wrap sm:grid sm:grid-cols-2 justify-center sm:justify-start gap-2.5 md:gap-4 w-full mx-auto lg:mx-0">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-3 p-3 sm:px-5 sm:py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] transition-colors shadow-sm w-[110px] sm:w-full aspect-square sm:aspect-auto"
                >
                  <benefit.Icon className="text-[#10B981] shrink-0 w-6 h-6 sm:w-[18px] sm:h-[18px]" />
                  <span className="text-[11px] sm:text-[13px] md:text-[15px] text-white/90 font-medium text-center sm:text-left leading-tight">
                    {benefit.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center lg:items-start"
          >
            <span className="text-white/40 text-xs md:text-sm mb-4 uppercase tracking-[0.2em] font-semibold">
              Gain access to the ecosystem
            </span>
            
            <a 
              href="https://chat.whatsapp.com/KmxvbaoVVn1Kd9Cux4eDS4"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black hover:bg-neutral-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300 text-base md:text-lg font-bold group"
            >
              Join The Builder Circle
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Network Visualization */}
        <div className="relative w-full h-[380px] md:h-[600px] flex items-center justify-center order-1 lg:order-2">
          
          {/* Core Ambient Glow */}
          <div className="absolute inset-0 bg-[#10B981]/5 blur-[100px] rounded-full pointer-events-none z-0" />
          
          {/* Floating Particles */}
          {isMounted && [...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#10B981]/50 blur-[1px] z-10"
              animate={{
                y: [0, -30, 0, 30, 0],
                x: [0, 20, 0, -20, 0],
                opacity: [0.1, 0.6, 0.1],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 3,
              }}
              style={{
                top: `${15 + Math.random() * 70}%`,
                left: `${10 + Math.random() * 80}%`,
              }}
            />
          ))}

          {/* Central Node */}
          <motion.div 
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute z-30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="w-[120px] h-[120px] md:w-[160px] md:h-[160px] rounded-full bg-[#0A0A0A] backdrop-blur-xl border border-[#10B981]/40 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.15)] relative overflow-hidden">
              {/* Inner pulse */}
              <motion.div 
                animate={{ opacity: [0.1, 0.3, 0.1], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-[#10B981]/20 rounded-full blur-xl"
              />
              <Users size={28} className="text-[#10B981] mb-2 md:mb-3 relative z-10" />
              <span className="font-bold text-[15px] md:text-lg text-white text-center leading-tight relative z-10">Builder<br/>Studio</span>
            </div>
          </motion.div>

          {/* Surrounding Nodes & Connections */}
          {networkNodes.map((node, index) => {
            return (
              <div
                key={node.label}
                className="absolute left-1/2 top-1/2 w-full h-full pointer-events-none z-20"
                style={{ transform: `translate(-50%, -50%) rotate(${node.angle}deg)` }}
              >
                {/* The Node */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6, type: "spring" }}
                  className="absolute left-1/2 top-[10%] md:top-[8%] -translate-x-1/2 w-[90px] h-[32px] md:w-[120px] md:h-[44px] rounded-full bg-[#0A0A0A]/90 backdrop-blur-md border border-white/10 flex items-center justify-center pointer-events-auto shadow-[0_0_20px_rgba(0,0,0,0.5)] z-20 hover:border-[#10B981]/50 hover:bg-[#10B981]/5 transition-colors"
                  style={{ transform: `rotate(${-node.angle}deg)` }}
                >
                  <span className="text-white/80 text-[12px] md:text-[13px] font-medium tracking-wide">
                    {node.label}
                  </span>
                </motion.div>
                
                {/* Connection Line */}
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  whileInView={{ height: "24%", opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.8, ease: "easeOut" }}
                  className="absolute left-1/2 bottom-[50%] -translate-x-1/2 w-[1px] bg-gradient-to-t from-[#10B981]/60 to-transparent pointer-events-none z-10 mb-[60px] md:mb-[80px]"
                  style={{ transformOrigin: "bottom" }}
                />
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
