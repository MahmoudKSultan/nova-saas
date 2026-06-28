"use client"

import { ReactNode, useRef, useState } from "react"
import { motion, type HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface MagneticButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode
  strength?: number
}

export function MagneticButton({ children, className, strength = 40, ...props }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return
    const { clientX, clientY } = e
    const { height, width, left, top } = buttonRef.current.getBoundingClientRect()
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    setPosition({ x: middleX * (strength / 100), y: middleY * (strength / 100) })
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(
        "relative flex items-center justify-center px-6 py-3 rounded-full font-medium text-white interactive transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  )
}
