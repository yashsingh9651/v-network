"use client"

import { motion } from "framer-motion"
import { Lightbulb, Target, Users, Award } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We deliver superior IT solutions with meticulous attention to detail and commitment to quality.",
    gradient: "from-rose-500/30 via-red-500/20 to-pink-500/30",
    borderColor: "border-rose-500/40 hover:border-rose-500/60",
    iconBg: "bg-gradient-to-br from-rose-500/20 to-red-500/20",
    numberBg: "from-rose-500 to-pink-500",
    shadowColor: "hover:shadow-rose-500/40",
    number: "01",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We work as an extension of your team, aligned with your business goals and success metrics.",
    gradient: "from-blue-500/30 via-cyan-500/20 to-sky-500/30",
    borderColor: "border-blue-500/40 hover:border-blue-500/60",
    iconBg: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
    numberBg: "from-blue-500 to-cyan-500",
    shadowColor: "hover:shadow-blue-500/40",
    number: "02",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay ahead of technology trends to provide cutting-edge solutions that drive competitive advantage.",
    gradient: "from-yellow-500/30 via-orange-500/20 to-amber-500/30",
    borderColor: "border-yellow-500/40 hover:border-yellow-500/60",
    iconBg: "bg-gradient-to-br from-yellow-500/20 to-orange-500/20",
    numberBg: "from-yellow-500 to-orange-500",
    shadowColor: "hover:shadow-yellow-500/40",
    number: "03",
  },
]

export default function Mission() {
  return (
    <section className="py-24 relative overflow-hidden">
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
              <span className="text-sm font-semibold text-primary">Our Core Values</span>
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our Mission & <span className="gradient-text">Values</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Empowering businesses through innovative IT solutions and strategic partnerships
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, staggerChildren: 0.2 }}
        >
          {values.map((value, index) => {
            const Icon = value.icon
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
                <div className={`relative p-8 rounded-2xl bg-gradient-to-br ${value.gradient} border-2 ${value.borderColor} transition-all duration-300 group h-full backdrop-blur-sm ${value.shadowColor} hover:shadow-2xl text-center`}>
                  {/* Number badge */}
                  <div className={`absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br ${value.numberBg} flex items-center justify-center font-bold text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    {value.number}
                  </div>

                  {/* Icon */}
                  <div className={`mb-6 inline-flex p-4 ${value.iconBg} rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <Icon className="w-10 h-10 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Mission Statement Card */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div style={{backgroundImage:"url(/mission.jpg)"}} className="bg-cover text-white bg-center bg-no-repeat rounded-2xl p-8 md:p-12 max-w-5xl mx-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-black/40"/>
            <div className="relative z-10 text-center">
              <motion.div
                className="inline-flex p-4 bg-white/90 rounded-2xl mb-6 shadow-lg"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Award className="w-12 h-12 text-primary" />
              </motion.div>
              <h3 className="text-3xl font-bold mb-4">
                Committed to Your Success
              </h3>
              <p className="text-lg leading-relaxed">
                At V-Networks, we believe that technology should empower, not complicate. Our mission is to provide 
                enterprise-grade IT solutions that are accessible, reliable, and tailored to your unique business needs. 
                We're not just service providers—we're your strategic technology partners.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
