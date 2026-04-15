# yoursquares

Immersive Plattform für Neubauprojekte in DACH. Käufer finden Projekte in einer erlebbaren Listing-Experience, Bauträger vermarkten ihre Einheiten provisionsfrei und erhalten qualifizierte Leads direkt in die Inbox.

## Stack

- **Next.js 15** (App Router, React Server Components)
- **TypeScript**
- **Tailwind CSS 3**
- **Vercel** (Deploy + Edge)
- OpenStreetMap Embed für Kartenansicht (MVP, später Mapbox)

## Struktur

```
app/
  layout.tsx                 # Root layout (Dark theme)
  page.tsx                   # Homepage mit Projektübersicht
  projekte/[slug]/page.tsx   # Immersive Listing-Page
  api/leads/route.ts         # Lead-Capture-Endpoint
components/
  Nav.tsx
  project/
    Hero.tsx                 # Fullscreen-Hero mit Key-Facts
    Story.tsx                # Projektbeschreibung mit Galerie
    UnitFinder.tsx           # Filter + Gebäude-Schematik + Unit-Liste (Client)
    Highlights.tsx           # Ausstattungs-Bento
    EnergyPrice.tsx          # Energie & Preisdetails
    Location.tsx             # POIs + eingebettete Karte
    LeadForm.tsx             # Kontaktformular (Client)
lib/
  types.ts                   # Project / Unit / Lead Typen
  data.ts                    # Seed-Daten (LaVie München, Eltville)
  format.ts                  # €- und m²-Formatierung
```

## Dev

```bash
npm install
npm run dev
```

Öffnet `http://localhost:3000`. Projektseiten unter:
- `/projekte/lavie-muenchen`
- `/projekte/woerthstrasse-eltville`

## Deploy

Direkt auf Vercel importieren — keine Env-Variablen nötig für das MVP. Leads werden in den Server-Logs ausgegeben.

## Roadmap

**Phase 1 — jetzt live:**
- [x] Immersive Listing-Page
- [x] Unit-Finder mit Filter
- [x] Lead-Capture

**Phase 2 — nächste Iteration:**
- [ ] Supabase (Postgres + Storage + Auth)
- [ ] Developer-Portal (Projekt-CRUD, Lead-Inbox)
- [ ] Mapbox mit benutzerdefiniertem Styling
- [ ] Fahrzeitberechnung (Google Distance Matrix)
- [ ] Resend für Lead-E-Mails an Bauträger
- [ ] yoursquares-DB-Sync: 1-Klick-Deploy bestehender Projekte

**Phase 3:**
- [ ] SaaS-Billing für Bauträger (Stripe, Pakete nach Lead-Volumen)
- [ ] 3D-Konfigurator (React Three Fiber)
- [ ] Virtual Tour Integration (Matterport Embed)
- [ ] KI-Beratungs-Assistent
