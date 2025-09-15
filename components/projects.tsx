"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-COMMERCE PLATFORM",
    description:
      "A full-stack e-commerce solution built with Next.js, Stripe, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
    image: "/modern-ecommerce-interface.png",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "web",
  },
  {
    title: "TASK MANAGEMENT APP",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/task-management-dashboard.png",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "web",
  },
  {
    title: "WEATHER DASHBOARD",
    description:
      "A responsive weather dashboard that displays current conditions and forecasts with beautiful data visualizations and location-based services.",
    image: "/preview/project4.png",
    tech: ["Vue.js", "Chart.js", "OpenWeather API", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "web",
  },
  {
    title: "MOBILE BANKING APP",
    description:
      "A secure mobile banking application with biometric authentication, transaction history, and budget tracking features.",
    image: "/mobile-banking-app.png",
    tech: ["React Native", "Firebase", "Stripe", "Biometrics"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "mobile",
  },
  {
    title: "BRAND IDENTITY DESIGN",
    description:
      "Complete brand identity package including logo design, color palette, typography, and brand guidelines for a tech startup.",
    image: "/brand-identity-design-mockup.jpg",
    tech: ["Figma", "Illustrator", "Photoshop", "InDesign"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "design",
  },
  {
    title: "PRODUCT PHOTOGRAPHY",
    description:
      "Professional product photography series for an e-commerce brand, featuring creative lighting and composition techniques.",
    image: "/professional-product-photography.png",
    tech: ["Canon 5D", "Lightroom", "Photoshop", "Studio Lighting"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "photography",
  },
]

const categories = [
  { id: "all", label: "ALL" },
  { id: "web", label: "WEB DESIGN" },
  { id: "mobile", label: "MOBILE APPS" },
  { id: "design", label: "GRAPHIC DESIGN" },
  { id: "photography", label: "PHOTOGRAPHY" },
]

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <div>
      <h2 className="text-4xl font-bold text-card-foreground mb-8 uppercase tracking-wide">Portfolio</h2>

      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <Button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            variant={activeCategory === category.id ? "default" : "neutral"}
            size="sm"
            className={`
              neo-border neo-shadow-sm font-bold uppercase tracking-wider text-xs
              ${activeCategory === category.id ? "bg-accent text-accent-foreground" : "bg-background hover:bg-muted"}
            `}
          >
            {category.label}
          </Button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="bg-background neo-shadow neo-border p-4 hover:neo-shadow-accent transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="mb-4">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-40 object-cover neo-border group-hover:neo-border-accent transition-all duration-300"
              />
            </div>

            <h3 className="text-lg font-bold text-foreground mb-3 font-sans">{project.title}</h3>

            <p className="text-foreground text-sm mb-4 leading-relaxed line-clamp-3">{project.description}</p>

            <div className="flex flex-wrap gap-1 mb-4">
              {project.tech.slice(0, 3).map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-muted text-foreground px-2 py-1 text-xs font-medium neo-border-accent uppercase tracking-wide"
                >
                  {tech}
                </span>
              ))}
              {project.tech.length > 3 && (
                <span className="bg-muted text-foreground px-2 py-1 text-xs font-medium neo-border-accent">
                  +{project.tech.length - 3}
                </span>
              )}
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="neo-border bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground flex-1 text-xs"
                asChild
              >
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  VIEW
                </a>
              </Button>
              <Button variant="outline" size="sm" className="neo-border bg-background hover:bg-card px-2" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-3 w-3" />
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
