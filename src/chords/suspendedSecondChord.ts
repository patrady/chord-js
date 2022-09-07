import { Interval } from "../interval";
import { BaseChord } from "./baseChord";

export class SuspendedSecondChord extends BaseChord {
  public getName(): string {
    return `${this.notes[0].getName()}sus2`;
  }

  public isMatch() {
    return (
      this.isTriad() &&
      Interval.between(this.notes[0], this.notes[1]).isMajor(2) &&
      Interval.between(this.notes[0], this.notes[2]).isPerfect(5)
    );
  }
}
