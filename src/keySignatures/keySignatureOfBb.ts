import { Note } from "../note";
import { BaseKeySignature } from "./baseKeySignature";

export class KeySignatureOfBb extends BaseKeySignature {
  public getNotes(): Note[] {
    return [
      new Note('Bb4'),
      new Note('C5'),
      new Note('D5'),
      new Note('E5'),
      new Note('F5'),
      new Note('G5'),
      new Note('A5'),
      new Note('Bb5'),
    ];
  }
}
