"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ContactModalTrigger } from "@/components/ui/ContactModalTrigger"
import { Menu, X } from "lucide-react"

export const Header = () => {
  const [hidden, setHidden] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const pathname = usePathname()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    if (previous !== undefined && latest > previous && latest > 150) {
      setHidden(true)
      setIsMenuOpen(false) // Close menu on scroll down
    } else {
      setHidden(false)
    }
  })

  const scrollTo = (id: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] sm:w-[90%] max-w-[800px] rounded-2xl md:rounded-full bg-[#0A0A0A]/60 backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-300 will-change-transform transform-gpu py-2 md:py-4"
    >
      <div className="flex items-center justify-between px-6 md:px-8">

        {/* Left Links (Desktop) */}
        <div className="hidden md:flex items-center gap-6 md:gap-10">
          <button onClick={() => scrollTo("work")} className="text-sm font-medium text-white/70 hover:text-white transition-colors">Work</button>
          <button onClick={() => scrollTo("services")} className="text-sm font-medium text-white/70 hover:text-white transition-colors">Services</button>
        </div>

        {/* Logo */}
        <Link
          href="/"
          onClick={(e) => {
            setIsMenuOpen(false)
            if (pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="flex-shrink-0 cursor-pointer flex flex-row items-center gap-0 group md:mx-4"
        >
          <div className="relative w-10 h-10 md:w-14 md:h-14 flex items-center justify-center bg-transparent transition-all duration-300 z-10 group-hover:drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]">
            <div className="relative w-full h-full">
              <Image src="/assets/builder_studio_logo.png" alt="Builder Studio Logo" fill sizes="(max-width: 768px) 40px, 56px" priority quality={100} className="object-contain scale-[1.7]" />
            </div>
          </div>
          <div className="flex flex-col justify-center text-[10px] md:text-[13px] font-bold tracking-[0.25em] uppercase leading-[1.15] text-left -ml-2">
            <span className="text-white">Builder</span>
            <span className="text-[#10B981]">Studio</span>
          </div>
        </Link>

        {/* Right Links (Desktop) */}
        <div className="hidden md:flex items-center gap-6 md:gap-8">
          <button onClick={() => scrollTo("why-us")} className="text-sm font-medium text-white/70 hover:text-white transition-colors">Why Us</button>
          <a 
            href="https://chat.whatsapp.com/KmxvbaoVVn1Kd9Cux4eDS4"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-[#10B981] text-black font-semibold text-sm hover:bg-[#0e9d6d] hover:-translate-y-0.5 transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.3)] inline-block"
          >
            Join Builder Studio
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white hover:text-[#10B981] transition-colors p-2 -mr-2"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[calc(100%+12px)] left-0 w-full bg-[#0A0A0A]/95 backdrop-blur-xl border border-white/[0.08] rounded-[2rem] flex flex-col p-4 shadow-2xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col items-center gap-4 py-4">
              <button onClick={() => scrollTo("work")} className="text-base font-medium text-white hover:text-[#10B981] transition-colors w-full text-center py-2">Work</button>
              <div className="w-12 h-[1px] bg-white/10" />
              <button onClick={() => scrollTo("services")} className="text-base font-medium text-white hover:text-[#10B981] transition-colors w-full text-center py-2">Services</button>
              <div className="w-12 h-[1px] bg-white/10" />
              <button onClick={() => scrollTo("why-us")} className="text-base font-medium text-white hover:text-[#10B981] transition-colors w-full text-center py-2">Why Us</button>
              
              <div className="mt-4 w-full flex justify-center px-4">
                <a 
                  href="https://chat.whatsapp.com/KmxvbaoVVn1Kd9Cux4eDS4"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full max-w-[200px] px-8 py-3.5 rounded-full bg-[#10B981] text-black font-bold text-base hover:bg-[#0e9d6d] transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)] text-center flex items-center justify-center"
                >
                  Join Builder Studio
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
