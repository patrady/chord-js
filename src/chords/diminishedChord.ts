import { Interval } from "../interval";
import { Note } from "../note";
import { BaseChord } from "./baseChord";

export class DiminishedChord extends BaseChord {
  public static isMatch(notes: Note[]) {
    return new DiminishedChord(notes).isMatch();
  }

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
