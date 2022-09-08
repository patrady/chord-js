import { Note } from "./note";

export class Interval {
  public static between(note1: string | Note, note2: string | Note) {
    return new DefinedInterval(this.parse(note1), this.parse(note2));
  }

  private static parse(note: string | Note) {
    if (typeof note === "string") {
      return new Note(note);
    }

    return note;
  }
}

class DefinedInterval {
  constructor(public note1: Note, public note2: Note) {}

  public toSemitones(): number {
    return this.note2.minus(this.note1);
  }

  public isMajor(interval: 2 | 3 | 6 | 7) {
    switch (interval) {
      case 2:
        return this.toSemitones() === 2;
      case 3:
        return this.toSemitones() === 4;
      case 6:
        return this.toSemitones() === 9;
      case 7:
        return this.toSemitones() === 11;
    }
  }

  public isMinor(interval: 2 | 3 | 6 | 7) {
    switch (interval) {
      case 2:
        return this.toSemitones() === 1;
      case 3:
        return this.toSemitones() === 3;
      case 6:
        return this.toSemitones() === 8;
      case 7:
        return this.toSemitones() === 10;
    }
  }

  public isPerfect(interval: 4 | 5) {
    switch (interval) {
      case 4:
        return this.toSemitones() === 5;
      case 5:
        return this.toSemitones() === 7;
    }
  }

  public isAugmented(interval: 4 | 5) {
    switch (interval) {
      case 4:
        return this.toSemitones() === 6;
      case 5:
        return this.toSemitones() === 8;
    }
  }

  public isDiminished(interval: 4 | 5 | 7) {
    switch (interval) {
      case 4:
        return this.toSemitones() === 4;
      case 5:
        return this.toSemitones() === 6;
      case 7:
        return this.toSemitones() === 9;
    }
  }
}
