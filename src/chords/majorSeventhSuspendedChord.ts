import { Interval } from '../interval';
import { BaseChord } from './baseChord';

export class MajorSeventhSuspendedChord extends BaseChord {
  public getName(): string {
    return `${this.root().getName()}maj7sus4`;
  }

  public isMatch() {
    return (
      this.isTetrad() &&
      Interval.between(this.root(), this.second()).isPerfect4th() &&
      Interval.between(this.root(), this.third()).isPerfect5th() &&
      Interval.between(this.root(), this.fourth()).isMajor7th()
    );
  }
}
