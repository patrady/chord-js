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
      new DiminishedChord(this.getNotes().slice(0, 3)).isMatch() &&
      Interval.between(this.root(), this.notes[3]).isDiminished(7)
    );
  }
}
