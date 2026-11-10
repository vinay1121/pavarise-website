import Link from 'next/link'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Company · PAVARISE ETHEREAL' }
export default function Page() {
  return (
    <section className="bg-white pt-32 pb-24 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <span className="inline-block font-sans font-bold text-xs tracking-widest text-gold uppercase mb-4">The Company</span>
        <h1 className="font-serif font-bold text-navy text-5xl md:text-6xl leading-tight mb-6">About PAVARISE ETHEREAL</h1>
        <p className="font-sans text-text-secondary text-lg max-w-2xl mb-6">
          PAVARISE ETHEREAL is an Indian engineering company building sovereign AI — technology that belongs to the client, runs on the client's hardware, and cannot be compromised by foreign cloud dependency.
        </p>
        <p className="font-sans text-text-secondary text-base max-w-2xl mb-6">
          Tagline: <span className="font-semibold text-gold">Built by Brothers, Backed by Brilliance.</span>
        </p>
        <p className="font-sans text-text-secondary text-lg max-w-xl">
          Full company page launching soon.{' '}
          <Link href="/contact" className="text-navy font-semibold underline hover:text-gold">Get in touch</Link>.
        </p>
      </div>
    </section>
  )
}
