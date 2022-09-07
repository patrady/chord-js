import { Interval } from "../interval";
import { BaseChord } from "./baseChord";
import { MajorChord } from "./majorChord";

export class DominantSeventhChord extends BaseChord {
  public getName(): string {
    return this.root().getName() + "7";
  }

  public isMatch() {
    return (
      this.isTetrad() &&
      new MajorChord(this.notes.slice(0, 3)).isMatch() &&
      Interval.between(this.root(), this.notes[3]).isMinor(7)
    );
  }
}
