import { Interval } from '../interval';
import { BaseChord } from './baseChord';
import { MajorChord } from './majorChord';

export class AddNinthChord extends BaseChord {
  public getName(): string {
    return `${this.root().getName()}add9`;
  }

  public isMatch() {
    return (
      this.isTetrad() &&
      MajorChord.isMatch(this.getTriad()) &&
      Interval.between(this.root(), this.fourth()).isMajor9th()
    );
  }
}
