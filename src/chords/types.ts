import { Note } from "../note";

export interface IChord {
  getNotes(): Note[];
  isMatch(): boolean;
  getName(): string;
}

export type Strategy<T = IChord> = { new (notes: Note[]): T };
