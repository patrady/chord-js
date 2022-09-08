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
      new MinorChord(this.getTriad()).isMatch() &&
      Interval.between(this.root(), this.fourth()).isMinor(7)
    );
  }
}
