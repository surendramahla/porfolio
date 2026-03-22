"use client"

import { motion } from "framer-motion"

const glassCard = {
  background: "rgba(255, 255, 255, 0.06)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  border: "1px solid rgba(255, 255, 255, 0.10)",
  borderRadius: "1rem",
  transition: "all 0.3s ease",
}

const glassCardHover = {
  borderColor: "rgba(56,189,248,0.35)",
  boxShadow: "0 8px 32px rgba(56,189,248,0.10)",
  transform: "translateY(-3px)",
}

export function About() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">

      {/* Heading */}
      <div className="text-center mb-16">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-white"
        >
          About <span className="gradient-text">Me</span>
        </motion.h1>

        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          A brief overview of my background, skills, and professional aspirations.
        </p>

      </div>

      {/* Layout */}
      <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {/* LEFT COLUMN */}
        <div className="space-y-6">

          {/* Quick Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={glassCard}
            className="p-6"
            onMouseEnter={e => Object.assign((e.currentTarget as HTMLElement).style, glassCardHover)}
            onMouseLeave={e => Object.assign((e.currentTarget as HTMLElement).style, { borderColor: "rgba(255,255,255,0.10)", boxShadow: "", transform: "" })}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Information</h3>

            <div className="space-y-3 text-slate-400 text-sm">
              <p><strong className="text-slate-200">Location:</strong> Jaipur, Rajasthan, India</p>
              <p><strong className="text-slate-200">Education:</strong> B.Tech in Computer Science (LPU)</p>
              <p><strong className="text-slate-200">Specialization:</strong> Software Development &amp; Data Analytics</p>
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            style={glassCard}
            className="p-6"
            onMouseEnter={e => Object.assign((e.currentTarget as HTMLElement).style, glassCardHover)}
            onMouseLeave={e => Object.assign((e.currentTarget as HTMLElement).style, { borderColor: "rgba(255,255,255,0.10)", boxShadow: "", transform: "" })}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Interests</h3>

            <div className="space-y-3">

              {[
                "Exploring emerging technologies and industry trends",
                "Continuous learning through reading and skill development",
                "Enhancing productivity through structured workflows and focus"
              ].map((interest, i) => (
                <div key={i}
                  className="px-4 py-2 rounded-lg text-sm text-slate-300"
                  style={{ background: "rgba(56,189,248,0.06)", border: "1px solid rgba(56,189,248,0.12)" }}
                >
                  {interest}
                </div>
              ))}

            </div>
          </motion.div>

        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-2 space-y-6">

          {[
            {
              title: "Professional Summary",
              content: "I am Surendra Mahla, a Computer Science and Engineering student with a strong interest in building intelligent software systems and data-driven applications. I focus on solving real-world problems by combining software development with data analytics and modern technologies."
            },
            {
              title: "Academic Background & Experience",
              content: "I am currently pursuing a Bachelor of Technology in Computer Science, where I have developed a strong foundation in programming, data structures, and software development. I have experience working with technologies such as Python, Java, C++, Pandas, NumPy, Scikit-learn, MySQL, and Power BI.\n\nMy projects include machine learning models for predictive analysis and software applications with graphical interfaces, helping me strengthen both analytical and development skills."
            },
            {
              title: "Career Goals",
              content: "My goal is to become a skilled software engineer capable of building scalable and impactful solutions. I aim to work on innovative technologies, contribute to real-world applications, and continuously grow in the fields of software engineering, data analytics, and machine learning."
            },
            {
              title: "Strengths & Approach",
              content: "I bring a combination of analytical thinking, problem-solving ability, and adaptability. I enjoy working in collaborative environments and continuously learning new technologies. My approach focuses on writing clean, efficient code while creating meaningful and user-centric solutions."
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + idx * 0.08 }}
              style={glassCard}
              className="p-6"
              onMouseEnter={e => Object.assign((e.currentTarget as HTMLElement).style, glassCardHover)}
              onMouseLeave={e => Object.assign((e.currentTarget as HTMLElement).style, { borderColor: "rgba(255,255,255,0.10)", boxShadow: "", transform: "" })}
            >
              <h3 className="text-xl font-semibold mb-4" style={{ color: "#38BDF8" }}>
                {item.title}
              </h3>
              <p className="text-slate-400 leading-relaxed whitespace-pre-line">
                {item.content}
              </p>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}