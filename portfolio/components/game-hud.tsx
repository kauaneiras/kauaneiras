"use client"

import { motion } from "framer-motion"
import { Trophy, Star, BarChart3, ChevronDown } from "lucide-react"
import { ModeToggle } from "./mode-toggle"
import LanguageSelector from "./language-selector"
import { useTranslation } from "@/lib/i18n"

interface GameHUDProps {
  level: number
  progress: number
  score: number
}

export default function GameHUD({ level, progress, score }: GameHUDProps) {
  const { t } = useTranslation()
  const levelNames = [
    "Start",
    t("nav.home"),
    t("nav.about"),
    t("nav.experience"),
    t("nav.skills"),
    t("nav.projects"),
    t("nav.contact"),
  ]

  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-muted p-2 flex justify-between items-center"
      >
        <div className="flex items-center gap-4">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-3 py-1 rounded-md font-bold">
            {t("common.level")} {level}
          </div>
          <div className="text-sm font-medium hidden sm:block">{levelNames[level]}</div>
        </div>

        <div className="flex-1 mx-4 max-w-md">
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-xs text-muted-foreground text-center mt-1">
            {t("common.progress")}: {progress}%
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <Trophy className="h-4 w-4 text-yellow-500 mr-1" />
            <span className="font-bold">{score}</span>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 mr-1" />
            <span className="font-bold">{Math.floor(progress / 20)}/5</span>
          </div>
          <div className="hidden md:flex items-center">
            <BarChart3 className="h-4 w-4 text-blue-500 mr-1" />
            <span className="font-bold">Lv.{level}</span>
          </div>
          <LanguageSelector />
          <ModeToggle />
        </div>
      </motion.div>

      {level === 1 && progress < 10 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-40 bg-background/80 backdrop-blur-md px-4 py-2 rounded-full border border-muted flex items-center gap-2"
        >
          <span className="text-sm font-medium">{t("common.scrollDown")}</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </motion.div>
      )}
    </>
  )
}
