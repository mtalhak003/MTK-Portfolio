import { Binary, Braces, CircuitBoard, Code2, Cpu, Layers3, TerminalSquare, Wrench, BrainCircuit, Globe2, PlugZap, Cable, Database, Network } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type SkillGroup = { title: string; icon: LucideIcon; description: string; skills: string[] }

const stack = [
  { title: "Hardware Verification", subtitle: "Simulation · validation · debugging", icon: CircuitBoard },
  { title: "Digital Design & RTL", subtitle: "HDL · FPGA · pipelined architectures", icon: Binary },
  { title: "Embedded Firmware (C/C++)", subtitle: "MCUs · interfaces · peripheral control", icon: Cpu },
]

const skillGroups: SkillGroup[] = [
  {
    title: "HDL & Digital Design",
    icon: Braces,
    description: "Hardware description, RTL and architecture",
    skills: ["SystemVerilog / Verilog", "Pipelined Architectures"],
  },
  {
    title: "FPGA, Simulation & EDA",
    icon: CircuitBoard,
    description: "FPGA development, simulation and circuit design",
    skills: ["Xilinx ISE", "ModelSim", "PSpice", "Proteus"],
  },
  {
    title: "Microcontrollers & Boards",
    icon: Cpu,
    description: "Embedded hardware platforms",
    skills: ["ESP32", "MSP430", "Raspberry Pi Pico", "Raspberry Pi"],
  },
  {
    title: "Embedded Firmware & Interfaces",
    icon: Cable,
    description: "Peripheral control and connected systems",
    skills: ["Embedded C/C++", "UART", "SPI", "I²C", "GPIO", "Timers / Interrupts", "Sensor Integration", "Actuator Control", "IoT Networking"],
  },
  {
    title: "Programming Languages",
    icon: Code2,
    description: "General-purpose and scripting languages",
    skills: ["C", "C++", "Python", "JavaScript", "PHP"],
  },
  {
    title: "AI, Computer Vision & Edge AI",
    icon: BrainCircuit,
    description: "Machine learning and real-world perception",
    skills: ["Edge Inference", "YOLOv11", "RF-DETR", "OpenCV", "TensorFlow", "PyTorch", "NLP", "Object Detection", "Model Deployment", "Hugging Face"],
  },
  {
    title: "Web & Application Development",
    icon: Globe2,
    description: "Frontend, backend and web services",
    skills: ["Next.js", "React", "Node.js", "Laravel", "HTML / CSS", "Full-Stack Development", "REST APIs"],
  },
  {
    title: "Databases & Integrations",
    icon: Database,
    description: "Data services and software integration",
    skills: ["Firebase", "MySQL", "MongoDB", "PostgreSQL", "LLM APIs", "WhatsApp Integration"],
  },
  {
    title: "Developer & Engineering Tools",
    icon: Wrench,
    description: "Version control, operating systems and deployment",
    skills: ["Git / GitHub", "Linux", "MATLAB", "Docker", "Cloud Platforms"],
  },
]

export function EngineeringSkills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-[#091426] px-4 py-20 text-slate-100">
      <div className="pointer-events-none absolute inset-0 opacity-25" aria-hidden="true"
        style={{ backgroundImage: "linear-gradient(rgba(103,232,249,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(103,232,249,.08) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
      <div className="container relative mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="mb-3 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[.2em] text-cyan-300"><Layers3 className="h-4 w-4" /> Engineering capabilities</p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Technical Stack</h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-300">Core engineering disciplines across RTL, FPGA workflows, and embedded firmware.</p>
        </div>

        <div className="mb-20 grid gap-4 md:grid-cols-3">
          {stack.map(({ title, subtitle, icon: Icon }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-cyan-300/20 bg-[#12233b] p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:shadow-[0_12px_44px_rgba(34,211,238,.10)]">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-300"><Icon className="h-6 w-6" aria-hidden="true"/></div>
              <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
              <p className="text-sm leading-6 text-slate-300">{subtitle}</p>
              <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full border border-cyan-300/10 bg-cyan-300/5 transition-transform duration-500 group-hover:scale-125" aria-hidden="true" />
            </div>
          ))}
        </div>

        <div className="mb-9">
          <p className="mb-3 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[.2em] text-cyan-300"><TerminalSquare className="h-4 w-4" /> Tools & technologies</p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Technical Skills</h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-300">A categorized view of my hardware design, development, and engineering toolset.</p>
        </div>

        <div className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map(({ title, icon: Icon, description, skills }) => (
            <article key={title} className="group rounded-2xl border border-cyan-300/15 bg-[#12233b]/95 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/50">
              <div className="mb-5 flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300"><Icon className="h-5 w-5" aria-hidden="true"/></div>
                <div>
                  <h3 className="text-lg font-bold text-white">{title}</h3>
                  <p className="mt-1 text-xs leading-5 text-slate-400">{description}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="rounded-lg border border-cyan-300/15 bg-[#091426] px-3 py-2 font-mono text-xs font-medium text-slate-200 transition-colors group-hover:border-cyan-300/30">{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
