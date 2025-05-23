import { prisma } from '../../../../lib/prisma';
import { generateNote } from '../../../../lib/ai';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const id = req.nextUrl.pathname.split('/').pop();
  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
  try {
    const note = await prisma.sessionNote.findUnique({ where: { id } });
    if (!note) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(note);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  console.log('API PATCH /api/notes/:id called with path:', req.nextUrl.pathname);
  const id = req.nextUrl.pathname.split('/').pop();
  console.log('Extracted id for regeneration:', id);
  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
  try {
    console.log('Finding note with id:', id);
    const note = await prisma.sessionNote.findUnique({ where: { id } });
    console.log('Found note:', note);
    if (!note) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    console.log('Regenerating note for rawText:', note.rawText);
    const regenerated = await generateNote(note.rawText);
    console.log('Regenerated note:', regenerated);
    const updated = await prisma.sessionNote.update({
      where: { id },
      data: { generatedNote: regenerated },
    });
    console.log('Updated note in DB:', updated);
    return NextResponse.json(updated);
  } catch (err: any) {
    console.error('Error in PATCH /api/notes/:id:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
} 