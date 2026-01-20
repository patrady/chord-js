import { Interval } from '../interval';
import { Note } from '../note';
import { BaseChord } from './baseChord';
import { DominantNinthChord } from './dominantNinthChord';

export class DominantSharpEleventhChord extends BaseChord {
  public static isMatch(notes: Note[]) {
    return new DominantSharpEleventhChord(notes).isMatch();
  }

  public getName(): string {
    return `${this.root().getName()}9#11`;
  }

  public isMatch() {
    return (
      this.isSextet() &&
      DominantNinthChord.isMatch(this.getQuintet()) &&
      Interval.between(this.root(), this.sixth()).isAugmented11th()
    );
  }
}
