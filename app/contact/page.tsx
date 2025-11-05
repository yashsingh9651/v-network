"use client"
import Navigation from "@/components/navigation"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { motion } from "framer-motion"
import Script from "next/script"

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "V-Networks",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+9183689 76817",
        "contactType": "Customer Service",
        "email": "contact@v-networks.co.in",
        "areaServed": "US",
        "availableLanguage": "English"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ofis Square A1, Sector 3",
        "addressLocality": "Noida",
        "addressRegion": "UP",
        "postalCode": "201301",
        "addressCountry": "IN"
      }
    }
  }

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Schema.org structured data */}
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      
      {/* Subtle background pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(66,61,219,0.05),transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      <div className="relative z-10">
        <Navigation />
        
        {/* Page Header */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="inline-block mb-4"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="px-4 py-2 rounded-full glass-card border border-primary/20">
                  <span className="text-sm font-semibold text-primary">Let's Connect</span>
                </div>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Contact <span className="gradient-text">Us</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Have a question or ready to transform your IT infrastructure? 
                We're here to help you succeed.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Component */}
        <Contact />
        
        {/* Additional Info Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="glass-card rounded-2xl p-8 md:p-12 border-2 border-primary/30 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Decorative corner elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent/20 to-transparent rounded-tr-full" />
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center gradient-text">
                  Why Choose V-Networks?
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8 mt-8">
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <div className="text-4xl font-bold text-primary mb-2">500+</div>
                    <p className="text-muted-foreground">Enterprise Clients</p>
                  </motion.div>
                  
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="text-4xl font-bold text-accent mb-2">99.9%</div>
                    <p className="text-muted-foreground">Uptime Guarantee</p>
                  </motion.div>
                  
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
                    <p className="text-muted-foreground">Expert Support</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
      
      <BackToTop />
    </main>
  )
}
