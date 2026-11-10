import Link from 'next/link'

const FOOTER_LINKS = {
  Product:   [
    { label: 'BUDDI Overview',  href: '/product' },
    { label: 'Technology',      href: '/technology' },
    { label: 'Autonomous Mode', href: '/product#autonomous' },
    { label: 'BUDDI Box',       href: '/pricing#buddi-box' },
  ],
  Solutions: [
    { label: 'Banking & BFSI',         href: '/solutions#bfsi' },
    { label: 'Government & Defence',   href: '/solutions#government' },
    { label: 'Critical Infrastructure',href: '/solutions#infrastructure' },
    { label: 'Enterprise',             href: '/solutions#enterprise' },
  ],
  Company: [
    { label: 'About PAVARISE', href: '/company' },
    { label: 'Pricing',        href: '/pricing' },
    { label: 'Contact',        href: '/contact' },
    { label: 'Request a Demo', href: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Top section */}
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center shrink-0">
                <span className="text-gold font-serif font-bold text-sm">PE</span>
              </div>
            </div>
            <div className="font-serif font-bold text-white text-sm tracking-widest uppercase mb-1">
              PAVARISE ETHEREAL
            </div>
            <div className="text-gold text-[9px] tracking-[0.2em] uppercase mb-4">
              Built by Brothers, Backed by Brilliance
            </div>
            <p className="font-sans text-xs text-white/50 leading-relaxed">
              India's first sovereign cognitive cybersecurity AI.
              100% offline. Zero cloud dependency.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <div className="font-sans font-bold text-xs tracking-widest text-gold uppercase mb-4">
                {section}
              </div>
              <ul className="space-y-2">
                {links.map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-sans text-xs text-white/60 hover:text-white transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-sans text-xs text-white/40">
            © 2026 Pavarise Ethereal Pvt Ltd · All rights reserved
          </span>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use', 'Security'].map(item => (
              <Link
                key={item}
                href="/contact"
                className="font-sans text-xs text-white/40 hover:text-white/70 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
