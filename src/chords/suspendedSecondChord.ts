import { Interval } from "../interval";
import { BaseChord } from "./baseChord";

export class SuspendedSecondChord extends BaseChord {
  public getName(): string {
    return `${this.root().getName()}sus2`;
  }

  public isMatch() {
    return (
      this.isTriad() &&
      Interval.between(this.root(), this.notes[1]).isMajor(2) &&
      Interval.between(this.root(), this.notes[2]).isPerfect(5)
    );
  }
}
