import { Interval } from "../interval";
import { Note } from "../note";
import { IChord } from "./types";

export class SuspendedChord implements IChord {
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
