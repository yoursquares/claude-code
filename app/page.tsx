import { Hero } from '@/components/home/Hero';
import { Quartier } from '@/components/home/Quartier';
import { LageMap } from '@/components/home/LageMap';
import { DreiSeen } from '@/components/home/DreiSeen';
import { Architektur } from '@/components/home/Architektur';
import { Ausstattung } from '@/components/home/Ausstattung';
import { Bautraeger } from '@/components/home/Bautraeger';

export default function HomePage() {
  return (
    <main className="relative">
      <Hero />
      <Quartier />
      <LageMap />
      <DreiSeen />
      <Architektur />
      <Ausstattung />
      <Bautraeger />
    </main>
  );
}
