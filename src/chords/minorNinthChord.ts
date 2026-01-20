import { Interval } from '../interval';
import { BaseChord } from './baseChord';
import { MinorSeventhChord } from './minorSeventhChord';

export class MinorNinthChord extends BaseChord {
  public getName(): string {
    return `${this.root().getName()}m9`;
  }

  public isMatch() {
    return (
      this.isQuintet() &&
      MinorSeventhChord.isMatch(this.getTetrad()) &&
      Interval.between(this.root(), this.fifth()).isMajor9th()
    );
  }
}
