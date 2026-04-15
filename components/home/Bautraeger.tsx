'use client';

import { motion } from 'framer-motion';
import { project } from '@/lib/project';

export function Bautraeger() {
  const d = project.developerInfo;
  return (
    <section className="relative min-h-screen snap-section py-32 px-6 flex items-center">
      <div className="max-w-[1600px] mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <div className="text-xs uppercase tracking-widest text-lime font-mono mb-4">06 — Der Bauträger</div>
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tightest text-bone balance leading-[0.95]">
            {d.name.replace(' GmbH', '')}
            <span className="text-lime">.</span>
          </h2>
          <p className="mt-8 text-lg text-ink-300 max-w-xl leading-relaxed">{d.description}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="/booking"
              className="h-12 px-6 rounded-full bg-lime text-ink-950 font-medium inline-flex items-center hover:bg-lime-400 transition"
            >
              Persönliche Beratung
            </a>
            <a
              href="/units"
              className="h-12 px-6 rounded-full border border-white/15 text-bone hover:bg-white/5 inline-flex items-center transition"
            >
              Wohnungen ansehen
            </a>
          </div>
        </div>

        <div className="lg:col-span-6 grid grid-cols-2 gap-3">
          <DevStat value={String(d.founded)} label="Gegründet" />
          <DevStat value={`${(d.projectsRealized).toLocaleString('de-DE')}+`} label="Realisierte Wohnungen" />
          <DevStat value={String(d.employees)} label="Mitarbeiter" />
          <DevStat value="DE" label="Sitz" detail={d.headquarters} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="col-span-2 rounded-2xl border border-white/10 bg-gradient-to-br from-lime/10 to-transparent p-6"
          >
            <div className="font-mono text-xs text-ink-400 uppercase tracking-widest">Seit {d.founded}</div>
            <div className="mt-3 text-lg text-bone leading-snug">
              Vom Grundstücksankauf über Projektentwicklung und Bauausführung bis zur schlüsselfertigen Immobilie — alles aus einer Hand.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DevStat({ value, label, detail }: { value: string; label: string; detail?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
    >
      <div className="font-mono text-4xl md:text-5xl text-bone">{value}</div>
      <div className="mt-2 text-xs font-mono uppercase tracking-widest text-ink-400">{label}</div>
      {detail && <div className="mt-1 text-xs text-ink-500">{detail}</div>}
    </motion.div>
  );
}
