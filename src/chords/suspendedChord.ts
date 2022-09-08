import { Interval } from '../interval';
import { BaseChord } from './baseChord';

export class SuspendedChord extends BaseChord {
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
