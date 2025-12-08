"use client"

import type React from "react"

import { useState, useMemo } from "react"
import { Mail, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const emailParts = useMemo(() => {
    const user = ["j", "i", "n", "e", "s", "h", "c"].join("")
    const domain = ["p", "r", "o", "t", "o", "n"].join("")
    const tld = ["m", "e"].join("")
    return { user, domain, tld }
  }, [])

  const getEmail = () => {
    return `${emailParts.user}@${emailParts.domain}.${emailParts.tld}`
  }

  const getMailtoLink = () => {
    return `mailto:${getEmail()}`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("https://formspree.io/f/mdkvnqlz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Let's{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-foreground/70 mb-8 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd
              like to collaborate or just say hello!
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <div className="text-sm text-foreground/60">Email</div>
                  <a
                    href={getMailtoLink()}
                    className="text-foreground font-medium hover:text-primary transition-colors"
                  >
                    {getEmail()}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <div className="text-sm text-foreground/60">Location</div>
                  <div className="text-foreground font-medium">Jaipur, India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors duration-300"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors duration-300"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                placeholder="Your message..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {submitStatus === "success" && (
              <p className="text-green-500 text-center mt-4">Message sent successfully! ✓</p>
            )}
            {submitStatus === "error" && (
              <p className="text-red-500 text-center mt-4">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
