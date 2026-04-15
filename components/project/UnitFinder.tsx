'use client';

import { useState, useMemo } from 'react';
import type { Project, Unit } from '@/lib/types';
import { formatPrice } from '@/lib/format';

export function UnitFinder({ project }: { project: Project }) {
  const [rooms, setRooms] = useState<number | 'all'>('all');
  const [sort, setSort] = useState<'price' | 'size' | 'rooms'>('price');

  const roomOptions = useMemo(() => {
    const set = new Set(project.units.map((u) => u.rooms));
    return Array.from(set).sort((a, b) => a - b);
  }, [project.units]);

  const filtered = useMemo(() => {
    const list = rooms === 'all' ? project.units : project.units.filter((u) => u.rooms === rooms);
    return [...list].sort((a, b) => {
      if (sort === 'price') return (a.price ?? Infinity) - (b.price ?? Infinity);
      if (sort === 'size') return a.sizeSqm - b.sizeSqm;
      return a.rooms - b.rooms;
    });
  }, [project.units, rooms, sort]);

  return (
    <section id="einheiten" className="relative py-32 px-6">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-10 flex flex-wrap items-end gap-6 justify-between">
          <div>
            <div className="text-xs uppercase tracking-widest text-neutral-400 mb-3">Einheiten</div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              {project.availableUnits} verfügbar von {project.totalUnits}
            </h2>
          </div>
          <div className="text-sm text-neutral-400">
            {filtered.length} {filtered.length === 1 ? 'Treffer' : 'Treffer'}
          </div>
        </div>

        {/* Filter bar */}
        <div className="mb-6 flex flex-wrap gap-2 glass bg-white/5 border border-white/10 rounded-2xl p-2">
          <FilterChip active={rooms === 'all'} onClick={() => setRooms('all')}>Alle Zimmer</FilterChip>
          {roomOptions.map((r) => (
            <FilterChip key={r} active={rooms === r} onClick={() => setRooms(r)}>
              {r} Zimmer
            </FilterChip>
          ))}
          <div className="flex-1" />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as 'price' | 'size' | 'rooms')}
            className="h-10 px-4 rounded-full bg-white/5 border border-white/10 text-sm appearance-none pr-9"
            style={{ backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"12\\" height=\\"12\\" viewBox=\\"0 0 12 12\\"><path fill=\\"white\\" d=\\"M6 9L1 4h10z\\"/></svg>")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
          >
            <option value="price">Preis aufsteigend</option>
            <option value="size">Fläche aufsteigend</option>
            <option value="rooms">Zimmer aufsteigend</option>
          </select>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Building selector (schematic) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 self-start">
            <BuildingSchematic units={project.units} activeRooms={rooms} />
          </div>

          <div className="lg:col-span-7 space-y-3">
            {filtered.map((u) => (
              <UnitRow key={u.id} unit={u} />
            ))}
            {filtered.length === 0 && (
              <div className="p-10 text-center text-neutral-400 rounded-2xl border border-white/10 bg-white/5">
                Keine Einheiten mit diesen Filtern. Filter zurücksetzen.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function FilterChip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`h-10 px-4 rounded-full text-sm border transition ${
        active ? 'bg-white text-neutral-900 border-white' : 'bg-transparent border-white/10 text-neutral-300 hover:bg-white/5'
      }`}
    >
      {children}
    </button>
  );
}

function UnitRow({ unit }: { unit: Unit }) {
  return (
    <div className="group glass bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-5 hover:border-white/20 transition">
      <div
        className="w-20 h-20 rounded-xl bg-cover bg-center border border-white/10 shrink-0"
        style={{ backgroundImage: `url(${unit.thumbnail})` }}
      />
      <div className="flex-1 min-w-0">
        <div className="text-lg font-semibold">
          {unit.price ? formatPrice(unit.price) : 'Preis auf Anfrage'} · {unit.rooms} Zimmer
        </div>
        <div className="text-sm text-neutral-400">
          {unit.sizeSqm} m² · {typeof unit.floor === 'number' ? `${unit.floor}. Geschoss` : unit.floor}
        </div>
        <div className="flex flex-wrap gap-1.5 pt-2">
          {unit.features.map((f) => (
            <span key={f} className="h-6 px-2.5 rounded-full bg-white/5 border border-white/10 text-xs inline-flex items-center">
              {f}
            </span>
          ))}
        </div>
      </div>
      <div className="hidden md:flex flex-col gap-2">
        <a href="#kontakt" className="h-9 px-4 rounded-full border border-white/15 text-sm inline-flex items-center hover:bg-white/5">
          Grundriss
        </a>
        <a href="#kontakt" className="h-9 px-4 rounded-full bg-white text-neutral-900 text-sm font-medium inline-flex items-center justify-center">
          Kontakt
        </a>
      </div>
    </div>
  );
}

function BuildingSchematic({ units, activeRooms }: { units: Unit[]; activeRooms: number | 'all' }) {
  // Simple schematic: group units by floor, draw a stacked building
  const byFloor = new Map<number, Unit[]>();
  for (const u of units) {
    const f = typeof u.floor === 'number' ? u.floor : 0;
    if (!byFloor.has(f)) byFloor.set(f, []);
    byFloor.get(f)!.push(u);
  }
  const floors = Array.from(byFloor.keys()).sort((a, b) => b - a);

  return (
    <div className="rounded-3xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-white/10 p-6">
      <div className="text-xs uppercase tracking-widest text-neutral-400 mb-4">Gebäudeübersicht</div>
      <div className="space-y-2">
        {floors.map((floor) => (
          <div key={floor} className="flex items-center gap-3">
            <div className="w-12 text-xs text-neutral-400 shrink-0">{floor}. OG</div>
            <div className="flex-1 flex gap-1.5">
              {byFloor.get(floor)!.map((u) => {
                const isActive = activeRooms === 'all' || u.rooms === activeRooms;
                return (
                  <div
                    key={u.id}
                    title={`${u.rooms} Zi · ${u.sizeSqm} m²`}
                    className={`h-10 flex-1 rounded-md border transition ${
                      isActive
                        ? 'bg-emerald-400/20 border-emerald-400/40'
                        : 'bg-white/5 border-white/10 opacity-30'
                    }`}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-4 text-xs text-neutral-400">
        <div className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-emerald-400/40 border border-emerald-400/60" /> passend</div>
        <div className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-white/10 border border-white/15" /> andere</div>
      </div>
    </div>
  );
}
