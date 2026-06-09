"use client"

import { useState, ReactNode, useEffect } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { ProjectForm } from "./ProjectForm"

interface ProjectFormModalTriggerProps {
  children: ReactNode;
  className?: string;
}

export const ProjectFormModalTrigger = ({ children, className = "inline-block cursor-pointer" }: ProjectFormModalTriggerProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <div onClick={() => setIsOpen(true)} className={className}>
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
                className="fixed z-[101] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg px-4"
              >
                <div className="relative w-full max-h-[90vh] overflow-y-auto custom-scrollbar rounded-2xl">
                  {/* Close Button */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 z-50 text-white/50 hover:text-white transition-colors bg-black/50 hover:bg-black p-2 rounded-full backdrop-blur-md border border-white/10"
                  >
                    <X size={20} />
                  </button>

                  <ProjectForm />
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
