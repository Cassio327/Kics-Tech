"use client"

import { ArrowRight, Zap, Play, Users, Award, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SalesHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-radial-fade" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Logo */}
        <Link href="/" className="inline-flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center glow-blue-sm">
            <Zap className="w-6 h-6 text-primary" />
          </div>
          <span className="text-2xl font-bold text-foreground">
            Kics <span className="text-primary">Tech</span>
          </span>
        </Link>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/30 mb-8">
          <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
          <span className="text-sm font-medium text-destructive">OFERTA LIMITADA: 20% OFF para novos clientes</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
          Seu Negócio Precisa de <span className="text-gradient-ai">Tecnologia que Funciona</span>
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Sites, sistemas, automações e IAs que <strong className="text-foreground">geram resultados reais</strong>. Sem
          enrolação, sem atrasos, sem dor de cabeça.
        </p>

        {/* Quick benefits */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {[
            { icon: Clock, text: "Entrega em até 15 dias" },
            { icon: Users, text: "Suporte humanizado" },
            { icon: Award, text: "Garantia de 30 dias" },
          ].map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-muted-foreground bg-secondary/50 px-4 py-2 rounded-full border border-border"
            >
              <benefit.icon className="w-4 h-4 text-primary" />
              <span className="text-sm">{benefit.text}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-blue text-lg px-8 py-6 w-full sm:w-auto"
          >
            <a
              href="https://wa.me/5511999999999?text=Olá! Quero saber mais sobre os serviços da Kics Tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero Meu Orçamento Grátis
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary/30 text-foreground hover:bg-primary/10 text-lg px-8 py-6 w-full sm:w-auto bg-transparent"
          >
            <a href="#servicos">
              <Play className="mr-2 h-4 w-4" />
              Ver Serviços
            </a>
          </Button>
        </div>

        {/* Micro-copy */}
        <p className="text-sm text-muted-foreground mb-12">Resposta em até 2 horas • Sem compromisso • 100% gratuito</p>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-sm">
          {[
            { value: "50+", label: "Projetos Entregues" },
            { value: "98%", label: "Clientes Satisfeitos" },
            { value: "40%", label: "Aumento em Vendas" },
            { value: "24h", label: "Tempo de Resposta" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</p>
              <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
