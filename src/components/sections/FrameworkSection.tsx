"use client"

import { motion } from "framer-motion"

const timeline = [
  {
    week: "Week 1",
    title: "Discovery & Planning",
    points: ["Discovery", "Validation", "Planning"],
  },
  {
    week: "Week 2",
    title: "Design & Architecture",
    points: ["Design", "Architecture"],
  },
  {
    week: "Week 3",
    title: "Development",
    points: ["Development"],
  },
  {
    week: "Week 4",
    title: "Launch & Scale",
    points: ["Launch", "Optimization"],
  },
]

export const FrameworkSection = () => {
  return (
    <section className="py-12 lg:py-20 px-4 bg-transparent relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Our 4-Week Execution Framework
          </h2>
          <p className="text-xl text-white/60">
            A structured approach to transforming ideas into scalable businesses.
          </p>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-0">
          {timeline.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 md:pl-0 mb-16 last:mb-0 group"
            >
              <div className="md:grid md:grid-cols-5 items-center">
                {/* Desktop Left side (Week Indicator) */}
                <div className="hidden md:block col-span-2 text-right pr-12">
                  <span className="text-3xl font-light text-white/40 group-hover:text-white/80 transition-colors">
                    {step.week}
                  </span>
                </div>

                {/* Center Node */}
                <div className="absolute left-[-5px] md:left-auto md:relative md:col-span-1 flex justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </div>

                {/* Right side (Content) */}
                <div className="md:col-span-2 md:pl-12">
                  <div className="md:hidden text-lg font-light text-white/60 mb-2">
                    {step.week}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {step.title}
                  </h3>
                  <ul className="space-y-2">
                    {step.points.map((point, i) => (
                      <li key={i} className="flex items-center text-white/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 mr-3" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
