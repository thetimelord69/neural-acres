import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Neural Acres — not a farm. A machine. AI-governed cultivation of pharmaceutical-grade Cordyceps militaris.',
};

const proofPoints = [
  { value: 'Under Construction', label: 'Phase 0 demo unit', tone: 'text-gold-400' },
  { value: 'INR 30-50L', label: 'Seed ask for 3.5-5.5% equity', tone: 'text-teal-400' },
  { value: 'INR 110.90L', label: 'Phase 1 CapEx model', tone: 'text-cyan-400' },
  { value: 'INR 174.6-232.8L', label: 'Annual revenue target', tone: 'text-silver-100' },
];

const problems = [
  {
    icon: '⚠️',
    stat: '40%+',
    color: 'text-red-400',
    title: 'Contamination Loss',
    desc: 'Trichoderma mold and bacterial contamination wipe out entire batches. Traditional growers lose 30–50% of crops with zero early-warning systems.',
  },
  {
    icon: '📉',
    stat: 'Inconsistent',
    color: 'text-orange-400',
    title: 'Uncontrolled Potency',
    desc: 'Cordycepin levels swing wildly — 2 mg/g to 15 mg/g — due to manual climate guesswork. Pharma buyers require ≥10 mg/g every batch.',
  },
  {
    icon: '👷',
    stat: 'Manual',
    color: 'text-yellow-400',
    title: 'Labor-Dependent & Fragile',
    desc: 'Cultivation depends entirely on experienced operators. One absent technician can collapse an entire 60-day grow cycle.',
  },
  {
    icon: '📄',
    stat: 'Zero',
    color: 'text-silver-400',
    title: 'No Compliance Data',
    desc: 'Pharma and EU buyers demand GMP-traceable documentation. Traditional cultivation produces no audit trails — blocking premium markets entirely.',
  },
];

const advantages = [
  { n: '01', title: 'First-Mover in India', desc: 'Zero automated Cordyceps facilities exist in India. Neural Acres establishes the category before competitors can replicate the IP.' },
  { n: '02', title: 'Regulatory Moat', desc: 'Immutable data logs + unidirectional facility flow fast-track GMP & ISO 22000 — a multi-year, multi-crore barrier for traditional competitors.' },
  { n: '03', title: 'Proprietary Platform IP', desc: 'Metera AI is a reusable biological control platform. Future licensing to third-party growers creates a capital-light secondary revenue stream.' },
];

export default function Home() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20 pb-10 md:pt-24 md:pb-14">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="orb orb-teal w-[580px] h-[580px] -top-40 -left-32 opacity-40" />
          <div className="orb orb-cyan w-[480px] h-[480px] -bottom-32 -right-20 opacity-30" />
          <div className="orb orb-dark w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50" />
          <div className="grid-overlay" />
        </div>

        <div className="relative z-10 text-center max-w-4xl w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 border border-teal-500/25 rounded-full bg-teal-500/6 backdrop-blur-sm mb-5 text-sm text-silver-300 font-medium">
            <span className="badge-dot" />
            Seeking Seed Investment · ₹30–50 Lakhs · 3.5–5.5% Equity
          </div>

          {/* Logo lockup */}
          <div className="flex justify-center mb-5">
            <div className="animate-float">
              <Image
                src="/logo-hero.png"
                alt="Neural Acres"
                width={760}
                height={300}
                priority
                className="w-[min(82vw,420px)] h-auto drop-shadow-[0_0_34px_rgba(29,233,182,0.28)]"
              />
            </div>
          </div>

          {/* Headline */}
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl leading-[1.02] tracking-tight text-silver-100 mb-4">
            Not a farm.<br />
            <span className="text-gradient">A machine.</span>
          </h1>

          <p className="text-silver-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-6">
            Neural Acres builds sealed biological machines that cultivate pharmaceutical-grade{' '}
            <em className="text-teal-400 not-italic">Cordyceps militaris</em> with autonomous climate control,
            continuous vision audits, and certifiable output governed by{' '}
            <strong className="text-teal-500">Metera AI</strong>.
          </p>

          {/* Investor proof points */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 max-w-4xl mx-auto mb-7">
            {proofPoints.map(({ value, label, tone }) => (
              <div
                key={label}
                className="min-h-[74px] rounded-lg border border-teal-500/14 bg-navy-800/64 px-3 py-2.5 text-left backdrop-blur-md"
              >
                <div className={`font-heading font-extrabold text-lg md:text-xl leading-tight ${tone}`}>
                  {value}
                </div>
                <div className="mt-1.5 text-[11px] md:text-xs leading-snug text-silver-400">
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/financials"
              className="px-7 py-3.5 bg-teal-500 text-navy-950 font-bold text-base rounded-xl shadow-teal-glow hover:bg-teal-400 hover:shadow-teal-glow-lg transition-all duration-200"
            >
              View Investment Opportunity
            </Link>
            <Link
              href="/technology"
              className="px-7 py-3.5 border border-teal-500/30 text-silver-100 font-semibold text-base rounded-xl hover:border-teal-500/60 hover:bg-teal-500/6 transition-all duration-200"
            >
              Explore Metera AI ↓
            </Link>
          </div>

        </div>
      </section>

      {/* ═══ PROBLEM ═══ */}
      <section className="py-28 px-6 bg-navy-800">
        <div className="max-w-6xl mx-auto">
          <div className="eyebrow mb-4">The Problem</div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-silver-100 mb-5">
            A Billion-Dollar Market<br />
            <span className="text-gradient">Running on Guesswork</span>
          </h2>
          <p className="text-silver-300 text-lg max-w-2xl mb-14 leading-relaxed">
            The global Cordyceps militaris market was valued at USD 1.45B–1.8B in 2025, growing at a
            9.7–11.09% CAGR — yet the entire supply chain remains fragile, inconsistent, and trapped
            in the 20th century.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {problems.map(({ stat, color, title, desc }) => (
              <div key={title} className="card card-lift p-8">
                <div className={`font-heading font-extrabold text-3xl ${color} mb-2`}>{stat}</div>
                <h3 className="font-heading font-semibold text-silver-100 text-base mb-3">{title}</h3>
                <p className="text-silver-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SOLUTION TEASER ═══ */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="eyebrow mb-4">The Solution</div>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-silver-100 mb-6 leading-tight">
                Metera AI —<br />
                <span className="text-gradient">Biological Control Intelligence</span>
              </h2>
              <p className="text-silver-300 text-base leading-relaxed mb-6">
                The central nervous system of every Neural Acres facility. Not a timer. Not a
                thermostat. A continuously learning biological control intelligence that eliminates
                the parameter drift responsible for yield loss across the industry.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Precision microclimate governance across sealed grow zones',
                  'Computer vision reviews crop health and contamination risk',
                  'Phase 2 ML control expands from monitoring to full-system autonomy',
                  'Immutable compliance logs — GMP & ISO 22000 audit-ready',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-silver-300 text-sm">
                    <span className="text-teal-500 mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/technology"
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-navy-950 font-bold rounded-xl shadow-teal-glow hover:bg-teal-400 transition-all duration-200"
              >
                Deep Dive: Metera AI →
              </Link>
            </div>

            {/* Mini dashboard preview */}
            <div className="card p-0 overflow-hidden border-teal-500/20 shadow-teal-glow">
              <div className="flex items-center gap-2.5 px-5 py-3.5 bg-teal-500/6 border-b border-teal-500/12">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-500 live-dot shadow-[0_0_8px_#1de9b6]" />
                <span className="font-mono text-xs text-silver-300">Metera AI · Build Dashboard</span>
                <span className="ml-auto font-mono text-xs text-silver-500">Cycle Day 23/65</span>
              </div>
              <div className="p-5 space-y-4">
                {[
                  { label: 'Temperature',  val: '18.3°C',   pct: 76,  ok: true },
                  { label: 'Humidity RH',  val: '89.7%',    pct: 90,  ok: true },
                  { label: 'Air Quality',  val: 'Nominal',  pct: 82,  ok: true },
                  { label: 'Vision Score', val: '94.2%',    pct: 94,  ok: true },
                ].map(({ label, val, pct, ok }) => (
                  <div key={label} className="grid grid-cols-[100px_1fr_72px_20px] items-center gap-3">
                    <span className="text-silver-500 text-xs">{label}</span>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-teal-600 to-teal-400"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="font-mono text-xs text-silver-200 text-right">{val}</span>
                    <span className="text-teal-500 text-xs text-center">{ok ? '✓' : '!'}</span>
                  </div>
                ))}
              </div>
              <div className="px-5 pb-4 space-y-1.5">
                {[
                  { t: '14:32:07', m: 'Humidity intervention — mist pulse +3s' },
                  { t: '14:31:44', m: 'Vision review: crop health nominal ✓' },
                  { t: '14:30:02', m: 'Air exchange within safe range — no action' },
                ].map(({ t, m }) => (
                  <div key={t} className="flex gap-3 text-xs border-t border-white/4 pt-1.5">
                    <span className="font-mono text-silver-500 flex-shrink-0">{t}</span>
                    <span className="text-silver-400">{m}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center px-5 py-3 border-t border-teal-500/10 bg-black/20 text-xs text-silver-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 live-dot" />
                  All Systems Nominal
                </span>
                <span>Private Edge-AI Control Layer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ COMPETITIVE ADVANTAGES ═══ */}
      <section className="py-28 px-6 bg-navy-800">
        <div className="max-w-6xl mx-auto">
          <div className="eyebrow mb-4">Why Neural Acres Wins</div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-silver-100 mb-14">
            Built to <span className="text-gradient">Dominate</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {advantages.map(({ n, title, desc }) => (
              <div key={n} className="card card-lift p-8">
                <div className="font-mono text-5xl font-bold text-teal-500/15 mb-5 leading-none">{n}</div>
                <h3 className="font-heading font-semibold text-silver-100 text-lg mb-3">{title}</h3>
                <p className="text-silver-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INVESTMENT CTA ═══ */}
      <section className="py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="eyebrow mb-4">Seed Round Open</div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-silver-100 mb-6">
            <span className="text-gradient">₹30–50 Lakhs</span><br />
            for 3.5–5.5% Equity
          </h2>
          <p className="text-silver-300 text-lg leading-relaxed mb-4">
            Phase 0 demo unit is under construction. Phase 1 commercial revenue begins Month 3.
            Angel investment bridges to CGTMSE collateral-free loan (₹50–60L).
          </p>
          <p className="text-silver-400 text-base mb-10">
            INR 110.90L Phase 1 CapEx with annual revenue scenarios of INR 174.6L (conservative)
            to INR 232.8L (premium).
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/financials"
              className="px-8 py-4 bg-teal-500 text-navy-950 font-bold text-base rounded-xl shadow-teal-glow hover:bg-teal-400 hover:shadow-teal-glow-lg transition-all duration-200"
            >
              View Full Financials
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-teal-500/30 text-silver-100 font-semibold text-base rounded-xl hover:border-teal-500/60 hover:bg-teal-500/6 transition-all duration-200"
            >
              Express Interest →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
