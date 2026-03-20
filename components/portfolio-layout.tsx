"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { MainContent } from "@/components/main-content"

export function PortfolioLayout() {
  const [activeTab, setActiveTab] = useState("about")

  return (
    <div className="bg-background bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] 2xl:px-80 mx-auto min-h-screen flex flex-col lg:flex-row tracking-wide">
      <Sidebar onContactClick={() => setActiveTab("contact")} />
      <MainContent activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  )
}
