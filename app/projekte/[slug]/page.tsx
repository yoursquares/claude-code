import { notFound } from 'next/navigation';
import { Nav } from '@/components/Nav';
import { Hero } from '@/components/project/Hero';
import { Story } from '@/components/project/Story';
import { UnitFinder } from '@/components/project/UnitFinder';
import { Highlights } from '@/components/project/Highlights';
import { Location } from '@/components/project/Location';
import { EnergyPrice } from '@/components/project/EnergyPrice';
import { LeadForm } from '@/components/project/LeadForm';
import { getProjectBySlug, listProjects } from '@/lib/data';

export function generateStaticParams() {
  return listProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.name} · ${project.city} — yoursquares`,
    description: project.tagline,
    openGraph: {
      title: project.name,
      description: project.tagline,
      images: [project.heroImage],
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <Nav />
      <Hero project={project} />
      <Story project={project} />
      <UnitFinder project={project} />
      <Highlights project={project} />
      <EnergyPrice project={project} />
      <Location project={project} />
      <LeadForm project={project} />

      <footer className="border-t border-white/5 py-10 px-6 text-sm text-neutral-400">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row gap-4 justify-between">
          <span>© {new Date().getFullYear()} yoursquares</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Impressum</a>
            <a href="#" className="hover:text-white">Datenschutz</a>
            <a href="#" className="hover:text-white">AGB</a>
          </div>
        </div>
      </footer>
    </>
  );
}
