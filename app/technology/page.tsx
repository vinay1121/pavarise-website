import Link from 'next/link'
import { ArrowRight, Cpu, Database, Lock, GitBranch, Shield, Zap } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technology — PAVARISE ETHEREAL',
  description: 'How BUDDI works: Markov-chain kill-chain prediction, offline AI models, SHA-256 chain of custody, and cognitive architecture built for sovereign cybersecurity.',
}

const TECH_PILLARS = [
  {
    icon: Cpu,
    title: 'Markov-Chain Kill-Chain Prediction',
    body: `BUDDI models attacker behaviour as a probabilistic state machine. Each observed MITRE ATT&CK technique updates a transition matrix, letting BUDDI predict the next likely technique before it executes.

With 196 mapped transitions and sub-500ms prediction latency, analysts get advance warning — not post-breach notifications.`,
  },
  {
    icon: Database,
    title: 'Offline-First AI Architecture',
    body: `Every AI model in BUDDI runs locally: BGE-M3 embeddings for semantic understanding, Vosk for offline speech recognition, SQLite for all storage. Zero API calls. Zero telemetry.

The architecture was designed offline-first from line 1 of code — not retrofitted. That is a structural moat competitors cannot cross without rebuilding their entire product.`,
  },
  {
    icon: Lock,
    title: 'SHA-256 Tamper-Evident Chain of Custody',
    body: `Every detection, decision, and analyst action is written into a hash chain. Each entry includes the previous entry's hash — making retroactive tampering mathematically detectable.

The output is court-admissible forensic evidence, generated automatically, requiring no manual documentation.`,
  },
  {
    icon: GitBranch,
    title: 'Distributed FusionEngine',
    body: `FusionEngine coordinates multiple worker processes, each specialising in a different data source — network, endpoint, logs, registry. Workers are configured via buddi_config.json with no code ceiling on parallelism.

Scales from a single laptop to a multi-node server cluster without code changes.`,
  },
  {
    icon: Shield,
    title: 'Moral Constitution Engine',
    body: `Ten inviolable ethical constraints are hardcoded into BUDDI's decision layer. These constraints cannot be overridden by operator configuration, license tier, or runtime instruction.

BUDDI cannot be turned against civilians. This is not a policy — it is architecture. Independently auditable by any technical reviewer.`,
  },
  {
    icon: Zap,
    title: 'Cognitive Memory Architecture',
    body: `Three memory systems work in parallel: episodic memory (what happened), semantic memory (what it means), and working memory (what is happening now). Together they give BUDDI persistent context across sessions — the same incident investigated weeks apart is correctly correlated.`,
  },
]

const STACK = [
  { layer: 'AI / ML',        items: ['BGE-M3 embeddings (local)', 'Vosk speech recognition (offline)', 'Custom Markov predictor', 'Sentence transformers'] },
  { layer: 'Storage',        items: ['SQLite (all databases)', 'AES-256 encrypted memory', 'SHA-256 chain of custody', 'JSON config store'] },
  { layer: 'Runtime',        items: ['Python 3.11', 'PyQt6 (UI)', 'asyncio event loop', 'multiprocessing workers'] },
  { layer: 'Security',       items: ['RSA-4096 license system', 'AES key rotation', 'Tamper detection', 'Founder privilege gate'] },
  { layer: 'Integrations',   items: ['Syslog RFC 5424', 'MITRE ATT&CK v14', 'PDF report export', 'REST API (buddi_api)'] },
  { layer: 'Network',        items: ['Zero outbound calls', 'Air-gap compatible', 'SCIF-ready', 'No telemetry'] },
]

export default function TechnologyPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-white pt-32 pb-20 border-b border-divider">
        <div className="container-site">
          <div className="max-w-3xl">
            <span className="section-tag">Technology</span>
            <h1 className="font-serif font-bold text-navy text-5xl md:text-6xl leading-tight mb-6">
              How BUDDI works.
            </h1>
            <p className="font-sans text-slate text-lg leading-relaxed max-w-2xl">
              The architecture behind India's first sovereign cognitive cybersecurity AI.
              Every design decision was made with one constraint: zero cloud dependency,
              ever. This page explains what that means technically.
            </p>
          </div>
        </div>
      </section>

      {/* Six pillars */}
      <section className="bg-white section-pad">
        <div className="container-site">
          <div className="text-center mb-16">
            <span className="section-tag">Core Technology</span>
            <h2 className="font-serif font-bold text-navy text-4xl md:text-5xl leading-tight">
              Six breakthroughs.<br />One platform.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {TECH_PILLARS.map(pillar => {
              const Icon = pillar.icon
              return (
                <div key={pillar.title} className="card border-l-4 border-l-gold">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-gold" />
                    </div>
                    <h3 className="font-serif font-bold text-navy text-lg leading-tight">{pillar.title}</h3>
                  </div>
                  {pillar.body.split('\n\n').map((para, i) => (
                    <p key={i} className="font-sans text-sm text-slate leading-relaxed mb-3 last:mb-0">
                      {para}
                    </p>
                  ))}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="bg-navy section-pad">
        <div className="container-site">
          <div className="text-center mb-14">
            <span className="section-tag" style={{ color: '#C9A227' }}>Tech Stack</span>
            <h2 className="font-serif font-bold text-white text-4xl md:text-5xl leading-tight mb-4">
              Built on proven open technology.<br />
              <span className="text-gold">Zero proprietary cloud lock-in.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {STACK.map(section => (
              <div key={section.layer} className="bg-white/5 border border-white/10 rounded-card p-6">
                <div className="font-sans font-bold text-xs tracking-widest text-gold uppercase mb-4">
                  {section.layer}
                </div>
                <ul className="space-y-2">
                  {section.items.map(item => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-gold/60 shrink-0" />
                      <span className="font-sans text-sm text-white/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The offline guarantee */}
      <section className="bg-[#FAFAFA] section-pad">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <span className="section-tag">The Guarantee</span>
            <h2 className="font-serif font-bold text-navy text-4xl md:text-5xl leading-tight mb-6">
              How we prove zero cloud calls.
            </h2>
            <p className="font-sans text-slate leading-relaxed mb-8">
              We don't ask you to trust our marketing. We ask you to run a network monitor
              during a BUDDI demo. Watch the outbound traffic. Count the external calls.
              The number is zero.
            </p>

            <div className="grid md:grid-cols-3 gap-5 mb-10">
              {[
                { step: '01', title: 'Run Wireshark', desc: 'Start a packet capture on the BUDDI host machine during a live threat investigation.' },
                { step: '02', title: 'Trigger BUDDI', desc: 'Run a full APT simulation — detection, prediction, forensics, report generation.' },
                { step: '03', title: 'Check outbound', desc: 'Filter for outbound traffic from the BUDDI process. Zero packets to external IPs.' },
              ].map(item => (
                <div key={item.step} className="bg-white rounded-card border border-divider p-5">
                  <div className="font-serif font-bold text-gold text-2xl mb-3">{item.step}</div>
                  <div className="font-sans font-bold text-navy text-sm mb-2">{item.title}</div>
                  <div className="font-sans text-xs text-slate leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>

            <Link href="/contact" className="btn-gold gap-2">
              Request a Technical Demo <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
