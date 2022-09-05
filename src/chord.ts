import { Interval } from "./interval";
import { Note } from "./note";

interface IChord {
  isMatch(): boolean;
  getName(): string;
}

class MajorChord implements IChord {
  constructor(public notes: Note[]) {}

  public getName(): string {
    return `${this.notes[0].getName()} Major`;
  }

  public isMatch() {
    return (
      Interval.between(this.notes[0], this.notes[1]).isMajor(3) &&
      Interval.between(this.notes[0], this.notes[2]).isPerfect(5)
    );
  }
}

class MinorChord implements IChord {
  constructor(public notes: Note[]) {}

  public getName(): string {
    return `${this.notes[0].getName()} minor`;
  }

  public isMatch() {
    return (
      Interval.between(this.notes[0], this.notes[1]).isMinor(3) &&
      Interval.between(this.notes[0], this.notes[2]).isPerfect(5)
    );
  }
}

export abstract class Chord {
  static strategies = [MajorChord, MinorChord];

  public static for(notes: string): IChord | undefined {
    const chordNotes = this.parse(notes);

    return this.strategies
      .map((chordClass) => new chordClass(chordNotes))
      .filter((chord) => chord.isMatch())[0];
  }

  private static parse(notes: string): Note[] {
    return notes.split(" ").map((note) => new Note(note));
  }
}
