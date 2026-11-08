"use client"

import { useState } from "react"
import { Binary, Cable, CircuitBoard, Code2, Cpu, GitBranch, Terminal, Workflow, Wrench, Boxes, Braces, Bot, Network, MonitorCog } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Technology = { name: string; icon: LucideIcon; brand?: string }
const devicon = (icon: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/${icon}`

const technologies: Technology[] = [
  { name: "I²C", icon: Cable },
  { name: "SPI", icon: Cable },
  { name: "UART", icon: Cable },
  { name: "Proteus", icon: CircuitBoard },
  { name: "Raspberry Pi", icon: Cpu, brand: devicon("raspberrypi/raspberrypi-original.svg") },
  { name: "Arduino", icon: CircuitBoard, brand: devicon("arduino/arduino-original.svg") },
  { name: "FPGA", icon: Boxes },
  { name: "MATLAB", icon: MonitorCog, brand: devicon("matlab/matlab-original.svg") },
  { name: "Verilog", icon: Binary },
  { name: "SystemVerilog", icon: Braces },
  { name: "Xilinx", icon: CircuitBoard },
  { name: "ModelSim", icon: MonitorCog },
  { name: "MSP430", icon: Cpu },
  { name: "ESP32", icon: Cpu },
  { name: "ARM Cortex-M", icon: Cpu },
  { name: "RISC-V", icon: Cpu },
  { name: "Python", icon: Code2, brand: devicon("python/python-original.svg") },
  { name: "Bash", icon: Terminal, brand: devicon("bash/bash-original.svg") },
  { name: "CLI", icon: Terminal },
  { name: "CI/CD", icon: Workflow },
  { name: "Git", icon: GitBranch, brand: devicon("git/git-original.svg") },
  { name: "Linux", icon: Terminal, brand: devicon("linux/linux-original.svg") },
  { name: "C/C++", icon: Code2, brand: devicon("cplusplus/cplusplus-original.svg") },
  { name: "AutoCAD", icon: Wrench },
  { name: "QEMU", icon: MonitorCog },
  { name: "GDB", icon: Braces },
  { name: "IoT", icon: Network },
  { name: "Edge AI", icon: Bot },
]

function TechnologyIcon({ technology }: { technology: Technology }) {
  const [imageFailed, setImageFailed] = useState(false)
  const Icon = technology.icon
  if (!technology.brand || imageFailed) return <Icon className="h-[18px] w-[18px] shrink-0 text-cyan-300" aria-hidden="true" />
  return (
    <img
      src={technology.brand}
      alt=""
      aria-hidden="true"
      width={18}
      height={18}
      loading="lazy"
      className="h-[18px] w-[18px] shrink-0 object-contain"
      onError={() => setImageFailed(true)}
    />
  )
}

export function TechnologyStrip() {
  return (
    <section className="relative overflow-hidden border-y border-cyan-300/20 bg-[#0b1a2e] py-5 text-white" aria-label="Embedded systems technologies and tools">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#0b1a2e] to-transparent sm:w-24" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#0b1a2e] to-transparent sm:w-24" aria-hidden="true" />
      <div className="mb-3 flex items-center justify-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[.24em] text-cyan-300/80">
        <CircuitBoard className="h-3.5 w-3.5" aria-hidden="true" /> Technologies & Tools
      </div>
      <div className="tech-marquee flex w-max items-center">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center gap-4 pr-4" aria-hidden={copy === 1 ? "true" : undefined}>
            {technologies.map((technology) => (
              <span key={technology.name} className="inline-flex shrink-0 items-center gap-2.5 rounded-full border border-cyan-200/20 bg-[#142741] px-4 py-2 font-mono text-xs font-medium tracking-wide text-slate-100 shadow-sm transition-colors hover:border-cyan-300/50 hover:bg-[#1a3454] sm:text-sm">
                <TechnologyIcon technology={technology} />
                {technology.name}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
