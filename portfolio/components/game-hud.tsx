"use client"

import { motion } from "framer-motion"
import { Trophy, Star, BarChart3, ChevronDown } from "lucide-react"
import { ModeToggle } from "./mode-toggle"
import LanguageSelector from "./language-selector"
import { useTranslation } from "@/lib/i18n/i18n"
import { useState } from "react"

interface GameHUDProps {
  level: number
  progress: number
  score: number
}

export default function GameHUD({ level, progress, score }: GameHUDProps) {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  // Lista de seções e seus hrefs
  const navLinks = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.experience"), href: "#experience" },
    { name: t("nav.skills"), href: "#skills" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.contact"), href: "#contact" },
  ]

  // O nome da página atual
  const currentPage = navLinks[level - 1]?.name || "";
  const currentHref = navLinks[level - 1]?.href || "#home";

  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
        className="fixed top-[0px] left-0 right-0 z-40 bg-background border-b border-muted p-2 flex justify-between items-center"
      >
        <div className="flex items-center gap-4">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-3 py-1 rounded-md font-bold">
            {t("common.level")} {level}
          </div>
          {/* Dropdown de navegação */}
          <div className="relative">
            <button
              className="text-sm font-medium flex items-center gap-1 px-2 py-1 rounded hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
              onClick={() => setOpen((v) => !v)}
              aria-haspopup="listbox"
              aria-expanded={open}
            >
              {currentPage}
              <svg className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {open && (
              <ul className="absolute left-0 mt-1 w-40 bg-background border border-muted rounded shadow z-50" role="listbox">
                {navLinks.map((link, idx) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={`block px-4 py-2 text-sm hover:bg-muted transition-colors ${currentHref === link.href ? 'font-bold text-primary' : ''}`}
                      onClick={() => setOpen(false)}
                      role="option"
                      aria-selected={currentHref === link.href}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
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
