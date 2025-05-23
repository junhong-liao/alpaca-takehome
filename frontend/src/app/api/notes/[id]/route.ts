import { prisma } from '../../../../lib/prisma';
import { generateNote, DEFAULT_PROMPT } from '../../../../lib/ai';
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
    // Parse optional body
    let body: any = {};
    try { body = await req.json(); } catch {}
    // If updating generated note directly
    if (body.generatedNote !== undefined) {
      const updatedContent = await prisma.sessionNote.update({
        where: { id },
        data: { generatedNote: body.generatedNote },
      });
      return NextResponse.json(updatedContent);
    }
    // If updating title only
    if (body.title) {
      const updatedTitle = await prisma.sessionNote.update({
        where: { id },
        data: { title: body.title },
      });
      return NextResponse.json(updatedTitle);
    }
    // Otherwise handle regeneration
    console.log('Finding note with id:', id);
    const note = await prisma.sessionNote.findUnique({ where: { id } });
    console.log('Found note:', note);
    if (!note) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    console.log('Regenerating note for rawText:', note.rawText);
    const promptTemplate = body.prompt || DEFAULT_PROMPT;
    const regenerated = await generateNote(note.rawText, promptTemplate);
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