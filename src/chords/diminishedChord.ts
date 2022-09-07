import { Interval } from "../interval";
import { BaseChord } from "./baseChord";

export class DiminishedChord extends BaseChord {
  public getName(): string {
    return `${this.notes[0].getName()}dim`;
  }

  public isMatch() {
    return (
      this.isTriad() &&
      Interval.between(this.notes[0], this.notes[1]).isMinor(3) &&
      Interval.between(this.notes[0], this.notes[2]).isDiminished(5)
    );
  }
}
