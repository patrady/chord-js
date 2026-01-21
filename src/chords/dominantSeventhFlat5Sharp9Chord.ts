import { Interval } from '../interval';
import { BaseChord } from './baseChord';
import { DominantSeventhFlat5Chord } from './dominantSeventhFlat5Chord';

export class DominantSeventhFlat5Sharp9Chord extends BaseChord {
  public getName(): string {
    return `${this.root().getName()}7b5#9`;
  }

  public isMatch() {
    return (
      this.isQuintet() &&
      new DominantSeventhFlat5Chord(this.getTetrad()).isMatch() &&
      Interval.between(this.root(), this.fifth()).isAugmented9th()
    );
  }
}
