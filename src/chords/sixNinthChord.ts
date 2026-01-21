import { Interval } from '../interval';
import { BaseChord } from './baseChord';
import { SixthChord } from './sixthChord';

export class SixNinthChord extends BaseChord {
  public getName(): string {
    return `${this.root().getName()}6/9`;
  }

  public isMatch() {
    return (
      this.isQuintet() &&
      new SixthChord(this.getTetrad()).isMatch() &&
      Interval.between(this.root(), this.fifth()).isMajor9th()
    );
  }
}
