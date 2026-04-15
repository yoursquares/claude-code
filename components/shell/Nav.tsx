'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const links = [
  { href: '/', label: 'Start' },
  { href: '/explore', label: 'Explore' },
  { href: '/units', label: 'Wohnungen' },
  { href: '/financing', label: 'Finanzierung' },
  { href: '/booking', label: 'Termin' },
  { href: '/webinar', label: 'Live' },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="fixed top-4 inset-x-4 z-50 flex justify-center pointer-events-none">
      <div
        className={`pointer-events-auto glass border rounded-full h-14 flex items-center pl-5 pr-2 gap-1 transition-all duration-500 ${
          scrolled
            ? 'bg-ink-950/80 border-white/10'
            : 'bg-white/[0.03] border-white/5'
        }`}
      >
        <Link href="/" className="flex items-center gap-2.5 pr-4 border-r border-white/10 mr-2">
          <div className="w-7 h-7 rounded-lg bg-lime grid place-items-center">
            <span className="font-mono text-ink-950 text-[13px] font-semibold">L</span>
          </div>
          <span className="font-semibold tracking-tightest text-bone">LaVie</span>
        </Link>
        <ul className="hidden md:flex items-center text-sm">
          {links.map((l) => {
            const active = l.href === '/' ? pathname === '/' : pathname.startsWith(l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`px-3.5 py-2 rounded-full transition-colors ${
                    active ? 'text-bone bg-white/10' : 'text-ink-300 hover:text-bone hover:bg-white/5'
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="ml-1 pl-2 border-l border-white/10 flex items-center gap-1">
          <Link
            href="/booking"
            className="h-10 px-4 rounded-full bg-lime text-ink-950 text-sm font-medium inline-flex items-center hover:bg-lime-400 transition"
          >
            Termin buchen
          </Link>
        </div>
      </div>
    </nav>
  );
}
