"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useAnimation, useMotionValue } from "framer-motion"

const testimonials = [
  {
    quote: "Nova has completely transformed how we build and deploy our applications. The performance gains are literally unbelievable.",
    author: "Sarah Jenkins",
    role: "CTO at TechFlow",
    avatar: "S"
  },
  {
    quote: "The deep analytics provided out of the box allowed us to identify bottlenecks we didn't even know existed. Highly recommended.",
    author: "Marcus Aurelius",
    role: "Lead Engineer at Rome",
    avatar: "M"
  },
  {
    quote: "I've never used a platform that feels this premium and responsive. It's like having a senior DevOps team on autopilot.",
    author: "Elena Rodriguez",
    role: "Founder at Spark",
    avatar: "E"
  },
  {
    quote: "Migrating to Nova was the best technical decision we made this year. We reduced our infrastructure costs by 40%.",
    author: "David Chen",
    role: "VP of Engineering at ScaleUp",
    avatar: "D"
  },
  {
    quote: "The interface is so clean and intuitive. Even our non-technical team members can understand the analytics dashboards.",
    author: "Amanda Hugginkiss",
    role: "Product Manager at Innovate",
    avatar: "A"
  },
  {
    quote: "Our Time to First Byte (TTFB) dropped from 800ms to 45ms. It's like magic.",
    author: "James Wilson",
    role: "Senior Backend Engineer",
    avatar: "J"
  },
  {
    quote: "The best developer experience I've seen in a decade. Deployment is instant.",
    author: "Sofia Garcia",
    role: "Frontend Architect",
    avatar: "S"
  },
  {
    quote: "We don't even think about scaling anymore. The platform handles our spikes automatically.",
    author: "Liam O'Connor",
    role: "DevOps Lead",
    avatar: "L"
  }
]

export function TestimonialsSection() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const [dragConstraint, setDragConstraint] = useState(0)

  useEffect(() => {
    const updateConstraint = () => {
      if (carouselRef.current && innerRef.current) {
        // The constraint is the difference between the outer container's width 
        // and the inner draggable container's full width.
        const constraint = carouselRef.current.offsetWidth - innerRef.current.scrollWidth
        // If constraint is positive, it means the content fits and doesn't need dragging.
        setDragConstraint(constraint > 0 ? 0 : constraint)
      }
    }
    
    updateConstraint()
    // Small timeouts to wait for fonts and images
    setTimeout(updateConstraint, 100)
    setTimeout(updateConstraint, 500)
    
    window.addEventListener("resize", updateConstraint)
    return () => window.removeEventListener("resize", updateConstraint)
  }, [])

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-black/50">
      <div className="container mx-auto px-6 relative z-10 mb-16">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Loved by builders
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Don't just take our word for it. Hear from the engineers shaping the future.
          </motion.p>
        </div>
      </div>

      <div className="w-full overflow-hidden" ref={carouselRef}>
        <motion.div
          ref={innerRef}
          drag="x"
          dragConstraints={{ right: 0, left: dragConstraint }}
          dragMomentum={false}
          dragElastic={0}
          whileTap={{ cursor: "grabbing" }}
          className="flex gap-6 px-6 md:px-[10vw] cursor-grab interactive w-max"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="w-[280px] shrink-0 p-6 rounded-3xl bg-card border border-white/10 flex flex-col justify-between select-none"
            >
              <div className="mb-8">
                {/* Custom Quote Icon */}
                <svg className="w-8 h-8 text-primary/40 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-lg leading-relaxed">"{testimonial.quote}"</p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <div className="text-center mt-8 text-sm text-muted-foreground">
        &larr; Drag to explore &rarr;
      </div>
    </section>
  )
}
