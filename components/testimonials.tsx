"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "John Smith",
    company: "Tech Innovations Inc.",
    text: "V-Networks transformed our IT infrastructure. Their expertise and support have been invaluable to our growth.",
    rating: 5,
    gradient: "from-blue-500/10 to-cyan-500/10",
    borderColor: "border-blue-500/30",
    avatarGradient: "from-blue-500/30 to-cyan-500/30",
  },
  {
    name: "Sarah Johnson",
    company: "Global Enterprise Ltd.",
    text: "Outstanding service and responsive support team. They truly understand enterprise IT challenges.",
    rating: 5,
    gradient: "from-purple-500/10 to-pink-500/10",
    borderColor: "border-purple-500/30",
    avatarGradient: "from-purple-500/30 to-pink-500/30",
  },
  {
    name: "Michael Chen",
    company: "Digital Solutions Co.",
    text: "The best IT partner we've worked with. Proactive, professional, and always delivering results.",
    rating: 5,
    gradient: "from-emerald-500/10 to-teal-500/10",
    borderColor: "border-emerald-500/30",
    avatarGradient: "from-emerald-500/30 to-teal-500/30",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-background via-card/50 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <Star className="w-12 h-12 fill-yellow-400 text-yellow-400 mx-auto" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by hundreds of companies worldwide
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`p-8 rounded-2xl glass-card hover:scale-105 transition-transform duration-300 relative group bg-gradient-to-br ${testimonial.gradient} border-2 ${testimonial.borderColor} hover:shadow-2xl`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Quote mark decoration */}
              <div className="absolute top-6 right-6 text-6xl text-primary/10 font-serif">"</div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + i * 0.1 }}
                  >
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>
              
              <p className="text-lg mb-6 leading-relaxed relative z-10 text-foreground/90">
                {testimonial.text}
              </p>
              
              <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.avatarGradient} flex items-center justify-center font-bold text-lg shadow-lg`}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
