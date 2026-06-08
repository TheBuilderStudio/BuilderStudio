"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/Card"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "The Builder Studio didn't just write code, they helped us refine our business model. We launched 3 weeks faster than expected.",
    author: "Sarah Jenkins",
    role: "Founder, FintechApp",
    image: "SJ"
  },
  {
    quote: "Working with them felt like having an elite internal product team. Their focus on revenue-generating features made all the difference.",
    author: "Michael Chen",
    role: "CEO, HealthTech Co",
    image: "MC"
  }
]

export const TestimonialsSection = () => {
  return (
    <section className="py-12 lg:py-20 px-4 bg-transparent relative border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Founders Who Shipped & Scaled
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what happens when founders partner with us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full group">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-1 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                    ))}
                  </div>
                  <p className="text-white/80 leading-relaxed mb-8 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center border-t border-white/10 pt-6">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mr-4 shrink-0">
                      <span className="text-white font-semibold">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.author}</div>
                      <div className="text-sm text-white/60">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
