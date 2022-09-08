import { Interval } from "../interval";
import { BaseChord } from "./baseChord";
import { MinorChord } from "./minorChord";

export class MinorSeventhChord extends BaseChord {
  public getName(): string {
    return `${this.root().getName()}m7`;
  }

  public isMatch() {
    return (
      this.isTetrad() &&
      MinorChord.isMatch(this.getTriad()) &&
      Interval.between(this.root(), this.fourth()).isMinor7th()
    );
  }
}
