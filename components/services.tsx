"use client"
import { motion } from "framer-motion"
import { Shield, Network, Laptop, Monitor, Server, HardDrive, Settings, Cloud, Wifi, Building, Globe, Lock } from "lucide-react"
import Link from "next/link"
import Script from "next/script"

const services = [
  {
    id: "it-security",
    icon: Shield,
    title: "IT Security",
    description: "Comprehensive security solutions to protect your digital assets from threats.",
    image: "/cybersecurity-protection-shield.jpg",
    gradient: "from-blue-500/20 via-cyan-500/20 to-blue-600/20",
    iconGradient: "from-blue-500/30 to-cyan-500/30",
    hoverGlow: "group-hover:shadow-blue-500/30",
  },
  {
    id: "endpoint-protection",
    icon: Network,
    title: "Endpoint Protection",
    description: "Secure all your devices with advanced endpoint detection and response.",
    image: "/network-protection-endpoints.jpg",
    gradient: "from-purple-500/20 via-pink-500/20 to-purple-600/20",
    iconGradient: "from-purple-500/30 to-pink-500/30",
    hoverGlow: "group-hover:shadow-purple-500/30",
  },
  {
    id: "laptop-support",
    icon: Laptop,
    title: "Laptop Support",
    description: "Professional maintenance and support for your laptop infrastructure.",
    image: "/laptop-technical-support.jpg",
    gradient: "from-emerald-500/20 via-teal-500/20 to-emerald-600/20",
    iconGradient: "from-emerald-500/30 to-teal-500/30",
    hoverGlow: "group-hover:shadow-emerald-500/30",
  },
  {
    id: "desktop-solutions",
    icon: Monitor,
    title: "Desktop Solutions",
    description: "Reliable desktop management and optimization services.",
    image: "/desktop-computer-management.jpg",
    gradient: "from-orange-500/20 via-amber-500/20 to-orange-600/20",
    iconGradient: "from-orange-500/30 to-amber-500/30",
    hoverGlow: "group-hover:shadow-orange-500/30",
  },
  {
    id: "server-management",
    icon: Server,
    title: "Server Management",
    description: "Enterprise-grade server solutions and 24/7 monitoring.",
    image: "/server-infrastructure-datacenter.jpg",
    gradient: "from-rose-500/20 via-red-500/20 to-rose-600/20",
    iconGradient: "from-rose-500/30 to-red-500/30",
    hoverGlow: "group-hover:shadow-rose-500/30",
  },
  {
    id: "hardware-rental",
    icon: HardDrive,
    title: "Hardware Rental",
    description: "Flexible hardware leasing options for businesses of all sizes.",
    image: "/hardware-equipment-rental.jpg",
    gradient: "from-indigo-500/20 via-violet-500/20 to-indigo-600/20",
    iconGradient: "from-indigo-500/30 to-violet-500/30",
    hoverGlow: "group-hover:shadow-indigo-500/30",
  },

  // New Services
  {
    id: "managed-it-services",
    icon: Settings,
    title: "Managed IT Services",
    description: "End-to-end IT management including OS, helpdesk, hosting, database, and monitoring for seamless business operations.",
    image: "/managed-it-services-support.jpg",
    gradient: "from-cyan-500/20 via-blue-500/20 to-cyan-600/20",
    iconGradient: "from-cyan-500/30 to-blue-500/30",
    hoverGlow: "group-hover:shadow-cyan-500/30",
  },
  {
    id: "cloud-and-communication",
    icon: Cloud,
    title: "Cloud & Communication Solutions",
    description: "Managed Office 365, cloud VoIP, email, and messaging platform integration with robust backup and remote access.",
    image: "/cloud-voip-communication.jpg",
    gradient: "from-sky-500/20 via-indigo-500/20 to-sky-600/20",
    iconGradient: "from-sky-500/30 to-indigo-500/30",
    hoverGlow: "group-hover:shadow-sky-500/30",
  },
  {
    id: "network-infrastructure",
    icon: Wifi,
    title: "Network Infrastructure & Cabling",
    description: "Complete network setup with structured cabling, wireless networking, firewall configuration, and conference room deployment.",
    image: "/network-cabling-installation.jpg",
    gradient: "from-lime-500/20 via-green-500/20 to-lime-600/20",
    iconGradient: "from-lime-500/30 to-green-500/30",
    hoverGlow: "group-hover:shadow-lime-500/30",
  },
  {
    id: "it-infrastructure-setup",
    icon: Building,
    title: "IT Infrastructure & Office Setup",
    description: "From security and surveillance to IT relocation and AV solutions — complete IT setup for new or expanding offices.",
    image: "/office-it-infrastructure-setup.jpg",
    gradient: "from-amber-500/20 via-orange-500/20 to-amber-600/20",
    iconGradient: "from-amber-500/30 to-orange-500/30",
    hoverGlow: "group-hover:shadow-amber-500/30",
  },
  {
    id: "cybersecurity-compliance",
    icon: Lock,
    title: "Cybersecurity & Compliance",
    description: "Advanced cybersecurity, compliance enablement, and CMMC readiness for modern digital enterprises.",
    image: "/cybersecurity-compliance.jpg",
    gradient: "from-red-500/20 via-rose-500/20 to-red-600/20",
    iconGradient: "from-red-500/30 to-rose-500/30",
    hoverGlow: "group-hover:shadow-red-500/30",
  },
  {
    id: "digital-growth",
    icon: Globe,
    title: "Digital Growth & Marketing",
    description: "Boost visibility with SEO, digital marketing, and IT project management for technology-driven business growth.",
    image: "/digital-marketing-growth.jpg",
    gradient: "from-pink-500/20 via-fuchsia-500/20 to-pink-600/20",
    iconGradient: "from-pink-500/30 to-fuchsia-500/30",
    hoverGlow: "group-hover:shadow-pink-500/30",
  },
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function Services() {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "provider": {
          "@type": "Organization",
          "name": "V-Networks"
        },
        "serviceType": service.title,
        "url": `https://v-networks.com/services?service=${service.id}`
      }
    }))
  }

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Schema.org structured data for services */}
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  transition: {
                    type: "spring" as const,
                    stiffness: 300,
                    damping: 20,
                  },
                }}
              >
                <Link href={`/services?service=${service.id}`}>
                  <div className={`rounded-xl border border-border/50 bg-card hover:border-primary/50 transition-all cursor-pointer group overflow-hidden h-full shadow-lg hover:shadow-2xl ${service.hoverGlow} relative`}>
                    {/* Shimmer effect overlay */}
                    <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Service image */}
                    <div className={`h-48 overflow-hidden bg-gradient-to-br ${service.gradient} relative`}>
                      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent z-10" />
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Service content */}
                    <div className="p-6 relative">
                      <div className={`mb-4 inline-flex p-3 bg-gradient-to-br ${service.iconGradient} rounded-xl group-hover:scale-110 transition-all duration-300 shadow-md`}>
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                      <div className="mt-4 flex items-center text-primary font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
                        <span>Learn More</span>
                        <motion.span
                          animate={{
                            x: [0, 5, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          →
                        </motion.span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
