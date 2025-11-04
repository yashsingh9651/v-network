"use client"

import { motion } from "framer-motion"
import { ArrowRight, Search, Lightbulb, Rocket, HeadphonesIcon } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Discovery & Assessment",
    description: "We analyze your current IT infrastructure and identify your needs and pain points.",
    icon: Search,
    color: "from-blue-500/30 via-cyan-500/20 to-sky-500/30",
    borderColor: "border-blue-500/40 hover:border-blue-500/60",
    iconBg: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
    numberBg: "from-blue-500 to-cyan-500",
    shadowColor: "hover:shadow-blue-500/40",
  },
  {
    number: "02",
    title: "Strategy & Planning",
    description: "Develop a tailored solution that aligns perfectly with your business goals.",
    icon: Lightbulb,
    color: "from-yellow-500/30 via-orange-500/20 to-amber-500/30",
    borderColor: "border-yellow-500/40 hover:border-yellow-500/60",
    iconBg: "bg-gradient-to-br from-yellow-500/20 to-orange-500/20",
    numberBg: "from-yellow-500 to-orange-500",
    shadowColor: "hover:shadow-yellow-500/40",
  },
  {
    number: "03",
    title: "Implementation",
    description: "Deploy solutions with minimal disruption to your operations and maximum efficiency.",
    icon: Rocket,
    color: "from-purple-500/30 via-pink-500/20 to-fuchsia-500/30",
    borderColor: "border-purple-500/40 hover:border-purple-500/60",
    iconBg: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
    numberBg: "from-purple-500 to-pink-500",
    shadowColor: "hover:shadow-purple-500/40",
  },
  {
    number: "04",
    title: "24/7 Support",
    description: "Ongoing monitoring and support to ensure optimal performance and peace of mind.",
    icon: HeadphonesIcon,
    color: "from-green-500/30 via-emerald-500/20 to-teal-500/30",
    borderColor: "border-green-500/40 hover:border-green-500/60",
    iconBg: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
    numberBg: "from-green-500 to-emerald-500",
    shadowColor: "hover:shadow-green-500/40",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Connecting line animation */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4"
            animate={{ 
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
          >
            <div className="px-4 py-2 rounded-full glass-card border border-primary/20">
              <span className="text-sm font-semibold text-primary">Our Process</span>
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our proven process ensures successful implementation and maximum value for your business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100 
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
              >
                <div className={`relative p-8 rounded-2xl bg-gradient-to-br ${step.color} border-2 ${step.borderColor} transition-all duration-300 group h-full backdrop-blur-sm ${step.shadowColor} hover:shadow-2xl`}>
                  {/* Number badge */}
                  <div className={`absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br ${step.numberBg} flex items-center justify-center font-bold text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`mb-6 inline-flex p-4 ${step.iconBg} rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {step.description}
                  </p>

                  {/* Arrow connector for desktop */}
                  {index < steps.length - 1 && (
                    <motion.div 
                      className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20"
                      animate={{ 
                        x: [0, 5, 0],
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <div className="w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-lg">
                        <ArrowRight className="w-4 h-4 text-primary" />
                      </div>
                    </motion.div>
                  )}

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div style={{backgroundImage:"url(start.jpg)"}} className="rounded-2xl text-white bg-cover bg-center relative bg-no-repeat p-8 md:p-12 max-w-4xl mx-auto">
            <div className="absolute inset-0 rounded-2xl bg-black/40"/>
            <h3 className="text-2xl relative z-40 md:text-3xl font-bold mb-4">
              Ready to Transform Your IT Infrastructure?
            </h3>
            <p className="mb-6 text-lg relative z-40">
              Let's discuss how we can help your business achieve its technology goals
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary via-accent to-secondary text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-primary/50 transition-all relative z-40"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
