"use client"

import { Button } from "@/components/ui/button"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Resume } from "@/components/resume"
import { Projects } from "@/components/projects"
import { Speaking } from "@/components/speaking"
import { Contact } from "@/components/contact"

const tabs = [
  { id: "about", label: "ABOUT", component: About },
  { id: "resume", label: "RESUME", component: Resume },
  { id: "skills", label: "SKILLS", component: Skills },
  { id: "projects", label: "PROJECTS", component: Projects },
  { id: "speaking", label: "SPEAKERSHIP", component: Speaking },
]

interface MainContentProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export function MainContent({ activeTab, setActiveTab }: MainContentProps) {
  const allComponents: Record<string, React.ComponentType> = {
    about: About,
    resume: Resume,
    skills: Skills,
    projects: Projects,
    speaking: Speaking,
    contact: Contact,
  }

  const ActiveComponent = allComponents[activeTab] || About

  return (
    <main className="flex-1 p-4">
      <div className="rounded-base text-main-foreground border-2 border-border bg-main shadow-shadow p-4 lg:p-8 min-h-[calc(100vh-2rem)]">
        {/* Tab Navigation */}
        <nav className="flex flex-wrap gap-1 lg:gap-2 mb-6 lg:mb-8">
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
        <ActiveComponent />
      </div>
    </main>
  );
}
