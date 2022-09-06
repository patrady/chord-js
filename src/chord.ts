import {
  AugmentedChord,
  InvertedChord,
  MajorChord,
  MinorChord,
  SuspendedChord,
  SuspendedSecondChord,
  DiminishedChord,
  Strategy,
  IChord,
} from "./chords";
import { Note } from "./note";

export abstract class Chord {
  static strategies: Strategy[] = [
    MajorChord,
    MinorChord,
    SuspendedChord,
    SuspendedSecondChord,
    AugmentedChord,
    DiminishedChord,
  ];

  public static for(notes: string): IChord | undefined {
    const chordNotes = this.parse(notes);

    return this.getChord(chordNotes) || this.getInvertedChord(chordNotes);
  }

  private static getChord(notes: Note[]): IChord | undefined {
    return this.strategies
      .map((klass) => new klass(notes))
      .filter((chord) => chord.isMatch())[0];
  }

  private static getInvertedChord(notes: Note[]): IChord | undefined {
    return this.strategies
      .map((klass) => new InvertedChord(klass, new klass(notes)))
      .filter((chord) => chord.isMatch())[0];
  }

  private static parse(notes: string): Note[] {
    return notes.split(" ").map((note) => new Note(note));
  }
}
