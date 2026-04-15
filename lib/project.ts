import raw from '@/data/project.json';

export type UnitStatus = 'available' | 'reserved' | 'sold';

export type Unit = {
  id: string;
  price: number;
  rooms: number;
  sqm: number;
  floor: number;
  parking: boolean;
  status: UnitStatus;
  orientation: string;
};

export type Poi = {
  name: string;
  type: 'lake' | 'transit' | 'city' | 'highway';
  distanceMin: number;
  mode: 'walk' | 'bike' | 'transit' | 'car';
  lat: number;
  lng: number;
};

export type Broker = {
  name: string;
  role: string;
  languages: string[];
  phone: string;
  email: string;
};

export type Bank = {
  name: string;
  interestRate: number;
  tied: number;
};

export type Webinar = {
  date: string;
  title: string;
  speaker: string;
};

export type FaqItem = { q: string; a: string };

export type ProjectData = {
  project: {
    name: string;
    tagline: string;
    address: string;
    district: string;
    city: string;
    zip: string;
    coordinates: { lat: number; lng: number };
    developer: string;
    completion: string;
    totalUnits: number;
    availableUnits: number;
    totalQuarter: number;
    lavieTotal: number;
    areaHectare: number;
    rooms: string;
    sqmRange: string;
    priceFrom: number;
    commissionFree: boolean;
    description: string;
    buildingPhase: string;
  };
  media: {
    heroVideoUrl: string | null;
    heroVideoPosterUrl: string;
    pexelsSourceUrl: string;
    gallery: string[];
  };
  location: {
    highlights: string[];
    pois: Poi[];
  };
  equipment: string[];
  energy: { heatingType: string; energySource: string };
  outdoor: string;
  units: Unit[];
  banks: Bank[];
  broker: {
    primary: Broker;
    secondary: Broker;
    office: { address: string; hours: string };
  };
  developerInfo: {
    name: string;
    founded: number;
    headquarters: string;
    projectsRealized: number;
    employees: number;
    description: string;
  };
  webinars: Webinar[];
  faq: FaqItem[];
};

export const project = raw as ProjectData;

export function formatPrice(n: number): string {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(n);
}

export function formatPriceCompact(n: number): string {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
    notation: 'compact',
  }).format(n);
}
