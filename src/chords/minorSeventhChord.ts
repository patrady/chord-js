import { Interval } from '../interval';
import { BaseChord } from './baseChord';
import { MinorChord } from './minorChord';
import { Note } from '../note';

export class MinorSeventhChord extends BaseChord {
  static isMatch(notes: Note[]) {
    return new MinorSeventhChord(notes).isMatch();
  }

  public getName(): string {
    return `${this.root().getName()}m7`;
  }

  public isMatch() {
    return (
      this.isTetrad() &&
      MinorChord.isMatch(this.getTriad()) &&
      Interval.between(this.root(), this.fourth()).isMinor7th()
    );
  }
}
