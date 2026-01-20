import { Interval } from '../interval';
import { Note } from '../note';
import { BaseChord } from './baseChord';
import { MajorNinthChord } from './majorNinthChord';

export class MajorEleventhChord extends BaseChord {
  public static isMatch(notes: Note[]) {
    return new MajorEleventhChord(notes).isMatch();
  }

  public getName(): string {
    return `${this.root().getName()}maj11`;
  }

  public isMatch() {
    return (
      this.isSextet() &&
      MajorNinthChord.isMatch(this.getQuintet()) &&
      Interval.between(this.root(), this.sixth()).isPerfect11th()
    );
  }
}
