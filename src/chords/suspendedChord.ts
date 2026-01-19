import { Interval } from '../interval';
import { Note } from '../note';
import { BaseChord } from './baseChord';

export class SuspendedChord extends BaseChord {
  public static isMatch(notes: Note[]) {
    return new SuspendedChord(notes).isMatch();
  }

  public getName(): string {
    return `${this.root().getName()}sus`;
  }

  public isMatch() {
    return (
      this.isTriad() &&
      Interval.between(this.root(), this.second()).isPerfect4th() &&
      Interval.between(this.root(), this.third()).isPerfect5th()
    );
  }
}
