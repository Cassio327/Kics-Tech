"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useScrollAnimation, useStaggerAnimation } from "@/hooks/use-scroll-animation"

const faqs = [
  {
    question: "Quanto tempo leva para desenvolver um projeto?",
    answer:
      "Depende da complexidade. Uma landing page fica pronta em 1-2 semanas. Sistemas mais robustos, automações completas ou soluções com IA variam de 4 a 12 semanas. Trabalhamos com sprints semanais, então você acompanha o progresso e recebe entregas incrementais desde o início.",
  },
  {
    question: "Vocês trabalham com empresas de qualquer tamanho?",
    answer:
      "Sim! Atendemos desde startups em estágio inicial até empresas consolidadas. O que importa para nós é o desafio técnico e o potencial de impacto. Cada projeto é dimensionado conforme a realidade e o orçamento do cliente.",
  },
  {
    question: "Como funciona o processo de desenvolvimento?",
    answer:
      "Começamos com uma reunião de discovery para entender profundamente seu negócio e objetivos. Depois, apresentamos uma proposta técnica detalhada com escopo, cronograma e investimento. Aprovado, iniciamos os sprints de desenvolvimento com calls semanais de alinhamento e acesso ao progresso em tempo real.",
  },
  {
    question: "Vocês oferecem suporte após a entrega?",
    answer:
      "Com certeza. Todos os projetos incluem 30 dias de suporte pós-entrega para ajustes finos. Também oferecemos planos de manutenção mensal para quem precisa de evolução contínua, suporte técnico prioritário e monitoramento de sistemas.",
  },
  {
    question: "Qual é o investimento para um projeto de automação ou IA?",
    answer:
      "Cada projeto é único, então trabalhamos com orçamentos personalizados. Um bot de WhatsApp básico pode partir de R$ 2.000, enquanto sistemas complexos com IA podem chegar a dezenas de milhares. O importante é que sempre apresentamos opções e priorizamos entregas que geram ROI rápido.",
  },
  {
    question: "É possível integrar com sistemas que já uso?",
    answer:
      "Na maioria dos casos, sim. Trabalhamos com APIs, webhooks, bancos de dados diversos e ferramentas como N8N, Make (Integromat), Zapier e integrações customizadas. Se o sistema que você usa tiver alguma forma de conexão externa, conseguimos integrar.",
  },
  {
    question: "Vocês desenvolvem apenas para web ou também apps mobile?",
    answer:
      "Nosso foco principal é web (sites, sistemas, dashboards) e automações (bots, integrações, IA). Para apps mobile, trabalhamos com tecnologias híbridas como React Native quando faz sentido para o projeto, ou indicamos parceiros especializados quando o escopo exige desenvolvimento nativo.",
  },
  {
    question: "Como garantem a segurança dos meus dados e sistemas?",
    answer:
      "Segurança é prioridade absoluta. Seguimos as melhores práticas do mercado: HTTPS em tudo, autenticação robusta, criptografia de dados sensíveis, backups automatizados e código revisado. Para projetos que exigem, implementamos conformidade com LGPD e auditorias de segurança.",
  },
]

export function FAQSection() {
  const [headerRef, headerVisible] = useScrollAnimation()
  const { containerRef, visibleItems } = useStaggerAnimation(faqs.length, 100)

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[oklch(0.03_0.015_260)] to-background" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className={`text-center mb-16 fade-in-up ${headerVisible ? "visible" : ""}`}>
          <span className="text-[oklch(0.78_0.15_195)] font-mono text-sm tracking-wider uppercase">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
            Tudo que você precisa <span className="text-gradient-ai">saber</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Respondemos às perguntas mais comuns sobre nossos serviços, processos e como trabalhamos.
          </p>
        </div>

        <div ref={containerRef}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={`bg-card border border-border rounded-lg px-6 hover-border-glow data-[state=open]:border-[oklch(0.65_0.22_240/0.4)] data-[state=open]:glow-blue-sm transition-all duration-300 scale-in ${
                  visibleItems[index] ? "visible" : ""
                }`}
              >
                <AccordionTrigger className="text-left text-card-foreground hover:text-[oklch(0.78_0.15_195)] hover:no-underline py-6 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
