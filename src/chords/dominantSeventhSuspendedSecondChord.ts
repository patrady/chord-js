import { Interval } from '../interval';
import { BaseChord } from './baseChord';
import { SuspendedSecondChord } from './suspendedSecondChord';

export class DominantSeventhSuspendedSecondChord extends BaseChord {
  public getName(): string {
    return `${this.root().getName()}7sus2`;
  }

  public isMatch() {
    return (
      this.isTetrad() &&
      SuspendedSecondChord.isMatch(this.getTriad()) &&
      Interval.between(this.root(), this.fourth()).isMinor7th()
    );
  }
}
