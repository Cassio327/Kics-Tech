import { Bot, MessageSquare, Mic, Cpu, Cog, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  { icon: Bot, label: "Chatbots" },
  { icon: MessageSquare, label: "Bots WhatsApp" },
  { icon: Mic, label: "IA de Voz" },
  { icon: Cpu, label: "Modelos Personalizados" },
  { icon: Cog, label: "Automação" },
]

export function AIHeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-radial-fade" />

      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Inteligência Artificial Avançada</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
            Potencialize seu negócio com <span className="text-gradient-ai">IAs sob medida</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed text-pretty">
            Desenvolvemos soluções de Inteligência Artificial personalizadas que automatizam processos, aumentam vendas
            e transformam a experiência dos seus clientes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-blue text-lg px-8 py-6"
            >
              <a href="#contato">Fale com um Especialista</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/30 text-foreground hover:bg-primary/10 text-lg px-8 py-6 bg-transparent"
            >
              <a href="#portfolio">Ver Portfólio de IA</a>
            </Button>
          </div>

          {/* Services Icons */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground font-medium">{service.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
