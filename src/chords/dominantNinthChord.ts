import { Interval } from '../interval';
import { Note } from '../note';
import { BaseChord } from './baseChord';
import { DominantSeventhChord } from './dominantSeventhChord';

export class DominantNinthChord extends BaseChord {
  public static isMatch(notes: Note[]) {
    return new DominantNinthChord(notes).isMatch();
  }

  public getName(): string {
    return `${this.root().getName()}9`;
  }

  public isMatch() {
    return (
      this.isQuintet() &&
      DominantSeventhChord.isMatch(this.getTetrad()) &&
      Interval.between(this.root(), this.fifth()).isMajor9th()
    );
  }
}
