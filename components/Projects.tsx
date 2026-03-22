"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"
import * as FaIcons from "react-icons/fa"

const getIcon = (iconName: string) => {
  const Icon = (FaIcons as Record<string, React.ElementType>)[iconName]
  return Icon ? <Icon /> : <FaIcons.FaCode />
}

export function Projects() {
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
      <div className="mx-auto max-w-4xl text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white"
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-400 max-w-2xl mx-auto"
        >
          Engineering intelligent systems, scalable applications, and data-driven solutions across ML, Web, Java, and Data Analytics.
        </motion.p>
      </div>

      <motion.div 
        variants={containerVars}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        {portfolioData.projects.map((project, idx) => (
          <motion.div
            key={idx}
            variants={itemVars}
            className="group relative flex flex-col justify-between rounded-2xl transition-all duration-300 overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.10)"
            }}
            onMouseEnter={e => {
              Object.assign((e.currentTarget as HTMLElement).style, {
                transform: "translateY(-5px)",
                borderColor: "rgba(56,189,248,0.50)",
                boxShadow: "0 8px 30px rgba(56,189,248,0.15)",
                background: "rgba(255,255,255,0.07)"
              })
            }}
            onMouseLeave={e => {
              Object.assign((e.currentTarget as HTMLElement).style, {
                transform: "",
                borderColor: "rgba(255,255,255,0.10)",
                boxShadow: "",
                background: "rgba(255,255,255,0.05)"
              })
            }}
          >
            {/* Project Cover Image */}
            <div className="w-full h-48 overflow-hidden relative border-b" style={{ borderColor: "rgba(255,255,255,0.10)" }}>
              {(project as any).image && (
                <img 
                  src={(project as any).image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-60" />
            </div>

            <div className="p-8 space-y-6 pt-6">
              {/* Icon */}
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl text-2xl transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: "rgba(56,189,248,0.10)",
                    color: "#38BDF8"
                  }}
                >
                  {getIcon(project.icon)}
                </div>
              </div>

              {/* Title + Description */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-[#38BDF8]">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2">
                {project.techStack.map(tech => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 text-xs font-medium rounded-md text-slate-300"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.09)"
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="mx-8 border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }} />

            {/* GitHub Link */}
            <div className="px-8 py-5 mt-auto">
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center text-sm font-semibold transition-all duration-200 group/link text-slate-400 hover:text-[#38BDF8]"
              >
                {project.title === "Car Sales Analysis Dashboard" || project.title === "Shopify Sales Dashboard" 
                  ? "View Dashboard" 
                  : "View on GitHub"}
                <FaIcons.FaArrowRight className="ml-2 h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-1.5" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
