import { Interval } from '../interval';
import { BaseChord } from './baseChord';
import { MajorSeventhChord } from './majorSeventhChord';

export class MajorNinthChord extends BaseChord {
  public getName(): string {
    return `${this.root().getName()}maj9`;
  }

  public isMatch() {
    return (
      this.isQuintet() &&
      MajorSeventhChord.isMatch(this.getTetrad()) &&
      Interval.between(this.root(), this.fifth()).isMajor9th()
    );
  }
}
