import { prisma } from '../../../lib/prisma';
import { NoteInput } from '../../../lib/schemas';
import { generateNote } from '../../../lib/ai';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  console.log('API POST /api/notes called');
  try {
    console.log('Reading request JSON');
    const body = await req.json();
    console.log('Parsed request body:', body);
    const input = NoteInput.parse(body);
    console.log('Validated input:', input);
    const generated = await generateNote(input.rawText);
    console.log('Generated note:', generated);
    const note = await prisma.sessionNote.create({
      data: { rawText: input.rawText, generatedNote: generated },
    });
    console.log('Created note in DB with id:', note.id);
    return NextResponse.json(note, { status: 201 });
  } catch (err: any) {
    console.error('Error in POST /api/notes:', err);
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}

export async function GET() {
  try {
    const notes = await prisma.sessionNote.findMany({ orderBy: { createdAt: 'desc' } });
    return NextResponse.json(notes);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
} 