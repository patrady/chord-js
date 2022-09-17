import { Note } from "../note";
import { BaseKeySignature } from "./baseKeySignature";

export class KeySignatureOfE extends BaseKeySignature {
  public getNotes(): Note[] {
    return [
      new Note('E4'),
      new Note('F#4'),
      new Note('G#4'),
      new Note('A4'),
      new Note('B4'),
      new Note('C#5'),
      new Note('D#5'),
      new Note('E5'),
    ];
  }
}
