"use client"

import Link from "next/link"
import { ArrowUpRight, Github, Linkedin, Mail, CalendarDays, FileText, Terminal, Zap, CircuitBoard, Radio } from "lucide-react"
import { motion } from "framer-motion"

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
          <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-slate-400" aria-label="Social and contact links">
            <a href="https://github.com/mtalhak003" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" title="GitHub" className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/20 bg-white/5 transition hover:border-cyan-300/60 hover:text-cyan-300"><Github className="h-5 w-5" /></a>
            <a href="https://www.linkedin.com/in/muhammad-talha-khan-730b783aa" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" title="LinkedIn" className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/20 bg-white/5 transition hover:border-cyan-300/60 hover:text-cyan-300"><Linkedin className="h-5 w-5" /></a>
            <a href="mailto:mtalhak9753@gmail.com" aria-label="Email me" title="Email" className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/20 bg-white/5 transition hover:border-cyan-300/60 hover:text-cyan-300"><Mail className="h-5 w-5" /></a>
          </div>
          <div className="mb-7 flex flex-wrap gap-3">
            <a href="https://calendly.com/mtalhak9753/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"><CalendarDays className="h-4 w-4" /> Book a Meeting <ArrowUpRight className="h-4 w-4" /></a>
            <Link href="/documents/mtalha-khan-resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/40 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:bg-white/10"><FileText className="h-4 w-4" /> View Resume</Link>
          </div>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-cyan-300/15 pt-5">
            <div className="flex items-baseline gap-2"><span className="text-2xl font-bold tracking-tight text-cyan-300">1+</span><span className="text-sm font-medium text-slate-300">Year Experience</span></div>
            <div className="flex items-baseline gap-2"><span className="text-2xl font-bold tracking-tight text-cyan-300">35+</span><span className="text-sm font-medium text-slate-300">Projects Done</span></div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, delay: .15 }}
          className="relative mx-auto w-full max-w-[450px] pt-4 lg:pt-0" aria-label="Portrait of Muhammad Talha Khan">
          <div className="pointer-events-none absolute inset-x-[12%] top-[14%] h-[55%] rounded-full bg-cyan-500/10 blur-[90px]" aria-hidden="true" />
          <div className="relative mx-auto w-full max-w-[410px]">
            <img
              src="/images/talha-studio.svg"
              alt="Muhammad Talha Khan in a white outfit against a dark blue studio background"
              width={520}
              height={760}
              loading="eager"
              decoding="async"
              className="relative block h-auto w-full"
              style={{
                maskImage: "radial-gradient(ellipse 75% 76% at 50% 46%, black 57%, transparent 100%)",
                WebkitMaskImage: "radial-gradient(ellipse 75% 76% at 50% 46%, black 57%, transparent 100%)",
              }}
            />
          </div>
          <div className="relative z-10 mx-auto -mt-8 grid max-w-[405px] grid-cols-3 gap-2 rounded-xl border border-cyan-300/15 bg-[#101b30]/85 p-3 text-center shadow-[0_15px_40px_rgba(0,0,0,.3)] backdrop-blur-md sm:-mt-12 sm:p-4">
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
