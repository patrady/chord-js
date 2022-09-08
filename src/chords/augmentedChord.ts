import { Interval } from "../interval";
import { BaseChord } from "./baseChord";

export class AugmentedChord extends BaseChord {
  public getName(): string {
    return `${this.root().getName()}aug`;
  }

  public isMatch() {
    return (
      this.isTriad() &&
      Interval.between(this.root(), this.second()).isMajor3rd() &&
      Interval.between(this.root(), this.third()).isAugmented5th()
    );
  }
}
