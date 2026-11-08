"use client"
import { useMemo, useState } from "react"
import { ArrowUpRight, Github, Search } from "lucide-react"

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
  { title: "AI-Agri Smart Greenhouse", category: "AI & Machine Learning", description: "An agriculture-focused smart greenhouse research and development project combining environmental sensing and machine-learning-based decision support.", stack: ["Machine Learning","IoT","Smart Agriculture"], github: "https://github.com/mtalhak003/Ai-Agri-Smart-GreenHouse-System", status: "Private repository", featured: true },
  { title: "Agri IoT Machine Learning Models", category: "AI & Machine Learning", description: "Machine-learning experiments for climate-aware greenhouse applications, targeting monitoring and optimization of growing conditions.", stack: ["Machine Learning","IoT","Agriculture"], github: "https://github.com/mtalhak003/agri-iot-machine-learning-models-", status: "Project", featured: false },
  { title: "ML Model for Agriculture", category: "AI & Machine Learning", description: "Repository for agriculture-oriented machine learning model development; implementation details are not yet documented publicly.", stack: ["Machine Learning","Agriculture"], github: "https://github.com/mtalhak003/ML-Model-for-Agri", status: "Repository", featured: false },
  { title: "AI, ML & Deep Learning", category: "AI & Machine Learning", description: "A collection of artificial intelligence, machine learning, and deep learning experiments and practical exercises.", stack: ["AI","Machine Learning","Deep Learning"], github: "https://github.com/mtalhak003/AI-ML-Deep-Learning", status: "Learning collection", featured: false },
  { title: "ParthAI", category: "AI & Machine Learning", description: "An AI project featured in the existing portfolio. Additional implementation details and a verified source link will be added when available.", stack: ["Artificial Intelligence"], status: "Featured", featured: false },
  { title: "CROSS-OS BRIDGE", category: "Software Engineering", description: "A concurrent client–server system for an operating-systems lab that uses sockets and resource coordination to manage requests, sessions, and orderly server shutdown.", stack: ["Socket programming","Multithreading","Winsock","Systems programming"], github: "https://github.com/mtalhak003/CROSS-OS-BRIDGE", status: "Project", featured: true },
  { title: "Text Editor", category: "Software Engineering", description: "A text-editing software project demonstrating application development and basic editing workflows.", stack: ["Application development"], github: "https://github.com/mtalhak003/Text-Editor-", status: "Project", featured: false },
  { title: "Boggle", category: "Software Engineering", description: "A word-search game built around finding words in a randomized letter grid, exploring search and pattern-matching logic.", stack: ["Algorithms","Word search","Game logic"], github: "https://github.com/mtalhak003/Boggle", status: "Project", featured: false },
  { title: "Calculator", category: "Software Engineering", description: "A basic calculator application focused on arithmetic operations and user interaction.", stack: ["Programming fundamentals"], github: "https://github.com/mtalhak003/Calculator", status: "Project", featured: false },
  { title: "Alfurqan Learning Management System", category: "Web & Full-Stack", description: "A learning management system with separately maintained frontend and backend repositories; the frontend uses Next.js.", stack: ["Next.js","React","Full-stack development"], github: "https://github.com/mtalhak003/Alfurqan-LMS-FRONTEND", status: "Private repositories", featured: true },
  { title: "EduPort — Online Learning Platform", category: "Web & Full-Stack", description: "A learning platform for browsing courses across multiple disciplines, including free and paid learning content.", stack: ["Web development","Course catalog","E-learning"], github: "https://github.com/mtalhak003/eduport", status: "Project", featured: true },
  { title: "Laravel Online Learning Platform", category: "Web & Full-Stack", description: "An online learning platform project with a Laravel application foundation.", stack: ["PHP","Laravel"], github: "https://github.com/mtalhak003/online-learning-platform", status: "Project", featured: false },
  { title: "EDU-PORT Learning Platform", category: "Web & Full-Stack", description: "A related EduPort learning-platform repository kept in the project archive; feature details are not documented in its README.", stack: ["E-learning","Web application"], github: "https://github.com/mtalhak003/Online-Learning-Platform-EDU-PORT-", status: "Repository", featured: false },
  { title: "Asmani Cosmetics", category: "Web & Full-Stack", description: "A cosmetics-themed web application project; the repository is available for visitors to explore the implementation.", stack: ["Web development"], github: "https://github.com/mtalhak003/Asmani-Cosmetics", status: "Project", featured: false },
  { title: "Weather App", category: "Web & Full-Stack", description: "A weather-application project exploring data presentation and user-facing web interfaces.", stack: ["Web application"], github: "https://github.com/mtalhak003/wheater-app", status: "Project", featured: false },
  { title: "Frontend Development", category: "Web & Full-Stack", description: "A collection of frontend development work and interface exercises.", stack: ["Frontend development"], github: "https://github.com/mtalhak003/Frontend-Dev", status: "Learning collection", featured: false },
  { title: "Portfolio Website", category: "Web & Full-Stack", description: "This portfolio built with Next.js, React, TypeScript, and Tailwind CSS to showcase engineering projects and professional experience.", stack: ["Next.js","React","TypeScript","Tailwind CSS"], github: "https://github.com/mtalhak003/MTK-Portfolio", status: "Current site", featured: false },
  { title: "Home IoT Server — Cisco Packet Tracer", category: "IoT & Automation", description: "A simulated smart-home system connecting IoT devices to a central server with monitoring, lighting automation, and sensor-based feedback.", stack: ["Cisco Packet Tracer","IoT networking","Automation"], github: "https://github.com/mtalhak003/Home-Devices-Connection-with-IoT-Server-using-Cisco-Packet-Tracer", status: "Project", featured: true },
  { title: "Operation Extraction — 3D Game", category: "Games & Interactive", description: "A 3D game-development project built using Unity, demonstrating interactive scene and gameplay creation.", stack: ["Unity","3D game development"], github: "https://github.com/mtalhak003/OPERATION-EXTRACTION-3D-GAME-Using-UNITY", status: "Project", featured: true },
  { title: "Elevate Pong — SFML Power-Ups", category: "Games & Interactive", description: "A C++ Pong game enhanced with speed, paddle-size, and direction-changing power-ups using SFML graphics and interface components.", stack: ["C++","SFML","OOP"], github: "https://github.com/mtalhak003/SFML-UI-Integration", status: "Project", featured: false },
  { title: "Helicopter Game", category: "Games & Interactive", description: "An interactive helicopter-themed game project from early gameplay programming work.", stack: ["Game development"], github: "https://github.com/mtalhak003/Helicopter-Game", status: "Project", featured: false },
  { title: "Gaming Arena", category: "Games & Interactive", description: "A repository of game-related development work.", stack: ["Game development"], github: "https://github.com/mtalhak003/Gaming-Arena", status: "Repository", featured: false },
  { title: "Ping Pong Ball Game", category: "Games & Interactive", description: "A Pong-style game project focused on interactive gameplay logic.", stack: ["Game logic"], github: "https://github.com/mtalhak003/Ping-Pong-Ball-Game", status: "Project", featured: false },
  { title: "COGNORISE Internship Projects", category: "Learning & Experiments", description: "A collection of projects completed during a remote internship, documenting hands-on software development practice.", stack: ["Software development","Internship"], github: "https://github.com/mtalhak003/COGNORISE", status: "Collection", featured: false },
  { title: "100 Days of Python", category: "Learning & Experiments", description: "A series of Python programming exercises and practice projects.", stack: ["Python"], github: "https://github.com/mtalhak003/100-Days-of-Python", status: "Learning collection", featured: false },
  { title: "freeCodeCamp Exercises", category: "Learning & Experiments", description: "Programming exercises and course work from freeCodeCamp.", stack: ["Programming practice"], github: "https://github.com/mtalhak003/freeCodeCamp", status: "Learning collection", featured: false },
  { title: "C Programming Fundamentals", category: "Learning & Experiments", description: "Exercises covering C data types, operators, expressions, and conditional statements.", stack: ["C"], github: "https://github.com/mtalhak003/Data-Types-Operators-and-Expressions-in-C-", status: "Learning collection", featured: false },
  { title: "C Logical & Selection Statements", category: "Learning & Experiments", description: "Practice programs introducing relational and logical operators and conditional selection.", stack: ["C"], github: "https://github.com/mtalhak003/Introduction-to-Relational-Logical-Operators-Selection-Statements", status: "Learning collection", featured: false },
  { title: "DCSE Data Pack", category: "Learning & Experiments", description: "A collection of computer systems engineering study and reference materials rather than a standalone application.", stack: ["Engineering resources"], github: "https://github.com/mtalhak003/DCSE-DATA-PACK", status: "Resource collection", featured: false },
  { title: "NAVTTC Coursework", category: "Learning & Experiments", description: "Repository associated with training and coursework.", stack: ["Coursework"], github: "https://github.com/mtalhak003/NAVTTC-", status: "Collection", featured: false },
]

const categories = [
  "All Projects",
  "Embedded & Firmware",
  "AI & Machine Learning",
  "Software Engineering",
  "Web & Full-Stack",
  "IoT & Automation",
  "Games & Interactive",
  "Learning & Experiments",
]

export function ProjectCatalog() {
  const [category, setCategory] = useState("All Projects")
  const [search, setSearch] = useState("")
  const filtered = useMemo(() => {
    const query = search.toLowerCase().trim()
    return projects.filter((project) =>
      (category === "All Projects" || project.category === category) &&
      (!query || [project.title, project.description, project.category, ...project.stack].join(" ").toLowerCase().includes(query))
    ).sort((a, b) => Number(b.featured) - Number(a.featured) || a.title.localeCompare(b.title))
  }, [category, search])
  return (
    <section id="projects" className="relative bg-white px-4 py-20 dark:bg-gray-800">
      <div className="container relative z-10 mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-600 dark:text-purple-400">Selected work & complete archive</p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Engineering Projects</h2>
          <p className="text-gray-600 dark:text-gray-300">Explore embedded firmware, intelligent systems, software engineering, full-stack applications, and interactive development. Each entry describes its purpose and documented tools.</p>
        </div>
        <div className="mb-7 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
          {categories.map((item) => (
            <button key={item} onClick={() => setCategory(item)} aria-pressed={category === item}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 ${category === item ? "border-purple-600 bg-purple-600 text-white" : "border-gray-300 bg-white text-gray-700 hover:border-purple-500 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-200"}`}>
              {item}
            </button>
          ))}
        </div>
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <label className="relative block w-full sm:max-w-md">
            <Search aria-hidden="true" className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <span className="sr-only">Search projects and technologies</span>
            <input type="search" value={search} onChange={(event) => setSearch(event.target.value)}
              placeholder="Search projects, languages or tools..."
              className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-3 text-sm text-gray-900 outline-none focus:border-purple-500 dark:border-gray-600 dark:bg-gray-900 dark:text-white" />
          </label>
          <p role="status" className="text-sm text-gray-500 dark:text-gray-400">{filtered.length} {filtered.length === 1 ? "project" : "projects"} shown</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {filtered.map((project) => (
            <article key={project.title} className="flex h-full flex-col rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-purple-600 dark:text-purple-400">{project.category}</span>
                <span className="rounded-full border border-gray-300 px-2.5 py-1 text-xs text-gray-600 dark:border-gray-600 dark:text-gray-300">{project.status}</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
              <p className="mb-5 flex-1 leading-relaxed text-gray-600 dark:text-gray-300">{project.description}</p>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Languages, frameworks & tools</p>
              <div className="mb-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => <span key={tech} className="rounded-md bg-purple-100 px-2.5 py-1 text-xs font-medium text-purple-800 dark:bg-purple-950 dark:text-purple-200">{tech}</span>)}
              </div>
              {project.github ? (
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 font-medium text-purple-700 hover:underline dark:text-purple-300">
                  <Github className="h-4 w-4" /> GitHub repository <ArrowUpRight className="h-4 w-4" />
                </a>
              ) : <span className="text-sm text-gray-500 dark:text-gray-400">Repository link not publicly available</span>}
            </article>
          ))}
        </div>
        {filtered.length === 0 && <p className="py-12 text-center text-gray-500">No matching projects. Try a different category or keyword.</p>}
        <p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">Some repositories contain coursework or early-stage experiments. Technology tags reflect the available project descriptions; additional implementation details can be added as documentation improves.</p>
      </div>
    </section>
  )
}
