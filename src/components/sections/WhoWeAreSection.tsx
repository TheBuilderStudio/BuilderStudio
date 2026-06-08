"use client"

import { motion } from "framer-motion"

export const WhoWeAreSection = () => {
  return (
    <section className="py-12 lg:py-20 px-4 bg-transparent relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            We Are Builders
          </h2>
          <div className="h-[1px] w-20 bg-white/20 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-2xl text-white/80 leading-relaxed font-light">
              Most agencies deliver code. <br />
              <span className="text-white/40">Most freelancers deliver tasks.</span>
            </p>
            <p className="text-3xl font-semibold text-white">
              We deliver outcomes.
            </p>
            <p className="text-lg text-white/60 leading-relaxed">
              The Builder Studio partners with founders to transform ideas into <span className="text-white font-semibold">real, profitable businesses</span>.
            </p>
            <p className="text-lg text-white/60 leading-relaxed">
              We provide the product strategy, engineering, and execution required to hit the market fast and <span className="text-[#10B981] font-semibold">start generating revenue</span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {[
              "Startup-first mindset",
              "Product-focused execution",
              "Rapid MVP development",
              "Revenue-driven thinking",
              "Long-term partnerships",
            ].map((point, index) => (
              <div
                key={index}
                className="flex items-center p-4 rounded-lg border border-white/[0.06] bg-[#0C0C0C]"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3" />
                <span className="text-sm text-white/80 font-medium">{point}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
