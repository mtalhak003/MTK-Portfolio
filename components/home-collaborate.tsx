import Link from "next/link"
import { CalendarDays, Mail, ArrowUpRight } from "lucide-react"

export function HomeCollaborate() {
  return (
    <section aria-labelledby="collaborate-title" className="bg-[#081121] px-4 pb-20 pt-8 sm:pb-24">
      <div className="container mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/10 bg-gradient-to-r from-[#192332] via-[#111a27] to-[#080e18] px-7 py-12 shadow-[0_18px_50px_rgba(0,0,0,.28)] sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full bg-cyan-400/5 blur-[65px]" aria-hidden="true" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            <div className="max-w-[690px]">
              <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[.18em] text-cyan-300">Let's collaborate</p>
              <h2 id="collaborate-title" className="mb-4 text-3xl font-bold leading-tight text-slate-100 sm:text-4xl">Have a Hardware or Systems Project in Mind?</h2>
              <p className="max-w-[630px] text-base leading-7 text-slate-400">Whether you need embedded firmware, FPGA and digital design, IoT systems, edge AI, or a custom web application, feel free to get in touch.</p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3 lg:justify-end">
              <Link href="/#contact" className="inline-flex min-w-[156px] items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-[#06121c] transition hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"><Mail className="h-4 w-4" /> Send Message</Link>
              <a href="https://calendly.com/mtalhak9753/30min" target="_blank" rel="noopener noreferrer" className="inline-flex min-w-[168px] items-center justify-center gap-2 rounded-xl border border-slate-500/20 bg-[#263142] px-6 py-3.5 font-semibold text-slate-200 transition hover:border-cyan-300/40 hover:bg-[#303d50]"><CalendarDays className="h-4 w-4" /> Schedule Call <ArrowUpRight className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
