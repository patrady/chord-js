import { Interval } from "./interval";
import { Note } from "./note";

export class Chord {
  notes: Note[];

  constructor(notes: string) {
    this.notes = this.parse(notes);
  }

  public getName() {
    if (this.isMajor()) {
      return this.notes[0].getName() + " Major";
    }

    return "";
  }

  isMajor() {
    return (
      Interval.between(this.notes[0], this.notes[1]).isMajor(3) &&
      Interval.between(this.notes[0], this.notes[2]).isPerfect(5)
    );
  }

  private parse(notes: string): Note[] {
    return notes.split(" ").map((note) => new Note(note));
  }
}
