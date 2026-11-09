import { PortfolioFooter } from "@/components/portfolio-footer"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Cpu, CircuitBoard } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { ProjectCatalog } from "@/components/project-catalog"

export const metadata = {
  title: "Engineering Work & Projects | Muhammad Talha Khan",
  description: "Explore embedded systems, firmware testing, edge AI, IoT and software engineering projects by Muhammad Talha Khan.",
}

export default function WorkPage() {
  return (
    <main className="portfolio-theme min-h-screen bg-[#081121] text-slate-100">
      <Navbar />
      <header className="relative overflow-hidden border-b border-cyan-300/15 bg-[#091428] px-4 pb-14 pt-32 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" style={{ backgroundImage: "linear-gradient(rgba(103,232,249,.08) 1px, transparent 1px), linear-gradient(90deg,rgba(103,232,249,.08) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="container relative mx-auto max-w-6xl">
          <p className="mb-3 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[.2em] text-cyan-300"><CircuitBoard className="h-4 w-4" /> Engineering portfolio</p>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Work & Projects</h1>
          <p className="max-w-3xl leading-8 text-slate-300">Explore my firmware development, embedded verification, connected systems, computer vision, and software projects. Embedded & Firmware appears first; the full archive is available under All Projects.</p>
          <div className="mt-7 flex flex-wrap gap-3 text-sm">
            <Link href="/#featured" className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/30 px-4 py-2 text-cyan-200 hover:bg-white/10"><ArrowLeft className="h-4 w-4" /> Home featured work</Link>
            <Link href="/about#experience" className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/30 px-4 py-2 text-cyan-200 hover:bg-white/10">Professional background <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </header>
      <ProjectCatalog />
      <PortfolioFooter />
    </main>
  )
}
