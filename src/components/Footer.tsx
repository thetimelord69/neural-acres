import Link from 'next/link';
import Image from 'next/image';

const links = [
  { href: '/',           label: 'Home' },
  { href: '/technology', label: 'Technology' },
  { href: '/roadmap',    label: 'Roadmap' },
  { href: '/financials', label: 'Financials' },
  { href: '/contact',    label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-teal-500/10 pt-14 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">

          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <Image src="/logo-mark.svg" alt="Neural Acres" width={36} height={36}
                className="transition-transform duration-300 group-hover:scale-105" />
              <div className="leading-tight">
                <div className="font-heading font-bold text-silver-100 text-sm tracking-tight">
                  Neural <span className="text-gradient">Acres</span>
                </div>
              </div>
            </Link>
            <p className="text-silver-400 text-sm leading-relaxed">
              Intelligent Biospheres. Pharmaceutical-Grade Output.<br />
              Powered by Metera AI v1.0.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="font-mono text-[10px] text-teal-500 tracking-widest uppercase mb-4">Navigation</div>
            <nav className="flex flex-col gap-2">
              {links.map(({ href, label }) => (
                <Link key={href} href={href}
                  className="text-silver-300 text-sm hover:text-teal-400 transition-colors duration-200">
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact / CTA */}
          <div>
            <div className="font-mono text-[10px] text-teal-500 tracking-widest uppercase mb-4">Investment</div>
            <p className="text-silver-300 text-sm mb-4 leading-relaxed">
              Seeking seed investment of<br />
              <span className="text-teal-500 font-bold">₹30–40 Lakhs</span> for{' '}
              <span className="text-cyan-500 font-bold">3% equity</span>.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-teal-500 text-navy-950 text-sm font-bold rounded-lg shadow-teal-glow hover:bg-teal-400 transition-all duration-200"
            >
              Express Interest →
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-teal-500/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-silver-500">
          <span>© 2026 Neural Acres. All rights reserved.</span>
          <span className="font-mono text-teal-500/60">Metera AI v1.0 · In Build · May 2026</span>
        </div>
      </div>
    </footer>
  );
}
