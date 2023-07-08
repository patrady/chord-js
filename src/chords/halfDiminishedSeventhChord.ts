import { Interval } from '../interval';
import { BaseChord } from './baseChord';
import { DiminishedChord } from './diminishedChord';

export class HalfDiminishedSeventhChord extends BaseChord {
  public getName(): string {
    return `${this.root().getName()}ø7`;
  }

  public isMatch() {
    return (
      this.isTetrad() &&
      DiminishedChord.isMatch(this.getTriad()) &&
      Interval.between(this.root(), this.fourth()).isMinor7th()
    );
  }
}
