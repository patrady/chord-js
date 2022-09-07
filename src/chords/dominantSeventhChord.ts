import { Interval } from "../interval";
import { BaseChord } from "./baseChord";
import { MajorChord } from "./majorChord";

export class DominantSeventhChord extends BaseChord {
  public getName(): string {
    return this.notes[0].getName() + "7";
  }

  public isMatch() {
    return (
      this.isTetrad() &&
      new MajorChord(this.notes.slice(0, 3)).isMatch() &&
      Interval.between(this.notes[0], this.notes[3]).isMinor(7)
    );
  }
}
