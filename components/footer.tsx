"use client"

import Link from "next/link"
import { Mail, Linkedin, Twitter, Github, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-br from-slate-100 via-slate-200 to-slate-100 dark:from-slate-900 dark:via-slate-900 dark:to-primary/20 text-foreground dark:text-white py-16 overflow-hidden border-t border-border">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-accent" />
              <h3 className="font-bold text-2xl gradient-text">V-Networks</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Enterprise IT solutions for modern businesses. Transforming technology into competitive advantage.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-bold mb-4 text-lg">Services</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <Link href="/services?service=it-security" className="hover:text-accent transition-colors hover:translate-x-1 inline-block">
                  IT Security
                </Link>
              </li>
              <li>
                <Link href="/services?service=endpoint-protection" className="hover:text-accent transition-colors hover:translate-x-1 inline-block">
                  Endpoint Protection
                </Link>
              </li>
              <li>
                <Link href="/services?service=server-management" className="hover:text-accent transition-colors hover:translate-x-1 inline-block">
                  Server Management
                </Link>
              </li>
              <li>
                <Link href="/services?service=hardware-rental" className="hover:text-accent transition-colors hover:translate-x-1 inline-block">
                  Hardware Rental
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-bold mb-4 text-lg">Company</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <Link href="#about" className="hover:text-accent transition-colors hover:translate-x-1 inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-accent transition-colors hover:translate-x-1 inline-block">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-accent transition-colors hover:translate-x-1 inline-block">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors hover:translate-x-1 inline-block">
                  Careers
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-bold mb-4 text-lg">Connect</h4>
            <div className="flex gap-4 mb-6">
              {[
                { icon: Mail, href: "mailto:contact@v-networks.co.in", label: "Email" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Github, href: "#", label: "GitHub" },
              ].map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.div
                    key={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={social.href}
                      className="w-10 h-10 rounded-lg bg-foreground/10 hover:bg-accent/20 border border-foreground/20 dark:bg-white/10 dark:hover:bg-accent/20 dark:border-white/20 flex items-center justify-center transition-all hover:border-accent"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </Link>
                  </motion.div>
                )
              })}
            </div>
            <p className="text-sm text-muted-foreground">
              Stay updated with our latest news and offers
            </p>
          </motion.div>
        </div>

        <div className="border-t border-border/50 dark:border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground text-sm">
            <p>&copy; {currentYear} V-Networks. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
