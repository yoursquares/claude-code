import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { Nav } from '@/components/shell/Nav';
import { AiFab } from '@/components/ai/AiFab';

export const metadata: Metadata = {
  title: 'LaVie · München-Feldmoching — Grün wohnen. Gemeinsam erleben.',
  description:
    'LaVie — 158 Eigentumswohnungen im visionären Quartier München-Feldmoching. Provisionsfrei vom Bauträger CONCEPT BAU.',
  openGraph: {
    title: 'LaVie · München-Feldmoching',
    description: 'Grün wohnen. Gemeinsam erleben. Zukunft gestalten.',
    locale: 'de_DE',
    type: 'website',
  },
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-ink-950 text-bone font-sans min-h-screen">
        <Nav />
        {children}
        <AiFab />
      </body>
    </html>
  );
}
