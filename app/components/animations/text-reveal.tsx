"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface TextRevealProps {
  text: string
  className?: string
}

export function TextReveal({ text, className = "" }: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"]
  })

  // Split text into words
  const words = text.split(" ")

  return (
    <div ref={containerRef} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        // Calculate the range for this specific word
        const start = i / words.length
        const end = start + (1 / words.length)
        
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1])
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const y = useTransform(scrollYProgress, [start, end], [10, 0])

        return (
          <motion.span 
            key={i} 
            style={{ opacity, y }}
            className="mr-2 mb-2 inline-block"
          >
            {word}
          </motion.span>
        )
      })}
    </div>
  )
}
