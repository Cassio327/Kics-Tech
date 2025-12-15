import { MessageCircle, Search, Code, Rocket, ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Conversa Inicial",
    description:
      "Entendemos seu negócio, desafios e objetivos. Identificamos as melhores oportunidades de aplicação de IA.",
  },
  {
    number: "02",
    icon: Search,
    title: "Análise e Planejamento",
    description: "Mapeamos processos, definimos métricas de sucesso e criamos a arquitetura ideal da solução de IA.",
  },
  {
    number: "03",
    icon: Code,
    title: "Desenvolvimento",
    description: "Construímos, treinamos e refinamos sua IA com as tecnologias mais avançadas do mercado.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Entrega e Suporte",
    description: "Implementamos a solução, treinamos sua equipe e oferecemos suporte contínuo para otimização.",
  },
]

export function AIHowItWorksSection() {
  return (
    <section id="como-funciona" className="py-24 relative">
      <div className="absolute inset-0 bg-radial-fade opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Processo</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Como <span className="text-gradient-ai">Funciona</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Um processo estruturado para garantir que sua solução de IA seja entregue com excelência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full card-hover">
                {/* Step Number */}
                <span className="text-6xl font-bold text-primary/10 absolute top-4 right-4">{step.number}</span>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 glow-blue-sm">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>

              {/* Arrow Connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-primary/30" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
