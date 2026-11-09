import { PortfolioFooter } from "@/components/portfolio-footer"
import { HomeCollaborate } from "@/components/home-collaborate"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { TechnologyStrip } from "@/components/technology-strip"
import { HomeFeaturedWork } from "@/components/home-featured-work"

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
      <HomeCollaborate />
      <PortfolioFooter />

    </div>
  )
}
