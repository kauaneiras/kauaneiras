"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import { useTranslation, type Language } from "@/lib/i18n"

export default function LanguageSelector() {
  const { language, setLanguage } = useTranslation()

  const languages = {
    en: "English",
    pt: "Português",
    de: "Deutsch",
  }

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Select language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleLanguageChange("en")} className={language === "en" ? "bg-muted" : ""}>
          🇺🇸 English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange("pt")} className={language === "pt" ? "bg-muted" : ""}>
          🇧🇷 Português
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange("de")} className={language === "de" ? "bg-muted" : ""}>
          🇩🇪 Deutsch
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange("eo")} className={language === "eo" ? "bg-muted" : ""}>
          🌍 Esperanto
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
