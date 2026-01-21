import { Interval } from '../interval';
import { BaseChord } from './baseChord';
import { MajorChord } from './majorChord';

export class DominantSeventhSharp5Chord extends BaseChord {
  public getName(): string {
    return `${this.root().getName()}7#5`;
  }

  public isMatch() {
    return (
      this.isTetrad() &&
      Interval.between(this.root(), this.second()).isMajor3rd() &&
      Interval.between(this.root(), this.third()).isAugmented5th() &&
      Interval.between(this.root(), this.fourth()).isMinor7th()
    );
  }
}
