import type { Project } from '@/lib/types';
import { formatPrice } from '@/lib/format';

export function Hero({ project }: { project: Project }) {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${project.heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-neutral-950/60" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 pt-32 pb-10 grid lg:grid-cols-12 gap-10 min-h-screen items-end">
        <div className="lg:col-span-8 space-y-6 fade-up">
          <div className="flex flex-wrap gap-2">
            {project.commissionFree && (
              <span className="h-8 px-3 rounded-full glass bg-white/10 border border-white/15 text-xs inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> provisionsfrei
              </span>
            )}
            <span className="h-8 px-3 rounded-full glass bg-white/10 border border-white/15 text-xs inline-flex items-center">
              Bezug {project.readyFrom}
            </span>
            <span className="h-8 px-3 rounded-full glass bg-white/10 border border-white/15 text-xs inline-flex items-center">
              {project.availableUnits} von {project.totalUnits} Einheiten verfügbar
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[88px] font-semibold leading-[0.95] tracking-tight">
            {project.name}
          </h1>
          <p className="text-xl text-neutral-200 max-w-2xl">{project.tagline}</p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a href="#einheiten" className="h-12 px-6 rounded-full bg-white text-neutral-900 font-medium inline-flex items-center">
              Einheiten entdecken
            </a>
            <a href="#kontakt" className="h-12 px-6 rounded-full border border-white/20 glass bg-white/5 inline-flex items-center">
              Expose anfragen
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10 glass bg-neutral-950/50">
        <div className="max-w-[1600px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
          <Fact label="Standort" value={project.city} sub={project.address.district ?? project.address.zip} />
          <Fact label="Zimmer" value={`${project.roomsMin}–${project.roomsMax}`} sub="Zimmer" />
          <Fact label="Fläche" value={`${project.sizeSqmMin}–${project.sizeSqmMax}`} sub="m²" />
          <Fact
            label="ab"
            value={project.priceFrom ? formatPrice(project.priceFrom) : 'auf Anfrage'}
            sub={project.priceFrom ? 'Kaufpreis' : ''}
          />
        </div>
      </div>
    </section>
  );
}

function Fact({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="p-6">
      <div className="text-xs uppercase tracking-widest text-neutral-400">{label}</div>
      <div className="mt-2 text-2xl md:text-3xl font-semibold">{value}</div>
      {sub && <div className="text-sm text-neutral-400 mt-1">{sub}</div>}
    </div>
  );
}
