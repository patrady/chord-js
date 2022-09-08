import { Interval } from "../interval";
import { BaseChord } from "./baseChord";

export class SuspendedChord extends BaseChord {
  public getName(): string {
    return `${this.root().getName()}sus`;
  }

  public isMatch() {
    return (
      this.isTriad() &&
      Interval.between(this.root(), this.second()).isPerfect(4) &&
      Interval.between(this.root(), this.third()).isPerfect(5)
    );
  }
}
