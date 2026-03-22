"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"
import { useState } from "react"
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"
import emailjs from "@emailjs/browser"

const glassCard = {
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  border: "1px solid rgba(255,255,255,0.09)",
  borderRadius: "1rem",
  transition: "all 0.3s ease"
}

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    emailjs.send(
      'service_u3k2qqd',
      'template_pqcgbe8',
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      '22yrg7ysQT6EUZiF0'
    )
      .then(() => {
        setIsSubmitting(false)
        setSuccess(true)
        setFormData({ name: "", email: "", subject: "", message: "" })
        setTimeout(() => setSuccess(false), 5000)
      })
      .catch((error) => {
        console.error("EmailJS Error:", error)
        setIsSubmitting(false)
        alert("Something went wrong. Please check your EmailJS Template ID and Public Key, or try again later.")
      })
  }

  const inputStyle = {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: "0.5rem",
    color: "#E2E8F0",
    outline: "none",
    transition: "all 0.2s ease",
    width: "100%",
    padding: "0.625rem 1rem",
    fontSize: "0.875rem"
  }

  return (
    <section className="container mx-auto px-4 py-16 md:py-24 min-h-[calc(100vh-4rem)]">
      <div className="mx-auto max-w-4xl text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white"
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-400 max-w-2xl mx-auto"
        >
          Ready to transform data into solutions? Let&apos;s connect and build something amazing together.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-8"
        >
          <div className="p-8 rounded-2xl" style={glassCard}>
            <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
            <div className="space-y-6">

              <a href="mailto:contact@example.com" className="flex items-center gap-4 text-slate-400 hover:text-white transition-colors group">
                <div className="p-3 rounded-full transition-all duration-300 group-hover:scale-110"
                  style={{ background: "rgba(56,189,248,0.10)", color: "#38BDF8" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(56,189,248,0.25)"
                    ;(e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(56,189,248,0.30)"
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(56,189,248,0.10)"
                    ;(e.currentTarget as HTMLElement).style.boxShadow = ""
                  }}
                >
                  <FaEnvelope className="h-5 w-5" />
                </div>
                <span className="font-medium">Direct Email Interface</span>
              </a>

              <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-400 hover:text-white transition-colors group">
                <div className="p-3 rounded-full transition-all duration-300 group-hover:scale-110"
                  style={{ background: "rgba(56,189,248,0.10)", color: "#38BDF8" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(56,189,248,0.25)"
                    ;(e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(56,189,248,0.30)"
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(56,189,248,0.10)"
                    ;(e.currentTarget as HTMLElement).style.boxShadow = ""
                  }}
                >
                  <FaLinkedin className="h-5 w-5" />
                </div>
                <span className="font-medium">Connect on LinkedIn</span>
              </a>

              <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-400 hover:text-white transition-colors group">
                <div className="p-3 rounded-full transition-all duration-300 group-hover:scale-110"
                  style={{ background: "rgba(167,139,250,0.10)", color: "#A78BFA" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(167,139,250,0.25)"
                    ;(e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(167,139,250,0.30)"
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(167,139,250,0.10)"
                    ;(e.currentTarget as HTMLElement).style.boxShadow = ""
                  }}
                >
                  <FaGithub className="h-5 w-5" />
                </div>
                <span className="font-medium">Explore my GitHub</span>
              </a>

            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="p-8 rounded-2xl space-y-6" style={glassCard}>
            <h3 className="text-2xl font-bold mb-6 text-white">Send Me a Message</h3>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={inputStyle}
                    className="focus:ring-2 focus:ring-[#38BDF8] placeholder:text-slate-600"
                    placeholder="John Doe"
                    onFocus={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(56,189,248,0.50)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 2px rgba(56,189,248,0.15)" }}
                    onBlur={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.10)"; (e.currentTarget as HTMLElement).style.boxShadow = "" }}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={inputStyle}
                    placeholder="john@example.com"
                    onFocus={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(56,189,248,0.50)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 2px rgba(56,189,248,0.15)" }}
                    onBlur={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.10)"; (e.currentTarget as HTMLElement).style.boxShadow = "" }}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-300">Subject</label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  style={inputStyle}
                  placeholder="Hello!"
                  onFocus={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(56,189,248,0.50)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 2px rgba(56,189,248,0.15)" }}
                  onBlur={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.10)"; (e.currentTarget as HTMLElement).style.boxShadow = "" }}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{ ...inputStyle, resize: "vertical", padding: "1rem" }}
                  placeholder="How can I help you?"
                  onFocus={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(56,189,248,0.50)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 2px rgba(56,189,248,0.15)" }}
                  onBlur={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.10)"; (e.currentTarget as HTMLElement).style.boxShadow = "" }}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 inline-flex items-center justify-center text-sm font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50"
              style={{
                background: "linear-gradient(135deg, #38BDF8, #818CF8)",
                color: "#0F172A",
                borderRadius: "0.5rem",
                boxShadow: "0 0 20px rgba(56,189,248,0.20)"
              }}
              onMouseEnter={e => {
                Object.assign((e.currentTarget as HTMLElement).style, {
                  boxShadow: "0 0 35px rgba(56,189,248,0.45)",
                  transform: "translateY(-1px)"
                })
              }}
              onMouseLeave={e => {
                Object.assign((e.currentTarget as HTMLElement).style, {
                  boxShadow: "0 0 20px rgba(56,189,248,0.20)",
                  transform: ""
                })
              }}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 mt-4 text-sm rounded-lg text-emerald-300"
                style={{
                  background: "rgba(16,185,129,0.10)",
                  border: "1px solid rgba(16,185,129,0.25)"
                }}
              >
                ✓ Message sent successfully!
              </motion.div>
            )}
          </form>
        </motion.div>

      </div>
    </section>
  )
}
