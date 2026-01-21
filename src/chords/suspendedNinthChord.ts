import { Interval } from '../interval';
import { BaseChord } from './baseChord';
import { SuspendedChord } from './suspendedChord';

export class SuspendedNinthChord extends BaseChord {
  public getName(): string {
    return `${this.root().getName()}sus4add9`;
  }

  public isMatch() {
    return (
      this.isTetrad() &&
      Interval.between(this.root(), this.second()).isPerfect4th() &&
      Interval.between(this.root(), this.third()).isPerfect5th() &&
      Interval.between(this.root(), this.fourth()).isMajor9th()
    );
  }
}
