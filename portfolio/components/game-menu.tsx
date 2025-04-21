"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X, Trophy, Volume2, VolumeX, Home, Moon, Sun } from "lucide-react"
import { useState } from "react"
import { useTheme } from "next-themes"
import { useTranslation } from "@/lib/i18n"

interface GameMenuProps {
  onClose: () => void
  progress: number
  score: number
  achievements: string[]
}

export default function GameMenu({ onClose, progress, score, achievements }: GameMenuProps) {
  const [isMuted, setIsMuted] = useState(true)
  const [activeTab, setActiveTab] = useState("stats")
  const { theme, setTheme } = useTheme()
  const { t, language, setLanguage } = useTranslation()

  const toggleMute = () => {
    setIsMuted(!isMuted)
    // Audio implementation would go here
  }

  const achievementsList = [
    {
      id: "about_unlocked",
      name: t("achievements.aboutUnlocked.name"),
      points: 100,
      description: t("achievements.aboutUnlocked.description"),
    },
    {
      id: "experience_unlocked",
      name: t("achievements.experienceUnlocked.name"),
      points: 200,
      description: t("achievements.experienceUnlocked.description"),
    },
    {
      id: "skills_unlocked",
      name: t("achievements.skillsUnlocked.name"),
      points: 300,
      description: t("achievements.skillsUnlocked.description"),
    },
    {
      id: "projects_unlocked",
      name: t("achievements.projectsUnlocked.name"),
      points: 400,
      description: t("achievements.projectsUnlocked.description"),
    },
    {
      id: "contact_unlocked",
      name: t("achievements.contactUnlocked.name"),
      points: 500,
      description: t("achievements.contactUnlocked.description"),
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-background border border-muted rounded-lg shadow-xl w-full max-w-2xl p-6 relative"
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </Button>

        <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
          {t("gameMenu.title")}
        </h2>

        <div className="flex border-b border-muted mb-4">
          <Button
            variant="ghost"
            className={`${activeTab === "stats" ? "border-b-2 border-primary" : ""}`}
            onClick={() => setActiveTab("stats")}
          >
            {t("gameMenu.stats")}
          </Button>
          <Button
            variant="ghost"
            className={`${activeTab === "achievements" ? "border-b-2 border-primary" : ""}`}
            onClick={() => setActiveTab("achievements")}
          >
            {t("gameMenu.achievements")}
          </Button>
          <Button
            variant="ghost"
            className={`${activeTab === "settings" ? "border-b-2 border-primary" : ""}`}
            onClick={() => setActiveTab("settings")}
          >
            {t("gameMenu.settings")}
          </Button>
        </div>

        {activeTab === "stats" && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-muted-foreground mb-1">{t("common.progress")}</h3>
                <p className="text-2xl font-bold">{progress}%</p>
                <div className="h-2 bg-muted rounded-full overflow-hidden mt-2">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-muted-foreground mb-1">{t("common.score")}</h3>
                <p className="text-2xl font-bold">{score}</p>
                <p className="text-xs text-muted-foreground mt-2">{t("gameMenu.unlockMore")}</p>
              </div>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-muted-foreground mb-1">{t("gameMenu.sectionsDiscovered")}</h3>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div
                  className={`p-2 rounded ${achievements.includes("about_unlocked") ? "bg-blue-500/20" : "bg-muted"}`}
                >
                  {t("gameMenu.background")} {achievements.includes("about_unlocked") ? "✓" : "?"}
                </div>
                <div
                  className={`p-2 rounded ${achievements.includes("experience_unlocked") ? "bg-blue-500/20" : "bg-muted"}`}
                >
                  {t("gameMenu.experience")} {achievements.includes("experience_unlocked") ? "✓" : "?"}
                </div>
                <div
                  className={`p-2 rounded ${achievements.includes("skills_unlocked") ? "bg-blue-500/20" : "bg-muted"}`}
                >
                  {t("gameMenu.skills")} {achievements.includes("skills_unlocked") ? "✓" : "?"}
                </div>
                <div
                  className={`p-2 rounded ${achievements.includes("projects_unlocked") ? "bg-blue-500/20" : "bg-muted"}`}
                >
                  {t("gameMenu.projects")} {achievements.includes("projects_unlocked") ? "✓" : "?"}
                </div>
                <div
                  className={`p-2 rounded ${achievements.includes("contact_unlocked") ? "bg-blue-500/20" : "bg-muted"}`}
                >
                  {t("gameMenu.contact")} {achievements.includes("contact_unlocked") ? "✓" : "?"}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "achievements" && (
          <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
            {achievementsList.map((achievement) => (
              <div
                key={achievement.id}
                className={`p-3 rounded-lg border ${
                  achievements.includes(achievement.id)
                    ? "bg-blue-500/10 border-blue-500/30"
                    : "bg-muted/30 border-muted"
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{achievements.includes(achievement.id) ? achievement.name : "???"}</h3>
                    <p className="text-sm text-muted-foreground">
                      {achievements.includes(achievement.id)
                        ? achievement.description
                        : t("gameMenu.achievementLocked")}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Trophy
                      className={`h-4 w-4 mr-1 ${achievements.includes(achievement.id) ? "text-yellow-500" : "text-muted-foreground"}`}
                    />
                    <span
                      className={`text-sm font-bold ${achievements.includes(achievement.id) ? "" : "text-muted-foreground"}`}
                    >
                      {achievement.points}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "settings" && (
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
              <div>
                <h3 className="font-medium">{t("gameMenu.sound")}</h3>
                <p className="text-sm text-muted-foreground">Toggle game sounds</p>
              </div>
              <Button variant="outline" size="sm" onClick={toggleMute}>
                {isMuted ? <VolumeX className="h-4 w-4 mr-1" /> : <Volume2 className="h-4 w-4 mr-1" />}
                {isMuted ? t("startScreen.soundOff") : t("startScreen.soundOn")}
              </Button>
            </div>

            <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
              <div>
                <h3 className="font-medium">{t("gameMenu.theme")}</h3>
                <p className="text-sm text-muted-foreground">Choose light or dark mode</p>
              </div>
              <div className="flex gap-2">
                <Button variant={theme === "light" ? "default" : "outline"} size="sm" onClick={() => setTheme("light")}>
                  <Sun className="h-4 w-4 mr-1" /> {t("startScreen.light")}
                </Button>
                <Button variant={theme === "dark" ? "default" : "outline"} size="sm" onClick={() => setTheme("dark")}>
                  <Moon className="h-4 w-4 mr-1" /> {t("startScreen.dark")}
                </Button>
              </div>
            </div>

            <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
              <div>
                <h3 className="font-medium">{t("gameMenu.language")}</h3>
                <p className="text-sm text-muted-foreground">Select your preferred language</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button variant={language === "en" ? "default" : "outline"} size="sm" onClick={() => setLanguage("en")}>
                  🇺🇸 English
                </Button>
                <Button variant={language === "pt" ? "default" : "outline"} size="sm" onClick={() => setLanguage("pt")}>
                  🇧🇷 Português
                </Button>
                <Button variant={language === "de" ? "default" : "outline"} size="sm" onClick={() => setLanguage("de")}>
                  🇩🇪 Deutsch
                </Button>
                <Button variant={language === "eo" ? "default" : "outline"} size="sm" onClick={() => setLanguage("eo")}>
                  🌍 Esperanto
                </Button>
              </div>
            </div>

            <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
              <div>
                <h3 className="font-medium">{t("gameMenu.resetProgress")}</h3>
                <p className="text-sm text-muted-foreground">{t("gameMenu.resetDesc")}</p>
              </div>
              <Button variant="destructive" size="sm">
                {t("gameMenu.reset")}
              </Button>
            </div>

            <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
              <div>
                <h3 className="font-medium">{t("gameMenu.returnToStart")}</h3>
                <p className="text-sm text-muted-foreground">{t("gameMenu.returnDesc")}</p>
              </div>
              <Button variant="outline" size="sm">
                <Home className="h-4 w-4 mr-1" /> {t("gameMenu.start")}
              </Button>
            </div>
          </div>
        )}

        <div className="mt-6 flex justify-end">
          <Button onClick={onClose}>{t("gameMenu.resume")}</Button>
        </div>
      </motion.div>
    </motion.div>
  )
}
