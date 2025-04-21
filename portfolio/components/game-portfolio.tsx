"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import GameHUD from "@/components/game-hud"
import GameMenu from "@/components/game-menu"
import MouseTrail from "@/components/mouse-trail"
import { motion, AnimatePresence } from "framer-motion"

export default function GamePortfolio() {
  const [currentLevel, setCurrentLevel] = useState(1)
  const [showMenu, setShowMenu] = useState(false)
  const [progress, setProgress] = useState(0)
  const [score, setScore] = useState(0)
  const [achievements, setAchievements] = useState<string[]>([])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowMenu(!showMenu)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [showMenu])

  const handleScroll = () => {
    const scrollPosition = window.scrollY
    const windowHeight = window.innerHeight
    const documentHeight = document.body.scrollHeight - windowHeight

    // Calculate progress percentage
    const newProgress = Math.min(Math.floor((scrollPosition / documentHeight) * 100), 100)
    setProgress(newProgress)

    // Update level based on scroll position
    if (scrollPosition < windowHeight) {
      setCurrentLevel(1) // Hero
    } else if (scrollPosition < windowHeight * 2) {
      setCurrentLevel(2) // About
      if (!achievements.includes("about_unlocked")) {
        setAchievements([...achievements, "about_unlocked"])
        setScore(score + 100)
      }
    } else if (scrollPosition < windowHeight * 3) {
      setCurrentLevel(3) // Experience
      if (!achievements.includes("experience_unlocked")) {
        setAchievements([...achievements, "experience_unlocked"])
        setScore(score + 200)
      }
    } else if (scrollPosition < windowHeight * 4) {
      setCurrentLevel(4) // Skills
      if (!achievements.includes("skills_unlocked")) {
        setAchievements([...achievements, "skills_unlocked"])
        setScore(score + 300)
      }
    } else if (scrollPosition < windowHeight * 5) {
      setCurrentLevel(5) // Projects
      if (!achievements.includes("projects_unlocked")) {
        setAchievements([...achievements, "projects_unlocked"])
        setScore(score + 400)
      }
    } else {
      setCurrentLevel(6) // Contact
      if (!achievements.includes("contact_unlocked")) {
        setAchievements([...achievements, "contact_unlocked"])
        setScore(score + 500)
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [achievements, score])

  return (
    <>
      <MouseTrail />
      <GameHUD level={currentLevel} progress={progress} score={score} />

      <AnimatePresence>
        {showMenu && (
          <GameMenu onClose={() => setShowMenu(false)} progress={progress} score={score} achievements={achievements} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-background dark:bg-background"
      >
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </motion.div>
    </>
  )
}
