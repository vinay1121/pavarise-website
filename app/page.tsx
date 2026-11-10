import Link from 'next/link'
import { ArrowRight, Shield, Zap, Lock, Server, Eye, Globe } from 'lucide-react'

// ── Stat bar data ──────────────────────────────────────────────────────────
const STATS = [
  { number: '349+',   label: 'Automated Tests Passing' },
  { number: '196',    label: 'MITRE ATT&CK Transitions' },
  { number: '<500ms', label: 'Kill-Chain Prediction' },
  { number: '0',      label: 'Cloud Dependencies' },
  { number: '10',     label: 'Live Workspaces' },
]

// ── Three pillars ──────────────────────────────────────────────────────────
const PILLARS = [
  {
    icon: Lock,
    title: '100% Offline',
    body: 'Your threat data never leaves your hardware. No telemetry, no cloud sync, no foreign data centre. Verifiable with any network monitor.',
  },
  {
    icon: Zap,
    title: 'Predicts. Not Just Detects.',
    body: 'Markov-chain kill-chain prediction tells you what the attacker will do next — before they do it. BUDDI gives you time to act, not just a notification that you\'ve been breached.',
  },
  {
    icon: Globe,
    title: 'One Platform. Seven Domains.',
    body: 'SOC, Blue Team, Red Team, Purple Team, Digital Forensics, Enterprise Security, Government & Legal. One on-premise deployment covers your entire security lifecycle.',
  },
]

// ── Platform features (home preview) ──────────────────────────────────────
const FEATURES = [
  {
    icon: Shield,
    title: 'Phase 1–4 Cognitive Engine',
    body: 'MoodEngine, LogicEngine, MemoryEngine wired to FusionEngine and AttackPredictor. The same cognitive architecture from perception to decision.',
  },
  {
    icon: Eye,
    title: 'Autonomous Mode',
    body: 'Voice-activated JARVIS interface. Say "buddi wake up." Ask questions, run investigations, navigate workspaces — entirely on your hardware.',
  },
  {
    icon: Server,
    title: 'Court-Admissible Chain of Custody',
    body: 'Every detection, decision, and action logged in a tamper-evident SHA-256 hash chain. Forensic evidence that holds in court, generated automatically.',
  },
  {
    icon: Zap,
    title: 'Moral Constitution',
    body: 'Ten inviolable ethical principles hardcoded into BUDDI. Independently auditable. BUDDI cannot be turned against civilians regardless of operator instruction.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ══ HERO ════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center bg-white overflow-hidden pt-20">

        {/* Subtle navy/gold background texture — circuit-like */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #173B6C 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Gold glow behind hero text */}
        <div
          aria-hidden
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-[0.06] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse, #C9A227 0%, transparent 70%)',
          }}
        />

        <div className="container-site relative z-10">

          {/* Live badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-divider rounded-full px-4 py-1.5 mb-10 shadow-card">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-soft" />
            <span className="font-sans text-xs font-semibold text-slate tracking-wide">
              BUDDI v1.1 — Phase 1–4 Active · Fully Offline
            </span>
          </div>

          {/* Main headline — Times New Roman, commanding */}
          <h1 className="font-serif font-bold text-navy leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: 'clamp(36px, 5.5vw, 72px)' }}>
            The Security AI That Cannot Be<br />
            Turned Off by a{' '}
            <span className="relative inline-block text-gold">
              Foreign Government
              {/* Gold underline */}
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold"
              />
            </span>
          </h1>

          {/* Subheadline */}
          <p className="font-sans text-lg text-slate max-w-2xl mx-auto mb-10 leading-relaxed">
            BUDDI runs 100% on your infrastructure. No cloud. No API keys.
            No foreign data centre. India's first cognitive cybersecurity AI
            — built to predict attacks before they happen.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/contact" className="btn-gold gap-2 text-sm">
              Request a Demo <ArrowRight size={16} />
            </Link>
            <Link href="/product" className="btn-outline gap-2 text-sm">
              See How BUDDI Works
            </Link>
          </div>

          {/* Company tagline strip */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gold/40" />
            <span className="font-sans text-xs text-gold tracking-[0.25em] uppercase font-semibold">
              Built by Brothers, Backed by Brilliance
            </span>
            <div className="h-px w-16 bg-gold/40" />
          </div>
        </div>
      </section>

      {/* ══ STATS BAR ═══════════════════════════════════════════════════════ */}
      <section className="bg-navy border-y border-white/10">
        <div className="container-site">
          <div className="flex flex-wrap justify-center md:justify-between gap-8 py-10">
            {STATS.map(stat => (
              <div key={stat.label} className="text-center">
                <div className="font-serif font-bold text-gold text-3xl leading-none mb-1">
                  {stat.number}
                </div>
                <div className="font-sans text-xs text-white/50 tracking-widest uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ THREE PILLARS ════════════════════════════════════════════════════ */}
      <section className="bg-white section-pad">
        <div className="container-site">
          <div className="text-center mb-16">
            <span className="section-tag">Why BUDDI</span>
            <h2 className="font-serif font-bold text-navy text-4xl md:text-5xl leading-tight mb-4">
              Built for the market<br />no cloud vendor can serve
            </h2>
            <p className="font-sans text-slate max-w-xl mx-auto">
              CrowdStrike's business model requires cloud. If they go offline-first
              they lose their margins overnight. BUDDI was designed offline-first
              from line 1 of code. That is a permanent moat.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PILLARS.map(pillar => {
              const Icon = pillar.icon
              return (
                <div key={pillar.title} className="card border-t-4 border-t-gold group">
                  <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                    <Icon size={20} className="text-navy group-hover:text-gold transition-colors" />
                  </div>
                  <h3 className="font-serif font-bold text-navy text-xl mb-3">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-sm text-slate leading-relaxed">
                    {pillar.body}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══ WHO IT'S FOR ══════════════════════════════════════════════════════ */}
      <section className="bg-[#FAFAFA] section-pad">
        <div className="container-site">
          <div className="text-center mb-16">
            <span className="section-tag">Solutions</span>
            <h2 className="font-serif font-bold text-navy text-4xl md:text-5xl leading-tight">
              Built for India's most<br />critical operations
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                label: 'Banking & BFSI',
                headline: 'RBI mandates data stays in India.',
                body: 'Customer data, threat intelligence, and audit logs never leave your data centre. Built-in compliance for DPDPA 2023 and CERT-In 2022.',
                href: '/solutions#bfsi',
              },
              {
                label: 'Government & Defence',
                headline: 'Air-gapped. SCIF-ready.',
                body: 'Operates on classified networks with zero external connectivity. Court-admissible chain of custody. Full legal export package included.',
                href: '/solutions#government',
              },
              {
                label: 'Critical Infrastructure',
                headline: 'OT/ICS networks need different security.',
                body: 'No cloud dependency means no additional attack surface. BUDDI monitors power, telecom, and water infrastructure without external exposure.',
                href: '/solutions#infrastructure',
              },
              {
                label: 'Enterprise & Mid-Market',
                headline: '50 to 5,000 endpoints. One server.',
                body: 'Flat INR pricing. No per-GB billing. No per-endpoint fees above tier limits. BUDDI scales with you on hardware you own.',
                href: '/solutions#enterprise',
              },
            ].map(item => (
              <Link
                key={item.label}
                href={item.href}
                className="card group border-l-4 border-l-transparent hover:border-l-gold flex flex-col gap-2"
              >
                <div className="font-sans text-xs font-bold tracking-widest text-gold uppercase">
                  {item.label}
                </div>
                <h3 className="font-serif font-bold text-navy text-xl">{item.headline}</h3>
                <p className="font-sans text-sm text-slate leading-relaxed">{item.body}</p>
                <div className="mt-auto flex items-center gap-1 text-navy text-xs font-semibold group-hover:text-gold transition-colors">
                  Learn more <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PLATFORM PREVIEW ══════════════════════════════════════════════════ */}
      <section className="bg-white section-pad">
        <div className="container-site">
          <div className="text-center mb-16">
            <span className="section-tag">The Platform</span>
            <h2 className="font-serif font-bold text-navy text-4xl md:text-5xl leading-tight">
              Every capability you need.<br />Nothing you don't.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {FEATURES.map(f => {
              const Icon = f.icon
              return (
                <div key={f.title} className="card group flex gap-4">
                  <div className="w-10 h-10 rounded-card bg-navy flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-navy text-base mb-1">{f.title}</h3>
                    <p className="font-sans text-sm text-slate leading-relaxed">{f.body}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/product" className="btn-outline gap-2 text-sm">
              Explore BUDDI in Detail <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ DATA SOVEREIGNTY BLOCK ════════════════════════════════════════════ */}
      <section className="bg-navy section-pad">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-tag" style={{ color: '#C9A227' }}>
              The Guarantee
            </span>
            <h2 className="font-serif font-bold text-white text-4xl md:text-5xl leading-tight mb-6">
              Your data. Your hardware.<br />
              <span className="text-gold">Your sovereignty.</span>
            </h2>
            <p className="font-sans text-white/60 text-lg leading-relaxed mb-10">
              This is not a marketing promise. It is the architecture.
              Every byte of threat data, every memory record, every AI inference
              happens on a machine you own. Verifiable. Provable. Permanent.
            </p>

            {/* Code block */}
            <div className="text-left bg-[#0F2847] rounded-card border border-white/10 p-6 font-mono text-sm mb-10">
              <div className="text-white/30 mb-2">// buddi_config.json — your deployment</div>
              <div className="text-white/80">{`{`}</div>
              <div className="pl-4">
                <span className="text-gold">"threat_events"</span>
                <span className="text-white/60">: </span>
                <span className="text-green-400">"your SQLite database"</span>
                <span className="text-white/40">,</span>
              </div>
              <div className="pl-4">
                <span className="text-gold">"AI_models"</span>
                <span className="text-white/60">: </span>
                <span className="text-green-400">"your GPU / CPU"</span>
                <span className="text-white/40">,</span>
              </div>
              <div className="pl-4">
                <span className="text-gold">"audit_logs"</span>
                <span className="text-white/60">: </span>
                <span className="text-green-400">"your storage"</span>
                <span className="text-white/40">,</span>
              </div>
              <div className="pl-4">
                <span className="text-gold">"network_calls_outbound"</span>
                <span className="text-white/60">: </span>
                <span className="text-green-400">0</span>
              </div>
              <div className="text-white/80">{`}`}</div>
              <div className="text-white/30 mt-2">// Network traffic from BUDDI: Zero.</div>
            </div>

            <Link href="/contact" className="btn-gold gap-2 text-sm">
              Request a Demo <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ══════════════════════════════════════════════════════════ */}
      <section className="bg-white section-pad border-b border-divider">
        <div className="container-site text-center">
          <div className="gold-line mx-auto mb-8" />
          <h2 className="font-serif font-bold text-navy text-4xl md:text-5xl mb-4">
            Ready to see BUDDI in action?
          </h2>
          <p className="font-sans text-slate max-w-lg mx-auto mb-10">
            Thirty minutes. A live APT attack scenario. No slides.
            Just BUDDI detecting, predicting, and reporting — entirely on your infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold gap-2">
              Request a Demo <ArrowRight size={16} />
            </Link>
            <Link href="/pricing" className="btn-outline gap-2">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
