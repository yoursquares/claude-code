import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'yoursquares — Neubauprojekte neu erlebt',
  description:
    'Immersive Neubauprojekte entdecken. Wohnungen, Ausstattung und Lage in einer einzigen Experience.',
  openGraph: {
    title: 'yoursquares',
    description: 'Neubauprojekte in DACH — immersiv, transparent, provisionsfrei.',
    type: 'website',
    locale: 'de_DE',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="bg-neutral-950 text-neutral-100">{children}</body>
    </html>
  );
}
