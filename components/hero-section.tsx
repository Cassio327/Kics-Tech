"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Server, Brain, Bot, Zap, BarChart3 } from "lucide-react"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-tech-gradient" />
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-radial-fade" />

      {/* Glow orbs com cores da nova paleta */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[oklch(0.65_0.22_240/0.08)] rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[oklch(0.55_0.18_280/0.06)] rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[oklch(0.78_0.15_195/0.05)] rounded-full blur-3xl" />

      <div className="particles">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[oklch(0.65_0.22_240/0.1)] border border-[oklch(0.65_0.22_240/0.3)] mb-8 animate-border-flow transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Zap className="w-4 h-4 text-[oklch(0.78_0.15_195)] animate-pulse" />
            <span className="text-sm text-[oklch(0.78_0.15_195)] font-medium">Automação e Inteligência Artificial</span>
          </div>

          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-balance transition-all duration-1000 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-foreground">Tecnologia que trabalha</span>
            <br />
            <span className="text-gradient-ai animate-text-glow">enquanto você escala</span>
          </h1>

          <p
            className={`text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty transition-all duration-1000 delay-400 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Automatize processos, integre inteligência artificial ao seu negócio e libere sua equipe para o que
            realmente importa. Sites, sistemas, bots e dashboards sob medida para empresas que querem crescer sem
            limites.
          </p>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-1000 delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button
              size="lg"
              asChild
              className="bg-[oklch(0.78_0.15_195)] text-[oklch(0.02_0.01_260)] hover:bg-[oklch(0.82_0.15_195)] glow-cyan px-10 py-7 text-lg font-semibold hover-lift group"
            >
              <a href="#contato">
                Quero Automatizar Meu Negócio
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-[oklch(0.55_0.18_280/0.5)] hover:bg-[oklch(0.55_0.18_280/0.1)] px-10 py-7 text-lg bg-transparent hover:border-[oklch(0.55_0.18_280)] transition-all duration-300"
            >
              <a href="#servicos">Ver Soluções</a>
            </Button>
          </div>

          <div
            className={`grid grid-cols-2 md:grid-cols-6 gap-4 max-w-4xl mx-auto transition-all duration-1000 delay-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {[
              { icon: Globe, label: "Sites & Apps" },
              { icon: Server, label: "Sistemas Web" },
              { icon: Brain, label: "IA Customizada" },
              { icon: Bot, label: "Bots WhatsApp" },
              { icon: Zap, label: "Automações" },
              { icon: BarChart3, label: "Dashboards" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 p-4 rounded-lg bg-[oklch(0.05_0.015_260/0.8)] border border-[oklch(0.15_0.025_260)] hover:border-[oklch(0.65_0.22_240/0.5)] hover-lift hover-glow transition-all duration-300 group cursor-pointer"
                style={{ transitionDelay: `${800 + index * 100}ms` }}
              >
                <item.icon className="w-6 h-6 text-[oklch(0.78_0.15_195)] group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto transition-all duration-1000 delay-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { value: "50+", label: "Automações Ativas", color: "text-[oklch(0.65_0.22_240)]" },
            { value: "98%", label: "Clientes Renovam", color: "text-[oklch(0.78_0.15_195)]" },
            { value: "40%", label: "Redução de Custos", color: "text-[oklch(0.55_0.18_280)]" },
            { value: "<24h", label: "Tempo de Resposta", color: "text-[oklch(0.65_0.22_240)]" },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div
                className={`text-3xl sm:text-4xl font-bold ${stat.color} mb-2 group-hover:animate-text-glow transition-all`}
              >
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-[oklch(0.78_0.15_195/0.4)] flex justify-center pt-2 hover:border-[oklch(0.78_0.15_195/0.6)] transition-colors">
          <div className="w-1 h-2 bg-[oklch(0.78_0.15_195)] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
