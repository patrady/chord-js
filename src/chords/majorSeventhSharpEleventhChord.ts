import { Interval } from '../interval';
import { BaseChord } from './baseChord';
import { MajorSeventhChord } from './majorSeventhChord';

export class MajorSeventhSharpEleventhChord extends BaseChord {
  public getName(): string {
    return `${this.root().getName()}maj7#11`;
  }

  public isMatch() {
    return (
      this.isQuintet() &&
      MajorSeventhChord.isMatch(this.getTetrad()) &&
      Interval.between(this.root(), this.fifth()).isAugmented11th()
    );
  }
}
