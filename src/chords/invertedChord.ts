import { Note } from '../note';
import { invertArray } from '../utils';
import { BaseChord } from './baseChord';

export type Strategy = new (notes: Note[]) => BaseChord;

export class InvertedChord extends BaseChord {
  DecoratedClass: Strategy;
  baseNote: Note;
  chord: BaseChord;

  constructor(DecoratedClass: Strategy, notes: Note[]) {
    super(notes);

    this.DecoratedClass = DecoratedClass;
    this.chord = new DecoratedClass(notes);
    this.baseNote = this.root();
  }

  public getName(): string {
    return `${this.chord.getName()}/${this.baseNote.getName()}`;
  }

  public getNotes(): Note[] {
    return this.chord.getNotes();
  }

  public isMatch() {
    let index = 1;
    do {
      const invertedChord = new this.DecoratedClass(invertArray(this.chord.getNotes(), index));

      if (invertedChord.isMatch()) {
        this.chord = invertedChord;
        return true;
      }
    } while (index++ < this.chord.getNotes().length);

    return false;
  }
}
