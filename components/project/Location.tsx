import type { Project } from '@/lib/types';

const categoryIcon: Record<string, string> = {
  transit: 'U',
  food: 'F',
  school: 'S',
  leisure: 'P',
  shop: 'E',
  culture: 'K',
};

export function Location({ project }: { project: Project }) {
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${project.lng - 0.01},${project.lat - 0.005},${project.lng + 0.01},${project.lat + 0.005}&layer=mapnik&marker=${project.lat},${project.lng}`;
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4 space-y-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-neutral-400 mb-3">Lage</div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">{project.city}</h2>
            <p className="mt-3 text-neutral-300">
              {project.address.street}, {project.address.district}, {project.address.zip}
            </p>
          </div>

          <div className="space-y-2">
            {project.pois.map((poi, i) => (
              <div key={i} className="flex items-center gap-3 h-12 px-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-white/10 grid place-items-center text-xs font-semibold">
                  {categoryIcon[poi.category] ?? '•'}
                </div>
                <div className="flex-1 text-sm">{poi.label}</div>
                <div className="text-sm text-neutral-400">{poi.distance}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-8">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-white/5">
            <iframe
              src={mapSrc}
              className="w-full h-full"
              loading="lazy"
              title={`Karte ${project.name}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
