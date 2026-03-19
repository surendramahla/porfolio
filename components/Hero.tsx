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

      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(120,119,198,0.25),transparent_60%)]" />

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

              <span className="text-muted-foreground text-lg tracking-wide">
                Hello, I'm
              </span>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                <span className="gradient-text">{name}</span>
              </h1>

              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                Software Developer • Data Analytics Enthusiast
              </h2>

            </div>

            {/* Description */}

            <p className="text-muted-foreground max-w-xl leading-relaxed text-base md:text-lg">
              I build intelligent software systems and data-driven applications
              using modern technologies such as Python, Machine Learning, and
              Data Analytics. My focus is transforming complex data into
              scalable solutions that create real-world impact.
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 justify-center md:justify-start">

              <Link
                href="/projects"
                className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition"
              >
                View My Projects
              </Link>

              <Link
                href="/contact"
                className="px-8 py-3 rounded-full border border-border font-semibold hover:bg-accent hover:scale-105 transition"
              >
                Contact Me
              </Link>

            </div>

            {/* Social Links */}

            <div className="flex gap-5 justify-center md:justify-start pt-2">

              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-accent transition hover:scale-110"
              >
                <FaGithub className="h-6 w-6" />
              </a>

              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-accent transition hover:scale-110"
              >
                <FaLinkedin className="h-6 w-6" />
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
                className="object-cover rounded-full border-4 border-primary shadow-2xl"
                priority
              />

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full blur-3xl bg-primary/20 -z-10" />

            </div>

          </motion.div>

        </div>

        {/* STATS */}

        <div className="grid grid-cols-3 gap-8 pt-16 mt-16 border-t border-border/40 max-w-4xl mx-auto text-center">

          {portfolioData.stats.map((stat, i) => (

            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (i * 0.1) }}
              className="space-y-2"
            >

              <div className="text-3xl md:text-4xl font-bold">
                {stat.value}
              </div>

              <div className="text-sm text-muted-foreground uppercase tracking-wide">
                {stat.label}
              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  )
}