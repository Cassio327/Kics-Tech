import { ArrowRight, MessageCircle, Zap, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

const benefits = [
  { icon: Zap, text: "Resposta em até 24h" },
  { icon: Shield, text: "Consultoria gratuita" },
  { icon: MessageCircle, text: "Suporte dedicado" },
]

export function AIContactCTA() {
  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-card/50" />
      <div className="absolute inset-0 bg-radial-fade" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main CTA */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Pronto para transformar seu negócio com <span className="text-gradient-ai">Inteligência Artificial</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Agende uma conversa com nossos especialistas e descubra como a IA pode aumentar suas vendas, reduzir custos
            e melhorar a experiência dos seus clientes.
          </p>

          {/* Big CTA Button */}
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-blue text-xl px-12 py-8 rounded-xl"
          >
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              Fale com um Especialista
              <ArrowRight className="w-6 h-6" />
            </a>
          </Button>
        </div>

        {/* Benefits */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 text-muted-foreground">
              <benefit.icon className="w-5 h-5 text-primary" />
              <span className="text-sm">{benefit.text}</span>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-12 border-t border-border">
          <p className="text-sm text-muted-foreground mb-6">Tecnologias que utilizamos</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {["OpenAI", "LangChain", "Python", "TensorFlow", "AWS", "Google Cloud"].map((tech, index) => (
              <span key={index} className="text-foreground font-mono text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
