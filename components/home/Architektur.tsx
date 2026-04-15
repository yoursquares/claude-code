'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { project } from '@/lib/project';

export function Architektur() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);
  const gallery = project.media.gallery;

  return (
    <section ref={ref} className="relative min-h-screen snap-section py-32 overflow-hidden flex flex-col justify-center">
      <div className="max-w-[1600px] mx-auto w-full px-6">
        <div className="mb-12 max-w-3xl">
          <div className="text-xs uppercase tracking-widest text-lime font-mono mb-4">04 — Architektur</div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tightest text-bone balance leading-[0.95]">
            Vier Gebäude,<br />ein begrünter Innenhof.
          </h2>
          <p className="mt-8 text-lg text-ink-300 max-w-2xl">{project.outdoor}</p>
        </div>
      </div>

      <motion.div style={{ x }} className="flex gap-6 pl-6 will-change-transform">
        {[...gallery, ...gallery].map((src, i) => (
          <div
            key={i}
            className="relative shrink-0 w-[min(80vw,720px)] aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-cover bg-center"
            style={{ backgroundImage: `url(${src})` }}
          >
            <div className="absolute bottom-4 left-4 font-mono text-xs text-bone/80 glass bg-black/40 px-3 py-1.5 rounded-full">
              {String((i % gallery.length) + 1).padStart(2, '0')} / {String(gallery.length).padStart(2, '0')}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
