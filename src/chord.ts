import { BaseChord, InvertedChord, strategies } from "./chords";
import { Note } from "./note";

export abstract class Chord {
  public static for(notes: string): BaseChord | undefined {
    const chordNotes = this.parse(notes);

    return this.getChord(chordNotes) || this.getInvertedChord(chordNotes);
  }

  private static getChord(notes: Note[]): BaseChord | undefined {
    return strategies
      .map((klass) => new klass(notes))
      .filter((chord) => chord.isMatch())[0];
  }

  private static getInvertedChord(notes: Note[]): BaseChord | undefined {
    return strategies
      .map((klass) => new InvertedChord(klass, new klass(notes)))
      .filter((chord) => chord.isMatch())[0];
  }

  private static parse(notes: string): Note[] {
    return notes.split(" ").map((note) => new Note(note));
  }
}
