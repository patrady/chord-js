import { Note } from "./note";

export class DefinedInterval {
  private semitones: number;

  constructor(public note1: Note, public note2: Note) {
    this.semitones = this.note2.minus(this.note1);
  }

  public getSemitones() {
    return this.semitones;
  }

  public isMajor2nd() {
    return this.semitones === 2;
  }

  public isMajor3rd() {
    return this.semitones === 4;
  }

  public isMajor6th() {
    return this.semitones === 9;
  }

  public isMajor7th() {
    return this.semitones === 11;
  }

  public isMinor2nd() {
    return this.semitones === 1;
  }

  public isMinor3rd() {
    return this.semitones === 3;
  }

  public isMinor6th() {
    return this.semitones === 8;
  }

  public isMinor7th() {
    return this.semitones === 10;
  }

  public isPerfect4th() {
    return this.semitones === 5;
  }

  public isPerfect5th() {
    return this.semitones === 7;
  }

  public isAugmented4th() {
    return this.semitones === 6;
  }

  public isAugmented5th() {
    return this.semitones === 8;
  }

  public isDiminished4th() {
    return this.semitones === 4;
  }

  public isDiminished5th() {
    return this.semitones === 6;
  }

  public isDiminished7th() {
    return this.semitones === 9;
  }
}
