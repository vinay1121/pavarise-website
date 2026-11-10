import Link from 'next/link'
import { ArrowRight, Check, Server } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing — PAVARISE ETHEREAL BUDDI',
  description: 'BUDDI pricing tiers: Community, SMB, Mid-Market, Enterprise & Government. Flat INR pricing. No per-GB billing. No cloud costs. BUDDI Box hardware appliance available.',
}

const TIERS = [
  {
    name: 'Community',
    price: 'Free',
    unit: '90-day pilot',
    target: 'Startups & evaluation',
    highlight: false,
    features: [
      'Home Dashboard',
      'Autonomous Mode (voice)',
      'Help Centre',
      'Cognitive Telemetry',
      'Up to 25 endpoints',
      'Community support',
    ],
    cta: 'Request Pilot',
    ctaNote: 'No payment required for pilot',
  },
  {
    name: 'SMB',
    price: '₹3–5L',
    unit: 'per year',
    target: 'Small businesses · ≤100 endpoints',
    highlight: false,
    features: [
      'All Community features',
      'Cyber Operations (7 domains)',
      'Threat Intelligence',
      'MITRE ATT&CK kill-chain',
      'SIEM syslog connector',
      'Cognitive Telemetry',
    ],
    cta: 'Get Pricing',
    ctaNote: 'Contact for exact quote',
  },
  {
    name: 'Mid-Market',
    price: '₹5–10L',
    unit: 'per year',
    target: 'Growing companies · ≤500 endpoints',
    highlight: true,
    features: [
      'All SMB features',
      'Digital Forensics + Chain of Custody',
      'Investigations + Actor Profiler',
      'AI Hypothesis Engine',
      'Reports (PDF export)',
      'Organisational DNA',
    ],
    cta: 'Get Pricing',
    ctaNote: 'Most popular tier',
  },
  {
    name: 'Enterprise',
    price: '₹10L+',
    unit: 'per year',
    target: 'Unlimited endpoints · Custom contract',
    highlight: false,
    features: [
      'All Mid-Market features',
      'Enterprise Security + UEBA',
      'Red Team Full access',
      'Distributed FusionEngine',
      'Multi-tenant isolation',
      'On-site installation support',
    ],
    cta: 'Talk to Sales',
    ctaNote: 'Government tier available',
  },
]

const BUDDI_BOX = [
  {
    name: 'BUDDI Box SMB',
    cost: '₹1.8–2.5L',
    spec: 'Mini PC · 32GB RAM · RTX 4060',
    capacity: 'Up to 100 endpoints',
    desc: 'The fastest path to BUDDI for small businesses. Plug into your office switch. No IT team needed.',
  },
  {
    name: 'BUDDI Box Mid',
    cost: '₹3–4L',
    spec: 'Mini PC · 64GB RAM · RTX 4070',
    capacity: 'Up to 500 endpoints',
    desc: 'Recommended for mid-market organisations. Handles high-frequency events without additional infrastructure.',
  },
  {
    name: 'BUDDI Box Pro',
    cost: '₹5–7L',
    spec: 'Workstation · 128GB RAM · RTX 4090',
    capacity: 'Up to 2,000 endpoints',
    desc: 'For large enterprise and government deployments requiring maximum processing power.',
  },
]

const COMPARISON = [
  { feature: 'On-premise deployment', buddi: true,  crowd: false, sentinel: false },
  { feature: '100% offline operation', buddi: true,  crowd: false, sentinel: false },
  { feature: 'Kill-chain prediction',  buddi: true,  crowd: false, sentinel: false },
  { feature: 'INR pricing',           buddi: true,  crowd: false, sentinel: false },
  { feature: 'Air-gap / SCIF ready',  buddi: true,  crowd: false, sentinel: false },
  { feature: 'No per-GB billing',     buddi: true,  crowd: false, sentinel: false },
  { feature: 'Court-admissible CoC',  buddi: true,  crowd: 'Add-on', sentinel: 'Partial' },
]

export default function PricingPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-white pt-32 pb-16 border-b border-divider">
        <div className="container-site text-center">
          <span className="section-tag">Pricing</span>
          <h1 className="font-serif font-bold text-navy text-5xl md:text-6xl leading-tight mb-4">
            Flat INR pricing.<br />No surprises.
          </h1>
          <p className="font-sans text-slate text-lg max-w-xl mx-auto">
            No per-GB billing. No per-endpoint fees above tier limits.
            No cloud bandwidth costs. Contact us — all pricing is by
            conversation, not checkout.
          </p>
        </div>
      </section>

      {/* Tier cards */}
      <section className="bg-[#FAFAFA] section-pad">
        <div className="container-site">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {TIERS.map(tier => (
              <div
                key={tier.name}
                className={`relative bg-white rounded-card p-7 flex flex-col gap-5 transition-all duration-200
                  ${tier.highlight
                    ? 'border-2 border-gold shadow-gold ring-1 ring-gold/20'
                    : 'border border-divider shadow-card hover:shadow-hover'
                  }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-navy font-sans font-bold text-[10px] tracking-widest uppercase px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}

                {/* Tier info */}
                <div>
                  <div className="font-sans font-bold text-xs tracking-widest text-gold uppercase mb-1">
                    {tier.name}
                  </div>
                  <div className="font-serif font-bold text-navy text-3xl leading-none">
                    {tier.price}
                  </div>
                  <div className="font-sans text-xs text-slate mt-1">{tier.unit}</div>
                  <div className="font-sans text-xs text-slate mt-2 pb-4 border-b border-divider">
                    {tier.target}
                  </div>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-2 flex-1">
                  {tier.features.map(f => (
                    <li key={f} className="flex items-start gap-2">
                      <Check size={14} className="text-gold mt-0.5 shrink-0" />
                      <span className="font-sans text-xs text-ink">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div>
                  <Link
                    href="/contact"
                    className={`block text-center py-2.5 rounded-button font-sans font-bold text-sm transition-all
                      ${tier.highlight
                        ? 'bg-gold text-navy hover:bg-gold-light'
                        : 'border border-navy text-navy hover:bg-navy hover:text-white'
                      }`}
                  >
                    {tier.cta}
                  </Link>
                  <p className="text-center font-sans text-[10px] text-slate mt-2">
                    {tier.ctaNote}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center font-sans text-xs text-slate mt-8">
            Government tier available — SCIF mode, full legal export, on-site installation.
            Contact us for defence and government pricing.
          </p>
        </div>
      </section>

      {/* ══ BUDDI BOX — special hardware block ═══════════════════════════════ */}
      <section id="buddi-box" className="bg-navy section-pad">
        <div className="container-site">

          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-5 py-1.5 mb-6">
              <Server size={14} className="text-gold" />
              <span className="font-sans text-xs font-bold text-gold tracking-widest uppercase">
                BUDDI Box — Hardware Appliance
              </span>
            </div>
            <h2 className="font-serif font-bold text-white text-4xl md:text-5xl leading-tight mb-4">
              Need plug-and-play?<br />
              <span className="text-gold">BUDDI Box ships ready.</span>
            </h2>
            <p className="font-sans text-white/60 text-lg max-w-2xl mx-auto">
              Pre-loaded with BUDDI, all AI models, and your license.
              Plug into your network switch. BUDDI is live in under 10 minutes.
              No IT team needed. Designed for SMB and Mid-Market organisations
              who want enterprise-grade security without enterprise-grade setup.
            </p>
          </div>

          {/* How it works */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-14">
            {[
              { step: '01', label: 'Receive your BUDDI Box' },
              { step: '02', label: 'Plug into your network switch' },
              { step: '03', label: 'BUDDI monitors your environment' },
            ].map(item => (
              <div key={item.step} className="text-center">
                <div className="font-serif font-bold text-gold text-3xl mb-2">{item.step}</div>
                <div className="font-sans text-xs text-white/60 leading-tight">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Hardware tiers */}
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {BUDDI_BOX.map((box, i) => (
              <div
                key={box.name}
                className={`bg-white/5 border rounded-card p-6 backdrop-blur-sm transition-all hover:bg-white/10
                  ${i === 1 ? 'border-gold' : 'border-white/10'}`}
              >
                <div className="font-sans font-bold text-xs tracking-widest text-gold uppercase mb-2">
                  {box.name}
                </div>
                <div className="font-serif font-bold text-white text-2xl mb-1">{box.cost}</div>
                <div className="font-sans text-xs text-white/40 mb-4">{box.spec}</div>
                <div className="font-sans text-sm font-semibold text-white/80 mb-2">
                  {box.capacity}
                </div>
                <p className="font-sans text-xs text-white/50 leading-relaxed">{box.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/contact" className="btn-gold gap-2">
              Ask About BUDDI Box <ArrowRight size={16} />
            </Link>
            <p className="font-sans text-xs text-white/40 mt-3">
              Also available: BUDDI software license only — install on your existing Windows server.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-white section-pad">
        <div className="container-site">
          <div className="text-center mb-12">
            <span className="section-tag">Comparison</span>
            <h2 className="font-serif font-bold text-navy text-4xl mb-4">
              BUDDI vs the market
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-gold">
                  <th className="text-left font-sans text-xs font-bold tracking-widest text-slate uppercase py-3 pr-6">
                    Capability
                  </th>
                  <th className="font-sans text-xs font-bold tracking-widest text-gold uppercase py-3 px-4">
                    BUDDI
                  </th>
                  <th className="font-sans text-xs font-bold tracking-widest text-slate uppercase py-3 px-4">
                    CrowdStrike
                  </th>
                  <th className="font-sans text-xs font-bold tracking-widest text-slate uppercase py-3 px-4">
                    Sentinel
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-[#FAFAFA]' : 'bg-white'}>
                    <td className="font-sans text-sm font-medium text-ink py-3.5 pr-6">
                      {row.feature}
                    </td>
                    <td className="text-center py-3.5 px-4">
                      <span className="text-green-600 font-bold text-base">✓</span>
                    </td>
                    <td className="text-center py-3.5 px-4 font-sans text-sm text-slate">
                      {typeof row.crowd === 'boolean'
                        ? <span className="text-red-500 font-bold">✗</span>
                        : row.crowd}
                    </td>
                    <td className="text-center py-3.5 px-4 font-sans text-sm text-slate">
                      {typeof row.sentinel === 'boolean'
                        ? <span className="text-red-500 font-bold">✗</span>
                        : row.sentinel}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}
