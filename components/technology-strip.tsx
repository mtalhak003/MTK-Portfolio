"use client"

import { Cpu, CircuitBoard, Radio, Workflow } from "lucide-react"

const technologies = [
  "I²C", "SPI", "UART", "Proteus", "Raspberry Pi", "Arduino",
  "FPGA", "MATLAB", "Verilog", "SystemVerilog", "Xilinx", "ModelSim",
  "MSP430", "ESP32", "ARM Cortex-M", "RISC-V", "Python", "Bash",
  "CLI", "CI/CD", "Git", "Linux", "C/C++", "AutoCAD",
  "QEMU", "GDB", "IoT", "Edge AI",
]

export function TechnologyStrip() {
  return (
    <section className="relative overflow-hidden border-y border-cyan-300/20 bg-[#0b1a2e] py-4 text-white" aria-label="Embedded systems technologies and tools">
      <div className="absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#0b1a2e] to-transparent sm:w-24" aria-hidden="true" />
      <div className="absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#0b1a2e] to-transparent sm:w-24" aria-hidden="true" />
      <div className="mb-2 flex items-center justify-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[.24em] text-cyan-300/80">
        <CircuitBoard className="h-3 w-3" aria-hidden="true" /> Technologies & Tools
      </div>
      <div className="tech-marquee flex w-max items-center">
        {[0,1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center gap-4 pr-4" aria-hidden={copy === 1 ? "true" : undefined}>
            {technologies.map((tech, index) => (
              <span key={tech} className="inline-flex shrink-0 items-center gap-2 rounded-full border border-cyan-200/15 bg-white/[.05] px-4 py-2 font-mono text-xs font-medium tracking-wide text-slate-200 shadow-sm sm:text-sm">
                {index % 3 === 0 ? <Cpu className="h-3.5 w-3.5 text-cyan-300" /> : index % 3 === 1 ? <Radio className="h-3.5 w-3.5 text-violet-300" /> : <Workflow className="h-3.5 w-3.5 text-teal-300" />}
                {tech}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
