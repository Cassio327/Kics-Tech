import { Bot, MessageSquare, Mic, Cpu, Cog, BarChart3, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const solutions = [
  {
    icon: Bot,
    title: "Chatbots Inteligentes",
    description: "Atendimento 24/7 com IA conversacional que entende contexto e resolve problemas.",
    features: ["Atendimento automatizado", "Integração com CRM", "Análise de sentimento", "Multilíngue"],
    highlight: "Mais Popular",
  },
  {
    icon: MessageSquare,
    title: "Bots para WhatsApp",
    description: "Automatize vendas e suporte no WhatsApp com IA que converte visitantes em clientes.",
    features: ["Catálogo de produtos", "Agendamento automático", "Pagamentos integrados", "Notificações proativas"],
    highlight: null,
  },
  {
    icon: Mic,
    title: "IA de Voz",
    description: "Assistentes virtuais com reconhecimento de voz para call centers e atendimento telefônico.",
    features: ["Transcrição em tempo real", "Análise de chamadas", "URA inteligente", "Voicebot personalizado"],
    highlight: null,
  },
  {
    icon: Cpu,
    title: "Modelos Personalizados",
    description: "Treinamento de modelos de IA específicos para as necessidades do seu negócio.",
    features: ["Fine-tuning de LLMs", "IA de classificação", "Previsão de demanda", "Detecção de anomalias"],
    highlight: "Avançado",
  },
  {
    icon: Cog,
    title: "Automação de Processos",
    description: "Elimine tarefas repetitivas e aumente a produtividade com automação inteligente.",
    features: ["RPA com IA", "Processamento de documentos", "Workflows automáticos", "Integração de sistemas"],
    highlight: null,
  },
  {
    icon: BarChart3,
    title: "Análise Preditiva",
    description: "Tome decisões baseadas em dados com insights gerados por machine learning.",
    features: ["Previsão de vendas", "Análise de churn", "Recomendações", "Dashboards inteligentes"],
    highlight: null,
  },
]

export function AIRecommendedSolutions() {
  return (
    <section id="solucoes" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Soluções</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Soluções Recomendadas para <span className="text-gradient-ai">Empresas</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Escolha a solução de IA ideal para impulsionar seu negócio e superar a concorrência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 card-hover flex flex-col"
            >
              {/* Highlight Badge */}
              {solution.highlight && (
                <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                  {solution.highlight}
                </div>
              )}

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6">
                <solution.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">{solution.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{solution.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6 flex-grow">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant="outline"
                className="w-full border-primary/30 text-foreground hover:bg-primary/10 mt-auto bg-transparent"
              >
                Saiba Mais
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
