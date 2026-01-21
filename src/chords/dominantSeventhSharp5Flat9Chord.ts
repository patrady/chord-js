import { Interval } from '../interval';
import { BaseChord } from './baseChord';
import { DominantSeventhSharp5Chord } from './dominantSeventhSharp5Chord';

export class DominantSeventhSharp5Flat9Chord extends BaseChord {
  public getName(): string {
    return `${this.root().getName()}7#5b9`;
  }

  public isMatch() {
    return (
      this.isQuintet() &&
      new DominantSeventhSharp5Chord(this.getTetrad()).isMatch() &&
      Interval.between(this.root(), this.fifth()).isMinor9th()
    );
  }
}
