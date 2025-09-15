const skills = [
  { name: "JavaScript", level: "Expert", category: "Frontend" },
  { name: "TypeScript", level: "Advanced", category: "Frontend" },
  { name: "React", level: "Expert", category: "Frontend" },
  { name: "Next.js", level: "Advanced", category: "Frontend" },
  { name: "Tailwind CSS", level: "Expert", category: "Frontend" },
  { name: "Node.js", level: "Advanced", category: "Backend" },
  { name: "PostgreSQL", level: "Intermediate", category: "Backend" },
  { name: "MongoDB", level: "Advanced", category: "Backend" },
  { name: "GraphQL", level: "Advanced", category: "Backend" },
  { name: "Git", level: "Advanced", category: "Tools" },
  { name: "Docker", level: "Intermediate", category: "Tools" },
  { name: "AWS", level: "Intermediate", category: "Tools" },
  { name: "Figma", level: "Advanced", category: "Design" },
  { name: "Photoshop", level: "Intermediate", category: "Design" },
]

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert":
      return "bg-primary text-primary-foreground neo-border"
    case "Advanced":
      return "bg-accent text-accent-foreground neo-border-accent"
    case "Intermediate":
      return "bg-muted text-foreground neo-border"
    default:
      return "bg-card text-card-foreground neo-border"
  }
}

const getLevelWidth = (level: string) => {
  switch (level) {
    case "Expert":
      return "w-full"
    case "Advanced":
      return "w-4/5"
    case "Intermediate":
      return "w-3/5"
    default:
      return "w-2/5"
  }
}

export function Skills() {
  const categories = ["Frontend", "Backend", "Tools", "Design"]

  return (
    <div>
      <h2 className="text-4xl font-bold text-card-foreground mb-8 uppercase tracking-wide">Skills & Tech</h2>

      <div className="space-y-8">
        {categories.map((category) => (
          <div key={category} className="bg-background neo-border neo-shadow-sm p-6">
            <h3 className="text-xl font-bold text-foreground mb-4 uppercase tracking-wide text-primary">{category}</h3>
            <div className="space-y-3">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold text-foreground uppercase text-sm tracking-wide">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground font-medium">{skill.level}</span>
                      </div>
                      <div className="w-full bg-muted neo-border h-3 relative overflow-hidden">
                        <div
                          className={`h-full bg-primary neo-shadow-sm transition-all duration-500 ${getLevelWidth(
                            skill.level,
                          )}`}
                        />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}

        <div className="bg-accent neo-border-accent neo-shadow p-6 text-center">
          <h3 className="text-xl font-bold text-accent-foreground mb-3 uppercase tracking-wide">Always Learning</h3>
          <p className="text-accent-foreground">
            Currently exploring: <span className="font-bold">Rust, WebAssembly, and AI/ML</span>
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <span className="bg-accent-foreground text-accent px-3 py-1 text-sm font-bold neo-border rounded">
              RUST
            </span>
            <span className="bg-accent-foreground text-accent px-3 py-1 text-sm font-bold neo-border rounded">
              WEBASSEMBLY
            </span>
            <span className="bg-accent-foreground text-accent px-3 py-1 text-sm font-bold neo-border rounded">
              AI/ML
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
