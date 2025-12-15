"use client"

import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Instagram, Mail } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const footerLinks = {
  servicos: [
    { label: "Sites & Landing Pages", href: "#servicos" },
    { label: "Sistemas Web", href: "#servicos" },
    { label: "Inteligência Artificial", href: "/ia" },
    { label: "Bots WhatsApp", href: "#servicos" },
    { label: "Automações", href: "#servicos" },
    { label: "Dashboards", href: "#servicos" },
  ],
  empresa: [
    { label: "Sobre", href: "#sobre" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Contato", href: "#contato" },
    { label: "Área de IA", href: "/ia" },
    { label: "Contratar", href: "/vendas" },
  ],
  social: [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Mail, href: "mailto:kicstecnologia.dev@gmail.com", label: "Email" },
  ],
}

export function Footer() {
  const [footerRef, footerVisible] = useScrollAnimation()

  return (
    <footer ref={footerRef} className={`bg-card border-t border-border fade-in-up ${footerVisible ? "visible" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand - Logo com cores da paleta */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="relative w-10 h-10 group-hover:scale-110 transition-transform duration-300">
                <Image src="/kics-tech-logo.png" alt="KICS Logo" fill className="object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-none">KICS</span>
                <span className="text-[10px] text-white/80 tracking-[0.2em] leading-none">TECNOLOGIA</span>
              </div>
            </Link>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Serviços</h3>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-[oklch(0.78_0.15_195)] hover:translate-x-1 transition-all duration-300 text-sm inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-[oklch(0.78_0.15_195)] hover:translate-x-1 transition-all duration-300 text-sm inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              {footerLinks.social.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-[oklch(0.78_0.15_195)] hover:border-[oklch(0.65_0.22_240/0.5)] hover:glow-blue-sm hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
