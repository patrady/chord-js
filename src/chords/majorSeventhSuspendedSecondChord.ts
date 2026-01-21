import { Interval } from '../interval';
import { BaseChord } from './baseChord';

export class MajorSeventhSuspendedSecondChord extends BaseChord {
  public getName(): string {
    return `${this.root().getName()}maj7sus2`;
  }

  public isMatch() {
    return (
      this.isTetrad() &&
      Interval.between(this.root(), this.second()).isMajor2nd() &&
      Interval.between(this.root(), this.third()).isPerfect5th() &&
      Interval.between(this.root(), this.fourth()).isMajor7th()
    );
  }
}
