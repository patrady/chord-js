import { Interval } from '../interval';
import { BaseChord } from './baseChord';
import { MinorNinthFlat5Chord } from './minorNinthFlat5Chord';

export class MinorEleventhFlat5Chord extends BaseChord {
  public getName(): string {
    return `${this.root().getName()}m11b5`;
  }

  public isMatch() {
    return (
      this.isSextet() &&
      new MinorNinthFlat5Chord(this.getQuintet()).isMatch() &&
      Interval.between(this.root(), this.sixth()).isPerfect11th()
    );
  }
}
