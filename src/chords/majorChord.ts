import { Interval } from "../interval";
import { Note } from "../note";
import { BaseChord } from "./baseChord";

export class MajorChord extends BaseChord {
  public static isMatch(notes: Note[]) {
    return new MajorChord(notes).isMatch();
  }

  public getName(): string {
    return this.root().getName();
  }

  public isMatch() {
    return (
      this.isTriad() &&
      Interval.between(this.root(), this.second()).isMajor(3) &&
      Interval.between(this.root(), this.third()).isPerfect(5)
    );
  }
}
