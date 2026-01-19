import { Interval } from '../interval';
import { BaseChord } from './baseChord';
import { SuspendedChord } from './suspendedChord';
import { Chord } from '../chord';

export class DominantSeventhSuspendedChord extends BaseChord {
  public getName(): string {
    return `${this.root().getName()}7sus4`;
  }

  public isMatch() {
    return (
      this.isTetrad() &&
      SuspendedChord.isMatch(this.getTriad()) &&
      Interval.between(this.root(), this.fourth()).isMinor7th()
    );
  }
}
