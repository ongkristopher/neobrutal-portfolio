"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-8 font-sans leading-tight">
            FULL-STACK
            <br />
            <span className="text-primary">DEVELOPER</span>
          </h1>

          <div className="bg-card neo-shadow neo-border p-8 mb-12 inline-block">
            <p className="text-xl md:text-2xl text-foreground font-semibold">
              I BUILD BOLD, FUNCTIONAL WEB EXPERIENCES
              <br />
              THAT MAKE AN IMPACT
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              onClick={scrollToProjects}
              className="neo-shadow neo-border bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground text-lg px-8 py-6 font-bold uppercase tracking-wide"
            >
              View My Work
            </Button>

            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="neo-border bg-background hover:bg-card" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="neo-border bg-background hover:bg-card" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="neo-border bg-background hover:bg-card" asChild>
                <a href="mailto:alex@example.com">
                  <Mail className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="h-8 w-8 text-primary mx-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
