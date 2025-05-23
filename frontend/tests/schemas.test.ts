import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { NoteInput } from '../src/lib/schemas.ts';

describe('NoteInput schema', () => {
  it('parses valid rawText', () => {
    const input = { rawText: 'Valid text' };
    const result = NoteInput.parse(input);
    assert.strictEqual(result.rawText, input.rawText);
  });

  it('throws error for empty rawText', () => {
    assert.throws(
      () => {
        NoteInput.parse({ rawText: '' });
      },
      /rawText/
    );
  });
}); 