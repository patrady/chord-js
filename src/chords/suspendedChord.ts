import { Interval } from "../interval";
import { BaseChord } from "./baseChord";

export class SuspendedChord extends BaseChord {
  public getName(): string {
    return `${this.notes[0].getName()}sus`;
  }

  public isMatch() {
    return (
      this.isTriad() &&
      Interval.between(this.notes[0], this.notes[1]).isPerfect(4) &&
      Interval.between(this.notes[0], this.notes[2]).isPerfect(5)
    );
  }
}
