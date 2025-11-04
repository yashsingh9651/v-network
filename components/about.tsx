"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

const highlights = [
  "15+ years of enterprise IT experience",
  "500+ successful client implementations",
  "99.9% uptime guarantee",
  "24/7 dedicated support team",
]

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="relative h-96 rounded-lg overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src="/professional-team-working-together-tech-company.jpg" alt="V-Networks Team" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About V-Networks</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We are a leading provider of enterprise IT solutions, dedicated to transforming how businesses approach
              technology infrastructure. Our team combines deep technical expertise with business acumen to deliver
              solutions that drive real value.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Founded with a mission to simplify complex IT challenges, we've grown into a trusted partner for
              organizations across industries.
            </p>

            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex gap-3 items-start"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg font-medium">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
