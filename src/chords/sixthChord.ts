import { Interval } from '../interval';
import { BaseChord } from './baseChord';
import { MajorChord } from './majorChord';

export class SixthChord extends BaseChord {
  public getName(): string {
    return `${this.root().getName()}6`;
  }

  public isMatch() {
    return (
      this.isTetrad() &&
      new MajorChord(this.getTriad()).isMatch() &&
      Interval.between(this.root(), this.fourth()).isMajor6th()
    );
  }
}
