import { Code2, Database, Cpu, Cloud, Sparkles, Layers, Terminal, Workflow } from "lucide-react"

const technologies = [
  { icon: Code2, name: "React", color: "text-[oklch(0.78_0.15_195)]" },
  { icon: Layers, name: "Next.js", color: "text-foreground" },
  { icon: Terminal, name: "TypeScript", color: "text-[oklch(0.65_0.22_240)]" },
  { icon: Cloud, name: "Node.js", color: "text-[oklch(0.7_0.18_150)]" },
  { icon: Cpu, name: "Python", color: "text-[oklch(0.75_0.15_85)]" },
  { icon: Sparkles, name: "Tailwind", color: "text-[oklch(0.78_0.15_195)]" },
  { icon: Database, name: "PostgreSQL", color: "text-[oklch(0.65_0.22_240)]" },
  { icon: Workflow, name: "OpenAI", color: "text-[oklch(0.55_0.18_280)]" },
]

export function TechStackSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.65_0.22_240/0.05)] via-transparent to-[oklch(0.55_0.18_280/0.05)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[oklch(0.78_0.15_195)] font-mono text-sm tracking-wider uppercase">
            Stack Tecnológico
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
            Tecnologias que <span className="text-gradient-ai">dominamos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Utilizamos as tecnologias mais modernas do mercado para entregar soluções robustas e escaláveis.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border hover:border-[oklch(0.65_0.22_240/0.5)] transition-all duration-300 group cursor-pointer hover-glow"
            >
              <tech.icon className={`h-10 w-10 group-hover:scale-110 transition-transform ${tech.color}`} />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[oklch(0.65_0.22_240/0.1)] via-[oklch(0.78_0.15_195/0.1)] to-[oklch(0.55_0.18_280/0.1)] border border-[oklch(0.15_0.025_260)]">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[oklch(0.65_0.22_240)] mb-2">+15</div>
              <div className="text-muted-foreground">Tecnologias Dominadas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[oklch(0.78_0.15_195)] mb-2">100%</div>
              <div className="text-muted-foreground">Código Limpo</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[oklch(0.55_0.18_280)] mb-2">A+</div>
              <div className="text-muted-foreground">Performance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
