import { Interval } from "../interval";
import { BaseChord } from "./baseChord";

export class MinorChord extends BaseChord {
  public getName(): string {
    return `${this.root().getName()}m`;
  }

  public isMatch() {
    return (
      this.isTriad() &&
      Interval.between(this.root(), this.notes[1]).isMinor(3) &&
      Interval.between(this.root(), this.notes[2]).isPerfect(5)
    );
  }
}
