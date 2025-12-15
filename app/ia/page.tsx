import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AIHeroSection } from "@/components/ia/ai-hero-section"
import { AIHowItWorksSection } from "@/components/ia/ai-how-it-works-section"
import { AIRecommendedSolutions } from "@/components/ia/ai-recommended-solutions"
import { AIPortfolioSection } from "@/components/ia/ai-portfolio-section"
import { AIContactCTA } from "@/components/ia/ai-contact-cta"

export default function IAPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <AIHeroSection />
      <AIHowItWorksSection />
      <AIRecommendedSolutions />
      <AIPortfolioSection />
      <AIContactCTA />
      <Footer />
    </main>
  )
}
