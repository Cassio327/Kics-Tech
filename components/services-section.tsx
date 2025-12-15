"use client"

import { Globe, Server, Bot, Brain, Zap, BarChart3, ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useScrollAnimation, useStaggerAnimation } from "@/hooks/use-scroll-animation"

const services = [
  {
    icon: Globe,
    title: "Sites & Landing Pages",
    description:
      "Criamos sites de alta conversão, landing pages estratégicas e plataformas web que combinam design moderno com performance otimizada para SEO.",
    features: ["Alta Conversão", "SEO Avançado", "Mobile First"],
    accentColor: "from-[oklch(0.65_0.22_240/0.2)] to-[oklch(0.78_0.15_195/0.2)]",
    hoverAccent: "from-[oklch(0.65_0.22_240/0.3)] to-[oklch(0.78_0.15_195/0.3)]",
  },
  {
    icon: Server,
    title: "Sistemas & Plataformas",
    description:
      "Desenvolvemos sistemas personalizados, ERPs, CRMs e plataformas SaaS que simplificam operações e centralizam a gestão do seu negócio.",
    features: ["Sob Medida", "Escalável", "Integrações"],
    accentColor: "from-[oklch(0.78_0.15_195/0.2)] to-[oklch(0.65_0.22_240/0.2)]",
    hoverAccent: "from-[oklch(0.78_0.15_195/0.3)] to-[oklch(0.65_0.22_240/0.3)]",
  },
  {
    icon: Brain,
    title: "Inteligência Artificial",
    description:
      "Implementamos soluções com IA para análise preditiva, processamento de linguagem natural, assistentes virtuais e automação cognitiva.",
    features: ["GPT & LLMs", "Análise de Dados", "IA Conversacional"],
    accentColor: "from-[oklch(0.55_0.18_280/0.2)] to-[oklch(0.65_0.22_240/0.2)]",
    hoverAccent: "from-[oklch(0.55_0.18_280/0.3)] to-[oklch(0.65_0.22_240/0.3)]",
  },
  {
    icon: Bot,
    title: "Bots para WhatsApp",
    description:
      "Bots inteligentes que automatizam atendimento, qualificam leads, processam pedidos e integram com seus sistemas 24 horas por dia.",
    features: ["Atendimento 24/7", "Qualificação de Leads", "Integração CRM"],
    accentColor: "from-[oklch(0.65_0.22_240/0.2)] to-[oklch(0.55_0.18_280/0.2)]",
    hoverAccent: "from-[oklch(0.65_0.22_240/0.3)] to-[oklch(0.55_0.18_280/0.3)]",
  },
  {
    icon: Zap,
    title: "Automação de Processos",
    description:
      "Eliminamos tarefas repetitivas conectando ferramentas, automatizando workflows e criando integrações que economizam horas de trabalho manual.",
    features: ["N8N & Make", "APIs Custom", "Workflows"],
    accentColor: "from-[oklch(0.78_0.15_195/0.2)] to-[oklch(0.55_0.18_280/0.2)]",
    hoverAccent: "from-[oklch(0.78_0.15_195/0.3)] to-[oklch(0.55_0.18_280/0.3)]",
  },
  {
    icon: BarChart3,
    title: "Dashboards & BI",
    description:
      "Dashboards interativos e relatórios em tempo real que transformam dados em insights acionáveis para tomada de decisão estratégica.",
    features: ["Tempo Real", "KPIs Visuais", "Relatórios Automáticos"],
    accentColor: "from-[oklch(0.55_0.18_280/0.2)] to-[oklch(0.78_0.15_195/0.2)]",
    hoverAccent: "from-[oklch(0.55_0.18_280/0.3)] to-[oklch(0.78_0.15_195/0.3)]",
  },
]

export function ServicesSection() {
  const [headerRef, headerVisible] = useScrollAnimation()
  const { containerRef, visibleItems } = useStaggerAnimation(services.length, 150)

  return (
    <section id="servicos" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[oklch(0.04_0.02_260)] to-background" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className={`text-center mb-16 fade-in-up ${headerVisible ? "visible" : ""}`}>
          <span className="text-[oklch(0.78_0.15_195)] font-mono text-sm tracking-wider uppercase">O Que Fazemos</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">
            Soluções que <span className="text-gradient-ai">automatizam e escalam</span> seu negócio
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Da estratégia à execução, entregamos tecnologia de ponta com a agilidade de uma startup e a qualidade de uma
            empresa consolidada.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`bg-card border-border card-hover group cursor-pointer relative overflow-hidden scale-in ${
                visibleItems[index] ? "visible" : ""
              }`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.accentColor} opacity-0 group-hover:opacity-100 transition-all duration-500`}
              />

              <CardHeader className="relative">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.accentColor} group-hover:${service.hoverAccent} flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:glow-blue-sm`}
                >
                  <service.icon className="h-6 w-6 text-[oklch(0.78_0.15_195)] transition-transform group-hover:scale-110" />
                </div>
                <CardTitle className="text-xl flex items-center justify-between text-card-foreground">
                  {service.title}
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-[oklch(0.78_0.15_195)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground group-hover:bg-[oklch(0.65_0.22_240/0.15)] group-hover:text-[oklch(0.78_0.15_195)] transition-all duration-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
