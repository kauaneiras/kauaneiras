"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap } from "lucide-react"
import { useTranslation } from "@/lib/i18n"
import experienceData from "@/lib/i18n/experience"

export default function Experience() {
  const { language } = useTranslation()
  const exp = experienceData[["en", "pt", "de", "eo"].includes(language) ? language : "en"]

  // Work experiences
  const workExperiences = exp.work

  // Education experiences
  const educationExperiences = exp.education

  // Combine all experiences for timeline
  // We'll interleave work and education for the timeline, or you can show work first, then education
  // Here, let's show work first, then education

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{exp.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto text-muted-foreground">{exp.subtitle}</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-full hidden md:block"></div>

          <div className="space-y-12">
            {/* Work Experiences */}
            {workExperiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}
              >
                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                  <Card
                    className="w-full max-w-lg border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background to-blue-500/5"
                  >
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <Briefcase className="h-5 w-5 text-blue-500" />
                        <Badge variant="outline" className="text-xs font-normal">
                          {item.period}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      <p className="text-muted-foreground">{item.company}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        {item.description.map((desc, i) => (
                          <li key={i} className="text-sm text-muted-foreground">
                            • {desc}
                          </li>
                        ))}
                      </ul>
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

            {/* Education Experiences */}
            {educationExperiences.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (workExperiences.length + index) * 0.1 }}
                className={`flex flex-col ${(workExperiences.length + index) % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}
              >
                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                  <Card
                    className="w-full max-w-lg border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background to-cyan-500/5"
                  >
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <GraduationCap className="h-5 w-5 text-cyan-500" />
                        <Badge variant="outline" className="text-xs font-normal">
                          {edu.institution}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{edu.institution}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        {edu.courses.map((course, i) => (
                          <li key={i} className="text-sm text-muted-foreground">
                            <span className="font-semibold">{course.name}</span> ({course.period}) - {course.status}
                            {"technologies" in course && course.technologies && (
                              <div className="text-xs text-muted-foreground mt-1">{course.technologies}</div>
                            )}
                          </li>
                        ))}
                      </ul>
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
