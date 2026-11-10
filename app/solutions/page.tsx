import Link from 'next/link'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Solutions · PAVARISE ETHEREAL' }
export default function Page() {
  return (
    <section className="bg-white pt-32 pb-24 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <span className="inline-block font-sans font-bold text-xs tracking-widest text-gold uppercase mb-4">Solutions</span>
        <h1 className="font-serif font-bold text-navy text-5xl md:text-6xl leading-tight mb-6">Built for Your Sector</h1>
        <p className="font-sans text-text-secondary text-lg max-w-xl mb-8">
          Full solutions page launching soon.{' '}
          <Link href="/contact" className="text-navy font-semibold underline hover:text-gold">Request a demo</Link> in the meantime.
        </p>
      </div>
    </section>
  )
}
