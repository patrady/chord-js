import { Interval } from '../interval';
import { Note } from '../note';
import { BaseChord } from './baseChord';
import { MajorChord } from './majorChord';

export class MajorSeventhChord extends BaseChord {
  public static isMatch(notes: Note[]) {
    return new MajorSeventhChord(notes).isMatch();
  }

  public getName(): string {
    return `${this.root().getName()}maj7`;
  }

  public isMatch() {
    return (
      this.isTetrad() &&
      MajorChord.isMatch(this.getTriad()) &&
      Interval.between(this.root(), this.fourth()).isMajor7th()
    );
  }
}
