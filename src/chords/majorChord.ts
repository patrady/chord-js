import { Interval } from "../interval";
import { BaseChord } from "./baseChord";

export class MajorChord extends BaseChord {
  public getName(): string {
    return this.notes[0].getName();
  }

  public isMatch() {
    return (
      this.isTriad() &&
      Interval.between(this.notes[0], this.notes[1]).isMajor(3) &&
      Interval.between(this.notes[0], this.notes[2]).isPerfect(5)
    );
  }
}
