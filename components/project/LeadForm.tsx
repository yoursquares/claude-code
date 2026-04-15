'use client';

import { useState } from 'react';
import type { Project } from '@/lib/types';

export function LeadForm({ project }: { project: Project }) {
  const [state, setState] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('loading');
    setErrorMessage(null);
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, projectSlug: project.slug }),
      });
      if (!res.ok) throw new Error(await res.text());
      setState('done');
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'Unbekannter Fehler');
      setState('error');
    }
  }

  return (
    <section id="kontakt" className="relative py-32 px-6">
      <div className="max-w-[1400px] mx-auto rounded-[2.5rem] bg-gradient-to-br from-neutral-800 to-neutral-900 border border-white/10 p-8 md:p-16 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-6 space-y-6">
          <div className="text-xs uppercase tracking-widest text-neutral-400">Expose anfragen</div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            Direkt vom Bauträger.<br />Ohne Umwege.
          </h2>
          <p className="text-neutral-300 max-w-md">
            Wir schicken dir innerhalb von 24 Stunden das vollständige Exposé, alle Grundrisse und eine persönliche Beratung zum Projekt <span className="text-white">{project.name}</span>.
          </p>
          <div className="flex items-center gap-4 pt-4">
            <div className="w-14 h-14 rounded-full bg-white/10 grid place-items-center font-semibold">
              {project.developer.name.charAt(0)}
            </div>
            <div>
              <div className="font-medium">{project.developer.name}</div>
              <div className="text-sm text-neutral-400">Bauträger · DACH</div>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-6 glass bg-black/30 border border-white/10 rounded-3xl p-6 md:p-8 space-y-4">
          <div className="grid grid-cols-3 gap-2">
            {(['herr', 'frau', 'divers'] as const).map((s) => (
              <label key={s} className="h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-2 cursor-pointer has-[:checked]:bg-white has-[:checked]:text-neutral-900 text-sm capitalize">
                <input type="radio" name="salutation" value={s} className="hidden" defaultChecked={s === 'herr'} />
                {s === 'divers' ? 'Divers' : s === 'herr' ? 'Herr' : 'Frau'}
              </label>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Input name="firstName" placeholder="Vorname" required />
            <Input name="lastName" placeholder="Nachname" required />
          </div>
          <Input name="email" type="email" placeholder="E-Mail" required />
          <Input name="phone" type="tel" placeholder="Telefon (optional)" />
          <textarea
            name="message"
            rows={4}
            placeholder="Nachricht (optional)"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm placeholder:text-neutral-500 focus:outline-none focus:border-white/30"
          />

          <label className="flex items-start gap-3 text-xs text-neutral-400">
            <input type="checkbox" name="consent" required className="mt-0.5" />
            <span>
              Ich stimme zu, dass meine Angaben zur Kontaktaufnahme verwendet werden. Weitere Infos in der{' '}
              <a href="#" className="underline">Datenschutzerklärung</a>.
            </span>
          </label>

          <button
            type="submit"
            disabled={state === 'loading'}
            className="h-12 w-full rounded-xl bg-white text-neutral-900 font-medium disabled:opacity-60"
          >
            {state === 'loading' ? 'Sende…' : state === 'done' ? 'Gesendet ✓' : 'Expose anfragen'}
          </button>
          {state === 'error' && (
            <p className="text-sm text-red-400">Senden fehlgeschlagen. {errorMessage}</p>
          )}
          {state === 'done' && (
            <p className="text-sm text-emerald-400">Danke! Wir melden uns innerhalb von 24 Stunden.</p>
          )}
        </form>
      </div>
    </section>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full h-11 px-4 rounded-xl bg-white/5 border border-white/10 text-sm placeholder:text-neutral-500 focus:outline-none focus:border-white/30"
    />
  );
}
