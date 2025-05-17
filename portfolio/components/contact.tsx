"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"
import { useTranslation } from "@/lib/i18n/i18n"
import contactData from "@/lib/i18n/contact"

export default function Contact() {
  const { language } = useTranslation()
  const contact = contactData[["en", "pt", "de", "eo"].includes(language) ? language : "en"]

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-blue-500" />,
      title: contact.email,
      value: "kauante@hotmail.com",
      link: "mailto:kauante@hotmail.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-cyan-500" />,
      title: contact.phone,
      value: "+55 (61) 98182-6401",
      link: "tel:+5561981826401",
    },
    {
      icon: <MapPin className="h-6 w-6 text-blue-500" />,
      title: contact.location,
      value: contact.locationValue,
      link: "https://maps.google.com/?q=Asa+Norte,+Brasília+-+DF",
    },
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{contact.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto text-muted-foreground">{contact.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full bg-gradient-to-br from-background to-muted/50">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-muted p-4 rounded-full mb-4">{info.icon}</div>
                  <h3 className="text-lg font-medium mb-2">{info.title}</h3>
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {info.value}
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
