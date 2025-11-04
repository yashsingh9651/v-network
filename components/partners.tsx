"use client"

import { motion } from "framer-motion"

const partners = [
  { name: "TechCorp", logo: "TC" },
  { name: "CloudBase", logo: "CB" },
  { name: "DataFlow", logo: "DF" },
  { name: "SecureNet", logo: "SN" },
  { name: "InnovateTech", logo: "IT" },
  { name: "GlobalIT", logo: "GI" },
]

export default function Partners() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Trusted by Leading Companies</h2>
          <p className="text-xl text-muted-foreground">Partners who rely on our solutions every day</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center p-6 rounded-lg border border-border bg-card hover:border-primary transition-all cursor-pointer group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <span className="font-bold text-primary text-sm">{partner.logo}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
