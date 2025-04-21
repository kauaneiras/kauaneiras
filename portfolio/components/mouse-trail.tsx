"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

interface CursorPosition {
  x: number
  y: number
  id: string
}

export default function MouseTrail() {
  const [cursorTrail, setCursorTrail] = useState<CursorPosition[]>([])
  const [isClient, setIsClient] = useState(false)
  const idCounterRef = useRef(0)
  const isMobile = useMobile()

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const newId = `cursor-${idCounterRef.current++}`
    setCursorTrail((prevTrail) => [
      { x: e.clientX, y: e.clientY, id: newId },
      ...prevTrail.slice(0, 9), // Keep only the last 10 positions
    ])
  }, [])

  useEffect(() => {
    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove)
      return () => {
        window.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [handleMouseMove, isMobile])

  if (!isClient || isMobile) {
    return null // Return null on server-side or mobile
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {cursorTrail.map((cursor, index) => (
          <motion.div
            key={cursor.id}
            initial={{ opacity: 0.8, scale: 1 }}
            animate={{ opacity: 0, scale: 0.8 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              position: "absolute",
              left: cursor.x,
              top: cursor.y,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
              style={{
                opacity: 1 - index * 0.1, // Fade out based on position in the trail
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
