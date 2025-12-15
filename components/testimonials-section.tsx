"use client"

import { Star, Quote } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { useScrollAnimation, useStaggerAnimation } from "@/hooks/use-scroll-animation"

const testimonials = [
  {
    name: "Ricardo Almeida",
    role: "CEO, Logistica Express",
    content:
      "O bot de WhatsApp da Kics Tech reduziu nosso tempo de atendimento de 4 horas para 3 minutos. Nosso NPS subiu 40 pontos em dois meses. Simplesmente transformador.",
    rating: 5,
    avatar: "RA",
    image: "/testimonial-ricardo.png",
  },
  {
    name: "Fernanda Costa",
    role: "Diretora Comercial, Imobiliaria Prime",
    content:
      "A automacao de qualificacao de leads mudou nosso jogo. Antes perdiamos oportunidades por demora no contato. Hoje, o lead e qualificado automaticamente e direcionado ao corretor certo em segundos.",
    rating: 5,
    avatar: "FC",
    image: "/testimonial-fernanda.png",
  },
  {
    name: "Bruno Martins",
    role: "Founder, HealthTech Solutions",
    content:
      "Precisavamos de um sistema complexo de agendamento com IA. A Kics entregou em 6 semanas o que outras empresas orcaram em 6 meses. Qualidade absurda e comunicacao impecavel.",
    rating: 5,
    avatar: "BM",
    image: "/testimonial-bruno.png",
  },
]

export function TestimonialsSection() {
  const [headerRef, headerVisible] = useScrollAnimation()
  const { containerRef, visibleItems } = useStaggerAnimation(testimonials.length, 200)

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className={`text-center mb-16 fade-in-up ${headerVisible ? "visible" : ""}`}>
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Depoimentos</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
            Resultados que <span className="text-gradient-ai">falam por si</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nao acredite apenas em nos. Veja o que nossos clientes tem a dizer sobre trabalhar com a Kics Tech.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`bg-card border-border card-hover group scale-in ${visibleItems[index] ? "visible" : ""}`}
            >
              <CardContent className="p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-500" />

                <Quote className="h-8 w-8 text-primary/30 mb-4 relative group-hover:text-primary/50 transition-colors" />

                <div className="flex gap-1 mb-4 relative">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary transition-transform hover:scale-125"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>

                <p className="text-card-foreground mb-6 leading-relaxed relative">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                <div className="flex items-center gap-3 relative">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary group-hover:scale-110 group-hover:glow-blue-sm transition-all duration-300">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
