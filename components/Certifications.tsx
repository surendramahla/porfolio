"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { FaExternalLinkAlt } from "react-icons/fa"

export function Certifications() {

  const certifications = [
    {
      title: "Cloud Computing",
      issuer: "NPTEL (MOOC)",
      date: "Jul – Oct 2025",
      image: "/cloud.png",
      link: "https://drive.google.com/file/d/1-Rdb6d9cXU7cy63WuMQ-9IOT5hzkfwkC/view?usp=sharing",
      skills: [
        "Cloud Architecture",
        "Deployment Strategies",
        "Infrastructure as Code"
      ]
    },
    {
      title: "Oracle AI Foundations Associate",
      issuer: "Oracle",
      date: "Aug 2025",
      image: "/oracle-ai.png",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=ABD60880E44C1E185BF736F8EB4A0365921A359E4A70F1221E6D227DDBDC8DDB",
      skills: [
        "AI Fundamentals",
        "Machine Learning Basics",
        "Cloud AI Services"
      ]
    },
    {
      title: "Oracle Data Platform Foundations",
      issuer: "Oracle",
      date: "Aug 2025",
      image: "/oracle-data.png",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=CA50F5A2F7F593015C141F0013D54129666C757D8061BED9CFCA2F80442FE4F4",
      skills: [
        "Data Warehousing",
        "ETL Processes",
        "Cloud Databases"
      ]
    },
    {
      title: "Oracle Fusion Cloud HCM",
      issuer: "Oracle",
      date: "May2025",
      image: "/orcale-hcm.png",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=6A7CDD0E831A14016134E60FABEA4A0E3EF480CE80AD5E7A614B492696779206",
      skills: [
        "HR Systems",
        "Enterprise Applications",
        "Cloud Solutions"
      ]
    },
    {
      title: "Java GUI Development",
      issuer: "Lovely Professional University",
      date: "Jun – Jul 2025",
      image: "/java.png",
      link: "https://files.lpu.in/umsweb/skilldevcourse/SkillDevelopmentCertificates/12324358_834_20_08_2025.pdf",
      skills: [
        "Java Swing",
        "Event Handling",
        "GUI Design"
      ]
    },
    {
      title: "Data Visualization",
      issuer: "Tata & Forage",
      date: "June 2025",
      image: "/tata.png",
      link: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_aYeib9KbQanDf8fYD_1749106259227_completion_certificate.pdf",
      skills: [
        "Dashboard Design",
        "Business Insights",
        "Power BI"
      ]
    },
    {
      title: "Data Analytics Simulation",
      issuer: "Quantium & Forage",
      date: "June 2025",
      image: "/quantium.png",
      link: "https://www.theforage.com/completion-certificates/32A6DqtsbF7LbKdcq/NkaC7knWtjSbi6aYv_32A6DqtsbF7LbKdcq_aYeib9KbQanDf8fYD_1749118225792_completion_certificate.pdf",
      skills: [
        "Data Cleaning",
        "Exploratory Analysis",
        "Customer Insights"
      ]
    },
    {
      title: "Data Science Simulation",
      issuer: "British Airways & Forage",
      date: "June 2025",
      image: "/ba.png",
      link: "https://www.theforage.com/completion-certificates/tMjbs76F526fF5v3G/NjynCWzGSaWXQCxSX_tMjbs76F526fF5v3G_aYeib9KbQanDf8fYD_1749720243516_completion_certificate.pdf",
      skills: [
        "Machine Learning",
        "Predictive Modeling",
        "Data Analysis"
      ]
    }
  ]

  const [flipped, setFlipped] = useState<number | null>(null)

  return (
    <section className="container mx-auto px-4 py-16">

      <div className="mx-auto max-w-4xl text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white"
        >
          My <span className="gradient-text">Certifications</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-400 max-w-2xl mx-auto"
        >
          Professional certifications and continuous learning programs demonstrating my expertise across Cloud Computing, Full Stack Development, and Data Analytics.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >

        {certifications.map((cert, idx) => (

          <div
            key={idx}
            className="relative h-72 perspective cursor-pointer"
            onClick={() => setFlipped(flipped === idx ? null : idx)}
          >

            <motion.div
              animate={{ rotateY: flipped === idx ? 180 : 0 }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-full"
              style={{ transformStyle: "preserve-3d" }}
            >

              {/* FRONT */}
              <div
                className="absolute inset-0 rounded-2xl overflow-hidden"
                style={{
                  backfaceVisibility: "hidden",
                  border: "1px solid rgba(255,255,255,0.1)"
                }}
              >
                <img
                  src={cert.image}
                  className="w-full h-full object-cover"
                  alt={cert.title}
                />

                <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-white font-semibold">
                    {cert.title}
                  </h3>
                </div>
              </div>

              {/* BACK */}
              <div
                className="absolute inset-0 rounded-2xl p-5 flex flex-col justify-center"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                  background: "rgba(15,23,42,0.95)",
                  border: "1px solid rgba(255,255,255,0.1)"
                }}
              >

                <h3 className="text-white text-lg font-bold mb-2">
                  {cert.title}
                </h3>

                <p className="text-slate-400 mb-2">
                  Issued by: {cert.issuer}
                </p>

                <p className="text-lime-400 mb-4 font-medium">
                  {cert.date}
                </p>

                <ul className="text-sm text-slate-300 space-y-1 mb-4">
                  {cert.skills.map((skill, i) => (
                    <li key={i}>• {skill}</li>
                  ))}
                </ul>

                {cert.link && (
                  <div className="mt-auto pt-4 border-t border-white/10">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-slate-300 hover:text-[#38BDF8] group/link"
                    >
                      View Certificate
                      <FaExternalLinkAlt className="ml-2 h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </a>
                  </div>
                )}
              </div>

            </motion.div>

          </div>

        ))}

      </motion.div>

    </section>
  )
}