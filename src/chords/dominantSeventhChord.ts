import { Interval } from '../interval';
import { BaseChord } from './baseChord';
import { MajorChord } from './majorChord';
import { Note } from '../note';

export class DominantSeventhChord extends BaseChord {
  static isMatch(notes: Note[]) {
    return new DominantSeventhChord(notes).isMatch();
  }

  public getName(): string {
    return `${this.root().getName()}7`;
  }

  public isMatch() {
    return (
      this.isTetrad() &&
      MajorChord.isMatch(this.getTriad()) &&
      Interval.between(this.root(), this.fourth()).isMinor7th()
    );
  }
}
