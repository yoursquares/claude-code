'use client';

import { motion } from 'framer-motion';
import { project } from '@/lib/project';

export function DreiSeen() {
  const seen = project.location.pois.filter((p) => p.type === 'lake');

  return (
    <section className="relative min-h-screen snap-section py-32 px-6 flex items-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          background:
            'radial-gradient(ellipse at 20% 30%, #6BC4E8 0%, transparent 40%), radial-gradient(ellipse at 70% 60%, #6BC4E8 0%, transparent 45%), radial-gradient(ellipse at 40% 80%, #6BC4E8 0%, transparent 35%)',
        }}
      />
      <div className="max-w-[1600px] mx-auto w-full relative">
        <div className="mb-16 max-w-3xl">
          <div className="text-xs uppercase tracking-widest text-lime font-mono mb-4">03 — Am Wasser</div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tightest text-bone balance leading-[0.95]">
            Drei Seen.<br />Ein Gedanke.
          </h2>
          <p className="mt-8 text-lg text-ink-300 max-w-2xl">
            Feldmoching ist ein Münchner Geheimnis: nirgendwo im Stadtgebiet liegen drei Badeseen so nah beieinander.
            Alle erreichst du mit dem Rad in weniger als zehn Minuten.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {seen.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-3xl border border-white/10 glass bg-white/[0.03] p-8 overflow-hidden hover:border-white/20 transition"
            >
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-sky-500/10 blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-sky-500/20 transition" />
              <div className="relative">
                <div className="font-mono text-xs text-ink-400 uppercase tracking-widest">Badesee</div>
                <h3 className="mt-2 text-3xl font-semibold tracking-tight">{s.name}</h3>
                <div className="mt-8 flex items-end justify-between">
                  <div>
                    <div className="font-mono text-6xl text-lime leading-none">{s.distanceMin}</div>
                    <div className="mt-1 text-xs font-mono uppercase tracking-widest text-ink-400">Min mit dem Rad</div>
                  </div>
                  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" className="text-ink-600 group-hover:text-lime transition">
                    <path d="M5 17.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM19 17.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM12 14.5 8 10.5l3-3h4l2 3M12 14.5V17M12 14.5l2 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
