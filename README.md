# LaVie — Click-Dummy MVP (Vertriebsplattform 2040)

Interaktiver Click-Dummy einer radikal neuen Neubau-Vertriebsplattform für das Projekt **LaVie** (München-Feldmoching-Hasenbergl, CONCEPT BAU GmbH).

## Quickstart

```bash
npm install
npm run dev
```

Öffnet `http://localhost:3000`.

## Aktueller Stand (Stop 1)

- Next.js 15 (App Router) + TypeScript
- Tailwind + Geist Sans/Mono
- Framer Motion (Mikrointeraktionen)
- Leaflet + React-Leaflet (Lage-Karte, Alternative zu Mapbox im MVP)
- Zustand, Lucide (für später vorbereitet)
- `data/project.json` als verbindliche Datenbasis

### Implementiert

- Fixed Pill-Nav mit allen Routes
- Route `/` — Snap-Scroll One-Pager:
  - **Hero** — Ken-Burns-Fallback (Video-URL in `data/project.json` einsetzbar), Type-on-Tagline, Live-Stats-Bar
  - **01 Das Quartier** — animierte Zähler (23 ha · 1.650 · 700 · 4)
  - **02 Die Lage** — Leaflet-Map mit pulsierendem Projekt-Marker und 7 POIs (3 Seen, 2x Bahn, Marienplatz, A99)
  - **03 Drei Seen** — Fasaneriesee / Feldmochinger / Lerchenauer mit Distanzen
  - **04 Architektur** — horizontaler Parallax-Scroll durch die Rendering-Galerie
  - **05 Ausstattung** — Bento-Grid mit allen 9 Equipment-Highlights + Energie-Block
  - **06 Der Bauträger** — CONCEPT BAU Stats (1982, 7.500+, 25 MA)
- Floating AI-FAB (Platzhalter für VIE-Assistent, kommt in Stop 5)
- Platzhalter-Routes: `/explore`, `/units`, `/financing`, `/booking`, `/webinar`

### Noch offen (Stops 2–5)

- [ ] **Stop 2** — 3D-Gebäude-Konfigurator (R3F) mit Bird's Eye / FPS / Cross-Section
- [ ] **Stop 3** — Wohneinheiten-Browser + Detail-Pages mit Grundriss-Hotspots + Vergleich
- [ ] **Stop 4** — Finanzierungs-Vergleich (5 Banken, Recharts) + Makler-Booking
- [ ] **Stop 5** — Webinar-Page + VIE AI-Chat (streaming, Fallback-Mock)
- [ ] Final-Pass: Animationen, A11y, Mobile

## Design-System

| Token | Wert |
|---|---|
| Background | `#0A0A0B` (Ink 950) |
| Accent | `#C5F23E` (Electric Lime) |
| Off-White | `#F4F1EA` (Bone) |
| Display | Geist Sans |
| Mono (Daten/Preise) | Geist Mono |

## Inhalte / Quellen

Alle Inhalte stammen aus `data/project.json`. Quellen für die Fakten:
- lavie-muenchen-feldmoching.de (Bauträger-Landingpage)
- immowelt.de/projekte/expose/k2ux832

Bilder sind Platzhalter von Unsplash (Architektur/Interior). Das Hero-Video kann per `media.heroVideoUrl` in `data/project.json` eingetragen werden (z.B. direkte mp4-URL aus Pexels); fehlt es, zeigt der Hero einen Ken-Burns-Animations-Fallback auf dem Poster-Bild.

## Tech

- **Stack**: Next.js 15, React 19, TypeScript, Tailwind 3, Framer Motion 12
- **Karte**: Leaflet mit OSM-Tiles (dark mode via CSS-Invert)
- **Fonts**: Geist Sans + Mono via `geist/font`
- **Hosting-ready**: Vercel, kein Build-Flag nötig

## Feedback-Loop

Mein Vorgehen (aus dem Prompt):
1. Stop 1 ✓ Setup + Design-Tokens + Hero + Story + Map
2. **Stop 2** → Freigabe nach Screenshot-Review durch dich, dann 3D-Konfigurator als Wow-Feature
3. Units-Browser + Detail + Compare
4. Financing + Booking
5. Webinar + VIE AI-Chat
6. Polish-Pass
