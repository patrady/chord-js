import { Interval } from '../interval';
import { BaseChord } from './baseChord';
import { AugmentedSeventhChord } from './augmentedSeventhChord';

export class AugmentedNinthChord extends BaseChord {
  public getName(): string {
    return `${this.root().getName()}+9`;
  }

  public isMatch() {
    return (
      this.isQuintet() &&
      new AugmentedSeventhChord(this.getTetrad()).isMatch() &&
      Interval.between(this.root(), this.fifth()).isMajor9th()
    );
  }
}
