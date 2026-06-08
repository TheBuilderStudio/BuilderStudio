"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export const CustomCursor = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  const rawX = useMotionValue(-100)
  const rawY = useMotionValue(-100)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 300 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    setIsMounted(true)

    const moveCursor = (e: MouseEvent) => {
      rawX.set(e.clientX)
      rawY.set(e.clientY)
      cursorX.set(e.clientX - 16) // Center the 32px ring
      cursorY.set(e.clientY - 16)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [cursorX, cursorY])

  if (!isMounted) return null

  // Don't show custom cursor on mobile touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null
  }

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-emerald-500 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isHovering ? 0.5 : 1,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-emerald-500 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "12px", // (32 - 8) / 2 to center inside the 32px ring
          translateY: "12px",
        }}
        animate={{
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1
        }}
        transition={{ duration: 0.15 }}
      />
      {/* MacBook Hand Icon */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] hidden md:block drop-shadow-md"
        style={{
          x: rawX,
          y: rawY,
          translateX: "-10.5px", // Offset exactly to index finger tip
          translateY: "-1.5px",
        }}
        animate={{
          opacity: isHovering ? 1 : 0,
          scale: isHovering ? 1 : 0.5,
        }}
        transition={{ duration: 0.15 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="black" strokeWidth="1.2" strokeLinejoin="round" className="drop-shadow-sm">
          <path d="M9,3 A1.5,1.5 0 0,1 12,3 L12,9 A1.5,1.5 0 0,1 15,9 L15,10 A1.5,1.5 0 0,1 18,10 L18,11 A1.5,1.5 0 0,1 21,11 L21,16 C21,19 19,22 15,22 L11,22 C8,22 6,20 5,18 L2.5,15 A1.5,1.5 0 0,1 5,13 L9,16 L9,3 Z" />
        </svg>
      </motion.div>
    </>
  )
}
