import Link from 'next/link'
import { ArrowRight, Shield, Zap, Eye, Server, Brain, Lock, Mic, FileText, GitBranch, Users, Activity } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BUDDI — The Product · PAVARISE ETHEREAL',
  description: 'BUDDI is a 100% offline cognitive cybersecurity AI. Phase 1–4 architecture, Markov kill-chain prediction, voice-activated autonomous mode, court-admissible chain of custody.',
}

const PHASES = [
  {
    phase: 'Phase 1',
    name: 'Cognitive Foundation',
    color: 'border-gold',
    items: [
      { icon: Brain, label: 'MoodEngine', desc: 'Emotional threat scoring — prioritises alerts by urgency, not just severity.' },
      { icon: Brain, label: 'LogicEngine', desc: 'Deductive reasoning layer. Connects disparate signals into a coherent threat picture.' },
      { icon: Brain, label: 'MemoryEngine', desc: 'Episodic + semantic memory. BUDDI remembers past incidents and learns from them.' },
    ],
  },
  {
    phase: 'Phase 2',
    name: 'Threat Intelligence',
    color: 'border-navy',
    items: [
      { icon: Activity, label: 'FusionEngine', desc: '196 MITRE ATT&CK transitions fused into a single coherent threat timeline.' },
      { icon: Zap, label: 'AttackPredictor', desc: 'Markov-chain kill-chain prediction. Tells you what happens next — before it does.' },
      { icon: Shield, label: 'SensoryHub', desc: 'Ingests logs, network packets, file events, registry changes in real time.' },
    ],
  },
  {
    phase: 'Phase 3',
    name: 'Operations & Forensics',
    color: 'border-gold',
    items: [
      { icon: FileText, label: 'Chain of Custody', desc: 'SHA-256 tamper-evident hash chain. Every action logged. Court-admissible by design.' },
      { icon: Eye, label: 'Digital Forensics', desc: 'Full disk image analysis, memory forensics, actor profiling and hypothesis engine.' },
      { icon: GitBranch, label: 'Red + Blue Team', desc: 'Offensive simulation and defensive response in one platform. Purple team built-in.' },
    ],
  },
  {
    phase: 'Phase 4',
    name: 'Governance & Vision',
    color: 'border-navy',
    items: [
      { icon: Lock, label: 'Moral Constitution', desc: 'Ten inviolable ethical principles. BUDDI cannot be weaponised against civilians.' },
      { icon: Users, label: 'OrgDNA Engine', desc: 'Builds a behavioural baseline for your organisation. Anomalies surface automatically.' },
      { icon: FileText, label: 'Transparency Reports', desc: 'Automated audit reports. Every decision BUDDI made, explained in plain English.' },
    ],
  },
]

const WORKSPACES = [
  { name: 'Home Dashboard',       desc: 'Unified threat overview. Live telemetry. Executive-level situational awareness.' },
  { name: 'SOC Operations',       desc: 'Real-time alert triage, investigation queue, analyst workflow management.' },
  { name: 'Blue Team',            desc: 'Defensive posture, patch recommendations, vulnerability mapping.' },
  { name: 'Red Team',             desc: 'Adversary simulation, attack path modelling, controlled penetration scenarios.' },
  { name: 'Purple Team',          desc: 'Coordinated red-blue exercises with shared telemetry and outcome scoring.' },
  { name: 'Digital Forensics',    desc: 'Disk and memory analysis, chain of custody, court-ready report export.' },
  { name: 'Enterprise Security',  desc: 'UEBA, insider threat detection, privilege escalation monitoring.' },
  { name: 'Threat Intelligence',  desc: 'MITRE ATT&CK mapping, IOC correlation, actor profiling.' },
  { name: 'Investigations',       desc: 'Case management, evidence chain, timeline reconstruction.' },
  { name: 'Administration',       desc: 'License management, user tiers, system health, deployment config.' },
]

export default function ProductPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-white pt-32 pb-20 border-b border-divider">
        <div className="container-site">
          <div className="max-w-3xl">
            <span className="section-tag">The Product</span>
            <h1 className="font-serif font-bold text-navy text-5xl md:text-6xl leading-tight mb-6">
              BUDDI — Cognitive<br />Cybersecurity AI
            </h1>
            <p className="font-sans text-slate text-lg leading-relaxed mb-8 max-w-2xl">
              Not an antivirus. Not a SIEM. BUDDI is a cognitive AI that perceives,
              reasons, remembers, and predicts — the same way a senior security analyst
              thinks, but at machine speed, 24 hours a day, with zero cloud dependency.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-gold gap-2">
                Request a Demo <ArrowRight size={16} />
              </Link>
              <Link href="/pricing" className="btn-outline gap-2">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key facts strip */}
      <section className="bg-navy">
        <div className="container-site py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { n: '349+',   l: 'Automated tests passing' },
              { n: '196',    l: 'MITRE ATT&CK transitions' },
              { n: '<500ms', l: 'Kill-chain prediction' },
              { n: '10',     l: 'Live workspaces' },
            ].map(s => (
              <div key={s.l} className="text-center">
                <div className="font-serif font-bold text-gold text-3xl mb-1">{s.n}</div>
                <div className="font-sans text-xs text-white/50 tracking-widest uppercase">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture — 4 phases */}
      <section className="bg-white section-pad">
        <div className="container-site">
          <div className="text-center mb-16">
            <span className="section-tag">Architecture</span>
            <h2 className="font-serif font-bold text-navy text-4xl md:text-5xl leading-tight mb-4">
              Four phases. One coherent mind.
            </h2>
            <p className="font-sans text-slate max-w-xl mx-auto">
              BUDDI's architecture mirrors human cognition — from raw perception
              to ethical decision-making. Each phase builds on the last.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {PHASES.map(phase => (
              <div key={phase.phase} className={`card border-t-4 ${phase.color}`}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="font-sans text-xs font-bold tracking-widest text-gold uppercase">
                    {phase.phase}
                  </div>
                  <div className="h-px flex-1 bg-divider" />
                  <div className="font-serif font-bold text-navy text-sm">{phase.name}</div>
                </div>
                <div className="flex flex-col gap-4">
                  {phase.items.map(item => {
                    const Icon = item.icon
                    return (
                      <div key={item.label} className="flex gap-3">
                        <div className="w-8 h-8 rounded-lg bg-navy/5 flex items-center justify-center shrink-0 mt-0.5">
                          <Icon size={15} className="text-navy" />
                        </div>
                        <div>
                          <div className="font-sans font-bold text-navy text-sm mb-0.5">{item.label}</div>
                          <div className="font-sans text-xs text-slate leading-relaxed">{item.desc}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Autonomous Mode */}
      <section className="bg-navy section-pad">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-tag" style={{ color: '#C9A227' }}>Autonomous Mode</span>
              <h2 className="font-serif font-bold text-white text-4xl md:text-5xl leading-tight mb-6">
                Say "BUDDI, wake up."<br />
                <span className="text-gold">That's it.</span>
              </h2>
              <p className="font-sans text-white/60 leading-relaxed mb-6">
                Voice-activated JARVIS interface. Ask BUDDI to investigate an alert,
                run a threat hunt, generate a forensic report, or navigate to any
                workspace — entirely by voice, entirely on your hardware.
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {[
                  'Offline speech recognition — Vosk model, no internet required',
                  'Natural language command processing',
                  'Autonomous investigation chains — BUDDI acts, not just answers',
                  'Voice + keyboard — works both ways',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <Mic size={14} className="text-gold mt-0.5 shrink-0" />
                    <span className="font-sans text-sm text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-gold gap-2 text-sm">
                See a Live Demo <ArrowRight size={16} />
              </Link>
            </div>

            {/* Terminal mock */}
            <div className="bg-[#0F2847] rounded-card border border-white/10 p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-2 text-white/30 text-xs">BUDDI Autonomous Shell</span>
              </div>
              <div className="space-y-2">
                <div><span className="text-gold">user@buddi</span><span className="text-white/40">:~$ </span><span className="text-white">buddi wake up</span></div>
                <div className="text-green-400">▶ BUDDI v1.1 — Phase 1–4 Active</div>
                <div className="text-white/50">Listening for commands...</div>
                <div className="mt-3"><span className="text-gold">user@buddi</span><span className="text-white/40">:~$ </span><span className="text-white">"investigate alert 1247"</span></div>
                <div className="text-white/70 pl-2">→ Fetching alert context...</div>
                <div className="text-white/70 pl-2">→ Correlating with MemoryEngine...</div>
                <div className="text-white/70 pl-2">→ AttackPredictor: APT29 lateral movement</div>
                <div className="text-white/70 pl-2">→ Next predicted step: credential dump</div>
                <div className="text-green-400 pl-2">✓ Report generated: INV-2026-1247.pdf</div>
                <div className="mt-3 text-white/30">// All processing on-device. Zero cloud calls.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10 Workspaces */}
      <section className="bg-[#FAFAFA] section-pad">
        <div className="container-site">
          <div className="text-center mb-16">
            <span className="section-tag">Workspaces</span>
            <h2 className="font-serif font-bold text-navy text-4xl md:text-5xl leading-tight mb-4">
              Ten workspaces.<br />One deployment.
            </h2>
            <p className="font-sans text-slate max-w-xl mx-auto">
              Every security function your team needs — SOC, forensics, red team,
              enterprise, government — in a single on-premise installation.
              No separate tools. No separate licenses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {WORKSPACES.map((ws, i) => (
              <div key={ws.name} className="bg-white rounded-card border border-divider p-5 flex gap-4 hover:border-gold/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-navy flex items-center justify-center shrink-0 font-sans font-bold text-gold text-xs">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <div className="font-sans font-bold text-navy text-sm mb-1">{ws.name}</div>
                  <div className="font-sans text-xs text-slate leading-relaxed">{ws.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white section-pad border-b border-divider">
        <div className="container-site text-center">
          <div className="gold-line mx-auto mb-8" />
          <h2 className="font-serif font-bold text-navy text-4xl md:text-5xl mb-4">
            See BUDDI in 30 minutes.
          </h2>
          <p className="font-sans text-slate max-w-lg mx-auto mb-10">
            Live APT attack scenario. No slides. BUDDI detects, predicts,
            and reports — entirely on your infrastructure.
          </p>
          <Link href="/contact" className="btn-gold gap-2">
            Request a Demo <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
