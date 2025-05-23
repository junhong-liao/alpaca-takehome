import { prisma } from '../../../../lib/prisma';
import { generateNote } from '../../../../lib/ai';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const GenerateNotesSchema = z.object({
  count: z.number().int().min(1).max(50),
  sampleTexts: z.array(z.string()).optional(),
});

const DEFAULT_SAMPLES = [
  "- Client engaged in social skills training\n- Practiced eye contact during conversation\n- Completed 3 conversation exercises\n- Struggled with turn-taking\n- Will continue working on active listening",
  "- Client worked on emotional regulation\n- Identified 5 triggers for anxiety\n- Practiced deep breathing techniques\n- Completed emotion wheel exercise\n- Responded well to positive reinforcement",
  "- Client practiced fine motor skills\n- Completed writing exercise for 15 minutes\n- Struggled with sustained attention\n- Responded to prompting\n- Needs continued work on task completion",
  "- Client participated in group activity\n- Initiated conversation 3 times\n- Shared materials appropriately\n- Needed prompting for transitions\n- Made good eye contact with peers",
];

export async function POST(req: NextRequest) {
  try {
    // Check for admin authorization (you may want to add proper auth checks)
    const body = await req.json();
    const { count, sampleTexts } = GenerateNotesSchema.parse(body);
    
    const textsToUse = sampleTexts && sampleTexts.length > 0 ? sampleTexts : DEFAULT_SAMPLES;
    const results = [];
    
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * textsToUse.length);
      const rawText = textsToUse[randomIndex];
      
      try {
        const generatedNote = await generateNote(rawText);
        const note = await prisma.sessionNote.create({
          data: { 
            rawText, 
            generatedNote 
          },
        });
        results.push(note);
      } catch (error) {
        console.error(`Failed to generate note ${i+1}:`, error);
        // Continue with other notes even if one fails
      }
    }
    
    return NextResponse.json({ 
      success: true, 
      generated: results.length,
      notes: results 
    }, { status: 201 });
  } catch (err: any) {
    console.error("Error generating notes:", err);
    return NextResponse.json({ 
      error: err.message || "Failed to generate notes" 
    }, { status: 400 });
  }
} 