import { Interval } from "../interval";
import { Note } from "../note";
import { IChord } from "./types";

export class SuspendedSecondChord implements IChord {
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
