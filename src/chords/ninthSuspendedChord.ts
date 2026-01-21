import { Interval } from '../interval';
import { BaseChord } from './baseChord';
import { DominantSeventhSuspendedChord } from './dominantSeventhSuspendedChord';

export class NinthSuspendedChord extends BaseChord {
  public getName(): string {
    return `${this.root().getName()}9sus4`;
  }

  public isMatch() {
    return (
      this.isQuintet() &&
      new DominantSeventhSuspendedChord(this.getTetrad()).isMatch() &&
      Interval.between(this.root(), this.fifth()).isMajor9th()
    );
  }
}
