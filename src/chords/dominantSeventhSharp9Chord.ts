import { Interval } from '../interval';
import { BaseChord } from './baseChord';
import { DominantSeventhChord } from './dominantSeventhChord';

export class DominantSeventhSharp9Chord extends BaseChord {
  public getName(): string {
    return `${this.root().getName()}7#9`;
  }

  public isMatch() {
    return (
      this.isQuintet() &&
      DominantSeventhChord.isMatch(this.getTetrad()) &&
      Interval.between(this.root(), this.fifth()).isAugmented9th()
    );
  }
}
