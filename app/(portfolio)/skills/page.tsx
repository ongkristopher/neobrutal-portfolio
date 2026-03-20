import { Skills } from "@/components/skills"
import { SkillRadar } from "@/components/skill-radar"

export const metadata = { title: "Skills & Tech" }

export default function SkillsPage() {
  return (
    <>
      <Skills />
      <SkillRadar />
    </>
  )
}
