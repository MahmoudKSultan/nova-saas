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
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 relative">
      {/* The key fix: the section and all containers use block layout, never flex/grid on the items themselves */}
      <div className="container mx-auto px-6 max-w-3xl">
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

        {/* 
          Key fix: items are display:block (not flex children), so their width
          is always 100% of the parent. No flex/grid children here.
        */}
        <div className="space-y-3 max-w-[600px] mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                style={{ display: "block" }}
                className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden"
              >
                {/* Button is block-level, always fills the width */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  style={{ display: "flex", width: "100%" }}
                  className="items-center justify-between px-6 py-5 text-left focus:outline-none interactive"
                >
                  <span className="text-base font-medium">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    style={{ flexShrink: 0, display: "flex", marginLeft: "1rem" }}
                    className="w-7 h-7 rounded-full bg-white/10 items-center justify-center text-primary"
                  >
                    <Plus className="w-4 h-4" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="px-6 pb-5 text-muted-foreground leading-relaxed text-sm">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
