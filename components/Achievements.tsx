"use client"

import { motion } from "framer-motion"
import { FaShieldAlt, FaUsers, FaCode, FaLinkedin, FaTrophy } from "react-icons/fa"

interface Achievement {
  title: string
  description: string
  icon: React.ReactNode
  color: string
}

const achievements: Achievement[] = [
  {
    title: "Capture The Flag (CTF) Participant",
    description: "Participated in a CTF competition, demonstrating strong analytical thinking and problem-solving skills in a cybersecurity-focused environment.",
    icon: <FaShieldAlt />,
    color: "#38BDF8"
  },
  {
    title: "Buildathon Hackathon Contributor",
    description: "Actively contributed in a Buildathon Hackathon, collaborating within a team to design and develop innovative solutions under tight deadlines.",
    icon: <FaUsers />,
    color: "#A78BFA"
  },
  {
    title: "LeetCode 100+ Problems Solved",
    description: "Solved 100+ problems on LeetCode, building a solid foundation in data structures, algorithms, and efficient coding practices.",
    icon: <FaCode />,
    color: "#FACC15"
  },
  {
    title: "LinkedIn 260+ Days Streak",
    description: "Maintained a 260+ day ongoing problem-solving streak on LinkedIn, reflecting consistency, discipline, and continuous learning.",
    icon: <FaLinkedin />,
    color: "#0A66C2"
  },
  {
    title: "Hackathon & CTF Organizer (2025)",
    description: "Contributed to organizing CHAKRAVYUH (CTF) & TRINETRA Hackathon (2025), assisting in technical coordination, event structuring, and enhancing participant engagement.",
    icon: <FaTrophy />,
    color: "#F43F5E"
  }
]

export function Achievements() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 min-h-[calc(100vh-4rem)]">
      <div className="mx-auto max-w-4xl text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white"
        >
          My <span className="gradient-text">Achievements</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-400 max-w-2xl mx-auto"
        >
          Highlights of my competitive programming, hackathon participation, and organizational contributions.
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="p-6 rounded-2xl flex flex-col sm:flex-row gap-6 items-start sm:items-center transition-all duration-300 relative overflow-hidden group"
            style={{
              background: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.10)"
            }}
            onMouseEnter={e => {
              Object.assign((e.currentTarget as HTMLElement).style, {
                transform: "translateY(-4px)",
                borderColor: "rgba(56,189,248,0.35)",
                boxShadow: "0 8px 32px rgba(56,189,248,0.12), 0 0 0 1px rgba(56,189,248,0.08)",
                background: "rgba(255,255,255,0.09)"
              })
            }}
            onMouseLeave={e => {
              Object.assign((e.currentTarget as HTMLElement).style, {
                transform: "",
                borderColor: "rgba(255,255,255,0.10)",
                boxShadow: "",
                background: "rgba(255,255,255,0.06)"
              })
            }}
          >
            {/* Ambient Background Glow on Hover */}
            <div 
              className="absolute -inset-x-4 -inset-y-4 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"
              style={{ background: `radial-gradient(circle at center, ${achievement.color}, transparent 70%)` }}
            />

            <div 
              className="relative z-10 flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg transition-transform duration-300 group-hover:scale-110"
              style={{
                background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02))`,
                border: "1px solid rgba(255,255,255,0.15)",
                color: achievement.color
              }}
            >
              {achievement.icon}
            </div>
            
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#38BDF8] transition-colors duration-300">
                {achievement.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {achievement.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
