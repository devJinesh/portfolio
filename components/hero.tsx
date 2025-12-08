"use client"

import { ArrowRight, Mail, Download } from "lucide-react"
import { useMemo } from "react"
import * as SimpleIcons from "simple-icons"

export default function Hero() {
  const emailParts = useMemo(() => {
    const user = ["j", "i", "n", "e", "s", "h", "c"].join("")
    const domain = ["p", "r", "o", "t", "o", "n"].join("")
    const tld = ["m", "e"].join("")
    return { user, domain, tld }
  }, [])

  const getMailtoLink = () => {
    return `mailto:${emailParts.user}@${emailParts.domain}.${emailParts.tld}`
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-background to-teal-900/30 animate-gradient-shift"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6 animate-slide-in-up">
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium">
            Welcome to my portfolio
          </span>
        </div>

        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slide-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Jinesh Chhajer
          </span>
        </h1>

        <p
          className="text-lg sm:text-xl text-foreground/70 mb-2 animate-slide-in-up"
          style={{ animationDelay: "0.15s" }}
        >
          Full Stack Developer | AI/ML Enthusiast
        </p>

        <p
          className="text-lg sm:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto animate-slide-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Building intelligent web applications and exploring machine learning. Passionate about creating beautiful,
          performant experiences with modern technologies.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
          >
            View My Work
            <ArrowRight className="ml-2" size={20} />
          </a>
          <a
            href="#resume"
            className="inline-flex items-center justify-center px-8 py-3 border border-primary/50 text-foreground rounded-lg font-medium hover:bg-primary/10 transition-all duration-300"
          >
            <Download className="mr-2" size={20} />
            Download Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 animate-slide-in-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="https://github.com/devjinesh/"
            className="p-3 bg-card hover:bg-card/80 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            <svg role="img" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="text-foreground">
              <path d={SimpleIcons.siGithub.path} />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/jinesh-chhajer"
            className="p-3 bg-card hover:bg-card/80 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            <svg role="img" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="text-foreground">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href={getMailtoLink()}
            className="p-3 bg-card hover:bg-card/80 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            <Mail size={24} className="text-foreground" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-foreground/50 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
