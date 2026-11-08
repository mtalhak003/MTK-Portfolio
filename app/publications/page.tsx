import Link from "next/link"
import { ArrowUpRight, BookOpen, FileText, Microscope } from "lucide-react"
import { Navbar } from "@/components/navbar"

export const metadata = {
  title: "Research & Publications | Muhammad Talha Khan",
  description: "Research and scholarly work in computer vision, edge AI, and embedded IoT systems by Muhammad Talha Khan.",
}

export default function PublicationsPage() {
  return (
    <main className="portfolio-theme min-h-screen bg-[#081121] text-slate-100">
      <Navbar />
      <header className="relative overflow-hidden border-b border-cyan-300/15 bg-[#091428] px-4 pb-16 pt-32">
        <div className="container mx-auto max-w-6xl">
          <p className="mb-3 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[.2em] text-cyan-300"><BookOpen className="h-4 w-4" /> Research & scholarly work</p>
          <h1 className="mb-5 text-4xl font-bold text-white md:text-5xl">Publications & Research</h1>
          <p className="max-w-3xl leading-8 text-slate-300">Research interests include computer vision for agriculture, embedded AI, IoT systems, and reliable firmware testing. The status of each scholarly work is clearly identified below.</p>
        </div>
      </header>
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl space-y-7">
          <article className="rounded-2xl border border-cyan-300/20 bg-[#12233b] p-6 shadow-xl md:p-8">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1.5 text-xs font-semibold text-amber-200"><FileText className="h-4 w-4" /> Submitted · Not yet published</span>
              <span className="text-sm text-slate-400">ICEAI 2026 submission</span>
            </div>
            <h2 className="mb-3 text-2xl font-bold text-white">ParthAI — Parthenium Weed Detection Using RF-DETR</h2>
            <p className="mb-5 leading-8 text-slate-300">Research developed at the Secured IoT Devices (SID) Lab, applying computer vision and RF-DETR to identifying Parthenium weeds in field imagery. A conference paper related to this work was submitted to ICEAI 2026.</p>
            <div className="mb-6 flex flex-wrap gap-2">
              {["Computer Vision","RF-DETR","Precision Agriculture","Object Detection","Python"].map(tag => <span key={tag} className="rounded-md border border-cyan-300/15 bg-cyan-300/5 px-3 py-1.5 text-xs font-medium text-cyan-100">{tag}</span>)}
            </div>
            <p className="text-sm leading-7 text-slate-400">The submission is listed here as research work, not as an accepted or published paper. A verified citation, DOI, or publisher link can be added when available.</p>
            <Link href="/#featured" className="mt-5 inline-flex items-center gap-2 font-semibold text-cyan-300 hover:text-cyan-200">View the ParthAI project <ArrowUpRight className="h-4 w-4" /></Link>
          </article>
          <div className="flex items-start gap-4 rounded-xl border border-cyan-300/15 bg-[#0d1930] p-6">
            <Microscope className="mt-1 h-6 w-6 shrink-0 text-cyan-300" />
            <div>
              <h2 className="mb-2 text-lg font-semibold text-white">Ongoing research</h2>
              <p className="leading-7 text-slate-300">Further research and verified publication records will be added here as they become available. For engineering implementations, browse the <Link href="/work" className="font-semibold text-cyan-300 hover:underline">project portfolio</Link>.</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="border-t border-cyan-300/15 bg-[#070d1b] px-4 py-8 text-center text-sm text-slate-400">© {new Date().getFullYear()} Muhammad Talha Khan · <Link className="text-cyan-300 hover:underline" href="/about">About & Experience</Link></footer>
    </main>
  )
}
