import { Interval } from '../interval';
import { BaseChord } from './baseChord';

export class DominantSeventhFlat5Chord extends BaseChord {
  public getName(): string {
    return `${this.root().getName()}7b5`;
  }

  public isMatch() {
    return (
      this.isTetrad() &&
      Interval.between(this.root(), this.second()).isMajor3rd() &&
      Interval.between(this.root(), this.third()).isDiminished5th() &&
      Interval.between(this.root(), this.fourth()).isMinor7th()
    );
  }
}
