import { Globe, Database, Bot, Cpu, Cog, BarChart3, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Globe,
    title: "Sites & Landing Pages",
    description: "Sites profissionais que convertem visitantes em clientes.",
    features: ["Design responsivo", "SEO otimizado", "Alta velocidade", "Integração com CRM"],
    price: "A partir de R$ 1.500",
  },
  {
    icon: Database,
    title: "Sistemas Web",
    description: "Sistemas personalizados para gerenciar seu negócio.",
    features: ["Painel administrativo", "Relatórios", "Multiusuários", "API integrada"],
    price: "A partir de R$ 3.000",
  },
  {
    icon: Bot,
    title: "Bots de WhatsApp",
    description: "Atendimento automatizado 24 horas por dia.",
    features: ["Respostas inteligentes", "Integração com sistemas", "Relatórios", "Menu interativo"],
    price: "A partir de R$ 800",
  },
  {
    icon: Cpu,
    title: "Inteligência Artificial",
    description: "IAs treinadas para seu negócio específico.",
    features: ["Chatbots com IA", "Análise de dados", "Automação inteligente", "Modelos personalizados"],
    price: "A partir de R$ 2.500",
  },
  {
    icon: Cog,
    title: "Automações",
    description: "Elimine tarefas repetitivas e ganhe tempo.",
    features: ["Integração de sistemas", "Workflows", "Notificações", "Relatórios automáticos"],
    price: "A partir de R$ 600",
  },
  {
    icon: BarChart3,
    title: "Dashboards",
    description: "Painéis de controle para tomada de decisão.",
    features: ["Gráficos interativos", "Dados em tempo real", "KPIs personalizados", "Exportação"],
    price: "A partir de R$ 1.200",
  },
]

export function ServicesListSection() {
  return (
    <section id="servicos" className="py-24 relative">
      <div className="absolute inset-0 bg-radial-fade opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Soluções <span className="text-gradient-ai">Completas</span> Para Seu Negócio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada projeto é único. Desenvolvemos a solução ideal para suas necessidades.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 card-hover transition-all duration-300 flex flex-col"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-xl font-bold text-card-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>

              <ul className="space-y-2 mb-6 flex-grow">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-border">
                <p className="text-lg font-semibold text-primary mb-3">{service.price}</p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-primary/30 text-foreground hover:bg-primary/10 bg-transparent"
                >
                  <a href="#contato">
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
