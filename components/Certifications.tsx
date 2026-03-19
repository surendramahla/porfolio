"use client"

import { motion } from "framer-motion"
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa"

export function Certifications() {

  const certifications = [
    {
      title: "Cloud Computing",
      issuer: "NPTEL (MOOC)",
      date: "Jul – Oct 2025",
      link: "https://drive.google.com/file/d/1-Rdb6d9cXU7cy63WuMQ-9IOT5hzkfwkC/view?usp=sharing"
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle",
      date: "2025",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=ABD60880E44C1E185BF736F8EB4A0365921A359E4A70F1221E6D227DDBDC8DDB"
    },
    {
      title: "Oracle Data Platform 2025 Certified Foundations Associate",
      issuer: "Oracle",
      date: "2025",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=CA50F5A2F7F593015C141F0013D54129666C757D8061BED9CFCA2F80442FE4F4"
    },
    {
      title: "Oracle Fusion Cloud HCM Certified Foundations Associate",
      issuer: "Oracle",
      date: "2025",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=6A7CDD0E831A14016134E60FABEA4A0E3EF480CE80AD5E7A614B492696779206"
    },
    {
      title: "Java Maestro: Hands-On Training on Developing GUI Applications",
      issuer: "Lovely Professional University",
      date: "Jun – Jul 2025",
      link: "https://files.lpu.in/umsweb/skilldevcourse/SkillDevelopmentCertificates/12324358_834_20_08_2025.pdf"
    },
    {
      title: "Data Visualization: Empowering Business with Effective Insights",
      issuer: "Tata & Forage",
      date: "2025",
      link: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_aYeib9KbQanDf8fYD_1749106259227_completion_certificate.pdf"
    },
    {
      title: "Data Analytics Job Simulation",
      issuer: "Quantium & Forage",
      date: "2025",
      link: "https://www.theforage.com/completion-certificates/32A6DqtsbF7LbKdcq/NkaC7knWtjSbi6aYv_32A6DqtsbF7LbKdcq_aYeib9KbQanDf8fYD_1749118225792_completion_certificate.pdf"
    },
    {
      title: "Data Science Job Simulation",
      issuer: "British Airways & Forage",
      date: "2025",
      link: "https://www.theforage.com/completion-certificates/tMjbs76F526fF5v3G/NjynCWzGSaWXQCxSX_tMjbs76F526fF5v3G_aYeib9KbQanDf8fYD_1749720243516_completion_certificate.pdf"
    }
  ]

  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVars = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section className="container mx-auto px-4 py-16 md:py-24 min-h-[calc(100vh-4rem)]">

      {/* Heading */}
      <div className="mx-auto max-w-4xl text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
        >
          My <span className="gradient-text">Certifications</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Professional certifications and industry training programs demonstrating my expertise in cloud computing, data analytics, and software development.
        </motion.p>
      </div>

      {/* Grid */}
      <motion.div
        variants={containerVars}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            variants={itemVars}
            className="group relative flex flex-col p-6 rounded-2xl bg-card border border-border/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-accent"
          >

            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-muted rounded-xl text-primary group-hover:scale-110 transition-transform duration-300">
                <FaCertificate className="h-6 w-6" />
              </div>

              <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
                {cert.date}
              </span>
            </div>

            <h3 className="text-xl font-bold tracking-tight text-foreground mb-2 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
              {cert.title}
            </h3>

            <p className="text-muted-foreground mb-6 font-medium">
              {cert.issuer}
            </p>

            <div className="mt-auto">
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-sm font-semibold text-foreground hover:text-blue-500 transition-colors group/link"
              >
                View Certificate
                <FaExternalLinkAlt className="ml-2 h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </a>
            </div>

            <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}