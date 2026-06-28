"use client"

import { useRef, ReactNode } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ScrollScaleProps {
  children: ReactNode
  className?: string
  outputRange?: number[]
}

export function ScrollScale({ children, className = "", outputRange = [0.85, 1.1] }: ScrollScaleProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // The element will scale from outputRange[0] when it enters the bottom of the screen,
  // up to outputRange[1] as it leaves the top of the screen.
  const scale = useTransform(scrollYProgress, [0, 1], outputRange)
  
  // Adding a slight parallax/y-shift effect as well for depth
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.5])

  return (
    <motion.div 
      ref={containerRef}
      style={{ scale, y, opacity }}
      className={`origin-center ${className}`}
    >
      {children}
    </motion.div>
  )
}
