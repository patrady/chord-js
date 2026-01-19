import { Interval } from '../interval';
import { Note } from '../note';
import { BaseChord } from './baseChord';

export class SuspendedSecondChord extends BaseChord {
  public static isMatch(notes: Note[]) {
    return new SuspendedSecondChord(notes).isMatch();
  }

  public getName(): string {
    return `${this.root().getName()}sus2`;
  }

  public isMatch() {
    return (
      this.isTriad() &&
      Interval.between(this.root(), this.second()).isMajor2nd() &&
      Interval.between(this.root(), this.third()).isPerfect5th()
    );
  }
}
