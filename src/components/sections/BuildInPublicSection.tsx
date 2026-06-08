"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"

// Sample Reels Data
const reels = [
  { id: 1, product: "Plugio Update #12", title: "AI Caption Engine Now Live", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80" },
  { id: 2, product: "ContextNode Progress #8", title: "Refactoring the Core State", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80" },
  { id: 3, product: "Study Wings Analytics", title: "Dashboard Redesign Reveal", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" },
  { id: 4, product: "Founder Vlog #4", title: "First $1K MRR Milestone", image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=600&q=80" },
  { id: 5, product: "UI/UX Teardown", title: "Fixing Onboarding Drop-offs", image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&w=600&q=80" },
  { id: 6, product: "Bansi Update #3", title: "Testing Video Render Speeds", image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80" },
  { id: 7, product: "Behind The Scenes", title: "Hiring Our First Engineer", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" },
]

export const BuildInPublicSection = () => {
  return (
    <section className="py-20 lg:py-28 w-full flex flex-col items-center justify-center bg-transparent z-10 overflow-hidden relative">
      {/* Removed local background layers to ensure the global background shows through */}

      <div className="w-full max-w-[1200px] mx-auto px-4 flex flex-col items-center relative z-10">
        
        {/* Header */}
        <div className="text-center flex flex-col items-center mb-8 relative z-20">
          
          {/* Label with Icon */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-6"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="insta1" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FEDA77"/>
                  <stop offset="0.25" stopColor="#F58529"/>
                  <stop offset="0.5" stopColor="#DD2A7B"/>
                  <stop offset="0.75" stopColor="#8134AF"/>
                  <stop offset="1" stopColor="#515BD4"/>
                </linearGradient>
              </defs>
              <path fill="url(#insta1)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.96-9.155a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
            </svg>
            <span className="text-[#10B981] text-[12px] md:text-[14px] font-bold tracking-[0.2em] uppercase mt-[2px]">
              BUILDING IN PUBLIC
            </span>
          </motion.div>
          
          {/* Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-bold tracking-tight text-white mb-6 max-w-[900px] leading-[1.1]"
          >
            What Happens Before <br className="hidden md:block"/>
            The <span className="text-[#10B981]">Launch</span> 🚀
          </motion.h2>
          
          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[17px] md:text-[19px] text-white/60 max-w-[750px] mx-auto leading-relaxed mb-10"
          >
            It&apos;s about the breakthroughs, the struggles, the pivots, and the lessons along the way.<br />
            We&apos;re sharing the entire Builder Studio journey here.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center mt-6"
          >
            <a 
              href="https://instagram.com/builderstudio.in"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 w-full sm:w-auto h-[56px] px-8 rounded-xl bg-white hover:bg-neutral-200 text-black font-semibold text-[16px] transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_20px_rgba(255,255,255,0.1)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="insta2" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FEDA77"/>
                    <stop offset="0.25" stopColor="#F58529"/>
                    <stop offset="0.5" stopColor="#DD2A7B"/>
                    <stop offset="0.75" stopColor="#8134AF"/>
                    <stop offset="1" stopColor="#515BD4"/>
                  </linearGradient>
                </defs>
                <path fill="url(#insta2)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.96-9.155a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
              </svg>
              Follow Our Journey
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>

            <button 
              onClick={() => {
                const form = document.getElementById('name');
                if (form) {
                  form.focus();
                  form.scrollIntoView({ behavior: 'smooth', block: 'center' });
                } else {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto h-[56px] px-8 rounded-xl bg-[#10B981] text-black font-bold text-[16px] hover:bg-[#10B981]/90 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_8px_30px_rgba(16,185,129,0.4)] transition-all duration-300 group"
            >
              Build Your MVP Next
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </motion.div>

        </div>
      </div>

      {/* V-Shape Reels Layout (Straight & Staggered) */}
      <div className="w-full relative mt-4 mb-10 overflow-x-auto hide-scrollbar">
        <div className="flex md:justify-center items-center gap-4 sm:gap-6 md:gap-8 px-8 md:px-4 w-max md:w-full mx-auto min-w-max md:min-w-0 py-32 snap-x snap-mandatory">
          {reels.map((reel, index) => {
            const offset = index - 3; // -3, -2, -1, 0, 1, 2, 3
            
            // No rotation, purely vertical staggered layout for 7 cards
            // Outermost (3): -120px
            // Mid-Outer (2): -60px
            // Inner (1): 0px
            // Center (0): +60px
            const translateY = Math.abs(offset) === 3 ? -120 : Math.abs(offset) === 2 ? -60 : Math.abs(offset) === 1 ? 0 : 60;
            const zIndex = 40 - Math.abs(offset) * 10;
            
            return (
              <div 
                key={reel.id}
                className="relative snap-center shrink-0 w-[90px] sm:w-[120px] md:w-[150px] lg:w-[180px] aspect-[9/16] rounded-[12px] md:rounded-[18px] bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/[0.08] overflow-hidden group cursor-pointer transition-colors duration-300 hover:border-white/20"
                style={{ 
                  zIndex,
                  transform: `translateY(${translateY}px)`
                }}
              >
                {/* Real Thumbnail Image */}
                <img src={reel.image} alt={reel.title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Overlay Gradient for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* Play Button Overlay (Shows on Hover) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90 group-hover:scale-100">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <Play className="text-white ml-1" size={24} fill="white" />
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 flex flex-col gap-1 md:gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
                      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id={`insta-${reel.id}`} x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FEDA77"/>
                            <stop offset="0.25" stopColor="#F58529"/>
                            <stop offset="0.5" stopColor="#DD2A7B"/>
                            <stop offset="0.75" stopColor="#8134AF"/>
                            <stop offset="1" stopColor="#515BD4"/>
                          </linearGradient>
                        </defs>
                        <path fill={`url(#insta-${reel.id})`} d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.96-9.155a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
                      </svg>
                    </div>
                    <span className="text-[9px] md:text-[11px] font-semibold tracking-wider text-white/60 uppercase line-clamp-1">{reel.product}</span>
                  </div>
                  <h3 className="text-sm md:text-lg font-bold text-white leading-tight drop-shadow-md line-clamp-2">
                    {reel.title}
                  </h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* No Social Media Row below reels */}

    </section>
  )
}
