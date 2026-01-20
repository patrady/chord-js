import { Interval } from '../interval';
import { BaseChord } from './baseChord';
import { DominantSeventhChord } from './dominantSeventhChord';

export class DominantMinorNinthChord extends BaseChord {
  public getName(): string {
    return `${this.root().getName()}7b9`;
  }

  public isMatch() {
    return (
      this.isQuintet() &&
      DominantSeventhChord.isMatch(this.getTetrad()) &&
      Interval.between(this.root(), this.fifth()).isMinor9th()
    );
  }
}
