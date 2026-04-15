import type { Project } from '@/lib/types';

export function Highlights({ project }: { project: Project }) {
  return (
    <section className="relative py-32 px-6 bg-neutral-900/40">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-12">
          <div className="text-xs uppercase tracking-widest text-neutral-400 mb-3">Ausstattung</div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Freiraum auf allen Ebenen</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {project.highlights.map((h, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-8 h-8 rounded-lg bg-white/10 grid place-items-center mb-4 text-sm">
                {String(i + 1).padStart(2, '0')}
              </div>
              <p className="text-sm text-neutral-200 leading-relaxed">{h}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-6 gap-3">
          {project.features.map((f, i) => (
            <div key={i} className="h-24 rounded-2xl bg-white/5 border border-white/10 grid place-items-center text-center p-3">
              <div className="text-sm text-neutral-200">{f.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
