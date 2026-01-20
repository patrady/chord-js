import { Interval } from '../interval';
import { Note } from '../note';
import { BaseChord } from './baseChord';
import { MajorSeventhChord } from './majorSeventhChord';

export class MajorNinthChord extends BaseChord {
  public static isMatch(notes: Note[]) {
    return new MajorNinthChord(notes).isMatch();
  }

  public getName(): string {
    return `${this.root().getName()}maj9`;
  }

  public isMatch() {
    return (
      this.isQuintet() &&
      MajorSeventhChord.isMatch(this.getTetrad()) &&
      Interval.between(this.root(), this.fifth()).isMajor9th()
    );
  }
}
