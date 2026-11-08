"use client"

import Link from "next/link"
import { ArrowDown, ArrowUpRight, Cpu, Github, Linkedin, Mail, CalendarDays, FileText, Terminal, Zap, CircuitBoard, Radio } from "lucide-react"
import { motion } from "framer-motion"

const signals = [
  "M0 90 H150 V165 H325 V105 H490 V180 H720 V95 H900",
  "M0 215 H100 V265 H270 V205 H465 V290 H690 V235 H900",
  "M0 350 H190 V315 H365 V380 H545 V320 H745 V365 H900",
  "M0 465 H130 V420 H285 V495 H470 V435 H665 V490 H900",
]
const nodes = [
  [150,165],[325,105],[490,180],[100,265],[270,205],[465,290],
  [190,315],[365,380],[545,320],[130,420],[285,495],[665,490]
]

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[min(850px,100svh)] items-center overflow-hidden bg-[#070d1b] px-4 pb-24 pt-32 text-white md:min-h-[760px] md:pb-28 md:pt-36">
      <div className="pointer-events-none absolute inset-0 opacity-70" aria-hidden="true"
        style={{ backgroundImage: "linear-gradient(rgba(72,101,149,.10) 1px, transparent 1px), linear-gradient(90deg, rgba(72,101,149,.10) 1px, transparent 1px)", backgroundSize: "48px 48px", maskImage: "linear-gradient(to bottom, black, transparent 95%)" }} />
      <div className="pointer-events-none absolute -right-24 top-16 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[95px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-[350px] w-[400px] rounded-full bg-violet-600/10 blur-[90px]" aria-hidden="true" />
      <div className="container relative z-10 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-6">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/5 px-4 py-2 text-xs font-semibold uppercase tracking-[.2em] text-cyan-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" /> Embedded systems · Firmware · Edge AI
          </div>
          <p className="mb-4 font-mono text-sm text-slate-400"><span className="text-emerald-400">&gt;</span> initialize_engineer_profile()</p>
          <h1 className="mb-5 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">Muhammad<br className="hidden sm:block" /> Talha Khan.</span>
          </h1>
          <h2 className="mb-6 max-w-2xl text-2xl font-semibold text-slate-100 sm:text-3xl">
            Embedded Systems <span className="text-cyan-300">&amp;</span> Firmware Engineer
          </h2>
          <p className="mb-8 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            I develop systems where hardware meets intelligent software: microcontrollers, firmware testing,
            connected devices, real-time sensing, and edge AI. From the ESP32 to ARM and RISC-V,
            I enjoy building dependable engineering solutions.
          </p>
          <div className="mb-9 flex flex-wrap gap-3">
            <Link href="/#featured" className="group inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">
              Explore My Work <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
            <Link href="/about#experience" className="inline-flex items-center gap-2 rounded-xl border border-slate-600 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-cyan-300/70 hover:bg-white/10">
              My Experience <ArrowDown className="h-4 w-4" />
            </Link>
            <Link href="/documents/mtalha-khan-resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-slate-600 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-300/70 hover:bg-white/10"><FileText className="h-4 w-4" /> View Resume</Link>
            <a href="https://calendly.com/mtalhak9753/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/40 bg-cyan-300/10 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-300/20"><CalendarDays className="h-4 w-4" /> Book a Meeting <ArrowUpRight className="h-4 w-4" /></a>
          </div>
          <div className="flex flex-wrap items-center gap-5 text-sm text-slate-400">
            <a href="https://github.com/mtalhak003" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="inline-flex items-center gap-2 transition hover:text-cyan-300"><Github className="h-5 w-5" /> GitHub</a>
            <a href="https://www.linkedin.com/in/muhammad-talha-khan-730b783aa" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="inline-flex items-center gap-2 transition hover:text-cyan-300"><Linkedin className="h-5 w-5" /> LinkedIn</a>
            <a href="mailto:mtalhak9753@gmail.com" className="inline-flex items-center gap-2 transition hover:text-cyan-300"><Mail className="h-5 w-5" /> Contact</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, delay: .15 }}
          className="relative mx-auto w-full max-w-[520px]" aria-label="Animated embedded circuit diagram">
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-gradient-to-br from-[#101d35] via-[#0b162a] to-[#090e1d] shadow-[0_0_100px_rgba(34,211,238,.08)]">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 900 600" preserveAspectRatio="xMidYMid meet" fill="none" aria-hidden="true">
              {signals.map((line, i) => (
                <g key={i}>
                  <path d={line} stroke="#0e7490" strokeWidth="2.5" opacity=".5" />
                  <path d={line} stroke="#67e8f9" strokeWidth="3" strokeLinecap="round" pathLength="100"
                    strokeDasharray="7 93" className="circuit-signal"
                    style={{ animationDelay: `-${i * 1.1}s`, animationDuration: `${5+i * .8}s` }} />
                </g>
              ))}
              {nodes.map(([x,y],i) => <circle key={i} cx={x} cy={y} r="5" fill="#67e8f9" opacity=".8" />)}
              <circle cx="455" cy="300" r="148" stroke="#22d3ee" opacity=".09" />
              <circle cx="455" cy="300" r="185" stroke="#22d3ee" opacity=".07" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex h-44 w-44 flex-col items-center justify-center rounded-3xl border border-cyan-300/50 bg-[#0a1b2b]/95 shadow-[0_0_65px_rgba(34,211,238,.2)] sm:h-52 sm:w-52">
                <div className="absolute -inset-3 rounded-[2rem] border border-dashed border-cyan-500/20" />
                <Cpu className="mb-3 h-14 w-14 text-cyan-300" strokeWidth={1.3} />
                <span className="font-mono text-base font-bold tracking-widest text-white">EMBEDDED</span>
                <span className="mt-1 font-mono text-xs text-cyan-300">SYSTEMS / FW</span>
              </div>
            </div>
            <div className="absolute left-5 top-5 rounded-lg border border-cyan-300/20 bg-[#071221]/80 px-3 py-2 font-mono text-[11px] text-cyan-300"><span className="animate-pulse">●</span> SYSTEM ONLINE</div>
            <div className="absolute bottom-5 right-5 rounded-lg border border-cyan-300/20 bg-[#071221]/80 px-3 py-2 font-mono text-[11px] text-slate-300">ARM · RISC-V · ESP32</div>
          </div>
          <div className="absolute -bottom-5 left-4 right-4 grid grid-cols-3 gap-2 rounded-xl border border-white/10 bg-[#101b30]/95 p-3 text-center shadow-2xl backdrop-blur sm:left-8 sm:right-8 sm:p-4">
            <div><CircuitBoard className="mx-auto mb-1 h-5 w-5 text-cyan-300" /><span className="text-[11px] text-slate-300 sm:text-xs">Firmware</span></div>
            <div><Radio className="mx-auto mb-1 h-5 w-5 text-violet-300" /><span className="text-[11px] text-slate-300 sm:text-xs">IoT Systems</span></div>
            <div><Zap className="mx-auto mb-1 h-5 w-5 text-emerald-300" /><span className="text-[11px] text-slate-300 sm:text-xs">Edge AI</span></div>
          </div>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute bottom-3 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-xs tracking-[.2em] text-slate-500 md:flex" aria-hidden="true"><Terminal className="h-4 w-4" /> SCROLL TO EXPLORE</div>
    </section>
  )
}
