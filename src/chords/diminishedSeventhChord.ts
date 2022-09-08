import { Interval } from "../interval";
import { BaseChord } from "./baseChord";
import { DiminishedChord } from "./diminishedChord";

export class DiminishedSeventhChord extends BaseChord {
  public getName(): string {
    return `${this.root().getName()}dim7`;
  }

  public isMatch() {
    return (
      this.isTetrad() &&
      new DiminishedChord(this.getTriad()).isMatch() &&
      Interval.between(this.root(), this.fourth()).isDiminished(7)
    );
  }
}
