"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { CustomCursor } from "../components/ui/custom-cursor"
import { TextReveal } from "../components/animations/text-reveal"

const timelineEvents = [
  { year: "2020", title: "The Idea", description: "Nova was born out of frustration with existing deployment platforms. We wanted something faster." },
  { year: "2021", title: "First Commit", description: "A team of three engineers began working on the core engine in a small garage in San Francisco." },
  { year: "2022", title: "Seed Round", description: "Raised $5M from top-tier VCs who believed in our vision for the edge." },
  { year: "2023", title: "Public Beta", description: "Over 10,000 developers signed up in the first week to try the new platform." },
  { year: "2024", title: "Global Scale", description: "Deployed our 300th edge node, bringing single-digit latency to 95% of the globe." },
]

export default function AboutPage() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  // Horizontal scroll transform based on vertical scroll
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-80%"])

  return (
    <main className="relative bg-black min-h-screen text-white overflow-hidden pt-32 pb-32">
      <CustomCursor />
      
      <div className="container mx-auto px-6 mb-40">
        <motion.h1 
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-bold tracking-tighter mb-8"
        >
          Our Story
        </motion.h1>
        <div className="max-w-3xl text-xl md:text-3xl text-muted-foreground leading-relaxed">
          <TextReveal text="We're on a mission to completely redefine how applications are built, scaled, and experienced across the internet." />
        </div>
      </div>

      {/* Horizontal Scroll Section */}
      <section ref={targetRef} className="relative h-[300vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-16 md:gap-32 px-6 md:px-20">
            {timelineEvents.map((event, index) => (
              <div key={index} className="w-[300px] md:w-[500px] shrink-0 flex flex-col justify-center">
                <motion.div 
                  initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
                  whileInView={{ opacity: 1, clipPath: "inset(0 0 0 0)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mb-8 relative"
                >
                  <div className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent absolute -top-16 -left-8 z-0 select-none">
                    {event.year}
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold mb-4 relative z-10">{event.title}</h3>
                </motion.div>
                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-muted-foreground text-lg"
                >
                  {event.description}
                </motion.p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Clip-path reveal section */}
      <div className="container mx-auto px-6 mt-40">
        <motion.div 
          initial={{ clipPath: "circle(0% at 50% 50%)" }}
          whileInView={{ clipPath: "circle(150% at 50% 50%)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="relative w-full h-[60vh] rounded-3xl overflow-hidden bg-primary/20 border border-primary/30 flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10" />
          <h2 className="text-4xl md:text-6xl font-bold relative z-20 text-center px-4">
            Join the revolution.
          </h2>
        </motion.div>
      </div>
    </main>
  )
}
