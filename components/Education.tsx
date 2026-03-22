"use client"

import { motion } from "framer-motion"

export function Education() {

  const education = [
    {
      degree: "Bachelor of Technology (B.Tech) – Computer Science and Engineering",
      institution: "Lovely Professional University, Phagwara, Punjab",
      date: "June 2023 – Present",
      description:
        "Currently pursuing B.Tech in Computer Science and Engineering with a CGPA of 6.9. Focused on software development, data analytics, and machine learning."
    },
    {
      degree: "Intermediate (Class XII)",
      institution: "Kota Career Point, Kuchaman Nagaur, Rajasthan",
      date: "April 2021 – March 2022",
      description:
        "Completed higher secondary education with 85% marks."
    },
    {
      degree: "Matriculation (Class X)",
      institution: "Kota Career Point, Kuchaman Nagaur, Rajasthan",
      date: "April 2019 – March 2020",
      description:
        "Completed secondary education with 85% marks."
    }
  ]

  return (
    <section className="container mx-auto px-4 py-16 md:py-24 min-h-[calc(100vh-4rem)]">

      {/* Heading */}
      <div className="mx-auto max-w-4xl text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white"
        >
          My <span className="gradient-text">Education</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-400 max-w-2xl mx-auto"
        >
          A summary of my academic journey and educational background in computer science and technology.
        </motion.p>
      </div>

      {/* Timeline */}
      <div className="max-w-3xl mx-auto space-y-8 relative">

        {/* Vertical line */}
        <div className="absolute left-0 md:left-8 top-4 bottom-4 w-px hidden md:block"
          style={{ background: "linear-gradient(to bottom, #38BDF8, #A78BFA)" }} />

        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="relative flex flex-col md:flex-row gap-6 md:gap-12"
          >

            {/* Timeline dot */}
            <div className="hidden md:flex absolute left-8 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full z-10"
              style={{
                background: "#38BDF8",
                boxShadow: "0 0 10px rgba(56,189,248,0.6)",
                border: "2px solid rgba(15,23,42,0.9)"
              }} />

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
                  Object.assign((e.currentTarget as HTMLElement).style, {
                    borderColor: "rgba(56,189,248,0.35)",
                    boxShadow: "0 8px 32px rgba(56,189,248,0.10)",
                    transform: "translateY(-3px)"
                  })
                }}
                onMouseLeave={e => {
                  Object.assign((e.currentTarget as HTMLElement).style, {
                    borderColor: "rgba(255,255,255,0.09)",
                    boxShadow: "",
                    transform: ""
                  })
                }}
              >

                {/* Hover gradient bar */}
                <div className="absolute top-0 left-0 w-1 h-full rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(to bottom, #38BDF8, #A78BFA)" }} />

                {/* Degree */}
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-1">
                  {edu.degree}
                </h3>

                {/* Institution + Date */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                  <span className="font-medium" style={{ color: "#38BDF8" }}>
                    {edu.institution}
                  </span>

                  <span className="hidden sm:inline-block text-slate-500">
                    •
                  </span>

                  <span className="text-sm font-medium text-slate-400 px-3 py-1 rounded-full w-fit"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.09)" }}>
                    {edu.date}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed">
                  {edu.description}
                </p>

              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
