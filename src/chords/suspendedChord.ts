import { Interval } from "../interval";
import { BaseChord } from "./baseChord";

export class SuspendedChord extends BaseChord {
  public getName(): string {
    return `${this.root().getName()}sus`;
  }

  public isMatch() {
    return (
      this.isTriad() &&
      Interval.between(this.root(), this.notes[1]).isPerfect(4) &&
      Interval.between(this.root(), this.notes[2]).isPerfect(5)
    );
  }
}
