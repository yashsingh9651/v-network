"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Sparkles, ArrowRight, Shield, Zap, TrendingUp } from "lucide-react"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Wave backgrounds */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute bottom-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path 
            fill="rgba(66, 61, 219, 0.1)" 
            fillOpacity="1" 
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
        <svg className="absolute bottom-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path 
            fill="rgba(124, 77, 255, 0.08)" 
            fillOpacity="1" 
            d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,149.3C672,139,768,149,864,170.7C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
        <svg className="absolute bottom-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path 
            fill="rgba(156, 39, 176, 0.06)" 
            fillOpacity="1" 
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,208C672,213,768,203,864,181.3C960,160,1056,128,1152,128C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div> */}

      {/* Background image with overlay */}
      {/* <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(/hero.jpg)",
        }}
      /> */}

      <video src="hero.mp4" autoPlay loop muted className="absolute inset-0 w-full h-full object-cover" />

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <motion.div className="text-center" variants={containerVariants} initial="hidden" animate="visible">
          {/* Badge */}
          {/* <motion.div variants={itemVariants} className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Trusted by 500+ Enterprises</span>
            </div>
          </motion.div> */}

          {/* Main heading */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl text-white lg:text-8xl font-bold text-balance leading-tight mb-6">
              Where Deep Tech
              <br />
              <span>Meets Business</span>
            </h1>
          </motion.div>

          {/* Description */}
          {/* <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 text-balance leading-relaxed"
          >
            Enterprise-grade IT solutions that scale with your business. From security to infrastructure, we've got you
            covered with cutting-edge technology.
          </motion.p> */}

          {/* CTA Buttons */}
          {/* <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="#contact">
              <button className="group px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all hover:shadow-xl hover:shadow-primary/50 hover:scale-105 flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <button className="px-8 py-4 glass-card border-2 border-primary/30 rounded-xl font-semibold hover:border-primary transition-all hover:shadow-lg backdrop-blur-xl">
              Watch Demo
            </button>
          </motion.div> */}

          {/* Stats/Features */}
          {/* <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <motion.div 
              variants={floatingVariants} 
              animate="animate" 
              className="glass-card rounded-2xl p-6 hover:scale-105 transition-transform border-2 border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 hover:shadow-2xl hover:shadow-blue-500/30"
            >
              <Shield className="w-10 h-10 text-blue-400 mb-3 mx-auto drop-shadow-lg" />
              <h3 className="font-bold text-xl mb-2">99.9% Uptime</h3>
              <p className="text-sm text-muted-foreground">Enterprise-grade reliability</p>
            </motion.div>
            <motion.div
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: 0.2 }}
              className="glass-card rounded-2xl p-6 hover:scale-105 transition-transform border-2 border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-pink-500/10 hover:shadow-2xl hover:shadow-purple-500/30"
            >
              <Zap className="w-10 h-10 text-purple-400 mb-3 mx-auto drop-shadow-lg" />
              <h3 className="font-bold text-xl mb-2">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">Always here when you need us</p>
            </motion.div>
            <motion.div
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: 0.4 }}
              className="glass-card rounded-2xl p-6 hover:scale-105 transition-transform border-2 border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 hover:shadow-2xl hover:shadow-emerald-500/30"
            >
              <TrendingUp className="w-10 h-10 text-emerald-400 mb-3 mx-auto drop-shadow-lg" />
              <h3 className="font-bold text-xl mb-2">ROI in 3 Months</h3>
              <p className="text-sm text-muted-foreground">Proven business impact</p>
            </motion.div>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  )
}
