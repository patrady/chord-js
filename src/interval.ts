import { DefinedInterval } from './definedInterval';
import { Note } from './note';

export class Interval {
  public static between(note1: string | Note, note2: string | Note) {
    return new DefinedInterval(this.parse(note1), this.parse(note2));
  }

  public static isNone() {
    return 0;
  }

  public static major2nd() {
    return 2;
  }

  public static major3rd() {
    return 4;
  }

  public static perfect4th() {
    return 5;
  }

  public static perfect5th() {
    return 7;
  }

  public static major6th() {
    return 9;
  }

  public static major7th() {
    return 11;
  }

  public static octave() {
    return 12;
  }

  private static parse(note: string | Note) {
    if (typeof note === 'string') {
      return new Note(note);
    }

    return note;
  }
}
