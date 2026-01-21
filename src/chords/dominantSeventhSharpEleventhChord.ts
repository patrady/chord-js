import { Interval } from '../interval';
import { BaseChord } from './baseChord';
import { DominantSeventhChord } from './dominantSeventhChord';

export class DominantSeventhSharpEleventhChord extends BaseChord {
  public getName(): string {
    return `${this.root().getName()}7#11`;
  }

  public isMatch() {
    return (
      this.isQuintet() &&
      DominantSeventhChord.isMatch(this.getTetrad()) &&
      Interval.between(this.root(), this.fifth()).isAugmented11th()
    );
  }
}
