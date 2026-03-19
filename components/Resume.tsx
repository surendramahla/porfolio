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
          className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
        >
          My <span className="gradient-text">Resume</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
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
          className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-transform hover:scale-105 hover:bg-primary/90"
        >
          <FaDownload className="mr-2 h-4 w-4" />
          Download PDF
        </a>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="w-full max-w-5xl aspect-[1/1.4] md:aspect-[16/11] bg-card border border-border/50 rounded-2xl shadow-xl overflow-hidden relative flex flex-col items-center justify-center group"
      >
        {/* Placeholder if no PDF exists yet */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-muted/30 z-0">
          <FaFilePdf className="h-20 w-20 text-muted-foreground/30 mb-6" />
          <h3 className="text-2xl font-semibold text-muted-foreground mb-2">Resume preview unavailable</h3>
          <p className="text-muted-foreground max-w-md">
            Please place your actual PDF resume file at <code className="bg-muted px-2 py-1 rounded">public/resume.pdf</code> to enable the viewer.
          </p>
        </div>
        
        {/* The iframe covers the placeholder if the PDF exists */}
        <iframe 
          src={portfolioData.resumeUrl} 
          title="Resume PDF Viewer"
          className="w-full h-full relative z-10 border-0 bg-transparent opacity-100 dark:mix-blend-lighten"
          style={{ backgroundColor: 'transparent' }}
          onError={() => {
            // Ideally we could hide the iframe on error, but cross-origin prevents reliable error firing for pdfs in iframes.
            // Setting a background allows fallback to show through transparent iframes.
          }}
        />
      </motion.div>
    </section>
  )
}
