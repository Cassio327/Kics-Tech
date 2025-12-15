"use client"

import type React from "react"
import { useState } from "react"
import { MessageCircle, CheckCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    objetivo: "",
    possuiSite: "",
    prazo: "",
    orcamento: "",
    detalhes: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const [headerRef, headerVisible] = useScrollAnimation()
  const [contentRef, contentVisible] = useScrollAnimation()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/send-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Erro ao enviar solicitação")
      }

      console.log("[v0] Solicitação enviada com sucesso:", data)
      setIsSubmitted(true)

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        objetivo: "",
        possuiSite: "",
        prazo: "",
        orcamento: "",
        detalhes: "",
      })
    } catch (err) {
      console.error("[v0] Erro ao enviar formulário:", err)
      setError(err instanceof Error ? err.message : "Erro ao enviar solicitação. Tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const objetivoOptions = [
    "Criar um site institucional",
    "Desenvolver uma loja virtual (e-commerce)",
    "Criar um sistema web / dashboard",
    "Automatizar processos",
    "Redesign / Modernização de site existente",
    "Aplicativo web",
    "Integração com APIs / sistemas",
    "Consultoria técnica",
    "Outro",
  ]

  const prazoOptions = [
    "Urgente (menos de 2 semanas)",
    "Curto prazo (2-4 semanas)",
    "Médio prazo (1-2 meses)",
    "Longo prazo (mais de 2 meses)",
    "Sem prazo definido",
  ]

  const orcamentoOptions = [
    "Até R$ 1.000",
    "R$ 1.000 - R$ 2.500",
    "R$ 2.500 - R$ 5.000",
    "R$ 5.000 - R$ 10.000",
    "Acima de R$ 10.000",
    "Preciso de ajuda para definir",
  ]

  const motivosParaEscolher = [
    "Orçamento sem compromisso",
    "Resposta em até 24h",
    "Suporte dedicado",
    "Código-fonte entregue",
    "Garantia de satisfação",
  ]

  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-fade" />

      <div className="particles">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`text-center mb-12 py-16 px-8 rounded-3xl relative overflow-hidden fade-in-up ${headerVisible ? "visible" : ""}`}
          style={{
            background: "linear-gradient(135deg, oklch(0.65 0.22 240 / 0.3) 0%, oklch(0.78 0.15 195 / 0.2) 100%)",
          }}
        >
          <div className="absolute inset-0 bg-grid opacity-30" />
          {/* Decorative dots */}
          <div className="absolute top-8 left-1/4 w-2 h-2 rounded-full bg-[oklch(0.65_0.22_240/0.5)]" />
          <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-[oklch(0.78_0.15_195/0.5)]" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Solicite seu <span className="text-gradient-ai">Orçamento</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Responda algumas perguntas rápidas para que eu possa entender melhor seu projeto e oferecer a solução
              ideal.
            </p>
          </div>
        </div>

        <div ref={contentRef} className={`grid lg:grid-cols-3 gap-8 fade-in-up ${contentVisible ? "visible" : ""}`}>
          {/* Formulário - Coluna maior à esquerda */}
          <Card className="lg:col-span-2 bg-card border-border hover-border-glow">
            <CardContent className="p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-10 w-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Solicitação Enviada!</h3>
                  <p className="text-muted-foreground max-w-md mx-auto mb-4">
                    Recebemos sua solicitação de orçamento. Entraremos em contato em até 24 horas úteis.
                  </p>
                  <div className="bg-[oklch(0.65_0.22_240/0.05)] border border-[oklch(0.65_0.22_240/0.15)] rounded-lg p-4 max-w-md mx-auto mb-6">
                    <p className="text-sm text-muted-foreground mb-2">
                      Ficou com alguma dúvida? Entre em contato pelo WhatsApp:
                    </p>
                    <a
                      href="https://wa.me/5581973022819"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[oklch(0.65_0.22_240)] hover:text-[oklch(0.60_0.22_240)] font-semibold transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      (81) 97302-2819
                    </a>
                  </div>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-[oklch(0.65_0.22_240)] text-white hover:bg-[oklch(0.60_0.22_240)]"
                  >
                    Enviar Outra Solicitação
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Section 1: Informações de Contato */}
                  <div className="space-y-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-[oklch(0.65_0.22_240)] flex items-center justify-center text-sm font-bold text-white">
                        1
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">Informações de Contato</h3>
                    </div>

                    <div>
                      <Label className="text-sm font-medium text-card-foreground mb-2 block">
                        Nome completo <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-secondary border-border focus:border-[oklch(0.65_0.22_240)] focus:glow-blue-sm transition-all duration-300"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <Label className="text-sm font-medium text-card-foreground mb-2 block">
                          E-mail <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          type="email"
                          placeholder="seu@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="bg-secondary border-border focus:border-[oklch(0.65_0.22_240)] focus:glow-blue-sm transition-all duration-300"
                        />
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-card-foreground mb-2 block">WhatsApp</Label>
                        <Input
                          placeholder="+55 (11) 99999-9999"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="bg-secondary border-border focus:border-[oklch(0.65_0.22_240)] focus:glow-blue-sm transition-all duration-300"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Sobre o projeto */}
                  <div className="space-y-5 pt-4 border-t border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-[oklch(0.65_0.22_240)] flex items-center justify-center text-sm font-bold text-white">
                        2
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">Sobre o Projeto</h3>
                    </div>

                    <div>
                      <Label className="text-sm font-medium text-card-foreground mb-2 block">
                        Qual é o seu objetivo? <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        value={formData.objetivo}
                        onValueChange={(value) => setFormData({ ...formData, objetivo: value })}
                        required
                      >
                        <SelectTrigger className="w-full bg-secondary border-border focus:border-[oklch(0.65_0.22_240)] focus:glow-blue-sm transition-all duration-300">
                          <SelectValue placeholder="Selecione uma opção" />
                        </SelectTrigger>
                        <SelectContent>
                          {objetivoOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-sm font-medium text-card-foreground mb-3 block">
                        Você já possui um site?
                      </Label>
                      <RadioGroup
                        value={formData.possuiSite}
                        onValueChange={(value) => setFormData({ ...formData, possuiSite: value })}
                        className="flex flex-wrap gap-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="sim" id="site-sim" />
                          <Label htmlFor="site-sim" className="text-muted-foreground cursor-pointer">
                            Sim
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="nao" id="site-nao" />
                          <Label htmlFor="site-nao" className="text-muted-foreground cursor-pointer">
                            Não
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="em-andamento" id="site-andamento" />
                          <Label htmlFor="site-andamento" className="text-muted-foreground cursor-pointer">
                            Em andamento
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>

                  {/* Section 3: Prazo e investimento */}
                  <div className="space-y-5 pt-4 border-t border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-[oklch(0.65_0.22_240)] flex items-center justify-center text-sm font-bold text-white">
                        3
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">Prazo e Investimento</h3>
                    </div>

                    <div>
                      <Label className="text-sm font-medium text-card-foreground mb-2 block">Tem prazo definido?</Label>
                      <Select
                        value={formData.prazo}
                        onValueChange={(value) => setFormData({ ...formData, prazo: value })}
                      >
                        <SelectTrigger className="w-full bg-secondary border-border focus:border-[oklch(0.65_0.22_240)] focus:glow-blue-sm transition-all duration-300">
                          <SelectValue placeholder="Selecione uma opção" />
                        </SelectTrigger>
                        <SelectContent>
                          {prazoOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-sm font-medium text-card-foreground mb-2 block">Faixa de orçamento</Label>
                      <Select
                        value={formData.orcamento}
                        onValueChange={(value) => setFormData({ ...formData, orcamento: value })}
                      >
                        <SelectTrigger className="w-full bg-secondary border-border focus:border-[oklch(0.65_0.22_240)] focus:glow-blue-sm transition-all duration-300">
                          <SelectValue placeholder="Selecione uma opção" />
                        </SelectTrigger>
                        <SelectContent>
                          {orcamentoOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Section 4: Detalhes do projeto */}
                  <div className="space-y-5 pt-4 border-t border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-[oklch(0.65_0.22_240)] flex items-center justify-center text-sm font-bold text-white">
                        4
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">Detalhes do Projeto</h3>
                    </div>

                    <div>
                      <Label className="text-sm font-medium text-card-foreground mb-2 block">
                        Conte mais sobre seu projeto
                      </Label>
                      <Textarea
                        placeholder="Descreva brevemente o que você precisa, quais funcionalidades são importantes, referências de sites que você gosta..."
                        rows={5}
                        value={formData.detalhes}
                        onChange={(e) => setFormData({ ...formData, detalhes: e.target.value })}
                        className="bg-secondary border-border focus:border-[oklch(0.65_0.22_240)] focus:glow-blue-sm resize-none transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Submit button */}
                  <div className="pt-4">
                    {error && (
                      <div className="mb-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm">
                        {error}
                      </div>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting || !formData.name || !formData.email || !formData.objetivo}
                      className="w-full bg-[oklch(0.65_0.22_240)] text-white hover:bg-[oklch(0.60_0.22_240)] glow-blue py-6 hover-lift group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <MessageCircle className="h-5 w-5 mr-2" />
                          Solicitar Projeto
                        </>
                      )}
                    </Button>

                    {/* Security message */}
                    <p className="text-center text-sm text-muted-foreground mt-4">
                      Suas informações estão seguras e serão respondidas em até 24 horas úteis.
                    </p>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>

          <div className="lg:col-span-1">
            <Card className="bg-[oklch(0.65_0.22_240/0.05)] border-[oklch(0.65_0.22_240/0.15)] sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-6">Por que me escolher?</h3>
                <div className="space-y-4">
                  {motivosParaEscolher.map((motivo, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </div>
                      <span className="text-muted-foreground">{motivo}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
