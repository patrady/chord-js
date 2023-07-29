import { Interval } from '../interval';
import { BaseChord } from './baseChord';
import { MinorChord } from './minorChord';

export class MinorSixthChord extends BaseChord {
  public getName(): string {
    return `${this.root().getName()}m6`;
  }

  public isMatch() {
    return (
      this.isTetrad() &&
      MinorChord.isMatch(this.getTriad()) &&
      Interval.between(this.root(), this.fourth()).isMajor6th()
    );
  }
}
