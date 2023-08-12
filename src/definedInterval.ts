import { Interval } from './interval';
import { Note } from './note';

export class DefinedInterval {
  private semitones: number;

  constructor(public note1: Note, public note2: Note) {
    this.semitones = this.note2.minus(this.note1);
  }

  public getSemitones() {
    return this.semitones;
  }

  public isWithinSemitones(semitones: number) {
    return this.semitones <= semitones;
  }

  public isNone() {
    return this.semitones === Interval.isNone();
  }

  public isMajor2nd() {
    return this.semitones === Interval.major2nd();
  }

  public isMajor3rd() {
    return this.semitones === Interval.major3rd();
  }

  public isMajor6th() {
    return this.semitones === Interval.major6th();
  }

  public isMajor7th() {
    return this.semitones === Interval.major7th();
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
    return this.semitones === Interval.perfect4th();
  }

  public isPerfect5th() {
    return this.semitones === Interval.perfect5th();
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
