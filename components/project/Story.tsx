import type { Project } from '@/lib/types';

export function Story({ project }: { project: Project }) {
  return (
    <section className="relative py-32 px-6 bg-neutral-900/40">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5 lg:sticky lg:top-24 self-start">
          <div className="text-xs uppercase tracking-widest text-neutral-400 mb-3">Über das Projekt</div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            {project.tagline}
          </h2>
          <div className="mt-6 text-sm text-neutral-400">
            Bauträger: <span className="text-neutral-200">{project.developer.name}</span>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6 text-lg text-neutral-200 leading-relaxed">
          {project.description.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-8">
            {project.gallery.slice(0, 6).map((src, i) => (
              <div
                key={i}
                className="aspect-square rounded-2xl bg-cover bg-center border border-white/10"
                style={{ backgroundImage: `url(${src})` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
