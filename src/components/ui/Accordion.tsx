"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionItemProps {
  title: string
  content: string
  isOpen: boolean
  onClick: () => void
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen,
  onClick,
}) => {
  return (
    <div className="border-b border-white/[0.06] last:border-b-0">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-white/80 focus:outline-none text-white"
      >
        <span className="text-lg font-medium">{title}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-white/60 transition-transform duration-300",
            isOpen ? "rotate-180" : ""
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-5 text-white/60 leading-relaxed">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

interface AccordionProps {
  items: { title: string; content: string }[]
  className?: string
}

export const Accordion: React.FC<AccordionProps> = ({ items, className }) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  return (
    <div className={cn("w-full divide-y divide-white/[0.06] border-y border-white/[0.06]", className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  )
}
