import { Interval } from '../interval';
import { Note } from '../note';
import { BaseChord } from './baseChord';
import { MinorNinthChord } from './minorNinthChord';

export class MinorEleventhChord extends BaseChord {
  public static isMatch(notes: Note[]) {
    return new MinorEleventhChord(notes).isMatch();
  }

  public getName(): string {
    return `${this.root().getName()}m11`;
  }

  public isMatch() {
    return (
      this.isSextet() &&
      MinorNinthChord.isMatch(this.getQuintet()) &&
      Interval.between(this.root(), this.sixth()).isPerfect11th()
    );
  }
}
