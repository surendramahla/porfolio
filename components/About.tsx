"use client"

import { motion } from "framer-motion"

export function About() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">

      {/* Heading */}
      <div className="text-center mb-16">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          About <span className="gradient-text">Me</span>
        </motion.h1>

        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A brief overview of my background, skills, and professional aspirations.
        </p>

      </div>

      {/* Layout */}
      <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {/* LEFT COLUMN */}
        <div className="space-y-6">

          {/* Quick Info */}
          <div className="p-6 rounded-xl bg-card border border-border/50 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Quick Information</h3>

            <div className="space-y-3 text-muted-foreground text-sm">

              <p><strong>Location:</strong> Jaipur, Rajasthan, India</p>
              <p><strong>Education:</strong> B.Tech in Computer Science (LPU)</p>
              <p><strong>Specialization:</strong> Software Development & Data Analytics</p>

            </div>
          </div>

          {/* Interests */}
          <div className="p-6 rounded-xl bg-card border border-border/50 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Interests</h3>

            <div className="space-y-3">

              <div className="px-4 py-2 rounded-lg bg-muted text-sm text-muted-foreground">
                Exploring emerging technologies and industry trends
              </div>

              <div className="px-4 py-2 rounded-lg bg-muted text-sm text-muted-foreground">
                Continuous learning through reading and skill development
              </div>

              <div className="px-4 py-2 rounded-lg bg-muted text-sm text-muted-foreground">
                Enhancing productivity through structured workflows and focus
              </div>

            </div>
          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-2 space-y-6">

          {/* Intro */}
          <div className="p-6 rounded-xl bg-card border border-border/50 shadow-sm">

            <h3 className="text-xl font-semibold mb-4 text-primary">
              Professional Summary
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              I am Surendra Mahla, a Computer Science and Engineering student with a strong interest in building intelligent software systems and data-driven applications. I focus on solving real-world problems by combining software development with data analytics and modern technologies.
            </p>

          </div>

          {/* Background */}
          <div className="p-6 rounded-xl bg-card border border-border/50 shadow-sm">

            <h3 className="text-xl font-semibold mb-4 text-primary">
              Academic Background & Experience
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              I am currently pursuing a Bachelor of Technology in Computer Science, where I have developed a strong foundation in programming, data structures, and software development. I have experience working with technologies such as Python, Java, C++, Pandas, NumPy, Scikit-learn, MySQL, and Power BI.
              <br /><br />
              My projects include machine learning models for predictive analysis and software applications with graphical interfaces, helping me strengthen both analytical and development skills.
            </p>

          </div>

          {/* Goals */}
          <div className="p-6 rounded-xl bg-card border border-border/50 shadow-sm">

            <h3 className="text-xl font-semibold mb-4 text-primary">
              Career Goals
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              My goal is to become a skilled software engineer capable of building scalable and impactful solutions. I aim to work on innovative technologies, contribute to real-world applications, and continuously grow in the fields of software engineering, data analytics, and machine learning.
            </p>

          </div>

          {/* Unique Qualities */}
          <div className="p-6 rounded-xl bg-card border border-border/50 shadow-sm">

            <h3 className="text-xl font-semibold mb-4 text-primary">
              Strengths & Approach
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              I bring a combination of analytical thinking, problem-solving ability, and adaptability. I enjoy working in collaborative environments and continuously learning new technologies. My approach focuses on writing clean, efficient code while creating meaningful and user-centric solutions.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}