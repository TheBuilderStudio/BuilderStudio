"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
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
            tooltip: "WhatsApp Community", 
            icon: <svg viewBox="0 0 24 24" fill="#25D366" width="20" height="20"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>, 
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

      {/* Floating WhatsApp Chat Button */}
      <motion.a
        href="https://wa.me/917827843470?text=Hi%20Kundan%2C%20I%20want%20to%20discuss%20my%20MVP%20idea%20with%20you.%20Can%20we%20schedule%20a%20call%3F"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:bg-[#20bd5a] transition-all duration-300 group"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" className="translate-x-[1px] translate-y-[1px]">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
        <span className="absolute right-full mr-3 bg-black/80 backdrop-blur-md text-white text-[12px] font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us!
        </span>
      </motion.a>
    </section>
  )
}
