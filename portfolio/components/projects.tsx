"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Filter } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Projects() {
  const [filter, setFilter] = useState<string | null>(null)

  // Sample projects based on the skills mentioned in the resume
  const projects = [
    {
      title: "AI Document Analyzer",
      description:
        "An AI-powered tool that analyzes technical documents and extracts key information using NLP techniques.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["AI", "NLP", "Python", "Django", "React"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Cloud Infrastructure Dashboard",
      description: "A dashboard for monitoring and managing cloud infrastructure with real-time analytics.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "OpenStack", "Cloud", "Docker"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Mobile Learning Platform",
      description: "A cross-platform mobile app for interactive learning with personalized content.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React Native", "Node.js", "MongoDB", "AI"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "API Gateway Service",
      description: "A scalable API gateway service with authentication, rate limiting, and request routing.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Express.js", "Node.js", "Docker", "Kubernetes"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Smart Home Automation",
      description: "An IoT-based smart home automation system with voice control and mobile app.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["IoT", "React", "Node.js", "C++", "AI"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with payment integration and inventory management.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "SQL", "Redis"],
      demoUrl: "#",
      githubUrl: "#",
    },
  ]

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
            A selection of my recent work and personal projects
          </p>
        </motion.div>

        <div className="flex justify-center mb-8">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                {filter ? `Filter: ${filter}` : "Filter Projects"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
              <DropdownMenuItem onClick={() => setFilter(null)}>All Projects</DropdownMenuItem>
              {allTags.map((tag) => (
                <DropdownMenuItem key={tag} onClick={() => setFilter(tag)}>
                  {tag}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

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
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-muted">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex gap-4">
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> Demo
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="mr-2 h-4 w-4" /> Code
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
