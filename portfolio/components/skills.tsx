"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Code, Layout, Server, GitBranch, Languages, MessageSquare, Network, Brain } from "lucide-react"
import { useTranslation } from "@/lib/i18n"
import skillsData from "@/lib/i18n/skills"

export default function Skills() {
  const [activeTab, setActiveTab] = useState("programming")
  const { t, language } = useTranslation()

  const supportedLang = (["en", "pt"].includes(language) ? language : "en") as "en" | "pt"
  const categories = Object.entries(skillsData[supportedLang].categories).map(([id, cat]) => ({
    id,
    name: cat.name,
    icon:
      id === "programming" ? <Code className="h-5 w-5" /> :
      id === "frontend" ? <Layout className="h-5 w-5" /> :
      id === "backend" ? <Server className="h-5 w-5" /> :
      id === "devops" ? <GitBranch className="h-5 w-5" /> :
      id === "ai" ? <Brain className="h-5 w-5" /> :
      id === "cloud" ? <Network className="h-5 w-5" /> :
      id === "soft" ? <MessageSquare className="h-5 w-5" /> : null,
    skills: cat.skills,
  }))

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
      },
    }),
  }

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("skills.title")}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto text-muted-foreground">{t("skills.subtitle")}</p>
        </motion.div>

        <Tabs defaultValue="programming" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-flow-col auto-cols-[minmax(120px,1fr)] gap-2 w-full">
              {categories.map(cat => (
                <TabsTrigger 
                  key={cat.id} 
                  value={cat.id} 
                  className="whitespace-nowrap px-4 py-2 text-center"
                >
                  {cat.icon}
                  <span className="ml-2">{cat.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          {categories.map((cat, idx) => (
            <TabsContent key={cat.id} value={cat.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.isArray(cat.skills) && cat.skills.map((skill: any, i: number) => (
                  <motion.div
                    key={skill.name}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground font-semibold">{skill.level}%</span>
                    </div>
                    <Progress value={parseInt(skill.level)} />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
