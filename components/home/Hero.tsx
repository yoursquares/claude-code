'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { project, formatPrice } from '@/lib/project';

const taglineParts = [
  'Grün wohnen.',
  'Gemeinsam erleben.',
  'Zukunft gestalten.',
];

export function Hero() {
  const p = project.project;
  const m = project.media;
  const [step, setStep] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s < taglineParts.length ? s + 1 : s)), 700);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden snap-section noise">
      {/* Background: video if configured, else Ken Burns image */}
      <div className="absolute inset-0">
        {m.heroVideoUrl ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={m.heroVideoPosterUrl}
            className="w-full h-full object-cover"
          >
            <source src={m.heroVideoUrl} type="video/mp4" />
          </video>
        ) : (
          <div
            className="w-full h-full bg-cover bg-center kenburns"
            style={{ backgroundImage: `url(${m.heroVideoPosterUrl})` }}
          />
        )}
      </div>

      {/* Gradient curtains */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/30 via-transparent to-ink-950" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/70 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-[1600px] mx-auto px-6 flex flex-col justify-end pb-36">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2 mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-lime opacity-70 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-lime" />
          </span>
          <span className="text-xs font-mono tracking-widest uppercase text-ink-300">
            {p.district} · {p.city}
          </span>
        </motion.div>

        <h1 className="font-semibold tracking-tightest leading-[0.88] text-[16vw] md:text-[13vw] lg:text-[200px] text-bone">
          {p.name}
          <span className="text-lime">.</span>
        </h1>

        <div className="mt-8 space-y-1 text-xl md:text-3xl lg:text-4xl text-bone/90 tracking-tight font-medium">
          {taglineParts.map((t, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: step > i ? 1 : 0, y: step > i ? 0 : 12 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {t}
              {i === step - 1 && <span className="inline-block w-[0.6em] h-[0.9em] -mb-1 ml-1 bg-lime animate-blink" />}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Live stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.8 }}
        className="absolute bottom-0 inset-x-0 z-10 border-t border-white/10 glass-strong bg-ink-950/70"
      >
        <div className="max-w-[1600px] mx-auto px-6 grid grid-cols-3 md:grid-cols-6 divide-x divide-white/10 font-mono">
          <Stat label="Einheiten" value={String(p.totalUnits)} />
          <Stat label="verfügbar" value={String(p.availableUnits)} pulse />
          <Stat label="ab" value={formatPrice(p.priceFrom)} />
          <Stat label="Fläche" value={p.sqmRange} />
          <Stat label="Bezug" value={p.completion} />
          <Stat label="Provision" value="0 %" accent />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.4 }}
        className="absolute top-1/2 right-6 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3 text-xs text-ink-400 font-mono tracking-widest uppercase"
      >
        <span className="rotate-90 origin-center whitespace-nowrap mt-16">scroll</span>
        <span className="w-px h-20 bg-gradient-to-b from-ink-400 to-transparent" />
      </motion.div>
    </section>
  );
}

function Stat({ label, value, pulse, accent }: { label: string; value: string; pulse?: boolean; accent?: boolean }) {
  return (
    <div className="px-4 md:px-6 py-5 md:py-6">
      <div className="text-[10px] md:text-xs uppercase tracking-widest text-ink-400 flex items-center gap-1.5">
        {pulse && <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse-soft" />}
        {label}
      </div>
      <div className={`mt-1.5 text-lg md:text-2xl ${accent ? 'text-lime' : 'text-bone'}`}>{value}</div>
    </div>
  );
}
