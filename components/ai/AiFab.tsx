'use client';

// Placeholder FAB for the AI assistant. Full panel follows in a later stop.
export function AiFab() {
  return (
    <button
      aria-label="KI-Assistent VIE öffnen"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-lime text-ink-950 shadow-[0_10px_40px_-12px_rgba(197,242,62,0.6)] grid place-items-center hover:scale-105 transition group"
    >
      <span className="absolute inset-0 rounded-full bg-lime/30 animate-pulse-soft" />
      <span className="relative font-mono font-semibold text-sm">VIE</span>
    </button>
  );
}
