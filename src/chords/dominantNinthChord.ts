import { Interval } from '../interval';
import { BaseChord } from './baseChord';
import { DominantSeventhChord } from './dominantSeventhChord';

export class DominantNinthChord extends BaseChord {
  public getName(): string {
    return `${this.root().getName()}9`;
  }

  public isMatch() {
    return (
      this.isQuintet() &&
      DominantSeventhChord.isMatch(this.getTetrad()) &&
      Interval.between(this.root(), this.fifth()).isMajor9th()
    );
  }
}
