'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { project } from '@/lib/project';

export function Quartier() {
  const p = project.project;
  return (
    <section className="relative min-h-screen snap-section py-32 px-6 flex items-center">
      <div className="max-w-[1600px] mx-auto w-full">
        <div className="mb-16 max-w-3xl">
          <div className="text-xs uppercase tracking-widest text-lime font-mono mb-4">01 — Das Quartier</div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tightest text-bone balance leading-[0.95]">
            Ein ganzes Viertel,<br />neu gedacht.
          </h2>
          <p className="mt-8 text-lg md:text-xl text-ink-300 max-w-2xl leading-relaxed">
            {p.description}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/5">
          <Counter value={p.areaHectare} suffix=" ha" label="Gesamtfläche" />
          <Counter value={p.totalQuarter} label="Wohnungen im Viertel" />
          <Counter value={p.lavieTotal} label="unter LaVie" />
          <Counter value={4} label="Gebäude im 1. BA" detail={`${p.totalUnits} Einheiten`} />
        </div>
      </div>
    </section>
  );
}

function Counter({ value, label, suffix = '', detail }: { value: number; label: string; suffix?: string; detail?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-20%' });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    const from = 0;
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(from + (value - from) * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="bg-ink-950 p-8 md:p-10"
    >
      <div className="font-mono text-5xl md:text-6xl lg:text-7xl text-bone tracking-tight">
        {n.toLocaleString('de-DE')}
        <span className="text-lime">{suffix}</span>
      </div>
      <div className="mt-4 text-sm text-ink-300">{label}</div>
      {detail && <div className="mt-1 text-xs text-ink-400 font-mono">{detail}</div>}
    </motion.div>
  );
}
