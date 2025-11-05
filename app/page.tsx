"use client"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Mission from "@/components/mission"
import HowItWorks from "@/components/how-it-works"
import Testimonials from "@/components/testimonials"
import Partners from "@/components/partners"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import Script from "next/script"

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "V-Networks",
    "url": "https://v-networks.co.in",
    "logo": "https://v-networks.co.in/logo.png",
    "description": "Enterprise IT solutions and managed services provider specializing in IT security, endpoint protection, server management, and comprehensive IT infrastructure services.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ofis Square A1, Sector 3",
      "addressLocality": "Noida",
      "addressRegion": "UP",
      "postalCode": "201301",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+9183689 76817",
      "contactType": "Customer Service",
      "email": "contact@v-networks.co.in",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    // "sameAs": [
    //   "https://www.linkedin.com/company/v-networks",
    //   "https://twitter.com/vnetworks",
    //   "https://github.com/v-networks"
    // ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "V-Networks",
    "url": "https://v-networks.co.in",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://v-networks.co.in/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Schema.org structured data */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Services />
        <About />
        <Mission />
        <HowItWorks />
        <Testimonials />
        {/* <Partners /> */}
        <Contact />
        <Footer />
      </div>
      <BackToTop />
    </main>
  )
}
