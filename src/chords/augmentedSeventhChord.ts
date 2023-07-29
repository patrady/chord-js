import { Interval } from '../interval';
import { AugmentedChord } from './augmentedChord';
import { BaseChord } from './baseChord';

export class AugmentedSeventhChord extends BaseChord {
  public getName(): string {
    return `${this.root().getName()}+7`;
  }

  public isMatch() {
    return (
      this.isTetrad() &&
      AugmentedChord.isMatch(this.getTriad()) &&
      Interval.between(this.root(), this.fourth()).isMinor7th()
    );
  }
}
