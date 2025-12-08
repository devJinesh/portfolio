"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import TechStack from "@/components/tech-stack"
import Resume from "@/components/resume"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="relative overflow-hidden">
      <Navigation />
      <Hero scrollY={scrollY} />
      <About />
      <Projects />
      <TechStack />
      <Resume />
      <Contact />
      <Footer />
    </main>
  )
}
