import { BaseChord, InvertedChord, strategies } from './chords';
import { Note } from './note';

export abstract class Chord {
  /**
   * Creates a chord from the notes
   * @example
   * // With a string
   * Chord.for('C E G')?.getName(); // C
   * 
   * // With notes
   * const C = Note.fromMidi(60);
   * const E = Note.fromMidi(64);
   * const G = Note.fromMidi(67);
   * Chord.for([C, E, G])?.getName(); // C
   */
  public static for(input: string | Note[]): BaseChord | undefined {
    const chordNotes = this.sanitizeInput(input);

    return this.getChord(chordNotes) || this.getInvertedChord(chordNotes);
  }

  private static sanitizeInput(notes: string | Note[]) {
    return this.sortByMidiValue(this.parse(notes));
  }

  private static parse(notes: string | Note[]): Note[] {
    if (Array.isArray(notes)) {
      return notes;
    }

    return notes.split(' ').map((note) => new Note(note));
  }

  private static sortByMidiValue(notes: Note[]) {
    return notes.sort((a, b) => a.getMidiValue() - b.getMidiValue());
  }

  private static getChord(notes: Note[]): BaseChord | undefined {
    for (const Strategy of strategies) {
      const chord = new Strategy(notes);
      if (chord.isMatch()) {
        return chord;
      }
    }
  }

  private static getInvertedChord(notes: Note[]): BaseChord | undefined {
    for (const Strategy of strategies) {
      const chord = new InvertedChord(Strategy, new Strategy(notes));
      if (chord.isMatch()) {
        return chord;
      }
    }
  }
}
