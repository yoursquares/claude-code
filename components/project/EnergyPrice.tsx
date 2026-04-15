import type { Project } from '@/lib/types';
import { formatPrice } from '@/lib/format';

export function EnergyPrice({ project }: { project: Project }) {
  return (
    <section className="relative py-24 px-6 bg-neutral-900/40">
      <div className="max-w-[1600px] mx-auto grid md:grid-cols-2 gap-6">
        <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
          <div className="text-xs uppercase tracking-widest text-neutral-400 mb-4">Bausubstanz & Energie</div>
          <dl className="space-y-4">
            <div>
              <dt className="text-sm text-neutral-400">Heizungsart</dt>
              <dd className="text-xl font-medium">{project.energy.heating}</dd>
            </div>
            <div>
              <dt className="text-sm text-neutral-400">Energieträger</dt>
              <dd className="text-xl font-medium">{project.energy.sources.join(', ')}</dd>
            </div>
            {project.energy.efficiencyClass && (
              <div>
                <dt className="text-sm text-neutral-400">Effizienzklasse</dt>
                <dd className="text-xl font-medium">{project.energy.efficiencyClass}</dd>
              </div>
            )}
          </dl>
        </div>

        <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
          <div className="text-xs uppercase tracking-widest text-neutral-400 mb-4">Preisdetails</div>
          <div className="text-3xl font-semibold">
            {project.priceFrom ? `ab ${formatPrice(project.priceFrom)}` : 'Preis auf Anfrage'}
          </div>
          <p className="mt-3 text-sm text-neutral-400">
            {project.commissionFree
              ? 'Provisionsfrei direkt vom Bauträger. Einzelpreise je Einheit auf Anfrage.'
              : 'Maklerprovision gemäß Exposé.'}
          </p>
          <a
            href="#kontakt"
            className="mt-6 h-11 px-5 rounded-full bg-white text-neutral-900 text-sm font-medium inline-flex items-center"
          >
            Alle Preise anfragen
          </a>
        </div>
      </div>
    </section>
  );
}
