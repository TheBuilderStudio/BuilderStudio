"use client"

import { useState, useEffect, ReactNode } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import Cal, { getCalApi } from "@calcom/embed-react"

interface ContactModalTriggerProps {
  children: ReactNode;
}

export const ContactModalTrigger = ({ children }: ContactModalTriggerProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
    ;(async function () {
      const cal = await getCalApi()
      cal("ui", {
        theme: "dark",
        styles: {
          branding: {
            brandColor: "#10B981"
          }
        },
        hideEventTypeDetails: false
      })
    })()
  }, [])

  return (
    <>
      <div onClick={() => setIsOpen(true)} className="inline-block cursor-pointer">
        {children}
      </div>

      {mounted && createPortal(
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md"
              />

              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                className="fixed z-[101] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl px-4 md:px-0 h-[85vh] max-h-[800px]"
              >
                <div className="relative w-full h-full bg-[#0A0A0A] border border-white/10 rounded-[24px] shadow-[0_0_40px_rgba(16,185,129,0.15)] overflow-hidden flex flex-col">
                  {/* Close Button */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 z-50 text-white/50 hover:text-white transition-colors bg-black/50 hover:bg-black p-2 rounded-full backdrop-blur-md border border-white/10"
                  >
                    <X size={20} />
                  </button>

                  <div className="w-full h-full p-2 md:p-8 pt-16 md:pt-16 overflow-y-auto custom-scrollbar bg-black/40">
                    <Cal
                      calLink="builderstudio/builder-studio-strategy-call"
                      style={{ width: "100%", height: "100%", overflow: "scroll" }}
                      config={{ theme: 'dark' }}
                    />
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  )
}
