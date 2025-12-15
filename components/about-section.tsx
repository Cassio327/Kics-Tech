"use client"

import { Code2, Rocket, Users, Award } from "lucide-react"
import { useScrollAnimation, useStaggerAnimation } from "@/hooks/use-scroll-animation"

const highlights = [
  {
    icon: Code2,
    title: "Tecnologia de Verdade",
    description: "Stack moderna, código limpo e arquitetura pensada para escalar.",
  },
  {
    icon: Rocket,
    title: "Entrega Ágil",
    description: "Sprints semanais com entregas incrementais. Você acompanha tudo.",
  },
  {
    icon: Users,
    title: "Parceria Real",
    description: "Não somos fornecedores, somos parte do seu time de tecnologia.",
  },
  {
    icon: Award,
    title: "ROI Mensurável",
    description: "Cada projeto tem métricas claras de retorno sobre investimento.",
  },
]

export function AboutSection() {
  const [textRef, textVisible] = useScrollAnimation()
  const { containerRef, visibleItems } = useStaggerAnimation(highlights.length, 150)

  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.65_0.22_240/0.05)] via-transparent to-[oklch(0.55_0.18_280/0.05)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={textRef} className={`fade-in-left ${textVisible ? "visible" : ""}`}>
            <span className="text-[oklch(0.78_0.15_195)] font-mono text-sm tracking-wider uppercase">
              Sobre a Kics Tech
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
              Tecnologia com alma de <span className="text-gradient-ai">startup</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A Kics Tech nasceu de uma obsessão: usar tecnologia para resolver problemas reais de negócios, não
                apenas criar sistemas bonitos que ninguém usa. Somos desenvolvedores, estrategistas e apaixonados por
                automação.
              </p>
              <p>
                Nosso diferencial está na intersecção entre conhecimento técnico profundo e visão de negócios.
                Entendemos que cada linha de código precisa gerar valor, cada automação deve economizar tempo e cada
                dashboard precisa facilitar decisões.
              </p>
              <p>
                Trabalhamos com empresas de diversos portes — de startups em estágio inicial a empresas consolidadas que
                querem acelerar sua transformação digital. Nossa stack é moderna, nossos processos são ágeis e nossa
                comunicação é transparente.
              </p>
              <p>
                Se você busca um parceiro técnico que fala sua língua, entrega no prazo e está comprometido com seus
                resultados, vamos conversar.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4 group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[oklch(0.65_0.22_240)] to-[oklch(0.55_0.18_280)] flex items-center justify-center glow-blue-sm group-hover:glow-blue transition-all duration-300">
                <span className="text-2xl font-bold text-white">K</span>
              </div>
              <div>
                <div className="font-bold text-foreground">Fundador & Head de Tecnologia</div>
                <div className="text-sm text-muted-foreground">Kics Tech</div>
              </div>
            </div>
          </div>

          <div ref={containerRef} className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl bg-card border border-border card-hover group scale-in ${
                  visibleItems[index] ? "visible" : ""
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${
                    index % 2 === 0
                      ? "from-[oklch(0.65_0.22_240/0.2)] to-[oklch(0.78_0.15_195/0.2)] group-hover:from-[oklch(0.65_0.22_240/0.3)] group-hover:to-[oklch(0.78_0.15_195/0.3)]"
                      : "from-[oklch(0.78_0.15_195/0.2)] to-[oklch(0.55_0.18_280/0.2)] group-hover:from-[oklch(0.78_0.15_195/0.3)] group-hover:to-[oklch(0.55_0.18_280/0.3)]"
                  } flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300`}
                >
                  <item.icon className="h-6 w-6 text-[oklch(0.78_0.15_195)]" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2 group-hover:text-[oklch(0.78_0.15_195)] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
