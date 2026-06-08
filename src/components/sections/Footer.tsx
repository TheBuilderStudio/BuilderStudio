"use client"
import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="relative bg-transparent overflow-hidden pt-12 pb-8">
      {/* Huge Outline Text */}
      <div className="w-full flex items-center justify-center overflow-hidden mb-24 select-none pointer-events-none px-4">
        <h2 
          className="text-[clamp(2.5rem,9.5vw,12rem)] font-black tracking-tight leading-none text-transparent uppercase whitespace-nowrap"
          style={{
            WebkitTextStroke: "1.5px rgba(16, 185, 129, 0.15)"
          }}
        >
          BUILDER STUDIO
        </h2>
      </div>

      {/* Bottom Minimal Footer */}
      <div className="max-w-[1400px] mx-auto px-6 w-full flex flex-col md:flex-row justify-between items-center gap-6 text-white/30 text-[13px] md:text-sm font-medium tracking-wide">
        <div className="text-center md:text-left">
          © {new Date().getFullYear()} Builder Studio. Built by builders, for founders.
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <a href="https://instagram.com/builderstudio.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
          <a href="https://www.linkedin.com/company/thebuilderstudio/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}
