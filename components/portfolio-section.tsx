import { ExternalLink, Globe, Server, Brain, Bot, BarChart3, ShoppingCart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    icon: Globe,
    title: "Landing Page SaaS",
    category: "Site",
    description: "Landing page moderna e otimizada para conversão de uma startup de software financeiro.",
    metrics: "+65% conversão",
    tags: ["Next.js", "Tailwind", "SEO"],
  },
  {
    icon: Server,
    title: "Sistema de Gestão",
    category: "Sistema Web",
    description: "ERP completo para gestão de estoque, vendas e financeiro de distribuidora.",
    metrics: "500+ usuários",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    icon: Brain,
    title: "Chatbot E-commerce",
    category: "Inteligência Artificial",
    description: "IA conversacional que aumentou vendas automatizando atendimento e recomendações.",
    metrics: "+40% vendas",
    tags: ["GPT-4", "Python", "MongoDB"],
  },
  {
    icon: Bot,
    title: "Bot WhatsApp Clínica",
    category: "Bot WhatsApp",
    description: "Sistema de agendamento e triagem automatizada para rede de clínicas.",
    metrics: "2,5 mil agendamentos/dia",
    tags: ["WhatsApp API", "N8N", "Supabase"],
  },
  {
    icon: BarChart3,
    title: "Dashboard Analytics",
    category: "Dashboard",
    description: "Painel interativo com dados em tempo real para tomada de decisões estratégicas.",
    metrics: "15+ métricas",
    tags: ["React", "D3.js", "Firebase"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Premium",
    category: "Site",
    description: "Loja virtual completa com checkout otimizado e integração de pagamentos.",
    metrics: "R$ 500 mil/mês",
    tags: ["Next.js", "Stripe", "Sanity"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[oklch(0.78_0.15_195)] text-sm font-semibold uppercase tracking-wider">Portfólio</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Projetos que <span className="text-gradient-ai">geram resultados</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos e os resultados alcançados por nossos clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border overflow-hidden group hover:border-[oklch(0.65_0.22_240/0.3)] transition-all duration-300 card-hover"
            >
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[oklch(0.65_0.22_240/0.1)] border border-[oklch(0.65_0.22_240/0.2)] flex items-center justify-center group-hover:glow-blue-sm transition-shadow">
                    <project.icon className="w-6 h-6 text-[oklch(0.78_0.15_195)]" />
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-[oklch(0.65_0.22_240/0.1)] text-[oklch(0.78_0.15_195)] border border-[oklch(0.65_0.22_240/0.2)]">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2 text-card-foreground group-hover:text-[oklch(0.78_0.15_195)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="mb-4 p-3 rounded-lg bg-gradient-to-r from-[oklch(0.65_0.22_240/0.1)] to-[oklch(0.78_0.15_195/0.1)] border border-[oklch(0.65_0.22_240/0.1)]">
                  <span className="text-[oklch(0.78_0.15_195)] font-semibold">{project.metrics}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            asChild
            className="bg-[oklch(0.78_0.15_195)] text-[oklch(0.02_0.01_260)] hover:bg-[oklch(0.82_0.15_195)] glow-cyan px-8 py-6"
          >
            <a href="#contato">
              <ExternalLink className="h-5 w-5 mr-2" />
              Quero um Projeto Assim
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
