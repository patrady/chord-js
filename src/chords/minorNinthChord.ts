import { Interval } from '../interval';
import { Note } from '../note';
import { BaseChord } from './baseChord';
import { MinorSeventhChord } from './minorSeventhChord';

export class MinorNinthChord extends BaseChord {
  public static isMatch(notes: Note[]) {
    return new MinorNinthChord(notes).isMatch();
  }

  public getName(): string {
    return `${this.root().getName()}m9`;
  }

  public isMatch() {
    return (
      this.isQuintet() &&
      MinorSeventhChord.isMatch(this.getTetrad()) &&
      Interval.between(this.root(), this.fifth()).isMajor9th()
    );
  }
}
