"use client"

import { motion } from "framer-motion"
import { ProjectForm } from "@/components/ui/ProjectForm"
import { CheckCircle, Clock, Shield, Zap } from "lucide-react"
import Image from "next/image"

const benefits = [
  {
    icon: <Zap size={18} />,
    title: "Ship in 4 Weeks",
    desc: "From validated idea to live product — fast."
  },
  {
    icon: <Shield size={18} />,
    title: "Zero Risk Trial",
    desc: "Start with a discovery sprint, no commitment."
  },
  {
    icon: <Clock size={18} />,
    title: "Response in 24h",
    desc: "We'll review your idea and reach out quickly."
  },
  {
    icon: <CheckCircle size={18} />,
    title: "Proven Track Record",
    desc: "10+ products shipped. Founders love us."
  },
]

export const CTASection = () => {
  return (
    <section id="contact" className="relative py-12 lg:py-20 px-4 overflow-hidden bg-transparent">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(16,185,129,0.05)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(16,185,129,0.03)_0%,transparent_50%)]" />
        {/* Top decorative line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-transparent via-emerald-500/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Let's Build Together
          </span>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* LEFT — Text Content */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
                Ready to build your{" "}
                <span className="text-emerald-400">next big thing?</span>
              </h2>
              <p className="text-lg text-white/60 leading-relaxed">
                Tell us about your idea. We'll review it, validate the opportunity, and show you exactly how we can turn it into a profitable product in 4 weeks.
              </p>
            </motion.div>

            {/* Benefits List */}
            <motion.ul
              className="flex flex-col gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
                hidden: {}
              }}
            >
              {benefits.map((item, i) => (
                <motion.li
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                  }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-emerald-500/20 hover:bg-emerald-500/[0.03] transition-all duration-300"
                >
                  <span className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-white font-semibold text-sm mb-0.5">{item.title}</p>
                    <p className="text-white/50 text-sm">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-4 pt-2"
            >
              <div className="flex -space-x-3">
                {[
                  "/assets/founder1.png",
                  "/assets/founder2.png",
                  "/assets/founder3.png",
                  "/assets/founder4.png"
                ].map((src, i) => (
                  <div
                    key={i}
                    className="relative w-10 h-10 rounded-full border-2 border-[#0A0A0A] bg-[#111] overflow-hidden shadow-lg"
                  >
                    <Image 
                      src={src} 
                      alt="Founder Avatar" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm text-white/50">
                <span className="text-white font-medium">5+ founders</span> have already shipped with us
              </p>
            </motion.div>
          </div>

          {/* RIGHT — Enhanced Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ProjectForm />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
