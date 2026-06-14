"use client"

import { motion } from "framer-motion"
import { Users } from "lucide-react"
import Image from "next/image"
import { ContactModalTrigger } from "@/components/ui/ContactModalTrigger"
import { ProjectFormModalTrigger } from "@/components/ui/ProjectFormModalTrigger"

export const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] lg:min-h-[800px] w-full flex flex-col items-center justify-center overflow-hidden bg-transparent pb-[80px]">
      {/* =========================================
          BACKGROUND SYSTEM - HERO SPECIFIC
          ========================================= */}

      {/* Layer 2 — Curved Grid: Green architectural smooth curves */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-radial-gradient(ellipse at 50% 130%, transparent 0, transparent 60px, rgba(16,185,129,0.08) 60px, rgba(16,185,129,0.08) 61px),
            repeating-conic-gradient(from -90deg at 50% 130%, rgba(16,185,129,0.08) 0deg, rgba(16,185,129,0.08) 0.1deg, transparent 0.1deg, transparent 1.5deg)
          `,
          maskImage: 'radial-gradient(ellipse at 50% 50%, black 0%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 0%, transparent 80%)',
        }}
      />

      {/* Layer 3 — Emerald Arc System: Sharp green curved lines */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Core structure arcs */}
        <div className="absolute top-[65%] left-[-20vw] right-[-20vw] h-[100vh] rounded-[100%] border-t border-[#10B981] opacity-[0.15] blur-[1px]" />
        <div className="absolute top-[70%] left-[-30vw] right-[-30vw] h-[100vh] rounded-[100%] border-t border-[#10B981] opacity-[0.10] blur-[1px]" />
        {/* Subtle glow for the arcs */}
        <div className="absolute top-[65%] left-[-20vw] right-[-20vw] h-[100vh] rounded-[100%] border-t border-[#10B981] opacity-[0.08] blur-[8px]" />
      </div>

      {/* Floating Social & Community Sidebar (Left on Desktop, Right on Mobile) */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="absolute right-2 sm:right-4 lg:right-auto lg:left-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 lg:gap-4 z-30 scale-[0.8] sm:scale-90 lg:scale-100 origin-right lg:origin-left"
      >
        <div className="w-[1px] h-8 lg:h-12 bg-gradient-to-b from-transparent to-white/10 mx-auto mb-1 lg:mb-2" />
        
        {[
          { 
            tooltip: "Join Builder Studio", 
            icon: <Users size={20} color="#25D366" />, 
            href: "https://chat.whatsapp.com/KmxvbaoVVn1Kd9Cux4eDS4",
            hoverClass: "hover:border-[#25D366]/50 hover:bg-[#25D366]/10 hover:shadow-[0_0_20px_rgba(37,211,102,0.2)]" 
          },
          { 
            tooltip: "Instagram", 
            icon: <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="#E1306C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>, 
            href: "https://www.instagram.com/thebuilderstudio.in/",
            hoverClass: "hover:border-[#E1306C]/50 hover:bg-[#E1306C]/10 hover:shadow-[0_0_20px_rgba(225,48,108,0.2)]" 
          },
          { 
            tooltip: "LinkedIn", 
            icon: <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="#0077B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>, 
            href: "https://www.linkedin.com/company/thebuilderstudio/",
            hoverClass: "hover:border-[#0077B5]/50 hover:bg-[#0077B5]/10 hover:shadow-[0_0_20px_rgba(0,119,181,0.2)]" 
          }
        ].map((item, i) => (
          <a 
            key={i}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-12 h-12 rounded-full bg-[#0A0A0A]/40 backdrop-blur-md border border-white/10 flex items-center justify-center transition-all duration-300 group relative ${item.hoverClass}`}
          >
            {item.icon}
            
            {/* Tooltip (Hidden on Mobile) */}
            <span className="hidden lg:block absolute left-[calc(100%+16px)] px-3 py-1.5 rounded-md bg-[#0A0A0A] border border-white/10 text-xs font-medium text-white opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
              {item.tooltip}
            </span>
          </a>
        ))}

        <div className="w-[1px] h-8 lg:h-12 bg-gradient-to-t from-transparent to-white/10 mx-auto mt-1 lg:mt-2" />
      </motion.div>

      {/* =========================================
          CONTENT SYSTEM WITH SKETCH LAYERS
          ========================================= */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col items-center justify-center text-center px-4 pt-40 md:pt-48">
        
        {/* Plugio Announcement */}
        <motion.a
          href="https://plugio.app"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="group flex items-center gap-3 px-4 py-2 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 hover:border-[#10B981]/40 hover:bg-[#10B981]/20 transition-all duration-300 mb-6 md:mb-8 cursor-pointer shadow-[0_0_15px_rgba(16,185,129,0.1)]"
        >
          <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden flex-shrink-0 bg-white">
            <Image 
              src="/assets/plugio-logo.jpg" 
              alt="Plugio Logo" 
              fill 
              sizes="(max-width: 768px) 24px, 28px"
              className="object-cover"
            />
          </div>
          <span className="text-[12px] sm:text-[14px] font-medium text-white/90">
            <strong className="text-white">Plugio is Live!</strong> The AI Content Distribution Platform
          </span>
          <span className="text-[#10B981] font-bold group-hover:translate-x-1 transition-transform">→</span>
        </motion.a>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-black text-white text-[2.2rem] sm:text-[3rem] md:text-[clamp(3rem,7vw,5rem)] leading-[1.1] md:leading-[1.05] tracking-[-0.02em] md:tracking-[-0.03em] mb-6 md:mb-8 max-w-[1000px] relative px-2 sm:px-4 md:px-0 will-change-transform transform-gpu"
        >
          Turn Your{' '}
          <span className="relative inline-block">
            Idea
          </span>
          <br className="block" />
          Into a <span className="text-[#10B981]">Profitable</span>
          <br className="block" />
          <span className="relative inline-block text-[#10B981]">
            Startup
          </span>{' '}
          in 4<br className="block md:hidden" />
          <span className="hidden md:inline">{' '}</span>Weeks.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="text-[15px] sm:text-[18px] md:text-[20px] font-normal leading-[1.8] text-white/60 max-w-[700px] mb-[48px] relative px-8 sm:px-12 md:px-0 will-change-transform transform-gpu"
        >
          We partner with founders to validate, build, and scale digital products that generate <span className="text-white font-semibold">actual revenue</span>. Stop paying for code. Start paying for <span className="text-[#10B981] font-semibold">outcomes</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="relative flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0 will-change-transform transform-gpu"
        >
          <ContactModalTrigger>
            <button className="w-full sm:w-auto h-[48px] md:h-[56px] px-6 md:px-[32px] rounded-full bg-white hover:bg-neutral-200 text-black font-semibold text-[14px] md:text-[16px] transition-all duration-300 hover:-translate-y-[2px]">
              Claim Your Free Strategy Call
            </button>
          </ContactModalTrigger>
          <ProjectFormModalTrigger className="inline-block cursor-pointer w-full sm:w-auto">
            <button className="w-full sm:w-auto h-[48px] md:h-[56px] px-6 md:px-[32px] rounded-full bg-transparent border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-semibold text-[14px] md:text-[16px] transition-all duration-300 hover:-translate-y-[2px]">
              Start Building Today
            </button>
          </ProjectFormModalTrigger>
        </motion.div>
      </div>


    </section>
  )
}
