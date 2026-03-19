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
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  }

  return (
    <section className="container mx-auto px-4 py-16 md:py-24 min-h-[calc(100vh-4rem)]">
      <div className="mx-auto max-w-4xl text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
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
            className={`group relative flex flex-col justify-between rounded-2xl border transition-all duration-300 hover:-translate-y-2 overflow-hidden ${
              project.featured 
                ? "border-violet-500/40 shadow-[0_0_35px_-10px_rgba(139,92,246,0.4)] hover:shadow-[0_0_55px_-5px_rgba(139,92,246,0.55)] hover:border-violet-400/70" 
                : "border-border/50 hover:border-accent/80 hover:shadow-[0_0_30px_-12px_rgba(99,102,241,0.35)]"
            }`}
          >
            {/* Card inner gradient background */}
            <div
              className={`absolute inset-0 -z-10 transition-opacity duration-300 ${
                project.featured
                  ? "opacity-100 bg-gradient-to-br from-violet-950/30 via-card to-blue-950/20"
                  : "opacity-100 bg-card group-hover:bg-gradient-to-br group-hover:from-indigo-950/20 group-hover:via-card group-hover:to-card"
              }`}
            />

            {/* Featured top accent bar */}
            {project.featured && (
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 via-blue-400 to-violet-500 rounded-t-2xl" />
            )}

            <div className="p-8 space-y-6">
              {/* Icon + Badge row */}
              <div className="flex items-center justify-between">
                <div className={`p-3 rounded-xl text-2xl transition-all duration-300 group-hover:scale-110 ${
                  project.featured
                    ? "bg-gradient-to-br from-violet-500/20 to-blue-500/20 text-violet-400 group-hover:from-violet-500/40 group-hover:to-blue-500/40"
                    : "bg-muted text-foreground group-hover:bg-primary group-hover:text-primary-foreground"
                }`}>
                  {getIcon(project.icon)}
                </div>

                {project.featured && (
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-violet-600/20 to-blue-500/20 text-violet-300 border border-violet-500/30 shadow-[0_0_12px_-3px_rgba(139,92,246,0.5)] tracking-wide">
                    ✦ Featured
                  </span>
                )}
              </div>

              {/* Title + Description */}
              <div className="space-y-3">
                <h3 className={`text-xl font-bold tracking-tight transition-all duration-300 ${
                  project.featured
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-blue-300"
                    : "text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-blue-400"
                }`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2">
                {project.techStack.map(tech => (
                  <span 
                    key={tech} 
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                      project.featured
                        ? "bg-violet-500/10 text-violet-300 border border-violet-500/20"
                        : "bg-muted text-muted-foreground group-hover:bg-muted/60"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="mx-8 border-t border-border/40" />

            {/* GitHub Link */}
            <div className="px-8 py-5 mt-auto">
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noreferrer"
                className={`inline-flex items-center text-sm font-semibold transition-all duration-200 group/link ${
                  project.featured
                    ? "text-violet-400 hover:text-violet-300"
                    : "text-foreground hover:text-blue-400"
                }`}
              >
                View on GitHub
                <FaIcons.FaArrowRight className="ml-2 h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-1.5" />
              </a>
            </div>

            {/* Hover glow overlay */}
            <div className={`absolute inset-0 -z-10 rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${
              project.featured
                ? "bg-gradient-to-br from-violet-600/5 via-transparent to-blue-600/5"
                : "bg-gradient-to-b from-transparent to-accent/5"
            }`} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
