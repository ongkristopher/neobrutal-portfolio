"use client"

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts"
import { skillsCategories } from "@/data/skills"
import { Card, CardContent } from "@/components/ui/card"

const shortNames: Record<string, string> = {
  "Frontend Frameworks & Libraries": "Frontend",
  "Backend & Databases": "Backend",
  "Testing and Debugging": "Testing",
  "DevOps & CI/CD": "DevOps",
  "Automation & AI Tools": "AI Tools",
  "Design Tools": "Design",
  "Build Tools": "Build Tools",
  Languages: "Languages",
  CMS: "CMS",
}

const data = skillsCategories.map((category) => {
  const avgRating =
    category.items.reduce((sum, item) => sum + item.rating, 0) /
    category.items.length
  return {
    category: shortNames[category.title] || category.title,
    rating: Math.round(avgRating * 10) / 10,
    fullMark: 10,
  }
})

export function SkillRadar() {
  return (
    <div className="mt-10">
      <h3 className="text-2xl font-bold text-card-foreground mb-4 uppercase">
        Skill Overview
      </h3>
      <Card>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
              <PolarGrid stroke="var(--border)" strokeWidth={2} />
              <PolarAngleAxis
                dataKey="category"
                tick={{
                  fill: "var(--foreground)",
                  fontSize: 11,
                  fontWeight: 700,
                }}
              />
              <PolarRadiusAxis
                angle={30}
                domain={[0, 10]}
                tick={{ fill: "var(--foreground)", fontSize: 10 }}
                tickCount={6}
              />
              <Radar
                name="Avg Rating"
                dataKey="rating"
                stroke="var(--main)"
                fill="var(--main)"
                fillOpacity={0.3}
                strokeWidth={2}
              />
            </RadarChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap gap-3 justify-center mt-4">
            {data.map((d) => (
              <div
                key={d.category}
                className="text-xs text-foreground/70 border border-border/40 rounded-base px-2 py-1"
              >
                <span className="font-bold">{d.category}</span>: {d.rating}/10
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
