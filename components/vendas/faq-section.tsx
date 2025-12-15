"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "Quanto tempo demora para entregar um projeto?",
    answer:
      "O prazo varia de acordo com a complexidade. Uma landing page leva de 5 a 10 dias. Sistemas mais complexos podem levar de 3 a 8 semanas. Sempre informamos um cronograma realista antes de começar.",
  },
  {
    question: "Como funciona o processo de desenvolvimento?",
    answer:
      "1) Reunião inicial para entender suas necessidades. 2) Proposta detalhada com escopo e preço. 3) Aprovação e início do projeto. 4) Entregas parciais para validação. 5) Ajustes e entrega final. 6) Suporte pós-entrega.",
  },
  {
    question: "Vocês fazem manutenção após a entrega?",
    answer:
      "Sim! Oferecemos 30 dias de suporte gratuito após a entrega. Também temos planos de manutenção mensal para atualizações contínuas, correções e melhorias.",
  },
  {
    question: "Qual a forma de pagamento?",
    answer:
      "Trabalhamos com 50% na aprovação do projeto e 50% na entrega final. Para projetos maiores, podemos parcelar em até 3x. Aceitamos PIX, transferência e boleto.",
  },
  {
    question: "Posso solicitar alterações durante o projeto?",
    answer:
      "Claro! Fazemos entregas parciais justamente para você validar cada etapa. Alterações dentro do escopo são gratuitas. Mudanças fora do escopo são orçadas separadamente.",
  },
  {
    question: "Vocês trabalham com contratos?",
    answer:
      "Sim, todos os projetos são formalizados com contrato que detalha escopo, prazos, valores e responsabilidades. Isso protege tanto você quanto nós.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4">
            <HelpCircle className="w-7 h-7 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-card-foreground mb-4">
            Perguntas <span className="text-gradient-ai">Frequentes</span>
          </h2>
          <p className="text-lg text-muted-foreground">Tire suas dúvidas antes de começar seu projeto.</p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-xl border transition-all duration-300 ${
                openIndex === index ? "border-primary/50 bg-secondary/30" : "border-border bg-secondary/10"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-semibold text-card-foreground pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 pb-5" : "max-h-0"
                }`}
              >
                <p className="px-5 text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
