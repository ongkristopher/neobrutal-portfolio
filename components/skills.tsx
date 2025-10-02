"use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { ExternalLink } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { skillsCategories } from "@/data/skills";
import { LibraryBig } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
export type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export interface Skill {
  name: string;
  icon: IconType;
  rating: number;
  extraIcon?: IconType;
}

function SkillItem({ name, icon: Icon, rating, extraIcon: ExtraIcon }: Skill) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-2 items-center">
        <Icon width={40} height={40} />
        {ExtraIcon && (
          <>
            <span className="font-bold">+</span>
            <ExtraIcon width={40} height={40} />
          </>
        )}
      </div>

      <p>{name}</p>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <p className="cursor-pointer">
              Skill Rating: <strong>{rating}</strong>
            </p>
          </TooltipTrigger>
          <TooltipContent>
            <p>
              {rating <= 2 && "Learner. Needs support."}
              {rating > 2 && rating <= 4 && "Beginner. Can use but needs help."}
              {rating > 4 && rating <= 6 && "Intermediate. Minimal support."}
              {rating > 6 && rating <= 8 && "Advanced. Can mentor others."}
              {rating > 8 && "Expert. Top-tier knowledge."}
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

// const projects = [
//   {
//     title: "E-COMMERCE PLATFORM",
//     description:
//       "A full-stack e-commerce solution built with Next.js, Stripe, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
//     image: "/modern-ecommerce-interface.png",
//     tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
//     liveUrl: "https://example.com",
//     githubUrl: "https://github.com",
//     category: "web",
//   },
//   {
//     title: "TASK MANAGEMENT APP",
//     description:
//       "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
//     image: "/task-management-dashboard.png",
//     tech: ["React", "Node.js", "Socket.io", "MongoDB"],
//     liveUrl: "https://example.com",
//     githubUrl: "https://github.com",
//     category: "web",
//   },
//   {
//     title: "WEATHER DASHBOARD",
//     description:
//       "A responsive weather dashboard that displays current conditions and forecasts with beautiful data visualizations and location-based services.",
//     image: "/preview/project4.png",
//     tech: ["Vue.js", "Chart.js", "OpenWeather API", "Tailwind"],
//     liveUrl: "https://example.com",
//     githubUrl: "https://github.com",
//     category: "web",
//   },
//   {
//     title: "MOBILE BANKING APP",
//     description:
//       "A secure mobile banking application with biometric authentication, transaction history, and budget tracking features.",
//     image: "/mobile-banking-app.png",
//     tech: ["React Native", "Firebase", "Stripe", "Biometrics"],
//     liveUrl: "https://example.com",
//     githubUrl: "https://github.com",
//     category: "mobile",
//   },
//   {
//     title: "BRAND IDENTITY DESIGN",
//     description:
//       "Complete brand identity package including logo design, color palette, typography, and brand guidelines for a tech startup.",
//     image: "/brand-identity-design-mockup.jpg",
//     tech: ["Figma", "Illustrator", "Photoshop", "InDesign"],
//     liveUrl: "https://example.com",
//     githubUrl: "https://github.com",
//     category: "design",
//   },
//   {
//     title: "PRODUCT PHOTOGRAPHY",
//     description:
//       "Professional product photography series for an e-commerce brand, featuring creative lighting and composition techniques.",
//     image: "/professional-product-photography.png",
//     tech: ["Canon 5D", "Lightroom", "Photoshop", "Studio Lighting"],
//     liveUrl: "https://example.com",
//     githubUrl: "https://github.com",
//     category: "photography",
//   },
// ];

// const categories = [
//   { id: "all", label: "ALL" },
//   { id: "web", label: "WEB DESIGN" },
//   { id: "mobile", label: "MOBILE APPS" },
//   { id: "design", label: "GRAPHIC DESIGN" },
//   { id: "photography", label: "PHOTOGRAPHY" },
// ];

export function Skills() {
  // const [activeCategory, setActiveCategory] = useState("all");

  // const filteredProjects =
  //   activeCategory === "all"
  //     ? projects
  //     : projects.filter((project) => project.category === activeCategory);

  return (
    <div>
      <h2 className="text-4xl font-bold text-card-foreground mb-8 uppercase">
        Skills & Tech
      </h2>
      <article className="space-y-8">
        {/* Rating description stays static */}
        <div className="flex flex-col">
          <h3 className="text-lg text-foreground leading-relaxed">
            Skill Rating:
          </h3>
          <div className="px-3">
            <p className="text-lg text-foreground leading-relaxed">
              <strong>1-2</strong>: Learner. Can understand the concept. Needs
              support to be able to code
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              <strong>3-4</strong>: Beginner. Can use the tech but likely needs
              support.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              <strong>5-6</strong>: Intermediate. Has sufficient knowledge to
              use the tech with minimal support.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              <strong>7-8</strong>: Advanced. Well-versed on the tech. Can
              mentor others.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              <strong>9-10</strong>: Expert. Top-tier knowledge, compares with
              other tech, several years of usage, can do code reviews.
            </p>
          </div>
        </div>

        {/* Dynamic categories */}
        {/* <div className="rounded-base text-main-foreground border-2 border-border bg-main shadow-shadow p-6 mb-6">
          <div className="flex items-center gap-3 mb-6 z-10 relative">
            <div className="w-8 h-8 rounded bg-background border-2 border-border flex items-center justify-center">
              <LibraryBig className="h-4 w-4 text-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground uppercase">
              Skills
            </h3>
          </div>

          
        </div> */}

        {skillsCategories.map((category) => (
          <div key={category.title} className="mb-6">
            <h3 className="text-lg font-bold text-foreground uppercase mb-3">
              {category.title}
            </h3>
            <Card>
              <CardContent>
                <div className="flex flex-wrap justify-evenly items-center gap-3">
                  {category.items.map((skill) => (
                    <SkillItem key={skill.name} {...skill} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}

        {/* <div className="rounded-base text-main-foreground border-2 border-border bg-main shadow-shadow p-6 mb-6">
        <div className="flex items-center gap-3 mb-6 z-10 relative">
          <div className="w-8 h-8 rounded bg-background border-2 border-border flex items-center justify-center">
            <Wrench className="h-4 w-4 text-foreground" />
          </div>
          <h3 className="text-xl font-bold text-foreground uppercase">
            Projects
          </h3>
        </div>
      </div>

      <div className="rounded-base text-main-foreground border-2 border-border bg-main shadow-shadow p-6 mb-6">
        <div className="flex items-center gap-3 mb-6 z-10 relative">
          <div className="w-8 h-8 rounded bg-background border-2 border-border flex items-center justify-center">
            <Wrench className="h-4 w-4 text-foreground" />
          </div>
          <h3 className="text-xl font-bold text-foreground uppercase">
            Speaking Engagements
          </h3>
        </div>
      </div>

      <div className="rounded-base text-main-foreground border-2 border-border bg-main shadow-shadow p-6 mb-6">
        <div className="flex items-center gap-3 mb-6 z-10 relative">
          <div className="w-8 h-8 rounded bg-background border-2 border-border flex items-center justify-center">
            <Wrench className="h-4 w-4 text-foreground" />
          </div>
          <h3 className="text-xl font-bold text-foreground uppercase">
            Awards
          </h3>
        </div>
      </div> */}

        {/* <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <Button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            variant={activeCategory === category.id ? "default" : "neutral"}
            size="sm"
            className={`
              neo-border neo-shadow-sm font-bold uppercase r text-xs
              ${
                activeCategory === category.id
                  ? "bg-accent text-accent-foreground"
                  : "bg-background hover:bg-muted"
              }
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

            <h3 className="text-lg font-bold text-foreground mb-3 font-sans">
              {project.title}
            </h3>

            <p className="text-foreground text-sm mb-4 leading-relaxed line-clamp-3">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1 mb-4">
              {project.tech.slice(0, 3).map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-muted text-foreground px-2 py-1 text-xs font-medium neo-border-accent uppercase "
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
                variant="default"
                size="sm"
                className="neo-border bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground flex-1 text-xs"
                asChild
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-3 w-3 mr-1" />
                  VIEW
                </a>
              </Button>
              <Button
                variant="default"
                size="sm"
                className="neo-border bg-background hover:bg-card px-2"
                asChild
              >
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiGithub className="h-3 w-3" />
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div> */}
      </article>
    </div>
  );
}
