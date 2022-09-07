import { Interval } from "../interval";
import { BaseChord } from "./baseChord";
import { MajorChord } from "./majorChord";

export class MajorSeventhChord extends BaseChord {
  public getName(): string {
    return this.root().getName() + "maj7";
  }

  public isMatch() {
    return (
      this.isTetrad() &&
      new MajorChord(this.notes.slice(0, 3)).isMatch() &&
      Interval.between(this.root(), this.notes[3]).isMajor(7)
    );
  }
}
