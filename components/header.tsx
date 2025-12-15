"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

function AnimatedFogBackground() {}

const navItemsHome = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicos", label: "Servicos" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
  { href: "/ia", label: "IA Avancada", isPage: true, highlight: true },
]

const navItemsIA = [
  { href: "/", label: "Inicio", isPage: true },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#solucoes", label: "Solucoes" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contato", label: "Contato" },
]

const navItemsVendas = [
  { href: "/", label: "Inicio", isPage: true },
  { href: "#servicos", label: "Servicos" },
  { href: "#contato", label: "Contato" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isIAPage = pathname === "/ia"
  const isVendasPage = pathname === "/vendas"

  const navItems = isVendasPage ? navItemsVendas : isIAPage ? navItemsIA : navItemsHome

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "border-b border-cyan-900/30 shadow-lg shadow-cyan-500/10" : "border-b border-transparent"
      }`}
    >
      <div className="absolute inset-0 bg-[#020510]" />

      <AnimatedFogBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-4">
            <div className="flex items-center gap-2 transition-transform duration-300 ease-out hover:scale-110">
              <Image
                src="/kics-tech-logo.png"
                alt="KICS Tecnologia"
                width={36}
                height={36}
                className="w-9 h-9 object-contain"
              />
              <div className="flex flex-col items-center leading-none">
                <span className="text-lg font-bold text-white tracking-wider">KICS</span>
                <span className="text-[7px] text-white tracking-[0.25em] uppercase">TECNOLOGIA</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-8 w-px bg-gray-600" />
              <span className="text-sm font-medium bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                DevPro
              </span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}
