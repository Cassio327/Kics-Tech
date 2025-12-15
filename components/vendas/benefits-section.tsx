import { TrendingUp, Clock, DollarSign, Shield, Headphones, Rocket, CheckCircle } from "lucide-react"

const benefits = [
  {
    icon: TrendingUp,
    title: "Aumente Suas Vendas",
    description: "Sites e sistemas otimizados para conversão. Transforme visitantes em clientes pagantes.",
    highlight: "+40% vendas em média",
  },
  {
    icon: Clock,
    title: "Economize Tempo",
    description: "Automações que eliminam tarefas repetitivas. Foque no que realmente importa.",
    highlight: "20h/semana economizadas",
  },
  {
    icon: DollarSign,
    title: "Reduza Custos",
    description: "Bots e IAs que trabalham 24/7. Atendimento automatizado sem contratar equipe.",
    highlight: "Até 60% menos custos",
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Código limpo, boas práticas e proteção de dados. Seu negócio em boas mãos.",
    highlight: "100% seguro",
  },
  {
    icon: Headphones,
    title: "Suporte Dedicado",
    description: "Acompanhamento durante todo o projeto. Nunca fique na mão.",
    highlight: "Resposta em 2h",
  },
  {
    icon: Rocket,
    title: "Entrega Rápida",
    description: "Metodologia ágil para entregar resultados em semanas, não meses.",
    highlight: "Até 15 dias",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Copy mais persuasiva */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
            Por que nos escolher?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-card-foreground mb-4">
            Resultados <span className="text-gradient-ai">Comprovados</span> Para Seu Negócio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Não prometemos milagres. Entregamos soluções que funcionam de verdade.
          </p>
        </div>

        {/* Benefits grid - Cards com highlight de métricas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:glow-blue-sm transition-all">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">{benefit.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    <CheckCircle className="w-4 h-4" />
                    {benefit.highlight}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
