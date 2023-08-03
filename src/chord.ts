import { BaseChord, InvertedChord, strategies } from './chords';
import { Note } from './note';
import { InputSanitization } from './utils';

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
    const chordNotes = new InputSanitization(input).call();

    return this.getChord(chordNotes) || this.getInvertedChord(chordNotes);
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
      const chord = new InvertedChord(Strategy, notes);
      if (chord.isMatch()) {
        return chord;
      }
    }
  }
}
