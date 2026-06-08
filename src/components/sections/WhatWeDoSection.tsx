"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card"
import { Lightbulb, Layers, Code2, Rocket } from "lucide-react"

const services = [
  {
    title: "Idea Validation",
    icon: Lightbulb,
    description: "We don't just build, we ensure there's a market.",
    points: ["Market research", "Problem validation", "Opportunity analysis"]
  },
  {
    title: "Product Design",
    icon: Layers,
    description: "Premium, intuitive interfaces built for conversion.",
    points: ["UX strategy", "User journeys", "Interface systems"]
  },
  {
    title: "MVP Development",
    icon: Code2,
    description: "Fast, scalable engineering to get you to market.",
    points: ["Full-stack engineering", "Scalable architecture", "Production deployment"]
  },
  {
    title: "Growth Systems",
    icon: Rocket,
    description: "Infrastructure for scale and revenue generation.",
    points: ["Distribution", "Analytics", "Optimization"]
  }
]

export const WhatWeDoSection = () => {
  return (
    <section className="py-12 lg:py-20 px-4 bg-transparent relative border-t border-black/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            The Infrastructure for Scale
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Our comprehensive framework covers everything required to launch a successful, revenue-generating product.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-white/[0.05] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 border border-white/[0.05]">
                    <service.icon className="w-6 h-6 text-emerald-500" />
                  </div>
                  <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                  <CardDescription className="text-white/60 pt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 pt-4 border-t border-white/10">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-center text-sm text-white/70">
                        <div className="w-1 h-1 rounded-full bg-emerald-500 mr-3" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
