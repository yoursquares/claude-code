import Link from 'next/link';

export function ComingSoon({
  title,
  description,
  stop,
}: {
  title: string;
  description: string;
  stop: string;
}) {
  return (
    <main className="min-h-screen grid place-items-center px-6 pt-32 pb-20">
      <div className="max-w-xl text-center">
        <div className="text-xs uppercase tracking-widest font-mono text-lime mb-4">{stop}</div>
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tightest text-bone leading-[0.95]">
          {title}
          <span className="text-lime">.</span>
        </h1>
        <p className="mt-8 text-lg text-ink-300 balance">{description}</p>
        <div className="mt-10 flex justify-center gap-3">
          <Link
            href="/"
            className="h-11 px-5 rounded-full border border-white/15 text-bone hover:bg-white/5 inline-flex items-center transition"
          >
            ← Zurück zur Story
          </Link>
        </div>
      </div>
    </main>
  );
}
