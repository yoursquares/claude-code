'use client';

import dynamic from 'next/dynamic';
import { project } from '@/lib/project';

const MapCanvas = dynamic(() => import('./MapCanvas').then((m) => m.MapCanvas), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full grid place-items-center bg-ink-900 text-ink-400 text-sm font-mono">
      Karte wird geladen…
    </div>
  ),
});

export function LageMap() {
  const p = project.project;
  const pois = project.location.pois;
  const highlights = project.location.highlights;

  return (
    <section className="relative min-h-screen snap-section py-32 px-6 flex items-center">
      <div className="max-w-[1600px] mx-auto w-full">
        <div className="mb-12 max-w-3xl">
          <div className="text-xs uppercase tracking-widest text-lime font-mono mb-4">02 — Die Lage</div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tightest text-bone balance leading-[0.95]">
            Feldmoching.<br />Nah an allem.
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 relative aspect-[4/3] lg:aspect-auto lg:h-[640px] rounded-3xl overflow-hidden border border-white/10">
            <MapCanvas center={p.coordinates} pois={pois} />
          </div>
          <div className="lg:col-span-4 space-y-3">
            <div className="glass bg-white/[0.03] border border-white/10 rounded-2xl p-5">
              <div className="font-mono text-xs text-ink-400 uppercase tracking-widest mb-3">Highlights</div>
              <ul className="space-y-2.5 text-sm text-bone">
                {highlights.map((h, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 w-1 h-1 rounded-full bg-lime shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass bg-white/[0.03] border border-white/10 rounded-2xl p-5">
              <div className="font-mono text-xs text-ink-400 uppercase tracking-widest mb-3">Koordinaten</div>
              <div className="font-mono text-sm text-bone">
                {p.coordinates.lat.toFixed(6)}, {p.coordinates.lng.toFixed(6)}
              </div>
              <div className="mt-1 text-xs text-ink-400">
                {p.address}, {p.zip} {p.city}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
