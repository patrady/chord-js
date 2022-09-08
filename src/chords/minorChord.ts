import { Interval } from '../interval';
import { Note } from '../note';
import { BaseChord } from './baseChord';

export class MinorChord extends BaseChord {
  public static isMatch(notes: Note[]) {
    return new MinorChord(notes).isMatch();
  }

  public getName(): string {
    return `${this.root().getName()}m`;
  }

  public isMatch() {
    return (
      this.isTriad() &&
      Interval.between(this.root(), this.second()).isMinor3rd() &&
      Interval.between(this.root(), this.third()).isPerfect5th()
    );
  }
}
