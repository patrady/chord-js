import { Interval } from '../interval';
import { Note } from '../note';
import { BaseChord } from './baseChord';

export class AugmentedChord extends BaseChord {
  public static isMatch(notes: Note[]) {
    return new AugmentedChord(notes).isMatch();
  }

  public getName(): string {
    return `${this.root().getName()}aug`;
  }

  public isMatch() {
    return (
      this.isTriad() &&
      Interval.between(this.root(), this.second()).isMajor3rd() &&
      Interval.between(this.root(), this.third()).isAugmented5th()
    );
  }
}
