import { PortfolioFooter } from "@/components/portfolio-footer"
import { HomeCollaborate } from "@/components/home-collaborate"
import { Github, Linkedin, Mail, CalendarDays, ArrowUpRight, FileText } from "lucide-react"
import Link from "next/link"
import { ContactForm } from "@/components/contact-form"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { TechnologyStrip } from "@/components/technology-strip"
import { HomeFeaturedWork } from "@/components/home-featured-work"
import { AnimatedSection } from "@/components/client-animations"

export default function Home() {
  return (
    <div className="portfolio-theme min-h-screen bg-[#081121] text-slate-100">
      <Navbar />
      <HeroSection />
      <TechnologyStrip />
      <HomeFeaturedWork />
      <section className="bg-[#0d1930] px-4 py-16 text-center text-white">
        <div className="container mx-auto max-w-3xl">
          <p className="mb-3 font-mono text-sm uppercase tracking-[.2em] text-cyan-300 text-cyan-300">More about my work</p>
          <h2 className="mb-4 text-3xl font-bold">Explore My Engineering Background</h2>
          <p className="mb-7 leading-8 text-slate-300 text-slate-300">View my professional experience at the SID Lab, engineering leadership, technical expertise, education, and leadership experience. Browse the Work page for the complete project portfolio.</p>
          <Link href="/about" className="inline-flex rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300">About, Experience & Education</Link>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-[#081121] relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-cyan-300 mr-3" />
                    <a
                      href="mailto:mtalhak9753@gmail.com"
                      className="text-slate-300 text-slate-300 hover:text-cyan-300 dark:hover:text-cyan-300 transition-colors"
                    >
                      mtalhak9753@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <Linkedin className="w-5 h-5 text-cyan-300 mr-3" />
                    <a
                      href="https://linkedin.com/in/muhammad-talha-khan-730b783aa"
                      target="_blank"
                      className="text-slate-300 text-slate-300 hover:text-cyan-300 dark:hover:text-cyan-300 transition-colors"
                      rel="noreferrer"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <Github className="w-5 h-5 text-cyan-300 mr-3" />
                    <a
                      href="https://github.com/mtalhak003"
                      target="_blank"
                      className="text-slate-300 text-slate-300 hover:text-cyan-300 dark:hover:text-cyan-300 transition-colors"
                      rel="noreferrer"
                    >
                      GitHub Profile
                    </a>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-slate-300">
                    I'm always open to discussing embedded systems, firmware roles, research opportunities, or collaborations.
                    Send a message or book a 30-minute meeting.
                  </p>
                </div>
                <div className="rounded-2xl border border-cyan-300/20 bg-[#12233b] p-5">
                  <div className="mb-2 flex items-center gap-2 text-cyan-300">
                    <CalendarDays className="h-5 w-5" />
                    <h4 className="font-semibold text-white">Schedule a conversation</h4>
                  </div>
                  <p className="mb-4 text-sm leading-6 text-slate-300">
                    Choose a convenient time for a 30-minute discussion about engineering projects, opportunities, or collaboration.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href="https://calendly.com/mtalhak9753/30min" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-[#081121] transition hover:bg-cyan-300">
                      <CalendarDays className="h-4 w-4" /> Book a Meeting <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <a href="/documents/mtalha-khan-resume.pdf" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/30 px-4 py-2.5 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-300/10">
                      <FileText className="h-4 w-4" /> View Resume
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.3}>
              <div className="bg-[#12233b] rounded-lg border border-cyan-300/15 p-6 shadow-lg">
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <HomeCollaborate />
      <PortfolioFooter />

    </div>
  )
}
