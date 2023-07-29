import { BaseChord, InvertedChord, strategies } from './chords';
import { Note } from './note';

export abstract class Chord {
  public static for(notes: string | Note[]): BaseChord | undefined {
    const chordNotes = this.parse(notes);

    return this.getChord(chordNotes) || this.getInvertedChord(chordNotes);
  }

  private static parse(notes: string | Note[]): Note[] {
    if (Array.isArray(notes)) {
      return notes;
    }

    return notes.split(' ').map((note) => new Note(note));
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
