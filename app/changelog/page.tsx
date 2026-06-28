"use client"

import { motion } from "framer-motion"
import { CustomCursor } from "../components/ui/custom-cursor"

const logs = [
  {
    version: "v2.4.0",
    date: "October 12, 2024",
    title: "The Performance Update",
    changes: [
      "Introduced a new globally distributed caching layer.",
      "Reduced API latency by an average of 40%.",
      "Fixed a bug affecting deep dashboard analytics rendering.",
    ]
  },
  {
    version: "v2.3.0",
    date: "September 5, 2024",
    title: "Advanced Observability",
    changes: [
      "Added distributed tracing out of the box.",
      "New custom event tracking API.",
      "UI redesign for the main logging dashboard.",
    ]
  },
  {
    version: "v2.2.0",
    date: "August 18, 2024",
    title: "Enterprise Security Features",
    changes: [
      "SOC2 compliance audit completed.",
      "Added support for custom SAML SSO integrations.",
      "Enhanced role-based access control (RBAC).",
    ]
  },
  {
    version: "v2.1.0",
    date: "July 3, 2024",
    title: "Edge Database Sync",
    changes: [
      "Real-time database state sync across edge nodes.",
      "New reactive hooks for React and Vue clients.",
    ]
  }
]

export default function ChangelogPage() {
  return (
    <main className="relative bg-black min-h-screen text-white overflow-hidden pt-32 pb-32">
      <CustomCursor />
      
      <div className="container mx-auto px-6 mb-20 max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          Changelog
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xl text-muted-foreground"
        >
          New updates and improvements to Nova.
        </motion.p>
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative">
        {/* Vertical line connecting nodes */}
        <div className="absolute left-[39px] md:left-[50px] top-0 bottom-0 w-px bg-white/10 z-0" />

        {logs.map((log, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100, delay: index * 0.1 }}
            className="relative z-10 flex gap-8 md:gap-12 mb-20 group"
          >
            {/* Glowing Node */}
            <div className="flex flex-col items-center mt-2 shrink-0">
              <div className="w-8 h-8 rounded-full bg-black border-2 border-primary flex items-center justify-center relative shadow-[0_0_20px_-2px_rgba(139,92,246,0.5)] group-hover:shadow-[0_0_30px_2px_rgba(139,92,246,0.8)] group-hover:scale-125 transition-all duration-500">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 pb-10">
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-4">
                <h2 className="text-2xl md:text-3xl font-bold">{log.title}</h2>
                <span className="text-primary font-mono bg-primary/10 px-2 py-1 rounded text-sm shrink-0">
                  {log.version}
                </span>
                <span className="text-muted-foreground text-sm">{log.date}</span>
              </div>
              
              <ul className="space-y-4">
                {log.changes.map((change, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + (i * 0.1) }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-secondary mt-1.5 shrink-0">&rarr;</span>
                    <span className="text-muted-foreground leading-relaxed text-lg">{change}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  )
}
