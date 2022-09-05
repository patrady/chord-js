import { Interval } from "./interval";
import { Note } from "./note";
import { invertArray } from "./utils";

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

abstract class InvertedChord implements IChord {
  base: Note;

  constructor(public notes: Note[]) {
    this.base = notes[0];
  }

  public abstract getName(): string;
  public abstract isInversionMatch(index: number): boolean;

  public isMatch() {
    let index = 1;
    do {
      if (this.isInversionMatch(index)) {
        this.base = this.notes[index];
        return true;
      }
    } while (index++ < this.notes.length);

    return false;
  }
}

class InvertedMajorChord extends InvertedChord {
  public getName(): string {
    return `${this.base.getName()}/${this.notes[0].getName()}`;
  }

  public isInversionMatch(index: number): boolean {
    return new MajorChord(invertArray(this.notes, index)).isMatch();
  }
}

class InvertedMinorChord extends InvertedChord {
  public getName(): string {
    return `${this.base.getName()}m/${this.notes[0].getName()}`;
  }

  public isInversionMatch(index: number): boolean {
    return new MinorChord(invertArray(this.notes, index)).isMatch();
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

class SuspendedChord implements IChord {
  constructor(public notes: Note[]) {}

  public getName(): string {
    return `${this.notes[0].getName()}sus`;
  }

  public isMatch() {
    return (
      Interval.between(this.notes[0], this.notes[1]).isPerfect(4) &&
      Interval.between(this.notes[0], this.notes[2]).isPerfect(5)
    );
  }
}

class SuspendedSecondChord implements IChord {
  constructor(public notes: Note[]) {}

  public getName(): string {
    return `${this.notes[0].getName()}sus2`;
  }

  public isMatch() {
    return (
      Interval.between(this.notes[0], this.notes[1]).isMajor(2) &&
      Interval.between(this.notes[0], this.notes[2]).isPerfect(5)
    );
  }
}

class AugmentedChord implements IChord {
  constructor(public notes: Note[]) {}

  public getName(): string {
    return `${this.notes[0].getName()}aug`;
  }

  public isMatch() {
    return (
      Interval.between(this.notes[0], this.notes[1]).isMajor(3) &&
      Interval.between(this.notes[0], this.notes[2]).isAugmented(5)
    );
  }
}

class DiminishedChord implements IChord {
  constructor(public notes: Note[]) {}

  public getName(): string {
    return `${this.notes[0].getName()}dim`;
  }

  public isMatch() {
    return (
      Interval.between(this.notes[0], this.notes[1]).isMinor(3) &&
      Interval.between(this.notes[0], this.notes[2]).isDiminished(5)
    );
  }
}

export abstract class Chord {
  static strategies = [
    MajorChord,
    MinorChord,
    SuspendedChord,
    SuspendedSecondChord,
    InvertedMajorChord,
    InvertedMinorChord,
    AugmentedChord,
    DiminishedChord
  ];

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
