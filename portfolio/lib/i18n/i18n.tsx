"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Import all translation files
import common from "./common"
import nav from "./nav"
import hero from "./hero"
import startScreen from "./startScreen"
import about from "./about"
import experience from "./experience"
import skills from "./skills"
import projects from "./projects"
import contact from "./contact"
import gameMenu from "./gameMenu"
import achievements from "./achievements"
import footer from "./footer"

// Define available languages
export type Language = "en" | "pt" | "de" | "eo"

// Define translation structure
export type Translations = {
  [key: string]: any
}

// Combine all translations
const translations: Record<Language, Translations> = {
  en: {
    common: common.en,
    nav: nav.en,
    hero: hero.en,
    startScreen: startScreen.en,
    about: about.en,
    experience: experience.en,
    skills: skills.en,
    projects: projects.en,
    contact: contact.en,
    gameMenu: gameMenu.en,
    achievements: achievements.en,
    footer: footer.en,
  },
  pt: {
    common: common.pt,
    nav: nav.pt,
    hero: hero.pt,
    startScreen: startScreen.pt,
    about: about.pt,
    experience: experience.pt,
    skills: skills.pt,
    projects: projects.pt,
    contact: contact.pt,
    gameMenu: gameMenu.pt,
    achievements: achievements.pt,
    footer: footer.pt,
  },
  de: {
    common: common.de,
    nav: nav.de,
    hero: hero.de,
    startScreen: startScreen.de,
    about: about.de,
    experience: experience.de,
    skills: skills.de,
    projects: projects.de,
    contact: contact.de,
    gameMenu: gameMenu.de,
    achievements: achievements.de,
    footer: footer.de,
  },
  eo: {
    common: common.eo,
    nav: nav.eo,
    hero: hero.eo,
    startScreen: startScreen.eo,
    about: about.eo,
    experience: experience.eo,
    skills: skills.eo,
    projects: projects.eo,
    contact: contact.eo,
    gameMenu: gameMenu.eo,
    achievements: achievements.eo,
    footer: footer.eo,
  },
}

// Create the language context
type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: () => "",
})

// Create the language provider component
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  // Set mounted state to true on client-side
  useEffect(() => {
    setMounted(true)

    // Try to get language from localStorage
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && ["en", "pt", "de", "eo"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language preference to localStorage
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("language", language)
    }
  }, [language, mounted])

  // Translation function
  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k]
      } else {
        console.warn(`Translation key not found: ${key}`)
        return key
      }
    }

    return typeof value === "string" ? value : key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

// Custom hook to use the language context
export function useTranslation() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useTranslation must be used within a LanguageProvider")
  }
  return context
}
