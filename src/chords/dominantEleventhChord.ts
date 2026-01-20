import { Interval } from '../interval';
import { Note } from '../note';
import { BaseChord } from './baseChord';
import { DominantNinthChord } from './dominantNinthChord';

export class DominantEleventhChord extends BaseChord {
  public static isMatch(notes: Note[]) {
    return new DominantEleventhChord(notes).isMatch();
  }

  public getName(): string {
    return `${this.root().getName()}11`;
  }

  public isMatch() {
    return (
      this.isSextet() &&
      DominantNinthChord.isMatch(this.getQuintet()) &&
      Interval.between(this.root(), this.sixth()).isPerfect11th()
    );
  }
}
