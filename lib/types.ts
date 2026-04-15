export type Address = {
  street: string;
  district?: string;
  city: string;
  zip: string;
  country: 'DE' | 'AT' | 'CH';
};

export type Poi = {
  label: string;
  category: 'transit' | 'food' | 'school' | 'leisure' | 'shop' | 'culture';
  distance: string; // e.g. "450 m" or "5 min zu Fuß"
};

export type UnitStatus = 'available' | 'reserved' | 'sold';

export type Unit = {
  id: string;
  price: number | null; // null = Preis auf Anfrage
  rooms: number;
  sizeSqm: number;
  floor: number | string;
  features: string[]; // Stellplatz, Balkon, Barrierefrei, ...
  status: UnitStatus;
  thumbnail: string;
};

export type Developer = {
  name: string;
  logo?: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  city: string;
  address: Address;
  lat: number;
  lng: number;
  readyFrom: string; // "Juni 2026" | "Q3 2028"
  commissionFree: boolean;
  roomsMin: number;
  roomsMax: number;
  sizeSqmMin: number;
  sizeSqmMax: number;
  priceFrom: number | null;
  totalUnits: number;
  availableUnits: number;
  heroImage: string;
  gallery: string[];
  description: string[];
  highlights: string[];
  features: { icon: string; label: string }[];
  energy: {
    heating: string;
    sources: string[];
    efficiencyClass?: string;
  };
  pois: Poi[];
  units: Unit[];
  developer: Developer;
};

export type LeadPayload = {
  projectSlug: string;
  unitId?: string;
  salutation?: 'herr' | 'frau' | 'divers';
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message?: string;
  requestFloorPlan?: boolean;
};
