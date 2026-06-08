import { Metadata } from "next"
import { HeroSection } from "@/components/sections/HeroSection"

export const metadata: Metadata = {
  title: "Builder Studio | Turn Your Idea Into a Startup in 4 Weeks",
  description: "We partner with founders to validate, build, launch, and scale digital products that create real impact and revenue.",
  alternates: {
    canonical: 'https://thebuilderstudio.com',
  },
}


import { ProofOfWorkSection } from "@/components/sections/ProofOfWorkSection"
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection"
import { CommunitySection } from "@/components/sections/CommunitySection"
import { BuildInPublicSection } from "@/components/sections/BuildInPublicSection"
import { JourneySection } from "@/components/sections/JourneySection"
import { CTASection } from "@/components/sections/CTASection"
import { Footer } from "@/components/sections/Footer"

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col text-white overflow-hidden">
      {/* Global Background Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 -left-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-emerald-400/5 rounded-full blur-[150px]" />
        <div className="absolute top-2/3 left-1/3 w-[400px] h-[400px] bg-emerald-400/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-teal-300/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 flex flex-col w-full">
        <HeroSection />
        <ProofOfWorkSection />
        <WhyChooseUsSection />
        <CommunitySection />
        <JourneySection />
        <CTASection />
        <BuildInPublicSection />
        <Footer />
      </div>
    </main>
  );
}
