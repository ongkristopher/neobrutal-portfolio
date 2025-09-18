"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { About } from "@/components/about"
// import { Projects } from "@/components/projects"
// import { Skills } from "@/components/skills"
// import { Contact } from "@/components/contact"
import { Resume } from "@/components/resume"

const tabs = [
  { id: "about", label: "ABOUT", component: About },
  // { id: "projects", label: "PORTFOLIO", component: Projects },
  // { id: "skills", label: "SKILLS", component: Skills },
  { id: "resume", label: "RESUME", component: Resume },
  // { id: "contact", label: "CONTACT", component: Contact },
]

export function MainContent() {
  const [activeTab, setActiveTab] = useState("about")

  const ActiveComponent = tabs.find((tab) => tab.id === activeTab)?.component || About

  return (
    <main className="flex-1 p-4">
      <div className="rounded-base text-main-foreground border-2 border-border bg-main shadow-shadow p-4 lg:p-8 min-h-[calc(100vh-2rem)]">
        {/* Tab Navigation */}
        <nav className="flex gap-1 lg:gap-2 mb-6 lg:mb-8 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              variant={activeTab === tab.id ? "default" : "neutral"}
              size="sm"
              className={`
                font-bold uppercase tracking-wider whitespace-nowrap text-xs lg:text-sm px-3 lg:px-4
                ${
                  activeTab === tab.id
                    ? "bg-accent text-accent-foreground"
                    : "bg-background hover:bg-muted"
                }
              `}
            >
              {tab.label}
            </Button>
          ))}
        </nav>

        {/* Content */}
        <div className="animate-in fade-in-50 duration-900">
          <ActiveComponent />
        </div>
      </div>
    </main>
  );
}
