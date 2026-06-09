"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, ArrowUpRight, Lock } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/Button"

const products = [
  {
    id: "plugio",
    name: "Plugio",
    shortName: "Plugio",
    icon: "P",
    iconBg: "bg-[#FF5A1F] text-white",
    subtitle: "AI Powered Social Media Distribution Platform",
    description: "Create, optimize and publish content across multiple platforms from a single dashboard with the power of AI.",
    features: [
      "AI Content Generation",
      "Multi-platform Publishing",
      "Analytics Dashboard",
      "Unified Inbox"
    ],
    techStack: [
      { name: "Next.js", icon: "N" },
      { name: "Spring Boot", icon: "S" },
      { name: "LangChain", icon: "Lc" },
      { name: "Python", icon: "Py" },
      { name: "Postgres", icon: "Db" }
    ],
    image: "/assets/plugio.png",
    mobileImage: "/assets/plugio_phonee.png",
    url: "plugio.app"
  },
  {
    id: "contextnode",
    name: "ContextNode",
    shortName: "ContextNode",
    icon: "CN",
    iconBg: "bg-white text-black",
    subtitle: "AI Assets Marketplace",
    description: "Structured prompts, context packs and AI assets designed for modern builders.",
    features: [
      "Prompt Marketplace",
      "Context Packs",
      "AI Workflows",
      "Developer Assets"
    ],
    techStack: [
      { name: "Next.js", icon: "N" },
      { name: "Laravel", icon: "L" },
      { name: "MySQL", icon: "Db" },
      { name: "OpenAI", icon: "O" }
    ],
    image: "/assets/contextnode.png",
    mobileImage: "/assets/contextnode_phonee.jpeg",
    url: "www.contextnode.in"
  },
  {
    id: "study-wings",
    name: "Study Wings",
    shortName: "Study Wings",
    icon: "SW",
    iconBg: "bg-[#4B5CC4] text-white",
    subtitle: "AI Learning Platform",
    description: "Transform YouTube learning into structured learning journeys with analytics and AI assistance.",
    features: [
      "Learning Analytics",
      "RAG Assistant",
      "Progress Tracking",
      "Personalized Learning"
    ],
    techStack: [
      { name: "Next.js", icon: "N" },
      { name: "Spring Boot", icon: "S" },
      { name: "RAG", icon: "R" },
      { name: "Postgres", icon: "Db" },
      { name: "YouTube API", icon: "YT" }
    ],
    image: "/assets/study-wings.png",
    mobileImage: "/assets/study_wings_phonee.jpeg",
    url: "quanty.vercel.app"
  }
]

export const ProofOfWorkSection = () => {
  const [activeTab, setActiveTab] = useState(0)

  const activeProduct = products[activeTab]

  return (
    <section id="work" className="relative py-12 lg:py-20 px-6 sm:px-10 lg:px-16 w-full flex flex-col items-center justify-center bg-transparent z-10 overflow-hidden">

      {/* Header */}
      <div className="w-full max-w-[1200px] mx-auto text-center flex flex-col items-center mb-16 relative z-20">
        <span className="text-[#10B981] text-[12px] md:text-[14px] font-semibold tracking-[0.3em] uppercase mb-6">
          WHAT WE BUILD
        </span>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
          Real Products. Real Impact.
        </h2>

        <p className="text-white/60 text-[18px] md:text-[20px] max-w-[700px] mx-auto font-normal">
          We don't show case studies. We show products we've actually built.
        </p>
      </div>

      {/* Tabs Switcher */}
      <div className="relative z-20 mb-10 md:mb-20 w-full flex justify-center">
        <div className="flex w-full sm:w-auto items-center p-1 md:p-1.5 rounded-[10px] md:rounded-[12px] bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl">
          {products.map((product, idx) => {
            const isActive = activeTab === idx
            return (
              <button
                key={product.id}
                onClick={() => setActiveTab(idx)}
                className={`relative flex-1 sm:flex-none flex items-center justify-center gap-1.5 sm:gap-2.5 md:gap-3 px-1 py-2 sm:px-4 md:px-6 md:py-3 rounded-[8px] transition-colors duration-300 ${isActive ? "text-white" : "text-white/60 hover:text-white"}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabBg"
                    className="absolute inset-0 bg-[#0A0A0A] border border-[#10B981]/50 rounded-[8px] shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded overflow-hidden shrink-0">
                  <span className={`w-full h-full flex items-center justify-center text-[8px] sm:text-[9px] md:text-[10px] font-bold ${product.iconBg}`}>
                    {product.icon}
                  </span>
                </span>
                <span className="relative z-10 font-medium text-[11px] sm:text-[14px] md:text-[15px] whitespace-nowrap">{product.shortName}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Product Showcase Area */}
      <div className="w-full max-w-[1200px] mx-auto relative z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProduct.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-12 items-center lg:items-start"
          >
            {/* Left Content */}
            <div className="flex flex-col w-full lg:w-[40%] flex-shrink-0">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold shadow-lg ${activeProduct.iconBg}`}>
                  {activeProduct.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white">{activeProduct.name}</h3>
              </div>

              <h4 className="text-xl md:text-2xl text-white/90 font-medium mb-4">
                {activeProduct.subtitle}
              </h4>

              <p className="text-white/60 text-lg mb-8 leading-relaxed">
                {activeProduct.description}
              </p>

              {/* Features */}
              <div className="mb-10 space-y-4">
                {activeProduct.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full border border-[#10B981]/50 flex items-center justify-center bg-[#10B981]/10">
                      <Check className="w-3 h-3 text-[#10B981]" />
                    </div>
                    <span className="text-white/80 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="mb-10">
                <span className="text-[11px] font-mono tracking-widest text-white/40 uppercase mb-4 block">Tech Stack</span>
                <div className="flex flex-wrap gap-3">
                  {activeProduct.techStack.map((tech, i) => (
                    <div key={i} className="flex flex-col items-center justify-center gap-1.5 w-16 h-16 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                      <span className="text-white/60 text-sm font-medium">{tech.icon}</span>
                      <span className="text-[9px] text-white/40 font-mono tracking-tight">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>



            </div>

            {/* Right Screenshot Area */}
            <a
              href={`https://${activeProduct.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full lg:w-[60%] relative flex items-center justify-center cursor-pointer min-h-[280px] sm:min-h-[350px] lg:min-h-[400px] mt-8 lg:mt-0 pb-8 sm:pb-12 lg:pb-0"
            >
              {/* Hover Overlay for entire group */}
              <div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/60 border border-white/20 backdrop-blur-md flex items-center justify-center transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-out shadow-2xl">
                  <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
              </div>

              {/* Desktop Browser Mockup */}
              <div className="w-[90%] sm:w-[85%] lg:w-[90%] mr-auto rounded-[12px] sm:rounded-[16px] lg:rounded-[24px] bg-[#0A0A0A] border border-white/[0.08] overflow-hidden shadow-2xl shadow-black/50 relative z-10 transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)] flex flex-col">
                {/* Browser Header */}
                <div className="h-8 lg:h-12 border-b border-white/[0.08] bg-[#0A0A0A] flex items-center px-3 lg:px-4 gap-2 relative">
                  <div className="flex gap-1.5 lg:gap-2">
                    <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-[#FF5F56]" />
                    <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 lg:gap-2 bg-white/[0.03] px-2 py-1 lg:px-3 lg:py-1.5 rounded-md border border-white/[0.05] min-w-[120px] lg:min-w-[200px] justify-center">
                    <Lock className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-white/30" />
                    <span className="text-white/40 text-[9px] lg:text-[11px] font-mono tracking-wide">{activeProduct.url}</span>
                  </div>
                </div>

                {/* Desktop Image Container */}
                <div className="relative w-full bg-transparent p-2 lg:p-6">
                  <div className="relative w-full rounded-md lg:rounded-xl overflow-hidden border border-white/[0.04] bg-[#050505]">
                    <Image
                      src={activeProduct.image}
                      alt={`${activeProduct.name} Desktop Dashboard`}
                      width={1200}
                      height={800}
                      sizes="(max-width: 1024px) 90vw, 1200px"
                      className="w-full h-auto block object-cover object-top"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Mobile Phone Mockup */}
              <div className="absolute right-0 bottom-0 lg:bottom-[-10%] w-[35%] sm:w-[30%] lg:w-[25%] rounded-[16px] sm:rounded-[20px] lg:rounded-[32px] bg-[#050505] border-[3px] sm:border-[4px] lg:border-[6px] border-[#1A1A1A] overflow-hidden shadow-2xl shadow-black/80 z-20 transition-transform duration-500 group-hover:-translate-y-4 lg:group-hover:-translate-y-6 group-hover:shadow-[0_30px_60px_rgba(16,185,129,0.2)]">
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[10px] sm:h-[12px] lg:h-[18px] bg-[#1A1A1A] rounded-b-[6px] sm:rounded-b-[8px] lg:rounded-b-[12px] z-30" />

                {/* Mobile Image Container */}
                <div className="relative w-full">
                  <Image
                    src={activeProduct.mobileImage}
                    alt={`${activeProduct.name} Mobile View`}
                    width={400}
                    height={800}
                    sizes="(max-width: 1024px) 35vw, 400px"
                    className="w-full h-auto block"
                  />
                </div>
              </div>
            </a>
          </motion.div>
        </AnimatePresence>
      </div>

    </section>
  )
}
