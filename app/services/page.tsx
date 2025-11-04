"use client";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import Script from "next/script";
import {
  Shield,
  Network,
  Laptop,
  Monitor,
  Server,
  HardDrive,
  Check,
  Globe,
  Building,
  Wifi,
  Cloud,
  Settings,
  Lock,
} from "lucide-react";

const serviceDetails = {
  "it-security": {
    title: "IT Security Solutions",
    icon: Shield,
    image: "/cybersecurity-protection-shield.jpg",
    description:
      "Comprehensive security solutions to protect your digital assets from evolving cyber threats.",
    benefits: [
      "Advanced threat detection and prevention",
      "24/7 security monitoring and incident response",
      "Compliance management and reporting",
      "Employee security awareness training",
      "Regular security audits and assessments",
      "Zero-trust architecture implementation",
    ],
    features: [
      "Multi-layered security approach",
      "Real-time threat intelligence",
      "Automated response systems",
      "Disaster recovery planning",
    ],
    pricing: [
      {
        tier: "Starter",
        price: "$1,500/month",
        features: [
          "Basic threat detection",
          "Email filtering",
          "Vulnerability scanning",
          "Standard support",
        ],
      },
      {
        tier: "Professional",
        price: "$3,500/month",
        features: [
          "Advanced threat detection",
          "24/7 monitoring",
          "Incident response",
          "Compliance reporting",
          "Priority support",
        ],
      },
      {
        tier: "Enterprise",
        price: "Custom",
        features: [
          "Full managed security",
          "Zero-trust architecture",
          "Custom compliance",
          "Dedicated team",
          "24/7 priority support",
        ],
      },
    ],
    process: [
      {
        step: 1,
        title: "Security Assessment",
        description:
          "We conduct a thorough analysis of your current security posture",
      },
      {
        step: 2,
        title: "Risk Analysis",
        description:
          "Identify vulnerabilities and potential threats specific to your business",
      },
      {
        step: 3,
        title: "Strategy Development",
        description:
          "Create a customized security strategy aligned with your goals",
      },
      {
        step: 4,
        title: "Implementation",
        description:
          "Deploy security solutions and integrate with existing systems",
      },
      {
        step: 5,
        title: "Monitoring & Support",
        description: "Continuous monitoring and 24/7 incident response",
      },
    ],
    caseStudies: [
      {
        company: "FinTech Corp",
        challenge: "Multiple security incidents",
        result: "99.9% threat prevention rate achieved",
      },
      {
        company: "Healthcare Plus",
        challenge: "HIPAA compliance",
        result: "Full compliance within 6 months",
      },
    ],
    faqs: [
      {
        question: "How long does security implementation take?",
        answer:
          "Typically 4-8 weeks depending on your infrastructure size and complexity",
      },
      {
        question: "What is your incident response time?",
        answer:
          "We respond to threats within 15 minutes for Enterprise clients, 1 hour for others",
      },
      {
        question: "Do you provide employee training?",
        answer:
          "Yes, we offer comprehensive security awareness training included in Professional and Enterprise plans",
      },
    ],
  },
  "endpoint-protection": {
    title: "Endpoint Protection",
    icon: Network,
    image: "/network-protection-endpoints.jpg",
    description:
      "Secure all your devices with advanced endpoint detection and response technology.",
    benefits: [
      "Unified endpoint management",
      "Ransomware protection",
      "Advanced malware detection",
      "USB and removable media control",
      "Device encryption and data protection",
      "Remote incident response",
    ],
    features: [
      "Cloud-based protection",
      "Behavioral analysis",
      "Machine learning detection",
      "Centralized management console",
    ],
    pricing: [
      {
        tier: "Starter",
        price: "$5/device/month",
        features: [
          "Basic malware protection",
          "Monthly updates",
          "Basic reporting",
        ],
      },
      {
        tier: "Professional",
        price: "$12/device/month",
        features: [
          "Advanced threat detection",
          "Real-time protection",
          "Ransomware protection",
          "Detailed reporting",
        ],
      },
      {
        tier: "Enterprise",
        price: "$18/device/month",
        features: [
          "Full EDR suite",
          "24/7 monitoring",
          "Incident investigation",
          "Custom policies",
        ],
      },
    ],
    process: [
      {
        step: 1,
        title: "Device Inventory",
        description: "Catalog all endpoints across your organization",
      },
      {
        step: 2,
        title: "Agent Deployment",
        description: "Install protection agents across devices",
      },
      {
        step: 3,
        title: "Policy Configuration",
        description: "Customize security policies for different device groups",
      },
      {
        step: 4,
        title: "Baseline Setup",
        description: "Establish security baselines and monitoring rules",
      },
      {
        step: 5,
        title: "Ongoing Protection",
        description: "Continuous monitoring and threat response",
      },
    ],
    caseStudies: [
      {
        company: "Tech StartUp Inc",
        challenge: "Ransomware threat",
        result: "100% ransomware prevention rate after deployment",
      },
      {
        company: "Enterprise Solutions",
        challenge: "Managing 5000+ devices",
        result: "Centralized management reducing admin time by 60%",
      },
    ],
    faqs: [
      {
        question: "Can you protect remote workers?",
        answer:
          "Yes, our cloud-based solution protects devices anywhere they are located",
      },
      {
        question: "What's the performance impact?",
        answer: "Minimal - typically less than 2% CPU usage impact",
      },
      {
        question: "How long until full deployment?",
        answer: "Average deployment is 1-2 weeks depending on device count",
      },
    ],
  },
  "laptop-support": {
    title: "Laptop Support & Management",
    icon: Laptop,
    image: "/laptop-technical-support.jpg",
    description:
      "Professional maintenance and support for your laptop infrastructure and mobile workforce.",
    benefits: [
      "Preventive maintenance programs",
      "Remote and on-site support",
      "Hardware replacement services",
      "Performance optimization",
      "Software license management",
      "Secure remote access setup",
    ],
    features: [
      "Same-day service availability",
      "Data backup and recovery",
      "Operating system optimization",
      "Driver and firmware updates",
    ],
    pricing: [
      {
        tier: "Basic",
        price: "$15/device/month",
        features: ["Remote support", "Monthly maintenance", "Software updates"],
      },
      {
        tier: "Standard",
        price: "$25/device/month",
        features: [
          "24/7 helpdesk",
          "On-site support",
          "Hardware repair",
          "Data backup",
        ],
      },
      {
        tier: "Premium",
        price: "$40/device/month",
        features: [
          "Priority support",
          "Proactive monitoring",
          "Warranty coverage",
          "Device replacement program",
        ],
      },
    ],
    process: [
      {
        step: 1,
        title: "Device Registration",
        description: "Register all laptops in our management system",
      },
      {
        step: 2,
        title: "Agent Installation",
        description: "Install monitoring and support agent",
      },
      {
        step: 3,
        title: "Baseline Configuration",
        description: "Set up standard configuration across devices",
      },
      {
        step: 4,
        title: "Proactive Monitoring",
        description: "Monitor health and performance metrics",
      },
      {
        step: 5,
        title: "Support & Maintenance",
        description: "Provide 24/7 support and regular maintenance",
      },
    ],
    caseStudies: [
      {
        company: "Global Consulting",
        challenge: "Managing 2000 remote laptops",
        result: "99.5% uptime achieved with 24-hour resolution",
      },
      {
        company: "Design Studio",
        challenge: "Performance issues",
        result: "30% performance improvement after optimization",
      },
    ],
    faqs: [
      {
        question: "What's the average response time?",
        answer: "Remote issues: 30 minutes; On-site: 4 hours (Standard plan)",
      },
      {
        question: "Do you handle hardware repair?",
        answer: "Yes, we have partnerships with top hardware vendors",
      },
      {
        question: "Can you manage mixed OS environments?",
        answer: "Yes, we support Windows, macOS, and Linux",
      },
    ],
  },
  "desktop-solutions": {
    title: "Desktop Solutions",
    icon: Monitor,
    image: "/desktop-computer-management.jpg",
    description:
      "Reliable desktop management and optimization services for enterprise environments.",
    benefits: [
      "Desktop virtualization",
      "Resource optimization",
      "Energy management",
      "Standardized imaging",
      "Hardware lifecycle management",
      "Migration assistance",
    ],
    features: [
      "Proactive monitoring",
      "Automated patching",
      "Performance tuning",
      "Seamless deployment",
    ],
    pricing: [
      {
        tier: "Standard",
        price: "$20/desktop/month",
        features: ["Basic management", "Monthly updates", "Standard support"],
      },
      {
        tier: "Advanced",
        price: "$35/desktop/month",
        features: [
          "Advanced monitoring",
          "Performance optimization",
          "24/7 support",
        ],
      },
      {
        tier: "Enterprise",
        price: "$50/desktop/month",
        features: [
          "Full virtualization",
          "Dedicated support",
          "Custom configurations",
        ],
      },
    ],
    process: [
      {
        step: 1,
        title: "Environment Assessment",
        description: "Analyze current desktop infrastructure",
      },
      {
        step: 2,
        title: "Infrastructure Planning",
        description: "Design optimized desktop solution",
      },
      {
        step: 3,
        title: "Deployment",
        description: "Roll out standardized desktop configuration",
      },
      {
        step: 4,
        title: "User Training",
        description: "Ensure smooth user transition",
      },
      {
        step: 5,
        title: "Support & Optimization",
        description: "Ongoing management and optimization",
      },
    ],
    caseStudies: [
      {
        company: "Corporate HQ",
        challenge: "Legacy desktops causing bottlenecks",
        result: "40% faster performance with new infrastructure",
      },
      {
        company: "Multi-Office Company",
        challenge: "Desktop standardization",
        result: "Unified management across 10 offices",
      },
    ],
    faqs: [
      {
        question: "Can we virtualize existing desktops?",
        answer:
          "Yes, we offer seamless migration from physical to virtual desktops",
      },
      {
        question: "What about software licensing?",
        answer: "We help optimize licensing costs and ensure compliance",
      },
      {
        question: "How is downtime managed during migration?",
        answer: "We plan phased migrations to minimize business disruption",
      },
    ],
  },
  "server-management": {
    title: "Server Management & Infrastructure",
    icon: Server,
    image: "/server-infrastructure-datacenter.jpg",
    description:
      "Enterprise-grade server solutions and 24/7 monitoring for mission-critical operations.",
    benefits: [
      "24/7 server monitoring",
      "Proactive maintenance",
      "Backup and disaster recovery",
      "Load balancing and failover",
      "Performance optimization",
      "Scalability planning",
    ],
    features: [
      "Redundancy and high availability",
      "Automated failover systems",
      "Real-time health monitoring",
      "Capacity planning tools",
    ],
    pricing: [
      {
        tier: "Managed",
        price: "$2,000/server/month",
        features: ["24/7 monitoring", "Backup & recovery", "Standard support"],
      },
      {
        tier: "Premium",
        price: "$3,500/server/month",
        features: [
          "Full management",
          "HA setup",
          "Advanced monitoring",
          "Priority support",
        ],
      },
      {
        tier: "Enterprise",
        price: "$5,000+/month",
        features: [
          "Complete infrastructure management",
          "Disaster recovery",
          "Custom SLA",
        ],
      },
    ],
    process: [
      {
        step: 1,
        title: "Infrastructure Assessment",
        description: "Evaluate current server environment",
      },
      {
        step: 2,
        title: "HA Design",
        description: "Design high-availability infrastructure",
      },
      {
        step: 3,
        title: "Implementation",
        description: "Deploy monitoring and redundancy systems",
      },
      {
        step: 4,
        title: "Backup Setup",
        description: "Configure automated backup and recovery",
      },
      {
        step: 5,
        title: "24/7 Monitoring",
        description: "Continuous monitoring and proactive maintenance",
      },
    ],
    caseStudies: [
      {
        company: "E-commerce Platform",
        challenge: "Server downtime causing revenue loss",
        result: "99.99% uptime with HA implementation",
      },
      {
        company: "Data Center Client",
        challenge: "Capacity planning",
        result: "Scalable infrastructure supporting 200% growth",
      },
    ],
    faqs: [
      {
        question: "What's your uptime SLA?",
        answer: "We guarantee 99.99% uptime for Premium plans",
      },
      {
        question: "How fast is disaster recovery?",
        answer: "RTO: 30 minutes, RPO: 5 minutes for Enterprise plans",
      },
      {
        question: "Can you handle mixed infrastructure?",
        answer: "Yes, we manage on-premise, cloud, and hybrid environments",
      },
    ],
  },
  "hardware-rental": {
    title: "Hardware Rental & Leasing",
    icon: HardDrive,
    image: "/hardware-equipment-rental.jpg",
    description:
      "Flexible hardware leasing options for businesses of all sizes with maintenance included.",
    benefits: [
      "Cost-effective solutions",
      "Latest technology access",
      "Maintenance and support included",
      "Flexible upgrade paths",
      "Quick deployment",
      "Scalable infrastructure",
    ],
    features: [
      "No capital expense",
      "Tax-deductible options",
      "End-of-life equipment disposal",
      "Transparent pricing",
    ],
    pricing: [
      {
        tier: "Short-term",
        price: "From $50/device/month",
        features: [
          "Flexible duration",
          "Maintenance included",
          "Latest models",
        ],
      },
      {
        tier: "Long-term",
        price: "From $25/device/month",
        features: [
          "12-36 month terms",
          "Significant savings",
          "Upgrade options",
        ],
      },
      {
        tier: "Custom",
        price: "Negotiable",
        features: ["Bulk discounts", "Customized terms", "White-glove service"],
      },
    ],
    process: [
      {
        step: 1,
        title: "Requirement Assessment",
        description: "Understand your hardware needs",
      },
      {
        step: 2,
        title: "Solution Design",
        description: "Recommend optimal hardware solutions",
      },
      {
        step: 3,
        title: "Leasing Agreement",
        description: "Finalize flexible lease terms",
      },
      {
        step: 4,
        title: "Delivery & Setup",
        description: "Fast deployment and configuration",
      },
      {
        step: 5,
        title: "Support & Maintenance",
        description: "Full maintenance and support throughout lease",
      },
    ],
    caseStudies: [
      {
        company: "Startup Growth Story",
        challenge: "Need for 500 devices without capital",
        result: "Scaled from 50 to 500 devices in 6 months",
      },
      {
        company: "Enterprise Refresh",
        challenge: "Regular equipment upgrades",
        result: "Continuous access to latest technology",
      },
    ],
    faqs: [
      {
        question: "Can we upgrade equipment mid-lease?",
        answer: "Yes, flexible upgrade options are available",
      },
      {
        question: "What happens at lease end?",
        answer: "Easy return or purchase options available",
      },
      {
        question: "Is maintenance included?",
        answer: "Yes, full hardware maintenance and support included",
      },
    ],
  },
  "managed-it-services": {
    title: "Managed IT Services",
    icon: Settings,
    image: "/managed-it-services-support.jpg",
    description:
      "Comprehensive IT management including hosting, database administration, OS updates, monitoring, and help desk support for uninterrupted business operations.",
    benefits: [
      "Centralized IT operations",
      "24/7 proactive monitoring",
      "Comprehensive help desk support",
      "Automated OS patching and updates",
      "Database performance optimization",
      "Reduced downtime and costs",
    ],
    features: [
      "Remote infrastructure management",
      "Centralized dashboard visibility",
      "Cloud and on-premises compatibility",
      "Customizable SLAs",
    ],
    pricing: [
      {
        tier: "Basic",
        price: "$2,000/month",
        features: [
          "Help desk access",
          "System monitoring",
          "Basic patching",
          "Monthly reports",
        ],
      },
      {
        tier: "Professional",
        price: "$3,800/month",
        features: [
          "Advanced monitoring",
          "Database optimization",
          "24/7 support",
          "Performance analytics",
        ],
      },
      {
        tier: "Enterprise",
        price: "Custom",
        features: [
          "Dedicated IT manager",
          "Full IT automation",
          "High availability setup",
          "Compliance management",
        ],
      },
    ],
    process: [
      {
        step: 1,
        title: "Assessment",
        description: "Evaluate existing IT systems and needs",
      },
      {
        step: 2,
        title: "Onboarding",
        description: "Integrate monitoring tools and help desk channels",
      },
      {
        step: 3,
        title: "Configuration",
        description: "Customize management and alert policies",
      },
      {
        step: 4,
        title: "Monitoring",
        description: "24/7 tracking of performance and uptime",
      },
      {
        step: 5,
        title: "Optimization",
        description: "Continuous improvement and maintenance",
      },
    ],
    caseStudies: [
      {
        company: "Tech Solutions Ltd.",
        challenge: "Unreliable IT infrastructure",
        result: "Achieved 99.98% uptime after implementing managed IT",
      },
      {
        company: "Retail Global",
        challenge: "Slow support response times",
        result: "Reduced resolution time by 70%",
      },
    ],
    faqs: [
      {
        question: "Can you manage hybrid environments?",
        answer:
          "Yes, we support on-premise, cloud, and hybrid infrastructures.",
      },
      {
        question: "Do you provide a dedicated IT team?",
        answer:
          "Yes, Enterprise clients get a dedicated account and technical manager.",
      },
      {
        question: "Is 24/7 monitoring included?",
        answer: "Yes, for Professional and Enterprise plans.",
      },
    ],
  },

  "cloud-and-communication": {
    title: "Cloud & Communication Solutions",
    icon: Cloud,
    image: "/cloud-voip-communication.jpg",
    description:
      "Seamless integration of Office 365, VoIP, and cloud communication tools to empower remote and in-office collaboration.",
    benefits: [
      "Centralized cloud management",
      "Secure remote collaboration",
      "High-quality VoIP and video conferencing",
      "Automatic backup and recovery",
      "Email and messaging platform support",
      "Increased productivity and uptime",
    ],
    features: [
      "Multi-device compatibility",
      "Secure cloud data storage",
      "End-to-end encryption",
      "Real-time synchronization",
    ],
    pricing: [
      {
        tier: "Business",
        price: "$1,200/month",
        features: [
          "Office 365 setup",
          "Email integration",
          "VoIP setup",
          "Basic cloud backup",
        ],
      },
      {
        tier: "Professional",
        price: "$2,500/month",
        features: [
          "Unified communication suite",
          "Cloud migration",
          "Secure backup",
          "Priority VoIP support",
        ],
      },
      {
        tier: "Enterprise",
        price: "Custom",
        features: [
          "Custom communication architecture",
          "Advanced analytics",
          "SLA-backed uptime guarantee",
          "Dedicated cloud support team",
        ],
      },
    ],
    process: [
      {
        step: 1,
        title: "Requirement Analysis",
        description: "Understand your communication and cloud needs",
      },
      {
        step: 2,
        title: "Setup & Integration",
        description: "Implement Office 365 and VoIP solutions",
      },
      {
        step: 3,
        title: "Migration",
        description: "Securely migrate existing data and accounts",
      },
      {
        step: 4,
        title: "Training",
        description: "Provide staff onboarding and training",
      },
      {
        step: 5,
        title: "Ongoing Support",
        description: "Continuous monitoring and cloud optimization",
      },
    ],
    caseStudies: [
      {
        company: "RemoteX Enterprises",
        challenge: "Scattered communication tools",
        result: "Unified cloud platform reduced downtime by 80%",
      },
      {
        company: "FinanceConnect",
        challenge: "Data loss in legacy email systems",
        result: "100% migration success with secure backup",
      },
    ],
    faqs: [
      {
        question: "Can you migrate existing email data?",
        answer: "Yes, we provide secure and lossless migration.",
      },
      {
        question: "Is VoIP call quality guaranteed?",
        answer: "Yes, under our SLA-backed Professional and Enterprise plans.",
      },
      {
        question: "Do you integrate with other tools?",
        answer: "Yes, we support Teams, Slack, Zoom, and more.",
      },
    ],
  },

  "network-infrastructure": {
    title: "Network Infrastructure & Cabling",
    icon: Wifi,
    image: "/network-cabling-installation.jpg",
    description:
      "End-to-end network design, cabling, and setup solutions ensuring robust and high-speed connectivity across your organization.",
    benefits: [
      "Structured cabling (Cat6, Cat6a, Fiber)",
      "Wireless network design and setup",
      "Server and switch deployment",
      "Conference room integration",
      "Reliable data transmission",
      "Reduced network downtime",
    ],
    features: [
      "Industry-grade materials",
      "Certified cabling technicians",
      "Network performance testing",
      "Future-proof infrastructure",
    ],
    pricing: [
      {
        tier: "Standard",
        price: "From $5,000/project",
        features: [
          "Basic cabling setup",
          "Router configuration",
          "Network testing",
        ],
      },
      {
        tier: "Professional",
        price: "From $8,000/project",
        features: [
          "Structured cabling",
          "Wireless setup",
          "Switch installation",
          "Performance optimization",
        ],
      },
      {
        tier: "Enterprise",
        price: "Custom",
        features: [
          "Data center deployment",
          "Conference integration",
          "Ongoing maintenance",
          "Network documentation",
        ],
      },
    ],
    process: [
      {
        step: 1,
        title: "Site Survey",
        description: "Physical assessment of premises and network layout",
      },
      {
        step: 2,
        title: "Design & Planning",
        description: "Develop detailed network and cabling plan",
      },
      {
        step: 3,
        title: "Installation",
        description: "Deploy and configure cabling and networking hardware",
      },
      {
        step: 4,
        title: "Testing",
        description: "Ensure connectivity and performance benchmarks",
      },
      {
        step: 5,
        title: "Maintenance",
        description: "Provide long-term network support",
      },
    ],
    caseStudies: [
      {
        company: "TechPark Solutions",
        challenge: "Unstable network connectivity",
        result: "Improved performance by 300% post cabling upgrade",
      },
      {
        company: "Corporate Tower",
        challenge: "Wireless dead zones",
        result: "Seamless coverage across 8 floors after setup",
      },
    ],
    faqs: [
      {
        question: "Do you handle fiber optic cabling?",
        answer: "Yes, we offer Cat6, Cat6a, and Fiber installations.",
      },
      {
        question: "How long does installation take?",
        answer: "Typically 2–6 weeks depending on scale.",
      },
      {
        question: "Do you provide documentation?",
        answer:
          "Yes, full network topology and labeling documentation is included.",
      },
    ],
  },

  "it-infrastructure-setup": {
    title: "IT Infrastructure & Office Setup",
    icon: Building,
    image: "/office-it-infrastructure-setup.jpg",
    description:
      "Complete IT setup solutions for new or relocating offices, including AV systems, security, and structured IT environments.",
    benefits: [
      "Turnkey IT and AV deployment",
      "End-to-end project management",
      "Network and security setup",
      "Workstation configuration",
      "IT relocation and expansion services",
      "Reduced setup time and costs",
    ],
    features: [
      "Custom office IT design",
      "On-site installation team",
      "Integrated communication and security systems",
      "Post-deployment support",
    ],
    pricing: [
      {
        tier: "Basic",
        price: "From $10,000/project",
        features: ["IT setup", "Basic networking", "Workstation configuration"],
      },
      {
        tier: "Professional",
        price: "From $20,000/project",
        features: [
          "AV integration",
          "CCTV setup",
          "IT relocation",
          "Project management",
        ],
      },
      {
        tier: "Enterprise",
        price: "Custom",
        features: [
          "Full office infrastructure design",
          "Smart office automation",
          "Dedicated project lead",
          "Post-deployment training",
        ],
      },
    ],
    process: [
      {
        step: 1,
        title: "Consultation",
        description: "Understand your space and infrastructure goals",
      },
      {
        step: 2,
        title: "Design",
        description: "Create custom layout and wiring plan",
      },
      {
        step: 3,
        title: "Implementation",
        description: "Deploy systems and configure all devices",
      },
      {
        step: 4,
        title: "Testing",
        description: "Conduct quality and performance checks",
      },
      {
        step: 5,
        title: "Support",
        description: "Ongoing maintenance and relocation assistance",
      },
    ],
    caseStudies: [
      {
        company: "RealEstate Pro Offices",
        challenge: "New branch setup",
        result: "Fully functional IT setup within 3 weeks",
      },
      {
        company: "Consultancy HQ",
        challenge: "AV and network integration",
        result: "Seamless hybrid meeting setup across departments",
      },
    ],
    faqs: [
      {
        question: "Do you handle complete relocation?",
        answer:
          "Yes, we manage IT moves end-to-end, including cabling and system reinstallation.",
      },
      {
        question: "Can you work with architects?",
        answer:
          "Absolutely. We coordinate with architects and builders for infrastructure alignment.",
      },
      {
        question: "Do you provide post-installation support?",
        answer: "Yes, every project includes support and warranty period.",
      },
    ],
  },

  "cybersecurity-compliance": {
    title: "Cybersecurity & Compliance",
    icon: Lock,
    image: "/cybersecurity-compliance.jpg",
    description:
      "Ensure your organization meets cybersecurity and compliance standards like GDPR, ISO, and CMMC through proactive strategies and audits.",
    benefits: [
      "Regulatory compliance assurance",
      "Comprehensive risk management",
      "Vulnerability scanning and audits",
      "Incident detection and response",
      "Policy development and enforcement",
      "CMMC readiness enablement",
    ],
    features: [
      "Automated compliance reporting",
      "Policy templates and frameworks",
      "Advanced risk scoring system",
      "Audit-ready documentation",
    ],
    pricing: [
      {
        tier: "Compliance Basic",
        price: "$2,500/month",
        features: ["Risk assessment", "Policy setup", "Basic compliance audit"],
      },
      {
        tier: "Compliance Pro",
        price: "$4,500/month",
        features: [
          "CMMC enablement",
          "Continuous monitoring",
          "Advanced reporting",
        ],
      },
      {
        tier: "Enterprise",
        price: "Custom",
        features: [
          "Full compliance program",
          "Dedicated compliance team",
          "Ongoing consulting",
        ],
      },
    ],
    process: [
      {
        step: 1,
        title: "Compliance Audit",
        description: "Evaluate current compliance gaps",
      },
      {
        step: 2,
        title: "Risk Mapping",
        description: "Identify vulnerabilities and assign severity",
      },
      {
        step: 3,
        title: "Remediation Plan",
        description: "Develop corrective measures and timelines",
      },
      {
        step: 4,
        title: "Implementation",
        description: "Deploy tools and enforce policies",
      },
      {
        step: 5,
        title: "Monitoring",
        description: "Maintain continuous compliance visibility",
      },
    ],
    caseStudies: [
      {
        company: "Healthcare Data Systems",
        challenge: "GDPR non-compliance risks",
        result: "Achieved full compliance within 60 days",
      },
      {
        company: "Defense Contractor",
        challenge: "CMMC certification",
        result: "Completed Level 2 CMMC certification in 4 months",
      },
    ],
    faqs: [
      {
        question: "Which standards do you support?",
        answer: "CMMC, ISO 27001, GDPR, HIPAA, and SOC 2.",
      },
      {
        question: "Do you offer audits?",
        answer:
          "Yes, we conduct internal audits and prepare for external ones.",
      },
      {
        question: "How often are policies updated?",
        answer: "Quarterly or as per compliance requirement changes.",
      },
    ],
  },

  "digital-growth": {
    title: "Digital Growth & Marketing",
    icon: Globe,
    image: "/digital-marketing-growth.jpg",
    description:
      "Empowering your brand’s online presence with SEO, digital marketing, and data-driven IT project management for measurable business growth.",
    benefits: [
      "Improved online visibility",
      "Targeted digital marketing campaigns",
      "Data analytics and insights",
      "Integrated SEO strategies",
      "End-to-end project tracking",
      "ROI-focused growth management",
    ],
    features: [
      "Comprehensive SEO audits",
      "Campaign performance tracking",
      "Conversion optimization",
      "Cross-platform analytics",
    ],
    pricing: [
      {
        tier: "Startup",
        price: "$1,000/month",
        features: ["Basic SEO", "Social media management", "Monthly reporting"],
      },
      {
        tier: "Growth",
        price: "$2,500/month",
        features: [
          "Advanced analytics",
          "PPC campaigns",
          "Email marketing",
          "SEO optimization",
        ],
      },
      {
        tier: "Enterprise",
        price: "Custom",
        features: [
          "Complete digital strategy",
          "Brand identity management",
          "Dedicated marketing manager",
          "Custom dashboards",
        ],
      },
    ],
    process: [
      {
        step: 1,
        title: "Discovery",
        description: "Understand business goals and audience",
      },
      {
        step: 2,
        title: "Strategy",
        description: "Develop marketing and SEO roadmap",
      },
      {
        step: 3,
        title: "Execution",
        description: "Launch campaigns across key channels",
      },
      {
        step: 4,
        title: "Optimization",
        description: "Monitor KPIs and refine strategies",
      },
      {
        step: 5,
        title: "Reporting",
        description: "Deliver insights and growth reports",
      },
    ],
    caseStudies: [
      {
        company: "EcomTech",
        challenge: "Low organic traffic",
        result: "230% increase in leads within 3 months",
      },
      {
        company: "ConsultHub",
        challenge: "No digital presence",
        result: "Full digital branding and 4x engagement rate",
      },
    ],
    faqs: [
      {
        question: "Do you handle social media too?",
        answer: "Yes, social media campaigns are part of all plans.",
      },
      {
        question: "How soon can results be seen?",
        answer: "SEO typically shows measurable growth in 2–3 months.",
      },
      {
        question: "Is content creation included?",
        answer:
          "Yes, Professional and Enterprise plans include content marketing.",
      },
    ],
  },
};

export default async function ServicePage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const params = await searchParams;
  const serviceSlug = params.service || "it-security";
  const service = serviceDetails[serviceSlug as keyof typeof serviceDetails] || serviceDetails["it-security"];
  const Icon = service.icon;

  // Schema.org structured data for the service page
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "V-Networks",
      "url": "https://v-networks.com"
    },
    "serviceType": service.title,
    "areaServed": "US",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${service.title} Pricing`,
      "itemListElement": service.pricing.map((plan, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": `${service.title} - ${plan.tier}`
        },
        "price": plan.price,
        "priceCurrency": "USD"
      }))
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://v-networks.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://v-networks.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": service.title,
        "item": `https://v-networks.com/services?service=${serviceSlug}`
      }
    ]
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Schema.org structured data */}
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("${service.image}")`,
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <div className="inline-flex p-4 bg-primary/20 rounded-lg mb-6">
              <Icon className="w-8 h-8" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-background via-secondary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Key Benefits</h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to succeed
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative p-8 rounded-xl border border-primary/20 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-300" />

                  <div className="relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 text-white shadow-lg">
                        <Check className="w-6 h-6" />
                      </div>
                      <p className="text-lg font-semibold leading-relaxed pt-1">
                        {benefit}
                      </p>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
              <div className="space-y-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-lg">{feature}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden"
            >
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                className="w-full h-96 object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Pricing Plans</h2>
            <p className="text-muted-foreground text-lg">
              Choose the plan that fits your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {service.pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-lg border border-border bg-card p-8 hover:border-primary transition-all hover:shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-2">{plan.tier}</h3>
                <p className="text-3xl font-bold text-primary mb-6">
                  {plan.price}
                </p>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-8 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Implementation Process</h2>
            <p className="text-muted-foreground text-lg">
              How we deploy your solution
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-4">
            {service.process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex flex-col"
              >
                <div className="rounded-lg border border-border bg-card p-6 text-center flex flex-col h-full">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    {item.step}
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground flex-1">
                    {item.description}
                  </p>
                </div>
                {index < service.process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-primary/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Case Studies</h2>
            <p className="text-muted-foreground text-lg">
              Real results from our clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {service.caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-lg border border-border bg-card p-8"
              >
                <h3 className="text-2xl font-bold mb-4">{study.company}</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Challenge
                    </p>
                    <p className="font-semibold">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Result</p>
                    <p className="font-semibold text-primary">{study.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Get answers to common questions
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {service.faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-lg border border-border bg-card p-6"
              >
                <h3 className="font-bold mb-3 text-lg">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contact our team today to learn how we can help
            </p>
            <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
