"use client"

import { motion } from "framer-motion"
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react"

const comparisons = [
  {
    title: "Most Agencies",
    theme: "red",
    description: "You hire a team to complete tasks. The responsibility for product success still stays with you.",
    bottomStatement: "Vendor Mindset",
    points: [
      { title: "80% Failure Rate", text: "Most products fail because agencies build features without validating the market." },
      { title: "0% Validation", text: "They build exactly what is requested, even if users don't actually want it." },
      { title: "3x Slower Execution", text: "Siloed design and dev teams cause extreme friction and delayed timelines." },
      { title: "Metric Misalignment", text: "Success is measured by completed hours, not by revenue generated." },
      { title: "Post-Launch Stagnation", text: "Marketing and growth discussions only begin after the product is already live." },
      { title: "High Churn Risk", text: "No built-in retention or onboarding systems result in dead products." },
      { title: "Technical Debt", text: "Quick-and-dirty code leads to massive scalability issues down the road." },
      { title: "Bloated Budgets", text: "Project scopes expand constantly with absolutely zero ROI accountability." },
      { title: "Zero Distribution Help", text: "Agencies hand off the code and leave you completely alone to figure out user acquisition." }
    ]
  },
  {
    title: "Builder Studio",
    theme: "green",
    description: "You gain a long-term product partner focused on building sustainable businesses.",
    bottomStatement: "Business Builder Mindset",
    points: [
      { title: "100% Market Validation", text: "We validate the core offer and demand before writing a single line of code." },
      { title: "4-Week Go-To-Market", text: "We launch revenue-ready MVPs in weeks, capturing critical early user feedback." },
      { title: "Revenue-First Architecture", text: "Engineered specifically for high conversion rates, fast loads, and scalability." },
      { title: "Built-in Growth Loops", text: "Virality, SEO, and retention mechanics are baked directly into the core product." },
      { title: "Unified Execution", text: "Design, engineering, and marketing work in parallel for 3x faster delivery." },
      { title: "Founder-Level Ownership", text: "We treat your capital like our own, optimizing strictly for business ROI." },
      { title: "Data-Driven Iteration", text: "Post-launch, we pivot and adapt based on real user data, not assumptions." },
      { title: "Measurable Outcomes", text: "Our ultimate success metric is your MRR (Monthly Recurring Revenue) growth." },
      { title: "Built-In Distribution", text: "We build in public and treat your product like our own, actively helping with marketing and distribution." }
    ]
  }
]

export const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="py-12 lg:py-20 px-4 bg-transparent relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 flex flex-col items-center"
        >
          <span className="text-[#10B981] text-[12px] md:text-[14px] font-semibold tracking-[0.3em] uppercase mb-6">
            WHY BUILDER STUDIO
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-8">
            Most Agencies Build Features. <br className="hidden md:block"/>
            <span className="text-white/40">We Build Businesses.</span>
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-[700px] mx-auto leading-relaxed">
            The difference isn't how we write code. <br className="hidden sm:block"/>
            The difference is how we think about products, growth and outcomes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {comparisons.map((col, index) => {
            const isRed = col.theme === "red";
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className={`flex flex-col pt-10 pb-6 px-6 md:px-8 md:pt-12 md:pb-8 rounded-[24px] border backdrop-blur-md relative transition-all duration-500 ${
                  isRed
                    ? "border-red-500/10 bg-[#0A0A0A]/60 hover:border-red-500/20 hover:shadow-[0_0_20px_rgba(239,68,68,0.03)]"
                    : "border-[#10B981]/10 bg-[#0A0A0A]/60 hover:border-[#10B981]/20 hover:shadow-[0_0_20px_rgba(16,185,129,0.04)]"
                }`}
              >
                {/* Background Glow Container (clipped) */}
                <div className="absolute inset-0 overflow-hidden rounded-[24px] pointer-events-none z-0">
                  <div 
                    className={`absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] rounded-full blur-[120px] opacity-20 ${
                      isRed ? "bg-red-500" : "bg-[#10B981]"
                    }`} 
                  />
                </div>

                {/* Badge precisely on the top border */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 whitespace-nowrap">
                  <h3 className={`inline-flex items-center px-5 py-2 rounded-full text-[13px] font-bold uppercase tracking-widest border ${
                    isRed 
                      ? "bg-red-500/10 text-red-400 border-red-500/30 shadow-[0_0_20px_rgba(239,68,68,0.2)] backdrop-blur-md" 
                      : "bg-[#10B981]/10 text-[#10B981] border-[#10B981]/30 shadow-[0_0_20px_rgba(16,185,129,0.2)] backdrop-blur-md"
                  }`}>
                    {col.title}
                  </h3>
                </div>

                <div className="relative z-10 flex-grow mt-2">
                  
                  <p className="text-white/60 mb-8 text-sm leading-relaxed md:h-[40px] text-center max-w-[90%] mx-auto">
                    {col.description}
                  </p>

                  <ul className="space-y-4">
                    {col.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1 shrink-0">
                          {isRed ? (
                            <XCircle className="w-[18px] h-[18px] text-red-500/70" />
                          ) : (
                            <CheckCircle2 className="w-[18px] h-[18px] text-[#10B981]" />
                          )}
                        </div>
                        <div>
                          <h4 className={`text-[14px] font-semibold mb-0.5 ${
                            isRed ? "text-white/80" : "text-white"
                          }`}>
                            {point.title}
                          </h4>
                          <p className="text-[13px] text-white/50 leading-relaxed">
                            {point.text}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`mt-8 pt-6 border-t relative z-10 text-center ${
                  isRed ? "border-red-500/10" : "border-[#10B981]/10"
                }`}>
                  <span className={`text-[12px] font-bold tracking-[0.2em] uppercase ${
                    isRed ? "text-red-500/50" : "text-[#10B981]/80"
                  }`}>
                    {col.bottomStatement}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Extra CTA Text & Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 p-10 md:p-12 rounded-2xl border border-[#10B981]/20 bg-gradient-to-br from-[#10B981]/10 to-transparent flex flex-col items-center justify-center text-center max-w-4xl mx-auto shadow-[0_0_40px_rgba(16,185,129,0.05)] relative overflow-hidden"
        >
          {/* Subtle glow inside the CTA box */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-full bg-[#10B981]/10 blur-[80px] pointer-events-none" />

          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight relative z-10">
            Stop overthinking. <span className="text-[#10B981]">Start building.</span>
          </h3>
          <p className="text-white/70 mb-8 text-lg md:text-xl max-w-2xl relative z-10">
            Every day you wait is another day your idea remains just a dream. Let's hop on a quick call and map out exactly how we can launch your MVP in 4 weeks.
          </p>
          <button 
            onClick={() => {
              const form = document.getElementById('name');
              if (form) {
                form.focus();
                form.scrollIntoView({ behavior: 'smooth', block: 'center' });
              } else {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group relative z-10 flex sm:inline-flex items-center justify-center gap-2 md:gap-3 px-5 py-3.5 md:px-8 md:py-4 rounded-xl bg-[#10B981] text-black font-bold text-[14px] sm:text-base md:text-lg hover:bg-[#10B981]/90 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(16,185,129,0.3)] transition-all duration-300 w-full sm:w-auto"
          >
            <span>Secure My 4-Week Launch Plan</span>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform shrink-0" />
          </button>
        </motion.div>

      </div>
    </section>
  )
}
