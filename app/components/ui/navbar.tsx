"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Changelog", href: "/changelog" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] flex justify-center transition-all duration-300",
        scrolled ? "pt-4" : "pt-8"
      )}
    >
      <nav
        className={cn(
          "flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 border",
          scrolled 
            ? "w-[90%] md:w-[600px] bg-background/70 backdrop-blur-md border-white/10 shadow-lg" 
            : "w-full max-w-6xl bg-transparent border-transparent"
        )}
      >
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-gradient-to-tr from-primary to-secondary flex items-center justify-center">
            <span className="font-bold text-white text-sm">N</span>
          </div>
          {!scrolled && <span className="font-bold text-lg hidden sm:block">Nova</span>}
        </Link>

        <ul className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.name} className="relative">
                <Link
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors block interactive",
                    isActive ? "text-white" : "text-muted-foreground hover:text-white"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-pill"
                      className="absolute inset-0 bg-white/10 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="hidden sm:block">
          <button className="text-sm font-medium px-4 py-2 bg-white text-black rounded-full hover:bg-neutral-200 transition-colors interactive">
            Sign In
          </button>
        </div>
      </nav>
    </motion.header>
  )
}

