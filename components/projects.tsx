"use client";

import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import {
  Angular,
  AdobeXd,
  CssOld,
  Figma,
  Html5,
  Javascript,
  Mysql,
  NextjsIconDark,
  Nodejs,
  Php,
  ReactLight,
  Tailwindcss,
  Typescript,
} from "@/components/ui/svgs";

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

const techIconMap: Record<string, IconComponent> = {
  "Angular": Angular,
  "Adobe XD": AdobeXd,
  "CSS": CssOld,
  "SCSS": CssOld,
  "Figma": Figma,
  "HTML": Html5,
  "JavaScript": Javascript,
  "MySQL": Mysql,
  "Next.js": NextjsIconDark,
  "Node.js": Nodejs,
  "PHP": Php,
  "React": ReactLight,
  "Tailwind CSS": Tailwindcss,
  "TypeScript": Typescript,
};

const typeColors: Record<string, string> = {
  Professional: "bg-main text-main-foreground",
  "Side Project": "bg-accent text-accent-foreground",
  "Open Source": "bg-background text-foreground",
  "Learning Project": "bg-muted text-muted-foreground",
};

const allTags = ["ALL", ...Array.from(new Set(projects.flatMap((p) => p.tech))).sort()];

export function Projects() {
  const [activeTag, setActiveTag] = useState("ALL");

  const filtered =
    activeTag === "ALL"
      ? projects
      : projects.filter((p) => p.tech.includes(activeTag));

  return (
    <div>
      <h2 className="text-4xl font-bold text-card-foreground mb-2 uppercase">
        Projects
      </h2>
      <p className="text-foreground mb-6 leading-relaxed">
        A selection of projects I&apos;ve built professionally and on my own
        time.
      </p>

      {/* Tech filter */}
      <div className="flex flex-wrap gap-1.5 mb-8">
        {allTags.map((tag) => {
          const Icon = techIconMap[tag];
          return (
            <Button
              key={tag}
              size="sm"
              variant={activeTag === tag ? "default" : "neutral"}
              onClick={() => setActiveTag(tag)}
              className={`text-xs font-bold uppercase tracking-wider gap-1 ${
                activeTag === tag ? "bg-accent text-accent-foreground" : "bg-background hover:bg-muted"
              }`}
            >
              {Icon && <Icon width={12} height={12} />}
              {tag}
            </Button>
          );
        })}
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {filtered.map((project, index) => (
          <div
            key={index}
            className="flex flex-col bg-background border-2 border-border rounded-base shadow-shadow p-5 hover:-translate-y-0.5 hover:shadow-none transition-all duration-200"
          >
            {/* Type badge */}
            <span
              className={`self-start text-xs font-bold uppercase px-2 py-1 border-2 border-border rounded-base mb-3 ${typeColors[project.type]}`}
            >
              {project.type}
            </span>

            {/* Title */}
            <h3 className="text-xl font-bold uppercase mb-1">
              {project.title}
            </h3>

            {/* Role */}
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              {project.role}
            </p>

            {/* Description */}
            <p className="text-sm text-foreground leading-relaxed mb-4 flex-1">
              {project.description}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.tech.map((tag) => {
                const Icon = techIconMap[tag];
                return (
                  <Badge
                    key={tag}
                    variant="neutral"
                    className={`text-xs font-semibold uppercase cursor-pointer gap-1 ${
                      tag === activeTag ? "bg-accent text-accent-foreground border-accent" : ""
                    }`}
                    onClick={() => setActiveTag(tag)}
                  >
                    {Icon && <Icon width={12} height={12} />}
                    {tag}
                  </Badge>
                );
              })}
            </div>

            {/* Links */}
            <div className="flex gap-2">
              {project.liveUrl ? (
                <Button size="sm" variant="default" className="flex-1 text-xs font-bold uppercase" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-3 w-3 mr-1.5" />
                    View Live
                  </a>
                </Button>
              ) : (
                <Button size="sm" variant="default" className="flex-1 text-xs font-bold uppercase" disabled>
                  <ExternalLink className="h-3 w-3 mr-1.5" />
                  View Live
                </Button>
              )}
              {project.githubUrl ? (
                <Button size="sm" variant="neutral" className="text-xs font-bold uppercase px-3" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-3.5 w-3.5" />
                  </a>
                </Button>
              ) : (
                <Button size="sm" variant="neutral" className="text-xs font-bold uppercase px-3" disabled>
                  <Github className="h-3.5 w-3.5" />
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
