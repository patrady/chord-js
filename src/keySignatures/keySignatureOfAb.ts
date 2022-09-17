import { Note } from "../note";
import { BaseKeySignature } from "./baseKeySignature";

export class KeySignatureOfAb extends BaseKeySignature {
  public getNotes(): Note[] {
    return [
      new Note('Ab4'),
      new Note('Bb4'),
      new Note('C5'),
      new Note('Db5'),
      new Note('Eb5'),
      new Note('F5'),
      new Note('G5'),
      new Note('Ab5'),
    ];
  }
}
