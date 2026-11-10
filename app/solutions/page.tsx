import Link from 'next/link'
import { ArrowRight, Building, Shield, Zap, Globe } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solutions — PAVARISE ETHEREAL',
  description: 'BUDDI solutions for Banking & BFSI, Government & Defence, Critical Infrastructure, and Enterprise. India-first sovereign cybersecurity AI.',
}

const SOLUTIONS = [
  {
    id: 'bfsi',
    icon: Building,
    sector: 'Banking & BFSI',
    headline: 'RBI mandates your data stays in India.',
    subhead: 'BUDDI was built for exactly this constraint.',
    body: `The Reserve Bank of India's data localisation requirements and CERT-In's 2022 reporting mandate mean your security infrastructure cannot rely on foreign cloud providers. CrowdStrike, Microsoft Sentinel, and Palo Alto all process your threat data on servers outside India. BUDDI does not.

Every threat event, every AI inference, every audit log stays on your hardware — in your data centre, in India. This is not a configuration option. It is the architecture.`,
    compliance: ['RBI Data Localisation', 'CERT-In 2022 Mandate', 'DPDPA 2023', 'SEBI Cyber Framework'],
    useCases: [
      'Core banking threat monitoring without data leaving premises',
      'Real-time insider threat detection with UEBA',
      'Regulatory audit reports generated automatically',
      'Zero-trust network monitoring for payment infrastructure',
    ],
  },
  {
    id: 'government',
    icon: Shield,
    sector: 'Government & Defence',
    headline: 'Air-gapped. SCIF-ready. Court-admissible.',
    subhead: 'Built for classified environments from the ground up.',
    body: `Classified networks cannot have outbound connectivity. BUDDI operates with zero network egress — it has never required an internet connection and never will. Deploy on air-gapped systems, SCIFs, and classified networks without modification.

BUDDI's chain of custody output meets the evidentiary standards required for criminal prosecution and military incident reporting. Every action is logged in a tamper-evident SHA-256 hash chain.`,
    compliance: ['Air-gap compatible', 'SCIF-ready deployment', 'SHA-256 chain of custody', 'Full legal export package'],
    useCases: [
      'Classified network threat monitoring',
      'Nation-state APT detection and attribution',
      'Court-admissible incident evidence generation',
      'Critical infrastructure protection for defence assets',
    ],
  },
  {
    id: 'infrastructure',
    icon: Zap,
    sector: 'Critical Infrastructure',
    headline: 'OT/ICS networks need different security.',
    subhead: 'No cloud means no additional attack surface.',
    body: `Operational technology networks controlling power grids, water treatment, and telecommunications cannot tolerate the latency or connectivity requirements of cloud-based security. A cloud-dependent security tool on an OT network is itself a vulnerability.

BUDDI monitors OT/ICS environments with zero network dependency. Threat data is processed locally, predictions are generated locally, and no security event is ever transmitted externally.`,
    compliance: ['IEC 62443 alignment', 'NERC CIP considerations', 'Zero external connectivity', 'OT/IT convergence support'],
    useCases: [
      'Power grid anomaly detection without cloud dependency',
      'Telecom infrastructure threat monitoring',
      'Water treatment facility security operations',
      'Manufacturing OT network protection',
    ],
  },
  {
    id: 'enterprise',
    icon: Globe,
    sector: 'Enterprise & Mid-Market',
    headline: '50 to 5,000 endpoints. One server. Flat pricing.',
    subhead: 'No per-GB billing. No per-endpoint fees above tier limits.',
    body: `Enterprise security tools from cloud vendors charge for every gigabyte of logs, every endpoint agent, every API call. As your organisation grows, your security bill scales unpredictably upward. BUDDI charges a flat INR annual fee.

One on-premise server handles your entire security lifecycle — SOC, forensics, red team, enterprise security — without additional cloud bandwidth costs, foreign data processing fees, or vendor lock-in.`,
    compliance: ['ISO 27001 support', 'SOC 2 audit assistance', 'GDPR/DPDPA alignment', 'Custom compliance reporting'],
    useCases: [
      'Replacing cloud SIEM with on-premise cognitive AI',
      'Consolidating 5+ security tools into one platform',
      'Building internal SOC capability without headcount',
      'Board-level security reporting with automated transparency reports',
    ],
  },
]

export default function SolutionsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-white pt-32 pb-20 border-b border-divider">
        <div className="container-site">
          <div className="max-w-3xl">
            <span className="section-tag">Solutions</span>
            <h1 className="font-serif font-bold text-navy text-5xl md:text-6xl leading-tight mb-6">
              Built for India's most<br />critical operations.
            </h1>
            <p className="font-sans text-slate text-lg leading-relaxed max-w-2xl">
              The same BUDDI platform. Configured for your sector.
              Banking, Government, Infrastructure, Enterprise —
              each with its own compliance requirements, threat profile, and
              operational constraints. BUDDI meets all of them.
            </p>
          </div>
        </div>
      </section>

      {/* Solution sections */}
      {SOLUTIONS.map((sol, idx) => {
        const Icon = sol.icon
        const isEven = idx % 2 === 0
        return (
          <section
            key={sol.id}
            id={sol.id}
            className={`section-pad border-b border-divider ${isEven ? 'bg-white' : 'bg-[#FAFAFA]'}`}
          >
            <div className="container-site">
              <div className="grid md:grid-cols-2 gap-16 items-start">

                {/* Content */}
                <div className={isEven ? '' : 'md:order-2'}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-gold" />
                    </div>
                    <span className="font-sans font-bold text-xs tracking-widest text-gold uppercase">
                      {sol.sector}
                    </span>
                  </div>
                  <h2 className="font-serif font-bold text-navy text-3xl md:text-4xl leading-tight mb-2">
                    {sol.headline}
                  </h2>
                  <p className="font-sans text-slate text-base mb-6">{sol.subhead}</p>

                  {sol.body.split('\n\n').map((para, i) => (
                    <p key={i} className="font-sans text-sm text-slate leading-relaxed mb-4">
                      {para}
                    </p>
                  ))}

                  <Link href="/contact" className="btn-gold gap-2 text-sm mt-2 inline-flex">
                    Talk to us about {sol.sector} <ArrowRight size={15} />
                  </Link>
                </div>

                {/* Detail cards */}
                <div className={`flex flex-col gap-5 ${isEven ? '' : 'md:order-1'}`}>

                  {/* Compliance */}
                  <div className="card">
                    <div className="font-sans font-bold text-xs tracking-widest text-gold uppercase mb-3">
                      Compliance & Standards
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {sol.compliance.map(c => (
                        <span
                          key={c}
                          className="font-sans text-xs font-medium text-navy bg-navy/5 border border-navy/10 px-3 py-1.5 rounded-full"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Use cases */}
                  <div className="card">
                    <div className="font-sans font-bold text-xs tracking-widest text-gold uppercase mb-3">
                      Common Use Cases
                    </div>
                    <ul className="flex flex-col gap-2.5">
                      {sol.useCases.map(uc => (
                        <li key={uc} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                          <span className="font-sans text-sm text-slate leading-relaxed">{uc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* CTA */}
      <section className="bg-navy section-pad">
        <div className="container-site text-center">
          <span className="section-tag" style={{ color: '#C9A227' }}>Get Started</span>
          <h2 className="font-serif font-bold text-white text-4xl md:text-5xl mb-4">
            Which sector are you in?
          </h2>
          <p className="font-sans text-white/60 max-w-lg mx-auto mb-10">
            Thirty minutes. Tell us your environment.
            We'll show you exactly how BUDDI fits — live, on your infrastructure.
          </p>
          <Link href="/contact" className="btn-gold gap-2">
            Request a Sector-Specific Demo <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
