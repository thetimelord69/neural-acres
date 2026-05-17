'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/',            label: 'Home' },
  { href: '/technology',  label: 'Technology' },
  { href: '/roadmap',     label: 'Roadmap' },
  { href: '/financials',  label: 'Financials' },
  { href: '/contact',     label: 'Contact' },
];

export default function Navbar() {
  const pathname  = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-950/90 backdrop-blur-xl border-b border-teal-500/10 shadow-card'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-[68px] flex items-center gap-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
          <Image
            src="/logo-mark.svg"
            alt="Neural Acres Logo"
            width={40}
            height={40}
            className="transition-transform duration-300 group-hover:scale-105"
          />
          <div className="leading-tight">
            <div className="font-heading font-bold text-silver-100 text-base tracking-tight">
              Neural <span className="text-gradient">Acres</span>
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 ml-auto">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active
                    ? 'text-teal-500 bg-teal-500/10'
                    : 'text-silver-300 hover:text-teal-400 hover:bg-teal-500/6'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <Link
          href="/financials"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-teal-500 text-navy-950 text-sm font-bold rounded-lg shadow-teal-glow hover:bg-teal-400 hover:shadow-teal-glow-lg transition-all duration-200 flex-shrink-0"
        >
          View Investment ↗
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden ml-auto flex flex-col gap-[5px] p-1.5"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-silver-200 transition-all duration-200 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-0.5 bg-silver-200 transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-silver-200 transition-all duration-200 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-navy-950/98 backdrop-blur-xl border-t border-teal-500/10 ${
          open ? 'max-h-[400px]' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-1">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  active
                    ? 'text-teal-500 bg-teal-500/10'
                    : 'text-silver-300 hover:text-teal-400 hover:bg-teal-500/6'
                }`}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/financials"
            className="mt-3 px-4 py-3 bg-teal-500 text-navy-950 text-sm font-bold rounded-lg text-center"
          >
            View Investment ↗
          </Link>
        </nav>
      </div>
    </header>
  );
}
