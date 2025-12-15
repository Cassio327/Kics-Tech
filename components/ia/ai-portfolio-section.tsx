import { ExternalLink, Bot, MessageSquare, Mic, BarChart3 } from "lucide-react"

const projects = [
  {
    icon: Bot,
    title: "Assistente Virtual E-commerce",
    client: "Loja TechStore",
    description: "Chatbot que aumentou as vendas online em 45% e reduziu o tempo de atendimento em 70%.",
    metrics: [
      { label: "Aumento em Vendas", value: "+45%" },
      { label: "Redução de Tempo", value: "-70%" },
    ],
    tags: ["Chatbot", "E-commerce", "NLP"],
  },
  {
    icon: MessageSquare,
    title: "Bot de Agendamento WhatsApp",
    client: "Clínica SaúdePlus",
    description: "Automação completa de agendamentos com confirmação inteligente e lembretes automáticos.",
    metrics: [
      { label: "Agendamentos/mês", value: "2.500+" },
      { label: "Taxa de Confirmação", value: "95%" },
    ],
    tags: ["WhatsApp", "Healthcare", "Automação"],
  },
  {
    icon: Mic,
    title: "URA Inteligente com IA",
    client: "Banco Digital FinPay",
    description: "Sistema de atendimento por voz com IA que resolve 60% das chamadas sem intervenção humana.",
    metrics: [
      { label: "Resolução Autônoma", value: "60%" },
      { label: "Satisfação", value: "4.8/5" },
    ],
    tags: ["Voice AI", "Fintech", "Call Center"],
  },
  {
    icon: BarChart3,
    title: "Sistema de Previsão de Demanda",
    client: "Distribuidora LogiFast",
    description: "Modelo de machine learning para previsão de estoque que reduziu perdas em 35%.",
    metrics: [
      { label: "Redução de Perdas", value: "-35%" },
      { label: "Precisão", value: "92%" },
    ],
    tags: ["ML", "Logística", "Previsão"],
  },
]

export function AIPortfolioSection() {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="absolute inset-0 bg-radial-fade opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Cases</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Portfólio de <span className="text-gradient-ai">IA</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conheça alguns projetos de sucesso que desenvolvemos para nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 card-hover"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-1">{project.title}</h3>
              <p className="text-primary text-sm mb-4">{project.client}</p>
              <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

              {/* Metrics */}
              <div className="flex gap-6 mb-6">
                {project.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex}>
                    <p className="text-2xl font-bold text-primary">{metric.value}</p>
                    <p className="text-xs text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 rounded-full bg-secondary text-xs text-muted-foreground border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
