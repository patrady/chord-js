import { Interval } from '../interval';
import { BaseChord } from './baseChord';
import { MajorChord } from './majorChord';

export class MajorSeventhChord extends BaseChord {
  public getName(): string {
    return `${this.root().getName()}maj7`;
  }

  public isMatch() {
    return (
      this.isTetrad() &&
      MajorChord.isMatch(this.getTriad()) &&
      Interval.between(this.root(), this.fourth()).isMajor7th()
    );
  }
}
