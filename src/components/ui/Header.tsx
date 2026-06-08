"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ContactModalTrigger } from "@/components/ui/ContactModalTrigger"

export const Header = () => {
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()
  const pathname = usePathname()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    if (previous !== undefined && latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-150%" }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[800px]"
    >
      <div className="flex items-center justify-between px-8 py-5 md:py-6 rounded-full bg-[#0A0A0A]/40 backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.5)]">

        {/* Left Links */}
        <div className="hidden md:flex items-center gap-6 md:gap-10">
          <button
            onClick={() => scrollTo("work")}
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            Work
          </button>
          <button
            onClick={() => scrollTo("services")}
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            Services
          </button>
        </div>

        <Link
          href="/"
          onClick={(e) => {
            if (pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="flex-shrink-0 cursor-pointer flex flex-row items-center justify-center gap-0 group mx-auto md:mx-4"
        >
          <div className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-transparent transition-all duration-300 z-10 group-hover:drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]">
            <div className="relative w-full h-full">
              <Image
                src="/assets/builder_studio_logo.png"
                alt="Builder Studio Logo"
                fill
                priority
                quality={100}
                className="object-contain scale-[1.7]"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center text-[11px] md:text-[13px] font-bold tracking-[0.25em] uppercase leading-[1.15] text-left -ml-2">
            <span className="text-white">Builder</span>
            <span className="text-[#10B981]">Studio</span>
          </div>
        </Link>

        {/* Right Links */}
        <div className="hidden md:flex items-center gap-6 md:gap-8">
          <button
            onClick={() => scrollTo("why-us")}
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            Why Us
          </button>
          <ContactModalTrigger>
            <button className="px-5 py-2.5 rounded-full bg-[#10B981] text-black font-semibold text-sm hover:bg-[#0e9d6d] hover:-translate-y-0.5 transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              Start Building
            </button>
          </ContactModalTrigger>
        </div>
      </div>
    </motion.header>
  )
}
