import { ShieldCheck, RefreshCw, MessageCircle } from "lucide-react"

export function GuaranteeSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-radial-fade opacity-30" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center p-8 sm:p-12 rounded-2xl bg-card border-2 border-primary/30 glow-blue">
          {/* Icon */}
          <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="w-10 h-10 text-primary" />
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-bold text-card-foreground mb-4">
            Garantia de <span className="text-gradient-ai">Satisfação Total</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Estamos tão confiantes na qualidade do nosso trabalho que oferecemos{" "}
            <strong className="text-card-foreground">30 dias de garantia</strong> em todos os projetos. Se não ficar
            satisfeito, fazemos os ajustes necessários sem custo adicional.
          </p>

          {/* Guarantees */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            <div className="p-4 rounded-lg bg-secondary/50 border border-border">
              <ShieldCheck className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-card-foreground mb-1">30 Dias de Garantia</h3>
              <p className="text-sm text-muted-foreground">Ajustes gratuitos no período</p>
            </div>

            <div className="p-4 rounded-lg bg-secondary/50 border border-border">
              <RefreshCw className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-card-foreground mb-1">Revisões Ilimitadas</h3>
              <p className="text-sm text-muted-foreground">Até você aprovar o projeto</p>
            </div>

            <div className="p-4 rounded-lg bg-secondary/50 border border-border">
              <MessageCircle className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-card-foreground mb-1">Suporte Contínuo</h3>
              <p className="text-sm text-muted-foreground">Estamos sempre disponíveis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
