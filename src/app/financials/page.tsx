import type { Metadata } from 'next';
import Link from 'next/link';
import RevenueChart from '@/components/RevenueChart';
import CapexChart from '@/components/CapexChart';

export const metadata: Metadata = {
  title: 'Financials & Investment',
  description: 'Neural Acres Phase 1 annual revenue scenarios: INR 174.60L (conservative) to INR 232.80L (premium), with INR 110.90L Phase 1 CapEx and a INR 30-50L seed round for 3.5–5.5% Equity.',
};

const econCards = [
  { icon: '🏗️', val: '₹110.90L',   label: 'Total Phase 1 CapEx' },
  { icon: '📅', val: 'Month 3',    label: 'First Revenue (Zone A Harvest)' },
  { icon: '💰', val: 'INR 18-24L/mo',  label: 'Steady-State Monthly Revenue' },
  { icon: '📦', val: '582 kg',    label: 'Annual Pharma-Grade Output' },
  { icon: '📈', val: 'INR 174.60-232.80L',  label: 'Projected Annual Revenue' },
  { icon: '🌱', val: '≥10 mg/g',  label: 'Cordycepin — Pharma-Grade Threshold' },
];

const capexBreakdown = [
  { label: 'Facility envelope & compliance', amount: '₹20.10L', pct: 18 },
  { label: 'Climate control (dual HVAC + TFA)', amount: '₹24.55L', pct: 22 },
  { label: 'Sterilization & autoclave machinery', amount: '₹9.70L', pct: 9 },
  { label: 'Production hardware & post-harvest', amount: '₹12.45L', pct: 11 },
  { label: 'Genetics lab & substrate (Cycle 1)', amount: '₹8.90L', pct: 8 },
  { label: 'AI, compute, sensing & power', amount: '₹19.20L', pct: 17 },
  { label: 'Admin & OpEx (deposit + 6-mo runway)', amount: '₹16.00L', pct: 14 },
];

const fundingStages = [
  { stage: 'Stage 1', source: 'Angel Investor', amount: '₹30–50L', detail: '3.5–5.5% equity', color: 'text-teal-400 border-teal-500/30' },
  { stage: 'Stage 2', source: 'CGTMSE Loan', amount: '₹50–60L', detail: 'Collateral-free government loan', color: 'text-cyan-400 border-cyan-500/25' },
  { stage: 'Stage 3', source: 'BIRAC / KSUM', amount: 'TBD', detail: 'Grant funding post-prototype', color: 'text-silver-400 border-silver-500/20' },
];

const uof = [
  { label: 'Facility construction & fit-out', pct: 40 },
  { label: 'HVAC & climate systems', pct: 25 },
  { label: 'AI compute & sensing stack', pct: 20 },
  { label: 'Working capital & 6-mo OpEx', pct: 15 },
];

export default function FinancialsPage() {
  return (
    <>
      {/* ═══ PAGE HERO ═══ */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="orb orb-teal w-[520px] h-[520px] -top-32 -right-24 opacity-25" />
          <div className="grid-overlay opacity-50" />
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="eyebrow mb-4">Financials & Investment</div>
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl text-silver-100 mb-6 leading-tight">
            ₹110.90L CapEx →<br />
            <span className="text-gradient">INR 174.60-232.80L Revenue</span>
          </h1>
          <p className="text-silver-300 text-xl leading-relaxed max-w-2xl">
            Phase 1 revenue starts in Month 3 and scales through stabilization, with annual topline modeled under conservative and premium pricing scenarios from the feasibility report.
          </p>
        </div>
      </section>

      {/* ═══ UNIT ECONOMICS ═══ */}
      <section className="py-16 px-6 bg-navy-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {econCards.map(({ icon, val, label }) => (
              <div key={label} className="card p-6 text-center">
                <div className="text-2xl mb-3">{icon}</div>
                <div className="font-heading font-extrabold text-xl counter-num mb-1">{val}</div>
                <div className="text-silver-500 text-xs leading-snug">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CHARTS ═══ */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Revenue chart */}
            <div className="card p-7">
              <div className="font-mono text-[10px] text-teal-500 tracking-widest uppercase mb-1">Phase 1 Revenue Projection</div>
              <h3 className="font-heading font-semibold text-silver-100 text-base mb-6">Monthly Revenue: Conservative vs Premium (INR Lakhs)</h3>
              <RevenueChart />
            </div>
            {/* CapEx chart */}
            <div className="card p-7">
              <div className="font-mono text-[10px] text-teal-500 tracking-widest uppercase mb-1">Phase 1 Capital Allocation</div>
              <h3 className="font-heading font-semibold text-silver-100 text-base mb-6">CapEx Breakdown (₹110.90 Lakhs Total)</h3>
              <CapexChart />
            </div>
          </div>

          {/* CapEx table */}
          <div className="card p-8 mb-8">
            <h3 className="font-heading font-semibold text-silver-100 text-lg mb-6">Detailed CapEx Breakdown</h3>
            <div className="space-y-4">
              {capexBreakdown.map(({ label, amount, pct }) => (
                <div key={label}>
                  <div className="flex justify-between items-center mb-1.5 text-sm">
                    <span className="text-silver-300">{label}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-silver-500 font-mono text-xs">{pct}%</span>
                      <span className="text-teal-400 font-semibold font-mono w-20 text-right">{amount}</span>
                    </div>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-teal-700 to-teal-400"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              ))}
              <div className="flex justify-between pt-4 border-t border-teal-500/15 font-heading font-bold text-base">
                <span className="text-silver-100">Grand Total Launch Capital</span>
                <span className="text-gradient">₹110.90 Lakhs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PRICING TIERS ═══ */}
      <section className="py-16 px-6 bg-navy-800">
        <div className="max-w-6xl mx-auto">
          <div className="eyebrow mb-4">Revenue Model</div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-silver-100 mb-3">
            Pricing Tiers & <span className="text-gradient">Market Positioning</span>
          </h2>
          <p className="text-silver-400 text-sm mb-8 max-w-2xl leading-relaxed">
            Revenue projections use ₹30,000/kg (conservative) and ₹40,000/kg (premium export) as the per-kg rate — both within the Premium A-Grade tier.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { grade: 'Low-Grade / Spent Waste', price: '₹5,000–₹10,000/kg', highlight: false, note: '' },
              { grade: 'Standard Raw Grade', price: '₹18,000–₹25,000/kg', highlight: false, note: '' },
              { grade: 'Premium A-Grade', price: '₹30,000–₹45,000/kg', highlight: true, note: 'Conservative model: ₹30K/kg' },
              { grade: 'Ultra-High / Export Grade', price: '₹50,000–₹1,00,000/kg', highlight: false, note: 'Premium model: ₹40K/kg' },
            ].map(({ grade, price, highlight, note }) => (
              <div key={grade} className={`card p-6 ${highlight ? 'border-teal-500/40' : ''}`}>
                <div className={`font-heading font-bold text-lg mb-1 ${highlight ? 'text-teal-400' : 'text-silver-200'}`}>{price}</div>
                <div className="text-silver-400 text-sm mb-2">{grade}</div>
                {note && <div className="font-mono text-xs text-teal-500">{note}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INVESTMENT ASK ═══ */}
      <section className="py-24 px-6 bg-navy-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left — ask */}
            <div>
              <div className="eyebrow mb-4">Seed Round · Open Now</div>
              <div className="font-heading font-extrabold text-6xl md:text-7xl text-gradient mb-2 leading-none">
                ₹30–50L
              </div>
              <div className="text-silver-300 text-xl mb-6">
                for <span className="text-cyan-400 font-bold">3.5–5.5% equity</span>
              </div>
              <p className="text-silver-400 text-base leading-relaxed mb-8">
                Angel capital bridges Phase 0 → Phase 1 alongside a CGTMSE collateral-free
                government loan (₹50–60L) and BIRAC/KSUM grants post-prototype. Investor capital
                is deployed directly for facility construction and the first production cycle.
              </p>

              {/* Key numbers */}
              <div className="space-y-3 mb-8">
                {[
                  { label: 'First commercial revenue', val: 'Month 3 (Zone A harvest)' },
                  { label: 'Steady-state monthly revenue', val: 'INR 18-24 Lakhs/month' },
                  { label: 'Phase 1 annual revenue', val: 'INR 174.60-232.80 Lakhs' },
                  { label: 'Pricing scenarios', val: 'Conservative and premium annual revenue cases' },
                  { label: 'Asset recovery timeline', val: 'Conservative: ~10 months · Premium: within Year 1' },
                ].map(({ label, val }) => (
                  <div key={label} className="flex justify-between gap-4 py-2 border-b border-white/5 text-sm">
                    <span className="text-silver-500">{label}</span>
                    <span className="text-silver-200 font-semibold text-right">{val}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 bg-teal-500 text-navy-950 font-bold text-base rounded-xl shadow-teal-glow hover:bg-teal-400 hover:shadow-teal-glow-lg transition-all"
              >
                Express Interest →
              </Link>
            </div>

            {/* Right — funding + use of funds */}
            <div className="space-y-6">
              {/* Funding stages */}
              <div className="card p-7">
                <div className="font-mono text-[10px] text-silver-500 tracking-widest uppercase mb-5">Funding Sequence</div>
                <div className="space-y-4">
                  {fundingStages.map(({ stage, source, amount, detail, color }, i) => (
                    <div key={stage}>
                      <div className="flex items-center gap-4">
                        <span className={`px-2.5 py-1 text-xs font-mono font-bold rounded-lg border ${color} bg-current/5 flex-shrink-0`}
                          style={{ background: 'transparent' }}>
                          {stage}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="text-silver-200 text-sm font-semibold">{source}</div>
                          <div className="text-silver-500 text-xs">{detail}</div>
                        </div>
                        <span className={`font-heading font-bold text-base flex-shrink-0 ${color.split(' ')[0]}`}>
                          {amount}
                        </span>
                      </div>
                      {i < fundingStages.length - 1 && (
                        <div className="ml-8 mt-2 text-silver-600 text-lg">+</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* OPEX + Breakeven */}
              <div className="card p-7">
                <div className="font-mono text-[10px] text-silver-500 tracking-widest uppercase mb-5">Steady-State Monthly OPEX</div>
                <div className="flex justify-between items-center mb-5">
                  <span className="text-silver-400 text-sm">Total monthly outflow</span>
                  <span className="font-heading font-bold text-teal-400 text-xl">₹6.92L/mo</span>
                </div>
                <div className="space-y-2.5 mb-5">
                  {[
                    { label: 'Operations (substrate, utilities, logistics)', val: '₹3.30L' },
                    { label: 'Staffing (4 specialists)', val: '₹1.80L' },
                    { label: 'Facility & software', val: '₹0.72L' },
                    { label: 'Debt service (CGTMSE EMI)', val: '₹1.08L' },
                  ].map(({ label, val }) => (
                    <div key={label} className="flex justify-between gap-3 text-xs py-1 border-b border-white/4 last:border-0">
                      <span className="text-silver-500">{label}</span>
                      <span className="text-silver-300 font-mono flex-shrink-0">{val}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-3 border-t border-teal-500/15 text-xs text-silver-400 leading-relaxed">
                  Breakeven at just <span className="text-teal-400 font-semibold">23.1 kg/month</span> (conservative) —
                  only <span className="text-teal-400 font-semibold">38%</span> of steady-state capacity.
                  At premium pricing, breakeven drops to <span className="text-teal-400 font-semibold">17.3 kg/month</span>.
                </div>
              </div>

              {/* Use of funds */}
              <div className="card p-7">
                <div className="font-mono text-[10px] text-silver-500 tracking-widest uppercase mb-5">Use of Angel Funds</div>
                <div className="space-y-4">
                  {uof.map(({ label, pct }) => (
                    <div key={label}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-silver-300">{label}</span>
                        <span className="text-teal-400 font-bold font-mono">{pct}%</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-teal-700 to-teal-400"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ COMPLIANCE ADVANTAGE ═══ */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="eyebrow mb-4">Compliance = Competitive Moat</div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-silver-100 mb-10">
            Regulatory Certifications <span className="text-gradient">Roadmap</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { time: 'Month 1', cert: 'FSSAI Application Filed', detail: 'High-risk manufacturing license, 60–90 days, ₹25–50K', color: 'text-teal-400' },
              { time: 'Month 1', cert: 'MSME/Udyam Registration', detail: 'Required for CGTMSE loan eligibility. Free, immediate.', color: 'text-teal-400' },
              { time: 'Month 3', cert: 'First Master CoA', detail: 'Third-party potency validation for each commercial batch', color: 'text-cyan-400' },
              { time: 'Month 5', cert: 'First Export Pathway', detail: 'Export documentation, phytosanitary review, and buyer qualification.', color: 'text-cyan-400' },
              { time: 'Year 1', cert: 'GMP Fast-Track Application', detail: 'Schedule M / WHO-GMP — pharma buyer unlock, ₹1.5–2.5Cr', color: 'text-silver-400' },
              { time: 'Year 2', cert: 'ISO 22000 Application', detail: 'Leverages 12+ months of controlled Metera AI batch records', color: 'text-silver-400' },
            ].map(({ time, cert, detail, color }) => (
              <div key={cert} className="card p-6 hover:border-teal-500/25 transition-all">
                <div className="font-mono text-xs text-silver-500 tracking-wide mb-2">{time}</div>
                <div className={`font-heading font-semibold text-base mb-2 ${color}`}>{cert}</div>
                <div className="text-silver-500 text-xs leading-relaxed">{detail}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-teal-500/6 border border-teal-500/20 rounded-2xl text-sm text-silver-300 leading-relaxed">
            <strong className="text-silver-100">Key Compliance Advantage:</strong>{' '}
            Physical unidirectional flow (pass-through autoclave, exit-only doors, de-gowning anteroom)
            structurally guarantees FSSAI high-risk hygiene compliance and structurally accelerates
            GMP and ISO 22000 audit readiness — blocking competitors who build conventionally.
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-20 px-6 bg-navy-800 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-heading font-bold text-3xl text-silver-100 mb-5">
            Ready to <span className="text-gradient">Invest?</span>
          </h2>
          <p className="text-silver-400 text-base mb-8">
            Schedule a call, request the full pitch deck, or come see the Phase 0 demo unit live.
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-teal-500 text-navy-950 font-bold text-base rounded-xl shadow-teal-glow hover:bg-teal-400 hover:shadow-teal-glow-lg transition-all"
          >
            Get In Touch →
          </Link>
        </div>
      </section>
    </>
  );
}
