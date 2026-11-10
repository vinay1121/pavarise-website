import Link from 'next/link'
import { ArrowRight, Shield, Heart, Eye } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Company — PAVARISE ETHEREAL',
  description: 'PAVARISE ETHEREAL — India\'s sovereign cognitive cybersecurity company. Built by Brothers, Backed by Brilliance. The story, the mission, the values.',
}

const VALUES = [
  {
    icon: Shield,
    title: 'Sovereignty First',
    body: 'India\'s threat data belongs in India. Every product decision — every architectural choice — starts with this principle. We will never build a feature that requires data to leave your premises.',
  },
  {
    icon: Eye,
    title: 'Radical Transparency',
    body: 'BUDDI explains every decision it makes. Our code is auditable. Our AI models are inspectable. We publish transparency reports. Security through obscurity is not security.',
  },
  {
    icon: Heart,
    title: 'Ethical by Architecture',
    body: 'Our Moral Constitution is not a document — it is code. Ten constraints, hardcoded, unoverridable. BUDDI cannot be turned against civilians regardless of who is operating it.',
  },
]

const MILESTONES = [
  { year: '2025', event: 'PAVARISE ETHEREAL founded. BUDDI concept defined.' },
  { year: 'Q1 2026', event: 'Phase 1 complete — MoodEngine, LogicEngine, MemoryEngine operational.' },
  { year: 'Q2 2026', event: 'Phase 2 complete — FusionEngine, AttackPredictor, 196 MITRE transitions.' },
  { year: 'Q3 2026', event: 'Phase 3 complete — Digital Forensics, Chain of Custody, Red/Blue/Purple Team.' },
  { year: 'Q4 2026', event: 'Phase 4 complete — Moral Constitution, OrgDNA, Vision Intel. 349+ tests passing. v1.1 released.' },
  { year: '2027', event: 'First enterprise deployments. Government pilot programme. BUDDI Box launch.' },
]

export default function CompanyPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-white pt-32 pb-20 border-b border-divider">
        <div className="container-site">
          <div className="max-w-3xl">
            <span className="section-tag">The Company</span>
            <h1 className="font-serif font-bold text-navy text-5xl md:text-6xl leading-tight mb-6">
              Built by Brothers,<br />
              <span className="text-gold">Backed by Brilliance.</span>
            </h1>
            <p className="font-sans text-slate text-lg leading-relaxed max-w-2xl">
              PAVARISE ETHEREAL is an Indian sovereign cybersecurity company.
              We build cognitive AI that protects India's most critical institutions —
              without sending a single byte of their data outside the country.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#FAFAFA] section-pad">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-tag">Our Mission</span>
              <h2 className="font-serif font-bold text-navy text-4xl leading-tight mb-6">
                India should not depend on foreign governments to protect Indian data.
              </h2>
              <p className="font-sans text-slate leading-relaxed mb-5">
                Every major cybersecurity platform used by Indian banks, government agencies,
                and critical infrastructure today is owned by American companies running
                on American cloud infrastructure. That means Indian threat intelligence —
                data about attacks on Indian systems — is processed in foreign data centres,
                subject to foreign law.
              </p>
              <p className="font-sans text-slate leading-relaxed mb-5">
                We built BUDDI to change this. Not as a nationalist statement — as a
                practical security requirement. A cybersecurity tool that can be switched
                off by a foreign government, accessed under a foreign legal order, or
                disrupted by a foreign supply chain attack is a vulnerability, not a defence.
              </p>
              <p className="font-sans text-slate leading-relaxed">
                BUDDI cannot be switched off by a foreign government. That is not a feature.
                That is the architecture.
              </p>
            </div>

            {/* Stat block */}
            <div className="flex flex-col gap-5">
              {[
                { number: '100%', label: 'Offline operation', sub: 'Zero cloud calls. Verifiable with any network monitor.' },
                { number: 'v1.1', label: 'Current version', sub: 'Phase 1–4 complete. 349+ automated tests passing.' },
                { number: '0', label: 'Foreign dependencies', sub: 'No AWS, Azure, GCP, or foreign AI APIs.' },
                { number: '₹0', label: 'Data egress cost', sub: 'Your data never leaves. No bandwidth billing.' },
              ].map(stat => (
                <div key={stat.label} className="bg-white rounded-card border border-divider p-5 flex gap-4 items-start">
                  <div className="font-serif font-bold text-gold text-3xl leading-none w-20 shrink-0">{stat.number}</div>
                  <div>
                    <div className="font-sans font-bold text-navy text-sm mb-1">{stat.label}</div>
                    <div className="font-sans text-xs text-slate">{stat.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white section-pad">
        <div className="container-site">
          <div className="text-center mb-16">
            <span className="section-tag">What We Stand For</span>
            <h2 className="font-serif font-bold text-navy text-4xl md:text-5xl leading-tight">
              Three principles.<br />Non-negotiable.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {VALUES.map(v => {
              const Icon = v.icon
              return (
                <div key={v.title} className="card border-t-4 border-t-gold text-center">
                  <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center mx-auto mb-5">
                    <Icon size={20} className="text-gold" />
                  </div>
                  <h3 className="font-serif font-bold text-navy text-xl mb-3">{v.title}</h3>
                  <p className="font-sans text-sm text-slate leading-relaxed">{v.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-navy section-pad">
        <div className="container-site">
          <div className="text-center mb-14">
            <span className="section-tag" style={{ color: '#C9A227' }}>Progress</span>
            <h2 className="font-serif font-bold text-white text-4xl md:text-5xl leading-tight">
              From concept to<br />
              <span className="text-gold">production AI.</span>
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            {MILESTONES.map((m, i) => (
              <div key={m.year} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-gold shrink-0 mt-1" />
                  {i < MILESTONES.length - 1 && (
                    <div className="w-px flex-1 bg-white/10 mt-2" />
                  )}
                </div>
                <div className="pb-8 last:pb-0">
                  <div className="font-sans font-bold text-xs tracking-widest text-gold uppercase mb-1">
                    {m.year}
                  </div>
                  <p className="font-sans text-sm text-white/70 leading-relaxed">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-white section-pad border-b border-divider">
        <div className="container-site text-center">
          <div className="gold-line mx-auto mb-8" />
          <h2 className="font-serif font-bold text-navy text-4xl md:text-5xl mb-4">
            Let's talk.
          </h2>
          <p className="font-sans text-slate max-w-lg mx-auto mb-10">
            If you're a CISO, security lead, or government official evaluating
            sovereign cybersecurity options, we want to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold gap-2">
              Request a Demo <ArrowRight size={16} />
            </Link>
            <a href="mailto:team@pavarise-ethereal.com" className="btn-outline gap-2">
              Email the Team
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
