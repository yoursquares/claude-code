import { NextResponse } from 'next/server';
import { getProjectBySlug } from '@/lib/data';
import type { LeadPayload } from '@/lib/types';

export async function POST(req: Request) {
  let body: Partial<LeadPayload>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { projectSlug, firstName, lastName, email } = body;

  if (!projectSlug || !firstName || !lastName || !email) {
    return NextResponse.json(
      { error: 'Pflichtfelder fehlen: projectSlug, firstName, lastName, email' },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'E-Mail ungültig' }, { status: 400 });
  }

  const project = getProjectBySlug(projectSlug);
  if (!project) {
    return NextResponse.json({ error: 'Projekt nicht gefunden' }, { status: 404 });
  }

  const lead = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    project: { slug: project.slug, name: project.name, developer: project.developer.name },
    ...body,
  };

  // TODO: persist in Supabase + forward to developer via Resend.
  // For MVP: log to stdout so we can verify in Vercel logs.
  console.log('[lead]', JSON.stringify(lead));

  return NextResponse.json({ ok: true, id: lead.id });
}
