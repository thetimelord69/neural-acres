import type { Metadata } from 'next';
import Link from 'next/link';
import LiveDashboard from '@/components/LiveDashboard';

export const metadata: Metadata = {
  title: 'Technology',
  description:
    'Kryleos Atmos-OS is a biological control intelligence for autonomous pharmaceutical-grade medicinal fungi cultivation.',
};

const techStack = [
  {
    code: 'AI',
    title: 'AI & Computer Vision',
    items: [
      { name: 'Crop Health Intelligence', detail: 'Computer vision evaluates crop state, growth quality, and contamination risk across 11 agronomic audit points.' },
      { name: 'Edge Decision Layer', detail: 'Critical control decisions run locally inside the facility.' },
      { name: 'Operations Advisory Layer', detail: 'AI-powered contextual guidance for operators across cultivation, maintenance, and compliance domains — accessible in natural language.' },
      { name: 'Phase 2 ML Control', detail: 'Machine learning expands from monitoring to full closed-loop facility control.' },
      { name: 'Adaptive Optimization', detail: 'Cycle data trains the system to reduce drift and improve repeatability.' },
    ],
  },
  {
    code: 'IO',
    title: 'Sensing & Control',
    items: [
      { name: 'Multi-Variable Sensing', detail: '200+ environmental sensors monitor sealed grow zones at 5-second intervals — temperature, humidity, CO₂, and more.' },
      { name: 'Industrial Control Layer', detail: 'Facility equipment is governed through hardened automation interfaces.' },
      { name: 'Visual Monitoring', detail: '108 dedicated vision nodes deliver continuous image streams for growth-stage tracking and contamination detection.' },
      { name: 'Redundant Telemetry', detail: 'Sensor data is cross-checked before control actions are issued.' },
    ],
  },
  {
    code: 'CL',
    title: 'Climate Control',
    items: [
      { name: 'Precision Microclimate', detail: 'Temperature, humidity, air exchange, and light are managed as one control system.' },
      { name: 'Independent Zones', detail: 'Production zones can be operated separately for resilience and staggered harvests.' },
      { name: 'Automated Interventions', detail: 'Kryleos Atmos-OS corrects drift before crop quality is affected.' },
      { name: 'Phase 2 Autonomy', detail: 'ML models will coordinate climate equipment directly across full production cycles.' },
    ],
  },
  {
    code: 'QA',
    title: 'Data & Compliance',
    items: [
      { name: 'Batch Traceability', detail: 'Every grow cycle produces structured records for audit and quality review.' },
      { name: 'Controlled Data Retention', detail: 'Production data is stored with redundancy and restricted access.' },
      { name: 'Compliance-Ready Logs', detail: 'Environmental and intervention history supports future GMP and food-safety audits.' },
      { name: 'Cycle Intelligence', detail: 'Historical data becomes the training base for Phase 2 ML control.' },
    ],
  },
  {
    code: 'OP',
    title: 'Monitoring & Alerts',
    items: [
      { name: 'Operator Dashboard', detail: 'Facility health, crop status, and intervention history are visible in one interface.' },
      { name: 'Escalation Logic', detail: 'Maintenance alerts are prioritized by biological risk and facility impact.' },
      { name: 'Anomaly Review', detail: 'Operators can inspect deviations without exposing raw control logic.' },
      { name: 'Investor Preview', detail: 'The demo dashboard communicates system behavior without disclosing implementation secrets.' },
    ],
  },
  {
    code: 'IP',
    title: 'Kryleos Atmos-OS Core IP',
    items: [
      { name: 'Private Control Engine', detail: 'The core control library is proprietary and not exposed publicly.' },
      { name: 'Biological State Model', detail: 'Kryleos Atmos-OS converts sensor and vision data into cultivation state decisions.' },
      { name: 'Decision Governance', detail: 'Control actions are constrained by validated biological operating envelopes.' },
      { name: 'Licensable Platform', detail: 'The same engine can later govern other fungi, botanicals, and aquaculture systems.' },
    ],
  },
];

const hiwSteps = [
  {
    n: '01',
    title: 'Sense',
    desc: 'Environmental and visual signals are collected from sealed cultivation zones and converted into a live biological state picture.',
    tags: ['Microclimate', 'Vision', 'Telemetry', 'Batch Data'],
  },
  {
    n: '02',
    title: 'Think',
    desc: 'Kryleos Atmos-OS interprets sensor drift, visual health signals, and batch context to decide when intervention is needed.',
    tags: ['Edge AI', 'Anomaly Review', 'Crop State', 'Decision Layer'],
  },
  {
    n: '03',
    title: 'Act',
    desc: 'Validated control actions adjust the facility environment, log intervention history, and prepare the training base for Phase 2 ML autonomy.',
    tags: ['Climate Control', 'Audit Trail', 'Intervention Logic', 'Phase 2 ML'],
  },
];

export default function TechnologyPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="orb orb-teal w-[500px] h-[500px] -top-32 -right-20 opacity-30" />
          <div className="grid-overlay opacity-60" />
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="eyebrow mb-4">Technology</div>
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl text-silver-100 mb-6 leading-tight">
            Kryleos Atmos-OS —<br />
            <span className="text-gradient">Biological Control Intelligence</span>
          </h1>
          <p className="text-silver-300 text-xl leading-relaxed max-w-2xl">
            The central nervous system of every Neural Acres facility. Not a timer. Not a
            thermostat. A continuously learning biological control intelligence that eliminates
            the parameter drift responsible for yield loss across the industry.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-navy-800">
        <div className="max-w-6xl mx-auto">
          <div className="eyebrow mb-4">How It Works</div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-silver-100 mb-14">
            Sense. <span className="text-gradient">Think.</span> Act.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {hiwSteps.map(({ n, title, desc, tags }) => (
              <div key={n} className="card p-8">
                <div className="font-mono text-xs text-teal-500 tracking-widest mb-5">{n}</div>
                <h3 className="font-heading font-bold text-silver-100 text-2xl mb-4">{title}</h3>
                <p className="text-silver-400 text-sm leading-relaxed mb-6">{desc}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map(t => (
                    <span key={t} className="px-2.5 py-1 bg-teal-500/8 border border-teal-500/15 rounded-full text-xs font-mono text-teal-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="eyebrow mb-4">System Preview</div>
              <h2 className="font-heading font-bold text-4xl text-silver-100 mb-6 leading-tight">
                Kryleos Atmos-OS in <span className="text-gradient">Real Time</span>
              </h2>
              <p className="text-silver-300 text-base leading-relaxed mb-8">
                The dashboard preview shows the operator-facing layer of Kryleos Atmos-OS without exposing
                the underlying control stack. Phase 0 focuses on monitored autonomy; Phase 2 extends
                Kryleos Atmos-OS into machine-learning control of the full cultivation system.
              </p>
              <div className="space-y-4">
                {[
                  { label: 'Phase 0 Role', val: 'Monitor + assist', desc: 'Validate sensing, vision, dashboard, and intervention logic' },
                  { label: 'Phase 1 Role', val: 'Assisted control', desc: 'AI recommendations reviewed and approved by engineer before actuation' },
                  { label: 'Phase 2 Role', val: 'ML full control', desc: 'Closed-loop learning across climate, timing, and production actions' },
                  { label: 'Control Scope', val: 'Whole facility', desc: 'Climate, visual health, batch history, and operator escalation' },
                  { label: 'Disclosure Level', val: 'Investor-safe', desc: 'Capability proof without public replication details' },
                ].map(({ label, val, desc }) => (
                  <div key={label} className="flex items-start gap-4 p-4 card">
                    <div className="min-w-0">
                      <div className="font-mono text-xs text-teal-500 tracking-wide mb-0.5">{label}</div>
                      <div className="font-heading font-bold text-silver-100 text-lg">{val}</div>
                      <div className="text-silver-500 text-xs">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <LiveDashboard />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-navy-800">
        <div className="max-w-6xl mx-auto">
          <div className="eyebrow mb-4">Public Architecture</div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-silver-100 mb-6">
            Built for <span className="text-gradient">Industrial Scale</span>
          </h2>
          <p className="text-silver-400 text-base max-w-2xl mb-14 leading-relaxed">
            This public overview explains what Kryleos Atmos-OS does without exposing the vendor stack,
            sensor bill of materials, protocols, thresholds, or private control logic.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {techStack.map(({ code, title, items }) => (
              <div key={title} className="card p-7 hover:border-teal-500/25 transition-all">
                <div className="font-mono text-sm text-gold-400 mb-4">{code}</div>
                <h3 className="font-heading font-semibold text-silver-100 text-base mb-5">{title}</h3>
                <ul className="space-y-3">
                  {items.map(({ name, detail }) => (
                    <li key={name} className="flex flex-col gap-0.5">
                      <span className="text-silver-200 text-sm font-medium">{name}</span>
                      <span className="text-silver-500 text-xs leading-snug">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex items-start gap-4 p-6 bg-teal-500/6 border border-teal-500/20 rounded-2xl">
            <span className="font-mono text-gold-400 text-sm flex-shrink-0">IP</span>
            <div className="text-sm text-silver-300 leading-relaxed">
              <strong className="text-silver-100">Proprietary IP Protected:</strong>{' '}
              Kryleos Atmos-OS is maintained as private control IP. Public materials describe capability,
              not source structure, hardware recipes, thresholds, or replication-level implementation details.
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-silver-100 mb-5">
            See the Full <span className="text-gradient">Roadmap & Vision</span>
          </h2>
          <p className="text-silver-400 text-base mb-8">
            Kryleos Atmos-OS starts with Cordyceps and scales to fungi, botanicals, and aquaculture —
            a universal bio-manufacturing platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/roadmap"
              className="px-7 py-3.5 bg-teal-500 text-navy-950 font-bold rounded-xl shadow-teal-glow hover:bg-teal-400 transition-all">
              Explore Roadmap →
            </Link>
            <Link href="/financials"
              className="px-7 py-3.5 border border-teal-500/30 text-silver-100 font-semibold rounded-xl hover:border-teal-500/60 hover:bg-teal-500/6 transition-all">
              View Financials
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
