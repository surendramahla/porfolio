"use client"

import { useState } from "react"
import { motion } from "framer-motion"

import {
  FaPython, FaJava, FaJs, FaHtml5, FaCss3Alt,
  FaDatabase, FaFileExcel, FaChartBar, FaServer, FaNetworkWired, FaChartPie
} from "react-icons/fa"

import {
  SiC, SiCplusplus, SiPandas, SiNumpy, SiScikitlearn,
  SiMysql, SiFigma, SiMongodb, SiPostgresql,
  SiDjango, SiFlask, SiFastapi, SiApachehadoop
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

  const [activeFilter, setActiveFilter] = useState("All")

  const skillCategories: SkillCategory[] = [

    {
      title: "Languages",
      skills: [
        { name: "Python", icon: <i className="devicon-python-plain colored"></i> },
        { name: "Java", icon: <i className="devicon-java-plain colored"></i> },
        { name: "C", icon: <i className="devicon-c-plain colored"></i> },
        { name: "C++", icon: <i className="devicon-cplusplus-plain colored"></i> }
      ]
    },

    {
      title: "Web",
      skills: [
        { name: "JavaScript", icon: <i className="devicon-javascript-plain colored"></i> },
        { name: "HTML5", icon: <i className="devicon-html5-plain colored"></i> },
        { name: "CSS3", icon: <i className="devicon-css3-plain colored"></i> },
        { name: "Django", icon: <i className="devicon-django-plain colored"></i> },
        { name: "Flask", icon: <i className="devicon-flask-original colored"></i> },
        { name: "FastAPI", icon: <i className="devicon-fastapi-plain colored"></i> },
        { name: "REST API", icon: <FaServer />, color: "#8E44AD" }
      ]
    },

    {
      title: "Data Science",
      skills: [
        { name: "Pandas", icon: <i className="devicon-pandas-plain colored"></i> },
        { name: "NumPy", icon: <i className="devicon-numpy-plain colored"></i> },
        { name: "Scikit-learn", icon: <SiScikitlearn />, color: "#F7931E" },
        { name: "Big Data", icon: <FaNetworkWired />, color: "#F39C12" },
        { name: "Hadoop", icon: <i className="devicon-hadoop-plain colored"></i> }
      ]
    },

    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: <i className="devicon-mysql-plain colored"></i> },
        { name: "PostgreSQL", icon: <i className="devicon-postgresql-plain colored"></i> },
        { name: "MongoDB", icon: <i className="devicon-mongodb-plain colored"></i> },
        { name: "SQL", icon: <FaDatabase />, color: "#A78BFA" }
      ]
    },

    {
      title: "Tools",
      skills: [
        { name: "Excel", icon: <FaFileExcel />, color: "#217346" },
        { name: "Power BI", icon: <FaChartBar />, color: "#F2C811" },
        { name: "Tableau", icon: <FaChartPie />, color: "#E97627" },
        { name: "Figma", icon: <i className="devicon-figma-plain colored"></i> }
      ]
    }

  ]

  const filters = ["All", ...skillCategories.map(cat => cat.title)]

  // Flatten skills
  const allSkills = skillCategories.flatMap(cat =>
    cat.skills.map(skill => ({ ...skill, category: cat.title }))
  )

  const filteredSkills =
    activeFilter === "All"
      ? allSkills
      : allSkills.filter(skill => skill.category === activeFilter)

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">

      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Technical <span className="gradient-text">Skills</span>
        </h1>
      </div>

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filters.map((filter, i) => (
          <button
            key={i}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${activeFilter === filter
              ? "bg-lime-400 text-black"
              : "bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10"
              }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* GRID LIKE IMAGE */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">

        {filteredSkills.map((skill, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="p-6 rounded-xl text-center transition-all duration-300 cursor-pointer"
            style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.1)"
            }}
            onMouseEnter={e => {
              Object.assign(e.currentTarget.style, {
                borderColor: "#a3e635",
                transform: "translateY(-6px)",
                boxShadow: "0 12px 30px rgba(163,230,53,0.2)"
              })
            }}
            onMouseLeave={e => {
              Object.assign(e.currentTarget.style, {
                borderColor: "rgba(255,255,255,0.1)",
                transform: "",
                boxShadow: ""
              })
            }}
          >

            <div
              className="text-3xl mb-3"
              style={{ color: skill.color }}
            >
              {skill.icon}
            </div>

            <h3 className="text-white font-medium">{skill.name}</h3>

            <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">
              {skill.category}
            </p>

          </motion.div>

        ))}

      </div>

    </section>
  )
}