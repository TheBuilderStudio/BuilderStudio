"use client"

import { motion } from "framer-motion"
import { Accordion } from "@/components/ui/Accordion"

const faqItems = [
  {
    title: "What types of startups do you build?",
    content: "We focus on digital products, SaaS, marketplaces, and AI-driven applications. Our primary metric is viability: can this product generate revenue and scale? If the answer is yes, we can build it."
  },
  {
    title: "How long does development take?",
    content: "Our core execution framework takes 4 weeks from idea to MVP launch. Complex enterprise applications may take longer, but we always optimize for the fastest path to market validation."
  },
  {
    title: "Do you help after launch?",
    content: "Yes. Launch is just the beginning. We partner with founders for the long term, helping scale the architecture, optimize user acquisition, and build subsequent features based on real user data."
  },
  {
    title: "What technologies do you use?",
    content: "We use modern, scalable tech stacks primarily built around React, Next.js, Node.js, and cloud native architectures. We choose the right tool for the job to ensure your product can scale from day one."
  },
  {
    title: "Can you work with non-technical founders?",
    content: "Absolutely. Most of our partners are domain experts who need a technical execution partner. We translate your industry knowledge into technical requirements and handle the entire engineering process."
  }
]

export const FAQSection = () => {
  return (
    <section className="py-12 lg:py-20 px-4 bg-transparent relative">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight text-white mb-6">
            Everything You Need to Know
          </h2>
          <p className="text-xl text-white/60">
            Clear answers. No agency fluff.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion items={faqItems} className="border-white/[0.06]" />
        </motion.div>
      </div>
    </section>
  )
}
