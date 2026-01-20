import { Interval } from '../interval';
import { Note } from '../note';
import { BaseChord } from './baseChord';
import { MajorNinthChord } from './majorNinthChord';

export class MajorNinthSharpEleventhChord extends BaseChord {
  public static isMatch(notes: Note[]) {
    return new MajorNinthSharpEleventhChord(notes).isMatch();
  }

  public getName(): string {
    return `${this.root().getName()}maj9#11`;
  }

  public isMatch() {
    return (
      this.isSextet() &&
      MajorNinthChord.isMatch(this.getQuintet()) &&
      Interval.between(this.root(), this.sixth()).isAugmented11th()
    );
  }
}
