"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"

export function Experience() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 min-h-[calc(100vh-4rem)]">
      <div className="mx-auto max-w-4xl text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
        >
          Professional <span className="gradient-text">Experience</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Hands-on exposure through real-world simulations, software development projects, and technical event contributions.
        </motion.p>
      </div>

      <div className="max-w-3xl mx-auto space-y-8 relative">
        {/* Vertical line indicator */}
        <div className="absolute left-0 md:left-8 top-4 bottom-4 w-px bg-border/60 hidden md:block" />

        {portfolioData.experience.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="relative flex flex-col md:flex-row gap-6 md:gap-12"
          >
            {/* Timeline dot */}
            <div className="hidden md:flex absolute left-8 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-primary ring-4 ring-background z-10" />

            {/* Content Card */}
            <div className="md:pl-16 w-full">
              <div className="p-6 md:p-8 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-violet-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground mb-1">
                  {exp.title}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    {exp.company}
                  </span>
                  <span className="hidden sm:inline-block text-muted-foreground">•</span>
                  <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit">
                    {exp.date}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
