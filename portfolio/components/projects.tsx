"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Filter } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useTranslation } from "@/lib/i18n"
import projectsData from "@/lib/i18n/projects"

export default function Projects() {
  const [filter, setFilter] = useState<string | null>(null)
  const { language } = useTranslation()
  const projectsI18n = projectsData[["en", "pt", "de", "eo"].includes(language) ? language : "en"]
  // Se não houver projetos, usar exemplos aleatórios
  const exampleProjects = [
    {
      title: "Weather App",
      description: "A simple app to check the weather in any city.",
      tags: ["React", "API", "Weather"],
      image: "/placeholder.svg?height=400&width=600",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Manager",
      description: "Manage your daily tasks efficiently.",
      tags: ["Vue.js", "Productivity", "Firebase"],
      image: "/placeholder.svg?height=400&width=600",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio to showcase my work.",
      tags: ["Next.js", "Design", "Personal"],
      image: "/placeholder.svg?height=400&width=600",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "E-commerce Store",
      description: "An online store with payment integration.",
      tags: ["Node.js", "E-commerce", "Stripe"],
      image: "/placeholder.svg?height=400&width=600",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Chat Application",
      description: "A real-time chat app for teams.",
      tags: ["Socket.io", "Chat", "Team"],
      image: "/placeholder.svg?height=400&width=600",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Blog Platform",
      description: "A platform to write and share blog posts.",
      tags: ["Blog", "Content", "CMS"],
      image: "/placeholder.svg?height=400&width=600",
      demoUrl: "#",
      githubUrl: "#",
    },
  ]

  // Adapta os projetos do i18n para o formato esperado
  const projects = (projectsI18n.items && projectsI18n.items.length > 0
    ? projectsI18n.items
    : exampleProjects)

  const allTags = Array.from(new Set(projects.flatMap((project) => project.tags)))
  const filteredProjects = filter ? projects.filter((project) => project.tags.includes(filter)) : projects

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{projectsI18n.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto text-muted-foreground">{projectsI18n.subtitle}</p>
        </motion.div>

        <div className="flex justify-center mb-8">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                {filter ? `${projectsI18n.filterProjects}: ${filter}` : projectsI18n.filterProjects}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
              <DropdownMenuItem onClick={() => setFilter(null)}>{projectsI18n.allProjects}</DropdownMenuItem>
              {allTags.map((tag) => (
                <DropdownMenuItem key={tag} onClick={() => setFilter(tag)}>
                  {tag}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {projects.length === 0 ? (
          <div className="text-center text-muted-foreground py-12">
            No projects found for this language. Please add them in the i18n file.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col bg-gradient-to-br from-background to-muted/50">
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6 flex-grow">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag: string) => (
                        <Badge key={tag} variant="secondary" className="bg-muted">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 flex gap-4">
                    {project.sobreUrl && project.playstoreUrl ? (
                      <>
                        <Button
                          asChild
                          variant="default"
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
                        >
                          <a href={project.sobreUrl} target="_blank" rel="noopener noreferrer">
                            {language === "pt" ? "Sobre" : language === "de" ? "Über" : language === "eo" ? "Pri" : "About"}
                          </a>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="flex-1"
                        >
                          <a href={project.playstoreUrl} target="_blank" rel="noopener noreferrer">
                            Playstore
                          </a>
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          variant="default"
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" /> {projectsI18n.demo}
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Github className="mr-2 h-4 w-4" /> {projectsI18n.code}
                        </Button>
                      </>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
