"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const tabs = [
  { id: "about", label: "ABOUT", path: "/" },
  { id: "resume", label: "RESUME", path: "/resume" },
  { id: "skills", label: "SKILLS", path: "/skills" },
  { id: "projects", label: "PROJECTS", path: "/projects" },
  { id: "speaking", label: "SPEAKERSHIP", path: "/speaking" },
]

export function NavTabs() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/"
    return pathname.startsWith(path)
  }

  return (
    <nav className="flex flex-wrap gap-1 lg:gap-2 mb-6 lg:mb-8">
      {tabs.map((tab) => (
        <Button
          key={tab.id}
          asChild
          variant={isActive(tab.path) ? "default" : "neutral"}
          size="sm"
          className={`
            font-bold uppercase tracking-wider whitespace-nowrap text-xs lg:text-sm px-3 lg:px-4
            ${
              isActive(tab.path)
                ? "bg-accent text-accent-foreground"
                : "bg-background hover:bg-muted"
            }
          `}
        >
          <Link href={tab.path}>{tab.label}</Link>
        </Button>
      ))}
    </nav>
  )
}
