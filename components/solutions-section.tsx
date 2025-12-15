import { MessageSquare, Bot, Mic, Brain, Cog, BarChart3, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const solutions = [
  {
    icon: MessageSquare,
    title: "Chatbots Inteligentes",
    description: "Atendimento 24/7 com IA que entende contexto, responde dúvidas e qualifica leads automaticamente.",
    features: ["Integração com site e apps", "Múltiplos idiomas", "Aprendizado contínuo"],
  },
  {
    icon: Bot,
    title: "Bots de WhatsApp",
    description: "Automatize vendas, suporte e agendamentos no WhatsApp com IA conversacional avançada.",
    features: ["API oficial WhatsApp", "Fluxos personalizados", "Relatórios em tempo real"],
  },
  {
    icon: Mic,
    title: "IA de Voz",
    description: "Assistentes de voz e sistemas de transcrição que transformam áudio em ação e insights.",
    features: ["Reconhecimento de fala", "Síntese de voz natural", "Comandos por voz"],
  },
  {
    icon: Brain,
    title: "Modelos Personalizados",
    description: "Treinamos IAs específicas para seu negócio usando seus dados e regras de negócio.",
    features: ["Fine-tuning de LLMs", "Dados proprietários", "Alta precisão"],
  },
  {
    icon: Cog,
    title: "Automação de Processos",
    description: "Elimine tarefas repetitivas com agentes de IA que executam workflows complexos.",
    features: ["RPA com IA", "Integração de sistemas", "Zero erros humanos"],
  },
  {
    icon: BarChart3,
    title: "Análise Preditiva",
    description: "Tome decisões baseadas em dados com modelos que preveem tendências e comportamentos.",
    features: ["Machine Learning", "Dashboards em tempo real", "Alertas inteligentes"],
  },
]

export function SolutionsSection() {
  return (
    <section id="solucoes" className="py-24 bg-card/30 relative">
      <div className="absolute inset-0 bg-radial-fade opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Soluções</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Soluções Recomendadas para Empresas
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tecnologias de IA prontas para serem adaptadas às necessidades específicas do seu negócio.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 card-hover group flex flex-col"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:glow-blue-sm transition-shadow">
                <solution.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">{solution.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">{solution.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {solution.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-blue px-8 py-6 text-lg"
          >
            <a href="#contato">
              Solicitar Proposta Personalizada
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
