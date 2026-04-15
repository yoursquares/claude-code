import Link from 'next/link';

export function Nav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 glass bg-neutral-950/40 border-b border-white/5">
      <div className="max-w-[1600px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-white text-neutral-900 grid place-items-center font-bold">y</div>
          <span className="font-semibold tracking-tight">yoursquares</span>
        </Link>
        <ul className="hidden md:flex items-center gap-7 text-sm text-neutral-300">
          <li><Link href="/" className="hover:text-white">Projekte</Link></li>
          <li><a href="#" className="hover:text-white">Regionen</a></li>
          <li><a href="#" className="hover:text-white">Für Bauträger</a></li>
          <li><a href="#" className="hover:text-white">Magazin</a></li>
        </ul>
        <div className="flex items-center gap-3">
          <a href="#" className="hidden md:inline-flex h-10 px-4 rounded-full border border-white/10 text-sm items-center hover:bg-white/5">Anmelden</a>
          <a href="#kontakt" className="h-10 px-5 rounded-full bg-white text-neutral-900 text-sm font-medium inline-flex items-center">Expose anfragen</a>
        </div>
      </div>
    </nav>
  );
}
