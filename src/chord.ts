import { Interval } from "./interval";
import { Note } from "./note";
import { invertArray } from "./utils";

interface IChord {
  getNotes(): Note[];
  isMatch(): boolean;
  getName(): string;
}

type Strategy<T = IChord> = { new (notes: Note[]): T };

class MajorChord implements IChord {
  constructor(public notes: Note[]) {}

  public getName(): string {
    return this.notes[0].getName();
  }

  public getNotes(): Note[] {
    return this.notes;
  }

  public isMatch() {
    return (
      Interval.between(this.notes[0], this.notes[1]).isMajor(3) &&
      Interval.between(this.notes[0], this.notes[2]).isPerfect(5)
    );
  }
}

class InvertedChord implements IChord {
  DecoratedClass: Strategy;
  baseNote: Note;
  chord: IChord;

  constructor(decoratedClass: Strategy, chord: IChord) {
    this.DecoratedClass = decoratedClass;
    this.chord = chord;
    this.baseNote = chord.getNotes()[0];
  }

  public getName(): string {
    return `${this.chord.getName()}/${this.baseNote.getName()}`;
  }

  public getNotes(): Note[] {
    return this.chord.getNotes();
  }

  public isMatch() {
    let index = 1;
    do {
      const invertedChord = new this.DecoratedClass(
        invertArray(this.chord.getNotes(), index)
      );

      if (invertedChord.isMatch()) {
        this.chord = invertedChord;
        return true;
      }
    } while (index++ < this.chord.getNotes().length);

    return false;
  }
}

class MinorChord implements IChord {
  constructor(public notes: Note[]) {}

  public getName(): string {
    return `${this.notes[0].getName()}m`;
  }

  public getNotes(): Note[] {
    return this.notes;
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

  public getNotes(): Note[] {
    return this.notes;
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

  public getNotes(): Note[] {
    return this.notes;
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

  public getNotes(): Note[] {
    return this.notes;
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

  public getNotes(): Note[] {
    return this.notes;
  }

  public isMatch() {
    return (
      Interval.between(this.notes[0], this.notes[1]).isMinor(3) &&
      Interval.between(this.notes[0], this.notes[2]).isDiminished(5)
    );
  }
}

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
