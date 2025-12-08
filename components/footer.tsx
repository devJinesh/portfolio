"use client"

import * as SimpleIcons from "simple-icons"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              Jinkz
            </h3>
            <p className="text-foreground/60 text-sm">
              Building beautiful digital experiences with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              {[
                { label: "About", href: "#about" },
                { label: "Projects", href: "#projects" },
                { label: "Tech Stack", href: "#tech" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Follow</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/devjinesh/"
                className="p-2 bg-background hover:bg-primary/10 rounded-lg transition-colors duration-300"
              >
                <svg role="img" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-foreground">
                  <path d={SimpleIcons.siGithub.path} />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/jinesh-chhajer"
                className="p-2 bg-background hover:bg-primary/10 rounded-lg transition-colors duration-300"
              >
                <svg role="img" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-foreground">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://x.com/Jinkz_io"
                className="p-2 bg-background hover:bg-primary/10 rounded-lg transition-colors duration-300"
              >
                <svg role="img" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-foreground">
                  <path d={SimpleIcons.siX.path} />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
          <p>&copy; {currentYear} All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
