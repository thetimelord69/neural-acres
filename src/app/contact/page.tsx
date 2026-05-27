import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Express interest in the Neural Acres seed round or request the full pitch deck. Phase 0 demo unit is under construction.',
};

const nextSteps = [
  {
    n: '1',
    title: 'Initial Call (30 min)',
    desc: 'Walk through Kryleos Atmos-OS architecture, Phase 1 financial model, and competitive landscape with the founder.',
  },
  {
    n: '2',
    title: 'Demo Build Review',
    desc: 'Review the Phase 0 construction status, hardware architecture, dashboard prototype, and validation milestones before commercial deployment.',
  },
  {
    n: '3',
    title: 'Due Diligence Package',
    desc: 'Full BOM, CapEx model, regulatory timeline, compliance roadmap, and Kryleos Atmos-OS Core Library architecture documentation.',
  },
  {
    n: '4',
    title: 'Term Sheet',
    desc: '₹30-50L seed investment for 3.5-5.5% equity, structured for CGTMSE government loan co-investment compatibility.',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ═══ PAGE HERO ═══ */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="orb orb-teal w-[500px] h-[500px] -top-28 left-1/2 -translate-x-1/2 opacity-20" />
          <div className="grid-overlay opacity-40" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="eyebrow mb-4">Get In Touch</div>
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl text-silver-100 mb-6 leading-tight">
            Ready to Back the<br />
            <span className="text-gradient">Future of Bio-Manufacturing?</span>
          </h1>
          <p className="text-silver-300 text-xl leading-relaxed max-w-xl mx-auto">
            Neural Acres is in active Phase 0 development. The demo unit is under construction,
            with investor diligence focused on the build plan, hardware architecture, and Kryleos Atmos-OS validation milestones.
          </p>
        </div>
      </section>

      {/* ═══ CONTACT + NEXT STEPS ═══ */}
      <section className="py-16 px-6 pb-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

          {/* Form */}
          <ContactForm />

          {/* Next steps */}
          <div>
            <div className="card p-8 mb-6">
              <h2 className="font-heading font-bold text-silver-100 text-xl mb-6">What Happens Next</h2>
              <div className="space-y-6">
                {nextSteps.map(({ n, title, desc }) => (
                  <div key={n} className="flex gap-5">
                    <div className="w-9 h-9 min-w-[36px] rounded-full border border-teal-500/30 bg-teal-500/8
                      flex items-center justify-center font-mono text-sm font-bold text-teal-400 flex-shrink-0">
                      {n}
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-silver-100 text-sm mb-1">{title}</div>
                      <p className="text-silver-400 text-xs leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick stats */}
            <div className="card p-6 bg-teal-500/5 border-teal-500/20">
              <div className="font-mono text-[10px] text-teal-500 tracking-widest uppercase mb-4">Seed Round Summary</div>
              <div className="space-y-3">
                {[
                  { label: 'Investment Ask',   val: '₹30–50 Lakhs' },
                  { label: 'Equity Offered',   val: '3.5–5.5%' },
                  { label: 'Demo Unit Status', val: 'Under construction' },
                  { label: 'Phase 1 Revenue',  val: 'INR 174.6L-232.8L/yr' },
                  { label: 'First Revenue',    val: 'Month 3 of Phase 1' },
                  { label: 'Co-Investment',    val: 'CGTMSE ₹50–60L + BIRAC' },
                ].map(({ label, val }) => (
                  <div key={label} className="flex justify-between gap-4 text-sm py-1.5 border-b border-white/5 last:border-0">
                    <span className="text-silver-500">{label}</span>
                    <span className="text-silver-200 font-semibold">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
