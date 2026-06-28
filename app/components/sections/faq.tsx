"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "How does Nova's edge network reduce latency?",
    answer: "Our globally distributed edge network caches your data and assets at over 300 locations worldwide. This ensures that users always connect to a server physically close to them, typically resulting in single-digit millisecond latency."
  },
  {
    question: "Can I migrate my existing application to Nova?",
    answer: "Absolutely. We provide comprehensive migration tools and a dedicated support team for Enterprise customers to ensure a seamless transition with zero downtime."
  },
  {
    question: "What kind of analytics does Nova provide?",
    answer: "Nova offers real-time observability, including active user tracking, global latency heatmaps, API endpoint performance, error rates, and custom event tracking out of the box."
  },
  {
    question: "Is there a limit to how many users I can have on the Pro plan?",
    answer: "No, the Pro plan includes unlimited users. You only pay for the storage and compute resources you consume beyond the generous included limits."
  },
  {
    question: "How does the pricing scale?",
    answer: "Our pricing is entirely usage-based after the base tier. You'll only ever pay for what you actually use, with built-in cost caps to prevent unexpected bills."
  }
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Frequently asked questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Everything you need to know about the product and billing.
          </motion.p>
        </div>

        <div className="w-full max-w-3xl mx-auto flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="w-full border border-white/10 rounded-2xl bg-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none interactive"
                >
                  <span className="text-lg font-medium pr-8">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-primary"
                  >
                    <Plus className="w-5 h-5" />
                  </motion.div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    >
                      <div className="px-6 pb-6 pt-0 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
