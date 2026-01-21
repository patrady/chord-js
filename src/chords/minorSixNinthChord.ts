import { Interval } from '../interval';
import { BaseChord } from './baseChord';
import { MinorSixthChord } from './minorSixthChord';

export class MinorSixNinthChord extends BaseChord {
  public getName(): string {
    return `${this.root().getName()}m6/9`;
  }

  public isMatch() {
    return (
      this.isQuintet() &&
      new MinorSixthChord(this.getTetrad()).isMatch() &&
      Interval.between(this.root(), this.fifth()).isMajor9th()
    );
  }
}
