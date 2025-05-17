"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Play, Volume2, VolumeX, Moon, Sun, ChevronDown } from "lucide-react"
import { ModeToggle } from "./mode-toggle"
import LanguageSelector from "./language-selector"
import { useTheme } from "next-themes"
import { useTranslation } from "@/lib/i18n/i18n"

interface StartScreenProps {
  onStart: () => void
}

export default function StartScreen({ onStart }: StartScreenProps) {
  const [isMuted, setIsMuted] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const { theme, setTheme } = useTheme()
  const { t } = useTranslation()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 5
      })
    }, 100)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [])

  const toggleMute = () => {
    setIsMuted(!isMuted)
    // Audio implementation would go here
  }

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-background dark:bg-background">
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <LanguageSelector />
        <ModeToggle />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
          KAUAN EIRAS
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-foreground">{t("startScreen.title")}</h2>

        {isLoading ? (
          <div className="w-64 md:w-96 mx-auto mb-8">
            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
                initial={{ width: "0%" }}
                animate={{ width: `${loadingProgress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              {t("startScreen.loading")} {loadingProgress}%
            </p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <Button
              onClick={onStart}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-xl px-8 py-6 h-auto"
            >
              <Play className="mr-2 h-5 w-5" /> {t("startScreen.startButton")}
            </Button>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-4 text-muted-foreground flex flex-col items-center"
            >
              <p>{t("startScreen.scrollToExplore")}</p>
              <ChevronDown className="h-5 w-5 mt-1 animate-bounce" />
            </motion.div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-sm text-muted-foreground"
        >
          <p className="mb-4">{t("startScreen.navigate")}</p>
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="sm" onClick={toggleMute} className="text-muted-foreground">
              {isMuted ? <VolumeX className="h-4 w-4 mr-1" /> : <Volume2 className="h-4 w-4 mr-1" />}
              {isMuted ? t("startScreen.soundOff") : t("startScreen.soundOn")}
            </Button>

            <div className="flex gap-2">
              <Button
                variant={theme === "light" ? "default" : "ghost"}
                size="sm"
                onClick={() => setTheme("light")}
                className={theme === "light" ? "" : "text-muted-foreground"}
              >
                <Sun className="h-4 w-4 mr-1" /> {t("startScreen.light")}
              </Button>
              <Button
                variant={theme === "dark" ? "default" : "ghost"}
                size="sm"
                onClick={() => setTheme("dark")}
                className={theme === "dark" ? "" : "text-muted-foreground"}
              >
                <Moon className="h-4 w-4 mr-1" /> {t("startScreen.dark")}
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-4 left-4 right-4 text-center text-xs text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <p>{t("startScreen.controls")}</p>
      </motion.div>
    </div>
  )
}
