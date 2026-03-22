"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"

export function Experience() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 min-h-[calc(100vh-4rem)]">

      {/* Heading */}
      <div className="mx-auto max-w-4xl text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white"
        >
          Professional <span className="gradient-text">Experience</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-400 max-w-2xl mx-auto"
        >
          Hands-on exposure through real-world simulations, software development projects, and technical contributions.
        </motion.p>
      </div>

      {/* Timeline Container */}
      <div className="max-w-3xl mx-auto space-y-8 relative">

        {/* Vertical Line */}
        <div
          className="absolute left-0 md:left-8 top-4 bottom-4 w-px hidden md:block"
          style={{ background: "linear-gradient(to bottom, #38BDF8, #A78BFA)" }}
        />

        {portfolioData.experience.map((exp, idx) => (

          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="relative flex flex-col md:flex-row gap-6 md:gap-12"
          >

            {/* Timeline Dot */}
            <div
              className="hidden md:flex absolute left-8 top-2 -translate-x-1/2 w-3 h-3 rounded-full z-10"
              style={{
                background: "#38BDF8",
                boxShadow: "0 0 10px rgba(56,189,248,0.6)",
                border: "2px solid rgba(15,23,42,0.9)"
              }}
            />

            {/* Card */}
            <div className="md:pl-16 w-full">
              <div
                className="p-6 md:p-8 rounded-2xl relative overflow-hidden group transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.09)"
                }}
                onMouseEnter={e => {
                  Object.assign(e.currentTarget.style, {
                    borderColor: "rgba(56,189,248,0.35)",
                    boxShadow: "0 8px 32px rgba(56,189,248,0.10)",
                    transform: "translateY(-4px)"
                  })
                }}
                onMouseLeave={e => {
                  Object.assign(e.currentTarget.style, {
                    borderColor: "rgba(255,255,255,0.09)",
                    boxShadow: "",
                    transform: ""
                  })
                }}
              >

                {/* Left Gradient Accent */}
                <div
                  className="absolute top-0 left-0 w-1 h-full rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(to bottom, #38BDF8, #A78BFA)" }}
                />

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                  {exp.title}
                </h3>

                {/* Company + Date */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                  <span className="font-medium" style={{ color: "#38BDF8" }}>
                    {exp.company}
                  </span>

                  <span className="hidden sm:inline-block text-slate-500">•</span>

                  <span
                    className="text-sm font-medium text-slate-400 px-3 py-1 rounded-full w-fit"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.09)"
                    }}
                  >
                    {exp.date}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed">
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