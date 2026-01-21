import { Interval } from '../interval';
import { BaseChord } from './baseChord';
import { AugmentedMajorSeventhChord } from './augmentedMajorSeventhChord';

export class MajorNinthSharp5Chord extends BaseChord {
  public getName(): string {
    return `${this.root().getName()}maj9#5`;
  }

  public isMatch() {
    return (
      this.isQuintet() &&
      new AugmentedMajorSeventhChord(this.getTetrad()).isMatch() &&
      Interval.between(this.root(), this.fifth()).isMajor9th()
    );
  }
}
