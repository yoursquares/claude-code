import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { listProjects } from '@/lib/data';

export default function Home() {
  const projects = listProjects();

  return (
    <>
      <Nav />

      <section className="relative min-h-[85vh] overflow-hidden pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.07),transparent_60%)]" />
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3 h-8 rounded-full border border-white/15 glass bg-white/5 text-xs mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Neubauprojekte in DACH · provisionsfrei
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold leading-[0.95] tracking-tight max-w-4xl">
            Neubauprojekte,<br />die man nicht scrollt,<br />sondern erlebt.
          </h1>
          <p className="mt-6 text-lg text-neutral-300 max-w-xl">
            yoursquares bringt jedes Projekt in eine Experience, die Käufer und Bauträger direkt miteinander verbindet — transparent, immersiv, ohne Umwege.
          </p>
        </div>
      </section>

      <section className="relative py-16 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Aktuelle Projekte</h2>
            <span className="text-sm text-neutral-400">{projects.length} Projekte</span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <Link
                key={p.slug}
                href={`/projekte/${p.slug}`}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 hover:border-white/20 transition"
              >
                <div
                  className="aspect-[16/10] bg-cover bg-center transition duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${p.heroImage})` }}
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {p.commissionFree && (
                    <span className="h-7 px-3 rounded-full bg-black/50 glass border border-white/10 text-xs inline-flex items-center">provisionsfrei</span>
                  )}
                  <span className="h-7 px-3 rounded-full bg-black/50 glass border border-white/10 text-xs inline-flex items-center">
                    {p.availableUnits} von {p.totalUnits} Einheiten
                  </span>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-widest text-neutral-400 mb-2">{p.city} · Bezug {p.readyFrom}</div>
                  <h3 className="text-2xl font-semibold tracking-tight">{p.name}</h3>
                  <p className="mt-2 text-sm text-neutral-300">{p.tagline}</p>
                  <div className="mt-5 flex items-center justify-between text-sm">
                    <span className="text-neutral-400">{p.roomsMin}–{p.roomsMax} Zi · {p.sizeSqmMin}–{p.sizeSqmMax} m²</span>
                    <span className="font-medium">{p.priceFrom ? `ab ${formatPrice(p.priceFrom)}` : 'Preis auf Anfrage'}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 mt-20 py-10 px-6 text-sm text-neutral-400">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-4 justify-between">
          <span>© {new Date().getFullYear()} yoursquares</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Impressum</a>
            <a href="#" className="hover:text-white">Datenschutz</a>
            <a href="#" className="hover:text-white">Für Bauträger</a>
          </div>
        </div>
      </footer>
    </>
  );
}

function formatPrice(n: number) {
  return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n);
}
