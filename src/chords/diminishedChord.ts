import { Interval } from "../interval";
import { BaseChord } from "./baseChord";

export class DiminishedChord extends BaseChord {
  public getName(): string {
    return `${this.root().getName()}dim`;
  }

  public isMatch() {
    return (
      this.isTriad() &&
      Interval.between(this.root(), this.notes[1]).isMinor(3) &&
      Interval.between(this.root(), this.notes[2]).isDiminished(5)
    );
  }
}
