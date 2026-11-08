import { ProjectCatalog } from "@/components/project-catalog"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { AnimatedSection, AnimatedGradientBackground } from "@/components/client-animations"

export default function AboutPage() {
  return (
    <main className="portfolio-theme min-h-screen bg-[#081121] text-slate-100">
      <Navbar />
      <header className="relative overflow-hidden bg-[#091428] px-4 pb-16 pt-32 text-white">
        <div className="container mx-auto max-w-6xl">
          <p className="mb-3 font-mono text-sm uppercase tracking-[.2em] text-cyan-300">Engineering background</p>
          <h1 className="mb-5 text-4xl font-bold md:text-5xl">About, Experience & Projects</h1>
          <p className="max-w-2xl leading-8 text-slate-300">Explore my professional journey, embedded systems and AI experience, technical skills, education, and detailed project portfolio.</p>
          <nav aria-label="About page sections" className="mt-7 flex flex-wrap gap-3 text-sm">
            <a className="rounded-full border border-cyan-400/30 px-4 py-2 hover:bg-[#102139]/10" href="#about">About Me</a>
            <a className="rounded-full border border-cyan-400/30 px-4 py-2 hover:bg-[#102139]/10" href="#experience">Experience</a>
            <a className="rounded-full border border-cyan-400/30 px-4 py-2 hover:bg-[#102139]/10" href="#projects">Projects</a>
            <a className="rounded-full border border-cyan-400/30 px-4 py-2 hover:bg-[#102139]/10" href="#skills">Technical Skills</a>
            <a className="rounded-full border border-cyan-400/30 px-4 py-2 hover:bg-[#102139]/10" href="#education">Education</a>
          </nav>
        </div>
      </header>
      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-[#102139] relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-4">
                <p className="text-lg text-slate-300 dark:text-gray-300">
                  I'm a Computer Systems Engineering graduate from UET Peshawar, focused on embedded systems
                  and edge AI. I build systems that combine sensors, hardware, and machine learning to solve
                  real-world problems.
                </p>
                <p className="text-lg text-slate-300 dark:text-gray-300">
                  My core strength is designing and deploying computer vision and edge inference pipelines
                  on constrained hardware, from ESP32 sensor nodes to Raspberry Pi-based edge devices, backed
                  by research experience at the Secured IoT Devices (SID) Lab.
                </p>
                <p className="text-lg text-slate-300 dark:text-gray-300">
                  Alongside embedded and AI work, I build full-stack web applications and automation
                  workflows using n8n, Zapier, and Make.com, integrating LLM APIs into practical, client-facing
                  tools.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.4}>
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Expertise</h3>
                <ul className="space-y-2">
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-cyan-300 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-slate-300 dark:text-gray-300">
                      Embedded Systems & Sensor Node Design
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-cyan-300 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-slate-300 dark:text-gray-300">Edge AI & On-Device Inference</span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-cyan-300 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-slate-300 dark:text-gray-300">Computer Vision (YOLOv11, RF-DETR)</span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-cyan-300 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-slate-300 dark:text-gray-300">Full-Stack Web Development</span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-cyan-300 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-slate-300 dark:text-gray-300">Workflow Automation (n8n, Zapier, Make.com)</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section id="experience" className="relative overflow-hidden bg-[#0b1325] px-4 py-20 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" style={{ backgroundImage: "linear-gradient(rgba(60,170,210,.12) 1px, transparent 1px),linear-gradient(90deg,rgba(60,170,210,.12) 1px,transparent 1px)", backgroundSize: "52px 52px" }} />
        <div className="container relative z-10 mx-auto max-w-6xl">
          <AnimatedSection>
            <p className="mb-3 text-center font-mono text-xs font-semibold uppercase tracking-[.2em] text-cyan-300">Career timeline</p>
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">Professional Experience & Leadership</h2>
            <p className="mx-auto mb-14 max-w-2xl text-center text-slate-300">Research, real-world development, technical leadership, and hands-on embedded systems work.</p>
          </AnimatedSection>
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute bottom-8 left-[17px] top-7 w-px bg-gradient-to-b from-cyan-400 via-violet-400 to-transparent md:left-[23px]" aria-hidden="true" />
            {[
              { role: "Research Assistant", organization: "Secured IoT Devices (SID) Lab", period: "2025 – Present", area: "Embedded AI & Research", details: ["Research on edge AI and computer vision for IoT deployments, including work contributing to conference-level academic research.", "Development and evaluation of detection models for practical sensing applications."] },
              { role: "Freelance Developer", organization: "Self-Employed", period: "2024 – Present", area: "Software & Automation", details: ["Developed websites and automation workflows for clients, including online-booking integration for dental practice websites.", "Built automation workflows using n8n, Zapier, Make.com, LLM APIs, WhatsApp, and database integrations."] },
              { role: "Embedded Systems Lead", organization: "Google Developer Groups on Campus (GDGoC)", period: "2023 – July 2026", area: "Embedded Leadership", details: ["Led embedded systems initiatives and guided peers working on hardware and IoT projects."] },
              { role: "Director of Operations", organization: "Computer Society, UET Peshawar", period: "2023 – July 2026", area: "Technical Operations", details: ["Coordinated operations for student society events and technical initiatives."] },
            ].map((item, index) => (
              <AnimatedSection key={item.role} delay={index * .1}>
                <div className="relative mb-6 pl-12 md:pl-16">
                  <div className="absolute left-[9px] top-8 h-[17px] w-[17px] rounded-full border-4 border-[#0b1325] bg-cyan-300 shadow-[0_0_0_2px_rgba(103,232,249,.4),0_0_20px_rgba(34,211,238,.3)] md:left-[15px]" aria-hidden="true" />
                  <div className="rounded-2xl border border-white/10 bg-[#121f35]/90 p-6 shadow-xl transition-colors hover:border-cyan-300/40 md:p-7">
                    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[.15em] text-cyan-300">{item.area}</p>
                        <h3 className="text-xl font-bold md:text-2xl">{item.role}</h3>
                        <p className="mt-1 font-medium text-slate-300">{item.organization}</p>
                      </div>
                      <span className="w-fit shrink-0 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 font-mono text-xs text-cyan-200">{item.period}</span>
                    </div>
                    <ul className="list-disc space-y-2 pl-5 leading-relaxed text-slate-300">
                      {item.details.map(detail => <li key={detail}>{detail}</li>)}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Categorized portfolio projects */}
      <ProjectCatalog />

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-[#091426] relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <AnimatedSection direction="up" delay={0.2}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#12233b]/90 bg-[#12233b]/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-cyan-400/10 dark:bg-[#12233b] flex items-center justify-center mr-2">
                      <span className="text-cyan-300 text-cyan-200 text-sm font-bold">EMB</span>
                    </span>
                    Embedded Systems & Edge AI
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-cyan-400/10 dark:hover:bg-[#12233b]/50 transition-colors">
                      ESP32
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-cyan-400/10 dark:hover:bg-[#12233b]/50 transition-colors">
                      Raspberry Pi
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-cyan-400/10 dark:hover:bg-[#12233b]/50 transition-colors">
                      SPI/I2C
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-cyan-400/10 dark:hover:bg-[#12233b]/50 transition-colors">
                      Edge Inference
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-cyan-400/10 dark:hover:bg-[#12233b]/50 transition-colors">
                      Sensor Integration
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-cyan-400/10 dark:hover:bg-[#12233b]/50 transition-colors">
                      Firebase
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-cyan-400/10 dark:hover:bg-[#12233b]/50 transition-colors">
                      IoT Networking
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-cyan-400/10 dark:hover:bg-[#12233b]/50 transition-colors">
                      Actuator Control
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#12233b]/90 bg-[#12233b]/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-cyan-400/10 dark:bg-[#12233b] flex items-center justify-center mr-2">
                      <span className="text-cyan-300 text-cyan-200 text-sm font-bold">AI</span>
                    </span>
                    AI & Computer Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-cyan-400/10 dark:hover:bg-[#12233b]/50 transition-colors">
                      YOLOv11
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-cyan-400/10 dark:hover:bg-[#12233b]/50 transition-colors">
                      RF-DETR
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-cyan-400/10 dark:hover:bg-[#12233b]/50 transition-colors">
                      OpenCV
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-cyan-400/10 dark:hover:bg-[#12233b]/50 transition-colors">
                      TensorFlow
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-cyan-400/10 dark:hover:bg-[#12233b]/50 transition-colors">
                      PyTorch
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-cyan-400/10 dark:hover:bg-[#12233b]/50 transition-colors">
                      NLP
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-cyan-400/10 dark:hover:bg-[#12233b]/50 transition-colors">
                      Object Detection
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-cyan-400/10 dark:hover:bg-[#12233b]/50 transition-colors">
                      Model Deployment
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatedSection direction="up" delay={0.4}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#12233b]/90 bg-[#12233b]/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-cyan-400/10 dark:bg-[#12233b] flex items-center justify-center mr-2">
                      <span className="text-cyan-300 text-cyan-200 text-sm font-bold">WEB</span>
                    </span>
                    Web Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-cyan-400/10 dark:hover:bg-[#12233b]/50 transition-colors">
                      JavaScript
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-cyan-400/10 dark:hover:bg-[#12233b]/50 transition-colors">
                      Next.js
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-cyan-400/10 dark:hover:bg-[#12233b]/50 transition-colors">
                      React
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-cyan-400/10 dark:hover:bg-[#12233b]/50 transition-colors">
                      Node.js
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-cyan-400/10 dark:hover:bg-[#12233b]/50 transition-colors">
                      REST APIs
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-cyan-400/10 dark:hover:bg-[#12233b]/50 transition-colors">
                      HTML/CSS
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-cyan-400/10 dark:hover:bg-[#12233b]/50 transition-colors">
                      Git/GitHub
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-cyan-400/10 dark:hover:bg-[#12233b]/50 transition-colors">
                      Full-Stack Dev
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.5}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#12233b]/90 bg-[#12233b]/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-cyan-400/10 dark:bg-[#12233b] flex items-center justify-center mr-2">
                      <span className="text-cyan-300 text-cyan-200 text-sm font-bold">OPS</span>
                    </span>
                    Automation & Integration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-cyan-400/10 dark:hover:bg-[#12233b]/50 transition-colors">
                      n8n
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-cyan-400/10 dark:hover:bg-[#12233b]/50 transition-colors">
                      Zapier
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-cyan-400/10 dark:hover:bg-[#12233b]/50 transition-colors">
                      Make.com
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-cyan-400/10 dark:hover:bg-[#12233b]/50 transition-colors">
                      LLM APIs
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-cyan-400/10 dark:hover:bg-[#12233b]/50 transition-colors">
                      WhatsApp Integration
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-cyan-400/10 dark:hover:bg-[#12233b]/50 transition-colors">
                      Firebase
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-cyan-400/10 dark:hover:bg-[#12233b]/50 transition-colors">
                      Docker
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2 hover:bg-cyan-400/10 dark:hover:bg-[#12233b]/50 transition-colors">
                      Cloud Platforms
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          {/* Additional Skills Tags */}
          <AnimatedSection delay={0.6}>
            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold mb-6">Additional Technologies</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="outline" className="px-4 py-2 text-sm bg-[#102139] dark:bg-[#12233b]/20 border-cyan-400/20 dark:border-cyan-300/20 hover:bg-cyan-400/10 dark:hover:bg-[#12233b]/40 transition-colors">
                  Python
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-sm bg-[#12233b] dark:bg-[#12233b]/20 border-cyan-400/20 dark:border-cyan-300/20 hover:bg-cyan-400/10 dark:hover:bg-[#12233b]/40 transition-colors">
                  C/C++
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-sm bg-[#12233b] dark:bg-[#12233b]/20 border-cyan-400/20 dark:border-cyan-300/20 hover:bg-cyan-400/10 dark:hover:bg-[#12233b]/40 transition-colors">
                  Hugging Face
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-sm bg-[#12233b] dark:bg-[#12233b]/20 border-cyan-400/20 dark:border-cyan-300/20 hover:bg-cyan-400/10 dark:hover:bg-[#12233b]/40 transition-colors">
                  MongoDB
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-sm bg-[#12233b] dark:bg-[#12233b]/20 border-cyan-400/20 dark:border-cyan-300/20 hover:bg-cyan-400/10 dark:hover:bg-[#12233b]/40 transition-colors">
                  PostgreSQL
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-sm bg-[#12233b] dark:bg-[#12233b]/20 border-cyan-400/20 dark:border-cyan-300/20 hover:bg-cyan-400/10 dark:hover:bg-[#12233b]/40 transition-colors">
                  Postman
                </Badge>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="py-16 px-4 bg-[#102139] bg-[#12233b] relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Education & Certifications</h2>
          </AnimatedSection>

          <div className="mb-12">
            <AnimatedSection direction="left" delay={0.2}>
              <h3 className="text-2xl font-bold mb-6">Education</h3>
              <div className="bg-[#0b1628] bg-[#162a45] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold">BSc, Computer Systems Engineering</h4>
                    <p className="text-cyan-300 text-cyan-300">
                      University of Engineering and Technology (UET) Peshawar
                    </p>
                  </div>
                  <p className="text-slate-300 text-slate-400 mt-2 md:mt-0">2022 - 2026</p>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Relevant Courses:</h5>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="animate-pulse">
                      Embedded Systems
                    </Badge>
                    <Badge variant="secondary">Digital Signal Processing</Badge>
                    <Badge variant="secondary" className="animate-pulse">
                      Machine Learning
                    </Badge>
                    <Badge variant="secondary">Computer Vision</Badge>
                    <Badge variant="secondary" className="animate-pulse">
                      Microprocessor Systems
                    </Badge>
                    <Badge variant="secondary">Data Structures & Algorithms</Badge>
                    <Badge variant="secondary" className="animate-pulse">
                      Computer Networks
                    </Badge>
                    <Badge variant="secondary">Database Systems</Badge>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div>
            <AnimatedSection direction="right" delay={0.3}>
              <h3 className="text-2xl font-bold mb-6">Certifications & Awards</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#0b1628] bg-[#162a45] rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="font-semibold">HCIA-AI - Huawei</h4>
                  <p className="text-slate-300 text-slate-400">Foundations of AI theory, algorithms, and Huawei AI development frameworks</p>
                </div>
                <div className="bg-[#0b1628] bg-[#162a45] rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="font-semibold">JavaScript IT Specialist - Pearson</h4>
                  <p className="text-slate-300 text-slate-400">
                    Core JavaScript programming and web development fundamentals
                  </p>
                </div>
                <div className="bg-[#0b1628] bg-[#162a45] rounded-lg p-4 md:col-span-2 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="font-semibold">1st Place - UET FYP Exhibition 2026</h4>
                  <p className="text-slate-300 text-slate-400">Won for LeafPulse, an AIoT smart greenhouse system</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>


      <footer className="bg-[#091428] px-4 py-8 text-center text-sm text-slate-300">
        <p>© {new Date().getFullYear()} Muhammad Talha Khan</p>
        <Link className="mt-2 inline-block text-cyan-300 hover:underline" href="/">Back to homepage</Link>
      </footer>
    </main>
  )
}
