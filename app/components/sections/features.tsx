"use client"

import { motion, type Variants } from "framer-motion"
import { SpotlightCard } from "../ui/spotlight-card"
import { Cpu, Zap, Lock, Globe, Database, Activity } from "lucide-react"

const features = [
  {
    title: "Ultra-fast Edge API",
    description: "Experience single-digit millisecond latency across the globe with our custom edge network.",
    icon: <Zap className="w-6 h-6 text-primary" />,
  },
  {
    title: "Secure by Default",
    description: "Enterprise-grade security built directly into the core, protecting your data in transit and at rest.",
    icon: <Lock className="w-6 h-6 text-secondary" />,
  },
  {
    title: "Global Scalability",
    description: "Scale seamlessly from zero to millions of users without provisioning or managing infrastructure.",
    icon: <Globe className="w-6 h-6 text-primary" />,
  },
  {
    title: "AI-Powered Intelligence",
    description: "Harness the power of integrated machine learning models for predictive analytics.",
    icon: <Cpu className="w-6 h-6 text-secondary" />,
  },
  {
    title: "Real-time Database",
    description: "Sync state across all connected clients instantly with our reactive data layer.",
    icon: <Database className="w-6 h-6 text-primary" />,
  },
  {
    title: "Deep Observability",
    description: "Gain complete insight into your application's performance with built-in tracing.",
    icon: <Activity className="w-6 h-6 text-secondary" />,
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Built for the future
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Everything you need to build, scale, and manage your next big idea with absolute precision.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <SpotlightCard className="h-full p-8 flex flex-col group cursor-default">
                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
