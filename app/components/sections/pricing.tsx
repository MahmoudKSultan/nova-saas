"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$49",
    description: "Perfect for small teams and startups.",
    features: ["Up to 10 users", "Basic Analytics", "Community Support", "10GB Storage"],
  },
  {
    name: "Pro",
    price: "$149",
    description: "Advanced features for scaling businesses.",
    features: ["Unlimited users", "Advanced Analytics", "Priority Support", "100GB Storage", "Custom Domains"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Dedicated infrastructure and support.",
    features: ["Unlimited everything", "Dedicated Account Manager", "SLA", "On-premise option", "Custom integrations"],
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Simple, transparent pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Choose the perfect plan for your business needs. No hidden fees.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className={`relative rounded-3xl p-8 flex flex-col h-full ${
                plan.popular 
                  ? "bg-white/5 border border-primary/50 shadow-[0_0_50px_-12px_rgba(139,92,246,0.3)]" 
                  : "bg-card border border-white/10"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-medium mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                </div>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 rounded-full font-medium transition-all duration-300 relative overflow-hidden group interactive ${
                  plan.popular 
                    ? "bg-primary text-white hover:bg-primary/90" 
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                <span className="relative z-10">{plan.price === "Custom" ? "Contact Sales" : "Get Started"}</span>
                {/* Ripple Effect Element */}
                <span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 rounded-full transition-transform duration-500 ease-out origin-center" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
