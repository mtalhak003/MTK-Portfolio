"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Github, Cpu, Sprout, ScanSearch, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const featuredProjects = [
  {
    title: "FIRMAVEX",
    subtitle: "Embedded firmware verification & failure discovery",
    description: "A modular verification environment for embedded firmware, combining architecture emulation, debugging, automated testing, and digital hardware simulation into reproducible workflows.",
    stack: ["Python", "QEMU", "GDB", "ARM Cortex-M3", "RISC-V", "Verilog"],
    category: "Firmware Engineering",
    icon: Cpu,
    gradient: "from-cyan-500/25 via-blue-500/15 to-transparent",
    github: "https://github.com/mtalhak003/FIRMAVEX",
    picture: null,
    number: "01",
  },
  {
    title: "LeafPulse",
    subtitle: "AIoT smart greenhouse",
    description: "An intelligent greenhouse platform integrating ESP32 sensor nodes, Raspberry Pi edge processing, and automated environmental monitoring and control. Awarded first place at the UET FYP Exhibition 2026.",
    stack: ["ESP32", "Raspberry Pi 4", "Edge AI", "IoT", "Firebase"],
    category: "Embedded IoT & Edge AI",
    icon: Sprout,
    gradient: "from-emerald-500/25 via-teal-500/15 to-transparent",
    github: null,
    picture: "/images/leafpulse.png",
    number: "02",
  },
  {
    title: "ParthAI",
    subtitle: "Parthenium weed detection",
    description: "A computer-vision research project using RF-DETR to detect Parthenium weeds in field imagery, developed through research at the SID Lab with a conference-paper submission to ICEAI 2026.",
    stack: ["Python", "RF-DETR", "Computer Vision", "Object Detection"],
    category: "AI & Computer Vision",
    icon: ScanSearch,
    gradient: "from-violet-500/25 via-fuchsia-500/15 to-transparent",
    github: null,
    picture: "/images/parth-ai.png",
    number: "03",
  },
]

export function HomeFeaturedWork() {
  return (
    <section id="featured" className="relative overflow-hidden bg-[#081121] px-4 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-30" style={{ backgroundImage:"linear-gradient(rgba(56,189,248,.10) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,.10) 1px,transparent 1px)",backgroundSize:"46px 46px" }} aria-hidden="true"/>
      <div className="container relative mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 font-mono text-sm uppercase tracking-[.2em] text-cyan-300">Selected engineering work</p>
            <h2 className="text-3xl font-bold md:text-5xl">Featured Projects</h2>
            <p className="mt-4 max-w-xl leading-7 text-slate-300">Three projects that represent my focus on firmware, embedded intelligence, and applied computer vision.</p>
          </div>
          <Link href="/about#projects" className="inline-flex w-fit items-center gap-2 rounded-xl border border-cyan-300/30 px-5 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-300/10">
            All projects <ArrowUpRight className="h-4 w-4"/>
          </Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project,index) => {
            const Icon = project.icon
            return (
              <motion.article key={project.title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity:1, y:0 }} viewport={{ once: true, amount:.15 }} transition={{ delay: index*.12, duration:.45 }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-cyan-100/15 bg-[#121e32] shadow-xl transition-colors hover:border-cyan-300/50">
                <div className={`relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                  {project.picture ? <Image src={project.picture} alt={project.title + " project"} fill className="object-cover transition-transform duration-700 group-hover:scale-105"/> :
                    <div className="relative flex h-32 w-32 items-center justify-center rounded-3xl border border-cyan-300/40 bg-cyan-300/10 shadow-[0_0_80px_rgba(34,211,238,.16)]">
                      <Cpu className="h-16 w-16 text-cyan-300" strokeWidth={1.3}/>
                      <div className="absolute -inset-3 rounded-[2rem] border border-dashed border-cyan-400/20"/>
                    </div>
                  }
                  <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-[#061122]/75 px-3 py-1 font-mono text-xs backdrop-blur">{project.category}</span>
                  <span className="absolute bottom-3 right-4 font-mono text-xs text-white/90">/{project.number}</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="mb-4 mt-1 text-sm font-medium text-cyan-300">{project.subtitle}</p>
                  <p className="mb-5 flex-1 leading-7 text-slate-300">{project.description}</p>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.stack.map(tech => <span key={tech} className="rounded-md border border-slate-600/70 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-200">{tech}</span>)}
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm font-semibold">
                    <Link href="/about#projects" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">Technical details <ArrowRight className="h-4 w-4"/></Link>
                    {project.github && <a href={project.github} rel="noopener noreferrer" target="_blank" className="inline-flex items-center gap-2 text-slate-200 hover:text-white"><Github className="h-4 w-4"/> GitHub <ArrowUpRight className="h-4 w-4"/></a>}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
