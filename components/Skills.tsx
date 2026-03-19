"use client"

import { motion } from "framer-motion"

import {
  FaPython,
  FaJava,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaFileExcel,
  FaChartBar
} from "react-icons/fa"

import {
  SiC,
  SiCplusplus,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiMysql,
  SiFigma
} from "react-icons/si"

interface Skill {
  name: string
  icon?: React.ReactElement
  color?: string
}

interface SkillCategory {
  title: string
  skills: Skill[]
}

export function Skills() {

  const skillCategories: SkillCategory[] = [

    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: <FaPython />, color: "#3776AB" },
        { name: "Java", icon: <FaJava />, color: "#f89820" },
        { name: "C", icon: <SiC />, color: "#00599C" },
        { name: "C++", icon: <SiCplusplus />, color: "#00599C" }
      ]
    },

    {
      title: "Web Technologies",
      skills: [
        { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
        { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" }
      ]
    },

    {
      title: "Data Science & Machine Learning",
      skills: [
        { name: "Pandas", icon: <SiPandas />, color: "#150458" },
        { name: "NumPy", icon: <SiNumpy />, color: "#013243" },
        { name: "Scikit-learn", icon: <SiScikitlearn />, color: "#F7931E" }
      ]
    },

    {
      title: "Tools & Databases",
      skills: [
        { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
        { name: "SQL", icon: <FaDatabase />, color: "#336791" },
        { name: "Excel", icon: <FaFileExcel />, color: "#217346" },
        { name: "Power BI", icon: <FaChartBar />, color: "#F2C811" },
        { name: "Figma", icon: <SiFigma />, color: "#A259FF" }
      ]
    },

    {
      title: "Soft Skills",
      skills: [
        { name: "Analytical Thinking" },
        { name: "Problem Solving" },
        { name: "Collaboration" },
        { name: "Adaptability" },
        { name: "Communication" }
      ]
    }

  ]

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">

      {/* Heading */}

      <div className="text-center mb-16">

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          My <span className="gradient-text">Skills</span>
        </h1>

        <p className="text-muted-foreground max-w-2xl mx-auto">
          Technologies, tools, and professional skills I use to build
          software systems and data-driven solutions.
        </p>

      </div>

      {/* Skill Categories */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {skillCategories.map((category, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-xl border border-border/50 bg-card shadow-sm"
          >

            <h3 className="text-lg font-semibold mb-6">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-4">

              {category.skills.map((skill, i) => (

                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted text-sm font-medium"
                >

                  {skill.icon && (
                    <span style={{ color: skill.color }} className="text-lg">
                      {skill.icon}
                    </span>
                  )}

                  {skill.name}

                </div>

              ))}

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  )
}