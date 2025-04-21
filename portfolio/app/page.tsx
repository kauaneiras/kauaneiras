"use client"

import { useState, useEffect } from "react"
import StartScreen from "@/components/start-screen"
import GamePortfolio from "@/components/game-portfolio"
import { useTheme } from "next-themes"

export default function Home() {
  const [gameStarted, setGameStarted] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const startGame = () => {
    setGameStarted(true)
  }

  if (!mounted) {
    return null // Avoid rendering until client-side to prevent theme flash
  }

  return (
    <main className="min-h-screen bg-background dark:bg-background">
      {!gameStarted ? <StartScreen onStart={startGame} /> : <GamePortfolio />}
    </main>
  )
}
