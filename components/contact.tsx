"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your IT infrastructure? Contact us today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            className="relative rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(/placeholder.svg?height=500&width=500&query=team-video-call-business-communication)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-purple-600/90 to-pink-600/90" />

            <div className="relative p-8 space-y-8 h-full flex flex-col justify-center text-white">
              <div className="group hover:scale-105 transition-transform">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 mb-4 group-hover:bg-white/30 transition-all shadow-lg">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-1 text-lg">Email</h3>
                <p className="text-white/90">contact@v-networks.co.in</p>
              </div>

              <div className="group hover:scale-105 transition-transform">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 mb-4 group-hover:bg-white/30 transition-all shadow-lg">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-1 text-lg">Phone</h3>
                <p className="text-white/90">+91 83689 76817</p>
              </div>

              <div className="group hover:scale-105 transition-transform">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 mb-4 group-hover:bg-white/30 transition-all shadow-lg">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-1 text-lg">Address</h3>
                <p className="text-white/90">Ofis Square A1, Sector 3, Noida, 201301 UP</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 p-8 rounded-2xl glass-card shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-accent/10 blur-3xl rounded-full -z-10" />
            
            <div className="relative">
              <label className="block text-sm font-semibold mb-2 text-foreground/90">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all backdrop-blur-sm"
                placeholder="Your name"
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-semibold mb-2 text-foreground/90">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all backdrop-blur-sm"
                placeholder="your@email.com"
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-semibold mb-2 text-foreground/90">Phone (Optional)</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all backdrop-blur-sm"
                placeholder="+91 9876000000"
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-semibold mb-2 text-foreground/90">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none backdrop-blur-sm"
                placeholder="Tell us about your IT needs..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-4 bg-gradient-to-r from-primary via-accent to-secondary text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-primary/50 transition-all relative overflow-hidden group"
            >
              <span className="relative z-10">Send Message</span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.button>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-400 rounded-xl text-center font-semibold backdrop-blur-sm"
              >
                ✓ Thank you! We'll be in touch soon.
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
