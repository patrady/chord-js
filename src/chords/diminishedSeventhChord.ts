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
      DiminishedChord.isMatch(this.getTriad()) &&
      Interval.between(this.root(), this.fourth()).isDiminished7th()
    );
  }
}
