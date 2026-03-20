import { Sidebar } from "@/components/sidebar"
import { NavTabs } from "@/components/nav-tabs"
import { InteractiveGrid } from "@/components/interactive-grid"

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative bg-background bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] 2xl:px-80 mx-auto min-h-screen flex flex-col lg:flex-row tracking-wide">
      <InteractiveGrid />
      <Sidebar />
      <main className="relative z-10 flex-1 p-4">
        <div className="rounded-base text-main-foreground border-2 border-border bg-main shadow-shadow p-4 lg:p-8 min-h-[calc(100vh-2rem)]">
          <NavTabs />
          {children}
        </div>
      </main>
    </div>
  )
}
