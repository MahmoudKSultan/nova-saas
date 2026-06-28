"use client"

import { motion } from "framer-motion"
import { CustomCursor } from "../components/ui/custom-cursor"
import { MagneticButton } from "../components/ui/magnetic-button"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
}

export default function ContactPage() {
  return (
    <main className="relative bg-black min-h-screen text-white overflow-hidden pt-32 pb-32 flex items-center justify-center">
      <CustomCursor />
      
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-[10%] left-[20%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full mix-blend-screen"
          animate={{ x: [0, 30, 0], y: [0, 40, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full max-w-6xl flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        {/* Text Side */}
        <div className="w-full lg:w-1/2">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Let's build the <br/> future together.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-muted-foreground mb-12"
          >
            Whether you have a question about pricing, need a custom integration, or just want to say hi, our team is ready to help.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-semibold text-lg mb-1">General Inquiries</h3>
              <p className="text-muted-foreground">hello@nova.dev</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Enterprise Support</h3>
              <p className="text-muted-foreground">support@nova.dev</p>
            </div>
          </motion.div>
        </div>

        {/* Form Side */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-1/2 bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl relative"
        >
          {/* Subtle inner glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

          <form className="relative z-10 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants} className="flex flex-col gap-2">
                <label className="text-sm font-medium text-muted-foreground ml-1">First Name</label>
                <input 
                  type="text" 
                  className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors focus:bg-white/5" 
                  placeholder="Jane"
                />
              </motion.div>
              <motion.div variants={itemVariants} className="flex flex-col gap-2">
                <label className="text-sm font-medium text-muted-foreground ml-1">Last Name</label>
                <input 
                  type="text" 
                  className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors focus:bg-white/5" 
                  placeholder="Doe"
                />
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <label className="text-sm font-medium text-muted-foreground ml-1">Work Email</label>
              <input 
                type="email" 
                className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors focus:bg-white/5" 
                placeholder="jane@company.com"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <label className="text-sm font-medium text-muted-foreground ml-1">Message</label>
              <textarea 
                rows={4}
                className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors focus:bg-white/5 resize-none" 
                placeholder="How can we help you?"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="mt-4">
              <MagneticButton className="w-full bg-primary text-white hover:bg-primary/90 shadow-[0_0_40px_-10px_rgba(139,92,246,0.5)] py-4">
                Send Message
              </MagneticButton>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </main>
  )
}
