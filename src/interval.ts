import { DefinedInterval } from './definedInterval';
import { Note } from './note';

export class Interval {
  public static between(note1: string | Note, note2: string | Note) {
    return new DefinedInterval(this.parse(note1), this.parse(note2));
  }

  private static parse(note: string | Note) {
    if (typeof note === 'string') {
      return new Note(note);
    }

    return note;
  }
}
