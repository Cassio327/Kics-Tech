import { Star, Quote, BadgeCheck } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "CEO, TechCorp",
    content:
      "A Kics Tech entregou nosso sistema em tempo recorde. A qualidade superou todas as expectativas. Recomendo fortemente!",
    rating: 5,
    result: "Sistema entregue em 12 dias",
  },
  {
    name: "Ana Paula Silva",
    role: "Diretora, E-commerce Plus",
    content:
      "O bot de WhatsApp aumentou nossas vendas em 40%. Atendimento automático 24h foi um divisor de águas pro nosso negócio.",
    rating: 5,
    result: "+40% em vendas",
  },
  {
    name: "Roberto Almeida",
    role: "Fundador, StartupBR",
    content:
      "Profissionalismo impecável. Desde a primeira reunião até a entrega final, tudo foi transparente e bem executado.",
    rating: 5,
    result: "Projeto dentro do prazo",
  },
  {
    name: "Mariana Costa",
    role: "Gerente, InnovaDigital",
    content: "As automações criadas pela Kics Tech economizam mais de 20 horas semanais da nossa equipe. ROI incrível!",
    rating: 5,
    result: "20h/semana economizadas",
  },
]

const stats = [
  { value: "50+", label: "Projetos Entregues" },
  { value: "98%", label: "Clientes Satisfeitos" },
  { value: "24h", label: "Tempo de Resposta" },
  { value: "3 anos", label: "No Mercado" },
]

export function SocialProofSection() {
  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
            Prova Social
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-card-foreground mb-4">
            Empresas <span className="text-gradient-ai">Reais</span>, Resultados{" "}
            <span className="text-gradient-ai">Reais</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Não acredite apenas em nós. Veja o que nossos clientes dizem.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-secondary/50 border border-border">
              <p className="text-3xl sm:text-4xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials - Adicionando resultado específico em cada depoimento */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-secondary/30 border border-border hover:border-primary/30 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                {/* Badge de resultado */}
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs font-semibold text-primary">
                  <BadgeCheck className="w-3 h-3" />
                  {testimonial.result}
                </span>
              </div>

              <div className="relative mb-4">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                <p className="text-card-foreground leading-relaxed pl-6">{testimonial.content}</p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{testimonial.name[0]}</span>
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
