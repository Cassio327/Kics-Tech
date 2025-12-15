import type { Metadata } from "next"
import { SalesHero } from "@/components/vendas/sales-hero"
import { BenefitsSection } from "@/components/vendas/benefits-section"
import { ServicesListSection } from "@/components/vendas/services-list-section"
import { SocialProofSection } from "@/components/vendas/social-proof-section"
import { GuaranteeSection } from "@/components/vendas/guarantee-section"
import { FAQSection } from "@/components/vendas/faq-section"
import { FinalCTASection } from "@/components/vendas/final-cta-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Kics Tech | Transforme Seu Negócio com Tecnologia",
  description:
    "Serviços de programação e automação que geram resultados reais. Sites, sistemas, IAs e bots para empresas que querem crescer.",
}

export default function VendasPage() {
  return (
    <main className="min-h-screen bg-background">
      <SalesHero />
      <BenefitsSection />
      <ServicesListSection />
      <SocialProofSection />
      <GuaranteeSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  )
}
