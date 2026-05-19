import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Roadmap',
  description: 'Neural Acres 5-phase roadmap — from Phase 0 demo unit to a global bio-manufacturing platform spanning fungi, botanicals, and aquaculture.',
};

const phases = [
  {
    phase: 'Phase 0',
    tag: 'Under Construction',
    tagStyle: 'bg-gold-400/12 text-gold-400 border-gold-400/30',
    dotStyle: 'bg-gold-400 shadow-[0_0_12px_rgba(215,185,87,0.55)]',
    active: true,
    title: 'Demo Unit',
    subtitle: '50×50cm Sealed Biosphere · 15 Jars',
    desc: 'Under construction to prove the Metera AI concept end-to-end: microclimate governance, computer vision review, and an operator dashboard before Phase 1 capital deployment.',
    targets: [
      'Fruiting rate ≥80% of jars',
      'Cordycepin content ≥10 mg/g (pharma-grade)',
      'Yield ≥5 g/jar dry weight',
      'Temperature stable ±0.2°C around 18°C',
      'Metera AI dashboard prototype visible to investors',
    ],
    specs: [
      { label: 'CapEx', val: '~₹25,000' },
      { label: 'Compute', val: 'Private edge control layer' },
      { label: 'Sensing', val: 'Environmental telemetry' },
      { label: 'Vision', val: 'Computer vision review' },
    ],
  },
  {
    phase: 'Phase 1',
    tag: 'Seed Round',
    tagStyle: 'bg-cyan-500/12 text-cyan-400 border-cyan-500/25',
    dotStyle: 'bg-navy-700 border-2 border-silver-400',
    active: false,
    title: 'Twin-Zone Commercial Facility',
    subtitle: '20,000 Jars · KINFRA 4,000 sq ft · Dual Zone',
    desc: 'Full commercial-scale facility with two independent 10,000-jar zones offset 30 days apart, generating monthly cash flow from Month 3. Annual dry output is projected at 582 kg in Year 1 stabilization. Deployment is contingent on successful completion of Phase 0 biological validation.',
    targets: [
      'Conservative annual revenue: INR 174.60 Lakhs',
      'Premium annual revenue: INR 232.80 Lakhs',
      'Steady state monthly revenue: INR 18-24 Lakhs/month',
      'Annual output: 582 kg at >=10 mg/g cordycepin',
      'FSSAI certified + first Master CoA generated',
    ],
    specs: [
      { label: 'CapEx', val: '₹110.90 Lakhs' },
      { label: 'Compute', val: 'Industrial edge AI' },
      { label: 'Climate', val: 'Dual-zone precision control' },
      { label: 'Team', val: '10 staff (24/7 operations)' },
    ],
  },
  {
    phase: 'Phase 2',
    tag: 'Post Phase 1',
    tagStyle: 'bg-silver-500/8 text-silver-400 border-silver-500/15',
    dotStyle: 'bg-navy-700 border-2 border-silver-500/40',
    active: false,
    title: 'Botanical Expansion — Medicinal Fungi',
    subtitle: 'Lion\'s Mane · Reishi · Premium Mushrooms',
    desc: 'Scale Metera AI to Lion\'s Mane, Reishi, and other high-value medicinal mushrooms. Prove platform adaptability across different biological profiles. Activate ML-driven full-system control for autonomous climate and production optimization.',
    targets: [
      'Retrain vision intelligence for new fungal phenotypes',
      'Activate full ML control at 6-cycle / 60,000-jar scale threshold',
      'Expand B2B customer base to new product lines',
      'Demonstrate Metera AI platform versatility',
      'Increase annual revenue with diversified SKUs',
    ],
    specs: [
      { label: 'New Crops', val: 'Lion\'s Mane, Reishi, + others' },
      { label: 'AI Milestone', val: 'Full ML control at 6-cycle / 60,000-jar threshold' },
      { label: 'AI Update', val: 'Vision model expansion' },
      { label: 'Market', val: 'Expanded nutraceutical B2B' },
    ],
  },
  {
    phase: 'Phase 3',
    tag: 'Platform Expansion',
    tagStyle: 'bg-silver-500/8 text-silver-400 border-silver-500/15',
    dotStyle: 'bg-navy-700 border-2 border-silver-500/40',
    active: false,
    title: 'Complex Botanicals',
    subtitle: 'Saffron · Vanilla · High-Value Climate-Sensitive Crops',
    desc: 'Expand Metera AI governance to Saffron, Vanilla, and other delicate climate-sensitive botanicals. Adapt vision intelligence for entirely new phenotypes and establish validated operating envelopes — proving Metera AI as a universal cultivation platform.',
    targets: [
      'Saffron cultivation with ≥28 mg/g safranal content',
      'New vision intelligence trained for botanical phenotypes',
      'Establish deterministic SOPs for non-fungal biology',
      'Organic (NPOP) certification for premium export pricing',
      'Prove Metera AI universality across plant kingdoms',
    ],
    specs: [
      { label: 'Target Crops', val: 'Saffron, Vanilla, delicate botanicals' },
      { label: 'Platform Proof', val: 'Universal AI validation' },
      { label: 'Certification', val: 'NPOP Organic (target)' },
      { label: 'IP Expansion', val: 'New SOP modules for Metera' },
    ],
  },
  {
    phase: 'Phase 4',
    tag: 'Vertical Integration',
    tagStyle: 'bg-silver-500/8 text-silver-400 border-silver-500/15',
    dotStyle: 'bg-navy-700 border-2 border-silver-500/40',
    active: false,
    title: 'Swiss Extraction Unit',
    subtitle: 'Switzerland Facility · Extraction & Purification · Quality Validation',
    desc: 'Establish a Switzerland-based extraction unit to convert Neural Acres biomass into higher-value standardized extracts. The facility focuses on controlled extraction, purification, batch validation, and Swiss-grade quality documentation.',
    targets: [
      'Switzerland facility site selection and regulatory pathway review',
      'Controlled extraction and purification workflow established',
      'Third-party potency and contaminant validation for each batch',
      'Quality documentation suitable for nutraceutical or API-path evaluation',
      'Higher-margin extract sales vs. raw biomass pricing',
    ],
    specs: [
      { label: 'Location', val: 'Switzerland' },
      { label: 'Output', val: 'Standardized extracts' },
      { label: 'Validation', val: 'Third-party batch testing' },
      { label: 'Compliance', val: 'Swiss pathway review' },
    ],
  },
  {
    phase: 'Phase 5',
    tag: 'Global Platform',
    tagStyle: 'bg-silver-500/8 text-silver-400 border-silver-500/15',
    dotStyle: 'bg-navy-700 border-2 border-silver-500/40',
    active: false,
    title: 'Aquaculture',
    subtitle: 'High-Value Species · SaaS Licensing · Universal AI',
    desc: 'Adapt the Metera AI reasoning engine to high-value aquaculture. The same decision architecture; entirely new sensor modalities (pH, dissolved oxygen, salinity, ammonia). This phase proves Metera AI as a universal bio-manufacturing intelligence platform.',
    targets: [
      'Adapt Metera AI to aquatic sensor modalities',
      'pH, dissolved oxygen, salinity, ammonia monitoring',
      'High-value aquaculture species cultivation',
      'SaaS licensing model for third-party operators',
      'Global expansion of Metera AI platform',
    ],
    specs: [
      { label: 'New Sensors', val: 'pH, DO, salinity, ammonia' },
      { label: 'Revenue Model', val: 'SaaS licensing + direct ops' },
      { label: 'Core Engine', val: 'Same Metera AI reasoning engine' },
      { label: 'Vision', val: 'Universal bio-manufacturing AI' },
    ],
  },
];

export default function RoadmapPage() {
  return (
    <>
      {/* ═══ PAGE HERO ═══ */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="orb orb-teal w-[480px] h-[480px] -top-28 -left-20 opacity-25" />
          <div className="grid-overlay opacity-50" />
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="eyebrow mb-4">Roadmap</div>
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl text-silver-100 mb-6 leading-tight">
            Five Phases to a<br />
            <span className="text-gradient">Global Bio-Manufacturing Platform</span>
          </h1>
          <p className="text-silver-300 text-xl leading-relaxed max-w-2xl">
            Starting with <em className="text-teal-400 not-italic">Cordyceps militaris</em> and scaling
            Metera AI across medicinal fungi, complex botanicals, vertical extraction, and aquaculture.
          </p>
        </div>
      </section>

      {/* ═══ TIMELINE ═══ */}
      <section className="py-16 px-6 pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-6 bottom-0 w-px bg-gradient-to-b from-teal-500/60 via-teal-500/20 to-transparent" />

            <div className="space-y-0">
              {phases.map(({ phase, tag, tagStyle, dotStyle, active, title, subtitle, desc, targets, specs }) => (
                <div key={phase} className="relative flex gap-8 pb-16 last:pb-0">
                  {/* Dot */}
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${dotStyle} ${active ? '' : ''}`}>
                      {active && (
                        <span className="w-4 h-4 rounded-full bg-teal-500" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 pb-2 ${active ? 'card border-teal-500/30 p-8 shadow-teal-glow' : 'card p-8'}`}>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="font-mono text-xs text-teal-500 tracking-widest">{phase}</span>
                      <span className={`px-2.5 py-1 text-xs font-mono font-medium rounded-full border ${tagStyle}`}>
                        {tag}
                      </span>
                    </div>

                    <h2 className="font-heading font-bold text-silver-100 text-2xl mb-1">{title}</h2>
                    <div className="text-teal-400/70 text-sm font-medium mb-4">{subtitle}</div>
                    <p className="text-silver-400 text-sm leading-relaxed mb-6">{desc}</p>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Targets */}
                      <div>
                        <div className="font-mono text-[10px] text-silver-500 tracking-widest uppercase mb-3">Success Targets</div>
                        <ul className="space-y-2">
                          {targets.map(t => (
                            <li key={t} className="flex items-start gap-2 text-sm text-silver-400">
                              <span className="text-teal-500 mt-0.5 flex-shrink-0 text-xs">▸</span>
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Specs */}
                      <div>
                        <div className="font-mono text-[10px] text-silver-500 tracking-widest uppercase mb-3">Key Specs</div>
                        <div className="space-y-2">
                          {specs.map(({ label, val }) => (
                            <div key={label} className="flex justify-between gap-4 text-sm">
                              <span className="text-silver-500">{label}</span>
                              <span className="text-silver-200 font-medium text-right">{val}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-24 px-6 bg-navy-800 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-silver-100 mb-5">
            Ready to Back <span className="text-gradient">Phase 1</span>?
          </h2>
          <p className="text-silver-400 text-base mb-8 leading-relaxed">
            Phase 0 demo unit is under construction. Angel investors who engage now can review
            the build plan, validation milestones, and Metera AI architecture before capital deployment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/financials"
              className="px-7 py-3.5 bg-teal-500 text-navy-950 font-bold rounded-xl shadow-teal-glow hover:bg-teal-400 transition-all">
              View Investment Details →
            </Link>
            <Link href="/contact"
              className="px-7 py-3.5 border border-teal-500/30 text-silver-100 font-semibold rounded-xl hover:border-teal-500/60 hover:bg-teal-500/6 transition-all">
              Express Interest
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
