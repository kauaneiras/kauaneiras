"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Code, Layout, Server, GitBranch, Languages, MessageSquare, Network, Brain } from "lucide-react"

export default function Skills() {
  const [activeTab, setActiveTab] = useState("programming")

  const skillCategories = [
    {
      id: "programming",
      name: "Programming",
      icon: <Code className="h-5 w-5" />,
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Python", level: 80 },
        { name: "Java", level: 70 },
        { name: "C/C++", level: 75 },
      ],
    },
    {
      id: "frontend",
      name: "Frontend",
      icon: <Layout className="h-5 w-5" />,
      skills: [
        { name: "React", level: 90 },
        { name: "React Native", level: 85 },
        { name: "HTML & CSS", level: 95 },
        { name: "Vue.js", level: 70 },
        { name: "WordPress", level: 75 },
      ],
    },
    {
      id: "backend",
      name: "Backend",
      icon: <Server className="h-5 w-5" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Django", level: 80 },
        { name: "Spring Boot", level: 65 },
        { name: "SQL", level: 85 },
        { name: "MongoDB", level: 75 },
      ],
    },
    {
      id: "devops",
      name: "DevOps",
      icon: <GitBranch className="h-5 w-5" />,
      skills: [
        { name: "Gitflow", level: 85 },
        { name: "Docker", level: 80 },
        { name: "Kubernetes", level: 65 },
        { name: "CI/CD Github", level: 75 },
        { name: "Testes Unitários", level: 80 },
      ],
    },
    {
      id: "ai",
      name: "AI",
      icon: <Brain className="h-5 w-5" />,
      skills: [
        { name: "Prompt Engineering", level: 90 },
        { name: "LLM Integration", level: 85 },
        { name: "NLP", level: 75 },
        { name: "Machine Learning", level: 70 },
        { name: "AI Agents", level: 80 },
      ],
    },
    {
      id: "languages",
      name: "Languages",
      icon: <Languages className="h-5 w-5" />,
      skills: [
        { name: "Portuguese", level: 100 },
        { name: "English", level: 75 },
        { name: "German", level: 30 },
        { name: "Esperanto", level: 35 },
      ],
    },
    {
      id: "cloud",
      name: "Cloud",
      icon: <Network className="h-5 w-5" />,
      skills: [
        { name: "OpenStack", level: 80 },
        { name: "AWS", level: 70 },
        { name: "Azure", level: 65 },
        { name: "Virtualization", level: 85 },
        { name: "Network Security", level: 75 },
      ],
    },
    {
      id: "soft",
      name: "Soft Skills",
      icon: <MessageSquare className="h-5 w-5" />,
      skills: [
        { name: "Communication", level: 90 },
        { name: "Leadership", level: 85 },
        { name: "Fast Learning", level: 95 },
        { name: "Problem Solving", level: 90 },
        { name: "Teamwork", level: 85 },
      ],
    },
  ]

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto text-muted-foreground">My technical skills and areas of expertise</p>
        </motion.div>

        <Tabs defaultValue="programming" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
              {skillCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-400 data-[state=active]:text-white"
                >
                  {category.icon}
                  <span className="hidden md:inline">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial="hidden"
                    animate={activeTab === category.id ? "visible" : "hidden"}
                    custom={index}
                    variants={fadeIn}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">{skill.name}</h3>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress
                      value={skill.level}
                      className="h-2 bg-muted"
                      indicatorClassName="bg-gradient-to-r from-blue-500 to-cyan-400"
                    />
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
