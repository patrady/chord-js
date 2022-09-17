import { Note } from "../note";
import { BaseKeySignature } from "./baseKeySignature";

export class KeySignatureOfC extends BaseKeySignature {
  public getNotes(): Note[] {
    return [
      new Note('C4'),
      new Note('D4'),
      new Note('E4'),
      new Note('F4'),
      new Note('G4'),
      new Note('A4'),
      new Note('B4'),
      new Note('C5'),
    ];
  }
}
