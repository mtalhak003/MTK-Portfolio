import Link from "next/link"
import { CalendarDays, Github, Linkedin, Mail, MapPin, ArrowUpRight } from "lucide-react"

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Publications", href: "/publications" },
  { label: "Contact", href: "/#contact" },
]

const expertise = [
  "Embedded Systems & Firmware",
  "Digital Design & FPGA",
  "Hardware Verification",
  "IoT & Connected Devices",
  "AI & Computer Vision",
  "Web Development",
]

export function PortfolioFooter() {
  return (
    <footer className="border-t border-cyan-300/10 bg-[#060c16] px-4 pb-7 pt-14 text-slate-300 sm:pt-16">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_.7fr_1fr_1.15fr] lg:gap-10">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-cyan-300/15 bg-[#0a1726]">
                <img src="/images/talha-cutout.svg" width={48} height={64} alt="" loading="lazy" className="h-full w-full object-cover object-top" />
              </div>
              <div>
                <p className="text-lg font-bold leading-tight text-slate-100">Muhammad Talha Khan</p>
                <p className="mt-1 font-mono text-xs text-slate-400">Embedded Systems & Firmware Engineer</p>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-7 text-slate-400">I build reliable embedded systems, firmware, connected hardware, intelligent vision applications, and practical software solutions.</p>
            <div className="mt-5 flex items-center gap-2">
              <a href="https://github.com/mtalhak003" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[.04] text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-300"><Github className="h-4 w-4" /></a>
              <a href="https://linkedin.com/in/muhammad-talha-khan-730b783aa" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[.04] text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-300"><Linkedin className="h-4 w-4" /></a>
              <a href="mailto:mtalhak9753@gmail.com" aria-label="Email" className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[.04] text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-300"><Mail className="h-4 w-4" /></a>
            </div>
          </div>
          <div>
            <h3 className="mb-5 font-mono text-xs font-bold uppercase tracking-[.16em] text-cyan-300">Quick Navigation</h3>
            <ul className="space-y-3 text-sm text-slate-400">{navigation.map(item => <li key={item.href}><Link href={item.href} className="transition hover:text-cyan-300">{item.label}</Link></li>)}</ul>
          </div>
          <div>
            <h3 className="mb-5 font-mono text-xs font-bold uppercase tracking-[.16em] text-cyan-300">Domains & Expertise</h3>
            <ul className="space-y-3 text-sm leading-6 text-slate-400">{expertise.map(item => <li key={item}>{item}</li>)}</ul>
          </div>
          <div>
            <h3 className="mb-5 font-mono text-xs font-bold uppercase tracking-[.16em] text-cyan-300">Get In Touch</h3>
            <p className="mb-4 text-sm leading-7 text-slate-400">Have an embedded systems challenge, research opportunity, or software project? Let's talk.</p>
            <a className="mb-5 inline-block break-all font-mono text-sm text-cyan-300 transition hover:text-cyan-200" href="mailto:mtalhak9753@gmail.com">mtalhak9753@gmail.com</a>
            <a href="https://calendly.com/mtalhak9753/30min" target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 font-semibold text-[#06121c] transition hover:bg-cyan-300"><CalendarDays className="h-4 w-4" /> Book 1:1 Discussion <ArrowUpRight className="h-4 w-4" /></a>
            <p className="mt-5 flex items-center gap-2 font-mono text-xs text-slate-400"><MapPin className="h-4 w-4 shrink-0 text-cyan-300" /> Peshawar, Pakistan · PKT UTC+5</p>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-xs text-slate-500 sm:text-sm">
          © {new Date().getFullYear()} Muhammad Talha Khan. Built with care for performance & accessibility.
        </div>
      </div>
    </footer>
  )
}
