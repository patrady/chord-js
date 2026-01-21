import { Interval } from '../interval';
import { BaseChord } from './baseChord';
import { HalfDiminishedSeventhChord } from './halfDiminishedSeventhChord';

export class MinorNinthFlat5Chord extends BaseChord {
  public getName(): string {
    return `${this.root().getName()}m9b5`;
  }

  public isMatch() {
    return (
      this.isQuintet() &&
      new HalfDiminishedSeventhChord(this.getTetrad()).isMatch() &&
      Interval.between(this.root(), this.fifth()).isMajor9th()
    );
  }
}
