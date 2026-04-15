'use client';

import { MapContainer, TileLayer, Marker, Popup, CircleMarker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { Poi } from '@/lib/project';

const projectIcon = L.divIcon({
  className: '',
  html: `<div class="pulse-dot"></div>`,
  iconSize: [16, 16],
  iconAnchor: [8, 8],
});

const poiIcon = (type: Poi['type']) => {
  const map: Record<Poi['type'], string> = {
    lake: '#6BC4E8',
    transit: '#C5F23E',
    city: '#F4F1EA',
    highway: '#F59E0B',
  };
  const color = map[type];
  return L.divIcon({
    className: '',
    html: `<div style="width:10px;height:10px;border-radius:50%;background:${color};box-shadow:0 0 0 3px rgba(10,10,11,0.9);"></div>`,
    iconSize: [10, 10],
    iconAnchor: [5, 5],
  });
};

const modeLabel: Record<Poi['mode'], string> = {
  walk: 'zu Fuß',
  bike: 'mit dem Rad',
  car: 'mit dem Auto',
  transit: 'mit ÖPNV',
};

export function MapCanvas({
  center,
  pois,
}: {
  center: { lat: number; lng: number };
  pois: Poi[];
}) {
  return (
    <MapContainer
      center={[center.lat, center.lng]}
      zoom={12}
      scrollWheelZoom={false}
      className="w-full h-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[center.lat, center.lng]} icon={projectIcon}>
        <Popup>
          <div className="font-sans">
            <div className="font-semibold text-sm">LaVie</div>
            <div className="text-xs opacity-70">Hier entsteht das Quartier.</div>
          </div>
        </Popup>
      </Marker>
      {pois.map((poi, i) => (
        <Marker key={i} position={[poi.lat, poi.lng]} icon={poiIcon(poi.type)}>
          <Popup>
            <div className="font-sans">
              <div className="font-semibold text-sm">{poi.name}</div>
              <div className="text-xs opacity-70">
                {poi.distanceMin} Min {modeLabel[poi.mode]}
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
      <CircleMarker
        center={[center.lat, center.lng]}
        radius={80}
        pathOptions={{ color: '#C5F23E', fillColor: '#C5F23E', fillOpacity: 0.05, weight: 1 }}
      />
    </MapContainer>
  );
}
