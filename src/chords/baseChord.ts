import { Note } from "../note";

export abstract class BaseChord {
  constructor(public notes: Note[]) {}

  public getNotes(): Note[] {
    return this.notes;
  }

  public root() {
    return this.getNotes()[0];
  }

  public isTriad(): boolean {
    return this.getNotes().length === 3;
  }

  public isTetrad(): boolean {
    return this.getNotes().length === 4;
  }

  public abstract isMatch(): boolean;
  public abstract getName(): string;
}
