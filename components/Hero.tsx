"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { portfolioData } from "@/data/portfolio"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export function Hero() {

  const { name, github, linkedin } = portfolioData.personal

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden py-20">

      {/* Background ambient glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #38BDF8, transparent)" }} />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl"
          style={{ background: "radial-gradient(circle, #A78BFA, transparent)" }} />
      </div>

      <div className="container px-6">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8 text-center md:text-left"
          >

            {/* Intro */}
            <div className="space-y-5">

              <span className="text-slate-400 text-lg tracking-wide">
                Hello, I&apos;m
              </span>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                <span className="gradient-text">{name}</span>
              </h1>

              <h2 className="text-xl md:text-2xl text-slate-400 font-medium">
                Software Developer • Data Analytics Enthusiast
              </h2>

            </div>

            {/* Description */}

            <p className="text-slate-400 max-w-xl leading-relaxed text-base md:text-lg">
              I build intelligent software systems and data-driven applications
              using modern technologies such as Python, Machine Learning, and
              Data Analytics. My focus is transforming complex data into
              scalable solutions that create real-world impact.
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 justify-center md:justify-start">

              <Link
                href="/projects"
                className="px-8 py-3 btn-primary-glass text-sm font-semibold shadow-lg"
              >
                View My Projects
              </Link>

              <Link
                href="/contact"
                className="px-8 py-3 btn-outline-glass text-sm font-semibold"
              >
                Contact Me
              </Link>

            </div>

            {/* Social Links */}

            <div className="flex gap-4 justify-center md:justify-start pt-2">

              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full transition-all duration-300 hover:scale-110"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(8px)"
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(56,189,248,0.35)"
                  ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(56,189,248,0.4)"
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = ""
                  ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)"
                }}
              >
                <FaGithub className="h-6 w-6 text-slate-200" />
              </a>

              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full transition-all duration-300 hover:scale-110"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(8px)"
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(56,189,248,0.35)"
                  ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(56,189,248,0.4)"
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = ""
                  ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)"
                }}
              >
                <FaLinkedin className="h-6 w-6 text-slate-200" />
              </a>

            </div>

          </motion.div>

          {/* PROFILE IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >

            <div className="relative w-72 h-72 md:w-96 md:h-96">

              <Image
                src="/profile.jpg"
                alt="Surendra Mahla"
                fill
                className="object-cover rounded-full"
                style={{
                  border: "3px solid rgba(56,189,248,0.40)",
                  boxShadow: "0 0 50px rgba(56,189,248,0.20), 0 0 100px rgba(167,139,250,0.10)"
                }}
                priority
              />

              {/* Cyan + Purple dual glow */}
              <div className="absolute inset-0 rounded-full -z-10 blur-2xl opacity-40"
                style={{ background: "radial-gradient(circle, rgba(56,189,248,0.3) 0%, rgba(167,139,250,0.2) 60%, transparent 100%)" }} />

            </div>

          </motion.div>

        </div>

        {/* STATS */}

        <div className="grid grid-cols-3 gap-6 pt-16 mt-16 max-w-4xl mx-auto text-center">

          {portfolioData.stats.map((stat, i) => (

            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (i * 0.1) }}
              className="space-y-2 p-6 rounded-2xl transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.09)"
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(56,189,248,0.35)"
                ;(e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(56,189,248,0.10)"
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.09)"
                ;(e.currentTarget as HTMLElement).style.boxShadow = ""
              }}
            >

              <div className="text-3xl md:text-4xl font-bold gradient-text">
                {stat.value}
              </div>

              <div className="text-sm text-slate-400 uppercase tracking-wide">
                {stat.label}
              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  )
}