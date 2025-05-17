"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin } from "lucide-react"
import { useTranslation } from "@/lib/i18n/i18n"
import aboutData from "@/lib/i18n/about"

export default function About() {
  const { language } = useTranslation()
  const about = aboutData[["en", "pt", "de", "eo"].includes(language) ? language : "en"]

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{about.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
            {about.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeIn}
            className="space-y-6"
          >
            <p className="text-lg">{about.paragraph1}</p>
            <p className="text-lg">{about.paragraph2}</p>
            <p className="text-lg">{about.paragraph3}</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeIn}>
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-background to-muted">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-blue-500/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">{about.phone}</h3>
                    <p className="font-medium">+55 (61) 98182-6401</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeIn}>
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-background to-muted">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-cyan-500/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-cyan-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">{about.email}</h3>
                    <p className="font-medium">kauante@hotmail.com</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3} variants={fadeIn}>
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-background to-muted">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-blue-500/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">{about.location}</h3>
                    <p className="font-medium">Asa Norte, Brasília - DF</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
