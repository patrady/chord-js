import { Interval } from "../interval";
import { BaseChord } from "./baseChord";
import { MinorChord } from "./minorChord";

export class MinorSeventhChord extends BaseChord {
  public getName(): string {
    return this.root().getName() + "m7";
  }

  public isMatch() {
    return (
      this.isTetrad() &&
      new MinorChord(this.notes.slice(0, 3)).isMatch() &&
      Interval.between(this.root(), this.notes[3]).isMinor(7)
    );
  }
}
