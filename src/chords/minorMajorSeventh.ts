import { Interval } from '../interval';
import { BaseChord } from './baseChord';
import { MinorChord } from './minorChord';

export class MinorMajorSeventhChord extends BaseChord {
  public getName(): string {
    return `${this.root().getName()}m7+`;
  }

  public isMatch() {
    return (
      this.isTetrad() &&
      MinorChord.isMatch(this.getTriad()) &&
      Interval.between(this.root(), this.fourth()).isMajor7th()
    );
  }
}
