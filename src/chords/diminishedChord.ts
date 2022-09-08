import { Interval } from "../interval";
import { BaseChord } from "./baseChord";

export class DiminishedChord extends BaseChord {
  public getName(): string {
    return `${this.root().getName()}dim`;
  }

  public isMatch() {
    return (
      this.isTriad() &&
      Interval.between(this.root(), this.second()).isMinor(3) &&
      Interval.between(this.root(), this.third()).isDiminished(5)
    );
  }
}
