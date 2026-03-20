"use client"

import { useEffect, useRef, useState } from "react"
import { skillsCategories } from "@/data/skills"

const CELL_SIZE = 70

const allIcons = skillsCategories.flatMap((cat) =>
  cat.items.map((item) => item.icon)
)

function randomIcon() {
  return allIcons[Math.floor(Math.random() * allIcons.length)]
}

export function InteractiveGrid() {
  const highlightRef = useRef<HTMLDivElement>(null)
  const cellKeyRef = useRef("")
  const [hoveredCell, setHoveredCell] = useState<{
    x: number
    y: number
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  } | null>(null)

  useEffect(() => {
    const el = highlightRef.current
    if (!el) return
    const container = el.parentElement
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left + container.scrollLeft
      const y = e.clientY - rect.top + container.scrollTop
      const cellX = Math.floor(x / CELL_SIZE) * CELL_SIZE
      const cellY = Math.floor(y / CELL_SIZE) * CELL_SIZE

      el.style.transform = `translate(${cellX}px, ${cellY}px)`
      el.style.opacity = "1"

      const key = `${cellX}-${cellY}`
      if (key !== cellKeyRef.current) {
        cellKeyRef.current = key
        setHoveredCell({ x: cellX, y: cellY, Icon: randomIcon() })
      }
    }

    const handleMouseLeave = () => {
      el.style.opacity = "0"
      cellKeyRef.current = ""
      setHoveredCell(null)
    }

    container.addEventListener("mousemove", handleMouseMove)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
      container.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <>
      <div
        ref={highlightRef}
        className="pointer-events-none absolute top-0 left-0 z-0 transition-opacity duration-150"
        style={{
          width: CELL_SIZE,
          height: CELL_SIZE,
          opacity: 0,
          background: "oklch(0% 0 0 / 0.07)",
        }}
      />
      {hoveredCell && (
        <div
          key={cellKeyRef.current}
          className="pointer-events-none absolute z-0 flex items-center justify-center animate-[fadeIn_0.2s_ease-out_forwards]"
          style={{
            left: hoveredCell.x,
            top: hoveredCell.y,
            width: CELL_SIZE,
            height: CELL_SIZE,
          }}
        >
          <hoveredCell.Icon width={36} height={36} style={{ opacity: 0.15 }} />
        </div>
      )}
    </>
  )
}
