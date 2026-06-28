"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { CustomCursor } from "./components/ui/custom-cursor"
import { MagneticButton } from "./components/ui/magnetic-button"
import { TiltCard } from "./components/ui/tilt-card"
import { ScrollScale } from "./components/animations/scroll-scale"
import { TextReveal } from "./components/animations/text-reveal"
import { FeaturesSection } from "./components/sections/features"
import { DashboardSection } from "./components/sections/dashboard"
import { PricingSection } from "./components/sections/pricing"
import { TestimonialsSection } from "./components/sections/testimonials"
import { FaqSection } from "./components/sections/faq"
import { FooterSection } from "./components/sections/footer"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Deep Parallax values for the background gradients
  const bgY1 = useTransform(scrollYProgress, [0, 1], [0, 400])
  const bgY2 = useTransform(scrollYProgress, [0, 1], [0, 250])
  const textY = useTransform(scrollYProgress, [0, 1], [0, 150])

  return (
    <main ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      <CustomCursor />
      
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full mix-blend-screen"
          style={{ y: bgY1 }}
          animate={{
            x: [0, 50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-secondary/20 blur-[100px] rounded-full mix-blend-screen"
          style={{ y: bgY2 }}
          animate={{
            x: [0, -40, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="z-10 container mx-auto px-6 flex flex-col items-center text-center mt-20 md:mt-32 mb-32">
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            The next generation of <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              digital experiences.
            </span>
          </h1>
          
          <div className="text-muted-foreground text-lg md:text-xl mb-12 max-w-2xl mx-auto flex justify-center text-center">
            <TextReveal text="Nova combines award-winning design with unparalleled performance. Build faster, scale smarter, and captivate your audience." />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <MagneticButton className="bg-white text-black hover:bg-neutral-200 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
              Get Started
            </MagneticButton>
            <MagneticButton className="bg-transparent border border-border hover:bg-white/5">
              Book a Demo
            </MagneticButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 50 }}
          className="mt-24 w-full max-w-5xl"
        >
          <ScrollScale outputRange={[0.9, 1.15]}>
            <TiltCard>
              <div className="relative rounded-xl overflow-hidden border border-border shadow-[0_0_80px_-20px_rgba(139,92,246,0.3)] bg-card">
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
                <img 
                  src="/dashboard.png" 
                  alt="Nova Dashboard" 
                  className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </TiltCard>
          </ScrollScale>
        </motion.div>
      </div>
      
      <FeaturesSection />
      <DashboardSection />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      <FooterSection />
    </main>
  )
}


