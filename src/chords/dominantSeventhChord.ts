import { Interval } from "../interval";
import { BaseChord } from "./baseChord";
import { MajorChord } from "./majorChord";

export class DominantSeventhChord extends BaseChord {
  public getName(): string {
    return `${this.root().getName()}7`;
  }

  public isMatch() {
    return (
      this.isTetrad() &&
      MajorChord.isMatch(this.getTriad()) &&
      Interval.between(this.root(), this.fourth()).isMinor(7)
    );
  }
}
