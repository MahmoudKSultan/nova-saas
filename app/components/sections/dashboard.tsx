"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, useInView, animate } from "framer-motion"

// Simple animated counter component
function AnimatedCounter({ value, label, prefix = "", suffix = "" }: { value: number, label: string, prefix?: string, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState("0")

  useEffect(() => {
    if (inView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate(v) {
          if (value % 1 !== 0) {
            setDisplayValue(v.toFixed(1))
          } else {
            setDisplayValue(Math.round(v).toString())
          }
        }
      })
      return controls.stop
    }
  }, [value, inView])

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-2xl border border-white/10">
      <div className="text-sm text-muted-foreground mb-2">{label}</div>
      <div className="text-3xl font-bold flex items-center">
        {prefix}
        <motion.span
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          {displayValue}
        </motion.span>
        {suffix}
      </div>
    </div>
  )
}

export function DashboardSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Parallax effects for background elements
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100])

  return (
    <section id="dashboard" ref={containerRef} className="py-32 relative overflow-hidden bg-black">
      {/* Parallax Background Elements */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none" 
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" 
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Insights that drive growth
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Monitor your platform in real-time. Nova provides deep analytics and observability out of the box, so you can make data-driven decisions instantly.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <AnimatedCounter label="Total API Requests" value={2.4} suffix="B" />
          <AnimatedCounter label="Active Users" value={140} suffix="K" />
          <AnimatedCounter label="Global Latency" value={12} suffix="ms" />
          <AnimatedCounter label="Uptime" value={99.99} suffix="%" />
        </div>

        {/* Mock Chart Area */}
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="w-full h-96 rounded-3xl border border-white/10 bg-card overflow-hidden relative shadow-2xl flex flex-col p-8"
        >
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-medium">Traffic Over Time</h3>
            <div className="flex gap-2">
              {["1D", "7D", "1M", "ALL"].map((range, i) => (
                <button key={range} className={`px-3 py-1 text-xs rounded-full ${i === 1 ? 'bg-primary text-white' : 'bg-white/5 text-muted-foreground hover:bg-white/10'}`}>
                  {range}
                </button>
              ))}
            </div>
          </div>
          
          {/* Animated Chart Lines using SVG */}
          <div className="flex-1 relative flex items-end w-full">
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                d="M0,100 C20,80 30,100 50,60 C70,20 80,40 100,10"
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                d="M0,100 C20,90 30,80 50,50 C70,30 80,60 100,20"
                fill="none"
                stroke="var(--color-secondary)"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
              {[0, 1, 2, 3].map((_, i) => (
                <div key={i} className="w-full border-b border-white/5 h-0" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
