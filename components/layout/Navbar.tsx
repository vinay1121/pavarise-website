'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Product',    href: '/product' },
  { label: 'Technology', href: '/technology' },
  { label: 'Solutions',  href: '/solutions' },
  { label: 'Pricing',    href: '/pricing' },
  { label: 'Company',    href: '/company' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [mobileOpen, setMobile]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-card border-b border-divider'
          : 'bg-transparent'
      }`}
    >
      <div className="container-site">
        <nav className="flex items-center justify-between h-16 md:h-20">

          {/* Logo — horizontal version */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Wolverine icon placeholder — replace with actual SVG/image */}
            <div className="w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center bg-navy shrink-0">
              <span className="text-gold font-serif font-bold text-sm">PE</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-serif font-bold text-navy text-base tracking-widest uppercase leading-none">
                PAVARISE ETHEREAL
              </div>
              <div className="font-sans text-gold text-[9px] tracking-[0.2em] uppercase leading-none mt-0.5">
                Built by Brothers, Backed by Brilliance
              </div>
            </div>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-sans text-sm font-medium text-slate hover:text-navy transition-colors duration-150"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact" className="btn-gold text-xs px-5 py-2.5">
              Request a Demo
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-navy"
            onClick={() => setMobile(v => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-divider shadow-card">
          <div className="container-site py-4 flex flex-col gap-3">
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobile(false)}
                className="font-sans text-sm font-medium text-ink py-2 border-b border-divider"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-gold mt-2 text-center text-xs">
              Request a Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
