"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Desenvolvedor",
      company: "Natural Fluency",
      period: "11/2024 - atual",
      description: [
        "Desenvolvimento de agentes e prompts de IA",
        "Integração com LLMs",
        "APIs REST com Django",
        "Interfaces interativas em React e React Native",
        "Uso de Bancos de dados SQL",
      ],
      type: "work",
      skills: ["AI", "Django", "React", "React Native", "SQL"],
    },
    {
      title: "Estágio",
      company: "Agência Nacional de Energia Elétrica - ANEEL",
      period: "04/2022 - 12/2024",
      description: [
        "Desenvolvimento de agentes e prompts de IA para avaliação de Notas Técnicas",
        "Testes de caixa preta",
        "Validação de dados no repositório OPEE",
      ],
      type: "work",
      skills: ["AI", "Testing", "Data Validation"],
    },
    {
      title: "Bolsista",
      company: "Lab Telecom UnB",
      period: "09/2022 - atual",
      description: [
        "Desenvolvimento de APIs REST com Express.js e Node.js",
        "Integração com bancos de dados SQL",
        "Criação de interfaces em React e WordPress",
        "Virtualização de infraestrutura com OpenStack",
        "Gestão da rede e nuvem do laboratório",
      ],
      type: "work",
      skills: ["Node.js", "Express", "React", "WordPress", "OpenStack", "Cloud"],
    },
    {
      title: "Bolsista",
      company: "Metala Nano",
      period: "07/2024 - 12/2024",
      description: ["Desenvolvimento do site", "Organização da documentação da empresa (pitch e business case)"],
      type: "work",
      skills: ["Web Development", "Documentation"],
    },
    {
      title: "Engenharia de Software",
      company: "Universidade de Brasília",
      period: "2023 - 2026",
      description: ["Em andamento"],
      type: "education",
      skills: [],
    },
    {
      title: "Bootcamp de Dev Web FullStack",
      company: "Driven Education",
      period: "2022",
      description: ["Finalizado"],
      type: "education",
      skills: ["HTML", "CSS", "Javascript", "React", "Node", "Express", "SQL", "MongoDB", "Redis", "Jest"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
            My professional journey and educational background
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-full hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-8`}
              >
                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                  <Card
                    className={`w-full max-w-lg border-none shadow-lg hover:shadow-xl transition-all duration-300 ${
                      exp.type === "work"
                        ? "bg-gradient-to-br from-background to-blue-500/5"
                        : "bg-gradient-to-br from-background to-cyan-500/5"
                    }`}
                  >
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        {exp.type === "work" ? (
                          <Briefcase className="h-5 w-5 text-blue-500" />
                        ) : (
                          <GraduationCap className="h-5 w-5 text-cyan-500" />
                        )}
                        <Badge variant="outline" className="text-xs font-normal">
                          {exp.period}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground">
                            • {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <Badge key={i} variant="secondary" className="bg-muted">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className="relative hidden md:block">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 z-10"></div>
                </div>

                <div className="w-full md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
