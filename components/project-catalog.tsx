"use client"
import { useMemo, useState } from "react"
import { ArrowUpRight, Github, Search, Layers, Cpu, Sparkles, ChevronDown, RotateCcw, ArrowRight, Code2, Target } from "lucide-react"

type Project = {
  title: string
  category: string
  description: string
  stack: string[]
  github?: string
  status: string
  featured: boolean
}

const projects: Project[] = [
  { title: "FIRMAVEX", category: "Embedded & Firmware", description: "A modular verification and failure-discovery platform for embedded firmware, integrating architecture emulation, debugging, Verilog simulation, and automated test workflows.", stack: ["Python","PySide6","QEMU","GDB","ARM Cortex-M3","RISC-V","Verilog","Icarus Verilog"], github: "https://github.com/mtalhak003/FIRMAVEX", status: "In development", featured: true },
  { title: "LeafPulse — AIoT Smart Greenhouse", category: "Embedded & Firmware", description: "An intelligent greenhouse system integrating ESP32-based sensing, Raspberry Pi edge processing, and automated control of greenhouse conditions. Featured in the original portfolio.", stack: ["ESP32","Raspberry Pi 4","IoT","Edge AI","Firebase"], status: "Featured", featured: true },
  { title: "Arduino Reverse Parking Sensor", category: "Embedded & Firmware", description: "A vehicle parking-assistance prototype that measures obstacle distance with an ultrasonic sensor and warns drivers through an audible buzzer.", stack: ["Arduino UNO","HC-SR04","Embedded C/C++","Buzzer"], github: "https://github.com/mtalhak003/Arduino-Car-Reverse-Parking-Sensor-Project", status: "Project", featured: false },
  { title: "Intelligent Soil-Based Irrigation", category: "Embedded & Firmware", description: "An automated irrigation prototype that senses soil moisture and activates or stops a water pump based on watering needs.", stack: ["Arduino UNO","Soil-moisture sensor","Embedded control"], github: "https://github.com/mtalhak003/Intelligent-Soil-Based-Irrigation-System-using-Arduino-UNO", status: "Project", featured: false },
  { title: "YOLOv8 Weed Detection", category: "AI & Machine Learning", description: "A custom-trained YOLOv8 computer-vision model developed for detecting weeds in agricultural imagery, illustrating an AI approach to crop monitoring.", stack: ["Python","Ultralytics YOLOv8","Object detection"], github: "https://github.com/mtalhak003/Ultralytics-YOLOv8-Custom-Trained-Model-Weed-Detection-", status: "Project", featured: true },
  { title: "AI-Agri Smart Greenhouse", category: "AI & Machine Learning", description: "An agriculture-focused smart greenhouse research and development project combining environmental sensing and machine-learning-based decision support.", stack: ["Machine Learning","IoT","Smart Agriculture"], status: "Private repository", featured: true },
  { title: "Agri IoT Machine Learning Models", category: "AI & Machine Learning", description: "Machine-learning experiments for climate-aware greenhouse applications, targeting monitoring and optimization of growing conditions.", stack: ["Machine Learning","IoT","Agriculture"], github: "https://github.com/mtalhak003/agri-iot-machine-learning-models-", status: "Project", featured: false },
  { title: "ML Model for Agriculture", category: "AI & Machine Learning", description: "Repository for agriculture-oriented machine learning model development; implementation details are not yet documented publicly.", stack: ["Machine Learning","Agriculture"], github: "https://github.com/mtalhak003/ML-Model-for-Agri", status: "Repository", featured: false },
  { title: "ParthAI", category: "AI & Machine Learning", description: "Parthenium weed detection research using RF-DETR computer vision on field imagery, developed at SID Lab with a paper submitted to ICEAI 2026.", stack: ["Python","RF-DETR","Computer Vision","Object Detection"], status: "Featured", featured: false },
  { title: "CROSS-OS BRIDGE", category: "Software Engineering", description: "A concurrent client–server system for an operating-systems lab that uses sockets and resource coordination to manage requests, sessions, and orderly server shutdown.", stack: ["Socket programming","Multithreading","Winsock","Systems programming"], github: "https://github.com/mtalhak003/CROSS-OS-BRIDGE", status: "Project", featured: true },
  { title: "Text Editor", category: "Software Engineering", description: "A text-editing software project demonstrating application development and basic editing workflows.", stack: ["Application development"], github: "https://github.com/mtalhak003/Text-Editor-", status: "Project", featured: false },
  { title: "Boggle", category: "Software Engineering", description: "A word-search game built around finding words in a randomized letter grid, exploring search and pattern-matching logic.", stack: ["Algorithms","Word search","Game logic"], github: "https://github.com/mtalhak003/Boggle", status: "Project", featured: false },
  { title: "Calculator", category: "Software Engineering", description: "A basic calculator application focused on arithmetic operations and user interaction.", stack: ["Programming fundamentals"], github: "https://github.com/mtalhak003/Calculator", status: "Project", featured: false },
  { title: "Alfurqan Learning Management System", category: "Web & Full-Stack", description: "A learning management system with separately maintained frontend and backend repositories; the frontend uses Next.js.", stack: ["Next.js","React","Full-stack development"], status: "Private repositories", featured: true },
  { title: "EduPort — Online Learning Platform", category: "Web & Full-Stack", description: "A learning platform for browsing courses across multiple disciplines, including free and paid learning content.", stack: ["Web development","Course catalog","E-learning"], github: "https://github.com/mtalhak003/eduport", status: "Project", featured: true },
  { title: "Laravel Online Learning Platform", category: "Web & Full-Stack", description: "An online learning platform project with a Laravel application foundation.", stack: ["PHP","Laravel"], github: "https://github.com/mtalhak003/online-learning-platform", status: "Project", featured: false },
  { title: "Asmani Cosmetics", category: "Web & Full-Stack", description: "A cosmetics-themed web application project; the repository is available for visitors to explore the implementation.", stack: ["Web development"], github: "https://github.com/mtalhak003/Asmani-Cosmetics", status: "Project", featured: false },
  { title: "Weather App", category: "Web & Full-Stack", description: "A weather-application project exploring data presentation and user-facing web interfaces.", stack: ["Web application"], github: "https://github.com/mtalhak003/wheater-app", status: "Project", featured: false },
  { title: "Portfolio Website", category: "Web & Full-Stack", description: "This portfolio built with Next.js, React, TypeScript, and Tailwind CSS to showcase engineering projects and professional experience.", stack: ["Next.js","React","TypeScript","Tailwind CSS"], github: "https://github.com/mtalhak003/MTK-Portfolio", status: "Current site", featured: false },
  { title: "Home IoT Server — Cisco Packet Tracer", category: "IoT & Automation", description: "A simulated smart-home system connecting IoT devices to a central server with monitoring, lighting automation, and sensor-based feedback.", stack: ["Cisco Packet Tracer","IoT networking","Automation"], github: "https://github.com/mtalhak003/Home-Devices-Connection-with-IoT-Server-using-Cisco-Packet-Tracer", status: "Project", featured: true },
  { title: "Operation Extraction — 3D Game", category: "Games & Interactive", description: "A 3D game-development project built using Unity, demonstrating interactive scene and gameplay creation.", stack: ["Unity","3D game development"], github: "https://github.com/mtalhak003/OPERATION-EXTRACTION-3D-GAME-Using-UNITY", status: "Project", featured: true },
  { title: "Elevate Pong — SFML Power-Ups", category: "Games & Interactive", description: "A C++ Pong game enhanced with speed, paddle-size, and direction-changing power-ups using SFML graphics and interface components.", stack: ["C++","SFML","OOP"], github: "https://github.com/mtalhak003/SFML-UI-Integration", status: "Project", featured: false },
  { title: "Helicopter Game", category: "Games & Interactive", description: "An interactive helicopter-themed game project from early gameplay programming work.", stack: ["Game development"], github: "https://github.com/mtalhak003/Helicopter-Game", status: "Project", featured: false },
  { title: "Gaming Arena", category: "Games & Interactive", description: "A repository of game-related development work.", stack: ["Game development"], github: "https://github.com/mtalhak003/Gaming-Arena", status: "Repository", featured: false },
  { title: "Ping Pong Ball Game", category: "Games & Interactive", description: "A Pong-style game project focused on interactive gameplay logic.", stack: ["Game logic"], github: "https://github.com/mtalhak003/Ping-Pong-Ball-Game", status: "Project", featured: false },
]

const categories = [
  "Embedded & Firmware",
  "AI & Machine Learning",
  "Software Engineering",
  "Web & Full-Stack",
  "IoT & Automation",
  "Games & Interactive",
  "All Projects",
]


const projectDetails: Record<string, { challenge: string; approach: string; highlights: string[] }> = {
  "FIRMAVEX": {
    challenge: "Verifying firmware across architectures and tracing failures consistently can require several disconnected tools.",
    approach: "Unifies emulation, debugging, HDL simulation, and automated verification into a reproducible desktop workflow.",
    highlights: ["ARM Cortex-M3 and RISC-V execution support", "QEMU and GDB integration", "Icarus Verilog simulation and repeatable tests"],
  },
  "LeafPulse — AIoT Smart Greenhouse": {
    challenge: "Greenhouse monitoring and environmental control involve sensor data, edge processing, and actuator responses.",
    approach: "Combines microcontroller sensor nodes with a Raspberry Pi-based processing and control system.",
    highlights: ["ESP32 environmental sensing", "Raspberry Pi 4 edge processing", "Automated greenhouse climate and irrigation control"],
  },
  "YOLOv8 Weed Detection": {
    challenge: "Identifying weeds in agricultural imagery is a computer-vision problem with real-world variability.",
    approach: "Uses a custom-trained Ultralytics YOLOv8 object-detection model for agricultural weed identification.",
    highlights: ["Custom object-detection training", "Agricultural image analysis", "Potential precision-agriculture applications"],
  },
  "CROSS-OS BRIDGE": {
    challenge: "Multiple connected clients must share limited resources without losing control of server behavior.",
    approach: "Implements a socket-based client–server design with concurrent request handling, resource coordination, and termination signaling.",
    highlights: ["Concurrent client connections", "Tutor and chair resource management", "Controlled server termination"],
  },
  "EduPort — Online Learning Platform": {
    challenge: "Learners need an accessible interface for exploring courses across several disciplines.",
    approach: "Presents a course catalog supporting different subjects and free or premium course offerings.",
    highlights: ["Multi-category course discovery", "Free and paid course offerings", "Education-focused web interface"],
  },
  "Home IoT Server — Cisco Packet Tracer": {
    challenge: "Connecting and controlling multiple smart-home devices requires coordinated networking and monitoring.",
    approach: "Simulates connected home devices and centralized control using Cisco Packet Tracer.",
    highlights: ["Central IoT server connectivity", "Device monitoring dashboard", "Automated lighting and sensor feedback"],
  },
}

const categoryGradient: Record<string, string> = {
  "Embedded & Firmware": "from-violet-600 to-indigo-800",
  "AI & Machine Learning": "from-fuchsia-600 to-purple-800",
  "Software Engineering": "from-sky-600 to-blue-800",
  "Web & Full-Stack": "from-teal-600 to-cyan-800",
  "IoT & Automation": "from-emerald-600 to-teal-800",
  "Games & Interactive": "from-orange-600 to-rose-800",
}

export function ProjectCatalog() {
  const [category, setCategory] = useState("Embedded & Firmware")
  const [search, setSearch] = useState("")
  const [sortBy, setSortBy] = useState("featured")
  const [featuredOnly, setFeaturedOnly] = useState(false)
  const [visibleCount, setVisibleCount] = useState(8)

  const filtered = useMemo(() => {
    const query = search.toLowerCase().trim()
    const result = projects.filter((project) =>
      (category === "All Projects" || project.category === category) &&
      (!featuredOnly || project.featured) &&
      (!query || [project.title, project.description, project.category, ...project.stack].join(" ").toLowerCase().includes(query))
    )
    return result.sort((a, b) => sortBy === "alphabetical"
      ? a.title.localeCompare(b.title)
      : sortBy === "category"
        ? a.category.localeCompare(b.category) || a.title.localeCompare(b.title)
        : Number(b.featured) - Number(a.featured) || a.title.localeCompare(b.title))
  }, [category, search, sortBy, featuredOnly])

  const clearFilters = () => {
    setCategory("Embedded & Firmware")
    setSearch("")
    setSortBy("featured")
    setFeaturedOnly(false)
    setVisibleCount(8)
  }
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3)
  const activeFilters = category !== "All Projects" || search !== "" || featuredOnly || sortBy !== "featured"

  return (
    <section id="projects" className="relative overflow-hidden bg-[#0b1628] px-4 py-20 text-white">
      <div className="container relative z-10 mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300 text-cyan-300">Designed • Built • Tested</p>
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">Projects & Engineering Work</h2>
          <p className="mx-auto max-w-2xl text-slate-300 dark:text-gray-300">From firmware verification and edge intelligence to distributed software and web applications. Discover the engineering challenges, approaches, and technologies behind my work.</p>
        </div>

        <div className="mb-12 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-cyan-400/20 bg-[#102139] p-5 dark:border-cyan-300/20 bg-[#0c2441]/40">
            <Layers className="mb-4 h-6 w-6 text-cyan-300 text-cyan-300" />
            <p className="text-3xl font-bold">{projects.length}</p>
            <p className="text-sm text-slate-300 dark:text-gray-300">Projects showcased</p>
          </div>
          <div className="rounded-2xl border border-cyan-300/20 bg-[#12233b] p-5">
            <Cpu className="mb-4 h-6 w-6 text-cyan-300 dark:text-cyan-300" />
            <p className="text-3xl font-bold">{categories.length - 1}</p>
            <p className="text-sm text-slate-300 dark:text-gray-300">Engineering disciplines</p>
          </div>
          <div className="rounded-2xl border border-cyan-300/20 bg-[#12233b] p-5">
            <Code2 className="mb-4 h-6 w-6 text-cyan-300 dark:text-cyan-300" />
            <p className="text-3xl font-bold">{projects.filter(p => p.github).length}</p>
            <p className="text-sm text-slate-300 dark:text-gray-300">Linked source repositories</p>
          </div>
        </div>

        <div className="mb-14">
          <div className="mb-5 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-cyan-300" />
            <h3 className="text-2xl font-bold">Featured Engineering Work</h3>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <a key={project.title} href={"#project-gallery"} onClick={() => { setCategory(project.category); setSearch(project.title); setFeaturedOnly(false); setVisibleCount(8) }}
                className={`group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br p-6 text-white shadow-lg transition-transform hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 ${categoryGradient[project.category] || "from-violet-600 to-blue-800"}`}>
                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/20 bg-[#102139]/10" />
                <div className="relative z-10 flex items-center justify-between">
                  <span className="rounded-full bg-[#102139]/20 px-3 py-1 text-xs font-medium">Featured 0{index + 1}</span>
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <div className="relative z-10">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-white/75">{project.category}</p>
                  <h4 className="mb-2 text-xl font-bold">{project.title}</h4>
                  <p className="line-clamp-2 text-sm text-white/85">{project.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div id="project-gallery" className="scroll-mt-24">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-cyan-300 text-cyan-300">Explore the portfolio</p>
              <h3 className="text-2xl font-bold">All Project Details</h3>
            </div>
            {activeFilters && <button onClick={clearFilters} className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 hover:underline text-cyan-200"><RotateCcw className="h-4 w-4" /> Reset filters</button>}
          </div>
          <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
            {categories.map((item) => {
              const count = item === "All Projects" ? projects.length : projects.filter(p => p.category === item).length
              return (
                <button key={item} onClick={() => { setCategory(item); setVisibleCount(8) }} aria-pressed={category === item}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 ${category === item ? "border-cyan-400 bg-cyan-400 text-[#081121]" : "border-[#36516c] bg-[#102139] text-slate-300 hover:border-cyan-400 border-[#36516c] bg-[#091426] dark:text-gray-200"}`}>
                  {item} <span className={category === item ? "ml-1 text-[#081121]/80" : "ml-1 text-slate-400"}>{count}</span>
                </button>
              )
            })}
          </div>

          <div className="mb-7 grid gap-3 md:grid-cols-[minmax(0,1fr)_auto_auto] md:items-center">
            <label className="relative block">
              <Search aria-hidden="true" className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <span className="sr-only">Search projects and technologies</span>
              <input type="search" value={search} onChange={e => { setSearch(e.target.value); setVisibleCount(8) }} placeholder="Search project, language, framework..."
                className="w-full rounded-lg border border-[#36516c] bg-[#102139] py-3 pl-10 pr-3 text-sm text-white outline-none focus:border-cyan-400 border-[#36516c] bg-[#091426] dark:text-white" />
            </label>
            <label className="inline-flex items-center gap-2 rounded-lg border border-[#36516c] px-4 py-3 text-sm border-[#36516c]">
              <input type="checkbox" checked={featuredOnly} onChange={e => { setFeaturedOnly(e.target.checked); setVisibleCount(8) }} className="accent-purple-600" />
              Featured only
            </label>
            <label className="flex items-center gap-2 text-sm">
              <span className="sr-only">Sort projects</span>
              <select aria-label="Sort projects" value={sortBy} onChange={e => setSortBy(e.target.value)}
                className="w-full rounded-lg border border-[#36516c] bg-[#102139] px-4 py-3 border-[#36516c] bg-[#091426]">
                <option value="featured">Featured first</option>
                <option value="alphabetical">Name A–Z</option>
                <option value="category">Category</option>
              </select>
            </label>
          </div>

          <p role="status" aria-live="polite" className="mb-5 text-sm text-slate-400 text-slate-400">Showing {Math.min(filtered.length, visibleCount)} of {filtered.length} matching projects</p>
          <div className="grid gap-6 md:grid-cols-2">
            {filtered.slice(0, visibleCount).map(project => (
              <article key={project.title} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#29425f] bg-[#0b1628] shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl border-[#29425f] bg-[#091426]">
                <div className={`relative h-24 overflow-hidden bg-gradient-to-r ${categoryGradient[project.category] || "from-purple-600 to-blue-600"}`}>
                  <div className="absolute -right-8 -top-12 h-36 w-36 rounded-full border border-white/20 bg-[#102139]/10" />
                  <div className="absolute bottom-4 left-6 flex items-center gap-2 text-sm font-semibold text-white">
                    <span className="rounded-md bg-[#102139]/20 px-3 py-1">{project.category}</span>
                  </div>
                  {project.featured && <span className="absolute right-4 top-4 rounded-full bg-[#102139]/20 px-3 py-1 text-xs font-medium text-white">★ Featured</span>}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <h4 className="text-xl font-bold text-white dark:text-white">{project.title}</h4>
                    <span className="shrink-0 rounded-full border border-[#36516c] px-2 py-1 text-xs text-slate-300 border-[#36516c] dark:text-gray-300">{project.status}</span>
                  </div>
                  <p className="mb-5 leading-relaxed text-slate-300 dark:text-gray-300">{project.description}</p>
                  <div className="mb-5 mt-auto">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400 text-slate-400">Tech stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map(tech => <span key={tech} className="rounded-md bg-cyan-400/10 px-2.5 py-1 text-xs font-medium text-cyan-200 bg-[#0c2441] text-cyan-200">{tech}</span>)}
                    </div>
                  </div>
                  {projectDetails[project.title] && (
                    <details className="mb-5 rounded-xl border border-[#29425f] bg-[#102139] border-[#29425f] bg-[#12233b]">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-4 text-sm font-semibold text-white dark:text-white">
                        <span className="inline-flex items-center gap-2"><Target className="h-4 w-4 text-cyan-300" /> Engineering breakdown</span>
                        <ChevronDown className="h-4 w-4" />
                      </summary>
                      <div className="space-y-3 border-t border-[#29425f] p-4 text-sm text-slate-300 border-[#29425f] dark:text-gray-300">
                        <div><p className="mb-1 font-semibold text-white dark:text-white">Challenge</p><p>{projectDetails[project.title].challenge}</p></div>
                        <div><p className="mb-1 font-semibold text-white dark:text-white">Approach</p><p>{projectDetails[project.title].approach}</p></div>
                        <div><p className="mb-1 font-semibold text-white dark:text-white">Highlights</p><ul className="list-inside list-disc space-y-1">{projectDetails[project.title].highlights.map(h => <li key={h}>{h}</li>)}</ul></div>
                      </div>
                    </details>
                  )}
                  {project.github ? <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-2 font-semibold text-cyan-300 hover:underline text-cyan-200"><Github className="h-4 w-4" /> Explore source code <ArrowUpRight className="h-4 w-4" /></a>
                  : <span className="text-sm text-slate-400 text-slate-400">Public source link unavailable</span>}
                </div>
              </article>
            ))}
          </div>
          {filtered.length === 0 && <div className="rounded-2xl border border-dashed border-[#36516c] py-12 text-center border-[#36516c]"><Search className="mx-auto mb-3 h-6 w-6 text-slate-400" /><p className="mb-3 text-slate-400">No matching projects found.</p><button className="font-semibold text-cyan-300 text-cyan-200" onClick={clearFilters}>Clear filters</button></div>}
          {filtered.length > visibleCount && <div className="mt-10 text-center"><button onClick={() => setVisibleCount(n => n + 8)} className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-7 py-3 font-semibold text-[#081121] transition-colors hover:bg-cyan-300">Load more projects <ArrowRight className="h-4 w-4" /></button></div>}
        </div>
        <p className="mt-10 text-center text-sm text-slate-400 text-slate-400">Descriptions and technology labels are based on available project documentation. Technical details can be expanded as repositories are updated.</p>
      </div>
    </section>
  )
}
