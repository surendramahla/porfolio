"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"
import { FaDownload, FaFilePdf } from "react-icons/fa"

export function Resume() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 min-h-[calc(100vh-4rem)] flex flex-col items-center">
      <div className="mx-auto max-w-4xl text-center mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white"
        >
          My <span className="gradient-text">Resume</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-400 max-w-2xl mx-auto"
        >
          View or download my professional resume.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex gap-4 mb-16"
      >
        <a 
          href={portfolioData.resumeUrl} 
          download="Surendra_Mahla_Resume.pdf"
          className="inline-flex h-12 items-center justify-center px-8 text-sm font-semibold transition-all duration-300"
          style={{
            background: "linear-gradient(135deg, #38BDF8, #818CF8)",
            color: "#0F172A",
            borderRadius: "9999px",
            boxShadow: "0 0 25px rgba(56,189,248,0.30)"
          }}
          onMouseEnter={e => {
            Object.assign((e.currentTarget as HTMLElement).style, {
              boxShadow: "0 0 40px rgba(56,189,248,0.55), 0 0 70px rgba(56,189,248,0.15)",
              transform: "scale(1.05)"
            })
          }}
          onMouseLeave={e => {
            Object.assign((e.currentTarget as HTMLElement).style, {
              boxShadow: "0 0 25px rgba(56,189,248,0.30)",
              transform: ""
            })
          }}
        >
          <FaDownload className="mr-2 h-4 w-4" />
          Download PDF
        </a>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="w-full max-w-5xl aspect-[1/1.4] md:aspect-[16/11] rounded-2xl shadow-xl overflow-hidden relative flex flex-col items-center justify-center"
        style={{
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.09)",
          boxShadow: "0 8px 48px rgba(56,189,248,0.08)"
        }}
      >
        {/* Placeholder if no PDF exists yet */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-0"
          style={{ background: "rgba(15,23,42,0.3)" }}>
          <FaFilePdf className="h-20 w-20 mb-6" style={{ color: "rgba(255,255,255,0.15)" }} />
          <h3 className="text-2xl font-semibold text-slate-400 mb-2">Resume preview unavailable</h3>
          <p className="text-slate-500 max-w-md">
            Please place your actual PDF resume file at <code className="px-2 py-1 rounded text-slate-300"
              style={{ background: "rgba(255,255,255,0.07)" }}>public/resume.pdf</code> to enable the viewer.
          </p>
        </div>
        
        {/* The iframe covers the placeholder if the PDF exists */}
        <iframe 
          src={portfolioData.resumeUrl} 
          title="Resume PDF Viewer"
          className="w-full h-full relative z-10 border-0"
          style={{ backgroundColor: 'transparent' }}
        />
      </motion.div>
    </section>
  )
}
