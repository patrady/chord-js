import { Interval } from "../interval";
import { Note } from "../note";
import { IChord } from "./types";

export class AugmentedChord implements IChord {
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
