"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"
import { useState } from "react"
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"
import emailjs from "@emailjs/browser"

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Using EmailJS to send the email
    emailjs.send(
      'service_u3k2qqd',           // Your Service ID
      'template_pqcgbe8',          // TODO: Replace with your actual Template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      '22yrg7ysQT6EUZiF0'            // TODO: Replace with your actual Public Key
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

  return (
    <section className="container mx-auto px-4 py-16 md:py-24 min-h-[calc(100vh-4rem)]">
      <div className="mx-auto max-w-4xl text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Ready to transform data into solutions? Let&apos;s connect and build something amazing together.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-8"
        >
          <div className="p-8 rounded-2xl bg-card border border-border/50 shadow-sm">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <a href="mailto:contact@example.com" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <FaEnvelope className="h-5 w-5" />
                </div>
                <span className="font-medium">Direct Email Interface</span>
              </a>
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                <div className="p-3 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <FaLinkedin className="h-5 w-5" />
                </div>
                <span className="font-medium">Connect on LinkedIn</span>
              </a>
              <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                <div className="p-3 rounded-full bg-muted text-foreground group-hover:bg-foreground group-hover:text-background transition-colors">
                  <FaGithub className="h-5 w-5" />
                </div>
                <span className="font-medium">Explore my GitHub</span>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-card border border-border/50 shadow-sm space-y-6">
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full h-11 px-4 rounded-md border border-input bg-background/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-11 px-4 rounded-md border border-input bg-background/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full h-11 px-4 rounded-md border border-input bg-background/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Hello!"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-4 rounded-md border border-input bg-background/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-y"
                  placeholder="How can I help you?"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 inline-flex items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 mt-4 text-sm text-green-700 bg-green-100 rounded-md dark:bg-green-900/30 dark:text-green-400"
              >
                Message sent successfully!
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}
