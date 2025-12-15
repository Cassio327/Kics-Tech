import { FileText, Code2, Rocket, Headphones } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Análise e Planejamento",
    description: "Entendemos seu negócio, mapeamos processos e identificamos onde a IA pode gerar maior impacto e ROI.",
  },
  {
    number: "02",
    icon: Code2,
    title: "Desenvolvimento da IA",
    description: "Construímos sua solução de IA personalizada, treinando modelos específicos para suas necessidades.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Implementação",
    description: "Integramos a IA aos seus sistemas existentes (WhatsApp, site, CRM) com testes rigorosos.",
  },
  {
    number: "04",
    icon: Headphones,
    title: "Suporte Contínuo",
    description: "Monitoramos performance, ajustamos modelos e garantimos evolução constante da sua IA.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Processo</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">Como Funciona</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Um processo estruturado para entregar soluções de IA que realmente funcionam para o seu negócio.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 card-hover group"
            >
              {/* Step Number */}
              <span className="text-6xl font-bold text-primary/10 absolute top-4 right-4 group-hover:text-primary/20 transition-colors">
                {step.number}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>

              {/* Connector Line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
