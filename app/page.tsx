import { Github, Linkedin, Mail } from "lucide-react"
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
                  <p className="text-slate-300 text-slate-300">
                    I'm always open to discussing new projects, research opportunities, or collaborations.
                    Feel free to reach out!
                  </p>
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

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#070d1b] text-white relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">Muhammad Talha Khan</h2>
              <p className="text-slate-400">Embedded Systems & Firmware Engineer</p>
            </div>
            <div className="flex space-x-4">
              <Link
                href="https://linkedin.com/in/muhammad-talha-khan-730b783aa"
                target="_blank"
                className="text-slate-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://github.com/mtalhak003"
                target="_blank"
                className="text-slate-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:mtalhak9753@gmail.com"
                className="text-slate-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center text-slate-400 text-sm">
            <p>© {new Date().getFullYear()} Muhammad Talha Khan. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  )
}
