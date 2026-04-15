'use client';

import { motion } from 'framer-motion';
import { project } from '@/lib/project';

export function Ausstattung() {
  const items = project.equipment;
  const e = project.energy;

  return (
    <section className="relative min-h-screen snap-section py-32 px-6 flex items-center">
      <div className="max-w-[1600px] mx-auto w-full">
        <div className="mb-12 max-w-3xl">
          <div className="text-xs uppercase tracking-widest text-lime font-mono mb-4">05 — Ausstattung</div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tightest text-bone balance leading-[0.95]">
            Detail für Detail<br />durchdacht.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-3">
          {items.map((item, i) => {
            const spans: Record<number, string> = {
              0: 'col-span-2 row-span-2',
              3: 'col-span-2',
              5: 'col-span-2',
            };
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 overflow-hidden group hover:border-lime/40 hover:bg-white/[0.06] transition ${spans[i] ?? ''}`}
              >
                <div className="font-mono text-xs text-ink-500">0{i + 1}</div>
                <div className={`mt-4 text-bone font-medium leading-snug ${i === 0 ? 'text-2xl md:text-3xl' : 'text-sm md:text-base'}`}>
                  {item}
                </div>
                <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full border border-white/10 grid place-items-center opacity-0 group-hover:opacity-100 transition">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-lime">
                    <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="font-mono text-xs text-ink-500 uppercase tracking-widest">Heizungsart</div>
            <div className="mt-2 text-xl text-bone">{e.heatingType}</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="font-mono text-xs text-ink-500 uppercase tracking-widest">Energieträger</div>
            <div className="mt-2 text-xl text-bone">{e.energySource}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
