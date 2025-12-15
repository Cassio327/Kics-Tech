import { ArrowRight, MessageCircle, Zap, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FinalCTASection() {
  return (
    <section id="contato" className="py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/20 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-6 glow-blue">
          <Zap className="w-10 h-10 text-primary" />
        </div>

        {/* Title - Copy mais urgente */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
          Não Deixe Seu Concorrente <span className="text-gradient-ai">Sair na Frente</span>
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Enquanto você pensa, seus concorrentes estão automatizando, vendendo mais e crescendo.
          <strong className="text-foreground"> A hora de agir é agora.</strong>
        </p>

        {/* Urgency - Urgência mais forte */}
        <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-destructive/10 border border-destructive/30 mb-8">
          <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
          <span className="text-sm font-medium text-destructive">ATENÇÃO: Apenas 3 vagas disponíveis este mês</span>
        </div>

        {/* CTA Button - Botão maior e mais destacado */}
        <div className="mb-8">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-blue text-xl px-12 py-8 w-full sm:w-auto animate-pulse hover:animate-none"
          >
            <a
              href="https://wa.me/5511999999999?text=Olá! Quero iniciar meu projeto com a Kics Tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              FALE COM UM ESPECIALISTA AGORA
              <ArrowRight className="ml-3 h-6 w-6" />
            </a>
          </Button>
        </div>

        {/* Trust text */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["Resposta em até 2 horas", "Orçamento 100% gratuito", "Sem compromisso"].map((text, index) => (
            <span key={index} className="text-sm text-muted-foreground flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              {text}
            </span>
          ))}
        </div>

        {/* Contact info - Cards de contato mais bonitos */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
          >
            <Phone className="w-6 h-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <p className="text-sm text-muted-foreground mb-1">WhatsApp</p>
            <p className="font-semibold text-foreground">(11) 99999-9999</p>
          </a>
          <a
            href="mailto:contato@kicstech.com"
            className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
          >
            <Mail className="w-6 h-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <p className="text-sm text-muted-foreground mb-1">E-mail</p>
            <p className="font-semibold text-foreground">contato@kicstech.com</p>
          </a>
          <div className="p-4 rounded-xl bg-card border border-border">
            <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-sm text-muted-foreground mb-1">Horário</p>
            <p className="font-semibold text-foreground">Seg - Sex, 9h - 18h</p>
          </div>
        </div>
      </div>
    </section>
  )
}
