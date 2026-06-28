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

const values = [
  { title: "Developer First", desc: "We prioritize the developer experience above all else. If it's not intuitive, we don't ship it." },
  { title: "Relentless Performance", desc: "Every millisecond counts. We optimize at the lowest levels so you don't have to." },
  { title: "Transparent Scale", desc: "No hidden limits or surprise bills. Scale to infinity effortlessly and transparently." },
  { title: "Security by Design", desc: "Enterprise-grade security embedded into the platform from day zero." }
]

const team = [
  { name: "Alice Chen", role: "Chief Executive Officer", initials: "AC" },
  { name: "Marcus Reed", role: "Chief Technology Officer", initials: "MR" },
  { name: "Sarah Jenkins", role: "Head of Product", initials: "SJ" },
  { name: "David Kim", role: "Lead Designer", initials: "DK" },
  { name: "Elena Rossi", role: "VP of Engineering", initials: "ER" },
  { name: "James Wilson", role: "Head of Growth", initials: "JW" }
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
      
      {/* Values Section */}
      <section className="py-32 relative z-10 bg-black/50">
        <div className="container mx-auto px-6">
          <div className="mb-20 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
            >
              Our Core Values
            </motion.h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every feature we build and every decision we make.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                  <div className="w-4 h-4 rounded-full bg-primary animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-20 text-center"
          >
            Meet the Team
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/80 to-secondary/80 flex items-center justify-center text-4xl font-black text-white mb-6 group-hover:scale-110 transition-transform duration-500">
                  {member.initials}
                </div>
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clip-path reveal section */}
      <div className="container mx-auto px-6 mt-20">
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
