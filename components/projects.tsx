"use client"

import { useState } from "react"
import { ExternalLink, X } from "lucide-react"
import * as SimpleIcons from "simple-icons"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  category: "web" | "ai-ml"
  github: string
  live?: string
  fullDescription?: string
  features?: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: "Car Rental Platform",
    description:
      "A full-featured car rental web application allowing users to browse, book, and manage car rentals. Features user authentication, payment integration, and an admin dashboard for managing bookings and vehicles.",
    image: "/carrent.png",
    tags: ["React", "Node.js", "MongoDB"],
    category: "web",
    github: "https://github.com/devJinesh/carrent",
    live: "https://cars.jinkz.me/",
    fullDescription: "A comprehensive car rental platform built with modern web technologies. The application provides a seamless user experience for browsing and booking vehicles, with secure authentication and payment processing.",
    features: ["User authentication & authorization", "Vehicle browsing and filtering", "Booking management system", "Payment integration", "Admin dashboard", "Responsive design"],
  },
  {
    id: 2,
    title: "Expense Tracker",
    description:
      "A personal expense tracking app that helps users monitor their spending habits. Features include adding expenses, categorizing them, and visualizing data with charts and graphs.",
    image: "/expensia.png",
    tags: ["Spring Boot", "Next.js", "MySQL"],
    category: "web",
    github: "https://github.com/devJinesh/expensia",
    live: "https://expensia.jinkz.me/",
    fullDescription: "A full-stack expense tracking application designed to help users manage their finances effectively. Built with Spring Boot backend and Next.js frontend for optimal performance.",
    features: ["Expense categorization", "Data visualization with charts", "Monthly/yearly reports", "Budget tracking", "Multi-currency support", "Export to CSV"],
  },
  {
    id: 3,
    title: "Docx to PDF Converter API",
    description:
      "Document conversion API built with FastAPI and Celery for asynchronous DOCX to PDF processing. Features a React frontend with real-time job tracking and dark mode support.",
    image: "/docx-pdf.png",
    tags: ["FastAPI", "Celery", "React"],
    category: "web",
    github: "https://github.com/devJinesh/docx-to-pdf",
    fullDescription: "An asynchronous document conversion service that handles DOCX to PDF conversions efficiently using task queues and workers.",
    features: ["Asynchronous processing", "Real-time job tracking", "Batch conversion support", "REST API endpoints", "Dark mode UI", "File size optimization"],
  },
  {
    id: 4,
    title: "PDF Chat Application",
    description: "An AI-powered document chat application using RAG technology. Upload PDFs and ask questions to get intelligent answers with source citations from semantic search and LLM integration.",
    image: "/DocuQuery.png",
    tags: ["RAG", "NLP", "LLM"],
    category: "ai-ml",
    github: "https://github.com/devJinesh/DocuQuery",
    fullDescription: "A cutting-edge RAG (Retrieval-Augmented Generation) application that enables intelligent conversations with your documents using advanced NLP and LLM technologies.",
    features: ["PDF document upload", "Semantic search", "Source citations", "Context-aware responses", "Multi-document support", "Chat history"],
  },
  {
    id: 5,
    title: "Resume Screener",
    description: "A local resume parsing and job description matching tool with explainable AI scoring. Features rule-based, TF-IDF, and hybrid matching strategies with a modern desktop GUI for privacy-focused candidate screening.",
    image: "/placeholder-project.svg",
    tags: ["Python", "NLP", "Data Processing"],
    category: "ai-ml",
    github: "https://github.com/devJinesh/resume-screener",
    fullDescription: "A privacy-focused resume screening tool that runs entirely on your local machine, using multiple AI strategies to match candidates with job descriptions.",
    features: ["Local processing (privacy-first)", "Multiple matching algorithms", "Explainable AI scoring", "Desktop GUI", "Batch processing", "Customizable scoring weights"],
  },
  {
    id: 6,
    title: "AI Content Moderation System",
    description: "An AI-powered content moderation system that detects hate speech and inappropriate content in real-time. Features a Flask web interface with real-time text analysis.",
    image: "/placeholder-project.svg",
    tags: ["Deep Learning", "BERT", "Transformers"],
    category: "ai-ml",
    github: "https://github.com/devJinesh/SafeText",
    fullDescription: "An intelligent content moderation platform achieving 96.01% accuracy with advanced text preprocessing. It features binary classification (Appropriate vs Inappropriate) with only 11.5% false positive rate, making it ideal for production environments. Built with Flask for the backend API and includes a modern web interface with real-time analytics dashboard.",
    features: ["Hate speech detection", "96% accuracy with 97.67% precision rate", "BERT-based classification", "Real-time text analysis", "Advanced text preprocessing (stemming, stopword removal)", "Confidence scoring", "Flask web interface", "Live analytics dashboard"],
  }
]

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [activeFilter, setActiveFilter] = useState<"all" | "web" | "ai-ml">("all")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Here are some projects I've built while learning web development and exploring AI/ML. Each project helped me
            grow my skills and understand different technologies better.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
              activeFilter === "all"
                ? "bg-primary text-primary-foreground"
                : "bg-card border border-border hover:border-primary/50"
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setActiveFilter("web")}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
              activeFilter === "web"
                ? "bg-primary text-primary-foreground"
                : "bg-card border border-border hover:border-primary/50"
            }`}
          >
            Web Development
          </button>
          <button
            onClick={() => setActiveFilter("ai-ml")}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
              activeFilter === "ai-ml"
                ? "bg-primary text-primary-foreground"
                : "bg-card border border-border hover:border-primary/50"
            }`}
          >
            AI/ML
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholde-project.svg"}
                  alt={project.title}
                  /* Added lazy loading for images */
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                <p className="text-foreground/60 text-sm mb-4 line-clamp-2">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-border">
                  <a
                    href={project.github}
                    onClick={(e) => e.stopPropagation()}
                    className={`${project.live ? 'flex-1' : 'w-full'} flex items-center justify-center gap-2 px-4 py-2 bg-card hover:bg-primary/10 text-foreground rounded-lg transition-all duration-300`}
                  >
                    <svg role="img" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d={SimpleIcons.siGithub.path} />
                    </svg>
                    <span className="text-sm">Code</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Live</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="relative bg-card border border-border rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-background/80 hover:bg-primary/10 rounded-lg transition-colors z-10"
              >
                <X size={20} className="text-foreground" />
              </button>

              {/* Modal Image */}
              <div className="relative h-64 md:h-80 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                <img
                  src={selectedProject.image || "/placeholder-project.svg"}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent pointer-events-none"></div>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  {selectedProject.title}
                </h2>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Full Description */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">About</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {selectedProject.fullDescription || selectedProject.description}
                  </p>
                </div>

                {/* Features */}
                {selectedProject.features && selectedProject.features.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Key Features</h3>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-foreground/70">
                          <span className="text-primary mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Links */}
                <div className="flex gap-4 pt-6 border-t border-border">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-card hover:bg-primary/10 text-foreground rounded-lg transition-all duration-300 border border-border"
                  >
                    <svg role="img" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d={SimpleIcons.siGithub.path} />
                    </svg>
                    <span>View Code</span>
                  </a>
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
